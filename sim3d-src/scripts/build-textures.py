#!/usr/bin/env python3
"""Prépare les textures PBR scannées (ambientCG, licence CC0) pour le simulateur 3D.

Entrée  : dossiers ambientCG décompressés (1K-JPG) dans --src  (voir SOURCES ci-dessous)
Sortie  : public/tex/<matière>/{albedo,normal,rough,ao}_{512,1024}.webp + tex.json (échelles réelles en mètres)

Traitement :
  * albédo « neutralisé » : on ne garde que la luminance relative (moyenne 0,86) → la teinte choisie par le client
    est multipliée dessus sans détruire le grain (cuirs, tissus, daim) ;
  * rugosité remappée dans une plage réaliste par matière ;
  * AO de cavité dérivée du relief ;
  * cuir perforé : perforations hexagonales cuites dans albédo / normale / rugosité / AO (profondeur apparente).
"""
import argparse, json, os
import numpy as np, cv2

SOURCES = {  # matière du simulateur -> (asset ambientCG, mode, échelle réelle d'une tuile en m, plage rugosité)
    'leather_smooth':     ('Leather038', 'neutral', 0.40, (0.40, 0.62)),
    'leather_grained':    ('Leather030', 'neutral', 0.40, (0.50, 0.72)),
    'leather_perforated': ('Leather037', 'neutral', 0.336, (0.40, 0.62)),
    'suedine':            ('Leather039', 'neutral', 0.30, (0.92, 1.0)),
    'alcantara':          ('Leather039', 'nap',     0.25, (0.92, 1.0)),   # base daim + fibres (nap) cuites
    'fabric':             ('Fabric030',  'neutral', 0.30, (0.85, 1.0)),
    'carbon':             ('Fabric004',  'keep',    0.12, (0.22, 0.45)),
    'brushed_alu':        ('Metal009',   'keep',    0.40, (0.28, 0.52)),
    'plastic':            ('Rubber004',  'soft',    0.30, (0.55, 0.85)),
}

def rd(src, asset, kind, gray=False):
    f = os.path.join(src, asset, f'{asset}_1K-JPG_{kind}.jpg')
    im = cv2.imread(f, cv2.IMREAD_GRAYSCALE if gray else cv2.IMREAD_COLOR)
    if im is None: raise SystemExit('manquant: ' + f)
    return im.astype(np.float32) / 255.0

def tile_blur(a, s):
    k = int(s * 3) | 1
    p = k
    b = cv2.copyMakeBorder(a, p, p, p, p, cv2.BORDER_WRAP)
    b = cv2.GaussianBlur(b, (0, 0), s)
    return b[p:-p, p:-p]

def hexholes(n, cols=48):
    rows = round(cols / 1.7320508)
    yy, xx = np.mgrid[0:n, 0:n].astype(np.float32) / n
    px, py = xx * cols, yy * rows
    ax, ay = (px % 1) - .5, ((py % 1) - .5) * 1.7320508
    bx, by = ((px + .5) % 1) - .5, (((py + .5) % 1) - .5) * 1.7320508
    d = np.minimum(np.hypot(ax, ay), np.hypot(bx, by))
    return d  # 0 au centre du trou

