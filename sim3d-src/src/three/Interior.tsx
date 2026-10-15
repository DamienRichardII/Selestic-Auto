import { useEffect, useMemo, useRef } from 'react'
import * as THREE from 'three'
import { useFrame, type ThreeElements, type ThreeEvent } from '@react-three/fiber'
import { Select } from '@react-three/postprocessing'
import { useConfigurator } from '../store/useConfigurator'
import { TIERS } from '../lib/capabilities'
import type { ZoneId } from '../data/zones'
import { COLOR_BY_ID } from '../data/colors'
import { ZONE_BY_ID } from '../data/zones'
import { fixedMat, materialsFor, buildMaterial } from './materials'
import { arcStitches, doorCardGeo, headlinerGeo, lineStitches, rbox, ribbon, scaleUV, tube, boxUV } from './geo'

const V = (x: number, y: number, z: number) => new THREE.Vector3(x, y, z)

/** Maillage cliquable rattaché à une zone personnalisable. */
function Z(props: { zone: ZoneId; geometry: THREE.BufferGeometry; material: THREE.Material } & Omit<ThreeElements['mesh'], 'geometry' | 'material'>) {
  const { zone, geometry, material, ...rest } = props
  const active = useConfigurator((s) => s.selected === zone || s.hovered === zone)
  const select = useConfigurator((s) => s.select)
  const hover = useConfigurator((s) => s.hover)
  return (
    <Select enabled={active}>
      <mesh
        geometry={geometry}
        material={material}
        castShadow
        receiveShadow
        userData={{ zone }}
        name={`zone__${zone}`}
        onClick={(e: ThreeEvent<MouseEvent>) => { if (e.delta > 5) return; e.stopPropagation(); select(zone) }}
        onPointerOver={(e: ThreeEvent<PointerEvent>) => { e.stopPropagation(); hover(zone); document.body.style.cursor = 'pointer' }}
        onPointerOut={() => { hover(null); document.body.style.cursor = '' }}
        {...rest}
      />
    </Select>
  )
}

function Fixed(props: { geometry: THREE.BufferGeometry; material: THREE.Material } & Omit<ThreeElements['mesh'], 'geometry' | 'material'>) {
  return <mesh castShadow receiveShadow {...props} />
}

function Stitches({ matrices, material, size = [0.0042, 0.0016, 0.0075] }: { matrices: THREE.Matrix4[]; material: THREE.Material; size?: [number, number, number] }) {
  const ref = useRef<THREE.InstancedMesh>(null)
  const geo = useMemo(() => new THREE.CapsuleGeometry(1, 1, 2, 6), [])
  useEffect(() => {
    const m = ref.current
    if (!m) return
    const s = new THREE.Matrix4().makeScale(size[0], size[1], size[2] / 2)
    matrices.forEach((mx, i) => m.setMatrixAt(i, mx.clone().multiply(s)))
    m.instanceMatrix.needsUpdate = true
  }, [matrices, size])
  const active = useConfigurator((s) => s.selected === 'stitching' || s.hovered === 'stitching')
  const select = useConfigurator((s) => s.select)
  return (
    <Select enabled={active}>
      <instancedMesh ref={ref} name="zone__stitching" userData={{ zone: 'stitching' }} args={[geo, material, matrices.length]} onClick={(e: ThreeEvent<MouseEvent>) => { if (e.delta > 5) return; e.stopPropagation(); select('stitching') }} />
    </Select>
  )
}

interface SeatProps { x: number; z: number; mats: ReturnType<typeof materialsFor>; seg: number; stitchMat: THREE.Material; pipeMat: THREE.Material; tex: number; rear?: boolean }

