import { Suspense, useEffect, useMemo } from 'react'
import * as THREE from 'three'
import { Canvas, useThree } from '@react-three/fiber'
import { CameraControls, Environment, Lightformer, PerformanceMonitor } from '@react-three/drei'
import { Bloom, BrightnessContrast, DepthOfField, EffectComposer, HueSaturation, N8AO, Outline, Selection, SMAA, ToneMapping, Vignette } from '@react-three/postprocessing'
import { ToneMappingMode } from 'postprocessing'
import type CameraControlsImpl from 'camera-controls'
import { useConfigurator, type Snapshot } from '../store/useConfigurator'
import { sceneApi } from '../lib/api'
import { TIERS } from '../lib/capabilities'
import { Component, lazy, type ReactNode } from 'react'
import { Interior, Podium } from './Interior'
import { fixedKindOf } from './materials'
import { assetRoot } from './scan'
const GlbInterior = lazy(() => import('./GlbInterior'))

/** Si le GLB est introuvable ou invalide, on revient au prototype procédural. */
class ModelGuard extends Component<{ children: ReactNode }, { err: boolean }> {
  state = { err: false }
  static getDerivedStateFromError() { return { err: true } }
  componentDidCatch() { const st = useConfigurator.getState(); st.say('Modèle 3D introuvable : prototype de démonstration affiché.'); st.setModelUrl(null) }
  render() { return this.state.err ? null : this.props.children }
}
import { VIEWS, VIEW_LABEL } from './views'

function Rig() {
  const view = useConfigurator((s) => s.view)
  const controls = useThree((s) => s.controls) as CameraControlsImpl | null
  useEffect(() => {
    if (!controls) return
    const v = VIEWS[view]
    controls.setLookAt(...v.pos, ...v.target, true)
  }, [view, controls])
  useEffect(() => {
    if (!controls) return
    controls.setBoundary(new THREE.Box3(new THREE.Vector3(-3.2, -0.1, -1.6), new THREE.Vector3(3.2, 2.6, 3.2)))
  }, [controls])
  return null
}


function Bridge() {
  const gl = useThree((s) => s.gl)
  const scene3 = useThree((s) => s.scene)
  const controls = useThree((s) => s.controls) as CameraControlsImpl | null
  useEffect(() => {
    if (!controls) return
    const frame = () => new Promise<void>((r) => requestAnimationFrame(() => requestAnimationFrame(() => r())))
    sceneApi.current = {
      dolly: (d) => { void controls.dolly(d, true) },
      capture: async () => {
        const cur = useConfigurator.getState().view
        const list: Snapshot[] = []
        for (const id of ['global', 'seats', 'driver', 'rear'] as const) {
          const v = VIEWS[id]
          await controls.setLookAt(...v.pos, ...v.target, false)
          await frame(); await frame()
          list.push({ view: id, label: VIEW_LABEL[id], url: gl.domElement.toDataURL('image/jpeg', 0.86) })
        }
        const v = VIEWS[cur]
        await controls.setLookAt(...v.pos, ...v.target, false)
        return list
      },
    }
    const exportGLB = async (): Promise<ArrayBuffer> => {
      const src = scene3.getObjectByName('sim-interior')
      if (!src) throw new Error('habitacle introuvable')
      const root = src.clone(true)
      const ph = new Map<string, THREE.MeshStandardMaterial>()
      root.traverse((o) => {
        o.visible = true
        const m = o as THREE.Mesh
        if (!m.isMesh) return
        const mat = Array.isArray(m.material) ? m.material[0] : m.material
        const zone = m.userData?.zone as string | undefined
        const kind = fixedKindOf(mat)
        const key = zone ? `zone__${zone}` : `fixed__${kind ?? 'plasticSoft'}`
        if (!zone) m.name = key
        if (!ph.has(key)) ph.set(key, new THREE.MeshStandardMaterial({ name: key, color: zone ? '#888888' : '#222222' }))
        m.material = ph.get(key)!
        m.castShadow = m.receiveShadow = false
      })
      const { GLTFExporter } = await import('three/examples/jsm/exporters/GLTFExporter.js')
      return new Promise<ArrayBuffer>((res, rej) => new GLTFExporter().parse(root, (r) => res(r as ArrayBuffer), rej, { binary: true }))
    }
    ;(window as unknown as { __s3d?: Record<string, unknown> }).__s3d = {
      scene: scene3,
      exportGLB,
      download: async () => {
        const buf = await exportGLB()
        const a = document.createElement('a')
        a.href = URL.createObjectURL(new Blob([buf], { type: 'model/gltf-binary' }))
        a.download = 'interior-prototype.glb'
        a.click()
      },
    }
    useConfigurator.getState().setReady(true)
    return () => { sceneApi.current = null }
  }, [controls, gl, scene3])
  return null
}

