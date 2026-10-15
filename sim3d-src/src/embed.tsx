import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './ui/App'
import { getCaps } from './lib/capabilities'
import { useConfigurator } from './store/useConfigurator'
import './ui/sim3d.css'

export interface MountOptions { onError?: (e: unknown) => void; /** URL (même origine) d'un habitacle GLB respectant le contrat de nommage */ modelUrl?: string }

export function supported(): boolean {
  return getCaps().webgl2
}

export function mountSim3D(el: HTMLElement, opts: MountOptions = {}) {
  if (opts.modelUrl) {
    try { const u = new URL(opts.modelUrl, document.baseURI); if (u.origin === location.origin) useConfigurator.getState().setModelUrl(u.href) } catch { /* URL invalide : prototype par défaut */ }
  }
  const root = createRoot(el)
  root.render(<StrictMode><App onError={opts.onError} /></StrictMode>)
  return { unmount: () => root.unmount() }
}
