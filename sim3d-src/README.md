# Simulateur 3D Selestic — sources & maintenance

Module React / three.js compilé en JavaScript statique dans `../sim3d/` (aucun build côté Vercel).
Contexte et décisions : voir `../AUDIT-SIMULATEUR-3D.md`.

## 1. Commandes

```bash
cd sim3d-src
npm ci                 # une seule fois (node_modules est ignoré par git)
npm run dev            # serveur de développement Vite (rechargement à chaud)
npm run typecheck      # TypeScript strict
npm run build:site     # compile vers ../sim3d/ (à committer)
```

Tester le site **via un serveur HTTP** (`python -m http.server 8080` à la racine du site) : les modules ES sont refusés en `file://`,
la page bascule alors automatiquement sur la version photo.

## 2. Structure

```
src/
  embed.tsx              point d'entrée : mountSim3D(el, { onError, modelUrl })
  store/useConfigurator.ts  état central (zones, matières, couleurs, motifs, vue, éclairage, qualité, projet)
  data/zones.ts          zones personnalisables + matières autorisées par zone + vue caméra conseillée
  data/materials.ts      libellés des matières et motifs
  data/colors.ts         nuancier (indicatif — à remplacer par le nuancier réel de l'atelier)
  three/proc.ts          textures PBR procédurales (albédo / normales / rugosité, tileables)
  three/materials.ts     matières PBR (MeshPhysicalMaterial) + matières fixes
  three/Interior.tsx     habitacle procédural de démonstration
  three/GlbInterior.tsx  chargeur d'habitacle GLB (contrat de nommage §5)
  three/Scene.tsx        Canvas, caméra (CameraControls), éclairage, post-traitement, export GLB
  three/views.ts         vues caméra
  ui/App.tsx, sim3d.css  interface (préfixe CSS `s3d`, isolée du reste du site)
  lib/capabilities.ts    détection WebGL2, niveaux de qualité (low/medium/high)
  lib/recap.ts           récapitulatif texte + lien de partage
../js/sim3d-loader.js    chargeur côté site (détection, import différé, repli photo)
```

## 3. Ajouter / modifier

* **Nouvelle matière** : ajouter son id dans `MaterialId` (`data/zones.ts`), son libellé (`data/materials.ts`), son générateur dans `three/proc.ts` (`fieldsFor`) et ses paramètres physiques dans `three/materials.ts` (`buildMaterial`) ; l'autoriser dans les zones voulues (`ZONES[].materials`).
* **Nouvelle couleur** : une ligne dans `data/colors.ts`.
* **Nouvelle zone** : `ZoneId` + entrée dans `ZONES`, config par défaut dans `DEFAULT_CONFIG` (store), mesh `zone__<id>` dans le modèle.
* **Nouveau motif** : `PatternId`, `PATTERNS`, fonction `quilt()` dans `proc.ts`.
* **Qualité** : réglages par niveau dans `TIERS` (`lib/capabilities.ts`).

## 4. Fonctionnement du devis

« Envoyer au devis » ouvre `devis.html?sim={"v":3,"id":"SEL-3D-…","lines":[…]}`. `js/main.js` pré-remplit la description (ancien format « liste de lignes » toujours accepté). **Aucun prix** n'est calculé. Les rendus capturés sont téléchargeables dans le récapitulatif (non transmis automatiquement : voir §7).

## 5. Contrat de nommage des modèles GLB (Blender → site)

Exporter en glTF binaire (`.glb`), **échelle en mètres, +Y haut, véhicule orienté vers −Z, conducteur à gauche (x < 0)**.
**UV en mètres** (1 unité UV = 1 m) pour que le grain des matières garde sa taille réelle. Les matériaux du fichier sont ignorés.

| Nom du mesh (préfixe) | Rôle |
|---|---|
| `zone__seat_cushion`, `zone__seat_back`, `zone__seat_bolster`, `zone__seat_headrest` | sièges (avant et arrière) |
| `zone__wheel`, `zone__belts`, `zone__headliner`, `zone__door_panels`, `zone__decor` | volant, ceintures, ciel de toit + montants, panneaux de portes, inserts |
| `zone__stitching`, `zone__piping` | surpiqûres (mesh ou instances), passepoils |
| `fixed__plastic`, `fixed__plasticSoft`, `fixed__chrome`, `fixed__carpet`, `fixed__glassBlack`, `fixed__rubber`, `fixed__gold` | pièces non personnalisables |

