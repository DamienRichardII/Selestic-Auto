// Sièges sculptés : surfaces à hauteur variable (joues, creux d'assise, galbe lombaire) avec
// vrai relief de matelassage (losanges, côtes, nid d'abeille), gorges de couture, passepoils et
// surpiqûres qui suivent la surface. Tout est généré — aucune boîte arrondie.
import * as THREE from 'three'
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js'
import type { PatternId } from '../data/zones'
import { boxUV } from './geo'

const clamp = (x: number, a = 0, b = 1) => Math.min(b, Math.max(a, x))
const sm = (a: number, b: number, x: number) => { const t = clamp((x - a) / (b - a)); return t * t * (3 - 2 * t) }

/** Distance signée à un rectangle arrondi (+ gradient). */
function rrect(x: number, y: number, hx: number, hy: number, r: number) {
  const sx = x < 0 ? -1 : 1, sy = y < 0 ? -1 : 1
  const qx = Math.abs(x) - (hx - r), qy = Math.abs(y) - (hy - r)
  const ox = Math.max(qx, 0), oy = Math.max(qy, 0)
  const len = Math.hypot(ox, oy)
  const d = len + Math.min(Math.max(qx, qy), 0) - r
  let gx = 0, gy = 0
  if (qx > 0 && qy > 0) { gx = (sx * qx) / len; gy = (sy * qy) / len } else if (qx > qy) gx = sx; else gy = sy
  return { d, gx, gy }
}

/** Relief de matelassage : renvoie la hauteur ajoutée (m) en (u,v). */
function quilt(pattern: PatternId, u: number, v: number, cell: number): number {
  if (pattern === 'plain') return 0
  let m: number // distance à la couture la plus proche, en unités de cellule (0 sur la couture → ~0.5 au centre)
  if (pattern === 'diamond') {
    const fa = (u + v) / cell, fb = (u - v) / cell
    m = Math.min(Math.abs(fa - Math.round(fa)), Math.abs(fb - Math.round(fb)))
  } else if (pattern === 'ribs') {
    const f = v / cell
    m = Math.abs(f - Math.round(f))
  } else {
    // nid d'abeille : distance au bord de l'hexagone le plus proche
    const rx = cell, ry = cell * 1.7320508
    const px = u, py = v
    const ax = (((px % rx) + rx) % rx) - rx / 2, ay = (((py % ry) + ry) % ry) - ry / 2
    const bx = ((((px - rx / 2) % rx) + rx) % rx) - rx / 2, by = ((((py - ry / 2) % ry) + ry) % ry) - ry / 2
    const gx = ax * ax + ay * ay < bx * bx + by * by ? ax : bx
    const gy = ax * ax + ay * ay < bx * bx + by * by ? ay : by
    const qx = Math.abs(gx) / cell, qy = Math.abs(gy) / cell
    m = 0.5 - Math.max(qx * 0.5 + qy * 0.8660254, qx)
    m = clamp(m, 0, 0.5)
  }
  const groove = 1 - sm(0, 0.11, m) // 1 dans la gorge
  const puff = sm(0.02, 0.5, m) // bombé du coussinet
  return -0.0075 * groove + 0.0042 * puff
}

type Place = (u: number, v: number, h: number) => THREE.Vector3

interface PillowSpec {
  hx: number; hy: number; r: number; rim: number
  grid: number
  height: (u: number, v: number) => number   // profil sans matelassage ni bord
  place: Place
  up: THREE.Vector3                           // direction « vers l'extérieur » de la face
  /** zone de matelassage (|u| < qu) et fondu */
  qu?: number
  pattern?: PatternId
  cell?: number
  seam?: number                                // gorge de couture à |u| = seam
  amp?: number                                 // hauteur de bord (échelle)
}

function axis(h: number, n: number) {
  const a: number[] = []
  for (let i = 0; i <= n; i++) {
    const t = (2 * i) / n - 1
    a.push(h * (0.62 * t + 0.38 * Math.sin((Math.PI / 2) * t)))
  }
  return a
}

/** Hauteur finale (profil × arrondi de bord + matelassage + gorge de couture). */
function finalH(s: PillowSpec, u: number, v: number) {
  const { d } = rrect(u, v, s.hx, s.hy, s.r)
  const t = -d
  if (t <= 0) return 0
  const e = t >= s.rim ? 1 : Math.sqrt(1 - Math.pow(1 - t / s.rim, 2))
  let h = s.height(u, v) * e
  if (s.pattern && s.pattern !== 'plain' && s.cell) {
    const qu = s.qu ?? s.hx
    const fade = sm(0, 0.035, t) * sm(qu, qu - 0.03, Math.abs(u))
    h += quilt(s.pattern, u, v, s.cell) * fade
  }
  if (s.seam) h -= 0.0065 * Math.exp(-Math.pow((Math.abs(u) - s.seam) / 0.0055, 2)) * e
  return Math.max(0, h)
}

