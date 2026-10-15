import { n as e, r as t } from "./rolldown-runtime-Y_bBpyJl.js";
import { _ as n, a as r, b as i, c as a, d as o, f as s, g as c, h as l, i as u, l as d, m as f, n as p, o as m, r as h, s as g, t as _, u as v } from "./r3f-C1LUL5py.js";
import { f as y, i as b, l as x, n as S, r as C } from "./proc-D30mCTcD.js";
import { i as w, r as T, t as E } from "./api-DLoyHBA5.js";
import { $t as D, A as O, At as ee, C as te, D as ne, E as re, Ft as k, P as ie, S as ae, T as oe, V as A, Vt as se, _t as j, b as ce, bt as M, nn as N, p as le, rn as P, xt as F, yt as ue, z as de } from "./post-CUbYs-ZN.js";
import { t as fe } from "./three-Omqr2GBg.js";
//#region src/three/materials.ts
var I = /* @__PURE__ */ t(i(), 1), L = /* @__PURE__ */ new Map();
function R(e, t, n, r) {
	let i = `${e}|${n}|${t}|${r}`, a = L.get(i);
	if (a) return a;
	let o = S(e, n, r), s = new M({
		color: new O(t),
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
		s.normalScale = new N(o.ns * t, o.ns * t);
	}
	let c = new O(t).lerp(new O("#ffffff"), .14);
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
				color: new O("#ffffff"),
				roughness: 1,
				metalness: .2,
				clearcoat: 1,
				clearcoatRoughness: .04
			});
			break;
		case "brushed_alu":
			Object.assign(s, {
				color: new O("#d9dcdf"),
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
	return L.set(i, s), s;
}
function z(e, t) {
	let n = {};
	return Object.keys(e).forEach((r) => {
		let i = e[r];
		n[r] = R(i.material, x[i.color]?.hex ?? "#222", i.pattern, t);
	}), n;
}
var B = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new WeakMap(), pe = (e) => V.get(e);
function H(e, t) {
	let n = e + t, r = B.get(n);
	if (r) return r;
	let i;
	switch (e) {
		case "plastic": {
			let e = S("leather_grained", "plain", Math.min(t, 512)), n = new M({
				color: "#17191b",
				roughness: 1,
				clearcoat: .05,
				clearcoatRoughness: .7
			});
			if (e) {
				let t = e.normal.clone();
				t.repeat.set(5, 5), t.needsUpdate = !0, n.normalMap = t, n.normalScale = new N(.5, .5), n.roughnessMap = null, n.roughness = .62;
			}
			i = n;
			break;
		}
		case "plasticSoft":
			i = new M({
				color: "#0f1011",
				roughness: .75,
				sheen: .3,
				sheenRoughness: .6,
				sheenColor: new O("#444")
			});
			break;
		case "chrome":
			i = new M({
				color: "#cfd2d4",
				metalness: 1,
				roughness: .18
			});
			break;
		case "gold":
			i = new M({
				color: "#c9a24b",
				metalness: 1,
				roughness: .28
			});
			break;
		case "carpet": {
			let e = S("fabric", "plain", Math.min(t, 512)), n = new M({
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
			i = new M({
				color: "#05070a",
				roughness: .08,
				metalness: .2,
				clearcoat: 1,
				clearcoatRoughness: .03
			});
			break;
		case "rubber":
			i = new F({
				color: "#0b0b0c",
				roughness: .9
			});
			break;
		case "pedestal": i = new M({
			color: "#040404",
			roughness: .5,
			metalness: .25,
			clearcoat: .35,
			clearcoatRoughness: .4
		});
	}
	return B.set(n, i), V.set(i, e), i;
}
//#endregion
//#region src/three/geo.ts
function U(e) {
	let t = e.attributes.position, n = e.attributes.normal, r = new Float32Array(t.count * 2);
	for (let e = 0; e < t.count; e++) {
		let i = Math.abs(n.getX(e)), a = Math.abs(n.getY(e)), o = Math.abs(n.getZ(e)), s, c;
		i >= a && i >= o ? (s = t.getZ(e), c = t.getY(e)) : a >= o ? (s = t.getX(e), c = t.getZ(e)) : (s = t.getX(e), c = t.getY(e)), r[e * 2] = s, r[e * 2 + 1] = c;
	}
	return e.setAttribute("uv", new ae(r, 2)), e;
}
function me(e) {
	let t = e.attributes.position, n = new Float32Array(t.count * 2);
	for (let e = 0; e < t.count; e++) n[e * 2] = t.getX(e), n[e * 2 + 1] = t.getY(e);
	return e.setAttribute("uv", new ae(n, 2)), e;
}
function he(e, t, n) {
	let r = e.attributes.uv;
	for (let e = 0; e < r.count; e++) r.setXY(e, r.getX(e) * t, r.getY(e) * n);
	return r.needsUpdate = !0, e;
}
var W = (e, t, n, r, i) => U(new fe(e, t, n, r, Math.min(i, Math.min(e, t, n) / 2 - .001)));
function G(e, t, n, r = 8) {
	let i = e.distanceTo(t), a = new re(n, Math.max(1e-4, i - 2 * n), 4, r);
	a.rotateX(Math.PI / 2);
	let o = new j().compose(e.clone().add(t).multiplyScalar(.5), new k().setFromUnitVectors(new P(0, 0, 1), t.clone().sub(e).normalize()), new P(1, 1, 1));
	return a.applyMatrix4(o), U(a);
}
function ge(e, t, n, r = 48) {
	let i = new ne(e, !1, "catmullrom", .4), a = [], o = [], s = [], c = 0, l = i.getPoint(0);
	for (let e = 0; e <= r; e++) {
		let u = e / r, d = i.getPoint(u);
		c += d.distanceTo(l), l = d;
		let f = i.getTangent(u), p = new P().crossVectors(f, n).normalize().multiplyScalar(t / 2);
		if (a.push(d.x - p.x, d.y - p.y, d.z - p.z, d.x + p.x, d.y + p.y, d.z + p.z), o.push(c, 0, c, t), e < r) {
			let t = e * 2;
			s.push(t, t + 1, t + 2, t + 1, t + 3, t + 2);
		}
	}
	let u = new te();
	return u.setAttribute("position", new A(a, 3)), u.setAttribute("uv", new A(o, 2)), u.setIndex(s), u.computeVertexNormals(), u;
}
function _e(e, t, n, r, i = .2, a = 28, o = 16) {
	let s = (e * e + i * i) / (2 * i), c = t - s, l = [], u = [], d = [];
	for (let t = 0; t <= o; t++) for (let i = 0; i <= a; i++) {
		let d = -e + 2 * e * i / a, f = c + Math.sqrt(s * s - d * d), p = n + (r - n) * t / o;
		l.push(d, f, p), u.push(d, p);
	}
	for (let e = 0; e < o; e++) for (let t = 0; t < a; t++) {
		let n = e * (a + 1) + t, r = n + 1, i = n + a + 1, o = i + 1;
		d.push(n, r, i, r, o, i);
	}
	let f = new te();
	if (f.setAttribute("position", new A(l, 3)), f.setAttribute("uv", new A(u, 2)), f.setIndex(d), f.computeVertexNormals(), f.attributes.normal.getY(Math.floor(f.attributes.normal.count / 2)) > 0) {
		let e = f.index;
		for (let t = 0; t < e.count; t += 3) {
			let n = e.getY(t);
			e.setY(t, e.getZ(t)), e.setZ(t, n);
		}
		f.computeVertexNormals();
	}
	return f;
}
function ve(e, t, n = 40) {
	let r = new ee(e, t, n, Math.round(t / e * n * 1.2) + 6), i = r.attributes.position;
	for (let n = 0; n < i.count; n++) {
		let r = i.getX(n) / (e / 2), a = i.getY(n) / (t / 2), o = 0;
		o += .035 * Math.exp(-(((a + .05) / .22) ** 4)) * Math.exp(-((r / .85) ** 6)), o -= .03 * Math.exp(-(((a + .62) / .18) ** 2)) * Math.exp(-((r / .6) ** 4)), o += .015 * Math.exp(-(((a - .55) / .12) ** 2)), o -= .02 * (1 - Math.min(1, (1 - Math.abs(r)) * 12)), i.setZ(n, o);
	}
	return r.computeVertexNormals(), me(r);
}
function K(e, t, n = .011) {
	let r = [], i = t.clone().sub(e), a = i.length();
	i.normalize();
	let o = new k().setFromUnitVectors(new P(0, 0, 1), i), s = Math.max(1, Math.floor(a / n));
	for (let t = 0; t <= s; t++) {
		let n = e.clone().addScaledVector(i, t / s * a);
		r.push(new j().compose(n, o, new P(1, 1, 1)));
	}
	return r;
}
function ye(e, t, n = .012, r = 0, i = Math.PI * 2) {
	let a = [], o = Math.floor(e * (i - r) / n);
	for (let n = 0; n < o; n++) {
		let s = r + (i - r) * n / o, c = new P(Math.cos(s) * e, Math.sin(s) * e, t), l = new k().setFromEuler(new de(0, 0, s + Math.PI / 2)).multiply(new k().setFromUnitVectors(new P(0, 0, 1), new P(1, 0, 0)));
		a.push(new j().compose(c, l, new P(1, 1, 1)));
	}
	return a;
}
//#endregion
//#region src/three/Interior.tsx
var q = n(), J = (e, t, n) => new P(e, t, n);
function Y(e) {
	let { zone: t, geometry: n, material: i, ...a } = e, o = C((e) => e.selected === t || e.hovered === t), s = C((e) => e.select), c = C((e) => e.hover);
	return /* @__PURE__ */ (0, q.jsx)(r, {
		enabled: o,
		children: /* @__PURE__ */ (0, q.jsx)("mesh", {
			geometry: n,
			material: i,
			castShadow: !0,
			receiveShadow: !0,
			userData: { zone: t },
			name: `zone__${t}`,
			onClick: (e) => {
				e.delta > 5 || (e.stopPropagation(), s(t));
			},
			onPointerOver: (e) => {
				e.stopPropagation(), c(t), document.body.style.cursor = "pointer";
			},
			onPointerOut: () => {
				c(null), document.body.style.cursor = "";
			},
			...a
		})
	});
}
function X(e) {
	return /* @__PURE__ */ (0, q.jsx)("mesh", {
		castShadow: !0,
		receiveShadow: !0,
		...e
	});
}
function Z({ matrices: e, material: t, size: n = [
	.0042,
	.0016,
	.0075
] }) {
	let i = (0, I.useRef)(null), a = (0, I.useMemo)(() => new re(1, 1, 2, 6), []);
	(0, I.useEffect)(() => {
		let t = i.current;
		if (!t) return;
		let r = new j().makeScale(n[0], n[1], n[2] / 2);
		e.forEach((e, n) => t.setMatrixAt(n, e.clone().multiply(r))), t.instanceMatrix.needsUpdate = !0;
	}, [e, n]);
	let o = C((e) => e.selected === "stitching" || e.hovered === "stitching"), s = C((e) => e.select);
	return /* @__PURE__ */ (0, q.jsx)(r, {
		enabled: o,
		children: /* @__PURE__ */ (0, q.jsx)("instancedMesh", {
			ref: i,
			name: "zone__stitching",
			userData: { zone: "stitching" },
			args: [
				a,
				t,
				e.length
			],
			onClick: (e) => {
				e.delta > 5 || (e.stopPropagation(), s("stitching"));
			}
		})
	});
}
function Q({ x: e, z: t, mats: n, seg: r, stitchMat: i, pipeMat: a, tex: o, rear: s }) {
	let c = (0, I.useMemo)(() => {
		let e = W(.3, .1, .5, r, .03), t = W(.085, .125, .47, r, .03), n = W(.3, .58, .085, r, .03), i = W(.07, .42, .1, r, .032), a = W(.2, .15, .08, r, .03), o = W(.46, .17, .46, r, .03), s = [G(J(-.153, .385, -.235), J(-.153, .385, .235), .0045), G(J(.153, .385, -.235), J(.153, .385, .235), .0045)], c = [G(J(-.153, .01, -.052), J(-.153, .57, -.052), .0045), G(J(.153, .01, -.052), J(.153, .57, -.052), .0045)], l = new ie(.008, .008, .1, 10), u = [];
		for (let e of [-1, 1]) for (let t of [-.014, .014]) u.push(...K(J(e * .153 + t, .3855, -.225), J(e * .153 + t, .3855, .225)));
		let d = [];
		for (let e of [-1, 1]) for (let t of [-.014, .014]) d.push(...K(J(e * .153 + t, .02, -.0525), J(e * .153 + t, .56, -.0525)).map((e) => e.clone().multiply(new j().makeRotationX(Math.PI / 2))));
		return {
			cushionC: e,
			cushionS: t,
			backC: n,
			backS: i,
			head: a,
			skirt: o,
			pipeC: s,
			pipeB: c,
			post: l,
			stitchTop: u,
			stitchBack: d,
			stitchHead: K(J(-.07, 0, -.0455), J(.07, 0, -.0455), .011)
		};
	}, [r]), l = s ? .26 : .2;
	return /* @__PURE__ */ (0, q.jsxs)("group", {
		position: [
			e,
			0,
			t
		],
		children: [
			/* @__PURE__ */ (0, q.jsx)(X, {
				geometry: c.skirt,
				material: H("plasticSoft", o),
				position: [
					0,
					.17,
					.02
				]
			}),
			/* @__PURE__ */ (0, q.jsx)(Y, {
				zone: "seat_cushion",
				geometry: c.cushionC,
				material: n.seat_cushion,
				position: [
					0,
					.335,
					0
				]
			}),
			/* @__PURE__ */ (0, q.jsx)(Y, {
				zone: "seat_bolster",
				geometry: c.cushionS,
				material: n.seat_bolster,
				position: [
					-.19,
					.345,
					0
				],
				rotation: [
					0,
					0,
					.1
				]
			}),
			/* @__PURE__ */ (0, q.jsx)(Y, {
				zone: "seat_bolster",
				geometry: c.cushionS,
				material: n.seat_bolster,
				position: [
					.19,
					.345,
					0
				],
				rotation: [
					0,
					0,
					-.1
				]
			}),
			c.pipeC.map((e, t) => /* @__PURE__ */ (0, q.jsx)(Y, {
				zone: "piping",
				geometry: e,
				material: a,
				position: [
					0,
					0,
					0
				]
			}, "pc" + t)),
			/* @__PURE__ */ (0, q.jsx)(Z, {
				matrices: c.stitchTop,
				material: i
			}),
			/* @__PURE__ */ (0, q.jsx)("group", {
				position: [
					0,
					.43,
					.25
				],
				rotation: [
					l,
					0,
					0
				],
				children: /* @__PURE__ */ (0, q.jsxs)("group", {
					position: [
						0,
						0,
						0
					],
					children: [
						/* @__PURE__ */ (0, q.jsx)(Y, {
							zone: "seat_back",
							geometry: c.backC,
							material: n.seat_back,
							position: [
								0,
								.29,
								0
							]
						}),
						/* @__PURE__ */ (0, q.jsx)(Y, {
							zone: "seat_bolster",
							geometry: c.backS,
							material: n.seat_bolster,
							position: [
								-.188,
								.23,
								0
							],
							rotation: [
								0,
								.08,
								0
							]
						}),
						/* @__PURE__ */ (0, q.jsx)(Y, {
							zone: "seat_bolster",
							geometry: c.backS,
							material: n.seat_bolster,
							position: [
								.188,
								.23,
								0
							],
							rotation: [
								0,
								-.08,
								0
							]
						}),
						c.pipeB.map((e, t) => /* @__PURE__ */ (0, q.jsx)(Y, {
							zone: "piping",
							geometry: e,
							material: a,
							position: [
								0,
								0,
								0
							]
						}, "pb" + t)),
						/* @__PURE__ */ (0, q.jsx)(Z, {
							matrices: c.stitchBack,
							material: i
						}),
						/* @__PURE__ */ (0, q.jsx)(X, {
							geometry: c.post,
							material: H("chrome", o),
							position: [
								-.055,
								.65,
								.01
							]
						}),
						/* @__PURE__ */ (0, q.jsx)(X, {
							geometry: c.post,
							material: H("chrome", o),
							position: [
								.055,
								.65,
								.01
							]
						}),
						/* @__PURE__ */ (0, q.jsx)(Y, {
							zone: "seat_headrest",
							geometry: c.head,
							material: n.seat_headrest,
							position: [
								0,
								.74,
								.01
							]
						}),
						/* @__PURE__ */ (0, q.jsx)(Z, {
							matrices: c.stitchHead.map((e) => e.clone().setPosition(new P().setFromMatrixPosition(e).add(J(0, .74, 0)))),
							material: i
						})
					]
				})
			})
		]
	});
}
function be({ mats: e, seg: t, stitchMat: n, tex: r }) {
	let i = (0, I.useMemo)(() => {
		let e = new D(.175, .0175, 20 + t * 4, 72 + t * 8);
		he(e, 2 * Math.PI * .175, 2 * Math.PI * .0175);
		let n = W(.1, .03, .02, t, .01), r = W(.045, .1, .02, t, .01), i = W(.1, .1, .045, t, .03), a = ye(.1745, .0152, .012), o = ye(.1745, -.0152, .012);
		return {
			rim: e,
			spokeS: n,
			spokeB: r,
			hub: i,
			stitch: a.concat(o)
		};
	}, [t]);
	return /* @__PURE__ */ (0, q.jsxs)("group", {
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
			/* @__PURE__ */ (0, q.jsx)(Y, {
				zone: "wheel",
				geometry: i.rim,
				material: e.wheel
			}),
			/* @__PURE__ */ (0, q.jsx)(X, {
				geometry: i.spokeS,
				material: H("plastic", r),
				position: [
					-.1,
					-.005,
					0
				]
			}),
			/* @__PURE__ */ (0, q.jsx)(X, {
				geometry: i.spokeS,
				material: H("plastic", r),
				position: [
					.1,
					-.005,
					0
				]
			}),
			/* @__PURE__ */ (0, q.jsx)(X, {
				geometry: i.spokeB,
				material: H("plastic", r),
				position: [
					0,
					-.09,
					0
				]
			}),
			/* @__PURE__ */ (0, q.jsx)(X, {
				geometry: i.hub,
				material: H("plasticSoft", r),
				position: [
					0,
					0,
					-.01
				]
			}),
			/* @__PURE__ */ (0, q.jsx)(Z, {
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
function $({ pts: e, normal: t, mats: n, tex: r }) {
	let i = (0, I.useMemo)(() => ge(e, .046, t), [e, t]), a = e[e.length - 1], o = e[0];
	return /* @__PURE__ */ (0, q.jsxs)("group", { children: [
		/* @__PURE__ */ (0, q.jsx)(Y, {
			zone: "belts",
			geometry: i,
			material: n.belts
		}),
		/* @__PURE__ */ (0, q.jsx)(X, {
			geometry: (0, I.useMemo)(() => W(.05, .016, .07, 3, .006), []),
			material: H("chrome", r),
			position: [
				a.x,
				a.y + .01,
				a.z
			]
		}),
		/* @__PURE__ */ (0, q.jsx)(X, {
			geometry: (0, I.useMemo)(() => W(.06, .05, .02, 3, .006), []),
			material: H("plasticSoft", r),
			position: [
				o.x,
				o.y + .02,
				o.z + .02
			]
		})
	] });
}
function xe() {
	let e = (0, I.useRef)(null), t = (0, I.useRef)(null), n = (0, I.useRef)(null);
	l(({ camera: r }) => {
		e.current && (e.current.visible = r.position.x > -.82 || C.getState().view === "door"), t.current && (t.current.visible = r.position.x < .82), n.current && (n.current.visible = Math.abs(r.position.x) < .85 && r.position.y < 1.3);
	});
	let r = C((e) => e.config), i = C((e) => e.tier), a = C((e) => e.lighting), o = b[i], s = o.texSize, c = (0, I.useMemo)(() => z(r, s), [r, s]), u = (0, I.useMemo)(() => R("thread", x[r.stitching.color].hex, "plain", s), [r.stitching.color, s]), d = c.piping, f = (0, I.useMemo)(() => {
		let e = c.door_panels.clone();
		return e.side = 2, e;
	}, [c.door_panels]), p = o.segments, m = (0, I.useMemo)(() => ({
		head: _e(.74, 1.2, -.66, 1.5),
		doorF: ve(.98, .5),
		doorR: ve(.86, .5),
		arm: W(.5, .075, .1, p, .03),
		armR: W(.42, .07, .09, p, .03),
		insertF: W(.9, .034, .012, 3, .004),
		insertR: W(.78, .03, .012, 3, .004),
		pillarA: W(.03, .5, .07, 3, .012),
		pillarB: W(.03, .3, .1, 3, .012),
		pillarC: W(.03, .36, .12, 3, .012),
		dash: W(1.5, .32, .34, p, .05),
		dashTop: W(1.46, .07, .4, p, .03),
		dashInsert: W(1.2, .032, .016, 3, .004),
		cluster: W(.34, .15, .04, 3, .01),
		screen: W(.34, .2, .025, 3, .008),
		console_: W(.22, .24, .9, p, .04),
		consoleTop: W(.2, .05, .4, p, .02),
		sill: W(.06, .1, 2.9, 3, .02),
		floor: U(new ee(1.5, 3.2, 1, 1).rotateX(-Math.PI / 2)),
		stitchDoor: [...K(J(-.43, .16, .012), J(.43, .16, .012)), ...K(J(-.43, .145, .012), J(.43, .145, .012))]
	}), [p]), h = (0, I.useMemo)(() => {
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
		let n = new oe(e);
		return n.colorSpace = se, n.anisotropy = 4, n;
	}, []), g = (0, I.useMemo)(() => new M({
		color: "#fff",
		map: h,
		emissive: "#ffffff",
		emissiveMap: h,
		emissiveIntensity: a === "night" ? 1.4 : .55,
		roughness: .2,
		clearcoat: 1,
		clearcoatRoughness: .05
	}), [h, a]), _ = (0, I.useMemo)(() => new ue({
		color: new O("#e0b24a").multiplyScalar(a === "night" ? 2.2 : 0),
		toneMapped: !1
	}), [a]), v = (e, t) => [
		J(e * .68, 1.03, t + .38),
		J(e * .58, .98, t + .21),
		J(e * .46, .88, t + .14),
		J(e * .31, .66, t + .11),
		J(e * .2, .47, t + .12)
	], y = (0, I.useMemo)(() => J(0, .2, -.98).normalize(), []), S = (0, I.useMemo)(() => [v(-1, 0), v(1, 0)], []), w = (0, I.useMemo)(() => [v(-1, .92).map((e) => e.clone().add(J(0, 0, 0))).map((e, t) => t === 0 ? e.add(J(0, 0, 0)) : e), v(1, .92)], []), T = H("plastic", s), E = H("plasticSoft", s);
	H("chrome", s);
	let D = H("glassBlack", s);
	return /* @__PURE__ */ (0, q.jsxs)("group", {
		name: "sim-interior",
		children: [
			/* @__PURE__ */ (0, q.jsx)("mesh", {
				geometry: m.floor,
				material: H("carpet", s),
				position: [
					0,
					.02,
					.1
				],
				receiveShadow: !0
			}),
			/* @__PURE__ */ (0, q.jsx)(X, {
				geometry: m.sill,
				material: E,
				position: [
					-.79,
					.07,
					.1
				]
			}),
			/* @__PURE__ */ (0, q.jsx)(X, {
				geometry: m.sill,
				material: E,
				position: [
					.79,
					.07,
					.1
				]
			}),
			/* @__PURE__ */ (0, q.jsx)(X, {
				geometry: m.dash,
				material: T,
				position: [
					0,
					.74,
					-.7
				]
			}),
			/* @__PURE__ */ (0, q.jsx)(X, {
				geometry: m.dashTop,
				material: E,
				position: [
					0,
					.9,
					-.66
				]
			}),
			/* @__PURE__ */ (0, q.jsx)(Y, {
				zone: "decor",
				geometry: m.dashInsert,
				material: c.decor,
				position: [
					0,
					.8,
					-.523
				]
			}),
			/* @__PURE__ */ (0, q.jsx)("mesh", {
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
			/* @__PURE__ */ (0, q.jsx)(X, {
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
			/* @__PURE__ */ (0, q.jsx)("mesh", {
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
				children: /* @__PURE__ */ (0, q.jsx)("planeGeometry", { args: [.31, .13] })
			}),
			/* @__PURE__ */ (0, q.jsx)(X, {
				geometry: m.screen,
				material: D,
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
			/* @__PURE__ */ (0, q.jsx)(X, {
				geometry: m.console_,
				material: T,
				position: [
					0,
					.17,
					-.1
				]
			}),
			/* @__PURE__ */ (0, q.jsx)(X, {
				geometry: m.consoleTop,
				material: E,
				position: [
					0,
					.3,
					.1
				]
			}),
			/* @__PURE__ */ (0, q.jsx)("mesh", {
				position: [
					0,
					.12,
					-.3
				],
				material: _,
				children: /* @__PURE__ */ (0, q.jsx)("boxGeometry", { args: [
					.2,
					.01,
					.4
				] })
			}),
			/* @__PURE__ */ (0, q.jsx)(Q, {
				x: -.38,
				z: .02,
				mats: c,
				seg: p,
				stitchMat: u,
				pipeMat: d,
				tex: s
			}),
			/* @__PURE__ */ (0, q.jsx)(Q, {
				x: .38,
				z: .02,
				mats: c,
				seg: p,
				stitchMat: u,
				pipeMat: d,
				tex: s
			}),
			/* @__PURE__ */ (0, q.jsx)(Q, {
				x: -.36,
				z: .92,
				mats: c,
				seg: p,
				stitchMat: u,
				pipeMat: d,
				tex: s,
				rear: !0
			}),
			/* @__PURE__ */ (0, q.jsx)(Q, {
				x: .36,
				z: .92,
				mats: c,
				seg: p,
				stitchMat: u,
				pipeMat: d,
				tex: s,
				rear: !0
			}),
			/* @__PURE__ */ (0, q.jsx)(be, {
				mats: c,
				seg: p,
				stitchMat: u,
				tex: s
			}),
			/* @__PURE__ */ (0, q.jsx)($, {
				pts: S[0],
				normal: y,
				mats: c,
				tex: s
			}),
			/* @__PURE__ */ (0, q.jsx)($, {
				pts: S[1],
				normal: y,
				mats: c,
				tex: s
			}),
			/* @__PURE__ */ (0, q.jsx)($, {
				pts: w[0],
				normal: y,
				mats: c,
				tex: s
			}),
			/* @__PURE__ */ (0, q.jsx)($, {
				pts: w[1],
				normal: y,
				mats: c,
				tex: s
			}),
			[-1, 1].map((n) => /* @__PURE__ */ (0, q.jsxs)("group", {
				ref: n < 0 ? e : t,
				children: [
					/* @__PURE__ */ (0, q.jsxs)("group", {
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
							/* @__PURE__ */ (0, q.jsx)(Y, {
								zone: "door_panels",
								geometry: m.doorF,
								material: f,
								position: [
									0,
									.62,
									0
								]
							}),
							/* @__PURE__ */ (0, q.jsx)(Y, {
								zone: "door_panels",
								geometry: m.arm,
								material: c.door_panels,
								position: [
									-.12,
									.64,
									.055
								]
							}),
							/* @__PURE__ */ (0, q.jsx)(Y, {
								zone: "decor",
								geometry: m.insertF,
								material: c.decor,
								position: [
									-0,
									.8,
									.02
								]
							}),
							/* @__PURE__ */ (0, q.jsx)(Z, {
								matrices: m.stitchDoor.map((e) => e.clone().multiply(new j().makeTranslation(0, .6, 0))),
								material: u
							})
						]
					}),
					/* @__PURE__ */ (0, q.jsxs)("group", {
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
							/* @__PURE__ */ (0, q.jsx)(Y, {
								zone: "door_panels",
								geometry: m.doorR,
								material: f,
								position: [
									0,
									.62,
									0
								]
							}),
							/* @__PURE__ */ (0, q.jsx)(Y, {
								zone: "door_panels",
								geometry: m.armR,
								material: c.door_panels,
								position: [
									-.1,
									.64,
									.05
								]
							}),
							/* @__PURE__ */ (0, q.jsx)(Y, {
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
					/* @__PURE__ */ (0, q.jsx)(Y, {
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
					/* @__PURE__ */ (0, q.jsx)(Y, {
						zone: "headliner",
						geometry: m.pillarB,
						material: c.headliner,
						position: [
							n * .745,
							.97,
							.55
						]
					}),
					/* @__PURE__ */ (0, q.jsx)(Y, {
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
			/* @__PURE__ */ (0, q.jsx)("group", {
				ref: n,
				children: /* @__PURE__ */ (0, q.jsx)(Y, {
					zone: "headliner",
					geometry: m.head,
					material: c.headliner
				})
			}),
			/* @__PURE__ */ (0, q.jsx)(Ce, {})
		]
	});
}
function Se() {
	let e = C((e) => e.tier), t = b[e].texSize;
	return /* @__PURE__ */ (0, q.jsxs)("group", { children: [/* @__PURE__ */ (0, q.jsxs)("mesh", {
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
		children: [/* @__PURE__ */ (0, q.jsx)("circleGeometry", { args: [4.6, 96] }), /* @__PURE__ */ (0, q.jsx)("primitive", {
			object: H("pedestal", t),
			attach: "material"
		})]
	}), /* @__PURE__ */ (0, q.jsxs)("mesh", {
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
		children: [/* @__PURE__ */ (0, q.jsx)("ringGeometry", { args: [
			2.38,
			2.4,
			128
		] }), /* @__PURE__ */ (0, q.jsx)("meshBasicMaterial", {
			color: "#c9a24b",
			toneMapped: !1
		})]
	})] });
}
function Ce() {
	let e = C((e) => e.hovered);
	return (0, I.useEffect)(() => {
		document.documentElement.dataset.s3dHover = e ? y[e].label : "";
	}, [e]), null;
}
//#endregion
//#region src/three/Scene.tsx
var we = /* @__PURE__ */ e({ default: () => Me }), Te = (0, I.lazy)(() => import("./GlbInterior-DhLlqDkZ.js")), Ee = class extends I.Component {
	state = { err: !1 };
	static getDerivedStateFromError() {
		return { err: !0 };
	}
	componentDidCatch() {
		let e = C.getState();
		e.say("Modèle 3D introuvable : prototype de démonstration affiché."), e.setModelUrl(null);
	}
	render() {
		return this.state.err ? null : this.props.children;
	}
};
function De() {
	let e = C((e) => e.view), t = c((e) => e.controls);
	return (0, I.useEffect)(() => {
		if (!t) return;
		let n = T[e];
		t.setLookAt(...n.pos, ...n.target, !0);
	}, [e, t]), (0, I.useEffect)(() => {
		t && t.setBoundary(new ce(new P(-3.2, -.1, -1.6), new P(3.2, 2.6, 3.2)));
	}, [t]), null;
}
function Oe() {
	let e = c((e) => e.gl), t = c((e) => e.scene), n = c((e) => e.controls);
	return (0, I.useEffect)(() => {
		if (!n) return;
		let r = () => new Promise((e) => requestAnimationFrame(() => requestAnimationFrame(() => e())));
		E.current = {
			dolly: (e) => {
				n.dolly(e, !0);
			},
			capture: async () => {
				let t = C.getState().view, i = [];
				for (let t of [
					"global",
					"seats",
					"driver",
					"rear"
				]) {
					let a = T[t];
					await n.setLookAt(...a.pos, ...a.target, !1), await r(), await r(), i.push({
						view: t,
						label: w[t],
						url: e.domElement.toDataURL("image/jpeg", .86)
					});
				}
				let a = T[t];
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
				let n = Array.isArray(t.material) ? t.material[0] : t.material, i = t.userData?.zone, a = pe(n), o = i ? `zone__${i}` : `fixed__${a ?? "plasticSoft"}`;
				i || (t.name = o), r.has(o) || r.set(o, new F({
					name: o,
					color: i ? "#888888" : "#222222"
				})), t.material = r.get(o), t.castShadow = t.receiveShadow = !1;
			});
			let { GLTFExporter: i } = await import("./three-Omqr2GBg.js").then((e) => e.n);
			return new Promise((e, t) => new i().parse(n, (t) => e(t), t, { binary: !0 }));
		};
		return window.__s3d = {
			scene: t,
			exportGLB: i,
			download: async () => {
				let e = await i(), t = document.createElement("a");
				t.href = URL.createObjectURL(new Blob([e], { type: "model/gltf-binary" })), t.download = "interior-prototype.glb", t.click();
			}
		}, C.getState().setReady(!0), () => {
			E.current = null;
		};
	}, [
		n,
		e,
		t
	]), null;
}
function ke() {
	let e = C((e) => e.lighting), t = C((e) => e.tier), n = b[t].envRes, r = e === "night" ? "#02030a" : e === "day" ? "#a8c0d8" : "#050505", { scene: i } = c();
	return (0, I.useEffect)(() => {
		i.background = new O(r), i.fog = null;
	}, [i, r]), /* @__PURE__ */ (0, q.jsxs)(o, {
		resolution: n,
		frames: 1,
		background: !1,
		environmentIntensity: e === "night" ? .35 : e === "day" ? 1.25 : 1,
		children: [
			e === "showroom" && /* @__PURE__ */ (0, q.jsxs)(q.Fragment, { children: [
				/* @__PURE__ */ (0, q.jsx)("color", {
					attach: "background",
					args: ["#060606"]
				}),
				/* @__PURE__ */ (0, q.jsx)(v, {
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
				/* @__PURE__ */ (0, q.jsx)(v, {
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
				/* @__PURE__ */ (0, q.jsx)(v, {
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
				/* @__PURE__ */ (0, q.jsx)(v, {
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
				/* @__PURE__ */ (0, q.jsx)(v, {
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
				/* @__PURE__ */ (0, q.jsx)(v, {
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
			e === "day" && /* @__PURE__ */ (0, q.jsxs)(q.Fragment, { children: [
				/* @__PURE__ */ (0, q.jsx)("color", {
					attach: "background",
					args: ["#cfe0f0"]
				}),
				/* @__PURE__ */ (0, q.jsx)(v, {
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
				/* @__PURE__ */ (0, q.jsx)(v, {
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
				/* @__PURE__ */ (0, q.jsx)(v, {
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
				/* @__PURE__ */ (0, q.jsx)(v, {
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
				/* @__PURE__ */ (0, q.jsx)(v, {
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
			e === "night" && /* @__PURE__ */ (0, q.jsxs)(q.Fragment, { children: [
				/* @__PURE__ */ (0, q.jsx)("color", {
					attach: "background",
					args: ["#020308"]
				}),
				/* @__PURE__ */ (0, q.jsx)(v, {
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
				/* @__PURE__ */ (0, q.jsx)(v, {
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
				/* @__PURE__ */ (0, q.jsx)(v, {
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
				/* @__PURE__ */ (0, q.jsx)(v, {
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
function Ae() {
	let e = C((e) => e.lighting), t = C((e) => e.tier), n = b[t], r = e === "night";
	return /* @__PURE__ */ (0, q.jsxs)(q.Fragment, { children: [/* @__PURE__ */ (0, q.jsx)("directionalLight", {
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
	}), r && /* @__PURE__ */ (0, q.jsxs)(q.Fragment, { children: [
		/* @__PURE__ */ (0, q.jsx)("pointLight", {
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
		/* @__PURE__ */ (0, q.jsx)("pointLight", {
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
		/* @__PURE__ */ (0, q.jsx)("pointLight", {
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
		/* @__PURE__ */ (0, q.jsx)("pointLight", {
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
function je() {
	let e = C((e) => e.tier), t = b[e];
	return t.post ? /* @__PURE__ */ (0, q.jsxs)(_, {
		multisampling: 0,
		enableNormalPass: !1,
		autoClear: !1,
		children: [
			t.ao ? /* @__PURE__ */ (0, q.jsx)(p, {
				aoRadius: .45,
				distanceFalloff: .9,
				intensity: 2.4,
				quality: "medium",
				halfRes: !0
			}) : /* @__PURE__ */ (0, q.jsx)(q.Fragment, {}),
			t.outline ? /* @__PURE__ */ (0, q.jsx)(h, {
				blur: !0,
				edgeStrength: 6,
				pulseSpeed: .6,
				visibleEdgeColor: 14267482,
				hiddenEdgeColor: 9071652,
				width: 900
			}) : /* @__PURE__ */ (0, q.jsx)(q.Fragment, {}),
			/* @__PURE__ */ (0, q.jsx)(u, {}),
			/* @__PURE__ */ (0, q.jsx)(g, { mode: le.ACES_FILMIC }),
			/* @__PURE__ */ (0, q.jsx)(a, {
				eskil: !1,
				offset: .2,
				darkness: .55
			})
		]
	}) : null;
}
function Me() {
	let e = C((e) => e.tier), t = b[e], n = C((e) => e.lighting), r = C((e) => e.setReady), i = C((e) => e.modelUrl), a = (0, I.useMemo)(() => {
		try {
			return matchMedia("(prefers-reduced-motion: reduce)").matches;
		} catch {
			return !1;
		}
	}, []), o = (0, I.useMemo)(() => t.dpr[1], [t]);
	return /* @__PURE__ */ (0, q.jsxs)(f, {
		shadows: t.shadows,
		dpr: [t.dpr[0], o],
		camera: {
			fov: 42,
			near: .03,
			far: 60,
			position: T.global.pos
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
				e.preventDefault(), r(!1), C.getState().say("Contexte graphique perdu — rechargez la page.");
			});
		},
		"aria-label": "Habitacle 3D interactif",
		children: [
			/* @__PURE__ */ (0, q.jsx)(d, {
				flipflops: 2,
				onDecline: () => {
					let e = C.getState();
					if (e.qualityPref !== "auto") return;
					let t = e.tier === "high" ? "medium" : e.tier === "medium" ? "low" : null;
					t && (C.setState({ tier: t }), e.say("Qualité ajustée automatiquement pour rester fluide"));
				}
			}),
			/* @__PURE__ */ (0, q.jsx)(s, {
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
			/* @__PURE__ */ (0, q.jsx)(De, {}),
			/* @__PURE__ */ (0, q.jsx)(Oe, {}),
			/* @__PURE__ */ (0, q.jsxs)(I.Suspense, {
				fallback: null,
				children: [
					/* @__PURE__ */ (0, q.jsx)(ke, {}),
					/* @__PURE__ */ (0, q.jsx)(Ae, {}),
					/* @__PURE__ */ (0, q.jsxs)(m, { children: [
						i ? /* @__PURE__ */ (0, q.jsx)(Ee, { children: /* @__PURE__ */ (0, q.jsx)(I.Suspense, {
							fallback: null,
							children: /* @__PURE__ */ (0, q.jsx)(Te, { url: i })
						}) }) : /* @__PURE__ */ (0, q.jsx)(xe, {}),
						/* @__PURE__ */ (0, q.jsx)(Se, {}),
						/* @__PURE__ */ (0, q.jsx)(je, {})
					] })
				]
			})
		]
	}, e);
}
//#endregion
export { Me as default, z as i, R as n, H as r, we as t };
