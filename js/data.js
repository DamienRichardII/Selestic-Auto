/* Données du site Selestic Auto — à modifier ici (prestations, stock, réalisations, contact).
   Images : déposer les fichiers dans assets/img/ ; si le fichier est absent, un visuel d'attente élégant s'affiche. */
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
      duree: "Variable selon l’état des sièges et les travaux nécessaires.", delai: null, prix: null, img: "siege.jpg" },
    { slug: "renovation-cuir", groupe: "sellerie-renovation", titre: "Rénovation de cuir", court: "Remise en état du cuir",
      accroche: "Un cuir restauré, soigné dans les moindres détails.",
      duree: "Durée variable selon l’état du cuir et les travaux nécessaires.", delai: null, prix: null, img: "cuir.jpg" },
    { slug: "renovation-volants", groupe: "sellerie-renovation", titre: "Rénovation de volants", court: "Rénovation de volants",
      accroche: "Un volant comme neuf, à la prise en main irréprochable.",
      duree: "Variable selon le volant.", delai: null, prix: null, img: "volant.jpg" },
    { slug: "changement-volant", groupe: "sellerie-renovation", titre: "Changement de volant", court: "Remplacement de volant",
      accroche: "Changez de volant pour transformer l’habitacle.",
      duree: "Environ 1 journée à 1 journée et demie selon le véhicule et le volant choisi.", delai: null, prix: null, img: "volant.jpg" },
    { slug: "panneaux-portes", groupe: "sellerie-renovation", titre: "Panneaux de portes", court: "Rénovation de panneaux de portes",
      accroche: "Des panneaux de portes rénovés ou entièrement personnalisés.",
      duree: "Environ 1 journée pour une prestation classique.", delai: "Sur devis pour les personnalisations spécifiques.", prix: null, img: "portes.jpg" },
    { slug: "ciel-de-toit", groupe: "sellerie-renovation", titre: "Ciel de toit", court: "Rénovation / création de ciels de toit",
      accroche: "Rénovation ou création de ciels de toit sur mesure.",
      duree: "Environ 2 à 3 jours de prestation.", delai: "Délai de commande des matériaux selon disponibilité / stock.", prix: null, img: "ciel.jpg" },
    { slug: "tableau-de-bord", groupe: "sellerie-renovation", titre: "Tableau de bord", court: "Recouvrement de tableau de bord",
      accroche: "Un tableau de bord recouvert avec précision.",
      duree: "Durée variable selon le véhicule et la complexité du projet.", delai: null, prix: null, img: "tableau.jpg" },
    { slug: "couvre-volants", groupe: "sellerie-renovation", titre: "Couvre-volants sur mesure", court: "Couvre-volants sur mesure",
      accroche: "Un couvre-volant taillé pour votre volant.",
      duree: "Environ 1 journée.", delai: "Délai supplémentaire possible si la matière n’est pas disponible en stock.", prix: null, img: "volant.jpg" },
    { slug: "ceintures", groupe: "sellerie-renovation", titre: "Ceintures de sécurité", court: "Remplacement / personnalisation de ceintures",
      accroche: "Remplacement et personnalisation de ceintures de sécurité.",
      duree: "2 ceintures : un peu plus d’une demi-journée. 5 ceintures : environ une journée, avec possibilité de dépasser légèrement selon le véhicule.", delai: null, prix: null, img: "ceintures.jpg" },

    { slug: "sieges-chauffants", groupe: "confort-technologie", titre: "Sièges chauffants", court: "Installation de sièges chauffants",
      accroche: "Transformez votre confort de conduite avec l’installation de sièges chauffants intégrés directement dans votre sellerie.",
      etapes: ["Diagnostic du véhicule", "Dépose des éléments nécessaires", "Installation du système chauffant", "Intégration dans la sellerie", "Raccordement électrique", "Contrôle et tests", "Remontage"],
      duree: "Environ 1 journée.", delai: "Environ 2 semaines pour recevoir les pièces lorsque celles-ci ne sont pas disponibles en stock.", prix: null, img: "chauffants.jpg" },
    { slug: "sieges-electriques", groupe: "confort-technologie", titre: "Sièges électriques", court: "Installation de sièges électriques",
      accroche: "Installation de sièges électriques pour un réglage précis.",
      duree: "Variable selon le véhicule.", delai: null, prix: null, img: "electriques.jpg" },
    { slug: "sieges-ventiles", groupe: "confort-technologie", titre: "Sièges ventilés", court: "Installation de sièges ventilés",
      accroche: "Installation de sièges ventilés pour un confort en toute saison.",
      duree: "Variable selon le véhicule.", delai: null, prix: null, img: "ventiles.jpg" },

    { slug: "personnalisation-sur-mesure", groupe: "personnalisation", titre: "Personnalisation intérieure sur mesure", court: "Choix des matières, couleurs et combinaisons",
      accroche: "Choix des matières, des couleurs, combinaisons de matières, créations uniques selon votre projet.",
      duree: "Sur devis selon le projet.", delai: null, prix: null, img: "perso.jpg" },

    { slug: "pieces-carbone", groupe: "projets-futurs", titre: "Pièces en carbone", court: "Création de pièces en carbone",
      accroche: "Création de pièces en carbone : un projet Selestic en cours de développement.",
      prochainement: true, duree: null, delai: null, prix: null, img: "carbone.jpg" }
  ],

  /* Étapes génériques utilisées quand une prestation n’a pas de liste d’étapes propre (à personnaliser). */
  etapesGeneriques: ["Diagnostic du véhicule et échange sur votre projet", "Choix des matières et des finitions", "Dépose des éléments concernés", "Réalisation sur mesure en atelier", "Contrôle qualité", "Remontage et livraison"],
  matieresGeneriques: ["Cuir", "Alcantara", "Tissus"],

  /* Stock — EXEMPLES à remplacer par les vrais produits (photo, nom, description, couleur, matière, prix). */
  stock: [
    { id: 1, cat: "Volants", nom: "Volant disponible", desc: "Volant en stock — détails à renseigner.", couleur: "", matiere: "", prix: null, img: "stock-volant.jpg" },
    { id: 2, cat: "Cuirs", nom: "Cuir disponible", desc: "Cuir en stock — détails à renseigner.", couleur: "", matiere: "Cuir", prix: null, img: "stock-cuir.jpg" },
    { id: 3, cat: "Alcantara", nom: "Alcantara disponible", desc: "Alcantara en stock — détails à renseigner.", couleur: "", matiere: "Alcantara", prix: null, img: "stock-alcantara.jpg" },
    { id: 4, cat: "Tissus", nom: "Tissu disponible", desc: "Tissu en stock — détails à renseigner.", couleur: "", matiere: "Tissu", prix: null, img: "stock-tissu.jpg" },
    { id: 5, cat: "Ceintures", nom: "Ceinture disponible", desc: "Ceinture en stock — détails à renseigner.", couleur: "", matiere: "", prix: null, img: "stock-ceinture.jpg" },
    { id: 6, cat: "Couvre-volants", nom: "Matière pour couvre-volant", desc: "Matière en stock — détails à renseigner.", couleur: "", matiere: "", prix: null, img: "stock-couvre-volant.jpg" }
  ],

  /* Réalisations — EXEMPLES à remplacer. cat doit correspondre aux filtres. */
  realisations: [
    { id: 1, cat: "Sièges", titre: "Rénovation de sièges", vehicule: "", prestation: "Rénovation de sièges", matieres: "", couleurs: "", temps: "", img: "real-1.jpg" },
    { id: 2, cat: "Volants", titre: "Volant sur mesure", vehicule: "", prestation: "Changement de volant", matieres: "", couleurs: "", temps: "", img: "real-2.jpg" },
    { id: 3, cat: "Ciels de toit", titre: "Ciel de toit", vehicule: "", prestation: "Ciel de toit", matieres: "", couleurs: "", temps: "", img: "real-3.jpg" },
    { id: 4, cat: "Ceintures", titre: "Ceintures personnalisées", vehicule: "", prestation: "Ceintures de sécurité", matieres: "", couleurs: "", temps: "", img: "real-4.jpg" },
    { id: 5, cat: "Panneaux de portes", titre: "Panneaux de portes", vehicule: "", prestation: "Panneaux de portes", matieres: "", couleurs: "", temps: "", img: "real-5.jpg" },
    { id: 6, cat: "Sièges chauffants", titre: "Sièges chauffants", vehicule: "", prestation: "Sièges chauffants", matieres: "", couleurs: "", temps: "", img: "real-6.jpg" },
    { id: 7, cat: "Personnalisation", titre: "Personnalisation intérieure", vehicule: "", prestation: "Personnalisation sur mesure", matieres: "", couleurs: "", temps: "", img: "real-7.jpg" },
    { id: 8, cat: "Sièges", titre: "Sellerie complète", vehicule: "", prestation: "Rénovation de sièges", matieres: "", couleurs: "", temps: "", img: "real-8.jpg" }
  ],
  filtresRealisations: ["Tout", "Sièges", "Volants", "Ciels de toit", "Ceintures", "Panneaux de portes", "Sièges chauffants", "Personnalisation"],

  /* Avant / après — images avant-N.jpg / apres-N.jpg */
  avantApres: [
    { id: 1, vehicule: "", prestation: "Rénovation de sièges", matieres: "", couleurs: "", temps: "" }
  ],

  /* Options des formulaires */
  vehicules: ["Voiture", "Moto", "Quad", "Scooter", "Bateau", "Avion", "Hélicoptère", "Autre"],
  matieres: ["Cuir", "Alcantara", "Tissu", "Autre / à conseiller"],
  personnalisation: ["Classique", "Sur mesure", "Haut de gamme / création unique"]
};
