// Génération procédurale de cartes PBR (albédo neutre, normales, rugosité), 100 % tileables.
// Aucune photo n’est utilisée : tout est calculé à partir de champs de hauteur.
import * as THREE from 'three'
import type { MaterialId, PatternId } from '../data/zones'

function rng(seed: number) {
  let a = seed >>> 0
  return () => {
    a = (a + 0x6d2b79f5) >>> 0
    let t = a
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}
const sstep = (a: number, b: number, x: number) => {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)))
  return t * t * (3 - 2 * t)
}
const fract = (x: number) => x - Math.floor(x)

/** Worley tileable : renvoie F1, F2 (distances normalisées à la taille d’une cellule). */
function worley(size: number, cells: number, seed: number) {
  const r = rng(seed)
  const pts = new Float32Array(cells * cells * 2)
  for (let i = 0; i < pts.length; i++) pts[i] = r()
  const f1 = new Float32Array(size * size)
  const f2 = new Float32Array(size * size)
  const cs = size / cells
  for (let y = 0; y < size; y++) {
    const gy = Math.floor(y / cs)
    for (let x = 0; x < size; x++) {
      const gx = Math.floor(x / cs)
      let a = 9, b = 9
      for (let dy = -1; dy <= 1; dy++) {
        const cy = gy + dy
        const wy = ((cy % cells) + cells) % cells
        for (let dx = -1; dx <= 1; dx++) {
          const cx = gx + dx
          const wx = ((cx % cells) + cells) % cells
          const i = (wy * cells + wx) * 2
          const px = (cx + pts[i]) * cs
          const py = (cy + pts[i + 1]) * cs
          const d = Math.hypot(x - px, y - py) / cs
          if (d < a) { b = a; a = d } else if (d < b) b = d
        }
      }
      f1[y * size + x] = a
      f2[y * size + x] = b
    }
  }
  return { f1, f2 }
}

/** Bruit de valeur tileable, lissé (octaves). */
function noise(size: number, cells: number, seed: number) {
  const r = rng(seed)
  const g = new Float32Array(cells * cells)
  for (let i = 0; i < g.length; i++) g[i] = r()
  const out = new Float32Array(size * size)
  for (let y = 0; y < size; y++) {
    const fy = (y / size) * cells
    const y0 = Math.floor(fy), ty = sstep(0, 1, fy - y0)
    for (let x = 0; x < size; x++) {
      const fx = (x / size) * cells
      const x0 = Math.floor(fx), tx = sstep(0, 1, fx - x0)
      const a = g[(y0 % cells) * cells + (x0 % cells)]
      const b = g[(y0 % cells) * cells + ((x0 + 1) % cells)]
      const c = g[((y0 + 1) % cells) * cells + (x0 % cells)]
      const d = g[((y0 + 1) % cells) * cells + ((x0 + 1) % cells)]
      out[y * size + x] = a + (b - a) * tx + (c - a) * ty + (a - b - c + d) * tx * ty
    }
  }
  return out
}

function white(size: number, seed: number) {
  const r = rng(seed)
  const o = new Float32Array(size * size)
  for (let i = 0; i < o.length; i++) o[i] = r()
  return o
}

function blur(src: Float32Array, size: number, rad = 1) {
  const tmp = new Float32Array(src.length)
  const out = new Float32Array(src.length)
  const n = rad * 2 + 1
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    let s = 0
    for (let k = -rad; k <= rad; k++) s += src[y * size + ((x + k + size) % size)]
    tmp[y * size + x] = s / n
  }
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    let s = 0
    for (let k = -rad; k <= rad; k++) s += tmp[((y + k + size) % size) * size + x]
    out[y * size + x] = s / n
  }
  return out
}

interface Fields { h: Float32Array; a: Float32Array; r: Float32Array; ns: number; tile: number }

/** Motifs de sellerie (matelassage) : hauteur 0..1, coutures en creux. */
function quilt(p: PatternId, u: number, v: number): number {
  if (p === 'diamond') {
    const k = 3
    const fp = fract((u + v) * k), fq = fract((u - v) * k)
    const dd = Math.max(Math.abs(fp - 0.5), Math.abs(fq - 0.5)) * 2
    return (1 - Math.pow(dd, 2.4)) * sstep(1, 0.86, dd)
  }
  if (p === 'ribs') {
    const k = 7
    const s = Math.sin(fract(v * k) * Math.PI)
    return Math.pow(Math.max(0, s), 0.55)
  }
  if (p === 'hex') {
    const s = 6, rows = 3
    const x = u * s, y = v * rows
    const ax = fract(x) - 0.5, ay = (fract(y) - 0.5) * 1.7320508
    const bx = fract(x + 0.5) - 0.5, by = (fract(y + 0.5) - 0.5) * 1.7320508
    const d = Math.min(Math.hypot(ax, ay), Math.hypot(bx, by))
    return (1 - Math.pow(Math.min(1, d / 0.5), 3)) * sstep(0.5, 0.4, d)
  }
  return 1
}

