/* SELESTIC AUTO — scripts du site */
(function () {
  "use strict";
  var D = window.SELESTIC, C = D.contact;
  var FORM_ENDPOINT = ""; // URL d'un service de formulaire (ex. Formspree). Vide = ouverture du mail pré-rempli.
  var page = document.body.dataset.page || "";
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var esc = function (s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); };
  var vis = function (img) { var u = !img ? "" : (img.indexOf("/") > -1 ? "../" + img : "../assets/img/" + img); return '<div class="visual"' + (u ? ' style="--img:url(\'' + esc(u) + '\')"' : "") + "></div>"; };
  var ARROW = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
  var ICON = {
    phone: '<svg viewBox="0 0 24 24"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/></svg>',
    chat: '<svg viewBox="0 0 24 24"><path d="M4 5h16v11H9l-5 4z"/></svg>',
    doc: '<svg viewBox="0 0 24 24"><path d="M6 3h9l4 4v14H6zM14 3v5h5M9 13h6M9 17h6"/></svg>',
    cal: '<svg viewBox="0 0 24 24"><rect x="4" y="5" width="16" height="15" rx="2"/><path d="M4 10h16M9 3v4M15 3v4"/></svg>',
    gem: '<svg viewBox="0 0 24 24"><path d="M6 3h12l4 6-10 12L2 9zM2 9h20M9 3l3 18M15 3l-3 18"/></svg>',
    cut: '<svg viewBox="0 0 24 24"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M8.5 8l11 9M8.5 16l11-9"/></svg>',
    car: '<svg viewBox="0 0 24 24"><path d="M5 16V11l2-5h10l2 5v5M3 16h18v3H3zM7 13h.01M17 13h.01"/></svg>',
    pin: '<svg viewBox="0 0 24 24"><path d="M12 21s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/></svg>'
  };
  var SOCIAL = {
    tiktok: '<svg viewBox="0 0 24 24"><path d="M16 3c.3 2.4 1.8 4 4 4.2v3.2a7.200 7.200 0 0 1-4-1.300V15a6 6 0 1 1-6-6c.3 0 .7 0 1 .1v3.300a2.800 2.800 0 1 0 1.800 2.600V3z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm5 3.500A4.500 4.500 0 1 1 7.500 12 4.500 4.500 0 0 1 12 7.500zm0 2A2.500 2.500 0 1 0 14.500 12 2.500 2.500 0 0 0 12 9.500zM17.500 5.500a1 1 0 1 1-1 1 1 1 0 0 1 1-1z"/></svg>'
  };
  var NAV = [["index.html", "Accueil", "home"], ["prestations.html", "Prestations", "prestations"], ["realisations.html", "Réalisations", "realisations"], ["stock.html", "Stock", "stock"], ["simulateur.html", "Simulateur", "simulateur"], ["devis.html", "Devis", "devis"]];

  /* ---------- Lightbox générique + vidéos (lecture au défilement) ---------- */
  var lb = $("#lb");
  if (!lb) { lb = document.createElement("div"); lb.className = "lb"; lb.id = "lb"; lb.setAttribute("role", "dialog"); lb.setAttribute("aria-modal", "true"); lb.innerHTML = '<div class="lb-in"></div>'; document.body.appendChild(lb); }
  var closeLb = function () { lb.classList.remove("open"); document.body.style.overflow = ""; $(".lb-in", lb).innerHTML = ""; };
  var openLb = function (html) { $(".lb-in", lb).innerHTML = '<button class="lb-x" aria-label="Fermer">×</button>' + html; lb.classList.add("open"); document.body.style.overflow = "hidden"; $(".lb-x", lb).focus(); };
  lb.addEventListener("click", function (e) { if (e.target === lb || e.target.closest(".lb-x")) closeLb(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeLb(); });
  var still = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  function initVideos() {
    var vs = $$("video[data-src]");
    if (!vs.length) return;
    if (still || !("IntersectionObserver" in window)) { vs.forEach(function (v) { v.controls = true; v.preload = "none"; v.src = v.dataset.src; v.removeAttribute("data-src"); }); return; }
    var io = new IntersectionObserver(function (en) {
      en.forEach(function (x) {
        var v = x.target;
        if (x.isIntersecting) { if (v.dataset.src) { v.src = v.dataset.src; v.removeAttribute("data-src"); } var pr = v.play(); if (pr && pr.catch) pr.catch(function () {}); }
        else if (!v.dataset.src) v.pause();
      });
    }, { threshold: .35 });
    vs.forEach(function (v) { io.observe(v); });
  }
  document.addEventListener("click", function (e) {
    var ph = e.target.closest("[data-zoom]");
    if (ph) { openLb('<img class="lb-img" src="' + esc(ph.dataset.zoom) + '" alt="' + esc(ph.dataset.alt || "Réalisation Selestic Auto") + '">'); return; }
    var vd = e.target.closest("[data-video]");
    if (vd) openLb('<video class="lb-img" src="' + esc(vd.dataset.video) + '" controls autoplay loop playsinline></video>');
  });

  /* ---------- Header / footer / contact rapide ---------- */
  var hdr = $("#header");
  if (hdr) {
    hdr.className = "header";
    hdr.innerHTML = '<div class="wrap nav"><a class="brand" href="index.html" aria-label="Selestic Auto — accueil"><img src="assets/img/logo.png" alt="Selestic Auto" width="80" height="56"></a>' +
      '<nav class="menu" id="menu" aria-label="Navigation principale">' + NAV.map(function (n) { return '<a href="' + n[0] + '"' + (n[2] === page || (page === "prestation" && n[2] === "prestations") ? ' class="active" aria-current="page"' : "") + ">" + n[1] + "</a>"; }).join("") + '<a class="btn btn-gold m-cta" href="rendez-vous.html">Prendre RDV</a><a class="btn btn-primary m-cta" href="devis.html">Demander un devis</a><div class="m-soc"><a class="sn" href="' + C.instagram + '" target="_blank" rel="noopener" aria-label="Instagram Selestic Auto">' + SOCIAL.instagram + '</a><a class="sn" href="' + C.tiktok + '" target="_blank" rel="noopener" aria-label="TikTok Selestic Auto">' + SOCIAL.tiktok + '</a></div></nav>' +
      '<div class="nav-ctas"><a class="sn sn-h" href="' + C.instagram + '" target="_blank" rel="noopener" aria-label="Instagram Selestic Auto">' + SOCIAL.instagram + '</a><a class="sn sn-h" href="' + C.tiktok + '" target="_blank" rel="noopener" aria-label="TikTok Selestic Auto">' + SOCIAL.tiktok + '</a><a class="btn btn-gold nav-cta" href="rendez-vous.html">Prendre RDV</a><a class="btn btn-primary nav-cta" href="devis.html">Demander un devis</a></div><button class="burger" id="burger" aria-label="Ouvrir le menu" aria-expanded="false"><span></span><span></span></button></div>';
    var onScroll = function () { hdr.classList.toggle("scrolled", window.scrollY > 30); };
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    $("#burger").addEventListener("click", function () {
      var o = $("#menu").classList.toggle("open"); this.setAttribute("aria-expanded", o);
      document.body.style.overflow = o ? "hidden" : "";
    });
  }
  var ftr = $("#footer");
  if (ftr) {
    ftr.className = "footer";
    ftr.innerHTML = '<div class="wrap"><div class="foot"><div><img src="assets/img/logo.png" alt="Selestic Auto" width="120" height="84"><p>« Selestic, l’art de sublimer votre intérieur. »</p><p style="margin-top:10px">' + esc(C.adresse) + '</p></div>' +
      '<div><h4>Liens utiles</h4><ul><li><a href="index.html">Accueil</a></li><li><a href="prestations.html">Prestations</a></li><li><a href="realisations.html">Réalisations</a></li><li><a href="stock.html">Selestic Stock</a></li><li><a href="devis.html">Devis</a></li><li><a href="rendez-vous.html">Rendez-vous</a></li></ul></div>' +
      '<div><h4>La marque</h4><ul><li><a href="univers.html">Univers Selestic</a></li><li><a href="contact.html">Contact</a></li><li><a href="mentions-legales.html">Mentions légales</a></li></ul></div>' +
      '<div><h4>Contact</h4><ul><li><a href="tel:' + C.telHref + '">' + esc(C.tel) + '</a></li><li><a href="mailto:' + C.email + '">' + esc(C.email) + '</a></li><li>' + esc(C.horaires) + '</li></ul><div class="social-row" style="margin-top:16px"><a class="sn" href="' + C.instagram + '" target="_blank" rel="noopener" aria-label="Instagram Selestic Auto">' + SOCIAL.instagram + '</a><a class="sn" href="' + C.tiktok + '" target="_blank" rel="noopener" aria-label="TikTok Selestic Auto">' + SOCIAL.tiktok + '</a></div></div></div>' +
      '<div class="copy"><span>© ' + new Date().getFullYear() + ' Selestic Auto. Tous droits réservés.</span><span>Site réalisé par DamCompany</span></div></div>';
  }

  /* ---------- Apparitions au défilement ---------- */
  function reveal() {
    var els = $$(".rv:not(.in)");
    if (!("IntersectionObserver" in window)) { els.forEach(function (e) { e.classList.add("in"); }); return; }
    var io = new IntersectionObserver(function (en) { en.forEach(function (x) { if (x.isIntersecting) { x.target.classList.add("in"); io.unobserve(x.target); } }); }, { threshold: .12 });
    els.forEach(function (e) { io.observe(e); });
  }

  /* ---------- Vidéo d'accueil optionnelle ---------- */
  var hv = $("#hero-video");
  if (hv) { hv.addEventListener("error", function () { hv.remove(); }, true); if (still) { hv.removeAttribute("autoplay"); hv.pause(); } }

  /* ---------- Accueil : catégories ---------- */
  var cats = [
    ["Sellerie", "prestations.html#sellerie-renovation", "media/cuir/24.jpg", "Sièges, panneaux, ciel de toit"],
    ["Rénovation", "prestations.html#sellerie-renovation", "media/cuir/12.jpg", "Cuir, volants, tableau de bord"],
    ["Personnalisation", "prestations.html#personnalisation", "media/ceintures/02.jpg", "Matières, couleurs, créations"],
    ["Confort", "prestations.html#confort-technologie", "media/chauffant/00.jpg", "Sièges chauffants, électriques, ventilés"],
    ["Extérieur / Carbone", "prestations.html#projets-futurs", "", "Prochainement", true],
    ["Projets sur mesure", "devis.html", "media/cielm/02.jpg", "Parlons de votre projet"]
  ];
  var hc = $("#home-cards");
  if (hc) hc.innerHTML = cats.map(function (c) {
    return '<a class="card rv" href="' + c[1] + '">' + vis(c[2]) + (c[4] ? '<span class="tag">Prochainement</span>' : "") + '<div class="card-body"><div><h3>' + c[0] + "</h3><small>" + c[3] + '</small></div><span class="arrow">' + ARROW + "</span></div></a>";
  }).join("");

  /* ---------- Prestations : liste par groupe ---------- */
  function prestaCard(p) {
    return '<a class="card rv" href="prestation.html?p=' + p.slug + '">' + vis(p.img) + (p.prochainement ? '<span class="tag">En développement</span>' : "") + '<div class="card-body"><div><h3>' + esc(p.titre) + "</h3><small>" + esc(p.court) + '</small></div><span class="arrow">' + ARROW + "</span></div></a>";
  }
  var pl = $("#prestations-list");
  if (pl) pl.innerHTML = D.groupes.map(function (g) {
    var items = D.prestations.filter(function (p) { return p.groupe === g.id; });
    return '<section id="' + g.id + '" style="padding:48px 0 0"><div class="sec-head"><div><span class="eyebrow">Notre savoir-faire</span><h2>' + g.titre + "</h2><p>" + g.intro + '</p></div></div><div class="cards">' + items.map(prestaCard).join("") + "</div></section>";
  }).join("");

  /* ---------- Fiche prestation ---------- */
  function mediaSection(p) {
    var h = "";
    if (p.coloris && p.coloris.length) h += '<section style="padding-top:0"><div class="wrap"><div class="sec-head"><div><span class="eyebrow">Collection</span><h2>Nos coloris de ceintures</h2><p>Découvrez la gamme de ceintures de sécurité Selestic. Touchez une image pour l’agrandir.</p></div></div><div class="coloris">' + p.coloris.map(function (c) { return '<button class="col" data-zoom="' + esc(c) + '" aria-label="Agrandir le coloris"><img src="' + esc(c) + '" alt="Coloris de ceintures Selestic" loading="lazy"></button>'; }).join("") + "</div></div></section>";
    if (p.photos && p.photos.length) h += '<section style="padding-top:0"><div class="wrap"><div class="sec-head"><div><span class="eyebrow">En images</span><h2>Réalisations Selestic</h2></div><a class="btn btn-gold" href="realisations.html">Voir nos réalisations</a></div><div class="mgal">' + p.photos.map(function (u) { return '<button class="mph" data-zoom="' + esc(u) + '" data-alt="' + esc(p.titre) + '" aria-label="Agrandir la photo"><img src="' + esc(u) + '" alt="' + esc(p.titre) + ' — réalisation Selestic" loading="lazy" decoding="async"></button>'; }).join("") + "</div></div></section>";
    if (p.videos && p.videos.length) h += '<section style="padding-top:0"><div class="wrap"><div class="sec-head"><div><span class="eyebrow">En vidéo</span><h2>L’atelier au travail</h2></div></div><div class="mvid">' + p.videos.map(function (v) { return '<button class="mv" data-video="' + esc(v.src) + '" aria-label="Voir la vidéo en grand"><video data-src="' + esc(v.src) + '" poster="' + esc(v.poster) + '" muted loop playsinline preload="none"></video></button>'; }).join("") + "</div></div></section>";
    return h;
  }
  function baSection(p) {
    if (!p.ba || !p.ba.length) return "";
    return '<section style="padding-top:0"><div class="wrap"><div class="sec-head"><div><span class="eyebrow">Transformation</span><h2>Avant / Après</h2><p>Faites glisser la barre pour voir la différence.</p></div></div>' + p.ba.map(function (id) { var b = D.avantApres.filter(function (x) { return x.id === id; })[0]; return b ? '<div style="margin-bottom:36px">' + baHTML(b) + "</div>" : ""; }).join("") + "</div></section>";
  }
  var fiche = $("#fiche");
  if (fiche) {
    var slug = new URLSearchParams(location.search).get("p");
    var p = D.prestations.filter(function (x) { return x.slug === slug; })[0];
    if (!p) { fiche.innerHTML = '<section class="page-hero"><div class="wrap"><h1>Prestation introuvable</h1><p class="lead">Cette prestation n’existe pas.</p><p style="margin-top:20px"><a class="btn btn-primary" href="prestations.html">Voir toutes nos prestations</a></p></div></section>'; }
    else {
      document.title = p.titre + " — Selestic Auto";
      var etapes = p.etapes || D.etapesGeneriques;
      var devisUrl = "devis.html?p=" + p.slug;
      var body = '<section class="fiche-hero">' + vis(p.img) + '<div class="wrap"><a class="eyebrow" href="prestations.html">← Prestations</a><h1 style="margin-top:10px">' + esc(p.titre) + "</h1><p>" + esc(p.accroche) + '</p><div class="hero-cta" style="margin-top:26px">' +
        (p.prochainement ? '<span class="tag" style="position:static">Prochainement</span>' : '<a class="btn btn-primary" href="' + devisUrl + '">Demander un devis</a><a class="btn btn-ghost" href="rendez-vous.html?p=' + p.slug + '">Réserver</a>') + "</div></div></section>";
      if (p.prochainement) {
        body += '<section><div class="wrap"><div class="notice">Cette catégorie est en développement : ce service n’est pas encore disponible. Selestic prépare la création de pièces en carbone.</div><p style="margin-top:24px"><a class="btn btn-gold" href="contact.html">Nous contacter</a></p></div></section>';
      } else {
        body += '<section><div class="wrap split"><div><span class="eyebrow">Notre méthode</span><h2 style="margin:8px 0 22px">Comment ça se passe ?</h2><ol class="steps">' + etapes.map(function (e) { return "<li>" + esc(e) + "</li>"; }).join("") + '</ol></div>' +
          '<div class="panel"><span class="eyebrow">Matériaux disponibles</span><h3 style="margin:8px 0 14px">Le choix des matières</h3><ul class="checks">' + D.matieresGeneriques.map(function (m) { return "<li>" + m + "</li>"; }).join("") + '</ul><p class="note-small">Matières, couleurs et finitions : nous vous conseillons lors du devis.</p></div></div></section>' +
          '<section style="padding-top:0"><div class="wrap"><div class="infos">' +
          '<div class="info"><span class="eyebrow">Durée</span><p>' + esc(p.duree || "Selon le projet.") + "</p></div>" +
          '<div class="info"><span class="eyebrow">Délai</span><p>' + esc(p.delai || "Selon le véhicule et la disponibilité des matériaux.") + "</p></div>" +
          '<div class="info"><span class="eyebrow">Prix</span><p>' + (p.prix ? "À partir de " + esc(p.prix) + " €" : "Tarif sur devis") + "</p></div></div>" +
          '<p class="note-small" style="margin-top:14px">Les durées et délais sont indicatifs et peuvent varier selon le véhicule, la complexité du projet et la disponibilité des matériaux.</p></div></section>' +
          mediaSection(p) + baSection(p) +
          '<section style="padding-top:0"><div class="wrap"><div class="cta-band"><h2>Besoin de cette prestation ?</h2><a class="btn btn-primary" href="' + devisUrl + '">Demander un devis</a></div></div></section>';
      }
      fiche.innerHTML = body; initBA(); initVideos();
    }
  }

  /* ---------- Avant / après ---------- */
  function baHTML(b) {
    var meta = [["Véhicule", b.vehicule], ["Prestation", b.prestation], ["Matières", b.matieres], ["Couleurs", b.couleurs], ["Temps de réalisation", b.temps]].filter(function (m) { return m[1]; });
    return (b.titre ? '<h3 style="margin:0 0 14px">' + esc(b.titre) + "</h3>" : "") + '<div class="ba" data-id="' + b.id + '"><div class="layer before">' + vis(b.avant) + '</div><div class="layer after">' + vis(b.apres) + '</div><span class="lbl l1">AVANT</span><span class="lbl l2">APRÈS</span><div class="bar"><div class="knob" aria-hidden="true">⇆</div></div><input type="range" min="0" max="100" value="50" aria-label="Comparer avant et après"></div>' +
      (meta.length ? '<dl class="meta">' + meta.map(function (m) { return "<div><dt>" + m[0] + "</dt><dd>" + esc(m[1]) + "</dd></div>"; }).join("") + "</dl>" : "");
  }
  function initBA() {
    $$(".ba").forEach(function (el) {
      var r = $("input", el), a = $(".after", el), bar = $(".bar", el);
      var set = function () { var v = r.value; a.style.clipPath = "inset(0 0 0 " + v + "%)"; bar.style.left = v + "%"; };
      r.addEventListener("input", set); set();
    });
  }
  var baHome = $("#ba-home");
  if (baHome && D.avantApres[0]) { baHome.innerHTML = baHTML(D.avantApres[0]); initBA(); }
  var baAll = $("#ba-all");
  if (baAll) { baAll.innerHTML = D.avantApres.map(function (b) { return '<div style="margin-bottom:44px">' + baHTML(b) + "</div>"; }).join(""); initBA(); }

  /* ---------- Réalisations : accueil + galerie + lightbox ---------- */
  var rs = $("#real-strip");
  if (rs) rs.innerHTML = D.realisations.slice(0, 4).map(function (r) {
    return '<a class="it rv" href="realisations.html">' + vis(r.img) + '<span class="cap">' + esc(r.titre) + "</span></a>";
  }).join("");

  var gal = $("#gallery");
  if (gal) {
    var cur = "Tout";
    var fl = $("#filters");
    fl.innerHTML = D.filtresRealisations.map(function (f) { return '<button class="chip' + (f === cur ? " on" : "") + '" data-f="' + esc(f) + '">' + esc(f) + "</button>"; }).join("");
    var draw = function () {
      var list = D.realisations.filter(function (r) { return cur === "Tout" || r.cat === cur; });
      gal.innerHTML = list.length ? list.map(function (r) { return '<button class="it rv" data-id="' + r.id + '">' + vis(r.img) + '<span class="cap"><small>' + esc(r.cat) + "</small>" + esc(r.titre) + "</span></button>"; }).join("") : '<p class="empty" style="grid-column:1/-1">Aucune réalisation dans cette catégorie pour le moment.</p>';
      reveal();
    };
    fl.addEventListener("click", function (e) { var b = e.target.closest(".chip"); if (!b) return; cur = b.dataset.f; $$(".chip", fl).forEach(function (c) { c.classList.toggle("on", c === b); }); draw(); });
    gal.addEventListener("click", function (e) {
      var b = e.target.closest(".it"); if (!b) return;
      var r = D.realisations.filter(function (x) { return x.id == b.dataset.id; })[0];
      var meta = [["Véhicule", r.vehicule], ["Prestation", r.prestation], ["Matières", r.matieres], ["Couleurs", r.couleurs], ["Temps de réalisation", r.temps]].filter(function (m) { return m[1]; });
      openLb('<img class="lb-img" src="' + esc(r.img) + '" alt="' + esc(r.titre) + '"><div class="bd"><span class="eyebrow">' + esc(r.cat) + "</span><h3>" + esc(r.titre) + "</h3>" + (meta.length ? '<dl class="meta">' + meta.map(function (m) { return "<div><dt>" + m[0] + "</dt><dd>" + esc(m[1]) + "</dd></div>"; }).join("") + "</dl>" : "") + '<p style="margin-top:18px"><a class="btn btn-primary" href="devis.html">Demander un devis</a></p></div>');
    });
    draw();
  }

  /* ---------- Stock ---------- */
  var sg = $("#stock-grid");
  if (sg) {
    var scat = "Tout", sf = $("#stock-filters");
    var cl = ["Tout"]; D.stock.forEach(function (s) { if (cl.indexOf(s.cat) < 0) cl.push(s.cat); });
    sf.innerHTML = cl.map(function (f) { return '<button class="chip' + (f === scat ? " on" : "") + '" data-f="' + esc(f) + '">' + esc(f) + "</button>"; }).join("");
    var drawS = function () {
      var list = D.stock.filter(function (s) { return scat === "Tout" || s.cat === scat; });
      sg.innerHTML = list.length ? list.map(function (s) {
        var det = [s.matiere, s.couleur].filter(Boolean).join(" · ");
        return '<article class="prod rv"><div class="ph">' + vis(s.img) + '</div><div class="bd"><span class="eyebrow">' + esc(s.cat) + "</span><h3>" + esc(s.nom) + "</h3>" + (det ? '<span class="note-small">' + esc(det) + "</span>" : "") + "<p>" + esc(s.desc) + '</p><div class="row"><span class="price">' + (s.prix ? esc(s.prix) + " €" : "Prix sur demande") + '</span><span class="badge">Disponible immédiatement</span></div><a class="btn btn-primary" style="margin-top:12px" href="devis.html?stock=' + encodeURIComponent(s.nom) + '">Réserver</a></div></article>';
      }).join("") : '<p class="empty" style="grid-column:1/-1">Aucun produit dans cette catégorie pour le moment.</p>';
      reveal();
    };
    sf.addEventListener("click", function (e) { var b = e.target.closest(".chip"); if (!b) return; scat = b.dataset.f; $$(".chip", sf).forEach(function (c) { c.classList.toggle("on", c === b); }); drawS(); });
    drawS();
  }

  /* ---------- Formulaires ---------- */
  function opts(arr, ph) { return '<option value="">' + ph + "</option>" + arr.map(function (a) { return "<option>" + esc(a) + "</option>"; }).join(""); }
  var presOpts = function () { return D.prestations.filter(function (p) { return !p.prochainement; }).map(function (p) { return p.titre; }); };
  var qs = new URLSearchParams(location.search);
  function fillSelects(f) {
    $$("[data-opt]", f).forEach(function (s) {
      var k = s.dataset.opt, arr = k === "prestations" ? presOpts() : D[k];
      s.innerHTML = opts(arr, "Choisir…");
    });
    var pre = qs.get("p"), sel = $('[name="prestation"]', f);
    if (pre && sel) { var pp = D.prestations.filter(function (x) { return x.slug === pre; })[0]; if (pp) sel.value = pp.titre; }
  }
  function send(f, subject, okEl) {
    if ($(".hp", f) && $(".hp input", f).value) return; // anti-spam
    var data = {}, lines = [];
    $$("input,select,textarea", f).forEach(function (el) {
      if (!el.name || el.type === "file" || el.closest(".hp")) return;
      if (el.type === "checkbox" && !el.checked) return;
      data[el.name] = el.value; if (el.value) lines.push(el.dataset.label + " : " + el.value);
    });
    var files = $$('input[type="file"]', f).reduce(function (n, i) { return n + i.files.length; }, 0);
    var done = function () { okEl.classList.add("show"); okEl.scrollIntoView({ behavior: "smooth", block: "center" }); f.reset(); };
    if (FORM_ENDPOINT) {
      var fd = new FormData(f);
      fetch(FORM_ENDPOINT, { method: "POST", body: fd, headers: { Accept: "application/json" } }).then(function (r) { if (!r.ok) throw 0; done(); }).catch(function () { okEl.textContent = "L’envoi a échoué. Appelez-nous au " + C.tel + "."; okEl.classList.add("show"); });
    } else {
      var body = lines.join("\n") + (files ? "\n\n(Photos : merci de les joindre à ce mail ou de les envoyer par WhatsApp au " + C.tel + ".)" : "");
      location.href = "mailto:" + C.email + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
      done();
    }
  }
  var fd = $("#form-devis");
  if (fd) {
    fillSelects(fd);
    var sm = qs.get("sim");
    if (sm) { try { var sd = JSON.parse(sm), dsc = $('[name="description"]', fd); dsc.value = "Configuration du simulateur Selestic :\n" + sd.map(function (l) { return "- " + l; }).join("\n") + "\n"; } catch (e) {} }
    var st = qs.get("stock"); if (st) $('[name="description"]', fd).value = "Produit en stock concerné : " + st + "\n";
    fd.addEventListener("submit", function (e) { e.preventDefault(); send(fd, "Demande de devis — Selestic Auto", $("#msg-devis")); });
  }
  var fr = $("#form-rdv");
  if (fr) {
    fillSelects(fr);
    var dt = $('[name="date"]', fr), today = new Date(); today.setDate(today.getDate() + 1);
    dt.min = today.toISOString().slice(0, 10);
    var slots = $("#slots"), slotIn = $('[name="creneau"]', fr);
    slots.innerHTML = [9, 10, 11, 12, 14, 15, 16, 17, 18].map(function (h) { return '<button type="button" class="slot" data-h="' + h + 'h00">' + h + "h00</button>"; }).join("");
    slots.addEventListener("click", function (e) { var b = e.target.closest(".slot"); if (!b) return; $$(".slot", slots).forEach(function (s) { s.classList.toggle("on", s === b); }); slotIn.value = b.dataset.h; });
    fr.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!slotIn.value) { $("#slot-err").textContent = "Merci de choisir un créneau."; return; }
      $("#slot-err").textContent = ""; send(fr, "Demande de rendez-vous — Selestic Auto", $("#msg-rdv"));
      $$(".slot", slots).forEach(function (s) { s.classList.remove("on"); });
    });
  }

  /* ---------- Simulateur visuel (photos recolorées) ---------- */
  var sv = $("#sim");
  if (sv) {
    var SM = D.simulateur, state = {}, cur = "sieges", ph = $("#sim-photo");
    SM.zones.forEach(function (z) { state[z.id] = { c: 0, m: z.matieres[0] || "" }; });
    ph.innerHTML = Object.keys(SM.scenes).map(function (k) {
      var sc = SM.scenes[k];
      return '<div class="sc sc' + k + '"><img src="' + sc.img + '" alt="" width="1280" height="720">' + sc.zones.map(function (z) { return '<div class="pl pc m-' + z + '" data-lz="' + z + '" style="background-image:url(' + sc.flat + ')"></div><div class="pl pt m-' + z + '" data-lt="' + z + '"></div>'; }).join("") + "</div>";
    }).join("");
    var tabs = $("#sim-tabs"), sw = $("#sim-sw"), mats = $("#sim-mats"), rec = $("#sim-rec"), matBox = $("#sim-matbox");
    function paint() {
      SM.zones.forEach(function (z) {
        var st = state[z.id], col = SM.couleurs[st.c][1];
        $$('[data-lz="' + z.id + '"]', ph).forEach(function (e) { e.style.setProperty("--zc", col || "transparent"); e.hidden = !col; });
        $$('[data-lt="' + z.id + '"]', ph).forEach(function (e) { e.dataset.mat = st.m; e.hidden = !col; });
      });
      var lines = SM.zones.map(function (z) { var st = state[z.id]; return z.nom + " : " + (st.c === 0 ? "d’origine" : (st.m ? st.m + ", " : "") + SM.couleurs[st.c][0]); });
      rec.innerHTML = lines.map(function (l) { return "<li>" + esc(l) + "</li>"; }).join("");
      $("#sim-devis").href = "devis.html?sim=" + encodeURIComponent(JSON.stringify(lines));
    }
    function ui() {
      var z = SM.zones.filter(function (x) { return x.id === cur; })[0], st = state[cur];
      tabs.innerHTML = SM.zones.map(function (x) { return '<button type="button" class="chip' + (x.id === cur ? " on" : "") + '" data-z="' + x.id + '">' + esc(x.nom) + "</button>"; }).join("");
      sw.innerHTML = SM.couleurs.map(function (c, i) { return '<button type="button" class="sw' + (i === st.c ? " on" : "") + '" data-c="' + i + '" style="--c:' + (c[1] || "transparent") + '"' + (c[1] ? "" : ' data-o="1"') + ' aria-label="' + esc(c[0]) + '" title="' + esc(c[0]) + '"></button>'; }).join("");
      $("#sim-cname").textContent = SM.couleurs[st.c][0];
      matBox.style.display = z.matieres.length && st.c !== 0 ? "" : "none";
      mats.innerHTML = z.matieres.map(function (m) { return '<button type="button" class="chip' + (m === st.m ? " on" : "") + '" data-m="' + m + '">' + esc(m) + "</button>"; }).join("");
      ph.dataset.sc = z.scene;
    }
    tabs.addEventListener("click", function (e) { var b = e.target.closest("[data-z]"); if (b) { cur = b.dataset.z; ui(); } });
    sw.addEventListener("click", function (e) { var b = e.target.closest("[data-c]"); if (b) { state[cur].c = +b.dataset.c; ui(); paint(); } });
    mats.addEventListener("click", function (e) { var b = e.target.closest("[data-m]"); if (b) { state[cur].m = b.dataset.m; ui(); paint(); } });
    $("#sim-all").addEventListener("click", function () { var c = state[cur].c; SM.zones.forEach(function (z) { state[z.id].c = c; }); ui(); paint(); });
    $("#sim-reset").addEventListener("click", function () { SM.zones.forEach(function (z) { state[z.id] = { c: 0, m: z.matieres[0] || "" }; }); ui(); paint(); });
    ui(); paint();
  }

  reveal();
})();