function EnvLights() {
  const lighting = useConfigurator((s) => s.lighting)
  const tier = useConfigurator((s) => s.tier)
  const res = TIERS[tier].envRes
  const bg = lighting === 'night' ? '#02030a' : lighting === 'day' ? '#a8c0d8' : '#050505'
  const { scene } = useThree()
  useEffect(() => { scene.background = new THREE.Color(bg); scene.fog = null }, [scene, bg])
  return (
    <Environment resolution={res} frames={1} key={lighting + tier} background={false} environmentIntensity={lighting === 'night' ? 0.35 : lighting === 'day' ? 1.25 : 1}>
      {lighting === 'showroom' && (
        <>
          <color attach="background" args={['#060606']} />
          <Lightformer form="rect" intensity={8} position={[0, 5, 0]} rotation-x={Math.PI / 2} scale={[9, 5, 1]} />
          <Lightformer form="rect" intensity={5} color="#fff4e0" position={[-5, 2, 1]} rotation-y={Math.PI / 2} scale={[6, 2.5, 1]} />
          <Lightformer form="rect" intensity={5} color="#e8f2ff" position={[5, 2.5, -1]} rotation-y={-Math.PI / 2} scale={[6, 2.5, 1]} />
          <Lightformer form="rect" intensity={3} position={[0, 1.5, -6]} scale={[10, 2, 1]} />
          <Lightformer form="ring" intensity={2} color="#c9a24b" position={[0, 3, 5]} scale={4} />
          <Lightformer form="rect" intensity={2.4} color="#f4efe6" position={[0, -2.5, 0]} rotation-x={-Math.PI / 2} scale={[8, 6, 1]} />
        </>
      )}
      {lighting === 'day' && (
        <>
          <color attach="background" args={['#cfe0f0']} />
          <Lightformer form="rect" intensity={7} color="#fff9ee" position={[0, 6, 2]} rotation-x={Math.PI / 2} scale={[12, 8, 1]} />
          <Lightformer form="rect" intensity={5} color="#fff1d8" position={[-6, 3, 3]} rotation-y={Math.PI / 2} scale={[8, 4, 1]} />
          <Lightformer form="rect" intensity={2.4} color="#bcd6f2" position={[6, 2, -2]} rotation-y={-Math.PI / 2} scale={[8, 4, 1]} />
          <Lightformer form="rect" intensity={2} color="#d9e8f5" position={[0, 2, -7]} scale={[14, 3, 1]} />
          <Lightformer form="rect" intensity={2.6} color="#efe9dc" position={[0, -2.5, 0]} rotation-x={-Math.PI / 2} scale={[8, 6, 1]} />
        </>
      )}
      {lighting === 'night' && (
        <>
          <color attach="background" args={['#020308']} />
          <Lightformer form="rect" intensity={0.9} color="#6f86b8" position={[0, 5, 0]} rotation-x={Math.PI / 2} scale={[8, 4, 1]} />
          <Lightformer form="rect" intensity={2.4} color="#e8b866" position={[-4, 0.8, 2]} rotation-y={Math.PI / 2} scale={[1.2, 1.2, 1]} />
          <Lightformer form="circle" intensity={2.2} color="#ffd9a0" position={[4, 1.2, -3]} scale={1.2} />
          <Lightformer form="rect" intensity={0.5} color="#8a6c3a" position={[0, -2.5, 0]} rotation-x={-Math.PI / 2} scale={[8, 6, 1]} />
        </>
      )}
    </Environment>
  )
}

const HDRI: Record<string, { file: string; intensity: number; rot: number }> = {
  showroom: { file: 'monochrome_studio_01.hdr', intensity: 1.15, rot: 0.6 },
  day: { file: 'kloofendal_48d_partly_cloudy_puresky.hdr', intensity: 1.3, rot: 2.2 },
  night: { file: 'dikhololo_night.hdr', intensity: 1.1, rot: 0 },
}

/** Éclairage HDRI (studio / ciel / nuit). Repli sur les panneaux lumineux si le fichier manque ou en profil Mobile. */
class HdriGuard extends Component<{ children: ReactNode; fallback: ReactNode }, { err: boolean }> {
  state = { err: false }
  static getDerivedStateFromError() { return { err: true } }
  render() { return this.state.err ? this.props.fallback : this.props.children }
}

function Env() {
  const lighting = useConfigurator((s) => s.lighting)
  const tier = useConfigurator((s) => s.tier)
  const bg = lighting === 'night' ? '#02030a' : lighting === 'day' ? '#a8c0d8' : '#050505'
  const { scene } = useThree()
  useEffect(() => { scene.background = new THREE.Color(bg) }, [scene, bg])
  if (tier === 'low') return <EnvLights />
  const h = HDRI[lighting]
  return (
    <HdriGuard key={lighting + tier} fallback={<EnvLights />}>
      <Suspense fallback={<EnvLights />}>
        <Environment files={`${assetRoot()}hdri/${h.file}`} background={false} environmentIntensity={h.intensity} environmentRotation={[0, h.rot, 0]} />
      </Suspense>
    </HdriGuard>
  )
}

