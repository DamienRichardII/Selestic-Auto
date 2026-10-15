/* Chargeur du simulateur 3D Selestic.
   - le moteur (≈ 2,9 Mo, 0,8 Mo compressé) n'est téléchargé que sur la page Simulateur ;
   - si WebGL2 est absent, si le module échoue ou si une erreur survient : repli automatique sur la version photo ;
   - économiseur de données / réseau lent : le moteur démarre sur demande (bouton). */
(function () {
  var root = document.getElementById("sim3d-root");
  if (!root) return;
  var photo = document.getElementById("sim");
  var sw = document.getElementById("sim3d-switch");
  var mounted = null, failed = false, mode = "3d";

  function webgl2() {
    try { var c = document.createElement("canvas"); return !!c.getContext("webgl2"); } catch (e) { return false; }
  }
  function show(m) {
    mode = m;
    root.hidden = m !== "3d";
    if (photo) photo.hidden = m !== "photo";
    if (m === "photo" && window.SelesticPhotoSim) window.SelesticPhotoSim();
    if (sw) {
      sw.hidden = failed && m === "photo";
      sw.textContent = m === "3d" ? "Passer à la version photo (appareil moins puissant)" : "Revenir au simulateur 3D";
    }
  }
  function fallback(why) {
    if (window.console) console.warn("[sim3d] repli sur la version photo :", why && why.message ? why.message : why);
    failed = true;
    if (mounted) { try { mounted.unmount(); } catch (e) {} mounted = null; }
    root.innerHTML = "";
    show("photo");
    var n = document.getElementById("sim3d-note");
    if (n) { n.hidden = false; }
  }
  function boot() {
    if (mounted) return;
    root.innerHTML = '<div class="s3d-boot" role="status">Chargement du simulateur 3D…</div>';
    if (!document.getElementById("sim3d-css")) {
      var l = document.createElement("link"); l.rel = "stylesheet"; l.id = "sim3d-css"; l.href = "sim3d/sim3d.css"; document.head.appendChild(l);
    }
    import(new URL("sim3d/sim3d.js", document.baseURI).href).then(function (m) {
      if (!m.supported()) throw new Error("WebGL2 indisponible");
      root.innerHTML = "";
      mounted = m.mountSim3D(root, { onError: fallback, modelUrl: root.dataset.model || undefined });
    }).catch(fallback);
  }

  if (!webgl2()) { fallback("WebGL2 indisponible"); return; }
  if (sw) sw.addEventListener("click", function () {
    if (mode === "3d") show("photo");
    else { show("3d"); if (!mounted) boot(); }
  });
  var conn = navigator.connection || {};
  if (conn.saveData || /(^|-)2g$|3g/.test(conn.effectiveType || "")) {
    root.innerHTML = '<div class="s3d-boot"><p>Le simulateur 3D télécharge environ 3 Mo.</p><button type="button" class="btn btn-primary" id="sim3d-go">Lancer le simulateur 3D</button></div>';
    document.getElementById("sim3d-go").addEventListener("click", boot);
    return;
  }
  boot();
})();
