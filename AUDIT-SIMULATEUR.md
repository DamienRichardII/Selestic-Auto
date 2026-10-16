# AUDIT — Passage au configurateur « véhicule complet » (phase 1)

> **Priorité validée : l'HABITACLE d'abord.** Carrosserie, jantes, vues extérieures et rotation 360° sont reportées à une phase ultérieure. Les sections ci-dessous s'appliquent d'abord à l'habitacle ; ce qui concerne l'extérieur est marqué *(plus tard)*.

*Branche : `feature/configurateur-premium` (issue de `main`). Aucun déploiement sans validation.*

## 1. Existant à conserver (déjà en `main`)
- Module `sim3d-src/` : React 19, react-three-fiber 9, drei 10, three 0.186, Zustand 5, TypeScript, Vite → sortie statique committée dans `sim3d/` (Vercel sans build).
- 11 zones (assise, dossier, renforts, appuie-tête, volant, ceintures, ciel de toit, portes, inserts, coutures, passepoils), 10 matières PBR (textures CC0 ambientCG), 22 teintes, 4 motifs, 3 éclairages HDRI (Poly Haven CC0), profils Mobile / Équilibré / Ultra, sauvegarde + lien de partage, récapitulatif → `devis.html` (id `SEL-3D-…`), repli « simulateur photo ».
- Contrat GLB déjà écrit et testé (`zone__*`, `fixed__*`, UV en mètres, −Z avant, conducteur x<0) : `GlbInterior.tsx`.
- Tout cela est réutilisable tel quel : **seul le modèle 3D change**.

## 2. Constat : pourquoi le rendu n'est pas « Alfa Romeo »
| Élément | État | Écart |
|---|---|---|
| Géométrie habitacle | primitives arrondies + sièges sculptés procéduralement (`seatGeo.ts`) | pas de vrai volume de tableau de bord, portes, console, montants |
| Carrosserie / vitres / jantes | **absentes** | pas de vue extérieure, pas de reflets, sièges « dans le vide » |
| Intégration | sièges posés sur un sol plat | impression de sièges flottants |
| Matières | PBR scannées OK | bonnes, mais appliquées à une forme simplifiée |
| Éclairage | HDRI + bloom/DoF/AO | correct ; limité par l'absence de carrosserie à refléter |
| Caméras | 4 vues + vues par zone | pas d'extérieur 360°, pas de vues conducteur/passager/ciel de toit dédiées |

**Conclusion : sans modèle de véhicule complet, aucune amélioration de lumière ou de texture n'atteindra le niveau des captures.** (Ce constat est aussi celui de `AUDIT-PHOTOREALISME.md` §3.)

## 3. Blocages identifiés
1. **Modèle 3D (bloquant n°1).** Aucun véhicule complet avec habitacle n'existe dans le dépôt. Depuis l'environnement de travail, seul `github.com`/`raw.githubusercontent.com` est joignable : Sketchfab, TurboSquid, CGTrader, Poly Haven et le site Alfa Romeo sont inaccessibles, donc je ne peux ni télécharger ni acheter un modèle ici.
2. **Modèles libres disponibles = insuffisants.** Les modèles de démonstration Khronos (ex. `CarConcept`, `ToyCar`) sont libres mais stylisés / sans habitacle détaillé : utilisables pour tester le pipeline (carrosserie, caméras, reflets), **pas** pour livrer un rendu client.
3. **Licences.** Les modèles de marques réelles (Alfa Romeo, BMW…) sont soumis à droits de marque : il faut un modèle générique, ou un modèle sous licence commerciale explicite (« royalty-free, usage web/configurateur, redistribution du GLB »). Le GLB étant téléchargeable par tout visiteur, **une licence d'usage éditorial ou « no redistribution » est exclue**.
4. **Géométrie.** Un modèle du commerce a rarement des sièges découpés par zone (assise / dossier / joues / appuie-tête / passepoils), des UV en mètres et des ceintures séparées : un travail Blender est quasi certain (découpe, UV, nommage `zone__*`).
5. **Pas de Blender, pas de GPU, pas de `toktx`** dans l'environnement : la préparation de modèle (découpe, UV, bake AO, KTX2) doit se faire sur un poste avec Blender. Les performances GPU réelles restent non mesurées.
6. **Appellations.** « Alcantara » (marque déposée) à valider ou renommer ; matières « carbone », « alu » à valider avec l'atelier.

## 4. Options pour obtenir le modèle (à arbitrer par Selestic)
*Cible révisée : un modèle dont l'**habitacle** est détaillé (planche de bord, 4 sièges, portes, console, ciel de toit, montants, ceintures, volant). La carrosserie peut être simplifiée ou absente : seuls les montants, vitres et pare-brise visibles depuis l'intérieur comptent pour la v1. Cela élargit le choix (modèles « interior only » moins chers) et réduit la préparation Blender.*

| Option | Qualité | Coût / délai | Risque |
|---|---|---|---|
| A. Acheter un modèle premium **berline/SUV avec habitacle détaillé** (licence commerciale royalty-free) et le préparer sous Blender | élevée | ≈ 100–500 € + 2–5 j de préparation | licence à lire ; découpe des zones |
| B. Commande d'un modèle sur mesure à un artiste 3D automobile | maximale | ≈ 1 500–5 000 €, 2–4 sem. | budget |
| C. Rendus précalculés (Blender Cycles) par combinaison + 3D simplifiée | photoréaliste en vues fixes | volume de rendus élevé | perd la liberté de caméra |
| D. Modèle libre (Khronos) pour prototyper pipeline/caméras uniquement | faible | 0 € | ne répond pas au critère « photoréaliste » |

**Recommandation : A pour un premier véhicule**, validation de 4 vues + sièges avant, puis généralisation (comme vous le proposez). D peut servir d'ici là pour développer carrosserie, caméras intérieur/extérieur et interface 70/30 sans attendre l'asset.

## 5. Ce qui peut être fait *sans* le modèle final
Interface 70/30 + barre inférieure, caméras **intérieures** (conducteur, passager, habitacle, sièges avant/arrière, assises, dossiers, volant, portes, ciel de toit ; flèches, plein écran, limites anti-traversée) ; vues extérieures *(plus tard)*, transitions, chargeur GLB multi-meshes avec carrosserie, matériaux carrosserie (clearcoat), verre, profils de qualité, gestion de perte de contexte WebGL. Tout est branché sur le contrat de nommage et se ré-attachera au vrai GLB sans réécriture.

## 6. Décisions demandées
1. Option modèle (A / B / C / D) et budget.
2. Si A : fournir le lien/la licence du modèle, ou m'autoriser à en choisir un parmi une shortlist (voir `ASSETS-3D-NECESSAIRES.md`).
3. Valider que le prototype de développement (D) peut être déployé en préversion Vercel seulement, jamais en production.
