/* Données du site Selestic Auto — à modifier ici (prestations, stock, réalisations, contact).
   Images : déposer les fichiers dans assets/img/ ; si le fichier est absent, un visuel d'attente élégant s'affiche. */
/* Médias optimisés : dossier media/<groupe>/NN.jpg (photos) et vNN.mp4 + vNN.jpg (vidéos + affiche) */
var P = function (k, n) { return "media/" + k + "/" + (n < 10 ? "0" : "") + n + ".jpg"; };
var PL = function (k, arr) { return arr.map(function (n) { return P(k, n); }); };
var VL = function (k, arr) { return arr.map(function (n) { var b = "media/" + k + "/v" + (n < 10 ? "0" : "") + n; return { src: b + ".mp4", poster: b + ".jpg" }; }); };
window.SELESTIC = {
  contact: {
    tel: "07 68 91 11 72",
    telHref: "+33768911172",
    whatsapp: "https://wa.me/33768911172",
    email: "leonbouquet1112@gmail.com",
    adresse: "61 route du Moulin d’Aulnay, 91510 Leuville-sur-Orge",
    horaires: "9h00 – 19h00 · sur rendez-vous",
    instagram: "https://www.instagram.com/selestic_auto/",
    tiktok: "https://www.tiktok.com/@selestic_auto"
  },

  groupes: [
    { id: "sellerie-renovation", titre: "Sellerie & Rénovation", intro: "Rénovation, restauration et création sur mesure de vos intérieurs." },
    { id: "confort-technologie", titre: "Confort & Technologie", intro: "Transformez votre confort de conduite." },
    { id: "personnalisation", titre: "Personnalisation", intro: "Matières, couleurs, combinaisons : des créations uniques." },
    { id: "projets-futurs", titre: "Projets futurs", intro: "Les prochains projets de Selestic." }
  ],

  /* duree / delai : textes indicatifs fournis dans le cahier des charges. prix : null => « Tarif sur devis ». */
  prestations: [
    { slug: "renovation-sieges", groupe: "sellerie-renovation", titre: "Rénovation de sièges", court: "Rénovation et restauration de sièges",
      accroche: "Redonnez à vos sièges leur éclat d’origine, ou mieux.",
      duree: "Variable selon l’état des sièges et les travaux nécessaires.", delai: null, prix: null, img: P("cuir", 24), photos: PL("cuir", [0, 5, 7, 9, 10, 12, 14, 22, 23, 24, 26]), videos: VL("cuir", [7, 8, 9, 20, 21]) },
    { slug: "renovation-cuir", groupe: "sellerie-renovation", titre: "Rénovation de cuir", court: "Remise en état du cuir",
      accroche: "Un cuir restauré, soigné dans les moindres détails.",
      duree: "Durée variable selon l’état du cuir et les travaux nécessaires.", delai: null, prix: null, img: P("cuir", 23), photos: PL("cuir", [14, 22, 23, 24, 26, 0]), videos: VL("cuir", [1, 2, 9, 20]) },
    { slug: "renovation-volants", groupe: "sellerie-renovation", titre: "Rénovation de volants", court: "Rénovation de volants",
      accroche: "Un volant comme neuf, à la prise en main irréprochable.",
      duree: "Variable selon le volant.", delai: null, prix: null, img: P("couvre", 12), photos: PL("couvre", [5, 6, 7, 9, 10, 12, 15, 17, 0]), videos: VL("couvre", [5, 6, 10]) },
    { slug: "changement-volant", groupe: "sellerie-renovation", titre: "Changement de volant", court: "Remplacement de volant",
      accroche: "Changez de volant pour transformer l’habitacle.",
      duree: "Environ 1 journée à 1 journée et demie selon le véhicule et le volant choisi.", delai: null, prix: null, img: P("volant", 0), photos: PL("volant", [0, 1, 2, 3]), videos: VL("volant", [0, 2, 3, 4]) },
    { slug: "panneaux-portes", groupe: "sellerie-renovation", titre: "Panneaux de portes", court: "Rénovation de panneaux de portes",
      accroche: "Des panneaux de portes rénovés ou entièrement personnalisés.",
      duree: "Environ 1 journée pour une prestation classique.", delai: "Sur devis pour les personnalisations spécifiques.", prix: null, img: P("portes", 0), photos: PL("portes", [0, 2, 3]), videos: VL("portes", [0]) },
    { slug: "ciel-de-toit", groupe: "sellerie-renovation", titre: "Ciel de toit", court: "Rénovation / création de ciels de toit",
      accroche: "Rénovation ou création de ciels de toit sur mesure.",
      duree: "Environ 2 à 3 jours de prestation.", delai: "Délai de commande des matériaux selon disponibilité / stock.", prix: null, img: P("ciel", 3), photos: PL("ciel", [3, 1, 7, 0, 4, 5, 6, 8, 9]).concat(PL("cielm", [2])), videos: VL("ciel", [3, 6, 9, 12, 14, 17, 18]).concat(VL("cielm", [3, 4])) },
    { slug: "tableau-de-bord", groupe: "sellerie-renovation", titre: "Tableau de bord", court: "Recouvrement de tableau de bord",
      accroche: "Un tableau de bord recouvert avec précision.",
      duree: "Durée variable selon le véhicule et la complexité du projet.", delai: null, prix: null, img: "" },
    { slug: "couvre-volants", groupe: "sellerie-renovation", titre: "Couvre-volants sur mesure", court: "Couvre-volants sur mesure",
      accroche: "Un couvre-volant taillé pour votre volant.",
      duree: "Environ 1 journée.", delai: "Délai supplémentaire possible si la matière n’est pas disponible en stock.", prix: null, img: P("couvre", 1), photos: PL("couvre", [1, 2, 0, 3, 4, 5, 6, 7, 9, 10, 12, 15, 17]), videos: VL("couvre", [0, 1, 4, 5, 6, 10]), ba: [1, 2] },
    { slug: "ceintures", groupe: "sellerie-renovation", titre: "Ceintures de sécurité", court: "Remplacement / personnalisation de ceintures",
      accroche: "Remplacement et personnalisation de ceintures de sécurité.",
      duree: "2 ceintures : un peu plus d’une demi-journée. 5 ceintures : environ une journée, avec possibilité de dépasser légèrement selon le véhicule.", delai: null, prix: null, img: P("ceintures", 2), photos: PL("ceintures", [2, 1, 3, 6, 7, 8, 9, 13, 15, 20, 23, 24]), videos: VL("ceintures", [7, 9, 14, 16, 21, 24]), coloris: PL("coloris", [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14]) },

    { slug: "sieges-chauffants", groupe: "confort-technologie", titre: "Sièges chauffants", court: "Installation de sièges chauffants",
      accroche: "Transformez votre confort de conduite avec l’installation de sièges chauffants intégrés directement dans votre sellerie.",
      etapes: ["Diagnostic du véhicule", "Dépose des éléments nécessaires", "Installation du système chauffant", "Intégration dans la sellerie", "Raccordement électrique", "Contrôle et tests", "Remontage"],
      duree: "Environ 1 journée.", delai: "Environ 2 semaines pour recevoir les pièces lorsque celles-ci ne sont pas disponibles en stock.", prix: null, img: P("chauffant", 0), photos: PL("chauffant", [0]), videos: VL("chauffant", [0]) },
    { slug: "sieges-electriques", groupe: "confort-technologie", titre: "Sièges électriques", court: "Installation de sièges électriques",
      accroche: "Installation de sièges électriques pour un réglage précis.",
      duree: "Variable selon le véhicule.", delai: null, prix: null, img: "" },
    { slug: "sieges-ventiles", groupe: "confort-technologie", titre: "Sièges ventilés", court: "Installation de sièges ventilés",
      accroche: "Installation de sièges ventilés pour un confort en toute saison.",
      duree: "Variable selon le véhicule.", delai: null, prix: null, img: "" },

    { slug: "personnalisation-sur-mesure", groupe: "personnalisation", titre: "Personnalisation intérieure sur mesure", court: "Choix des matières, couleurs et combinaisons",
      accroche: "Choix des matières, des couleurs, combinaisons de matières, créations uniques selon votre projet.",
      duree: "Sur devis selon le projet.", delai: null, prix: null, img: P("cielm", 2), photos: [P("couvre", 1), P("cielm", 2), P("ceintures", 2), P("ceintures", 15), P("couvre", 2)], videos: VL("cielm", [3]) },

    { slug: "pieces-carbone", groupe: "projets-futurs", titre: "Pièces en carbone", court: "Création de pièces en carbone",
      accroche: "Création de pièces en carbone : un projet Selestic en cours de développement.",
      prochainement: true, duree: null, delai: null, prix: null, img: "" }
  ],

  /* Étapes génériques utilisées quand une prestation n’a pas de liste d’étapes propre (à personnaliser). */
  etapesGeneriques: ["Diagnostic du véhicule et échange sur votre projet", "Choix des matières et des finitions", "Dépose des éléments concernés", "Réalisation sur mesure en atelier", "Contrôle qualité", "Remontage et livraison"],
  matieresGeneriques: ["Cuir", "Alcantara", "Tissus"],

  /* Stock — EXEMPLES à remplacer par les vrais produits (photo, nom, description, couleur, matière, prix). */
  stock: [
    { id: 1, cat: "Volants", nom: "Volant disponible", desc: "Volant en stock — détails à renseigner.", couleur: "", matiere: "", prix: null, img: "" },
    { id: 2, cat: "Cuirs", nom: "Cuir disponible", desc: "Cuir en stock — détails à renseigner.", couleur: "", matiere: "Cuir", prix: null, img: "" },
    { id: 3, cat: "Alcantara", nom: "Alcantara disponible", desc: "Alcantara en stock — détails à renseigner.", couleur: "", matiere: "Alcantara", prix: null, img: "" },
    { id: 4, cat: "Tissus", nom: "Tissu disponible", desc: "Tissu en stock — détails à renseigner.", couleur: "", matiere: "Tissu", prix: null, img: "" },
    { id: 5, cat: "Ceintures", nom: "Ceinture disponible", desc: "Ceinture en stock — détails à renseigner.", couleur: "", matiere: "", prix: null, img: "" },
    { id: 6, cat: "Couvre-volants", nom: "Matière pour couvre-volant", desc: "Matière en stock — détails à renseigner.", couleur: "", matiere: "", prix: null, img: "" }
  ],

  /* Réalisations — photos réelles de l’atelier. Compléter véhicule / matières / couleurs / temps si souhaité. */
  realisations: [
    { id: 1, cat: "Ceintures", titre: "Ceintures orange", vehicule: "", prestation: "Ceintures de sécurité", matieres: "", couleurs: "Orange", temps: "", img: P("ceintures", 2) },
    { id: 2, cat: "Volants", titre: "Couvre-volant sur mesure", vehicule: "", prestation: "Couvre-volants sur mesure", matieres: "", couleurs: "", temps: "", img: P("couvre", 12) },
    { id: 3, cat: "Ciels de toit", titre: "Ciel de toit en tissu", vehicule: "", prestation: "Ciel de toit", matieres: "Tissu", couleurs: "", temps: "", img: P("ciel", 3) },
    { id: 4, cat: "Sièges", titre: "Rénovation de cuir", vehicule: "", prestation: "Rénovation de cuir", matieres: "Cuir", couleurs: "", temps: "", img: P("cuir", 24) },
    { id: 5, cat: "Volants", titre: "Couvre-volant cuir blanc", vehicule: "", prestation: "Couvre-volants sur mesure", matieres: "Cuir", couleurs: "Blanc", temps: "", img: P("couvre", 1) },
    { id: 6, cat: "Ceintures", titre: "Ceintures rouges, sellerie bicolore", vehicule: "", prestation: "Ceintures de sécurité", matieres: "", couleurs: "Rouge", temps: "", img: P("ceintures", 20) },
    { id: 7, cat: "Volants", titre: "Volant en carbone", vehicule: "", prestation: "Changement de volant", matieres: "Carbone", couleurs: "", temps: "", img: P("volant", 0) },
    { id: 8, cat: "Ciels de toit", titre: "Ciel de toit tissu OEM", vehicule: "", prestation: "Ciel de toit", matieres: "Tissu OEM", couleurs: "", temps: "", img: P("ciel", 1) },
    { id: 9, cat: "Sièges", titre: "Rénovation de sièges", vehicule: "", prestation: "Rénovation de sièges", matieres: "Cuir", couleurs: "", temps: "", img: P("cuir", 12) },
    { id: 10, cat: "Panneaux de portes", titre: "Panneau de porte", vehicule: "", prestation: "Panneaux de portes", matieres: "", couleurs: "", temps: "", img: P("portes", 0) },
    { id: 11, cat: "Personnalisation", titre: "Ciel de toit personnalisé", vehicule: "", prestation: "Personnalisation sur mesure", matieres: "", couleurs: "Rouge et noir", temps: "", img: P("cielm", 2) },
    { id: 12, cat: "Personnalisation", titre: "Ceintures bleues", vehicule: "", prestation: "Ceintures de sécurité", matieres: "", couleurs: "Bleu", temps: "", img: P("ceintures", 15) },
    { id: 13, cat: "Volants", titre: "Couvre-volant alcantara", vehicule: "", prestation: "Couvre-volants sur mesure", matieres: "Alcantara", couleurs: "", temps: "", img: P("couvre", 5) },
    { id: 14, cat: "Sièges chauffants", titre: "Sièges chauffants", vehicule: "", prestation: "Sièges chauffants", matieres: "", couleurs: "", temps: "", img: P("chauffant", 0) }
  ],
  filtresRealisations: ["Tout", "Sièges", "Volants", "Ciels de toit", "Ceintures", "Panneaux de portes", "Sièges chauffants", "Personnalisation"],

  /* Avant / après (id référencé par ba: [..] dans les prestations) */
  avantApres: [
    { id: 1, titre: "Couvre-volant sur mesure", avant: P("couvre", 4), apres: P("couvre", 6), prestation: "Couvre-volants sur mesure", vehicule: "", matieres: "", couleurs: "", temps: "" },
    { id: 2, titre: "Couvre-volant cuir blanc", avant: P("couvre", 3), apres: P("couvre", 1), prestation: "Couvre-volants sur mesure", vehicule: "", matieres: "Cuir", couleurs: "Blanc", temps: "" }
  ],

  /* Simulateur visuel (nuancier indicatif, la teinte définitive est confirmée par Selestic) */
  simulateur: {
    zones: [
      { id: "sieges", nom: "Sièges", matieres: ["Cuir", "Alcantara", "Tissu"] },
      { id: "volant", nom: "Volant", matieres: ["Cuir", "Alcantara", "Tissu"] },
      { id: "ceintures", nom: "Ceintures", matieres: [] },
      { id: "ciel", nom: "Ciel de toit", matieres: ["Alcantara", "Tissu", "Cuir"] },
      { id: "portes", nom: "Panneaux de portes", matieres: ["Cuir", "Alcantara", "Tissu"] },
      { id: "coutures", nom: "Coutures", matieres: [] }
    ],
    couleurs: [
      ["Noir", "#16181a"], ["Blanc", "#f0efeb"], ["Gris clair", "#a8acae"], ["Gris foncé", "#4b5052"],
      ["Beige", "#cdb99a"], ["Marron", "#6b4a32"], ["Bordeaux", "#5e1424"], ["Rouge", "#b3202a"],
      ["Orange", "#e0701a"], ["Jaune", "#e8c21a"], ["Vert", "#1f7a4d"], ["Vert olive", "#5c6b3a"],
      ["Bleu", "#1f55b8"], ["Bleu turquoise", "#1fa6b8"], ["Violet", "#6a2fa0"], ["Rose", "#e0407f"]
    ]
  },

  /* Options des formulaires */
  vehicules: ["Voiture", "Moto", "Quad", "Scooter", "Bateau", "Avion", "Hélicoptère", "Autre"],
  matieres: ["Cuir", "Alcantara", "Tissu", "Autre / à conseiller"],
  personnalisation: ["Classique", "Sur mesure", "Haut de gamme / création unique"]
};
