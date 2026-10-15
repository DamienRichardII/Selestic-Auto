// Zones personnalisables du configurateur et leur bibliothèque de matières autorisées.
// Les identifiants sont le contrat entre le modèle 3D (userData.zone / nom de nœud GLB),
// le store, l'interface et le récapitulatif de devis.

export type ZoneId =
  | 'seat_cushion'
  | 'seat_back'
  | 'seat_bolster'
  | 'seat_headrest'
  | 'wheel'
  | 'belts'
  | 'headliner'
  | 'door_panels'
  | 'decor'
  | 'stitching'
  | 'piping'

export type MaterialId =
  | 'leather_smooth'
  | 'leather_perforated'
  | 'leather_grained'
  | 'suedine'
  | 'alcantara'
  | 'fabric'
  | 'carbon'
  | 'brushed_alu'
  | 'webbing'
  | 'thread'

export type PatternId = 'plain' | 'diamond' | 'ribs' | 'hex'

export interface ZoneDef {
  id: ZoneId
  label: string
  group: 'Sièges' | 'Volant' | 'Ceintures' | 'Ciel de toit' | 'Portes & décor' | 'Finitions'
  hint: string
  materials: MaterialId[]
  /** motifs applicables (panneaux de sellerie) */
  patterns?: PatternId[]
  /** vue de caméra conseillée quand la zone est sélectionnée */
  view: CameraViewId
}

export type CameraViewId =
  | 'driver'
  | 'passenger'
  | 'rear'
  | 'global'
  | 'seats'
  | 'wheel'
  | 'roof'
  | 'door'
  | 'belts'

const SEAT_MATS: MaterialId[] = ['leather_smooth', 'leather_perforated', 'leather_grained', 'suedine', 'alcantara', 'fabric']

export const ZONES: ZoneDef[] = [
  { id: 'seat_cushion', label: 'Assise', group: 'Sièges', hint: 'Partie centrale de l’assise', materials: SEAT_MATS, patterns: ['plain', 'diamond', 'ribs', 'hex'], view: 'seats' },
  { id: 'seat_back', label: 'Dossier', group: 'Sièges', hint: 'Partie centrale du dossier', materials: SEAT_MATS, patterns: ['plain', 'diamond', 'ribs', 'hex'], view: 'seats' },
  { id: 'seat_bolster', label: 'Renforts latéraux', group: 'Sièges', hint: 'Joues d’assise et de dossier', materials: SEAT_MATS, patterns: ['plain'], view: 'seats' },
  { id: 'seat_headrest', label: 'Appuie-tête', group: 'Sièges', hint: 'Appuie-têtes avant et arrière', materials: SEAT_MATS, patterns: ['plain', 'diamond', 'ribs'], view: 'seats' },
  { id: 'wheel', label: 'Volant', group: 'Volant', hint: 'Couronne du volant', materials: ['leather_smooth', 'leather_perforated', 'leather_grained', 'alcantara', 'carbon'], view: 'wheel' },
  { id: 'belts', label: 'Ceintures', group: 'Ceintures', hint: 'Sangles de ceintures de sécurité', materials: ['webbing'], view: 'belts' },
  { id: 'headliner', label: 'Ciel de toit & montants', group: 'Ciel de toit', hint: 'Ciel de toit et habillages de montants', materials: ['alcantara', 'suedine', 'fabric', 'leather_smooth'], view: 'roof' },
  { id: 'door_panels', label: 'Panneaux de portes', group: 'Portes & décor', hint: 'Cartes de portes et accoudoir central', materials: ['leather_smooth', 'leather_perforated', 'leather_grained', 'suedine', 'alcantara', 'fabric'], view: 'door' },
  { id: 'decor', label: 'Inserts décoratifs', group: 'Portes & décor', hint: 'Inserts de portes et de planche de bord (finitions à valider avec l’atelier)', materials: ['carbon', 'brushed_alu', 'leather_smooth', 'alcantara'], view: 'door' },
  { id: 'stitching', label: 'Coutures & surpiqûres', group: 'Finitions', hint: 'Fil de couture de toutes les zones', materials: ['thread'], view: 'seats' },
  { id: 'piping', label: 'Passepoils', group: 'Finitions', hint: 'Cordons de finition entre panneaux', materials: ['leather_smooth', 'alcantara'], view: 'seats' },
]

export const ZONE_BY_ID = Object.fromEntries(ZONES.map((z) => [z.id, z])) as Record<ZoneId, ZoneDef>

export const GROUPS = ['Sièges', 'Volant', 'Ceintures', 'Ciel de toit', 'Portes & décor', 'Finitions'] as const