function Seat({ x, z, mats, seg, stitchMat, pipeMat, tex, rear }: SeatProps) {
  const g = useMemo(() => {
    const cushionC = rbox(0.3, 0.1, 0.5, seg, 0.03)
    const cushionS = rbox(0.085, 0.125, 0.47, seg, 0.03)
    const backC = rbox(0.3, 0.58, 0.085, seg, 0.03)
    const backS = rbox(0.07, 0.42, 0.1, seg, 0.032)
    const head = rbox(0.2, 0.15, 0.08, seg, 0.03)
    const skirt = rbox(0.46, 0.17, 0.46, seg, 0.03)
    const pipeC = [tube(V(-0.153, 0.385, -0.235), V(-0.153, 0.385, 0.235), 0.0045), tube(V(0.153, 0.385, -0.235), V(0.153, 0.385, 0.235), 0.0045)]
    const pipeB = [tube(V(-0.153, 0.01, -0.052), V(-0.153, 0.57, -0.052), 0.0045), tube(V(0.153, 0.01, -0.052), V(0.153, 0.57, -0.052), 0.0045)]
    const post = new THREE.CylinderGeometry(0.008, 0.008, 0.1, 10)
    const stitchTop: THREE.Matrix4[] = []
    for (const sx of [-1, 1]) for (const off of [-0.014, 0.014]) stitchTop.push(...lineStitches(V(sx * 0.153 + off, 0.3855, -0.225), V(sx * 0.153 + off, 0.3855, 0.225)))
    const stitchBack: THREE.Matrix4[] = []
    for (const sx of [-1, 1]) for (const off of [-0.014, 0.014]) stitchBack.push(...lineStitches(V(sx * 0.153 + off, 0.02, -0.0525), V(sx * 0.153 + off, 0.56, -0.0525)).map((m) => m.clone().multiply(new THREE.Matrix4().makeRotationX(Math.PI / 2))))
    const stitchHead = lineStitches(V(-0.07, 0, -0.0455), V(0.07, 0, -0.0455), 0.011)
    return { cushionC, cushionS, backC, backS, head, skirt, pipeC, pipeB, post, stitchTop, stitchBack, stitchHead }
  }, [seg])
  const tilt = rear ? 0.26 : 0.2
  return (
    <group position={[x, 0, z]}>
      <Fixed geometry={g.skirt} material={fixedMat('plasticSoft', tex)} position={[0, 0.17, 0.02]} />
      <Z zone="seat_cushion" geometry={g.cushionC} material={mats.seat_cushion} position={[0, 0.335, 0]} />
      <Z zone="seat_bolster" geometry={g.cushionS} material={mats.seat_bolster} position={[-0.19, 0.345, 0]} rotation={[0, 0, 0.1]} />
      <Z zone="seat_bolster" geometry={g.cushionS} material={mats.seat_bolster} position={[0.19, 0.345, 0]} rotation={[0, 0, -0.1]} />
      {g.pipeC.map((p, i) => <Z key={'pc' + i} zone="piping" geometry={p} material={pipeMat} position={[0, 0, 0]} />)}
      <Stitches matrices={g.stitchTop} material={stitchMat} />
      <group position={[0, 0.43, 0.25]} rotation={[tilt, 0, 0]}>
        <group position={[0, 0, 0]}>
          <Z zone="seat_back" geometry={g.backC} material={mats.seat_back} position={[0, 0.29, 0]} />
          <Z zone="seat_bolster" geometry={g.backS} material={mats.seat_bolster} position={[-0.188, 0.23, 0.0]} rotation={[0, 0.08, 0]} />
          <Z zone="seat_bolster" geometry={g.backS} material={mats.seat_bolster} position={[0.188, 0.23, 0.0]} rotation={[0, -0.08, 0]} />
          {g.pipeB.map((p, i) => <Z key={'pb' + i} zone="piping" geometry={p} material={pipeMat} position={[0, 0, 0]} />)}
          <Stitches matrices={g.stitchBack} material={stitchMat} />
          <Fixed geometry={g.post} material={fixedMat('chrome', tex)} position={[-0.055, 0.65, 0.01]} />
          <Fixed geometry={g.post} material={fixedMat('chrome', tex)} position={[0.055, 0.65, 0.01]} />
          <Z zone="seat_headrest" geometry={g.head} material={mats.seat_headrest} position={[0, 0.74, 0.01]} />
          <Stitches matrices={g.stitchHead.map((m) => m.clone().setPosition(new THREE.Vector3().setFromMatrixPosition(m).add(V(0, 0.74, 0))))} material={stitchMat} />
        </group>
      </group>
    </group>
  )
}