function leather(size: number, cells: number, crease: number, seed: number, grainy: boolean, pattern: PatternId): Fields {
  const { f1, f2 } = worley(size, cells, seed)
  const fine = grainy ? worley(size, cells * 3, seed + 7) : null
  const lo = noise(size, 6, seed + 3)
  const n = size * size
  const h = new Float32Array(n), a = new Float32Array(n), r = new Float32Array(n)
  for (let i = 0; i < n; i++) {
    const cell = sstep(0, crease, f2[i] - f1[i])
    let hh = 0.55 + 0.45 * cell
    if (fine) hh -= 0.18 * (1 - sstep(0, 0.2, fine.f2[i] - fine.f1[i]))
    const x = i % size, y = (i / size) | 0
    const q = pattern === 'plain' ? 1 : quilt(pattern, x / size, y / size)
    h[i] = pattern === 'plain' ? hh : 0.22 * hh + 0.78 * q
    a[i] = 0.88 + 0.08 * lo[i] + 0.06 * cell - (pattern === 'plain' ? 0 : 0.18 * (1 - q))
    r[i] = 0.46 + 0.3 * (1 - cell) + 0.12 * lo[i] + (pattern === 'plain' ? 0 : 0.12 * (1 - q))
  }
  return { h, a, r, ns: grainy ? 1.5 : 0.9, tile: 0.28 }
}

function perforated(size: number, seed: number, pattern: PatternId): Fields {
  const base = leather(size, 44, 0.16, seed, false, pattern)
  const s = 24, rows = 14
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    const u = x / size, v = y / size
    const px = u * s, py = v * rows
    const ax = fract(px) - 0.5, ay = (fract(py) - 0.5) * 1.7320508
    const bx = fract(px + 0.5) - 0.5, by = (fract(py + 0.5) - 0.5) * 1.7320508
    const d = Math.min(Math.hypot(ax, ay), Math.hypot(bx, by))
    const m = 1 - sstep(0.17, 0.23, d)
    const i = y * size + x
    base.h[i] = base.h[i] * (1 - m) - 0.6 * m
    base.a[i] *= 1 - 0.9 * m
    base.r[i] = base.r[i] * (1 - m) + 1 * m
  }
  base.ns = 1.2
  return base
}

function suede(size: number, seed: number, alcantara: boolean): Fields {
  const w = blur(white(size, seed), size, 1)
  const w2 = white(size, seed + 1)
  const lo = noise(size, alcantara ? 10 : 5, seed + 5)
  const n = size * size
  const h = new Float32Array(n), a = new Float32Array(n), r = new Float32Array(n)
  for (let i = 0; i < n; i++) {
    h[i] = 0.5 + 0.5 * (w[i] - 0.5) * 2
    a[i] = (alcantara ? 0.74 : 0.8) + (alcantara ? 0.26 : 0.18) * lo[i] + 0.08 * (w2[i] - 0.5)
    r[i] = 1
  }
  return { h, a, r, ns: alcantara ? 0.55 : 0.4, tile: 0.2 }
}

function thread2(u: number, v: number, n: number): { over: boolean; prof: number } {
  const fu = fract(u * n), fv = fract(v * n)
  const i = Math.floor(u * n), j = Math.floor(v * n)
  const over = (i + j) % 2 === 0
  return { over, prof: over ? Math.sin(fv * Math.PI) : Math.sin(fu * Math.PI) }
}

function fabric(size: number, seed: number): Fields {
  const n = size * size
  const h = new Float32Array(n), a = new Float32Array(n), r = new Float32Array(n)
  const rr = rng(seed)
  const cnt = 56
  const tv = Array.from({ length: cnt }, () => 0.84 + 0.16 * rr())
  const th = Array.from({ length: cnt }, () => 0.84 + 0.16 * rr())
  const fuzz = white(size, seed + 2)
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    const u = x / size, v = y / size
    const t = thread2(u, v, cnt)
    const i = y * size + x
    const ci = Math.floor(u * cnt), cj = Math.floor(v * cnt)
    h[i] = 0.25 + 0.6 * t.prof + 0.1 * fuzz[i]
    a[i] = (t.over ? tv[ci % cnt] : th[cj % cnt]) * (0.78 + 0.22 * t.prof)
    r[i] = 0.9 + 0.1 * fuzz[i]
  }
  return { h, a, r, ns: 1.4, tile: 0.2 }
}

function carbon(size: number, seed: number): Fields {
  const n = size * size
  const h = new Float32Array(n), a = new Float32Array(n), r = new Float32Array(n)
  const nn = 20
  const fz = white(size, seed)
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    const u = x / size, v = y / size
    const fu = fract(u * nn), fv = fract(v * nn)
    const i0 = Math.floor(u * nn), j0 = Math.floor(v * nn)
    const warp = Math.floor((i0 + j0) / 2) % 2 === 0
    const prof = warp ? Math.sin(fv * Math.PI) : Math.sin(fu * Math.PI)
    const i = y * size + x
    h[i] = 0.3 + 0.6 * prof
    // le fil « sur le dessus » est plus brillant, les directions alternent → motif sergé visible
    a[i] = (warp ? 0.2 : 0.1) * (0.5 + 0.5 * prof) + 0.04 + 0.01 * fz[i]
    r[i] = 0.34 + 0.12 * (1 - prof)
  }
  return { h, a, r, ns: 0.9, tile: 0.1 }
}

