import { r as e } from "./rolldown-runtime-Y_bBpyJl.js";
import { b as t, v as n } from "./r3f-C1LUL5py.js";
import { Bt as r, T as i, Vt as a } from "./post-CUbYs-ZN.js";
//#region node_modules/zustand/esm/react.mjs
var o = /* @__PURE__ */ e(t(), 1), s = (e) => e;
function c(e, t = s) {
	let n = o.useSyncExternalStore(e.subscribe, o.useCallback(() => t(e.getState()), [e, t]), o.useCallback(() => t(e.getInitialState()), [e, t]));
	return o.useDebugValue(n), n;
}
var l = (e) => {
	let t = n(e), r = (e) => c(t, e);
	return Object.assign(r, t), r;
}, u = ((e) => e ? l(e) : l), d = [
	"leather_smooth",
	"leather_perforated",
	"leather_grained",
	"suedine",
	"alcantara",
	"fabric"
], f = [
	{
		id: "seat_cushion",
		label: "Assise",
		group: "Sièges",
		hint: "Partie centrale de l’assise",
		materials: d,
		patterns: [
			"plain",
			"diamond",
			"ribs",
			"hex"
		],
		view: "seats"
	},
	{
		id: "seat_back",
		label: "Dossier",
		group: "Sièges",
		hint: "Partie centrale du dossier",
		materials: d,
		patterns: [
			"plain",
			"diamond",
			"ribs",
			"hex"
		],
		view: "seats"
	},
	{
		id: "seat_bolster",
		label: "Renforts latéraux",
		group: "Sièges",
		hint: "Joues d’assise et de dossier",
		materials: d,
		patterns: ["plain"],
		view: "seats"
	},
	{
		id: "seat_headrest",
		label: "Appuie-tête",
		group: "Sièges",
		hint: "Appuie-têtes avant et arrière",
		materials: d,
		patterns: [
			"plain",
			"diamond",
			"ribs"
		],
		view: "seats"
	},
	{
		id: "wheel",
		label: "Volant",
		group: "Volant",
		hint: "Couronne du volant",
		materials: [
			"leather_smooth",
			"leather_perforated",
			"leather_grained",
			"alcantara",
			"carbon"
		],
		view: "wheel"
	},
	{
		id: "belts",
		label: "Ceintures",
		group: "Ceintures",
		hint: "Sangles de ceintures de sécurité",
		materials: ["webbing"],
		view: "belts"
	},
	{
		id: "headliner",
		label: "Ciel de toit & montants",
		group: "Ciel de toit",
		hint: "Ciel de toit et habillages de montants",
		materials: [
			"alcantara",
			"suedine",
			"fabric",
			"leather_smooth"
		],
		view: "roof"
	},
	{
		id: "door_panels",
		label: "Panneaux de portes",
		group: "Portes & décor",
		hint: "Cartes de portes et accoudoir central",
		materials: [
			"leather_smooth",
			"leather_perforated",
			"leather_grained",
			"suedine",
			"alcantara",
			"fabric"
		],
		view: "door"
	},
	{
		id: "decor",
		label: "Inserts décoratifs",
		group: "Portes & décor",
		hint: "Inserts de portes et de planche de bord (finitions à valider avec l’atelier)",
		materials: [
			"carbon",
			"brushed_alu",
			"leather_smooth",
			"alcantara"
		],
		view: "door"
	},
	{
		id: "stitching",
		label: "Coutures & surpiqûres",
		group: "Finitions",
		hint: "Fil de couture de toutes les zones",
		materials: ["thread"],
		view: "seats"
	},
	{
		id: "piping",
		label: "Passepoils",
		group: "Finitions",
		hint: "Cordons de finition entre panneaux",
		materials: ["leather_smooth", "alcantara"],
		view: "seats"
	}
], p = Object.fromEntries(f.map((e) => [e.id, e])), m = [
	"Sièges",
	"Volant",
	"Ceintures",
	"Ciel de toit",
	"Portes & décor",
	"Finitions"
], h = [
	{
		id: "noir",
		label: "Noir",
		hex: "#16181a"
	},
	{
		id: "anthracite",
		label: "Anthracite",
		hex: "#3b4043"
	},
	{
		id: "gris",
		label: "Gris pierre",
		hex: "#8b9094"
	},
	{
		id: "gris-clair",
		label: "Gris clair",
		hex: "#c4c7c9"
	},
	{
		id: "blanc",
		label: "Blanc",
		hex: "#eeeeea"
	},
	{
		id: "creme",
		label: "Crème",
		hex: "#d9ccb0"
	},
	{
		id: "sable",
		label: "Beige sable",
		hex: "#b79f7c"
	},
	{
		id: "cognac",
		label: "Cognac",
		hex: "#9a5a2c"
	},
	{
		id: "chocolat",
		label: "Chocolat",
		hex: "#4b3125"
	},
	{
		id: "bordeaux",
		label: "Bordeaux",
		hex: "#5e1424"
	},
	{
		id: "rouge",
		label: "Rouge",
		hex: "#b3202a"
	},
	{
		id: "orange",
		label: "Orange",
		hex: "#d9661a"
	},
	{
		id: "jaune",
		label: "Jaune",
		hex: "#e3b91a"
	},
	{
		id: "vert-selestic",
		label: "Vert Selestic",
		hex: "#0f5c3f"
	},
	{
		id: "vert-olive",
		label: "Vert olive",
		hex: "#5c6b3a"
	},
	{
		id: "bleu-nuit",
		label: "Bleu nuit",
		hex: "#14233f"
	},
	{
		id: "bleu",
		label: "Bleu",
		hex: "#1f55b8"
	},
	{
		id: "turquoise",
		label: "Turquoise",
		hex: "#1fa6b8"
	},
	{
		id: "violet",
		label: "Violet",
		hex: "#5d2d8e"
	},
	{
		id: "rose",
		label: "Rose",
		hex: "#d9427a"
	},
	{
		id: "dore",
		label: "Doré",
		hex: "#c9a24b"
	},
	{
		id: "argent",
		label: "Argent",
		hex: "#b9bcc0"
	}
], g = Object.fromEntries(h.map((e) => [e.id, e])), _ = {
	leather_smooth: {
		id: "leather_smooth",
		label: "Cuir lisse",
		short: "Grain fin, léger brillant satiné"
	},
	leather_perforated: {
		id: "leather_perforated",
		label: "Cuir perforé",
		short: "Perforations hexagonales, aspect sport"
	},
	leather_grained: {
		id: "leather_grained",
		label: "Cuir grainé",
		short: "Grain marqué, toucher naturel"
	},
	suedine: {
		id: "suedine",
		label: "Suédine",
		short: "Microfibre veloutée, mate"
	},
	alcantara: {
		id: "alcantara",
		label: "Alcantara",
		short: "Microfibre technique, effet daim"
	},
	fabric: {
		id: "fabric",
		label: "Tissu",
		short: "Textile tissé, mat et chaleureux"
	},
	carbon: {
		id: "carbon",
		label: "Carbone",
		short: "Sergé 2×2 sous vernis",
		optional: !0
	},
	brushed_alu: {
		id: "brushed_alu",
		label: "Aluminium brossé",
		short: "Métal brossé anisotrope",
		optional: !0
	},
	webbing: {
		id: "webbing",
		label: "Sangle",
		short: "Sangle tissée sergée"
	},
	thread: {
		id: "thread",
		label: "Fil",
		short: "Fil de surpiqûre"
	}
}, v = {
	plain: {
		id: "plain",
		label: "Uni"
	},
	diamond: {
		id: "diamond",
		label: "Losanges matelassés"
	},
	ribs: {
		id: "ribs",
		label: "Côtes horizontales"
	},
	hex: {
		id: "hex",
		label: "Nid d’abeille"
	}
}, y = null;
function b() {
	if (y) return y;
	let e = !1, t = "";
	try {
		let n = document.createElement("canvas").getContext("webgl2");
		if (n) {
			e = !0;
			let r = n.getExtension("WEBGL_debug_renderer_info");
			t = r ? String(n.getParameter(r.UNMASKED_RENDERER_WEBGL)) : "", n.getExtension("WEBGL_lose_context")?.loseContext();
		}
	} catch {}
	let n = /swiftshader|llvmpipe|software|basic render/i.test(t);
	return y = {
		webgl2: e,
		renderer: t,
		software: n,
		webgpu: typeof navigator < "u" && "gpu" in navigator
	}, y;
}
function x() {
	try {
		if (b().software) return "low";
		let e = navigator, t = matchMedia("(pointer: coarse)").matches || /Android|iPhone|iPad|Mobile/i.test(navigator.userAgent), n = navigator.hardwareConcurrency || 4, r = e.deviceMemory ?? 4;
		return r < 3 || n <= 2 || t ? "low" : n <= 4 || r < 8 ? "medium" : "high";
	} catch {
		return "medium";
	}
}
var S = {
	low: {
		dpr: [1, 1.25],
		texSize: 256,
		shadows: !1,
		shadowMap: 512,
		ao: !1,
		post: !1,
		outline: !1,
		envRes: 128,
		segments: 3
	},
	medium: {
		dpr: [1, 1.5],
		texSize: 512,
		shadows: !0,
		shadowMap: 1024,
		ao: !1,
		post: !0,
		outline: !0,
		envRes: 256,
		segments: 5
	},
	high: {
		dpr: [1, 2],
		texSize: 1024,
		shadows: !0,
		shadowMap: 2048,
		ao: !0,
		post: !0,
		outline: !0,
		envRes: 512,
		segments: 8
	}
}, C = (e, t, n = "plain") => ({
	material: e,
	color: t,
	pattern: n
}), w = {
	seat_cushion: C("leather_smooth", "cognac"),
	seat_back: C("leather_smooth", "cognac"),
	seat_bolster: C("leather_smooth", "noir"),
	seat_headrest: C("leather_smooth", "noir"),
	wheel: C("leather_perforated", "noir"),
	belts: C("webbing", "noir"),
	headliner: C("alcantara", "anthracite"),
	door_panels: C("leather_smooth", "noir"),
	decor: C("carbon", "noir"),
	stitching: C("thread", "dore"),
	piping: C("leather_smooth", "noir")
}, T = (e) => JSON.parse(JSON.stringify(e)), E = () => "SEL-3D-" + Date.now().toString(36).slice(-5).toUpperCase() + Math.random().toString(36).slice(2, 4).toUpperCase(), D = "selestic-sim3d-v1", O = u((e, t) => ({
	config: T(w),
	selected: "seat_cushion",
	hovered: null,
	view: "global",
	lighting: "showroom",
	cutaway: !0,
	qualityPref: "auto",
	tier: x(),
	projectId: E(),
	snapshots: [],
	ready: !1,
	recapOpen: !1,
	toast: "",
	modelUrl: null,
	select: (t) => e({ selected: t }),
	hover: (t) => e({ hovered: t }),
	setView: (t) => e({ view: t }),
	setLighting: (t) => e({ lighting: t }),
	setCutaway: (t) => e({ cutaway: t }),
	setQualityPref: (t) => e({
		qualityPref: t,
		tier: t === "auto" ? x() : t
	}),
	setMaterial: (n, r) => {
		if (!p[n].materials.includes(r)) return;
		let i = T(t().config);
		i[n].material = r;
		let a = p[n].patterns;
		(!a || !a.includes(i[n].pattern)) && (i[n].pattern = "plain"), e({ config: i });
	},
	setColor: (n, r) => {
		if (!g[r]) return;
		let i = T(t().config);
		i[n].color = r, e({ config: i });
	},
	setPattern: (n, r) => {
		if (!p[n].patterns?.includes(r)) return;
		let i = T(t().config);
		i[n].pattern = r, e({ config: i });
	},
	applyTo: (n, r, i) => {
		let a = T(t().config), o = a[n], s = 0;
		for (let e of r) {
			if (e === n) continue;
			let t = p[e], r = !1;
			if ((i === "material" || i === "both") && t.materials.includes(o.material) && (a[e].material = o.material, t.patterns?.includes(o.pattern) ? a[e].pattern = o.pattern : a[e].pattern = "plain", r = !0), i === "color" || i === "both") {
				let t = a[e].material;
				t !== "carbon" && t !== "brushed_alu" && (a[e].color = o.color, r = !0);
			}
			r && s++;
		}
		return e({ config: a }), s;
	},
	reset: () => e({
		config: T(w),
		snapshots: [],
		projectId: E()
	}),
	save: () => {
		try {
			let { config: n, projectId: r } = t();
			localStorage.setItem(D, JSON.stringify({
				config: n,
				projectId: r,
				t: Date.now()
			})), e({ toast: "Configuration enregistrée sur cet appareil" });
		} catch {
			e({ toast: "Enregistrement impossible (stockage bloqué)" });
		}
	},
	load: () => {
		try {
			let e = localStorage.getItem(D);
			if (!e) return !1;
			let n = JSON.parse(e);
			return t().loadConfig(n.config, n.projectId), !0;
		} catch {
			return !1;
		}
	},
	loadConfig: (t, n) => {
		let r = T(w);
		for (let e of f) {
			let n = t?.[e.id];
			n && (n.material && _[n.material] && e.materials.includes(n.material) && (r[e.id].material = n.material), n.color && g[n.color] && (r[e.id].color = n.color), n.pattern && v[n.pattern] && e.patterns?.includes(n.pattern) && (r[e.id].pattern = n.pattern));
		}
		e({
			config: r,
			projectId: n && /^[\w-]{4,24}$/.test(n) ? n : E()
		});
	},
	setSnapshots: (t) => e({ snapshots: t }),
	setReady: (t) => e({ ready: t }),
	setRecap: (t) => e({ recapOpen: t }),
	say: (t) => e({ toast: t }),
	setModelUrl: (t) => e({ modelUrl: t })
}));
//#endregion
//#region src/three/proc.ts
function k(e) {
	let t = e >>> 0;
	return () => {
		t = t + 1831565813 >>> 0;
		let e = t;
		return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
	};
}
var A = (e, t, n) => {
	let r = Math.min(1, Math.max(0, (n - e) / (t - e)));
	return r * r * (3 - 2 * r);
}, j = (e) => e - Math.floor(e);
function M(e, t, n) {
	let r = k(n), i = new Float32Array(t * t * 2);
	for (let e = 0; e < i.length; e++) i[e] = r();
	let a = new Float32Array(e * e), o = new Float32Array(e * e), s = e / t;
	for (let n = 0; n < e; n++) {
		let r = Math.floor(n / s);
		for (let c = 0; c < e; c++) {
			let l = Math.floor(c / s), u = 9, d = 9;
			for (let e = -1; e <= 1; e++) {
				let a = r + e, o = (a % t + t) % t;
				for (let e = -1; e <= 1; e++) {
					let r = l + e, f = (r % t + t) % t, p = (o * t + f) * 2, m = (r + i[p]) * s, h = (a + i[p + 1]) * s, g = Math.hypot(c - m, n - h) / s;
					g < u ? (d = u, u = g) : g < d && (d = g);
				}
			}
			a[n * e + c] = u, o[n * e + c] = d;
		}
	}
	return {
		f1: a,
		f2: o
	};
}
function N(e, t, n) {
	let r = k(n), i = new Float32Array(t * t);
	for (let e = 0; e < i.length; e++) i[e] = r();
	let a = new Float32Array(e * e);
	for (let n = 0; n < e; n++) {
		let r = n / e * t, o = Math.floor(r), s = A(0, 1, r - o);
		for (let r = 0; r < e; r++) {
			let c = r / e * t, l = Math.floor(c), u = A(0, 1, c - l), d = i[o % t * t + l % t], f = i[o % t * t + (l + 1) % t], p = i[(o + 1) % t * t + l % t], m = i[(o + 1) % t * t + (l + 1) % t];
			a[n * e + r] = d + (f - d) * u + (p - d) * s + (d - f - p + m) * u * s;
		}
	}
	return a;
}
function P(e, t) {
	let n = k(t), r = new Float32Array(e * e);
	for (let e = 0; e < r.length; e++) r[e] = n();
	return r;
}
function F(e, t, n = 1) {
	let r = new Float32Array(e.length), i = new Float32Array(e.length), a = n * 2 + 1;
	for (let i = 0; i < t; i++) for (let o = 0; o < t; o++) {
		let s = 0;
		for (let r = -n; r <= n; r++) s += e[i * t + (o + r + t) % t];
		r[i * t + o] = s / a;
	}
	for (let e = 0; e < t; e++) for (let o = 0; o < t; o++) {
		let s = 0;
		for (let i = -n; i <= n; i++) s += r[(e + i + t) % t * t + o];
		i[e * t + o] = s / a;
	}
	return i;
}
function I(e, t, n) {
	if (e === "diamond") {
		let e = j((t + n) * 3), r = j((t - n) * 3), i = Math.max(Math.abs(e - .5), Math.abs(r - .5)) * 2;
		return (1 - i ** 2.4) * A(1, .86, i);
	}
	if (e === "ribs") {
		let e = Math.sin(j(n * 7) * Math.PI);
		return Math.max(0, e) ** .55;
	}
	if (e === "hex") {
		let e = t * 6, r = n * 3, i = j(e) - .5, a = (j(r) - .5) * 1.7320508, o = j(e + .5) - .5, s = (j(r + .5) - .5) * 1.7320508, c = Math.min(Math.hypot(i, a), Math.hypot(o, s));
		return (1 - Math.min(1, c / .5) ** 3) * A(.5, .4, c);
	}
	return 1;
}
function L(e, t, n, r, i, a) {
	let { f1: o, f2: s } = M(e, t, r), c = i ? M(e, t * 3, r + 7) : null, l = N(e, 6, r + 3), u = e * e, d = new Float32Array(u), f = new Float32Array(u), p = new Float32Array(u);
	for (let t = 0; t < u; t++) {
		let r = A(0, n, s[t] - o[t]), i = .55 + .45 * r;
		c && (i -= .18 * (1 - A(0, .2, c.f2[t] - c.f1[t])));
		let u = t % e, m = t / e | 0, h = a === "plain" ? 1 : I(a, u / e, m / e);
		d[t] = a === "plain" ? i : .22 * i + .78 * h, f[t] = .88 + .08 * l[t] + .06 * r - (a === "plain" ? 0 : .18 * (1 - h)), p[t] = .46 + .3 * (1 - r) + .12 * l[t] + (a === "plain" ? 0 : .12 * (1 - h));
	}
	return {
		h: d,
		a: f,
		r: p,
		ns: i ? 1.5 : .9,
		tile: .28
	};
}
function R(e, t, n) {
	let r = L(e, 44, .16, t, !1, n);
	for (let t = 0; t < e; t++) for (let n = 0; n < e; n++) {
		let i = n / e, a = t / e, o = i * 24, s = a * 14, c = j(o) - .5, l = (j(s) - .5) * 1.7320508, u = j(o + .5) - .5, d = (j(s + .5) - .5) * 1.7320508, f = 1 - A(.17, .23, Math.min(Math.hypot(c, l), Math.hypot(u, d))), p = t * e + n;
		r.h[p] = r.h[p] * (1 - f) - .6 * f, r.a[p] *= 1 - .9 * f, r.r[p] = r.r[p] * (1 - f) + 1 * f;
	}
	return r.ns = 1.2, r;
}
function z(e, t, n) {
	let r = F(P(e, t), e, 1), i = P(e, t + 1), a = N(e, n ? 10 : 5, t + 5), o = e * e, s = new Float32Array(o), c = new Float32Array(o), l = new Float32Array(o);
	for (let e = 0; e < o; e++) s[e] = .5 + .5 * (r[e] - .5) * 2, c[e] = (n ? .74 : .8) + (n ? .26 : .18) * a[e] + .08 * (i[e] - .5), l[e] = 1;
	return {
		h: s,
		a: c,
		r: l,
		ns: n ? .55 : .4,
		tile: .2
	};
}
function B(e, t, n) {
	let r = j(e * n), i = j(t * n), a = (Math.floor(e * n) + Math.floor(t * n)) % 2 == 0;
	return {
		over: a,
		prof: Math.sin(a ? i * Math.PI : r * Math.PI)
	};
}
function V(e, t) {
	let n = e * e, r = new Float32Array(n), i = new Float32Array(n), a = new Float32Array(n), o = k(t), s = Array.from({ length: 56 }, () => .84 + .16 * o()), c = Array.from({ length: 56 }, () => .84 + .16 * o()), l = P(e, t + 2);
	for (let t = 0; t < e; t++) for (let n = 0; n < e; n++) {
		let o = n / e, u = t / e, d = B(o, u, 56), f = t * e + n, p = Math.floor(o * 56), m = Math.floor(u * 56);
		r[f] = .25 + .6 * d.prof + .1 * l[f], i[f] = (d.over ? s[p % 56] : c[m % 56]) * (.78 + .22 * d.prof), a[f] = .9 + .1 * l[f];
	}
	return {
		h: r,
		a: i,
		r: a,
		ns: 1.4,
		tile: .2
	};
}
function H(e, t) {
	let n = e * e, r = new Float32Array(n), i = new Float32Array(n), a = new Float32Array(n), o = P(e, t);
	for (let t = 0; t < e; t++) for (let n = 0; n < e; n++) {
		let s = n / e, c = t / e, l = j(s * 20), u = j(c * 20), d = Math.floor(s * 20), f = Math.floor(c * 20), p = Math.floor((d + f) / 2) % 2 == 0, m = Math.sin(p ? u * Math.PI : l * Math.PI), h = t * e + n;
		r[h] = .3 + .6 * m, i[h] = (p ? .2 : .1) * (.5 + .5 * m) + .04 + .01 * o[h], a[h] = .34 + .12 * (1 - m);
	}
	return {
		h: r,
		a: i,
		r: a,
		ns: .9,
		tile: .1
	};
}
function U(e, t) {
	let n = e * e, r = new Float32Array(n), i = new Float32Array(n), a = new Float32Array(n), o = P(e, t), s = new Float32Array(e);
	for (let t = 0; t < e; t++) s[t] = o[t * e];
	let c = F(P(e, t + 3), e, 0);
	for (let t = 0; t < e; t++) for (let n = 0; n < e; n++) {
		let o = t * e + n, l = .6 * s[t] + .4 * s[(t + 1) % e];
		r[o] = .5 + .12 * (l - .5) + .04 * (c[o] - .5), i[o] = .82 + .16 * l, a[o] = .3 + .28 * l;
	}
	return {
		h: r,
		a: i,
		r: a,
		ns: .35,
		tile: .3
	};
}
function W(e, t) {
	let n = e * e, r = new Float32Array(n), i = new Float32Array(n), a = new Float32Array(n), o = P(e, t);
	for (let t = 0; t < e; t++) for (let n = 0; n < e; n++) {
		let s = n / e, c = t / e, l = .5 + .5 * Math.sin((s * 36 + c * 36) * Math.PI * 2), u = t * e + n;
		r[u] = .3 + .6 * l + .08 * o[u], i[u] = .74 + .26 * l, a[u] = .82 + .15 * o[u];
	}
	return {
		h: r,
		a: i,
		r: a,
		ns: 1.3,
		tile: .1
	};
}
function G(e, t, n) {
	switch (e) {
		case "leather_smooth": return L(n, 46, .14, 11, !1, t);
		case "leather_grained": return L(n, 24, .3, 23, !0, t);
		case "leather_perforated": return R(n, 31, t);
		case "suedine": return z(n, 41, !1);
		case "alcantara": return z(n, 53, !0);
		case "fabric": return V(n, 61);
		case "carbon": return H(n, 71);
		case "brushed_alu": return U(n, 83);
		case "webbing": return W(n, 97);
		default: return null;
	}
}
function K(e, t) {
	let n = document.createElement("canvas");
	n.width = n.height = e;
	let r = n.getContext("2d"), i = r.createImageData(e, e);
	for (let n = 0; n < e * e; n++) t(n, i.data);
	return r.putImageData(i, 0, 0), n;
}
var q = /* @__PURE__ */ new Map();
function J(e, t) {
	return e.wrapS = e.wrapT = r, e.colorSpace = t ? a : "", e.anisotropy = 8, e.needsUpdate = !0, e;
}
function Y(e, t, n) {
	let r = t === "plain" ? 5 : 11, a = `${e}|${t}|${n}`, o = q.get(a);
	if (o) return o;
	let s = G(e, t, n);
	if (!s) return null;
	let c = K(n, (e, t) => {
		let n = Math.max(0, Math.min(255, s.a[e] ** (1 / 2.2) * 255));
		t[e * 4] = t[e * 4 + 1] = t[e * 4 + 2] = n, t[e * 4 + 3] = 255;
	}), l = K(n, (e, t) => {
		t[e * 4] = 255, t[e * 4 + 1] = Math.max(0, Math.min(255, s.r[e] * 255)), t[e * 4 + 2] = 0, t[e * 4 + 3] = 255;
	}), u = K(n, (e, t) => {
		let i = e % n, a = e / n | 0, o = s.h[a * n + (i + 1) % n] - s.h[a * n + (i - 1 + n) % n], c = s.h[(a + 1) % n * n + i] - s.h[(a - 1 + n) % n * n + i], l = r, u = -o * l, d = c * l, f = 1, p = Math.hypot(u, d, f);
		u /= p, d /= p, f /= p, t[e * 4] = (u * .5 + .5) * 255, t[e * 4 + 1] = (d * .5 + .5) * 255, t[e * 4 + 2] = (f * .5 + .5) * 255, t[e * 4 + 3] = 255;
	}), d = {
		map: J(new i(c), !0),
		normal: J(new i(u), !1),
		rough: J(new i(l), !1),
		tile: s.tile,
		ns: s.ns,
		albedo: c
	};
	return q.set(a, d), d;
}
//#endregion
export { b as a, h as c, f as d, p as f, S as i, g as l, Y as n, _ as o, O as r, v as s, G as t, m as u };
