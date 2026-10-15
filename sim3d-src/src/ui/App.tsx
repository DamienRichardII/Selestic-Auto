import { Component, lazy, Suspense, useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import { useConfigurator } from '../store/useConfigurator'
import { GROUPS, ZONES, ZONE_BY_ID, type CameraViewId, type ZoneId } from '../data/zones'
import { MATERIALS, PATTERNS } from '../data/materials'
import { COLORS, COLOR_BY_ID } from '../data/colors'
import { PRESET_VIEWS, VIEW_LABEL } from '../three/views'
import { getCaps } from '../lib/capabilities'
import { decodeCfg, encodeCfg, recapLines } from '../lib/recap'
import { fieldsFor } from '../three/proc'
import { sceneApi } from '../lib/api'

const Scene = lazy(() => import('../three/Scene'))

class Boundary extends Component<{ children: ReactNode; onError?: (e: unknown) => void }, { err: boolean }> {
  state = { err: false }
  static getDerivedStateFromError() { return { err: true } }
  componentDidCatch(e: unknown) { this.props.onError?.(e) }
  render() { return this.state.err ? <div className="s3d-fail">Le rendu 3D a rencontré un problème.</div> : this.props.children }
}

const thumbCache = new Map<string, string>()
function thumb(m: keyof typeof MATERIALS): string {
  const hit = thumbCache.get(m)
  if (hit) return hit
  const size = 96
  const f = fieldsFor(m, 'plain', size)
  let url = ''
  if (f) {
    const c = document.createElement('canvas'); c.width = c.height = size
    const x = c.getContext('2d')!
    const img = x.createImageData(size, size)
    for (let i = 0; i < size * size; i++) {
      // ombrage léger depuis la hauteur pour suggérer le relief
      const xx = i % size, yy = (i / size) | 0
      const dh = f.h[yy * size + ((xx + 1) % size)] - f.h[((yy + 1) % size) * size + xx]
      const v = Math.max(0, Math.min(255, (Math.pow(f.a[i], 1 / 2.2) + dh * 0.9) * 255))
      img.data[i * 4] = img.data[i * 4 + 1] = img.data[i * 4 + 2] = v; img.data[i * 4 + 3] = 255
    }
    x.putImageData(img, 0, 0)
    url = c.toDataURL('image/png')
  }
  thumbCache.set(m, url)
  return url
}

function Icon({ d }: { d: string }) {
  return <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={d} /></svg>
}

function Stage() {
  const view = useConfigurator((s) => s.view)
  const setView = useConfigurator((s) => s.setView)
  const lighting = useConfigurator((s) => s.lighting)
  const setLighting = useConfigurator((s) => s.setLighting)
  const cutaway = useConfigurator((s) => s.cutaway)
  const ready = useConfigurator((s) => s.ready)
  const hovered = useConfigurator((s) => s.hovered)
  const selected = useConfigurator((s) => s.selected)
  const qualityPref = useConfigurator((s) => s.qualityPref)
  const setQualityPref = useConfigurator((s) => s.setQualityPref)
  const tier = useConfigurator((s) => s.tier)
  const ref = useRef<HTMLDivElement>(null)
  const [full, setFull] = useState(false)
  useEffect(() => {
    const h = () => setFull(document.fullscreenElement === ref.current)
    document.addEventListener('fullscreenchange', h)
    return () => document.removeEventListener('fullscreenchange', h)
  }, [])
  const label = hovered ? ZONE_BY_ID[hovered].label : null
  return (
    <div className="s3d-stage" ref={ref}>
      <Boundary>
        <Suspense fallback={null}><Scene /></Suspense>
      </Boundary>
      {!ready && <div className="s3d-loading" role="status"><span className="s3d-spin" />Préparation de l’habitacle 3D…</div>}
      <div className="s3d-top">
        <div className="s3d-views" role="group" aria-label="Points de vue">
          {PRESET_VIEWS.map((v) => (
            <button key={v} type="button" className={view === v ? 'on' : ''} onClick={() => setView(v)} aria-pressed={view === v}>{VIEW_LABEL[v]}</button>
          ))}
        </div>
        <div className="s3d-tools">
          <button type="button" onClick={() => sceneApi.current?.dolly(0.5)} aria-label="Zoom avant" title="Zoom +"><Icon d="M12 5v14M5 12h14" /></button>
          <button type="button" onClick={() => sceneApi.current?.dolly(-0.5)} aria-label="Zoom arrière" title="Zoom −"><Icon d="M5 12h14" /></button>
          <button type="button" onClick={() => { if (document.fullscreenElement) void document.exitFullscreen(); else void ref.current?.requestFullscreen?.() }} aria-label={full ? 'Quitter le plein écran' : 'Plein écran'} title="Plein écran"><Icon d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" /></button>
        </div>
      </div>
      <div className="s3d-bottom">
        <div className="s3d-light" role="group" aria-label="Éclairage">
          {(['showroom', 'day', 'night'] as const).map((l) => (
            <button key={l} type="button" className={lighting === l ? 'on' : ''} onClick={() => setLighting(l)} aria-pressed={lighting === l}>{l === 'showroom' ? 'Showroom' : l === 'day' ? 'Jour' : 'Nuit'}</button>
          ))}
        </div>
        <label className="s3d-q" title="Niveau de qualité du rendu">
          <span>Qualité</span>
          <select value={qualityPref} onChange={(e) => setQualityPref(e.target.value as typeof qualityPref)} aria-label="Qualité du rendu">
            <option value="auto">Auto ({tier === 'low' ? 'éco' : tier === 'medium' ? 'équilibrée' : 'max'})</option>
            <option value="low">Mobile</option>
            <option value="medium">Équilibré</option>
            <option value="high">Ultra</option>
          </select>
        </label>
      </div>
      {label && <div className="s3d-tip">{label}</div>}
      <div className="s3d-sel"><span>Zone</span>{ZONE_BY_ID[selected].label}</div>
      <p className="s3d-hint">Glissez pour tourner · molette / pincement pour zoomer · touchez une pièce pour la personnaliser{cutaway ? '' : ''}</p>
    </div>
  )
}

function Swatch({ id, active, onPick }: { id: string; active: boolean; onPick: () => void }) {
  const c = COLOR_BY_ID[id]
  return <button type="button" className={'s3d-sw' + (active ? ' on' : '')} style={{ background: c.hex }} onClick={onPick} aria-label={c.label} aria-pressed={active} title={c.label} />
}

function Panel() {
  const selected = useConfigurator((s) => s.selected)
  const select = useConfigurator((s) => s.select)
  const setView = useConfigurator((s) => s.setView)
  const config = useConfigurator((s) => s.config)
  const setMaterial = useConfigurator((s) => s.setMaterial)
  const setColor = useConfigurator((s) => s.setColor)
  const setPattern = useConfigurator((s) => s.setPattern)
  const applyTo = useConfigurator((s) => s.applyTo)
  const reset = useConfigurator((s) => s.reset)
  const save = useConfigurator((s) => s.save)
  const load = useConfigurator((s) => s.load)
  const say = useConfigurator((s) => s.say)
  const setRecap = useConfigurator((s) => s.setRecap)
  const def = ZONE_BY_ID[selected]
  const cfg = config[selected]
  const tintable = cfg.material !== 'carbon' && cfg.material !== 'brushed_alu'
  const chipsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    chipsRef.current?.querySelector<HTMLElement>('.on')?.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' })
  }, [selected])

  const SEATS: ZoneId[] = ['seat_cushion', 'seat_back', 'seat_bolster', 'seat_headrest']
  const ALL = ZONES.map((z) => z.id).filter((id) => id !== 'stitching')
  const apply = (targets: ZoneId[], what: 'color' | 'material' | 'both', name: string) => {
    const n = applyTo(selected, targets, what)
    say(n ? `Appliqué à ${n} zone${n > 1 ? 's' : ''} (${name})` : 'Rien à appliquer : matière ou teinte non compatible avec ces zones')
  }

  return (
    <aside className="s3d-panel" aria-label="Options de personnalisation">
      <div className="s3d-chips" ref={chipsRef} role="tablist" aria-label="Zones">
        {GROUPS.map((g) => (
          <div className="s3d-grp" key={g}>
            <small>{g}</small>
            <div>
              {ZONES.filter((z) => z.group === g).map((z) => (
                <button key={z.id} type="button" role="tab" aria-selected={selected === z.id} className={selected === z.id ? 'on' : ''} onClick={() => { select(z.id); setView(z.view as CameraViewId) }}>{z.label}</button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="s3d-body">
        <header>
          <h3>{def.label}</h3>
          <p>{def.hint}</p>
        </header>

        {def.materials.length > 1 && (
          <section>
            <h4><b>1</b> Matière</h4>
            <div className="s3d-mats">
              {def.materials.map((m) => (
                <button key={m} type="button" className={'s3d-mat' + (cfg.material === m ? ' on' : '')} onClick={() => setMaterial(selected, m)} aria-pressed={cfg.material === m}>
                  <i style={{ backgroundImage: `url(${thumb(m)})`, backgroundColor: tintableHex(m, cfg.color) }} />
                  <span>{MATERIALS[m].label}{MATERIALS[m].optional ? ' *' : ''}</span>
                </button>
              ))}
            </div>
            <p className="s3d-note">{MATERIALS[cfg.material].short}{MATERIALS[cfg.material].optional ? ' — finition à valider avec l’atelier.' : ''}</p>
          </section>
        )}

        {tintable && (
          <section>
            <h4><b>{def.materials.length > 1 ? 2 : 1}</b> {selected === 'stitching' ? 'Couleur du fil' : 'Couleur'} <em>{COLOR_BY_ID[cfg.color]?.label}</em></h4>
            <div className="s3d-sws">
              {COLORS.map((c) => <Swatch key={c.id} id={c.id} active={cfg.color === c.id} onPick={() => setColor(selected, c.id)} />)}
            </div>
          </section>
        )}

        {def.patterns && def.patterns.length > 1 && (
          <section>
            <h4><b>3</b> Motif de sellerie</h4>
            <div className="s3d-pats">
              {def.patterns.map((p) => (
                <button key={p} type="button" className={cfg.pattern === p ? 'on' : ''} onClick={() => setPattern(selected, p)} aria-pressed={cfg.pattern === p}>{PATTERNS[p].label}</button>
              ))}
            </div>
          </section>
        )}

        {selected !== 'stitching' && (
          <section>
            <h4>Appliquer à plusieurs zones</h4>
            <div className="s3d-apply">
              <button type="button" onClick={() => apply(SEATS, 'both', 'sièges')}>Tous les sièges</button>
              <button type="button" onClick={() => apply(ALL, 'color', 'couleur')}>Couleur à tout l’habitacle</button>
              <button type="button" onClick={() => apply(ALL, 'material', 'matière')}>Matière à tout l’habitacle</button>
            </div>
          </section>
        )}
      </div>

      <footer className="s3d-actions">
        <button type="button" className="ghost" onClick={() => { reset(); say('Configuration réinitialisée') }}>Réinitialiser</button>
        <button type="button" className="ghost" onClick={save}>Enregistrer</button>
        <button type="button" className="ghost" onClick={() => say(load() ? 'Configuration enregistrée rechargée' : 'Aucune configuration enregistrée')}>Recharger</button>
        <button type="button" className="gold" onClick={() => setRecap(true)}>Récapitulatif & devis</button>
      </footer>
    </aside>
  )
}

function tintableHex(m: string, colorId: string) {
  return m === 'carbon' ? '#bbbbbb' : m === 'brushed_alu' ? '#e3e6e8' : (COLOR_BY_ID[colorId]?.hex ?? '#888')
}

function Recap() {
  const open = useConfigurator((s) => s.recapOpen)
  const setRecap = useConfigurator((s) => s.setRecap)
  const config = useConfigurator((s) => s.config)
  const projectId = useConfigurator((s) => s.projectId)
  const snapshots = useConfigurator((s) => s.snapshots)
  const setSnapshots = useConfigurator((s) => s.setSnapshots)
  const say = useConfigurator((s) => s.say)
  const [busy, setBusy] = useState(false)
  const lines = useMemo(() => recapLines(config), [config])
  const dialogRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!open) return
    const h = (e: KeyboardEvent) => { if (e.key === 'Escape') setRecap(false) }
    document.addEventListener('keydown', h)
    dialogRef.current?.focus()
    return () => document.removeEventListener('keydown', h)
  }, [open, setRecap])
  useEffect(() => {
    if (!open || snapshots.length || !sceneApi.current) return
    setBusy(true)
    sceneApi.current.capture().then(setSnapshots).catch(() => say('Capture indisponible sur cet appareil')).finally(() => setBusy(false))
  }, [open, snapshots.length, setSnapshots, say])
  if (!open) return null
  const link = () => { const u = new URL(location.href); u.search = ''; u.hash = ''; u.searchParams.set('cfg', encodeCfg(config, projectId)); return u.toString() }
  const copy = async () => {
    try { await navigator.clipboard.writeText(link()); say('Lien de la configuration copié') } catch { say(link()) }
  }
  const toDevis = () => {
    try { sessionStorage.setItem('selestic-sim3d-snaps', JSON.stringify(snapshots.map((s) => ({ view: s.view, label: s.label, url: s.url })))) } catch { /* trop volumineux : on continue sans */ }
    const payload = encodeURIComponent(JSON.stringify({ v: 3, id: projectId, lines }))
    location.href = 'devis.html?sim=' + payload
  }
  const recapAgain = async () => {
    setBusy(true)
    try { setSnapshots(await sceneApi.current!.capture()) } catch { say('Capture indisponible') } finally { setBusy(false) }
  }
  return (
    <div className="s3d-modal" onMouseDown={(e) => { if (e.target === e.currentTarget) setRecap(false) }}>
      <div className="s3d-dialog" role="dialog" aria-modal="true" aria-label="Récapitulatif de la configuration" tabIndex={-1} ref={dialogRef}>
        <button type="button" className="s3d-x" onClick={() => setRecap(false)} aria-label="Fermer">×</button>
        <small className="s3d-pid">Projet {projectId}</small>
        <h3>Votre configuration</h3>
        <div className="s3d-snaps">
          {snapshots.length ? snapshots.map((s) => <figure key={s.view}><img src={s.url} alt={s.label} /><figcaption>{s.label}</figcaption></figure>) : <p>{busy ? 'Capture des rendus 3D…' : 'Aucun rendu capturé.'}</p>}
        </div>
        <ul>{lines.map((l) => <li key={l}>{l}</li>)}</ul>
        <p className="s3d-note">Teintes et finitions indicatives : l’atelier confirme les références réelles lors du devis. Aucun prix n’est calculé automatiquement.</p>
        <div className="s3d-actions row">
          <button type="button" className="ghost" onClick={recapAgain} disabled={busy}>Actualiser les rendus</button>
          <button type="button" className="ghost" onClick={copy}>Copier le lien</button>
          {snapshots.length > 0 && <a className="ghost" href={snapshots[0].url} download={`selestic-${projectId}.jpg`}>Télécharger le rendu</a>}
          <button type="button" className="gold" onClick={toDevis}>Envoyer au devis</button>
        </div>
      </div>
    </div>
  )
}

function Toast() {
  const toast = useConfigurator((s) => s.toast)
  const say = useConfigurator((s) => s.say)
  useEffect(() => { if (!toast) return; const t = setTimeout(() => say(''), 3200); return () => clearTimeout(t) }, [toast, say])
  return <div className={'s3d-toast' + (toast ? ' on' : '')} role="status" aria-live="polite">{toast}</div>
}

export default function App({ onError }: { onError?: (e: unknown) => void }) {
  useEffect(() => {
    const q = new URLSearchParams(location.search).get('cfg')
    const st = useConfigurator.getState()
    if (q) {
      const d = decodeCfg(q)
      if (d) st.loadConfig(d.cfg, d.id)
    }
    if (!getCaps().webgl2) onError?.(new Error('webgl2'))
  }, [onError])
  return (
    <div className="s3d">
      <Boundary onError={onError}>
        <Stage />
        <Panel />
        <Recap />
        <Toast />
      </Boundary>
      <p className="s3d-legal">Aperçu 3D de démonstration sur habitacle générique — pas un modèle de véhicule précis. Teintes et finitions indicatives, confirmées par l’atelier. * Finition à valider avec l’atelier.</p>
    </div>
  )
}