function brushed(size: number, seed: number): Fields {
  const n = size * size
  const h = new Float32Array(n), a = new Float32Array(n), r = new Float32Array(n)
  const rows = white(size, seed)
  const rowN = new Float32Array(size)
  for (let y = 0; y < size; y++) rowN[y] = rows[y * size]
  const fz = blur(white(size, seed + 3), size, 0)
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    const i = y * size + x
    const rn = 0.6 * rowN[y] + 0.4 * rowN[(y + 1) % size]
    h[i] = 0.5 + 0.12 * (rn - 0.5) + 0.04 * (fz[i] - 0.5)
    a[i] = 0.82 + 0.16 * rn
    r[i] = 0.3 + 0.28 * rn
  }
  return { h, a, r, ns: 0.35, tile: 0.3 }
}

function webbing(size: number, seed: number): Fields {
  const n = size * size
  const h = new Float32Array(n), a = new Float32Array(n), r = new Float32Array(n)
  const fz = white(size, seed)
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    const u = x / size, v = y / size
    const s = 0.5 + 0.5 * Math.sin((u * 36 + v * 36) * Math.PI * 2)
    const i = y * size + x
    h[i] = 0.3 + 0.6 * s + 0.08 * fz[i]
    a[i] = 0.74 + 0.26 * s
    r[i] = 0.82 + 0.15 * fz[i]
  }
  return { h, a, r, ns: 1.3, tile: 0.1 }
}

export function fieldsFor(m: MaterialId, p: PatternId, size: number): Fields | null {
  switch (m) {
    case 'leather_smooth': return leather(size, 46, 0.14, 11, false, p)
    case 'leather_grained': return leather(size, 24, 0.3, 23, true, p)
    case 'leather_perforated': return perforated(size, 31, p)
    case 'suedine': return suede(size, 41, false)
    case 'alcantara': return suede(size, 53, true)
    case 'fabric': return fabric(size, 61)
    case 'carbon': return carbon(size, 71)
    case 'brushed_alu': return brushed(size, 83)
    case 'webbing': return webbing(size, 97)
    default: return null
  }
}

function toCanvas(size: number, fill: (i: number, px: Uint8ClampedArray) => void) {
  const c = document.createElement('canvas')
  c.width = c.height = size
  const ctx = c.getContext('2d')!
  const img = ctx.createImageData(size, size)
  for (let i = 0; i < size * size; i++) fill(i, img.data)
  ctx.putImageData(img, 0, 0)
  return c
}

export interface TexSet { map: THREE.CanvasTexture; normal: THREE.CanvasTexture; rough: THREE.CanvasTexture; tile: number; ns: number; albedo: HTMLCanvasElement }

const cache = new Map<string, TexSet>()

function prep(t: THREE.CanvasTexture, srgb: boolean) {
  t.wrapS = t.wrapT = THREE.RepeatWrapping
  t.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace
  t.anisotropy = 8
  t.needsUpdate = true
  return t
}

export function getTextures(m: MaterialId, p: PatternId, size: number): TexSet | null {
  const nk = p === 'plain' ? 5 : 11
  const key = `${m}|${p}|${size}`
  const hit = cache.get(key)
  if (hit) return hit
  const f = fieldsFor(m, p, size)
  if (!f) return null
  const albedo = toCanvas(size, (i, d) => {
    const v = Math.max(0, Math.min(255, Math.pow(f.a[i], 1 / 2.2) * 255))
    d[i * 4] = d[i * 4 + 1] = d[i * 4 + 2] = v; d[i * 4 + 3] = 255
  })
  const rough = toCanvas(size, (i, d) => {
    d[i * 4] = 255; d[i * 4 + 1] = Math.max(0, Math.min(255, f.r[i] * 255)); d[i * 4 + 2] = 0; d[i * 4 + 3] = 255
  })
  const normal = toCanvas(size, (i, d) => {
    const x = i % size, y = (i / size) | 0
    const hx = f.h[y * size + ((x + 1) % size)] - f.h[y * size + ((x - 1 + size) % size)]
    const hy = f.h[((y + 1) % size) * size + x] - f.h[((y - 1 + size) % size) * size + x]
    const k = nk
    let nx = -hx * k, ny = hy * k, nz = 1
    const l = Math.hypot(nx, ny, nz)
    nx /= l; ny /= l; nz /= l
    d[i * 4] = (nx * 0.5 + 0.5) * 255; d[i * 4 + 1] = (ny * 0.5 + 0.5) * 255; d[i * 4 + 2] = (nz * 0.5 + 0.5) * 255; d[i * 4 + 3] = 255
  })
  const set: TexSet = {
    map: prep(new THREE.CanvasTexture(albedo), true),
    normal: prep(new THREE.CanvasTexture(normal), false),
    rough: prep(new THREE.CanvasTexture(rough), false),
    tile: f.tile,
    ns: f.ns,
    albedo,
  }
  cache.set(key, set)
  return set
}