interface Surface { geo: THREE.BufferGeometry; zoneOfTri: (tri: number) => number; P: (u: number, v: number) => THREE.Vector3; N: (u: number, v: number) => THREE.Vector3 }

function buildSurface(s: PillowSpec, uvScale = 1): Surface {
  const nu = Math.max(8, Math.ceil((2 * s.hx) / s.grid)), nv = Math.max(8, Math.ceil((2 * s.hy) / s.grid))
  const us = axis(s.hx, nu), vs = axis(s.hy, nv)
  const pos: number[] = [], uv: number[] = [], idx: number[] = []
  for (let j = 0; j <= nv; j++) for (let i = 0; i <= nu; i++) {
    let u = us[i], v = vs[j]
    const { d, gx, gy } = rrect(u, v, s.hx, s.hy, s.r)
    if (d > 0) { u -= gx * d; v -= gy * d } // ramène les coins sur le rectangle arrondi
    const p = s.place(u, v, finalH(s, u, v))
    pos.push(p.x, p.y, p.z); uv.push(u * uvScale, v * uvScale)
  }
  for (let j = 0; j < nv; j++) for (let i = 0; i < nu; i++) {
    const a = j * (nu + 1) + i, b = a + 1, c = a + nu + 1, dd = c + 1
    idx.push(a, c, b, b, c, dd)
  }
  const geo = new THREE.BufferGeometry()
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3))
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2))
  geo.setIndex(idx)
  geo.computeVertexNormals()
  const mid = (Math.floor(nv / 2) * (nu + 1)) + Math.floor(nu / 2)
  const n0 = new THREE.Vector3(geo.attributes.normal.getX(mid), geo.attributes.normal.getY(mid), geo.attributes.normal.getZ(mid))
  if (n0.dot(s.up) < 0) {
    const ii = geo.index!
    for (let k = 0; k < ii.count; k += 3) { const t = ii.getY(k); ii.setY(k, ii.getZ(k)); ii.setZ(k, t) }
    geo.computeVertexNormals()
  }
  const P = (u: number, v: number) => s.place(u, v, finalH(s, u, v))
  const N = (u: number, v: number) => {
    const e = 0.002
    const du = P(u + e, v).sub(P(u - e, v)), dv = P(u, v + e).sub(P(u, v - e))
    const n = new THREE.Vector3().crossVectors(du, dv).normalize()
    return n.dot(s.up) < 0 ? n.negate() : n
  }
  // centre de chaque triangle en u (pour séparer les zones)
  const uAt = (k: number) => uv[k * 2] / uvScale
  const zoneOfTri = (tri: number) => {
    const ii = geo.index!
    return (uAt(ii.getX(tri * 3)) + uAt(ii.getX(tri * 3 + 1)) + uAt(ii.getX(tri * 3 + 2))) / 3
  }
  return { geo, zoneOfTri, P, N }
}

/** Sépare une surface en deux maillages (centre / joues) selon |u| des triangles. */
function split(surf: Surface, boundary: number) {
  const ii = surf.geo.index!
  const centre: number[] = [], side: number[] = []
  for (let t = 0; t < ii.count / 3; t++) {
    const u = surf.zoneOfTri(t)
    const arr = Math.abs(u) <= boundary ? centre : side
    arr.push(ii.getX(t * 3), ii.getX(t * 3 + 1), ii.getX(t * 3 + 2))
  }
  const mk = (ind: number[]) => { const g = surf.geo.clone(); g.setIndex(ind); return g }
  return { centre: mk(centre), side: mk(side) }
}

/** Chemin le long d'un rectangle arrondi réduit de `inset`, échantillonné à pas constant. */
function rrPath(hx: number, hy: number, r: number, inset: number, pitch: number) {
  const x = hx - inset, y = hy - inset, rr = Math.max(0.001, r - inset)
  const pts: [number, number][] = []
  const arc = (cx: number, cy: number, a0: number) => { for (let i = 0; i <= 14; i++) { const a = a0 + (Math.PI / 2) * (i / 14); pts.push([cx + rr * Math.cos(a), cy + rr * Math.sin(a)]) } }
  arc(x - rr, y - rr, 0); arc(-x + rr, y - rr, Math.PI / 2); arc(-x + rr, -y + rr, Math.PI); arc(x - rr, -y + rr, Math.PI * 1.5)
  pts.push(pts[0])
  const out: [number, number][] = []
  let acc = 0
  out.push(pts[0])
  for (let i = 1; i < pts.length; i++) {
    const a = pts[i - 1], b = pts[i]
    let seg = Math.hypot(b[0] - a[0], b[1] - a[1])
    let from = 0
    while (acc + (seg - from) >= pitch) {
      const k = (pitch - acc + from) / seg
      out.push([a[0] + (b[0] - a[0]) * k, a[1] + (b[1] - a[1]) * k])
      from = pitch - acc + from; acc = 0
    }
    acc += seg - from
  }
  return out
}