Un suffixe libre est permis (`zone__seat_cushion_front_L`). Un mesh sans préfixe valide devient `fixed__plastic`.
Vue en coupe : les pièces dont le centre est à |x| > 0,6 m sont masquées côté caméra ; le ciel de toit est masqué quand la caméra est à l'extérieur. Ciel de toit et cartes de porte doivent être des surfaces **simple face** orientées vers l'habitacle.

Activer un modèle : ajouter l'attribut `data-model="sim3d/models/mon-habitacle.glb"` sur `<div id="sim3d-root">` dans `simulateur.html`
(lu par `js/sim3d-loader.js`, transmis à `mountSim3D({ modelUrl })`). URL de même origine uniquement.
Si le GLB est introuvable, le prototype procédural s'affiche et un message l'indique.

Un GLB de référence respectant ce contrat est fourni : `models/interior-prototype.glb` (export du prototype ; régénérable depuis la console du navigateur : `await __s3d.download()`).
Compression conseillée avant mise en ligne : `npx @gltf-transform/cli meshopt in.glb out.glb --level medium` (le GLB de référence passe de 3,4 Mo à ≈ 0,7 Mo et reste chargeable). **Ne pas utiliser** la commande `optimize` complète : elle fusionne les meshes et casse le contrat de nommage.

## 6. Ce qu'il manque pour atteindre le niveau « configurateur constructeur »

**Modèles 3D (Blender, par gabarit de véhicule : citadine, berline, SUV, utilitaire)**
* habitacle complet modélisé à l'échelle : sièges avant/arrière **découpés par zone** (assise, dossier, joues, appuie-tête, passepoils), volant avec moyeu et branches, 4 contre-portes détaillées, planche de bord, console, montants, ciel de toit, ceintures et boucles ;
* UV propres en mètres, normales lissées, bevels ; budget conseillé ≤ 250 k triangles (ordinateur) et variante ≤ 80 k (mobile / LOD) ;
* baking AO par pièce si possible.

**Textures PBR (scans ou photogrammétrie des matières réellement proposées)**
* cuirs (lisse, perforé, grainé), Alcantara / microfibre, suédine, tissus, sangle, carbone, aluminium brossé, fil : albédo, normales, rugosité, AO, 2 K tileable, compressées KTX2 ;
* motifs de matelassage réels (losanges, côtes, nid d'abeille) avec leurs coutures ;
* **nuancier réel de l'atelier** (références fournisseur) pour remplacer `data/colors.ts`.

**Éclairage**
* 3 HDRI (studio showroom, extérieur jour, nuit) 2 K, pré-filtrés ;
* éventuellement une carrosserie/vitrage simplifié pour le reflet dans les vitres.

**Validations métier**
* liste des finitions autorisées (carbone, aluminium, autres décors) ;
* appellation « Alcantara » (marque déposée) : confirmer la licence ou renommer ;
* gabarits de véhicules à proposer (ou saisie libre) et correspondance avec le formulaire de devis.

## 7. Pistes d'évolution

* **Rendus dans la demande de devis** : transmettre les captures (stockage Supabase Storage / Vercel Blob + lien dans l'email) — non fait car il faut un stockage et une politique de conservation validés.
* **Persistance / comptes** : Supabase (table `configurations`, `projectId`, config JSON) seulement si l'atelier veut retrouver les projets côté back-office.
* **WebGPU** : `WebGPURenderer` avec repli WebGL2 une fois les assets de production disponibles.
* **Accessibilité 3D** : la scène est pilotée à la souris/au toucher ; l'interface (zones, matières, couleurs, vues, récapitulatif) est conçue pour le clavier (vrais boutons, focus visible, libellés ARIA) — à valider avec un lecteur d'écran.

## 8. Déploiement Vercel

1. `cd sim3d-src && npm ci && npm run build:site`
2. `git add -A && git commit -m "Simulateur 3D" && git push` — Vercel déploie le dossier tel quel (aucun build, aucune variable d'environnement).
3. Vérifier `https://<domaine>/simulateur.html` : la 3D se charge ; en cas d'erreur, la version photo s'affiche.

## 9. Tests réalisés

* TypeScript strict : OK. Build Vite : OK (≈ 600 Ko compressés, chargés uniquement sur la page Simulateur).
* Navigateur Chromium (rendu logiciel) : chargement, 4 vues, vues par zone, 3 éclairages, 3 niveaux de qualité, changement de matière/teinte/motif, application à plusieurs zones, réinitialisation, récapitulatif, transmission au devis (identifiant de projet), repli photo sans WebGL, chargement d'un GLB externe (aller-retour), mobile 390 px.
* **À faire sur appareils réels** : fluidité (images/s) sur ordinateur et mobiles de gamme moyenne, Safari iOS, réseaux lents.
