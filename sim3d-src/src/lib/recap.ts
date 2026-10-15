import { ZONES } from '../data/zones'
import { MATERIALS, PATTERNS } from '../data/materials'
import { COLOR_BY_ID } from '../data/colors'
import type { Config } from '../store/useConfigurator'

export function recapLines(cfg: Config): string[] {
  return ZONES.map((z) => {
    const c = cfg[z.id]
    const m = MATERIALS[c.material].label
    const tint = c.material === 'carbon' || c.material === 'brushed_alu' ? '' : ' — ' + (COLOR_BY_ID[c.color]?.label ?? c.color)
    const pat = c.pattern !== 'plain' ? ` (${PATTERNS[c.pattern].label.toLowerCase()})` : ''
    return `${z.label} : ${m}${tint}${pat}`
  })
}

export function encodeCfg(cfg: Config, id: string): string {
  const compact: Record<string, string> = {}
  for (const z of ZONES) { const c = cfg[z.id]; compact[z.id] = `${c.material}.${c.color}.${c.pattern}` }
  return btoa(encodeURIComponent(JSON.stringify({ i: id, c: compact })))
}

export function decodeCfg(s: string): { id?: string; cfg: Partial<Config> } | null {
  try {
    const d = JSON.parse(decodeURIComponent(atob(s)))
    const cfg: Record<string, unknown> = {}
    for (const [k, v] of Object.entries(d.c as Record<string, string>)) {
      const [material, color, pattern] = v.split('.')
      cfg[k] = { material, color, pattern: pattern || 'plain' }
    }
    return { id: d.i, cfg: cfg as Partial<Config> }
  } catch { return null }
}
