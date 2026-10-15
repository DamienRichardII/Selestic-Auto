import type { MaterialId, PatternId } from './zones'

export interface MaterialDef {
  id: MaterialId
  label: string
  short: string
  /** finition proposée « à valider » par l’atelier (non confirmée dans le cahier des charges) */
  optional?: boolean
}

export const MATERIALS: Record<MaterialId, MaterialDef> = {
  leather_smooth: { id: 'leather_smooth', label: 'Cuir lisse', short: 'Grain fin, léger brillant satiné' },
  leather_perforated: { id: 'leather_perforated', label: 'Cuir perforé', short: 'Perforations hexagonales, aspect sport' },
  leather_grained: { id: 'leather_grained', label: 'Cuir grainé', short: 'Grain marqué, toucher naturel' },
  suedine: { id: 'suedine', label: 'Suédine', short: 'Microfibre veloutée, mate' },
  alcantara: { id: 'alcantara', label: 'Alcantara', short: 'Microfibre technique, effet daim' },
  fabric: { id: 'fabric', label: 'Tissu', short: 'Textile tissé, mat et chaleureux' },
  carbon: { id: 'carbon', label: 'Carbone', short: 'Sergé 2×2 sous vernis', optional: true },
  brushed_alu: { id: 'brushed_alu', label: 'Aluminium brossé', short: 'Métal brossé anisotrope', optional: true },
  webbing: { id: 'webbing', label: 'Sangle', short: 'Sangle tissée sergée' },
  thread: { id: 'thread', label: 'Fil', short: 'Fil de surpiqûre' },
}

export interface PatternDef { id: PatternId; label: string }
export const PATTERNS: Record<PatternId, PatternDef> = {
  plain: { id: 'plain', label: 'Uni' },
  diamond: { id: 'diamond', label: 'Losanges matelassés' },
  ribs: { id: 'ribs', label: 'Côtes horizontales' },
  hex: { id: 'hex', label: 'Nid d’abeille' },
}