def sstep(a, b, x):
    t = np.clip((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t)

def save(path, img):
    img = np.clip(img * 255 + .5, 0, 255).astype(np.uint8)
    cv2.imwrite(path, img, [cv2.IMWRITE_WEBP_QUALITY, 90])

def run(src, out):
    meta = {}
    for name, (asset, mode, tile, (r0, r1)) in SOURCES.items():
        col = rd(src, asset, 'Color'); nrm = rd(src, asset, 'NormalGL'); rgh = rd(src, asset, 'Roughness', True); dsp = rd(src, asset, 'Displacement', True)
        n = 1024
        col, nrm, rgh, dsp = [cv2.resize(x, (n, n), interpolation=cv2.INTER_AREA) for x in (col, nrm, rgh, dsp)]
        if mode in ('neutral', 'soft', 'nap'):
            lum = cv2.cvtColor(col, cv2.COLOR_BGR2GRAY)
            low = tile_blur(lum, 48)                      # retire les grandes taches de couleur
            alb = lum / np.maximum(low, 1e-3) * 0.86
            gain = {'neutral': 1.15, 'soft': 0.3, 'nap': 0.5}[mode]
            alb = np.clip(0.86 + (alb - 0.86) * gain, 0.05, 1.0)   # grain un peu plus lisible
            alb = np.stack([alb] * 3, -1)
        else:
            alb = col.copy()  # BGR (cv2) : sauvé tel quel
        r = r0 + (r1 - r0) * (rgh - rgh.min()) / max(1e-4, rgh.max() - rgh.min())
        ao = np.clip(1 - 2.2 * np.maximum(0, tile_blur(dsp, 3) - dsp), 0.35, 1)
        nx, ny, nz = (nrm[:, :, 2] * 2 - 1), (nrm[:, :, 1] * 2 - 1), (nrm[:, :, 0] * 2 - 1)  # BGR -> xyz
        if name == 'leather_perforated':
            d = hexholes(n)
            hole = 1 - sstep(.19, .25, d)                  # 1 dans le trou
            rim = sstep(.15, .26, d) * (1 - sstep(.26, .38, d))  # léger bourrelet autour
            hh = -0.9 * hole + 0.12 * rim
            gx = (np.roll(hh, -1, 1) - np.roll(hh, 1, 1)) * n * 0.012
            gy = (np.roll(hh, -1, 0) - np.roll(hh, 1, 0)) * n * 0.012
            nx = nx - gx; ny = ny - gy
            alb = alb * (1 - 0.93 * hole)[..., None]
            r = r * (1 - hole) + 1.0 * hole
            ao = ao * (1 - 0.85 * hole) * (1 - 0.25 * sstep(.26, .2, d) * (1 - hole))
        if mode == 'nap':
            rs = np.random.RandomState(7)
            fib = cv2.GaussianBlur(rs.rand(n, n).astype(np.float32), (0, 0), 0.9)           # fibres fines
            fib = (fib - fib.mean()) / (fib.std() + 1e-6)
            streak = tile_blur(rs.rand(n, n).astype(np.float32), 9)                          # sens du poil (taches douces)
            streak = (streak - streak.mean()) / (streak.std() + 1e-6)
            alb = np.clip(alb * (1 + 0.07 * fib[..., None] + 0.06 * streak[..., None]), 0.05, 1)
            nx = nx + 0.25 * (np.roll(fib, -1, 1) - np.roll(fib, 1, 1)); ny = ny + 0.25 * (np.roll(fib, -1, 0) - np.roll(fib, 1, 0))
            r = np.full_like(r, 1.0)
        l = np.sqrt(nx * nx + ny * ny + nz * nz) + 1e-6
        nmap = np.stack([nx / l, ny / l, nz / l], -1) * .5 + .5
        d_out = os.path.join(out, name); os.makedirs(d_out, exist_ok=True)
        for s in (1024, 512):
            f = (lambda im: im) if s == 1024 else (lambda im: cv2.resize(im, (s, s), interpolation=cv2.INTER_AREA))
            save(f'{d_out}/albedo_{s}.webp', f(alb))
            save(f'{d_out}/normal_{s}.webp', f(nmap[:, :, ::-1]))
            save(f'{d_out}/rough_{s}.webp', f(r))
            save(f'{d_out}/ao_{s}.webp', f(ao))
        meta[name] = {'tile': tile, 'source': asset}
        print(name, asset, 'ok')
    json.dump(meta, open(os.path.join(out, 'tex.json'), 'w'), indent=1)

if __name__ == '__main__':
    ap = argparse.ArgumentParser(); ap.add_argument('--src', required=True); ap.add_argument('--out', default='public/tex')
    a = ap.parse_args(); run(a.src, a.out)