function stitchMatrices(surf: Surface, pts: [number, number][], lift = 0.0007): THREE.Matrix4[] {
  const out: THREE.Matrix4[] = []
  for (let i = 0; i < pts.length; i++) {
    const a = pts[Math.max(0, i - 1)], b = pts[Math.min(pts.length - 1, i + 1)]
    const p0 = surf.P(a[0], a[1]), p1 = surf.P(b[0], b[1])
    const tan = p1.sub(p0).normalize()
    const n = surf.N(pts[i][0], pts[i][1])
    const p = surf.P(pts[i][0], pts[i][1]).addScaledVector(n, lift)
    const y = n.clone().sub(tan.clone().multiplyScalar(n.dot(tan))).normalize()
    const x = new THREE.Vector3().crossVectors(y, tan).normalize()
    out.push(new THREE.Matrix4().makeBasis(x, y, tan).setPosition(p))
  }
  return out
}

function line(u0: number, v0: number, u1: number, v1: number, pitch: number): [number, number][] {
  const len = Math.hypot(u1 - u0, v1 - v0), n = Math.max(1, Math.floor(len / pitch))
  return Array.from({ length: n + 1 }, (_, i) => [u0 + ((u1 - u0) * i) / n, v0 + ((v1 - v0) * i) / n])
}

/** Surpiqûres dans les gorges du matelassage (dans la fenêtre |u| ≤ qu, |v| ≤ vmax). */
function gridStitches(pattern: PatternId, cell: number, qu: number, vmax: number, pitch: number): [number, number][][] {
  if (pattern === 'plain' || pattern === 'hex') return []
  const lines: [number, number][][] = []
  const clip = (pts: [number, number][]) => pts.filter(([u, v]) => Math.abs(u) <= qu && Math.abs(v) <= vmax)
  if (pattern === 'ribs') {
    for (let k = -Math.floor(vmax / cell); k <= Math.floor(vmax / cell); k++) lines.push(clip(line(-qu, k * cell, qu, k * cell, pitch)))
  } else {
    const kmax = Math.ceil((qu + vmax) / cell)
    for (let k = -kmax; k <= kmax; k++) {
      // u + v = k·cell ; u − v = k·cell
      lines.push(clip(line(-qu - 0.1, k * cell + qu + 0.1, qu + 0.1, k * cell - qu - 0.1, pitch)))
      lines.push(clip(line(-qu - 0.1, -(k * cell) + -qu - 0.1, qu + 0.1, -(k * cell) + qu + 0.1, pitch)))
    }
  }
  return lines.filter((l) => l.length > 1)
}

function pipeTube(surf: Surface, u0: number, v0: number, u1: number, v1: number, r = 0.0042) {
  const pts = line(u0, v0, u1, v1, 0.02).map(([u, v]) => surf.P(u, v).addScaledVector(surf.N(u, v), 0.0012))
  const g = new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), Math.max(8, pts.length * 2), r, 6, false)
  return boxUV(g)
}

export interface SeatSculpt {
  cushion: { centre: THREE.BufferGeometry; side: THREE.BufferGeometry; pipes: THREE.BufferGeometry[]; stitches: THREE.Matrix4[] }
  back: { centre: THREE.BufferGeometry; side: THREE.BufferGeometry; rear: THREE.BufferGeometry; pipes: THREE.BufferGeometry[]; stitches: THREE.Matrix4[] }
  head: { geo: THREE.BufferGeometry; stitches: THREE.Matrix4[] }
}

const cache = new Map<string, SeatSculpt>()

