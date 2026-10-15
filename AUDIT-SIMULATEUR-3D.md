# Audit technique — Simulateur 3D Selestic Auto

*Date : 15/10/2026 · Périmètre : dépôt `Selestic-Auto` (site statique) · Statut : prototype 3D vérifiable livré*

## 1. État du dépôt (constat)

| Élément | Constat |
|---|---|
| Stack du site | HTML/CSS/JS statique, sans framework ni étape de build. Contenu piloté par `js/data.js` (`window.SELESTIC`) et `js/main.js` (en-tête/pied injectés, formulaires, préremplissage du devis). |
| Déploiement | `git push` → GitHub → Vercel, **aucune commande de build** côté Vercel. |
| Pages | accueil, prestations, réalisations, stock, univers, contact, rendez-vous, devis, simulateur, mentions légales. |
| Simulateur existant | Simulateur « photo » : 2 scènes issues de photos d'une BMW Série 3, recoloration par masques CSS (`mask-image` en data-URI WebP, `css/sim-masks.css` ≈ 272 Ko), cartes d'ombre/reflets, grain cuir/daim. 5 zones (sièges, volant, ceintures, ciel de toit, portes), 16 teintes, comparaison avant/après, récapitulatif → devis. |
| Limites du simulateur photo | Une seule voiture, 2 angles fixes, aucune rotation, matières = simples teintes + grain, éclairage figé, zones non sélectionnables en 3D, coutures non représentables. Ce n'est **pas** de la 3D et ne peut pas devenir « photoréaliste » par simple retouche. |
| Modèles 3D / textures PBR / HDRI disponibles | **Aucun** dans le dépôt ni dans les assets fournis (le zip de 68 photos ne contient que des photographies, inexploitables comme modèle 3D). |
| Outils | Node 22 / npm disponibles ; **pas de Blender** dans l'environnement de travail ; WebGL2 OK. |

## 2. Fonctions à conserver

Menu « Simulateur », identité (noir, doré, vert Selestic, Cormorant Garamond/Inter), récapitulatif → formulaire de devis, aucun prix automatique, mention « teintes indicatives, confirmées par l'atelier ». Le simulateur photo est **conservé comme solution de repli** (appareil sans WebGL2, erreur de chargement, bouton « version photo »).

## 3. Décision d'architecture et justification

**Next.js / migration du site : non.** Le besoin 3D est une « île » interactive sur une seule page ; migrer 10 pages statiques vers React/Next n'apporterait rien de démontrable (pas de rendu serveur requis, pas d'API), et ferait courir un risque de régression sur tout le site. Conformément à la consigne, aucune migration n'est faite.

**Retenu : module 3D indépendant, compilé une fois, intégré au site statique.**

```
site/
  simulateur.html            ← page existante : conteneur #sim3d-root + repli #sim
  js/sim3d-loader.js         ← détecte WebGL2, charge le moteur à la demande, repli photo
  js/main.js                 ← simulateur photo encapsulé (window.SelesticPhotoSim) ; devis accepte {id, lines}
  sim3d/                     ← SORTIE compilée (committée) : sim3d.js, sim3d.css, chunks/, models/
  sim3d-src/                 ← SOURCES : React 19 · react-three-fiber 9 · drei · three 0.186 · Zustand 5 · TypeScript · Vite
```

* **Three.js + React Three Fiber + Drei + Zustand + TypeScript** : conformes au cahier des charges.
* **Vite en mode bibliothèque** : le résultat (`sim3d/`) est du JavaScript ES statique committé → Vercel continue de servir des fichiers, **sans étape de build**, et le moteur n'est téléchargé que sur la page Simulateur (≈ 600 Ko compressé).
* **Blender → GLB** : contrat de nommage documenté (`zone__seat_cushion`…, `fixed__plastic`…), chargeur `GlbInterior` fonctionnel et **testé** (aller-retour : le prototype est exporté en GLB puis rechargé avec la bibliothèque de matières).
* **Matières PBR** : `MeshPhysicalMaterial` (clearcoat, sheen, anisotropie) + cartes albédo/normales/rugosité générées procéduralement (tileables) — pas de photo, pas de CSS.
* **Éclairage** : environnements à base de `Lightformer` (showroom / jour / nuit) en attendant de vrais HDRI.
* **WebGPU** : non activé. `navigator.gpu` est détecté mais three.js WebGPU + TSL imposerait de réécrire les matériaux ; WebGL2 reste le chemin garanti. Feuille de route : `WebGPURenderer` avec repli WebGL2 quand les modèles de production seront là.
* **Supabase** : non utilisé. La sauvegarde se fait en `localStorage` + **lien de partage** (`?cfg=`) + identifiant de projet unique transmis au devis. Supabase ne se justifie que pour des comptes clients / un historique côté atelier (voir README).
* **Vercel** : inchangé ; un `vercel.json` ajoute le cache long des chunks et masque les sources/documents internes.

## 4. Ce qui est livré (prototype vérifiable)

* Habitacle **réellement modélisé en 3D** (4 sièges, volant, 4 ceintures, 4 contre-portes, ciel de toit, montants, planche de bord, console, sol) — **maquette procédurale générique**, *pas* un véhicule précis.
* Rotation / zoom fluides, 4 vues prédéfinies + vues par zone avec transitions caméra cinématiques, vue en coupe automatique, plein écran.
* Sélection directe des pièces dans la scène (survol, contour doré) ou via l'interface.
* 11 zones : assise, dossier, renforts, appuie-tête, volant, ceintures, ciel de toit & montants, panneaux de portes, inserts décoratifs, coutures, passepoils.
* 10 matières PBR : cuir lisse / perforé / grainé, suédine, Alcantara, tissu, carbone*, aluminium brossé*, sangle, fil (*à valider avec l'atelier*). 22 teintes, 4 motifs (uni, losanges, côtes, nid d'abeille).
* Éclairages showroom / jour / nuit (veilleuses ambiance), ombres, AO (niveau max), contour de sélection, anti-crénelage.
* Qualité adaptative (économique / équilibrée / maximale, auto + dégradation automatique si la fluidité chute).
* Configuration centralisée (Zustand) : appliquer à plusieurs zones, réinitialiser, enregistrer/recharger, lien de partage, rendus 3D capturés (4 vues), récapitulatif, **transmission au devis avec identifiant de projet** (SEL-3D-XXXXXXX). **Aucun prix.**
* Interface mobile-first : 3D en haut + panneau en bas sur mobile, 70 % / 30 % sur ordinateur.

## 5. Limites assumées (honnêteté)

1. **Ce n'est pas du photoréalisme de production.** Géométrie = primitives arrondies, pas de modèle Blender sculpté ; matières procédurales, pas de scans ; éclairage procédural, pas de HDRI photo. Le rendu est celui d'un *prototype de démonstration* et il est présenté comme tel dans l'interface.
2. Pas de LOD, pas de textures KTX2/Draco (inutiles tant que les assets réels n'existent pas).
3. WebGPU non activé ; pas de persistance serveur.
4. Test GPU réel (mobile/ordinateur) non réalisé ici : les captures ont été faites en rendu logiciel (SwiftShader). La fluidité réelle reste à valider sur appareils (voir `sim3d-src/README.md`).
5. « Alcantara » est une marque déposée : l'appellation doit être validée (licence de l'atelier) ou remplacée par « microfibre daim ».

La liste précise des modèles/textures/HDRI manquants pour atteindre le niveau « configurateur constructeur » est dans `sim3d-src/README.md` §6.
