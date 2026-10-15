import * as THREE from 'three'
import type { MaterialId, PatternId, ZoneId } from '../data/zones'
import { COLOR_BY_ID } from '../data/colors'
import { getTextures } from './proc'
import { applyScan, hasScan, type ScanName } from './scan'
import type { Config } from '../store/useConfigurator'

const cache = new Map<string, THREE.MeshPhysicalMaterial>()

export function buildMaterial(m: MaterialId, colorHex: string, pattern: PatternId, texSize: number): THREE.MeshPhysicalMaterial {
  // Les motifs de sellerie sont de la vraie géométrie (voir seatGeo.ts) : pour les matières scannées, la texture ne dépend pas du motif.
  if (hasScan(m)) pattern = 'plain'
  const key = `${m}|${pattern}|${colorHex}|${texSize}`
  const hit = cache.get(key)
  if (hit) return hit
  const tex = getTextures(m, pattern, texSize)
  const mat = new THREE.MeshPhysicalMaterial({ color: new THREE.Color(colorHex), roughness: 0.6, metalness: 0 })
  mat.name = `${m}:${pattern}`
  if (tex) {
    mat.map = tex.map
    mat.normalMap = tex.normal
    mat.roughnessMap = tex.rough
    const rep = 1 / tex.tile
    for (const t of [tex.map, tex.normal, tex.rough]) t.repeat.set(rep, rep)
    const q = pattern === 'plain' ? 1 : 1.6
    mat.normalScale = new THREE.Vector2(tex.ns * q, tex.ns * q)
  }
  const sheenCol = new THREE.Color(colorHex).lerp(new THREE.Color('#ffffff'), 0.14)
  switch (m) {
    case 'leather_smooth':
      Object.assign(mat, { roughness: 1, clearcoat: 0.14, clearcoatRoughness: 0.45, sheen: 0.3, sheenRoughness: 0.55, sheenColor: sheenCol, ior: 1.45, specularIntensity: 0.8 })
      break
    case 'leather_perforated':
      Object.assign(mat, { roughness: 1, clearcoat: 0.1, clearcoatRoughness: 0.5, sheen: 0.25, sheenRoughness: 0.6, sheenColor: sheenCol, ior: 1.45 })
      break
    case 'leather_grained':
      Object.assign(mat, { roughness: 1, clearcoat: 0.06, clearcoatRoughness: 0.6, sheen: 0.3, sheenRoughness: 0.6, sheenColor: sheenCol })
      break
    case 'suedine':
      Object.assign(mat, { roughness: 1, sheen: 0.55, sheenRoughness: 0.6, sheenColor: sheenCol, specularIntensity: 0.2 })
      break
    case 'alcantara':
      Object.assign(mat, { roughness: 1, sheen: 0.6, sheenRoughness: 0.45, sheenColor: sheenCol, specularIntensity: 0.22 })
      break
    case 'fabric':
      Object.assign(mat, { roughness: 1, sheen: 0.7, sheenRoughness: 0.7, sheenColor: sheenCol, specularIntensity: 0.3 })
      break
    case 'carbon':
      Object.assign(mat, { color: new THREE.Color('#ffffff'), roughness: 1, metalness: 0.2, clearcoat: 1, clearcoatRoughness: 0.04 })
      break
    case 'brushed_alu':
      Object.assign(mat, { color: new THREE.Color('#d9dcdf'), roughness: 1, metalness: 1, anisotropy: 0.8, anisotropyRotation: 0 })
      break
    case 'webbing':
      Object.assign(mat, { roughness: 1, sheen: 0.4, sheenRoughness: 0.7, sheenColor: sheenCol, specularIntensity: 0.3 })
      break
    case 'thread':
      Object.assign(mat, { roughness: 0.62, sheen: 0.6, sheenRoughness: 0.5, sheenColor: sheenCol })
      break
  }
  if (hasScan(m)) void applyScan(mat, m as ScanName, (texSize >= 1024 ? 1024 : 512))
  cache.set(key, mat)
  return mat
}

export type ZoneMats = Record<ZoneId, THREE.MeshPhysicalMaterial>

export function materialsFor(cfg: Config, texSize: number): ZoneMats {
  const out = {} as ZoneMats
  ;(Object.keys(cfg) as ZoneId[]).forEach((z) => {
    const c = cfg[z]
    out[z] = buildMaterial(c.material, COLOR_BY_ID[c.color]?.hex ?? '#222', c.pattern, texSize)
  })
  return out
}

// ---------- matières fixes (non personnalisables) ----------
const fixed = new Map<string, THREE.Material>()
const fixedKind = new WeakMap<THREE.Material, string>()
export const fixedKindOf = (m: THREE.Material) => fixedKind.get(m)
export function fixedMat(name: 'plastic' | 'plasticSoft' | 'chrome' | 'carpet' | 'glassBlack' | 'rubber' | 'pedestal' | 'gold', texSize: number): THREE.Material {
  const k = name + texSize
  const hit = fixed.get(k)
  if (hit) return hit
  let m: THREE.Material
  switch (name) {
    case 'plastic': {
      const t = getTextures('leather_grained', 'plain', Math.min(texSize, 512))
      const mm = new THREE.MeshPhysicalMaterial({ color: '#17191b', roughness: 1, clearcoat: 0.05, clearcoatRoughness: 0.7 })
      if (t) { const n = t.normal.clone(); n.repeat.set(5, 5); n.needsUpdate = true; mm.normalMap = n; mm.normalScale = new THREE.Vector2(0.5, 0.5); mm.roughnessMap = null; mm.roughness = 0.62 }
      void applyScan(mm, 'plastic', (texSize >= 1024 ? 1024 : 512))
      m = mm; break
    }
    case 'plasticSoft': m = new THREE.MeshPhysicalMaterial({ color: '#0f1011', roughness: 0.75, sheen: 0.3, sheenRoughness: 0.6, sheenColor: new THREE.Color('#444') }); break
    case 'chrome': m = new THREE.MeshPhysicalMaterial({ color: '#cfd2d4', metalness: 1, roughness: 0.18 }); break
    case 'gold': m = new THREE.MeshPhysicalMaterial({ color: '#c9a24b', metalness: 1, roughness: 0.28 }); break
    case 'carpet': {
      const t = getTextures('fabric', 'plain', Math.min(texSize, 512))
      const mm = new THREE.MeshPhysicalMaterial({ color: '#0d0e0f', roughness: 1, sheen: 0.25, sheenRoughness: 0.8 })
      if (t) { const mp = t.map.clone(); const nr = t.normal.clone(); for (const x of [mp, nr]) { x.repeat.set(9, 9); x.needsUpdate = true } mm.map = mp; mm.normalMap = nr }
      m = mm; break
    }
    case 'glassBlack': m = new THREE.MeshPhysicalMaterial({ color: '#05070a', roughness: 0.08, metalness: 0.2, clearcoat: 1, clearcoatRoughness: 0.03 }); break
    case 'rubber': m = new THREE.MeshStandardMaterial({ color: '#0b0b0c', roughness: 0.9 }); break
    case 'pedestal': m = new THREE.MeshPhysicalMaterial({ color: '#050505', roughness: 0.62, metalness: 0.05, clearcoat: 0.12, clearcoatRoughness: 0.5 }); break
  }
  fixed.set(k, m)
  fixedKind.set(m, name)
  return m
}
