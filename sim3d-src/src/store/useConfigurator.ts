import { create } from 'zustand'
import { ZONES, ZONE_BY_ID, type CameraViewId, type MaterialId, type PatternId, type ZoneId } from '../data/zones'
import { COLOR_BY_ID } from '../data/colors'
import { MATERIALS, PATTERNS } from '../data/materials'
import { detectTier, type Tier } from '../lib/capabilities'

export interface ZoneCfg { material: MaterialId; color: string; pattern: PatternId }
export type Config = Record<ZoneId, ZoneCfg>
export type Lighting = 'showroom' | 'day' | 'night'
export type QualityPref = 'auto' | Tier
export interface Snapshot { view: string; label: string; url: string }

const z = (material: MaterialId, color: string, pattern: PatternId = 'plain'): ZoneCfg => ({ material, color, pattern })

export const DEFAULT_CONFIG: Config = {
  seat_cushion: z('leather_smooth', 'cognac'),
  seat_back: z('leather_smooth', 'cognac'),
  seat_bolster: z('leather_smooth', 'noir'),
  seat_headrest: z('leather_smooth', 'noir'),
  wheel: z('leather_perforated', 'noir'),
  belts: z('webbing', 'noir'),
  headliner: z('alcantara', 'anthracite'),
  door_panels: z('leather_smooth', 'noir'),
  decor: z('carbon', 'noir'),
  stitching: z('thread', 'dore'),
  piping: z('leather_smooth', 'noir'),
}

const clone = (c: Config): Config => JSON.parse(JSON.stringify(c))
const newId = () => 'SEL-3D-' + Date.now().toString(36).slice(-5).toUpperCase() + Math.random().toString(36).slice(2, 4).toUpperCase()

const LS_KEY = 'selestic-sim3d-v1'

interface State {
  config: Config
  selected: ZoneId
  hovered: ZoneId | null
  view: CameraViewId
  lighting: Lighting
  cutaway: boolean
  qualityPref: QualityPref
  tier: Tier
  projectId: string
  snapshots: Snapshot[]
  ready: boolean
  recapOpen: boolean
  toast: string
  modelUrl: string | null
  // actions
  select: (id: ZoneId) => void
  hover: (id: ZoneId | null) => void
  setView: (v: CameraViewId) => void
  setLighting: (l: Lighting) => void
  setCutaway: (b: boolean) => void
  setQualityPref: (q: QualityPref) => void
  setMaterial: (zone: ZoneId, m: MaterialId) => void
  setColor: (zone: ZoneId, colorId: string) => void
  setPattern: (zone: ZoneId, p: PatternId) => void
  applyTo: (source: ZoneId, targets: ZoneId[], what: 'color' | 'material' | 'both') => number
  reset: () => void
  save: () => void
  load: () => boolean
  loadConfig: (c: Partial<Config>, id?: string) => void
  setSnapshots: (s: Snapshot[]) => void
  setReady: (b: boolean) => void
  setRecap: (b: boolean) => void
  say: (t: string) => void
  setModelUrl: (u: string | null) => void
}

export const useConfigurator = create<State>((set, get) => ({
  config: clone(DEFAULT_CONFIG),
  selected: 'seat_cushion',
  hovered: null,
  view: 'global',
  lighting: 'showroom',
  cutaway: true,
  qualityPref: 'auto',
  tier: detectTier(),
  projectId: newId(),
  snapshots: [],
  ready: false,
  recapOpen: false,
  toast: '',
  modelUrl: null,

  select: (id) => set({ selected: id }),
  hover: (id) => set({ hovered: id }),
  setView: (v) => set({ view: v }),
  setLighting: (l) => set({ lighting: l }),
  setCutaway: (b) => set({ cutaway: b }),
  setQualityPref: (q) => set({ qualityPref: q, tier: q === 'auto' ? detectTier() : q }),

  setMaterial: (zone, m) => {
    if (!ZONE_BY_ID[zone].materials.includes(m)) return
    const c = clone(get().config)
    c[zone].material = m
    const pats = ZONE_BY_ID[zone].patterns
    if (!pats || !pats.includes(c[zone].pattern)) c[zone].pattern = 'plain'
    set({ config: c })
  },
  setColor: (zone, colorId) => {
    if (!COLOR_BY_ID[colorId]) return
    const c = clone(get().config)
    c[zone].color = colorId
    set({ config: c })
  },
  setPattern: (zone, p) => {
    if (!ZONE_BY_ID[zone].patterns?.includes(p)) return
    const c = clone(get().config)
    c[zone].pattern = p
    set({ config: c })
  },
  applyTo: (source, targets, what) => {
    const c = clone(get().config)
    const src = c[source]
    let n = 0
    for (const t of targets) {
      if (t === source) continue
      const def = ZONE_BY_ID[t]
      let touched = false
      if ((what === 'material' || what === 'both') && def.materials.includes(src.material)) {
        c[t].material = src.material
        if (!def.patterns?.includes(src.pattern)) c[t].pattern = 'plain'
        else c[t].pattern = src.pattern
        touched = true
      }
      if (what === 'color' || what === 'both') {
        // les zones « sangle / fil » acceptent toute couleur ; carbone & alu sont non teintables
        const tm = c[t].material
        if (tm !== 'carbon' && tm !== 'brushed_alu') { c[t].color = src.color; touched = true }
      }
      if (touched) n++
    }
    set({ config: c })
    return n
  },
  reset: () => set({ config: clone(DEFAULT_CONFIG), snapshots: [], projectId: newId() }),

  save: () => {
    try {
      const { config, projectId } = get()
      localStorage.setItem(LS_KEY, JSON.stringify({ config, projectId, t: Date.now() }))
      set({ toast: 'Configuration enregistrée sur cet appareil' })
    } catch { set({ toast: 'Enregistrement impossible (stockage bloqué)' }) }
  },
  load: () => {
    try {
      const raw = localStorage.getItem(LS_KEY)
      if (!raw) return false
      const d = JSON.parse(raw)
      get().loadConfig(d.config, d.projectId)
      return true
    } catch { return false }
  },
  loadConfig: (cfg, id) => {
    const c = clone(DEFAULT_CONFIG)
    for (const zd of ZONES) {
      const s = cfg?.[zd.id]
      if (!s) continue
      if (s.material && MATERIALS[s.material] && zd.materials.includes(s.material)) c[zd.id].material = s.material
      if (s.color && COLOR_BY_ID[s.color]) c[zd.id].color = s.color
      if (s.pattern && PATTERNS[s.pattern] && zd.patterns?.includes(s.pattern)) c[zd.id].pattern = s.pattern
    }
    set({ config: c, projectId: id && /^[\w-]{4,24}$/.test(id) ? id : newId() })
  },
  setSnapshots: (s) => set({ snapshots: s }),
  setReady: (b) => set({ ready: b }),
  setRecap: (b) => set({ recapOpen: b }),
  say: (t) => set({ toast: t }),
  setModelUrl: (u) => set({ modelUrl: u }),
}))
