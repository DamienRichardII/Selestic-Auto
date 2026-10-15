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

## 2. Fait (mêmes angles avant/après)
**Matières**
- PBR scannées (CC0 ambientCG) pour cuir lisse/grainé/perforé, suédine, Alcantara, tissu, carbone, alu brossé, plastique soft-touch : albédo neutralisé (la teinte garde le grain), normale, rugosité, AO ; perforations avec profondeur. Chargement progressif (512 px, 1024 px en Ultra), repli sur l'ancienne texture procédurale.

**Sièges sculptés** (`seatGeo.ts`, remplace les boîtes arrondies des sièges)
- Assise : creux, joues relevées, cascade avant ; dossier : galbe lombaire, épaules ; appui-tête bombé ; coque arrière plastique.
- Matelassage en **vrai relief** : losanges, côtes, nid d'abeille (gorges + coussinets), gorges de couture entre panneaux.
- Passepoils et surpiqûres posés sur la surface (coutures de panneaux, surpiqûre de bord, coutures dans les gorges).
- Zones indépendantes conservées : assise, joues, dossier, appui-tête, passepoils, coutures ; sélection/survol inchangés.
- Maillage adapté au profil (pas de 16 / 9,5 / 6 mm).

**Éclairage** : HDRI CC0 Poly Haven (studio, ciel dégagé, nuit) ; panneaux lumineux conservés en repli et en profil Mobile.

**Rendu** : bloom discret, étalonnage léger, profondeur de champ (Ultra, vue globale uniquement), multi-échantillonnage 4× en Ultra, tone mapping ACES.

**Profils** : Mobile / Équilibré / Ultra (ancien Économique / Équilibrée / Maximale).

**Vérifié** : typage OK ; 11 zones sélectionnables ; changement de motif, couleur ; enregistrer/réinitialiser/recharger ; récapitulatif devis ; aucune erreur console ni 404 en Mobile et Équilibré ; Ultra démarre sans erreur.

## 3. Reste à faire (honnêtement)
1. **Volant, planche de bord, portes, ceintures, console** : toujours des formes simplifiées. Ils demandent de vrais modèles Blender (GLB, meshes `zone__*`). Les sièges ne sont pas des scans de vrais sièges : surfaces générées, crédibles mais pas un modèle d'atelier.
2. Modèles réels de sièges Selestic (idéalement scannés) pour le dernier niveau de réalisme.
3. Ombres de contact et SSR : non ajoutés (AO N8 déjà actif en Ultra).
4. **WebGPU/TSL** : non migré — N8AO et pmndrs/postprocessing sont WebGL-only ; la migration ferait régresser les effets.
5. **KTX2** : `toktx` indisponible ici ; textures en WebP (≈ 21 Mo au total dans `sim3d/`, chargées à la demande).
6. **Performances réelles : non mesurées** (rendu logiciel uniquement). À tester sur un PC fort et 2–3 mobiles ; en Ultra la profondeur de champ et le multi-échantillonnage sont les premiers à désactiver si besoin.
7. Profondeur de champ et bloom jamais vus sur GPU réel : à valider visuellement.

## 4. Licences
Textures : ambientCG (CC0). HDRI : Poly Haven (CC0). Voir `CREDITS-3D.md`. Reproductible via `sim3d-src/scripts/build-textures.py`.
