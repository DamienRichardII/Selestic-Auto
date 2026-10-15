// Chargement d'un habitacle réel (GLB exporté de Blender) selon le « contrat de nommage » :
//   zone__<zoneId>[...]   → mesh personnalisable (ex. zone__seat_cushion, zone__door_panels_L)
//   fixed__<kind>         → pièce non personnalisable (plastic, plasticSoft, chrome, carpet, glassBlack, rubber, gold)
// Les matériaux du fichier sont ignorés : la bibliothèque PBR Selestic les remplace. Les UV doivent être en mètres
// (1 unité UV = 1 m), afin que le grain du cuir garde une échelle réaliste.
import { useEffect, useMemo } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { Select } from '@react-three/postprocessing'
import { useFrame, type ThreeEvent } from '@react-three/fiber'
import { useConfigurator } from '../store/useConfigurator'
import { TIERS } from '../lib/capabilities'
import { ZONES, type ZoneId } from '../data/zones'
import { COLOR_BY_ID } from '../data/colors'
import { buildMaterial, fixedMat, materialsFor } from './materials'

const FIXED = ['plastic', 'plasticSoft', 'chrome', 'carpet', 'glassBlack', 'rubber', 'gold'] as const

function ZoneGroup({ zone, group }: { zone: ZoneId; group: THREE.Group }) {
  const active = useConfigurator((s) => s.selected === zone || s.hovered === zone)
  const select = useConfigurator((s) => s.select)
  const hover = useConfigurator((s) => s.hover)
  return (
    <Select enabled={active}>
      <primitive
        object={group}
        onClick={(e: ThreeEvent<MouseEvent>) => { if (e.delta > 5) return; e.stopPropagation(); select(zone) }}
        onPointerOver={(e: ThreeEvent<PointerEvent>) => { e.stopPropagation(); hover(zone); document.body.style.cursor = 'pointer' }}
        onPointerOut={() => { hover(null); document.body.style.cursor = '' }}
      />
    </Select>
  )
}

export default function GlbInterior({ url }: { url: string }) {
  const gltf = useGLTF(url)
  const config = useConfigurator((s) => s.config)
  const tier = useConfigurator((s) => s.tier)
  const tex = TIERS[tier].texSize

  const parts = useMemo(() => {
    const root = gltf.scene.clone(true)
    root.updateMatrixWorld(true)
    const list: THREE.Mesh[] = []
    root.traverse((o) => { if ((o as THREE.Mesh).isMesh) list.push(o as THREE.Mesh) })
    const zones = new Map<ZoneId, THREE.Group>()
    const fixed = new Map<string, THREE.Group>()
    for (const m of list) {
      const n = m.name
      const zd = ZONES.find((z) => n.startsWith('zone__' + z.id))
      if (zd) {
        let g = zones.get(zd.id)
        if (!g) { g = new THREE.Group(); g.name = 'z:' + zd.id; zones.set(zd.id, g) }
        g.attach(m)
      } else {
        const k = FIXED.find((f) => n.startsWith('fixed__' + f)) ?? 'plastic'
        let g = fixed.get(k)
        if (!g) { g = new THREE.Group(); g.name = 'f:' + k; fixed.set(k, g) }
        g.attach(m)
      }
    }
    // vue en coupe : repère les pièces latérales (portes, montants, inserts) et le ciel de toit
    const side: { mesh: THREE.Object3D; s: 'L' | 'R' | 'roof' }[] = []
    const box = new THREE.Box3()
    for (const m of list) {
      box.setFromObject(m)
      const cx = (box.min.x + box.max.x) / 2
      const zoneName = m.parent?.name ?? ''
      if (cx < -0.6) side.push({ mesh: m, s: 'L' })
      else if (cx > 0.6) side.push({ mesh: m, s: 'R' })
      else if (zoneName === 'z:headliner') side.push({ mesh: m, s: 'roof' })
    }
    return { zones, fixed, side }
  }, [gltf])

  useFrame(({ camera }) => {
    const x = camera.position.x, y = camera.position.y
    const view = useConfigurator.getState().view
    for (const it of parts.side) {
      it.mesh.visible = it.s === 'L' ? x > -0.82 || view === 'door' : it.s === 'R' ? x < 0.82 : Math.abs(x) < 0.85 && y < 1.3
    }
  })

  const mats = useMemo(() => materialsFor(config, tex), [config, tex])
  const stitchMat = useMemo(() => buildMaterial('thread', COLOR_BY_ID[config.stitching.color].hex, 'plain', tex), [config.stitching.color, tex])
  const doorMat = useMemo(() => { const m = mats.door_panels.clone(); m.side = THREE.DoubleSide; return m }, [mats.door_panels])

  useEffect(() => {
    parts.zones.forEach((g, zone) => {
      const mat = zone === 'stitching' ? stitchMat : zone === 'door_panels' ? doorMat : mats[zone]
      g.traverse((o) => {
        const m = o as THREE.Mesh
        if (!m.isMesh) return
        m.material = mat; m.castShadow = true; m.receiveShadow = true; m.userData.zone = zone
      })
    })
    parts.fixed.forEach((g, kind) => {
      g.traverse((o) => {
        const m = o as THREE.Mesh
        if (!m.isMesh) return
        m.material = fixedMat(kind as (typeof FIXED)[number], tex); m.castShadow = true; m.receiveShadow = true
      })
    })
  }, [parts, mats, stitchMat, doorMat, tex])

  return (
    <group name="sim-interior">
      {[...parts.zones].map(([z, g]) => <ZoneGroup key={z} zone={z} group={g} />)}
      {[...parts.fixed].map(([k, g]) => <primitive key={k} object={g} />)}
    </group>
  )
}