function Wheel({ mats, seg, stitchMat, tex }: { mats: ReturnType<typeof materialsFor>; seg: number; stitchMat: THREE.Material; tex: number }) {
  const g = useMemo(() => {
    const rim = new THREE.TorusGeometry(0.175, 0.0175, 20 + seg * 4, 72 + seg * 8)
    // UV en mètres : u le long de la couronne, v autour de la section
    scaleUV(rim, 2 * Math.PI * 0.175, 2 * Math.PI * 0.0175)
    const spokeS = rbox(0.1, 0.03, 0.02, seg, 0.01)
    const spokeB = rbox(0.045, 0.1, 0.02, seg, 0.01)
    const hub = rbox(0.1, 0.1, 0.045, seg, 0.03)
    const stitch = arcStitches(0.1745, 0.0152, 0.012)
    const stitch2 = arcStitches(0.1745, -0.0152, 0.012)
    return { rim, spokeS, spokeB, hub, stitch: stitch.concat(stitch2) }
  }, [seg])
  return (
    <group position={[-0.38, 0.82, -0.42]} rotation={[-0.42, 0, 0]}>
      <Z zone="wheel" geometry={g.rim} material={mats.wheel} />
      <Fixed geometry={g.spokeS} material={fixedMat('plastic', tex)} position={[-0.1, -0.005, 0]} />
      <Fixed geometry={g.spokeS} material={fixedMat('plastic', tex)} position={[0.1, -0.005, 0]} />
      <Fixed geometry={g.spokeB} material={fixedMat('plastic', tex)} position={[0, -0.09, 0]} />
      <Fixed geometry={g.hub} material={fixedMat('plasticSoft', tex)} position={[0, 0, -0.01]} />
      <Stitches matrices={g.stitch} material={stitchMat} size={[0.0036, 0.0014, 0.0065]} />
    </group>
  )
}

function Belt({ pts, normal, mats, tex }: { pts: THREE.Vector3[]; normal: THREE.Vector3; mats: ReturnType<typeof materialsFor>; tex: number }) {
  const g = useMemo(() => ribbon(pts, 0.046, normal), [pts, normal])
  const end = pts[pts.length - 1]
  const first = pts[0]
  return (
    <group>
      <Z zone="belts" geometry={g} material={mats.belts} />
      <Fixed geometry={useMemo(() => rbox(0.05, 0.016, 0.07, 3, 0.006), [])} material={fixedMat('chrome', tex)} position={[end.x, end.y + 0.01, end.z]} />
      <Fixed geometry={useMemo(() => rbox(0.06, 0.05, 0.02, 3, 0.006), [])} material={fixedMat('plasticSoft', tex)} position={[first.x, first.y + 0.02, first.z + 0.02]} />
    </group>
  )
}

