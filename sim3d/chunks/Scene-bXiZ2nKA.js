import { n as e, r as t } from "./rolldown-runtime-Y_bBpyJl.js";
import { a as n, b as r, c as i, d as a, f as o, g as s, h as c, i as l, l as u, m as d, n as f, o as p, p as m, r as h, s as g, t as _, u as v, v as y, w as b, x, y as S } from "./r3f-C40kzI9o.js";
import { f as C, i as w, l as T, n as E, r as D } from "./proc-Cyhl_mP0.js";
import { i as O, r as k, t as ee } from "./api-DLoyHBA5.js";
import { A as te, Bt as ne, D as re, Et as ie, F as A, Ft as ae, Gt as oe, K as j, Kt as se, M as ce, O as le, St as M, T as ue, Tt as N, W as de, an as fe, cn as pe, in as me, j as he, ln as P, nn as ge, v as _e, wt as ve, z as ye } from "./post-OfUYQ3IA.js";
import { n as be, t as xe } from "./three-CmFGUIvj.js";
//#region src/three/scan.ts
var F = /* @__PURE__ */ t(b(), 1), Se = {
	leather_smooth: {
		tile: .4,
		ns: 1.8,
		srgbAlbedo: !0
	},
	leather_grained: {
		tile: .4,
		ns: 1.5,
		srgbAlbedo: !0
	},
	leather_perforated: {
		tile: .336,
		ns: 1.3,
		srgbAlbedo: !0
	},
	suedine: {
		tile: .3,
		ns: 1,
		srgbAlbedo: !0
	},
	alcantara: {
		tile: .25,
		ns: 1.1,
		srgbAlbedo: !0
	},
	fabric: {
		tile: .3,
		ns: 1.3,
		srgbAlbedo: !0
	},
	carbon: {
		tile: .12,
		ns: 1,
		srgbAlbedo: !0
	},
	brushed_alu: {
		tile: .4,
		ns: .8,
		srgbAlbedo: !0
	},
	plastic: {
		tile: .3,
		ns: 1,
		srgbAlbedo: !0
	}
}, Ce = (e) => !!Se[e], we = new ge(), Te = /* @__PURE__ */ new Map();
function Ee() {
	let e = import.meta.url;
	return e.includes("/chunks/") ? e.slice(0, e.lastIndexOf("/chunks/") + 1) : e.slice(0, e.lastIndexOf("/") + 1);
}
function De(e, t, n) {
	return `${Ee()}tex/${e}/${t}_${n}.webp`;
}
function I(e, t, n, r) {
	let i = `${e}|${t}|${n}`, a = Te.get(i);
	return a || (a = we.loadAsync(De(e, t, n)).then((e) => (e.wrapS = e.wrapT = oe, e.colorSpace = t === "albedo" ? se : "", e.anisotropy = r, e.needsUpdate = !0, e)), Te.set(i, a)), a;
}
async function Oe(e, t, n, r = 8) {
	let i = Se[t];
	if (!i) return !1;
	try {
		let [a, o, s, c] = await Promise.all([
			I(t, "albedo", n, r),
			I(t, "normal", n, r),
			I(t, "rough", n, r),
			I(t, "ao", n, r)
		]), l = 1 / i.tile;
		for (let e of [
			a,
			o,
			s,
			c
		]) e.repeat.set(l, l);
		return e.map = a, e.normalMap = o, e.normalScale = new pe(i.ns, i.ns), e.roughnessMap = s, e.aoMap = c, e.aoMapIntensity = 1, e.needsUpdate = !0, !0;
	} catch {
		return !1;
	}
}
//#endregion
//#region src/three/materials.ts
var ke = /* @__PURE__ */ new Map();
function L(e, t, n, r) {
	Ce(e) && (n = "plain");
	let i = `${e}|${n}|${t}|${r}`, a = ke.get(i);
	if (a) return a;
	let o = E(e, n, r), s = new N({
		color: new A(t),
		roughness: .6,
		metalness: 0
	});
	if (s.name = `${e}:${n}`, o) {
		s.map = o.map, s.normalMap = o.normal, s.roughnessMap = o.rough;
		let e = 1 / o.tile;
		for (let t of [
			o.map,
			o.normal,
			o.rough
		]) t.repeat.set(e, e);
		let t = n === "plain" ? 1 : 1.6;
		s.normalScale = new pe(o.ns * t, o.ns * t);
	}
	let c = new A(t).lerp(new A("#ffffff"), .14);
	switch (e) {
		case "leather_smooth":
			Object.assign(s, {
				roughness: 1,
				clearcoat: .14,
				clearcoatRoughness: .45,
				sheen: .3,
				sheenRoughness: .55,
				sheenColor: c,
				ior: 1.45,
				specularIntensity: .8
			});
			break;
		case "leather_perforated":
			Object.assign(s, {
				roughness: 1,
				clearcoat: .1,
				clearcoatRoughness: .5,
				sheen: .25,
				sheenRoughness: .6,
				sheenColor: c,
				ior: 1.45
			});
			break;
		case "leather_grained":
			Object.assign(s, {
				roughness: 1,
				clearcoat: .06,
				clearcoatRoughness: .6,
				sheen: .3,
				sheenRoughness: .6,
				sheenColor: c
			});
			break;
		case "suedine":
			Object.assign(s, {
				roughness: 1,
				sheen: .55,
				sheenRoughness: .6,
				sheenColor: c,
				specularIntensity: .2
			});
			break;
		case "alcantara":
			Object.assign(s, {
				roughness: 1,
				sheen: .6,
				sheenRoughness: .45,
				sheenColor: c,
				specularIntensity: .22
			});
			break;
		case "fabric":
			Object.assign(s, {
				roughness: 1,
				sheen: .7,
				sheenRoughness: .7,
				sheenColor: c,
				specularIntensity: .3
			});
			break;
		case "carbon":
			Object.assign(s, {
				color: new A("#ffffff"),
				roughness: 1,
				metalness: .2,
				clearcoat: 1,
				clearcoatRoughness: .04
			});
			break;
		case "brushed_alu":
			Object.assign(s, {
				color: new A("#d9dcdf"),
				roughness: 1,
				metalness: 1,
				anisotropy: .8,
				anisotropyRotation: 0
			});
			break;
		case "webbing":
			Object.assign(s, {
				roughness: 1,
				sheen: .4,
				sheenRoughness: .7,
				sheenColor: c,
				specularIntensity: .3
			});
			break;
		case "thread": Object.assign(s, {
			roughness: .62,
			sheen: .6,
			sheenRoughness: .5,
			sheenColor: c
		});
	}
	return Ce(e) && Oe(s, e, r >= 1024 ? 1024 : 512), ke.set(i, s), s;
}
function Ae(e, t) {
	let n = {};
	return Object.keys(e).forEach((r) => {
		let i = e[r];
		n[r] = L(i.material, T[i.color]?.hex ?? "#222", i.pattern, t);
	}), n;
}
var je = /* @__PURE__ */ new Map(), Me = /* @__PURE__ */ new WeakMap(), Ne = (e) => Me.get(e);
function R(e, t) {
	let n = e + t, r = je.get(n);
	if (r) return r;
	let i;
	switch (e) {
		case "plastic": {
			let e = E("leather_grained", "plain", Math.min(t, 512)), n = new N({
				color: "#17191b",
				roughness: 1,
				clearcoat: .05,
				clearcoatRoughness: .7
			});
			if (e) {
				let t = e.normal.clone();
				t.repeat.set(5, 5), t.needsUpdate = !0, n.normalMap = t, n.normalScale = new pe(.5, .5), n.roughnessMap = null, n.roughness = .62;
			}
			Oe(n, "plastic", t >= 1024 ? 1024 : 512), i = n;
			break;
		}
		case "plasticSoft":
			i = new N({
				color: "#0f1011",
				roughness: .75,
				sheen: .3,
				sheenRoughness: .6,
				sheenColor: new A("#444")
			});
			break;
		case "chrome":
			i = new N({
				color: "#cfd2d4",
				metalness: 1,
				roughness: .18
			});
			break;
		case "gold":
			i = new N({
				color: "#c9a24b",
				metalness: 1,
				roughness: .28
			});
			break;
		case "carpet": {
			let e = E("fabric", "plain", Math.min(t, 512)), n = new N({
				color: "#0d0e0f",
				roughness: 1,
				sheen: .25,
				sheenRoughness: .8
			});
			if (e) {
				let t = e.map.clone(), r = e.normal.clone();
				for (let e of [t, r]) e.repeat.set(9, 9), e.needsUpdate = !0;
				n.map = t, n.normalMap = r;
			}
			i = n;
			break;
		}
		case "glassBlack":
			i = new N({
				color: "#05070a",
				roughness: .08,
				metalness: .2,
				clearcoat: 1,
				clearcoatRoughness: .03
			});
			break;
		case "rubber":
			i = new ie({
				color: "#0b0b0c",
				roughness: .9
			});
			break;
		case "pedestal": i = new N({
			color: "#050505",
			roughness: .62,
			metalness: .05,
			clearcoat: .12,
			clearcoatRoughness: .5
		});
	}
	return je.set(n, i), Me.set(i, e), i;
}
//#endregion
//#region src/three/geo.ts
function z(e) {
	let t = e.attributes.position, n = e.attributes.normal, r = new Float32Array(t.count * 2);
	for (let e = 0; e < t.count; e++) {
		let i = Math.abs(n.getX(e)), a = Math.abs(n.getY(e)), o = Math.abs(n.getZ(e)), s, c;
		i >= a && i >= o ? (s = t.getZ(e), c = t.getY(e)) : a >= o ? (s = t.getX(e), c = t.getZ(e)) : (s = t.getX(e), c = t.getY(e)), r[e * 2] = s, r[e * 2 + 1] = c;
	}
	return e.setAttribute("uv", new re(r, 2)), e;
}
function Pe(e) {
	let t = e.attributes.position, n = new Float32Array(t.count * 2);
	for (let e = 0; e < t.count; e++) n[e * 2] = t.getX(e), n[e * 2 + 1] = t.getY(e);
	return e.setAttribute("uv", new re(n, 2)), e;
}
function Fe(e, t, n) {
	let r = e.attributes.uv;
	for (let e = 0; e < r.count; e++) r.setXY(e, r.getX(e) * t, r.getY(e) * n);
	return r.needsUpdate = !0, e;
}
var B = (e, t, n, r, i) => z(new xe(e, t, n, r, Math.min(i, Math.min(e, t, n) / 2 - .001)));
function Ie(e, t, n, r = 48) {
	let i = new ce(e, !1, "catmullrom", .4), a = [], o = [], s = [], c = 0, l = i.getPoint(0);
	for (let e = 0; e <= r; e++) {
		let u = e / r, d = i.getPoint(u);
		c += d.distanceTo(l), l = d;
		let f = i.getTangent(u), p = new P().crossVectors(f, n).normalize().multiplyScalar(t / 2);
		if (a.push(d.x - p.x, d.y - p.y, d.z - p.z, d.x + p.x, d.y + p.y, d.z + p.z), o.push(c, 0, c, t), e < r) {
			let t = e * 2;
			s.push(t, t + 1, t + 2, t + 1, t + 3, t + 2);
		}
	}
	let u = new le();
	return u.setAttribute("position", new j(a, 3)), u.setAttribute("uv", new j(o, 2)), u.setIndex(s), u.computeVertexNormals(), u;
}
function Le(e, t, n, r, i = .2, a = 28, o = 16) {
	let s = (e * e + i * i) / (2 * i), c = t - s, l = [], u = [], d = [];
	for (let t = 0; t <= o; t++) for (let i = 0; i <= a; i++) {
		let d = -e + 2 * e * i / a, f = c + Math.sqrt(s * s - d * d), p = n + (r - n) * t / o;
		l.push(d, f, p), u.push(d, p);
	}
	for (let e = 0; e < o; e++) for (let t = 0; t < a; t++) {
		let n = e * (a + 1) + t, r = n + 1, i = n + a + 1, o = i + 1;
		d.push(n, r, i, r, o, i);
	}
	let f = new le();
	if (f.setAttribute("position", new j(l, 3)), f.setAttribute("uv", new j(u, 2)), f.setIndex(d), f.computeVertexNormals(), f.attributes.normal.getY(Math.floor(f.attributes.normal.count / 2)) > 0) {
		let e = f.index;
		for (let t = 0; t < e.count; t += 3) {
			let n = e.getY(t);
			e.setY(t, e.getZ(t)), e.setZ(t, n);
		}
		f.computeVertexNormals();
	}
	return f;
}
function Re(e, t, n = 40) {
	let r = new ae(e, t, n, Math.round(t / e * n * 1.2) + 6), i = r.attributes.position;
	for (let n = 0; n < i.count; n++) {
		let r = i.getX(n) / (e / 2), a = i.getY(n) / (t / 2), o = 0;
		o += .035 * Math.exp(-(((a + .05) / .22) ** 4)) * Math.exp(-((r / .85) ** 6)), o -= .03 * Math.exp(-(((a + .62) / .18) ** 2)) * Math.exp(-((r / .6) ** 4)), o += .015 * Math.exp(-(((a - .55) / .12) ** 2)), o -= .02 * (1 - Math.min(1, (1 - Math.abs(r)) * 12)), i.setZ(n, o);
	}
	return r.computeVertexNormals(), Pe(r);
}
function ze(e, t, n = .011) {
	let r = [], i = t.clone().sub(e), a = i.length();
	i.normalize();
	let o = new ne().setFromUnitVectors(new P(0, 0, 1), i), s = Math.max(1, Math.floor(a / n));
	for (let t = 0; t <= s; t++) {
		let n = e.clone().addScaledVector(i, t / s * a);
		r.push(new M().compose(n, o, new P(1, 1, 1)));
	}
	return r;
}
function Be(e, t, n = .012, r = 0, i = Math.PI * 2) {
	let a = [], o = Math.floor(e * (i - r) / n);
	for (let n = 0; n < o; n++) {
		let s = r + (i - r) * n / o, c = new P(Math.cos(s) * e, Math.sin(s) * e, t), l = new ne().setFromEuler(new de(0, 0, s + Math.PI / 2)).multiply(new ne().setFromUnitVectors(new P(0, 0, 1), new P(1, 0, 0)));
		a.push(new M().compose(c, l, new P(1, 1, 1)));
	}
	return a;
}
//#endregion
//#region src/three/seatGeo.ts
var Ve = (e, t = 0, n = 1) => Math.min(n, Math.max(t, e)), V = (e, t, n) => {
	let r = Ve((n - e) / (t - e));
	return r * r * (3 - 2 * r);
};
function He(e, t, n, r, i) {
	let a = e < 0 ? -1 : 1, o = t < 0 ? -1 : 1, s = Math.abs(e) - (n - i), c = Math.abs(t) - (r - i), l = Math.hypot(Math.max(s, 0), Math.max(c, 0)), u = l + Math.min(Math.max(s, c), 0) - i, d = 0, f = 0;
	return s > 0 && c > 0 ? (d = a * s / l, f = o * c / l) : s > c ? d = a : f = o, {
		d: u,
		gx: d,
		gy: f
	};
}
function Ue(e, t, n, r) {
	if (e === "plain") return 0;
	let i;
	if (e === "diamond") {
		let e = (t + n) / r, a = (t - n) / r;
		i = Math.min(Math.abs(e - Math.round(e)), Math.abs(a - Math.round(a)));
	} else if (e === "ribs") {
		let e = n / r;
		i = Math.abs(e - Math.round(e));
	} else {
		let e = r, a = r * 1.7320508, o = t, s = n, c = (o % e + e) % e - e / 2, l = (s % a + a) % a - a / 2, u = ((o - e / 2) % e + e) % e - e / 2, d = ((s - a / 2) % a + a) % a - a / 2, f = c * c + l * l < u * u + d * d ? c : u, p = c * c + l * l < u * u + d * d ? l : d, m = Math.abs(f) / r, h = Math.abs(p) / r;
		i = .5 - Math.max(m * .5 + h * .8660254, m), i = Ve(i, 0, .5);
	}
	let a = 1 - V(0, .11, i), o = V(.02, .5, i);
	return -.0075 * a + .0042 * o;
}
function We(e, t) {
	let n = [];
	for (let r = 0; r <= t; r++) {
		let i = 2 * r / t - 1;
		n.push(e * (.62 * i + .38 * Math.sin(Math.PI / 2 * i)));
	}
	return n;
}
function Ge(e, t, n) {
	let { d: r } = He(t, n, e.hx, e.hy, e.r), i = -r;
	if (i <= 0) return 0;
	let a = i >= e.rim ? 1 : Math.sqrt(1 - (1 - i / e.rim) ** 2), o = e.height(t, n) * a;
	if (e.pattern && e.pattern !== "plain" && e.cell) {
		let r = e.qu ?? e.hx, a = V(0, .035, i) * V(r, r - .03, Math.abs(t));
		o += Ue(e.pattern, t, n, e.cell) * a;
	}
	return e.seam && (o -= .0065 * Math.exp(-(((Math.abs(t) - e.seam) / .0055) ** 2)) * a), Math.max(0, o);
}
function H(e, t = 1) {
	let n = Math.max(8, Math.ceil(2 * e.hx / e.grid)), r = Math.max(8, Math.ceil(2 * e.hy / e.grid)), i = We(e.hx, n), a = We(e.hy, r), o = [], s = [], c = [];
	for (let c = 0; c <= r; c++) for (let r = 0; r <= n; r++) {
		let n = i[r], l = a[c], { d: u, gx: d, gy: f } = He(n, l, e.hx, e.hy, e.r);
		u > 0 && (n -= d * u, l -= f * u);
		let p = e.place(n, l, Ge(e, n, l));
		o.push(p.x, p.y, p.z), s.push(n * t, l * t);
	}
	for (let e = 0; e < r; e++) for (let t = 0; t < n; t++) {
		let r = e * (n + 1) + t, i = r + 1, a = r + n + 1, o = a + 1;
		c.push(r, a, i, i, a, o);
	}
	let l = new le();
	l.setAttribute("position", new j(o, 3)), l.setAttribute("uv", new j(s, 2)), l.setIndex(c), l.computeVertexNormals();
	let u = Math.floor(r / 2) * (n + 1) + Math.floor(n / 2);
	if (new P(l.attributes.normal.getX(u), l.attributes.normal.getY(u), l.attributes.normal.getZ(u)).dot(e.up) < 0) {
		let e = l.index;
		for (let t = 0; t < e.count; t += 3) {
			let n = e.getY(t);
			e.setY(t, e.getZ(t)), e.setZ(t, n);
		}
		l.computeVertexNormals();
	}
	let d = (t, n) => e.place(t, n, Ge(e, t, n)), f = (t, n) => {
		let r = .002, i = d(t + r, n).sub(d(t - r, n)), a = d(t, n + r).sub(d(t, n - r)), o = new P().crossVectors(i, a).normalize();
		return o.dot(e.up) < 0 ? o.negate() : o;
	}, p = (e) => s[e * 2] / t;
	return {
		geo: l,
		zoneOfTri: (e) => {
			let t = l.index;
			return (p(t.getX(e * 3)) + p(t.getX(e * 3 + 1)) + p(t.getX(e * 3 + 2))) / 3;
		},
		P: d,
		N: f
	};
}
function Ke(e, t) {
	let n = e.geo.index, r = [], i = [];
	for (let a = 0; a < n.count / 3; a++) {
		let o = e.zoneOfTri(a);
		(Math.abs(o) <= t ? r : i).push(n.getX(a * 3), n.getX(a * 3 + 1), n.getX(a * 3 + 2));
	}
	let a = (t) => {
		let n = e.geo.clone();
		return n.setIndex(t), n;
	};
	return {
		centre: a(r),
		side: a(i)
	};
}
function U(e, t, n, r, i) {
	let a = e - r, o = t - r, s = Math.max(.001, n - r), c = [], l = (e, t, n) => {
		for (let r = 0; r <= 14; r++) {
			let i = n + Math.PI / 2 * (r / 14);
			c.push([e + s * Math.cos(i), t + s * Math.sin(i)]);
		}
	};
	l(a - s, o - s, 0), l(-a + s, o - s, Math.PI / 2), l(-a + s, -o + s, Math.PI), l(a - s, -o + s, Math.PI * 1.5), c.push(c[0]);
	let u = [], d = 0;
	u.push(c[0]);
	for (let e = 1; e < c.length; e++) {
		let t = c[e - 1], n = c[e], r = Math.hypot(n[0] - t[0], n[1] - t[1]), a = 0;
		for (; d + (r - a) >= i;) {
			let e = (i - d + a) / r;
			u.push([t[0] + (n[0] - t[0]) * e, t[1] + (n[1] - t[1]) * e]), a = i - d + a, d = 0;
		}
		d += r - a;
	}
	return u;
}
function W(e, t, n = 7e-4) {
	let r = [];
	for (let i = 0; i < t.length; i++) {
		let a = t[Math.max(0, i - 1)], o = t[Math.min(t.length - 1, i + 1)], s = e.P(a[0], a[1]), c = e.P(o[0], o[1]).sub(s).normalize(), l = e.N(t[i][0], t[i][1]), u = e.P(t[i][0], t[i][1]).addScaledVector(l, n), d = l.clone().sub(c.clone().multiplyScalar(l.dot(c))).normalize(), f = new P().crossVectors(d, c).normalize();
		r.push(new M().makeBasis(f, d, c).setPosition(u));
	}
	return r;
}
function G(e, t, n, r, i) {
	let a = Math.hypot(n - e, r - t), o = Math.max(1, Math.floor(a / i));
	return Array.from({ length: o + 1 }, (i, a) => [e + (n - e) * a / o, t + (r - t) * a / o]);
}
function qe(e, t, n, r, i) {
	if (e === "plain" || e === "hex") return [];
	let a = [], o = (e) => e.filter(([e, t]) => Math.abs(e) <= n && Math.abs(t) <= r);
	if (e === "ribs") for (let e = -Math.floor(r / t); e <= Math.floor(r / t); e++) a.push(o(G(-n, e * t, n, e * t, i)));
	else {
		let e = Math.ceil((n + r) / t);
		for (let r = -e; r <= e; r++) a.push(o(G(-n - .1, r * t + n + .1, n + .1, r * t - n - .1, i))), a.push(o(G(-n - .1, -(r * t) + -n - .1, n + .1, -(r * t) + n + .1, i)));
	}
	return a.filter((e) => e.length > 1);
}
function Je(e, t, n, r, i, a = .0042) {
	let o = G(t, n, r, i, .02).map(([t, n]) => e.P(t, n).addScaledVector(e.N(t, n), .0012));
	return z(new fe(new ce(o), Math.max(8, o.length * 2), a, 6, !1));
}
var Ye = /* @__PURE__ */ new Map();
function Xe(e, t, n, r, i) {
	let a = `${e}|${t}|${n}|${r}|${i}`, o = Ye.get(a);
	if (o) return o;
	let s = (e, t, n) => new P(e, t, n), c = (e) => e === "diamond" ? .078 : e === "ribs" ? .052 : .046, l = .0105, u = .15, d = {
		hx: .23,
		hy: .25,
		r: .05,
		rim: .04,
		grid: r,
		seam: u,
		up: s(0, 1, 0),
		place: (e, t, n) => s(e, .268 + n, t),
		pattern: e,
		cell: c(e),
		qu: .13799999999999998,
		height: (e, t) => {
			let n = .108 + .03 * V(.12, .2, Math.abs(e));
			return n -= .014 * Math.exp(-((e / .095) ** 2)) * Math.exp(-(((t - .03) / .17) ** 2)), n -= .026 * V(-.1, -.25, t), n += .012 * V(.1, .25, t), n;
		}
	}, f = H(d), p = Ke(f, u), m = [-1, 1].map((e) => Je(f, e * u, -.2, e * u, .2)), h = [], g = [];
	if (i) {
		for (let e of [-1, 1]) for (let t of [-.0135, .0135]) g.push(G(e * u + t, -.215, e * u + t, .215, l));
		g.push(U(d.hx, d.hy, d.r, .016, l)), g.push(...qe(e, c(e), .12, .215, l)), h = g.flatMap((e) => W(f, e));
	} else for (let e of [-1, 1]) for (let t of [-.0135, .0135]) h.push(...W(f, G(e * u + t, -.215, e * u + t, .215, l * 1.5)));
	let _ = {
		hx: .23,
		hy: .29,
		r: .06,
		rim: .035,
		grid: r,
		seam: u,
		up: s(0, 0, -1),
		place: (e, t, n) => s(e, .29 + t, -n),
		pattern: t,
		cell: c(t),
		qu: .13799999999999998,
		height: (e, t) => {
			let n = .046 + .032 * V(.12, .2, Math.abs(e));
			return n -= .009 * Math.exp(-(((t + .1) / .11) ** 2)) * Math.exp(-((e / .13) ** 2)), n -= .014 * V(.17, .29, t), n;
		}
	}, v = H(_), y = Ke(v, u), b = H({
		..._,
		seam: void 0,
		pattern: "plain",
		up: s(0, 0, 1),
		place: (e, t, n) => s(e, .29 + t, n),
		height: (e) => .03 + .008 * (1 - Math.abs(e) / .23),
		grid: r * 1.6
	}).geo, x = [-1, 1].map((e) => Je(v, e * u, -.27, e * u, .27)), S = [];
	for (let e of [-1, 1]) for (let t of [-.0135, .0135]) S.push(G(e * u + t, -.265, e * u + t, .265, i ? l : l * 1.5));
	i && (S.push(U(_.hx, _.hy, _.r, .016, l)), S.push(...qe(t, c(t), .12, .255, l)));
	let C = S.flatMap((e) => W(v, e)), w = {
		hx: .1,
		hy: .076,
		r: .05,
		rim: .045,
		grid: r * .8,
		up: s(0, 0, -1),
		place: (e, t, n) => s(e, .74 + t, .01 - n),
		pattern: n,
		cell: c(n) * .85,
		qu: .1,
		height: (e) => .046 - e * e * .012 / .01
	}, T = H(w), E = H({
		...w,
		pattern: "plain",
		up: s(0, 0, 1),
		place: (e, t, n) => s(e, .74 + t, .01 + n),
		height: () => .04
	}).geo, D = be([T.geo, E], !1), O = (i ? [U(w.hx, w.hy, w.r, .014, l), ...qe(n, c(n) * .85, .085, .06, l)] : []).flatMap((e) => W(T, e)), k = {
		cushion: {
			centre: p.centre,
			side: p.side,
			pipes: m,
			stitches: h
		},
		back: {
			centre: y.centre,
			side: y.side,
			rear: b,
			pipes: x,
			stitches: C
		},
		head: {
			geo: D,
			stitches: O
		}
	};
	return Ye.set(a, k), k;
}
//#endregion
//#region src/three/Interior.tsx
var K = x(), q = (e, t, n) => new P(e, t, n);
function J(e) {
	let { zone: t, geometry: n, material: r, ...i } = e, a = D((e) => e.selected === t || e.hovered === t), o = D((e) => e.select), s = D((e) => e.hover);
	return /* @__PURE__ */ (0, K.jsx)(u, {
		enabled: a,
		children: /* @__PURE__ */ (0, K.jsx)("mesh", {
			geometry: n,
			material: r,
			castShadow: !0,
			receiveShadow: !0,
			userData: { zone: t },
			name: `zone__${t}`,
			onClick: (e) => {
				e.delta > 5 || (e.stopPropagation(), o(t));
			},
			onPointerOver: (e) => {
				e.stopPropagation(), s(t), document.body.style.cursor = "pointer";
			},
			onPointerOut: () => {
				s(null), document.body.style.cursor = "";
			},
			...i
		})
	});
}
function Y(e) {
	return /* @__PURE__ */ (0, K.jsx)("mesh", {
		castShadow: !0,
		receiveShadow: !0,
		...e
	});
}
function X({ matrices: e, material: t, size: n = [
	.0042,
	.0016,
	.0075
] }) {
	let r = (0, F.useRef)(null), i = (0, F.useMemo)(() => new he(1, 1, 2, 6), []);
	(0, F.useEffect)(() => {
		let t = r.current;
		if (!t) return;
		let i = new M().makeScale(n[0], n[1], n[2] / 2);
		e.forEach((e, n) => t.setMatrixAt(n, e.clone().multiply(i))), t.instanceMatrix.needsUpdate = !0;
	}, [e, n]);
	let a = D((e) => e.selected === "stitching" || e.hovered === "stitching"), o = D((e) => e.select);
	return /* @__PURE__ */ (0, K.jsx)(u, {
		enabled: a,
		children: /* @__PURE__ */ (0, K.jsx)("instancedMesh", {
			ref: r,
			name: "zone__stitching",
			userData: { zone: "stitching" },
			args: [
				i,
				t,
				e.length
			],
			onClick: (e) => {
				e.delta > 5 || (e.stopPropagation(), o("stitching"));
			}
		})
	});
}
function Z({ x: e, z: t, mats: n, sculpt: r, stitchMat: i, pipeMat: a, skirt: o, tex: s, rear: c }) {
	let l = (0, F.useMemo)(() => new ye(.008, .008, .1, 10), []), u = c ? .26 : .2;
	return /* @__PURE__ */ (0, K.jsxs)("group", {
		position: [
			e,
			0,
			t
		],
		children: [
			/* @__PURE__ */ (0, K.jsx)(Y, {
				geometry: o,
				material: R("plasticSoft", s),
				position: [
					0,
					.17,
					.02
				]
			}),
			/* @__PURE__ */ (0, K.jsx)(J, {
				zone: "seat_cushion",
				geometry: r.cushion.centre,
				material: n.seat_cushion
			}),
			/* @__PURE__ */ (0, K.jsx)(J, {
				zone: "seat_bolster",
				geometry: r.cushion.side,
				material: n.seat_bolster
			}),
			r.cushion.pipes.map((e, t) => /* @__PURE__ */ (0, K.jsx)(J, {
				zone: "piping",
				geometry: e,
				material: a
			}, "pc" + t)),
			/* @__PURE__ */ (0, K.jsx)(X, {
				matrices: r.cushion.stitches,
				material: i,
				size: [
					.0036,
					.0015,
					.0066
				]
			}),
			/* @__PURE__ */ (0, K.jsxs)("group", {
				position: [
					0,
					.43,
					.25
				],
				rotation: [
					u,
					0,
					0
				],
				children: [
					/* @__PURE__ */ (0, K.jsx)(J, {
						zone: "seat_back",
						geometry: r.back.centre,
						material: n.seat_back
					}),
					/* @__PURE__ */ (0, K.jsx)(J, {
						zone: "seat_bolster",
						geometry: r.back.side,
						material: n.seat_bolster
					}),
					/* @__PURE__ */ (0, K.jsx)(Y, {
						geometry: r.back.rear,
						material: R("plasticSoft", s)
					}),
					r.back.pipes.map((e, t) => /* @__PURE__ */ (0, K.jsx)(J, {
						zone: "piping",
						geometry: e,
						material: a
					}, "pb" + t)),
					/* @__PURE__ */ (0, K.jsx)(X, {
						matrices: r.back.stitches,
						material: i,
						size: [
							.0036,
							.0015,
							.0066
						]
					}),
					/* @__PURE__ */ (0, K.jsx)(Y, {
						geometry: l,
						material: R("chrome", s),
						position: [
							-.055,
							.65,
							.01
						]
					}),
					/* @__PURE__ */ (0, K.jsx)(Y, {
						geometry: l,
						material: R("chrome", s),
						position: [
							.055,
							.65,
							.01
						]
					}),
					/* @__PURE__ */ (0, K.jsx)(J, {
						zone: "seat_headrest",
						geometry: r.head.geo,
						material: n.seat_headrest
					}),
					/* @__PURE__ */ (0, K.jsx)(X, {
						matrices: r.head.stitches,
						material: i,
						size: [
							.0034,
							.0014,
							.006
						]
					})
				]
			})
		]
	});
}
function Ze({ mats: e, seg: t, stitchMat: n, tex: r }) {
	let i = (0, F.useMemo)(() => {
		let e = new me(.175, .0175, 20 + t * 4, 72 + t * 8);
		Fe(e, 2 * Math.PI * .175, 2 * Math.PI * .0175);
		let n = B(.1, .03, .02, t, .01), r = B(.045, .1, .02, t, .01), i = B(.1, .1, .045, t, .03), a = Be(.1745, .0152, .012), o = Be(.1745, -.0152, .012);
		return {
			rim: e,
			spokeS: n,
			spokeB: r,
			hub: i,
			stitch: a.concat(o)
		};
	}, [t]);
	return /* @__PURE__ */ (0, K.jsxs)("group", {
		position: [
			-.38,
			.82,
			-.42
		],
		rotation: [
			-.42,
			0,
			0
		],
		children: [
			/* @__PURE__ */ (0, K.jsx)(J, {
				zone: "wheel",
				geometry: i.rim,
				material: e.wheel
			}),
			/* @__PURE__ */ (0, K.jsx)(Y, {
				geometry: i.spokeS,
				material: R("plastic", r),
				position: [
					-.1,
					-.005,
					0
				]
			}),
			/* @__PURE__ */ (0, K.jsx)(Y, {
				geometry: i.spokeS,
				material: R("plastic", r),
				position: [
					.1,
					-.005,
					0
				]
			}),
			/* @__PURE__ */ (0, K.jsx)(Y, {
				geometry: i.spokeB,
				material: R("plastic", r),
				position: [
					0,
					-.09,
					0
				]
			}),
			/* @__PURE__ */ (0, K.jsx)(Y, {
				geometry: i.hub,
				material: R("plasticSoft", r),
				position: [
					0,
					0,
					-.01
				]
			}),
			/* @__PURE__ */ (0, K.jsx)(X, {
				matrices: i.stitch,
				material: n,
				size: [
					.0036,
					.0014,
					.0065
				]
			})
		]
	});
}
function Q({ pts: e, normal: t, mats: n, tex: r }) {
	let i = (0, F.useMemo)(() => Ie(e, .046, t), [e, t]), a = e[e.length - 1], o = e[0];
	return /* @__PURE__ */ (0, K.jsxs)("group", { children: [
		/* @__PURE__ */ (0, K.jsx)(J, {
			zone: "belts",
			geometry: i,
			material: n.belts
		}),
		/* @__PURE__ */ (0, K.jsx)(Y, {
			geometry: (0, F.useMemo)(() => B(.05, .016, .07, 3, .006), []),
			material: R("chrome", r),
			position: [
				a.x,
				a.y + .01,
				a.z
			]
		}),
		/* @__PURE__ */ (0, K.jsx)(Y, {
			geometry: (0, F.useMemo)(() => B(.06, .05, .02, 3, .006), []),
			material: R("plasticSoft", r),
			position: [
				o.x,
				o.y + .02,
				o.z + .02
			]
		})
	] });
}
function Qe() {
	let e = (0, F.useRef)(null), t = (0, F.useRef)(null), n = (0, F.useRef)(null);
	S(({ camera: r }) => {
		e.current && (e.current.visible = r.position.x > -.82 || D.getState().view === "door"), t.current && (t.current.visible = r.position.x < .82), n.current && (n.current.visible = Math.abs(r.position.x) < .85 && r.position.y < 1.3);
	});
	let r = D((e) => e.config), i = D((e) => e.tier), a = D((e) => e.lighting), o = w[i], s = o.texSize, c = (0, F.useMemo)(() => Ae(r, s), [r, s]), l = (0, F.useMemo)(() => L("thread", T[r.stitching.color].hex, "plain", s), [r.stitching.color, s]), u = c.piping, d = (0, F.useMemo)(() => {
		let e = c.door_panels.clone();
		return e.side = 2, e;
	}, [c.door_panels]), f = o.segments, p = (0, F.useMemo)(() => Xe(r.seat_cushion.pattern, r.seat_back.pattern, r.seat_headrest.pattern, o.seatGrid, o.detail), [
		r.seat_cushion.pattern,
		r.seat_back.pattern,
		r.seat_headrest.pattern,
		o.seatGrid,
		o.detail
	]), m = (0, F.useMemo)(() => ({
		head: Le(.74, 1.2, -.66, 1.5),
		doorF: Re(.98, .5),
		doorR: Re(.86, .5),
		arm: B(.5, .075, .1, f, .03),
		armR: B(.42, .07, .09, f, .03),
		insertF: B(.9, .034, .012, 3, .004),
		insertR: B(.78, .03, .012, 3, .004),
		pillarA: B(.03, .5, .07, 3, .012),
		pillarB: B(.03, .3, .1, 3, .012),
		pillarC: B(.03, .36, .12, 3, .012),
		dash: B(1.5, .32, .34, f, .05),
		dashTop: B(1.46, .07, .4, f, .03),
		dashInsert: B(1.2, .032, .016, 3, .004),
		cluster: B(.34, .15, .04, 3, .01),
		screen: B(.34, .2, .025, 3, .008),
		console_: B(.22, .24, .9, f, .04),
		consoleTop: B(.2, .05, .4, f, .02),
		skirt: B(.46, .17, .46, f, .03),
		sill: B(.06, .1, 2.9, 3, .02),
		floor: z(new ae(1.5, 3.2, 1, 1).rotateX(-Math.PI / 2)),
		stitchDoor: [...ze(q(-.43, .16, .012), q(.43, .16, .012)), ...ze(q(-.43, .145, .012), q(.43, .145, .012))]
	}), [f]), h = (0, F.useMemo)(() => {
		let e = document.createElement("canvas");
		e.width = 512, e.height = 220;
		let t = e.getContext("2d");
		t.fillStyle = "#05080b", t.fillRect(0, 0, 512, 220);
		for (let e of [130, 382]) {
			t.strokeStyle = "#c9a24b", t.lineWidth = 3, t.beginPath(), t.arc(e, 110, 80, Math.PI * .75, Math.PI * 2.25), t.stroke(), t.strokeStyle = "rgba(201,162,75,.5)", t.lineWidth = 1.5;
			for (let n = 0; n <= 12; n++) {
				let r = Math.PI * .75 + Math.PI * 1.5 * n / 12;
				t.beginPath(), t.moveTo(e + Math.cos(r) * 68, 110 + Math.sin(r) * 68), t.lineTo(e + Math.cos(r) * 80, 110 + Math.sin(r) * 80), t.stroke();
			}
			t.strokeStyle = "#e8f0ea", t.lineWidth = 3, t.beginPath(), t.moveTo(e, 110), t.lineTo(e + Math.cos(Math.PI * 1.1) * 62, 110 + Math.sin(Math.PI * 1.1) * 62), t.stroke();
		}
		t.fillStyle = "#e8f0ea", t.font = "600 34px sans-serif", t.textAlign = "center", t.fillText("Selestic", 256, 128);
		let n = new te(e);
		return n.colorSpace = se, n.anisotropy = 4, n;
	}, []), g = (0, F.useMemo)(() => new N({
		color: "#fff",
		map: h,
		emissive: "#ffffff",
		emissiveMap: h,
		emissiveIntensity: a === "night" ? 1.4 : .55,
		roughness: .2,
		clearcoat: 1,
		clearcoatRoughness: .05
	}), [h, a]), _ = (0, F.useMemo)(() => new ve({
		color: new A("#e0b24a").multiplyScalar(a === "night" ? 2.2 : 0),
		toneMapped: !1
	}), [a]), v = (e, t) => [
		q(e * .68, 1.03, t + .38),
		q(e * .58, .98, t + .21),
		q(e * .46, .88, t + .14),
		q(e * .31, .66, t + .11),
		q(e * .2, .47, t + .12)
	], y = (0, F.useMemo)(() => q(0, .2, -.98).normalize(), []), b = (0, F.useMemo)(() => [v(-1, 0), v(1, 0)], []), x = (0, F.useMemo)(() => [v(-1, .92).map((e) => e.clone().add(q(0, 0, 0))).map((e, t) => t === 0 ? e.add(q(0, 0, 0)) : e), v(1, .92)], []), C = R("plastic", s), E = R("plasticSoft", s);
	R("chrome", s);
	let O = R("glassBlack", s);
	return /* @__PURE__ */ (0, K.jsxs)("group", {
		name: "sim-interior",
		children: [
			/* @__PURE__ */ (0, K.jsx)("mesh", {
				geometry: m.floor,
				material: R("carpet", s),
				position: [
					0,
					.02,
					.1
				],
				receiveShadow: !0
			}),
			/* @__PURE__ */ (0, K.jsx)(Y, {
				geometry: m.sill,
				material: E,
				position: [
					-.79,
					.07,
					.1
				]
			}),
			/* @__PURE__ */ (0, K.jsx)(Y, {
				geometry: m.sill,
				material: E,
				position: [
					.79,
					.07,
					.1
				]
			}),
			/* @__PURE__ */ (0, K.jsx)(Y, {
				geometry: m.dash,
				material: C,
				position: [
					0,
					.74,
					-.7
				]
			}),
			/* @__PURE__ */ (0, K.jsx)(Y, {
				geometry: m.dashTop,
				material: E,
				position: [
					0,
					.9,
					-.66
				]
			}),
			/* @__PURE__ */ (0, K.jsx)(J, {
				zone: "decor",
				geometry: m.dashInsert,
				material: c.decor,
				position: [
					0,
					.8,
					-.523
				]
			}),
			/* @__PURE__ */ (0, K.jsx)("mesh", {
				geometry: m.dashInsert,
				material: _,
				position: [
					0,
					.775,
					-.525
				],
				scale: [
					1,
					.15,
					1
				]
			}),
			/* @__PURE__ */ (0, K.jsx)(Y, {
				geometry: m.cluster,
				material: E,
				position: [
					-.38,
					.91,
					-.5
				],
				rotation: [
					-.35,
					0,
					0
				]
			}),
			/* @__PURE__ */ (0, K.jsx)("mesh", {
				position: [
					-.38,
					.9,
					-.478
				],
				rotation: [
					-.35,
					0,
					0
				],
				material: g,
				children: /* @__PURE__ */ (0, K.jsx)("planeGeometry", { args: [.31, .13] })
			}),
			/* @__PURE__ */ (0, K.jsx)(Y, {
				geometry: m.screen,
				material: O,
				position: [
					.1,
					.9,
					-.5
				],
				rotation: [
					-.15,
					0,
					0
				]
			}),
			/* @__PURE__ */ (0, K.jsx)(Y, {
				geometry: m.console_,
				material: C,
				position: [
					0,
					.17,
					-.1
				]
			}),
			/* @__PURE__ */ (0, K.jsx)(Y, {
				geometry: m.consoleTop,
				material: E,
				position: [
					0,
					.3,
					.1
				]
			}),
			/* @__PURE__ */ (0, K.jsx)("mesh", {
				position: [
					0,
					.12,
					-.3
				],
				material: _,
				children: /* @__PURE__ */ (0, K.jsx)("boxGeometry", { args: [
					.2,
					.01,
					.4
				] })
			}),
			/* @__PURE__ */ (0, K.jsx)(Z, {
				x: -.38,
				z: .02,
				mats: c,
				sculpt: p,
				skirt: m.skirt,
				stitchMat: l,
				pipeMat: u,
				tex: s
			}),
			/* @__PURE__ */ (0, K.jsx)(Z, {
				x: .38,
				z: .02,
				mats: c,
				sculpt: p,
				skirt: m.skirt,
				stitchMat: l,
				pipeMat: u,
				tex: s
			}),
			/* @__PURE__ */ (0, K.jsx)(Z, {
				x: -.36,
				z: .92,
				mats: c,
				sculpt: p,
				skirt: m.skirt,
				stitchMat: l,
				pipeMat: u,
				tex: s,
				rear: !0
			}),
			/* @__PURE__ */ (0, K.jsx)(Z, {
				x: .36,
				z: .92,
				mats: c,
				sculpt: p,
				skirt: m.skirt,
				stitchMat: l,
				pipeMat: u,
				tex: s,
				rear: !0
			}),
			/* @__PURE__ */ (0, K.jsx)(Ze, {
				mats: c,
				seg: f,
				stitchMat: l,
				tex: s
			}),
			/* @__PURE__ */ (0, K.jsx)(Q, {
				pts: b[0],
				normal: y,
				mats: c,
				tex: s
			}),
			/* @__PURE__ */ (0, K.jsx)(Q, {
				pts: b[1],
				normal: y,
				mats: c,
				tex: s
			}),
			/* @__PURE__ */ (0, K.jsx)(Q, {
				pts: x[0],
				normal: y,
				mats: c,
				tex: s
			}),
			/* @__PURE__ */ (0, K.jsx)(Q, {
				pts: x[1],
				normal: y,
				mats: c,
				tex: s
			}),
			[-1, 1].map((n) => /* @__PURE__ */ (0, K.jsxs)("group", {
				ref: n < 0 ? e : t,
				children: [
					/* @__PURE__ */ (0, K.jsxs)("group", {
						position: [
							n * .745,
							0,
							0
						],
						rotation: [
							0,
							(n < 0 ? 1 : -1) * Math.PI / 2,
							0
						],
						children: [
							/* @__PURE__ */ (0, K.jsx)(J, {
								zone: "door_panels",
								geometry: m.doorF,
								material: d,
								position: [
									0,
									.62,
									0
								]
							}),
							/* @__PURE__ */ (0, K.jsx)(J, {
								zone: "door_panels",
								geometry: m.arm,
								material: c.door_panels,
								position: [
									-.12,
									.64,
									.055
								]
							}),
							/* @__PURE__ */ (0, K.jsx)(J, {
								zone: "decor",
								geometry: m.insertF,
								material: c.decor,
								position: [
									-0,
									.8,
									.02
								]
							}),
							/* @__PURE__ */ (0, K.jsx)(X, {
								matrices: m.stitchDoor.map((e) => e.clone().multiply(new M().makeTranslation(0, .6, 0))),
								material: l
							})
						]
					}),
					/* @__PURE__ */ (0, K.jsxs)("group", {
						position: [
							n * .745,
							0,
							1
						],
						rotation: [
							0,
							(n < 0 ? 1 : -1) * Math.PI / 2,
							0
						],
						children: [
							/* @__PURE__ */ (0, K.jsx)(J, {
								zone: "door_panels",
								geometry: m.doorR,
								material: d,
								position: [
									0,
									.62,
									0
								]
							}),
							/* @__PURE__ */ (0, K.jsx)(J, {
								zone: "door_panels",
								geometry: m.armR,
								material: c.door_panels,
								position: [
									-.1,
									.64,
									.05
								]
							}),
							/* @__PURE__ */ (0, K.jsx)(J, {
								zone: "decor",
								geometry: m.insertR,
								material: c.decor,
								position: [
									0,
									.8,
									.02
								]
							})
						]
					}),
					/* @__PURE__ */ (0, K.jsx)(J, {
						zone: "headliner",
						geometry: m.pillarA,
						material: c.headliner,
						position: [
							n * .735,
							.98,
							-.42
						],
						rotation: [
							.55,
							0,
							0
						]
					}),
					/* @__PURE__ */ (0, K.jsx)(J, {
						zone: "headliner",
						geometry: m.pillarB,
						material: c.headliner,
						position: [
							n * .745,
							.97,
							.55
						]
					}),
					/* @__PURE__ */ (0, K.jsx)(J, {
						zone: "headliner",
						geometry: m.pillarC,
						material: c.headliner,
						position: [
							n * .735,
							.97,
							1.45
						],
						rotation: [
							-.3,
							0,
							0
						]
					})
				]
			}, n)),
			/* @__PURE__ */ (0, K.jsx)("group", {
				ref: n,
				children: /* @__PURE__ */ (0, K.jsx)(J, {
					zone: "headliner",
					geometry: m.head,
					material: c.headliner
				})
			}),
			/* @__PURE__ */ (0, K.jsx)(et, {})
		]
	});
}
function $e() {
	let e = D((e) => e.tier), t = w[e].texSize;
	return /* @__PURE__ */ (0, K.jsxs)("group", { children: [/* @__PURE__ */ (0, K.jsxs)("mesh", {
		position: [
			0,
			-.02,
			.1
		],
		rotation: [
			-Math.PI / 2,
			0,
			0
		],
		receiveShadow: !0,
		children: [/* @__PURE__ */ (0, K.jsx)("circleGeometry", { args: [4.6, 96] }), /* @__PURE__ */ (0, K.jsx)("primitive", {
			object: R("pedestal", t),
			attach: "material"
		})]
	}), /* @__PURE__ */ (0, K.jsxs)("mesh", {
		position: [
			0,
			-.015,
			.1
		],
		rotation: [
			-Math.PI / 2,
			0,
			0
		],
		children: [/* @__PURE__ */ (0, K.jsx)("ringGeometry", { args: [
			2.38,
			2.4,
			128
		] }), /* @__PURE__ */ (0, K.jsx)("meshBasicMaterial", {
			color: "#c9a24b",
			toneMapped: !1
		})]
	})] });
}
function et() {
	let e = D((e) => e.hovered);
	return (0, F.useEffect)(() => {
		document.documentElement.dataset.s3dHover = e ? C[e].label : "";
	}, [e]), null;
}
//#endregion
//#region src/three/Scene.tsx
var tt = /* @__PURE__ */ e({ default: () => dt }), nt = (0, F.lazy)(() => import("./GlbInterior-BgSCS4Q_.js")), rt = class extends F.Component {
	state = { err: !1 };
	static getDerivedStateFromError() {
		return { err: !0 };
	}
	componentDidCatch() {
		let e = D.getState();
		e.say("Modèle 3D introuvable : prototype de démonstration affiché."), e.setModelUrl(null);
	}
	render() {
		return this.state.err ? null : this.props.children;
	}
};
function it() {
	let e = D((e) => e.view), t = r((e) => e.controls);
	return (0, F.useEffect)(() => {
		if (!t) return;
		let n = k[e];
		t.setLookAt(...n.pos, ...n.target, !0);
	}, [e, t]), (0, F.useEffect)(() => {
		t && t.setBoundary(new ue(new P(-3.2, -.1, -1.6), new P(3.2, 2.6, 3.2)));
	}, [t]), null;
}
function at() {
	let e = r((e) => e.gl), t = r((e) => e.scene), n = r((e) => e.controls);
	return (0, F.useEffect)(() => {
		if (!n) return;
		let r = () => new Promise((e) => requestAnimationFrame(() => requestAnimationFrame(() => e())));
		ee.current = {
			dolly: (e) => {
				n.dolly(e, !0);
			},
			capture: async () => {
				let t = D.getState().view, i = [];
				for (let t of [
					"global",
					"seats",
					"driver",
					"rear"
				]) {
					let a = k[t];
					await n.setLookAt(...a.pos, ...a.target, !1), await r(), await r(), i.push({
						view: t,
						label: O[t],
						url: e.domElement.toDataURL("image/jpeg", .86)
					});
				}
				let a = k[t];
				return await n.setLookAt(...a.pos, ...a.target, !1), i;
			}
		};
		let i = async () => {
			let e = t.getObjectByName("sim-interior");
			if (!e) throw Error("habitacle introuvable");
			let n = e.clone(!0), r = /* @__PURE__ */ new Map();
			n.traverse((e) => {
				e.visible = !0;
				let t = e;
				if (!t.isMesh) return;
				let n = Array.isArray(t.material) ? t.material[0] : t.material, i = t.userData?.zone, a = Ne(n), o = i ? `zone__${i}` : `fixed__${a ?? "plasticSoft"}`;
				i || (t.name = o), r.has(o) || r.set(o, new ie({
					name: o,
					color: i ? "#888888" : "#222222"
				})), t.material = r.get(o), t.castShadow = t.receiveShadow = !1;
			});
			let { GLTFExporter: i } = await import("./three-CmFGUIvj.js").then((e) => e.r);
			return new Promise((e, t) => new i().parse(n, (t) => e(t), t, { binary: !0 }));
		};
		return window.__s3d = {
			scene: t,
			exportGLB: i,
			download: async () => {
				let e = await i(), t = document.createElement("a");
				t.href = URL.createObjectURL(new Blob([e], { type: "model/gltf-binary" })), t.download = "interior-prototype.glb", t.click();
			}
		}, D.getState().setReady(!0), () => {
			ee.current = null;
		};
	}, [
		n,
		e,
		t
	]), null;
}
function $() {
	let e = D((e) => e.lighting), t = D((e) => e.tier), n = w[t].envRes, i = e === "night" ? "#02030a" : e === "day" ? "#a8c0d8" : "#050505", { scene: a } = r();
	return (0, F.useEffect)(() => {
		a.background = new A(i), a.fog = null;
	}, [a, i]), /* @__PURE__ */ (0, K.jsxs)(c, {
		resolution: n,
		frames: 1,
		background: !1,
		environmentIntensity: e === "night" ? .35 : e === "day" ? 1.25 : 1,
		children: [
			e === "showroom" && /* @__PURE__ */ (0, K.jsxs)(K.Fragment, { children: [
				/* @__PURE__ */ (0, K.jsx)("color", {
					attach: "background",
					args: ["#060606"]
				}),
				/* @__PURE__ */ (0, K.jsx)(d, {
					form: "rect",
					intensity: 8,
					position: [
						0,
						5,
						0
					],
					"rotation-x": Math.PI / 2,
					scale: [
						9,
						5,
						1
					]
				}),
				/* @__PURE__ */ (0, K.jsx)(d, {
					form: "rect",
					intensity: 5,
					color: "#fff4e0",
					position: [
						-5,
						2,
						1
					],
					"rotation-y": Math.PI / 2,
					scale: [
						6,
						2.5,
						1
					]
				}),
				/* @__PURE__ */ (0, K.jsx)(d, {
					form: "rect",
					intensity: 5,
					color: "#e8f2ff",
					position: [
						5,
						2.5,
						-1
					],
					"rotation-y": -Math.PI / 2,
					scale: [
						6,
						2.5,
						1
					]
				}),
				/* @__PURE__ */ (0, K.jsx)(d, {
					form: "rect",
					intensity: 3,
					position: [
						0,
						1.5,
						-6
					],
					scale: [
						10,
						2,
						1
					]
				}),
				/* @__PURE__ */ (0, K.jsx)(d, {
					form: "ring",
					intensity: 2,
					color: "#c9a24b",
					position: [
						0,
						3,
						5
					],
					scale: 4
				}),
				/* @__PURE__ */ (0, K.jsx)(d, {
					form: "rect",
					intensity: 2.4,
					color: "#f4efe6",
					position: [
						0,
						-2.5,
						0
					],
					"rotation-x": -Math.PI / 2,
					scale: [
						8,
						6,
						1
					]
				})
			] }),
			e === "day" && /* @__PURE__ */ (0, K.jsxs)(K.Fragment, { children: [
				/* @__PURE__ */ (0, K.jsx)("color", {
					attach: "background",
					args: ["#cfe0f0"]
				}),
				/* @__PURE__ */ (0, K.jsx)(d, {
					form: "rect",
					intensity: 7,
					color: "#fff9ee",
					position: [
						0,
						6,
						2
					],
					"rotation-x": Math.PI / 2,
					scale: [
						12,
						8,
						1
					]
				}),
				/* @__PURE__ */ (0, K.jsx)(d, {
					form: "rect",
					intensity: 5,
					color: "#fff1d8",
					position: [
						-6,
						3,
						3
					],
					"rotation-y": Math.PI / 2,
					scale: [
						8,
						4,
						1
					]
				}),
				/* @__PURE__ */ (0, K.jsx)(d, {
					form: "rect",
					intensity: 2.4,
					color: "#bcd6f2",
					position: [
						6,
						2,
						-2
					],
					"rotation-y": -Math.PI / 2,
					scale: [
						8,
						4,
						1
					]
				}),
				/* @__PURE__ */ (0, K.jsx)(d, {
					form: "rect",
					intensity: 2,
					color: "#d9e8f5",
					position: [
						0,
						2,
						-7
					],
					scale: [
						14,
						3,
						1
					]
				}),
				/* @__PURE__ */ (0, K.jsx)(d, {
					form: "rect",
					intensity: 2.6,
					color: "#efe9dc",
					position: [
						0,
						-2.5,
						0
					],
					"rotation-x": -Math.PI / 2,
					scale: [
						8,
						6,
						1
					]
				})
			] }),
			e === "night" && /* @__PURE__ */ (0, K.jsxs)(K.Fragment, { children: [
				/* @__PURE__ */ (0, K.jsx)("color", {
					attach: "background",
					args: ["#020308"]
				}),
				/* @__PURE__ */ (0, K.jsx)(d, {
					form: "rect",
					intensity: .9,
					color: "#6f86b8",
					position: [
						0,
						5,
						0
					],
					"rotation-x": Math.PI / 2,
					scale: [
						8,
						4,
						1
					]
				}),
				/* @__PURE__ */ (0, K.jsx)(d, {
					form: "rect",
					intensity: 2.4,
					color: "#e8b866",
					position: [
						-4,
						.8,
						2
					],
					"rotation-y": Math.PI / 2,
					scale: [
						1.2,
						1.2,
						1
					]
				}),
				/* @__PURE__ */ (0, K.jsx)(d, {
					form: "circle",
					intensity: 2.2,
					color: "#ffd9a0",
					position: [
						4,
						1.2,
						-3
					],
					scale: 1.2
				}),
				/* @__PURE__ */ (0, K.jsx)(d, {
					form: "rect",
					intensity: .5,
					color: "#8a6c3a",
					position: [
						0,
						-2.5,
						0
					],
					"rotation-x": -Math.PI / 2,
					scale: [
						8,
						6,
						1
					]
				})
			] })
		]
	}, e + t);
}
var ot = {
	showroom: {
		file: "monochrome_studio_01.hdr",
		intensity: 1.15,
		rot: .6
	},
	day: {
		file: "kloofendal_48d_partly_cloudy_puresky.hdr",
		intensity: 1.3,
		rot: 2.2
	},
	night: {
		file: "dikhololo_night.hdr",
		intensity: 1.1,
		rot: 0
	}
}, st = class extends F.Component {
	state = { err: !1 };
	static getDerivedStateFromError() {
		return { err: !0 };
	}
	render() {
		return this.state.err ? this.props.fallback : this.props.children;
	}
};
function ct() {
	let e = D((e) => e.lighting), t = D((e) => e.tier), n = e === "night" ? "#02030a" : e === "day" ? "#a8c0d8" : "#050505", { scene: i } = r();
	if ((0, F.useEffect)(() => {
		i.background = new A(n);
	}, [i, n]), t === "low") return /* @__PURE__ */ (0, K.jsx)($, {});
	let a = ot[e];
	return /* @__PURE__ */ (0, K.jsx)(st, {
		fallback: /* @__PURE__ */ (0, K.jsx)($, {}),
		children: /* @__PURE__ */ (0, K.jsx)(F.Suspense, {
			fallback: /* @__PURE__ */ (0, K.jsx)($, {}),
			children: /* @__PURE__ */ (0, K.jsx)(c, {
				files: `${Ee()}hdri/${a.file}`,
				background: !1,
				environmentIntensity: a.intensity,
				environmentRotation: [
					0,
					a.rot,
					0
				]
			})
		})
	}, e + t);
}
function lt() {
	let e = D((e) => e.lighting), t = D((e) => e.tier), n = w[t], r = e === "night";
	return /* @__PURE__ */ (0, K.jsxs)(K.Fragment, { children: [/* @__PURE__ */ (0, K.jsx)("directionalLight", {
		castShadow: n.shadows,
		position: [
			1.8,
			3.2,
			1.2
		],
		intensity: e === "night" ? .15 : e === "day" ? 2.4 : 1.7,
		color: e === "day" ? "#fff3dc" : "#ffffff",
		"shadow-mapSize": [n.shadowMap, n.shadowMap],
		"shadow-camera-left": -2.2,
		"shadow-camera-right": 2.2,
		"shadow-camera-top": 2.4,
		"shadow-camera-bottom": -2.4,
		"shadow-camera-near": .5,
		"shadow-camera-far": 9,
		"shadow-bias": -4e-4,
		"shadow-normalBias": .02
	}), r && /* @__PURE__ */ (0, K.jsxs)(K.Fragment, { children: [
		/* @__PURE__ */ (0, K.jsx)("pointLight", {
			position: [
				-.7,
				.6,
				.2
			],
			color: "#d8a84a",
			intensity: .6,
			distance: 2.2,
			decay: 2
		}),
		/* @__PURE__ */ (0, K.jsx)("pointLight", {
			position: [
				.7,
				.6,
				.2
			],
			color: "#d8a84a",
			intensity: .6,
			distance: 2.2,
			decay: 2
		}),
		/* @__PURE__ */ (0, K.jsx)("pointLight", {
			position: [
				0,
				.5,
				-.4
			],
			color: "#d9a441",
			intensity: .5,
			distance: 2,
			decay: 2
		}),
		/* @__PURE__ */ (0, K.jsx)("pointLight", {
			position: [
				0,
				1.1,
				.5
			],
			color: "#ffe2b0",
			intensity: .35,
			distance: 2.4,
			decay: 2
		})
	] })] });
}
function ut() {
	let e = D((e) => e.tier), t = D((e) => e.view), r = D((e) => e.lighting), s = w[e];
	if (!s.post) return null;
	let c = e === "high";
	return /* @__PURE__ */ (0, K.jsxs)(l, {
		multisampling: c ? 4 : 0,
		enableNormalPass: !1,
		autoClear: !1,
		children: [
			s.ao ? /* @__PURE__ */ (0, K.jsx)(p, {
				aoRadius: .45,
				distanceFalloff: .9,
				intensity: 2.4,
				quality: "medium",
				halfRes: !0
			}) : /* @__PURE__ */ (0, K.jsx)(K.Fragment, {}),
			s.outline ? /* @__PURE__ */ (0, K.jsx)(g, {
				blur: !0,
				edgeStrength: 6,
				pulseSpeed: .6,
				visibleEdgeColor: 14267482,
				hiddenEdgeColor: 9071652,
				width: 900
			}) : /* @__PURE__ */ (0, K.jsx)(K.Fragment, {}),
			s.bloom ? /* @__PURE__ */ (0, K.jsx)(_, {
				mipmapBlur: !0,
				intensity: r === "night" ? .45 : .16,
				luminanceThreshold: .92,
				luminanceSmoothing: .2,
				radius: .6
			}) : /* @__PURE__ */ (0, K.jsx)(K.Fragment, {}),
			c && t === "global" ? /* @__PURE__ */ (0, K.jsx)(h, {
				worldFocusDistance: 3.4,
				worldFocusRange: 2.6,
				bokehScale: 1.6
			}) : /* @__PURE__ */ (0, K.jsx)(K.Fragment, {}),
			c ? /* @__PURE__ */ (0, K.jsx)(K.Fragment, {}) : /* @__PURE__ */ (0, K.jsx)(i, {}),
			/* @__PURE__ */ (0, K.jsx)(a, { mode: _e.ACES_FILMIC }),
			/* @__PURE__ */ (0, K.jsx)(n, { saturation: .04 }),
			/* @__PURE__ */ (0, K.jsx)(f, { contrast: .05 }),
			/* @__PURE__ */ (0, K.jsx)(o, {
				eskil: !1,
				offset: .2,
				darkness: .5
			})
		]
	});
}
function dt() {
	let e = D((e) => e.tier), t = w[e], n = D((e) => e.lighting), r = D((e) => e.setReady), i = D((e) => e.modelUrl), a = (0, F.useMemo)(() => {
		try {
			return matchMedia("(prefers-reduced-motion: reduce)").matches;
		} catch {
			return !1;
		}
	}, []), o = (0, F.useMemo)(() => t.dpr[1], [t]);
	return /* @__PURE__ */ (0, K.jsxs)(y, {
		shadows: t.shadows,
		dpr: [t.dpr[0], o],
		camera: {
			fov: 42,
			near: .03,
			far: 60,
			position: k.global.pos
		},
		gl: {
			antialias: !t.post,
			powerPreference: "high-performance",
			preserveDrawingBuffer: !0,
			toneMapping: t.post ? 0 : 4,
			toneMappingExposure: n === "night" ? 1.4 : 1.25
		},
		onCreated: ({ gl: e }) => {
			e.domElement.addEventListener("webglcontextlost", (e) => {
				e.preventDefault(), r(!1), D.getState().say("Contexte graphique perdu — rechargez la page.");
			});
		},
		"aria-label": "Habitacle 3D interactif",
		children: [
			/* @__PURE__ */ (0, K.jsx)(m, {
				flipflops: 2,
				onDecline: () => {
					let e = D.getState();
					if (e.qualityPref !== "auto") return;
					let t = e.tier === "high" ? "medium" : e.tier === "medium" ? "low" : null;
					t && (D.setState({ tier: t }), e.say("Qualité ajustée automatiquement pour rester fluide"));
				}
			}),
			/* @__PURE__ */ (0, K.jsx)(s, {
				makeDefault: !0,
				smoothTime: a ? .04 : .45,
				draggingSmoothTime: .08,
				minDistance: .06,
				maxDistance: 7,
				dollySpeed: .7,
				truckSpeed: 0,
				azimuthRotateSpeed: .7,
				polarRotateSpeed: .7,
				mouseButtons: {
					left: 1,
					middle: 0,
					right: 0,
					wheel: 16
				},
				touches: {
					one: 64,
					two: 32768,
					three: 0
				}
			}),
			/* @__PURE__ */ (0, K.jsx)(it, {}),
			/* @__PURE__ */ (0, K.jsx)(at, {}),
			/* @__PURE__ */ (0, K.jsxs)(F.Suspense, {
				fallback: null,
				children: [
					/* @__PURE__ */ (0, K.jsx)(ct, {}),
					/* @__PURE__ */ (0, K.jsx)(lt, {}),
					/* @__PURE__ */ (0, K.jsxs)(v, { children: [
						i ? /* @__PURE__ */ (0, K.jsx)(rt, { children: /* @__PURE__ */ (0, K.jsx)(F.Suspense, {
							fallback: null,
							children: /* @__PURE__ */ (0, K.jsx)(nt, { url: i })
						}) }) : /* @__PURE__ */ (0, K.jsx)(Qe, {}),
						/* @__PURE__ */ (0, K.jsx)($e, {}),
						/* @__PURE__ */ (0, K.jsx)(ut, {})
					] })
				]
			})
		]
	}, e);
}
//#endregion
export { dt as default, Ae as i, L as n, R as r, tt as t };
