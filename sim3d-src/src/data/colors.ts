// Nuancier indicatif : les teintes réelles sont confirmées par l’atelier lors du devis.
export interface ColorDef { id: string; label: string; hex: string; thread?: boolean }

export const COLORS: ColorDef[] = [
  { id: 'noir', label: 'Noir', hex: '#16181a' },
  { id: 'anthracite', label: 'Anthracite', hex: '#3b4043' },
  { id: 'gris', label: 'Gris pierre', hex: '#8b9094' },
  { id: 'gris-clair', label: 'Gris clair', hex: '#c4c7c9' },
  { id: 'blanc', label: 'Blanc', hex: '#eeeeea' },
  { id: 'creme', label: 'Crème', hex: '#d9ccb0' },
  { id: 'sable', label: 'Beige sable', hex: '#b79f7c' },
  { id: 'cognac', label: 'Cognac', hex: '#9a5a2c' },
  { id: 'chocolat', label: 'Chocolat', hex: '#4b3125' },
  { id: 'bordeaux', label: 'Bordeaux', hex: '#5e1424' },
  { id: 'rouge', label: 'Rouge', hex: '#b3202a' },
  { id: 'orange', label: 'Orange', hex: '#d9661a' },
  { id: 'jaune', label: 'Jaune', hex: '#e3b91a' },
  { id: 'vert-selestic', label: 'Vert Selestic', hex: '#0f5c3f' },
  { id: 'vert-olive', label: 'Vert olive', hex: '#5c6b3a' },
  { id: 'bleu-nuit', label: 'Bleu nuit', hex: '#14233f' },
  { id: 'bleu', label: 'Bleu', hex: '#1f55b8' },
  { id: 'turquoise', label: 'Turquoise', hex: '#1fa6b8' },
  { id: 'violet', label: 'Violet', hex: '#5d2d8e' },
  { id: 'rose', label: 'Rose', hex: '#d9427a' },
  { id: 'dore', label: 'Doré', hex: '#c9a24b' },
  { id: 'argent', label: 'Argent', hex: '#b9bcc0' },
]

export const COLOR_BY_ID = Object.fromEntries(COLORS.map((c) => [c.id, c])) as Record<string, ColorDef>
