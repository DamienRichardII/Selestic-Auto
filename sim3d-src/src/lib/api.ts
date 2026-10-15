import type { Snapshot } from '../store/useConfigurator'
export interface SceneApi { capture: () => Promise<Snapshot[]>; dolly: (d: number) => void }
export const sceneApi: { current: SceneApi | null } = { current: null }
