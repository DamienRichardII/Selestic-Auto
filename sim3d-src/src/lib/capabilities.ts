export type Tier = 'low' | 'medium' | 'high'

export interface Caps { webgl2: boolean; renderer: string; software: boolean; webgpu: boolean }

let cached: Caps | null = null

export function getCaps(): Caps {
  if (cached) return cached
  let webgl2 = false
  let renderer = ''
  try {
    const c = document.createElement('canvas')
    const gl = c.getContext('webgl2') as WebGL2RenderingContext | null
    if (gl) {
      webgl2 = true
      const ext = gl.getExtension('WEBGL_debug_renderer_info')
      renderer = ext ? String(gl.getParameter(ext.UNMASKED_RENDERER_WEBGL)) : ''
      gl.getExtension('WEBGL_lose_context')?.loseContext()
    }
  } catch { /* ignore */ }
  const software = /swiftshader|llvmpipe|software|basic render/i.test(renderer)
  cached = { webgl2, renderer, software, webgpu: typeof navigator !== 'undefined' && 'gpu' in navigator }
  return cached
}

/** Choisit un niveau de qualité d’après l’appareil (heuristique prudente, modifiable par l’utilisateur). */
export function detectTier(): Tier {
  try {
    const caps = getCaps()
    if (caps.software) return 'low'
    const nav = navigator as Navigator & { deviceMemory?: number }
    const mobile = matchMedia('(pointer: coarse)').matches || /Android|iPhone|iPad|Mobile/i.test(navigator.userAgent)
    const cores = navigator.hardwareConcurrency || 4
    const mem = nav.deviceMemory ?? 4
    if (mem < 3 || cores <= 2) return 'low'
    if (mobile) return 'low'
    if (cores <= 4 || mem < 8) return 'medium'
    return 'high'
  } catch { return 'medium' }
}

export interface TierSettings {
  dpr: [number, number]
  texSize: number
  shadows: boolean
  shadowMap: number
  ao: boolean
  post: boolean
  outline: boolean
  envRes: number
  segments: number
}

export const TIERS: Record<Tier, TierSettings> = {
  low: { dpr: [1, 1.25], texSize: 256, shadows: false, shadowMap: 512, ao: false, post: false, outline: false, envRes: 128, segments: 3 },
  medium: { dpr: [1, 1.5], texSize: 512, shadows: true, shadowMap: 1024, ao: false, post: true, outline: true, envRes: 256, segments: 5 },
  high: { dpr: [1, 2], texSize: 1024, shadows: true, shadowMap: 2048, ao: true, post: true, outline: true, envRes: 512, segments: 8 },
}
