// Textures PBR scannées (ambientCG, CC0) — chargées à la demande, de façon progressive :
// le matériau démarre avec la texture procédurale puis reçoit les cartes scannées dès qu'elles sont décodées.
import * as THREE from 'three'
import type { MaterialId } from '../data/zones'

export type ScanName = MaterialId | 'plastic'

/** Échelle réelle (m) d'une tuile, intensité de relief et nature de l'albédo. */
export const SCAN: Partial<Record<ScanName, { tile: number; ns: number; srgbAlbedo: true }>> = {
  leather_smooth: { tile: 0.4, ns: 1.8, srgbAlbedo: true },
  leather_grained: { tile: 0.4, ns: 1.5, srgbAlbedo: true },
  leather_perforated: { tile: 0.336, ns: 1.3, srgbAlbedo: true },
  suedine: { tile: 0.3, ns: 1.0, srgbAlbedo: true },
  alcantara: { tile: 0.25, ns: 1.1, srgbAlbedo: true },
  fabric: { tile: 0.3, ns: 1.3, srgbAlbedo: true },
  carbon: { tile: 0.12, ns: 1.0, srgbAlbedo: true },
  brushed_alu: { tile: 0.4, ns: 0.8, srgbAlbedo: true },
  plastic: { tile: 0.3, ns: 1.0, srgbAlbedo: true },
}

export const hasScan = (m: ScanName) => !!SCAN[m]

const loader = new THREE.TextureLoader()
const cache = new Map<string, Promise<THREE.Texture>>()

/** Racine des ressources : le code vit dans /sim3d/sim3d.js ou /sim3d/chunks/*.js ; textures et HDRI à côté. */
export function assetRoot() {
  const here = import.meta.url
  return here.includes('/chunks/') ? here.slice(0, here.lastIndexOf('/chunks/') + 1) : here.slice(0, here.lastIndexOf('/') + 1)
}

function url(name: string, map: string, size: number) {
  return `${assetRoot()}tex/${name}/${map}_${size}.webp`
}

function tex(name: string, map: 'albedo' | 'normal' | 'rough' | 'ao', size: number, aniso: number) {
  const k = `${name}|${map}|${size}`
  let p = cache.get(k)
  if (!p) {
    p = loader.loadAsync(url(name, map, size)).then((t) => {
      t.wrapS = t.wrapT = THREE.RepeatWrapping
      t.colorSpace = map === 'albedo' ? THREE.SRGBColorSpace : THREE.NoColorSpace
      t.anisotropy = aniso
      t.needsUpdate = true
      return t
    })
    cache.set(k, p)
  }
  return p
}

/** Applique (de façon asynchrone) les cartes scannées à un matériau existant. */
export async function applyScan(mat: THREE.MeshPhysicalMaterial, name: ScanName, size: number, aniso = 8): Promise<boolean> {
  const cfg = SCAN[name]
  if (!cfg) return false
  try {
    const [a, n, r, ao] = await Promise.all([tex(name, 'albedo', size, aniso), tex(name, 'normal', size, aniso), tex(name, 'rough', size, aniso), tex(name, 'ao', size, aniso)])
    const rep = 1 / cfg.tile
    for (const t of [a, n, r, ao]) t.repeat.set(rep, rep)
    mat.map = a
    mat.normalMap = n
    mat.normalScale = new THREE.Vector2(cfg.ns, cfg.ns)
    mat.roughnessMap = r
    mat.aoMap = ao
    mat.aoMapIntensity = 1
    mat.needsUpdate = true
    return true
  } catch {
    return false // on garde la texture procédurale
  }
}
