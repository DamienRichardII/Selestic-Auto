// Normalise le nom de la feuille de style (sim3d.css) pour que la page puisse la référencer de façon stable.
import { readdirSync, copyFileSync, rmSync, existsSync } from 'node:fs'
const out = new URL('../../sim3d/', import.meta.url).pathname
const dir = out + 'assets/'
if (existsSync(dir)) {
  for (const f of readdirSync(dir)) if (f.endsWith('.css')) { copyFileSync(dir + f, out + 'sim3d.css'); rmSync(dir + f) }
  try { rmSync(dir, { recursive: false }) } catch { /* dossier non vide ou absent */ }
}