export function Interior() {
  const leftRef = useRef<THREE.Group>(null)
  const rightRef = useRef<THREE.Group>(null)
  const roofRef = useRef<THREE.Group>(null)
  useFrame(({ camera }) => {
    // vue en coupe : on masque le côté (portes + montants) situé entre la caméra et l’habitacle
    if (leftRef.current) leftRef.current.visible = camera.position.x > -0.82 || useConfigurator.getState().view === 'door'
    if (rightRef.current) rightRef.current.visible = camera.position.x < 0.82
    if (roofRef.current) roofRef.current.visible = Math.abs(camera.position.x) < 0.85 && camera.position.y < 1.3
  })
  const config = useConfigurator((s) => s.config)
  const tier = useConfigurator((s) => s.tier)
  const lighting = useConfigurator((s) => s.lighting)
  const T = TIERS[tier]
  const tex = T.texSize
  const mats = useMemo(() => materialsFor(config, tex), [config, tex])
  const stitchMat = useMemo(() => buildMaterial('thread', COLOR_BY_ID[config.stitching.color].hex, 'plain', tex), [config.stitching.color, tex])
  const pipeMat = mats.piping
  const doorMat = useMemo(() => { const m = mats.door_panels.clone(); m.side = THREE.DoubleSide; return m }, [mats.door_panels])
  const seg = T.segments

  const geoms = useMemo(() => {
    const head = headlinerGeo(0.74, 1.2, -0.66, 1.5)
    const doorF = doorCardGeo(0.98, 0.5)
    const doorR = doorCardGeo(0.86, 0.5)
    const arm = rbox(0.5, 0.075, 0.1, seg, 0.03)
    const armR = rbox(0.42, 0.07, 0.09, seg, 0.03)
    const insertF = rbox(0.9, 0.034, 0.012, 3, 0.004)
    const insertR = rbox(0.78, 0.03, 0.012, 3, 0.004)
    const pillarA = rbox(0.03, 0.5, 0.07, 3, 0.012)
    const pillarB = rbox(0.03, 0.3, 0.1, 3, 0.012)
    const pillarC = rbox(0.03, 0.36, 0.12, 3, 0.012)
    const dash = rbox(1.5, 0.32, 0.34, seg, 0.05)
    const dashTop = rbox(1.46, 0.07, 0.4, seg, 0.03)
    const dashInsert = rbox(1.2, 0.032, 0.016, 3, 0.004)
    const cluster = rbox(0.34, 0.15, 0.04, 3, 0.01)
    const screen = rbox(0.34, 0.2, 0.025, 3, 0.008)
    const console_ = rbox(0.22, 0.24, 0.9, seg, 0.04)
    const consoleTop = rbox(0.2, 0.05, 0.4, seg, 0.02)
    const sill = rbox(0.06, 0.1, 2.9, 3, 0.02)
    const floor = boxUV(new THREE.PlaneGeometry(1.5, 3.2, 1, 1).rotateX(-Math.PI / 2))
    const stitchDoor: THREE.Matrix4[] = [
      ...lineStitches(V(-0.43, 0.16, 0.012), V(0.43, 0.16, 0.012)),
      ...lineStitches(V(-0.43, 0.145, 0.012), V(0.43, 0.145, 0.012)),
    ]
    return { head, doorF, doorR, arm, armR, insertF, insertR, pillarA, pillarB, pillarC, dash, dashTop, dashInsert, cluster, screen, console_, consoleTop, sill, floor, stitchDoor }
  }, [seg])

  // cadran instrumentation (canvas) – décor neutre, sans logo
  const gauge = useMemo(() => {
    const c = document.createElement('canvas'); c.width = 512; c.height = 220
    const x = c.getContext('2d')!
    x.fillStyle = '#05080b'; x.fillRect(0, 0, 512, 220)
    for (const cx of [130, 382]) {
      x.strokeStyle = '#c9a24b'; x.lineWidth = 3
      x.beginPath(); x.arc(cx, 110, 80, Math.PI * 0.75, Math.PI * 2.25); x.stroke()
      x.strokeStyle = 'rgba(201,162,75,.5)'; x.lineWidth = 1.5
      for (let i = 0; i <= 12; i++) { const a = Math.PI * 0.75 + (Math.PI * 1.5 * i) / 12; x.beginPath(); x.moveTo(cx + Math.cos(a) * 68, 110 + Math.sin(a) * 68); x.lineTo(cx + Math.cos(a) * 80, 110 + Math.sin(a) * 80); x.stroke() }
      x.strokeStyle = '#e8f0ea'; x.lineWidth = 3; x.beginPath(); x.moveTo(cx, 110); x.lineTo(cx + Math.cos(Math.PI * 1.1) * 62, 110 + Math.sin(Math.PI * 1.1) * 62); x.stroke()
    }
    x.fillStyle = '#e8f0ea'; x.font = '600 34px sans-serif'; x.textAlign = 'center'; x.fillText('Selestic', 256, 128)
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4
    return t
  }, [])
  const gaugeMat = useMemo(() => new THREE.MeshPhysicalMaterial({ color: '#fff', map: gauge, emissive: '#ffffff', emissiveMap: gauge, emissiveIntensity: lighting === 'night' ? 1.4 : 0.55, roughness: 0.2, clearcoat: 1, clearcoatRoughness: 0.05 }), [gauge, lighting])
  const ambMat = useMemo(() => new THREE.MeshBasicMaterial({ color: new THREE.Color('#e0b24a').multiplyScalar(lighting === 'night' ? 2.2 : 0.0), toneMapped: false }), [lighting])

  const beltFront = (sx: number, z: number) => [V(sx * 0.68, 1.03, z + 0.38), V(sx * 0.58, 0.98, z + 0.21), V(sx * 0.46, 0.88, z + 0.14), V(sx * 0.31, 0.66, z + 0.11), V(sx * 0.2, 0.47, z + 0.12)]
  const normal = useMemo(() => V(0, 0.2, -0.98).normalize(), [])
  const bF = useMemo(() => [beltFront(-1, 0), beltFront(1, 0)], [])
  const bR = useMemo(() => [beltFront(-1, 0.92).map((p) => p.clone().add(V(0.0, 0, 0))).map((p, i) => (i === 0 ? p.add(V(0, 0, 0.0)) : p)), beltFront(1, 0.92)], [])
  const dark = fixedMat('plastic', tex)
  const soft = fixedMat('plasticSoft', tex)
  const chrome = fixedMat('chrome', tex)
  const screenMat = fixedMat('glassBlack', tex)

  return (
    <group name="sim-interior">
      {/* sol & seuils */}
      <mesh geometry={geoms.floor} material={fixedMat('carpet', tex)} position={[0, 0.02, 0.1]} receiveShadow />
      <Fixed geometry={geoms.sill} material={soft} position={[-0.79, 0.07, 0.1]} />
      <Fixed geometry={geoms.sill} material={soft} position={[0.79, 0.07, 0.1]} />

      {/* planche de bord & console (non personnalisables) */}
      <Fixed geometry={geoms.dash} material={dark} position={[0, 0.74, -0.7]} />
      <Fixed geometry={geoms.dashTop} material={soft} position={[0, 0.9, -0.66]} />
      <Z zone="decor" geometry={geoms.dashInsert} material={mats.decor} position={[0, 0.8, -0.523]} />
      <mesh geometry={geoms.dashInsert} material={ambMat} position={[0, 0.775, -0.525]} scale={[1, 0.15, 1]} />
      <Fixed geometry={geoms.cluster} material={soft} position={[-0.38, 0.91, -0.5]} rotation={[-0.35, 0, 0]} />
      <mesh position={[-0.38, 0.9, -0.478]} rotation={[-0.35, 0, 0]} material={gaugeMat}>
        <planeGeometry args={[0.31, 0.13]} />
      </mesh>
      <Fixed geometry={geoms.screen} material={screenMat} position={[0.1, 0.9, -0.5]} rotation={[-0.15, 0, 0]} />
      <Fixed geometry={geoms.console_} material={dark} position={[0, 0.17, -0.1]} />
      <Fixed geometry={geoms.consoleTop} material={soft} position={[0, 0.3, 0.1]} />
      <mesh position={[0, 0.12, -0.3]} material={ambMat}><boxGeometry args={[0.2, 0.01, 0.4]} /></mesh>

      {/* sièges */}
      <Seat x={-0.38} z={0.02} mats={mats} seg={seg} stitchMat={stitchMat} pipeMat={pipeMat} tex={tex} />
      <Seat x={0.38} z={0.02} mats={mats} seg={seg} stitchMat={stitchMat} pipeMat={pipeMat} tex={tex} />
      <Seat x={-0.36} z={0.92} mats={mats} seg={seg} stitchMat={stitchMat} pipeMat={pipeMat} tex={tex} rear />
      <Seat x={0.36} z={0.92} mats={mats} seg={seg} stitchMat={stitchMat} pipeMat={pipeMat} tex={tex} rear />

      <Wheel mats={mats} seg={seg} stitchMat={stitchMat} tex={tex} />

      {/* ceintures */}
      <Belt pts={bF[0]} normal={normal} mats={mats} tex={tex} />
      <Belt pts={bF[1]} normal={normal} mats={mats} tex={tex} />
      <Belt pts={bR[0]} normal={normal} mats={mats} tex={tex} />
      <Belt pts={bR[1]} normal={normal} mats={mats} tex={tex} />

      {/* portes : cartes de porte (coupe : masquées côté caméra extérieure) */}
      {([-1, 1] as const).map((sx) => (
        <group key={sx} ref={sx < 0 ? leftRef : rightRef}>
          <group position={[sx * 0.745, 0, 0]} rotation={[0, (sx < 0 ? 1 : -1) * Math.PI / 2, 0]}>
            <Z zone="door_panels" geometry={geoms.doorF} material={doorMat} position={[0.0, 0.62, 0.0]} />
            <Z zone="door_panels" geometry={geoms.arm} material={mats.door_panels} position={[-0.12, 0.64, 0.055]} />
            <Z zone="decor" geometry={geoms.insertF} material={mats.decor} position={[-0.0, 0.8, 0.02]} />
            <Stitches matrices={geoms.stitchDoor.map((m) => m.clone().multiply(new THREE.Matrix4().makeTranslation(0, 0.6, 0)))} material={stitchMat} />
          </group>
          <group position={[sx * 0.745, 0, 1.0]} rotation={[0, (sx < 0 ? 1 : -1) * Math.PI / 2, 0]}>
            <Z zone="door_panels" geometry={geoms.doorR} material={doorMat} position={[0.0, 0.62, 0.0]} />
            <Z zone="door_panels" geometry={geoms.armR} material={mats.door_panels} position={[-0.1, 0.64, 0.05]} />
            <Z zone="decor" geometry={geoms.insertR} material={mats.decor} position={[0, 0.8, 0.02]} />
          </group>
          {/* montants (habillages) */}
          <Z zone="headliner" geometry={geoms.pillarA} material={mats.headliner} position={[sx * 0.735, 0.98, -0.42]} rotation={[0.55, 0, 0]} />
          <Z zone="headliner" geometry={geoms.pillarB} material={mats.headliner} position={[sx * 0.745, 0.97, 0.55]} />
          <Z zone="headliner" geometry={geoms.pillarC} material={mats.headliner} position={[sx * 0.735, 0.97, 1.45]} rotation={[-0.3, 0, 0]} />
        </group>
      ))}

      {/* ciel de toit (coque simple face : invisible de l’extérieur) */}
      <group ref={roofRef}><Z zone="headliner" geometry={geoms.head} material={mats.headliner} /></group>

      {/* repère de zone (étiquette) */}
      <ZoneLabelAnchor />
    </group>
  )
}

export function Podium() {
  const tier = useConfigurator((s) => s.tier)
  const tex = TIERS[tier].texSize
  return (
    <group>
      <mesh position={[0, -0.02, 0.1]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <circleGeometry args={[4.6, 96]} />
        <primitive object={fixedMat('pedestal', tex)} attach="material" />
      </mesh>
      <mesh position={[0, -0.015, 0.1]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[2.38, 2.4, 128]} />
        <meshBasicMaterial color="#c9a24b" toneMapped={false} />
      </mesh>
    </group>
  )
}

function ZoneLabelAnchor() {
  const hovered = useConfigurator((s) => s.hovered)
  useEffect(() => { document.documentElement.dataset.s3dHover = hovered ? ZONE_BY_ID[hovered].label : '' }, [hovered])
  return null
}
