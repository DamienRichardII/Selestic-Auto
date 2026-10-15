import * as THREE from 'three'
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js'

/** UV « boîte » en mètres : la matière garde la même échelle quelle que soit la pièce. */
export function boxUV<T extends THREE.BufferGeometry>(g: T): T {
  const p = g.attributes.position, n = g.attributes.normal
  const uv = new Float32Array(p.count * 2)
  for (let i = 0; i < p.count; i++) {
    const ax = Math.abs(n.getX(i)), ay = Math.abs(n.getY(i)), az = Math.abs(n.getZ(i))
    let u: number, v: number
    if (ax >= ay && ax >= az) { u = p.getZ(i); v = p.getY(i) }
    else if (ay >= az) { u = p.getX(i); v = p.getZ(i) }
    else { u = p.getX(i); v = p.getY(i) }
    uv[i * 2] = u; uv[i * 2 + 1] = v
  }
  g.setAttribute('uv', new THREE.BufferAttribute(uv, 2))
  return g
}

export function planeUV<T extends THREE.BufferGeometry>(g: T): T {
  const p = g.attributes.position
  const uv = new Float32Array(p.count * 2)
  for (let i = 0; i < p.count; i++) { uv[i * 2] = p.getX(i); uv[i * 2 + 1] = p.getY(i) }
  g.setAttribute('uv', new THREE.BufferAttribute(uv, 2))
  return g
}

export function scaleUV<T extends THREE.BufferGeometry>(g: T, su: number, sv: number): T {
  const uv = g.attributes.uv
  for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * su, uv.getY(i) * sv)
  uv.needsUpdate = true
  return g
}

export const rbox = (w: number, h: number, d: number, seg: number, r: number) => boxUV(new RoundedBoxGeometry(w, h, d, seg, Math.min(r, Math.min(w, h, d) / 2 - 0.001)))

/** Cylindre/capsule entre deux points (passepoils). */
export function tube(a: THREE.Vector3, b: THREE.Vector3, r: number, seg = 8) {
  const len = a.distanceTo(b)
  const g = new THREE.CapsuleGeometry(r, Math.max(0.0001, len - 2 * r), 4, seg)
  g.rotateX(Math.PI / 2)
  const m = new THREE.Matrix4().compose(
    a.clone().add(b).multiplyScalar(0.5),
    new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 0, 1), b.clone().sub(a).normalize()),
    new THREE.Vector3(1, 1, 1),
  )
  g.applyMatrix4(m)
  return boxUV(g)
}

/** Ruban plat suivant une courbe (ceintures de sécurité). */
export function ribbon(points: THREE.Vector3[], width: number, normal: THREE.Vector3, steps = 48) {
  const curve = new THREE.CatmullRomCurve3(points, false, 'catmullrom', 0.4)
  const pos: number[] = [], uvs: number[] = [], idx: number[] = []
  let len = 0
  let prev = curve.getPoint(0)
  for (let i = 0; i <= steps; i++) {
    const t = i / steps
    const p = curve.getPoint(t)
    len += p.distanceTo(prev); prev = p
    const tan = curve.getTangent(t)
    const side = new THREE.Vector3().crossVectors(tan, normal).normalize().multiplyScalar(width / 2)
    pos.push(p.x - side.x, p.y - side.y, p.z - side.z, p.x + side.x, p.y + side.y, p.z + side.z)
    uvs.push(len, 0, len, width)
    if (i < steps) { const k = i * 2; idx.push(k, k + 1, k + 2, k + 1, k + 3, k + 2) }
  }
  const g = new THREE.BufferGeometry()
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3))
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2))
  g.setIndex(idx)
  g.computeVertexNormals()
  return g
}

/** Ciel de toit : coque cylindrique ouverte, normales vers l’intérieur. */
export function headlinerGeo(halfW: number, peak: number, z0: number, z1: number, drop = 0.2, nx = 28, nz = 16) {
  const R = (halfW * halfW + drop * drop) / (2 * drop)
  const yc = peak - R
  const pos: number[] = [], uv: number[] = [], idx: number[] = []
  for (let j = 0; j <= nz; j++) for (let i = 0; i <= nx; i++) {
    const x = -halfW + (2 * halfW * i) / nx
    const y = yc + Math.sqrt(R * R - x * x)
    const z = z0 + ((z1 - z0) * j) / nz
    pos.push(x, y, z); uv.push(x, z)
  }
  for (let j = 0; j < nz; j++) for (let i = 0; i < nx; i++) {
    const a = j * (nx + 1) + i, b = a + 1, c = a + nx + 1, d = c + 1
    idx.push(a, b, c, b, d, c)
  }
  const g = new THREE.BufferGeometry()
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3))
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2))
  g.setIndex(idx)
  g.computeVertexNormals()
  // normale moyenne doit pointer vers le bas
  const ny = g.attributes.normal.getY(Math.floor(g.attributes.normal.count / 2))
  if (ny > 0) { const ii = g.index!; for (let k = 0; k < ii.count; k += 3) { const t = ii.getY(k); ii.setY(k, ii.getZ(k)); ii.setZ(k, t) } g.computeVertexNormals() }
  return g
}

/** Carte de porte : plan subdivisé avec reliefs (accoudoir, poche, nervure). */
export function doorCardGeo(len: number, h: number, seg = 40) {
  const g = new THREE.PlaneGeometry(len, h, seg, Math.round(seg * (h / len) * 1.2) + 6)
  const p = g.attributes.position
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i) / (len / 2) // -1..1
    const y = p.getY(i) / (h / 2)   // -1..1
    let z = 0
    z += 0.035 * Math.exp(-Math.pow((y + 0.05) / 0.22, 4)) * Math.exp(-Math.pow(x / 0.85, 6)) // bandeau d’accoudoir
    z -= 0.03 * Math.exp(-Math.pow((y + 0.62) / 0.18, 2)) * Math.exp(-Math.pow(x / 0.6, 4))    // poche
    z += 0.015 * Math.exp(-Math.pow((y - 0.55) / 0.12, 2))
    z -= 0.02 * (1 - Math.min(1, (1 - Math.abs(x)) * 12)) // bords légèrement rentrés
    p.setZ(i, z)
  }
  g.computeVertexNormals()
  return planeUV(g)
}

export function lineStitches(a: THREE.Vector3, b: THREE.Vector3, pitch = 0.011) {
  const out: THREE.Matrix4[] = []
  const dir = b.clone().sub(a)
  const len = dir.length()
  dir.normalize()
  const q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 0, 1), dir)
  const n = Math.max(1, Math.floor(len / pitch))
  for (let i = 0; i <= n; i++) {
    const p = a.clone().addScaledVector(dir, (i / n) * len)
    out.push(new THREE.Matrix4().compose(p, q, new THREE.Vector3(1, 1, 1)))
  }
  return out
}

export function arcStitches(radius: number, z: number, pitch = 0.012, a0 = 0, a1 = Math.PI * 2) {
  const out: THREE.Matrix4[] = []
  const n = Math.floor((radius * (a1 - a0)) / pitch)
  for (let i = 0; i < n; i++) {
    const a = a0 + ((a1 - a0) * i) / n
    const p = new THREE.Vector3(Math.cos(a) * radius, Math.sin(a) * radius, z)
    const q = new THREE.Quaternion().setFromEuler(new THREE.Euler(0, 0, a + Math.PI / 2)).multiply(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 0, 1), new THREE.Vector3(1, 0, 0)))
    out.push(new THREE.Matrix4().compose(p, q, new THREE.Vector3(1, 1, 1)))
  }
  return out
}
