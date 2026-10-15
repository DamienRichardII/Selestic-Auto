# Audit photoréalisme — Simulateur 3D Selestic Auto

Branche conseillée : `feature/photorealisme` (à créer sur le poste : `git checkout -b feature/photorealisme`). Rien n'est à déployer en production avant validation.

## 1. État technique (avant)
| Sujet | Constat |
|---|---|
| Moteur | WebGL2 via three 0.186 + react-three-fiber 9 + drei 10 |
| Géométrie | **Primitives procédurales** (RoundedBox, tore, rubans) — aucun GLB par défaut ; contrat GLB (`zone__*`, `fixed__*`) prêt dans `GlbInterior.tsx` |
| Matériaux | `MeshPhysicalMaterial` + textures **procédurales** canvas (grain, perforations, losanges) |
| Éclairage | Lightformers drei (Showroom/Jour/Nuit) |
| Post-traitement | N8AO, Outline, SMAA, ToneMapping ACES, Vignette |
| Profils | low / medium / high (`lib/capabilities.ts`) : DPR, ombres, AO, textures 256/512/1024 |
| Mobile | profil low : sans post, sans ombres |
| Personnalisation | store Zustand : matière/couleur/motif par zone, vues, snapshots, devis |

## 2. Fait dans cette étape (mêmes angles avant/après)
- **Matières PBR scannées (CC0 ambientCG)** : Leather038/030/037/039, Fabric030/004, Metal009, Rubber004. Albédo neutralisé en luminance (la teinte choisie ne détruit pas le grain), normale, rugosité, AO ; perforations avec profondeur ; Alcantara avec nap ; échelle réelle par matière (`scan.ts`).
- **Chargement progressif** : démarrage avec la texture procédurale, puis cartes scannées (512 px, 1024 px en Ultra). Repli automatique en cas d'échec.
- Plastiques fixes (tableau de bord, contre-portes) en soft-touch scanné.
- 3 HDRI CC0 Poly Haven déjà dans `sim3d/hdri/` (studio, ciel dégagé, nuit) — **pas encore branchés**.
- Aucune fonctionnalité retirée ; typage et build OK.

## 3. Reste à faire (honnêtement)
1. **Géométrie des sièges** : toujours des volumes arrondis. Le vrai photoréalisme exige des modèles sculptés (Blender) : sièges avant (assise, joues, dossier, appui-tête), volant, planche de bord, contre-portes, ceintures, en GLB avec meshes nommés `zone__*` (le moteur les accepte déjà). Étape intermédiaire possible : surface paramétrique sculptée (joues, coutures en creux, losanges en vrai relief).
2. Branchement des HDRI + exposition/tone mapping par ambiance.
3. Bloom discret, étalonnage, DoF (Ultra, vues de présentation), contact shadows, SSR à évaluer.
4. Renommer les profils Mobile / Équilibré / Ultra dans l'UI.
5. **WebGPU/TSL** : non migré — N8AO et pmndrs/postprocessing sont WebGL-only, la migration ferait régresser les effets.
6. **KTX2** : `toktx` indisponible ici ; textures en WebP pour l'instant.
7. **Performance réelle** : non mesurée (SwiftShader seulement). À tester sur un PC fort et 2–3 mobiles.

## 4. Licences
Textures : ambientCG (CC0). HDRI : Poly Haven (CC0). Reproductible via `sim3d-src/scripts/build-textures.py`.
