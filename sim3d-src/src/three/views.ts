import type { CameraViewId } from '../data/zones'

type V3 = [number, number, number]
export interface ViewDef { pos: V3; target: V3 }

export const VIEWS: Record<CameraViewId, ViewDef> = {
  global: { pos: [-2.9, 1.75, 2.5], target: [0, 0.6, 0.15] },
  driver: { pos: [-0.4, 1.12, 0.2], target: [-0.38, 0.84, -0.7] },
  passenger: { pos: [0.4, 1.12, 0.2], target: [-0.3, 0.78, -0.5] },
  rear: { pos: [-1.9, 1.15, 1.7], target: [0, 0.55, 0.92] },
  seats: { pos: [-1.75, 1.0, 0.7], target: [-0.2, 0.55, 0.05] },
  wheel: { pos: [-0.62, 1.06, 0.15], target: [-0.38, 0.82, -0.42] },
  roof: { pos: [0, 0.62, 0.55], target: [0, 1.15, -0.05] },
  door: { pos: [-1.45, 0.95, 0.3], target: [-0.74, 0.72, 0.12] },
  belts: { pos: [0.05, 1.05, -0.5], target: [-0.4, 0.8, 0.2] },
}

export const VIEW_LABEL: Record<CameraViewId, string> = {
  global: 'Vue globale', driver: 'Conducteur', passenger: 'Passager', rear: 'Arrière',
  seats: 'Sièges', wheel: 'Volant', roof: 'Ciel de toit', door: 'Portes', belts: 'Ceintures',
}

export const PRESET_VIEWS: CameraViewId[] = ['global', 'driver', 'passenger', 'rear']