function Lights() {
  const lighting = useConfigurator((s) => s.lighting)
  const tier = useConfigurator((s) => s.tier)
  const T = TIERS[tier]
  const warm = lighting === 'night'
  return (
    <>
      <directionalLight
        castShadow={T.shadows}
        position={[1.8, 3.2, 1.2]}
        intensity={lighting === 'night' ? 0.15 : lighting === 'day' ? 2.4 : 1.7}
        color={lighting === 'day' ? '#fff3dc' : '#ffffff'}
        shadow-mapSize={[T.shadowMap, T.shadowMap]}
        shadow-camera-left={-2.2}
        shadow-camera-right={2.2}
        shadow-camera-top={2.4}
        shadow-camera-bottom={-2.4}
        shadow-camera-near={0.5}
        shadow-camera-far={9}
        shadow-bias={-0.0004}
        shadow-normalBias={0.02}
      />
      {warm && (
        <>
          <pointLight position={[-0.7, 0.6, 0.2]} color="#d8a84a" intensity={0.6} distance={2.2} decay={2} />
          <pointLight position={[0.7, 0.6, 0.2]} color="#d8a84a" intensity={0.6} distance={2.2} decay={2} />
          <pointLight position={[0, 0.5, -0.4]} color="#d9a441" intensity={0.5} distance={2} decay={2} />
          <pointLight position={[0, 1.1, 0.5]} color="#ffe2b0" intensity={0.35} distance={2.4} decay={2} />
        </>
      )}
    </>
  )
}

function Post() {
  const tier = useConfigurator((s) => s.tier)
  const view = useConfigurator((s) => s.view)
  const lighting = useConfigurator((s) => s.lighting)
  const T = TIERS[tier]
  if (!T.post) return null
  const ultra = tier === 'high'
  return (
    <EffectComposer multisampling={ultra ? 4 : 0} enableNormalPass={false} autoClear={false}>
      {T.ao ? <N8AO aoRadius={0.45} distanceFalloff={0.9} intensity={2.4} quality="medium" halfRes /> : <></>}
      {T.outline ? <Outline blur edgeStrength={6} pulseSpeed={0.6} visibleEdgeColor={0xd9b45a} hiddenEdgeColor={0x8a6c24} width={900} /> : <></>}
      {T.bloom ? <Bloom mipmapBlur intensity={lighting === 'night' ? 0.45 : 0.16} luminanceThreshold={0.92} luminanceSmoothing={0.2} radius={0.6} /> : <></>}
      {ultra && view === 'global' ? <DepthOfField worldFocusDistance={3.4} worldFocusRange={2.6} bokehScale={1.6} /> : <></>}
      {ultra ? <></> : <SMAA />}
      <ToneMapping mode={ToneMappingMode.ACES_FILMIC} />
      <HueSaturation saturation={0.04} />
      <BrightnessContrast contrast={0.05} />
      <Vignette eskil={false} offset={0.2} darkness={0.5} />
    </EffectComposer>
  )
}

export default function Scene() {
  const tier = useConfigurator((s) => s.tier)
  const T = TIERS[tier]
  const lighting = useConfigurator((s) => s.lighting)
  const setReady = useConfigurator((s) => s.setReady)
  const modelUrl = useConfigurator((s) => s.modelUrl)
  const reduce = useMemo(() => { try { return matchMedia('(prefers-reduced-motion: reduce)').matches } catch { return false } }, [])
  const dprMax = useMemo(() => T.dpr[1], [T])
  return (
    <Canvas
      key={tier}
      shadows={T.shadows}
      dpr={[T.dpr[0], dprMax]}
      camera={{ fov: 42, near: 0.03, far: 60, position: VIEWS.global.pos }}
      gl={{ antialias: !T.post, powerPreference: 'high-performance', preserveDrawingBuffer: true, toneMapping: T.post ? THREE.NoToneMapping : THREE.ACESFilmicToneMapping, toneMappingExposure: lighting === 'night' ? 1.4 : 1.25 }}
      onCreated={({ gl }) => {
        gl.domElement.addEventListener('webglcontextlost', (e) => { e.preventDefault(); setReady(false); useConfigurator.getState().say('Contexte graphique perdu — rechargez la page.') })
      }}
      aria-label="Habitacle 3D interactif"
    >
      <PerformanceMonitor flipflops={2} onDecline={() => { const st = useConfigurator.getState(); if (st.qualityPref !== 'auto') return; const next = st.tier === 'high' ? 'medium' : st.tier === 'medium' ? 'low' : null; if (next) { useConfigurator.setState({ tier: next }); st.say('Qualité ajustée automatiquement pour rester fluide') } }} />
      <CameraControls makeDefault smoothTime={reduce ? 0.04 : 0.45} draggingSmoothTime={0.08} minDistance={0.06} maxDistance={7} dollySpeed={0.7} truckSpeed={0} azimuthRotateSpeed={0.7} polarRotateSpeed={0.7} mouseButtons={{ left: 1, middle: 0, right: 0, wheel: 16 }} touches={{ one: 64, two: 32768, three: 0 }} />
      <Rig />
      <Bridge />
      <Suspense fallback={null}>
        <Env />
        <Lights />
        <Selection>
          {modelUrl ? <ModelGuard><Suspense fallback={null}><GlbInterior url={modelUrl} /></Suspense></ModelGuard> : <Interior />}
          <Podium />
          <Post />
        </Selection>
      </Suspense>
    </Canvas>
  )
}
