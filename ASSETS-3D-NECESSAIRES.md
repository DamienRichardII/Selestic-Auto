# Assets 3D nécessaires (cahier des charges d'acquisition)

## 1. Modèle véhicule — HABITACLE en priorité
Berline ou SUV premium, **un seul fichier GLB** (ou .blend/.fbx convertible). **V1 : habitacle détaillé obligatoire ; carrosserie extérieure facultative** (à intégrer plus tard).

**Licence exigée** : usage commercial web, redistribution du fichier dans un site public autorisée, modification autorisée, pas de marque protégée reproduite (ou autorisation écrite). Conserver la facture/licence dans le dépôt interne (hors repo public).

**Extérieur *(phase ultérieure, non bloquant pour la v1)*** : carrosserie (peinture à clearcoat, matériau séparé), portes, capot, coffre, vitres (matériau verre séparé), jantes, pneus, phares/feux, rétroviseurs, plaque neutre.
**Intérieur (v1, obligatoire)** : sièges avant ET arrière, appuie-têtes, planche de bord, volant (moyeu + branches), console centrale, panneaux de 4 portes avec accoudoirs/inserts, ciel de toit + montants, moquette, 4 ceintures + boucles, pédalier, levier.

**Découpe obligatoire (meshes indépendants, noms stables)** — contrat existant (`sim3d-src/README.md` §5) étendu :
`zone__seat_cushion_{fl,fr,rl,rr}`, `zone__seat_back_*`, `zone__seat_bolster_*`, `zone__seat_headrest_*`, `zone__wheel`, `zone__belts`, `zone__headliner`, `zone__door_panels_*`, `zone__door_armrest_*`, `zone__decor`, `zone__stitching`, `zone__piping`, et `fixed__*` pour le reste ; extérieur : `body__paint`, `body__glass`, `body__wheel`, `body__tyre`, `body__light`, `body__mirror`, `body__trim`.
Conducteur à gauche, +Y haut, −Z avant, mètres, UV **en mètres** sur les surfaces personnalisables, normales propres, pas d'intersections.

**Budget technique** : ≤ 400 k triangles (desktop), variante ≤ 120 k (mobile/LOD) ; compression Meshopt/Draco ; textures KTX2.

## 2. Matières
Déjà présentes (CC0) : cuir lisse/grainé/perforé, suédine, Alcantara-like, tissu, carbone, alu brossé, plastique soft-touch.
À ajouter : **peinture carrosserie** (flocons métal, clearcoat), cuir semi-mat, **nuancier réel de l'atelier**, motifs de matelassage réels avec coutures (scan ou baking Blender).

## 3. Éclairage
HDRI 2K studio showroom gris clair, jour, nuit (actuels en 1K, CC0). Optionnel : sol studio avec ombre de contact bakée.

## 4. Shortlist de sourcing à explorer (hors d'atteinte depuis l'environnement)
Sketchfab Store, CGTrader, TurboSquid, Evermotion, 3DSky : filtrer « interior », « rigged doors », licence « Royalty Free / Standard », format FBX/Blender, habitacle détaillé. Vérifier **avant achat** que l'habitacle est de vraie géométrie (pas une texture) et que les sièges sont des meshes séparés.

## 5. Livrables attendus de la préparation Blender
`vehicule-v1.glb` (+ variante mobile), rapport de triangles, liste des meshes, textures KTX2, fichier .blend source conservé en interne.