export function buildSeat(pCushion: PatternId, pBack: PatternId, pHead: PatternId, grid: number, detail: boolean): SeatSculpt {
  const key = `${pCushion}|${pBack}|${pHead}|${grid}|${detail}`
  const hit = cache.get(key)
  if (hit) return hit
  const V = (x: number, y: number, z: number) => new THREE.Vector3(x, y, z)
  const cellOf = (p: PatternId) => (p === 'diamond' ? 0.078 : p === 'ribs' ? 0.052 : 0.046)
  const pitch = 0.0105

  // ---- assise (face avant du siège = −z, dessus = +y)
  const SEAM = 0.15
  const cush: PillowSpec = {
    hx: 0.23, hy: 0.25, r: 0.05, rim: 0.04, grid, seam: SEAM,
    up: V(0, 1, 0), place: (u, v, h) => V(u, 0.268 + h, v),
    pattern: pCushion, cell: cellOf(pCushion), qu: SEAM - 0.012,
    height: (u, v) => {
      const au = Math.abs(u)
      let H = 0.108 + 0.03 * sm(0.12, 0.2, au)
      H -= 0.014 * Math.exp(-Math.pow(u / 0.095, 2)) * Math.exp(-Math.pow((v - 0.03) / 0.17, 2))
      H -= 0.026 * sm(-0.1, -0.25, v)
      H += 0.012 * sm(0.1, 0.25, v)
      return H
    },
  }
  const sC = buildSurface(cush)
  const cs = split(sC, SEAM)
  const cPipes = [-1, 1].map((sx) => pipeTube(sC, sx * SEAM, -0.2, sx * SEAM, 0.2))
  let cSt: THREE.Matrix4[] = []
  const cLines: [number, number][][] = []
  if (detail) {
    for (const sx of [-1, 1]) for (const o of [-0.0135, 0.0135]) cLines.push(line(sx * SEAM + o, -0.215, sx * SEAM + o, 0.215, pitch))
    cLines.push(rrPath(cush.hx, cush.hy, cush.r, 0.016, pitch))
    cLines.push(...gridStitches(pCushion, cellOf(pCushion), SEAM - 0.03, 0.215, pitch))
    cSt = cLines.flatMap((l) => stitchMatrices(sC, l))
  } else {
    for (const sx of [-1, 1]) for (const o of [-0.0135, 0.0135]) cSt.push(...stitchMatrices(sC, line(sx * SEAM + o, -0.215, sx * SEAM + o, 0.215, pitch * 1.5)))
  }

  // ---- dossier (dessus = −z dans le repère du dossier ; v = hauteur)
  const back: PillowSpec = {
    hx: 0.23, hy: 0.29, r: 0.06, rim: 0.035, grid, seam: SEAM,
    up: V(0, 0, -1), place: (u, v, h) => V(u, 0.29 + v, -h),
    pattern: pBack, cell: cellOf(pBack), qu: SEAM - 0.012,
    height: (u, v) => {
      const au = Math.abs(u)
      let H = 0.046 + 0.032 * sm(0.12, 0.2, au)
      H -= 0.009 * Math.exp(-Math.pow((v + 0.1) / 0.11, 2)) * Math.exp(-Math.pow(u / 0.13, 2))
      H -= 0.014 * sm(0.17, 0.29, v)
      return H
    },
  }
  const sB = buildSurface(back)
  const bs = split(sB, SEAM)
  const rear = buildSurface({ ...back, seam: undefined, pattern: 'plain', up: V(0, 0, 1), place: (u, v, h) => V(u, 0.29 + v, h), height: (u) => 0.03 + 0.008 * (1 - Math.abs(u) / 0.23), grid: grid * 1.6 }).geo
  const bPipes = [-1, 1].map((sx) => pipeTube(sB, sx * SEAM, -0.27, sx * SEAM, 0.27))
  const bLines: [number, number][][] = []
  for (const sx of [-1, 1]) for (const o of [-0.0135, 0.0135]) bLines.push(line(sx * SEAM + o, -0.265, sx * SEAM + o, 0.265, detail ? pitch : pitch * 1.5))
  if (detail) {
    bLines.push(rrPath(back.hx, back.hy, back.r, 0.016, pitch))
    bLines.push(...gridStitches(pBack, cellOf(pBack), SEAM - 0.03, 0.255, pitch))
  }
  const bSt = bLines.flatMap((l) => stitchMatrices(sB, l))

  // ---- appuie-tête
  const head: PillowSpec = {
    hx: 0.1, hy: 0.076, r: 0.05, rim: 0.045, grid: grid * 0.8,
    up: V(0, 0, -1), place: (u, v, h) => V(u, 0.74 + v, 0.01 - h),
    pattern: pHead, cell: cellOf(pHead) * 0.85, qu: 0.1,
    height: (u) => 0.046 - 0.012 * (u * u) / 0.01,
  }
  const sH = buildSurface(head)
  const hRear = buildSurface({ ...head, pattern: 'plain', up: V(0, 0, 1), place: (u, v, h) => V(u, 0.74 + v, 0.01 + h), height: () => 0.04 }).geo
  const hGeo = mergeGeometries([sH.geo, hRear], false)!
  const hLines: [number, number][][] = detail ? [rrPath(head.hx, head.hy, head.r, 0.014, pitch), ...gridStitches(pHead, cellOf(pHead) * 0.85, 0.085, 0.06, pitch)] : []
  const hSt = hLines.flatMap((l) => stitchMatrices(sH, l))

  const out: SeatSculpt = {
    cushion: { centre: cs.centre, side: cs.side, pipes: cPipes, stitches: cSt },
    back: { centre: bs.centre, side: bs.side, rear, pipes: bPipes, stitches: bSt },
    head: { geo: hGeo, stitches: hSt },
  }
  cache.set(key, out)
  return out
}
