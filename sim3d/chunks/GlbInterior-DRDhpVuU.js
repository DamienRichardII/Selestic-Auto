import { r as e } from "./rolldown-runtime-Y_bBpyJl.js";
import { _ as t, a as n, b as r, h as i, p as a } from "./r3f-C1LUL5py.js";
import { d as o, i as s, l as c, r as l } from "./proc-D30mCTcD.js";
import { U as u, b as d } from "./post-CUbYs-ZN.js";
import { i as f, n as p, r as m } from "./Scene-BQ9MqA3J.js";
//#region src/three/GlbInterior.tsx
var h = /* @__PURE__ */ e(r(), 1), g = t(), _ = [
	"plastic",
	"plasticSoft",
	"chrome",
	"carpet",
	"glassBlack",
	"rubber",
	"gold"
];
function v({ zone: e, group: t }) {
	let r = l((t) => t.selected === e || t.hovered === e), i = l((e) => e.select), a = l((e) => e.hover);
	return /* @__PURE__ */ (0, g.jsx)(n, {
		enabled: r,
		children: /* @__PURE__ */ (0, g.jsx)("primitive", {
			object: t,
			onClick: (t) => {
				t.delta > 5 || (t.stopPropagation(), i(e));
			},
			onPointerOver: (t) => {
				t.stopPropagation(), a(e), document.body.style.cursor = "pointer";
			},
			onPointerOut: () => {
				a(null), document.body.style.cursor = "";
			}
		})
	});
}
function y({ url: e }) {
	let t = a(e), n = l((e) => e.config), r = l((e) => e.tier), y = s[r].texSize, b = (0, h.useMemo)(() => {
		let e = t.scene.clone(!0);
		e.updateMatrixWorld(!0);
		let n = [];
		e.traverse((e) => {
			e.isMesh && n.push(e);
		});
		let r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
		for (let e of n) {
			let t = e.name, n = o.find((e) => t.startsWith("zone__" + e.id));
			if (n) {
				let t = r.get(n.id);
				t || (t = new u(), t.name = "z:" + n.id, r.set(n.id, t)), t.attach(e);
			} else {
				let n = _.find((e) => t.startsWith("fixed__" + e)) ?? "plastic", r = i.get(n);
				r || (r = new u(), r.name = "f:" + n, i.set(n, r)), r.attach(e);
			}
		}
		let a = [], s = new d();
		for (let e of n) {
			s.setFromObject(e);
			let t = (s.min.x + s.max.x) / 2, n = e.parent?.name ?? "";
			t < -.6 ? a.push({
				mesh: e,
				s: "L"
			}) : t > .6 ? a.push({
				mesh: e,
				s: "R"
			}) : n === "z:headliner" && a.push({
				mesh: e,
				s: "roof"
			});
		}
		return {
			zones: r,
			fixed: i,
			side: a
		};
	}, [t]);
	i(({ camera: e }) => {
		let t = e.position.x, n = e.position.y, r = l.getState().view;
		for (let e of b.side) e.mesh.visible = e.s === "L" ? t > -.82 || r === "door" : e.s === "R" ? t < .82 : Math.abs(t) < .85 && n < 1.3;
	});
	let x = (0, h.useMemo)(() => f(n, y), [n, y]), S = (0, h.useMemo)(() => p("thread", c[n.stitching.color].hex, "plain", y), [n.stitching.color, y]), C = (0, h.useMemo)(() => {
		let e = x.door_panels.clone();
		return e.side = 2, e;
	}, [x.door_panels]);
	return (0, h.useEffect)(() => {
		b.zones.forEach((e, t) => {
			let n = t === "stitching" ? S : t === "door_panels" ? C : x[t];
			e.traverse((e) => {
				let r = e;
				r.isMesh && (r.material = n, r.castShadow = !0, r.receiveShadow = !0, r.userData.zone = t);
			});
		}), b.fixed.forEach((e, t) => {
			e.traverse((e) => {
				let n = e;
				n.isMesh && (n.material = m(t, y), n.castShadow = !0, n.receiveShadow = !0);
			});
		});
	}, [
		b,
		x,
		S,
		C,
		y
	]), /* @__PURE__ */ (0, g.jsxs)("group", {
		name: "sim-interior",
		children: [[...b.zones].map(([e, t]) => /* @__PURE__ */ (0, g.jsx)(v, {
			zone: e,
			group: t
		}, e)), [...b.fixed].map(([e, t]) => /* @__PURE__ */ (0, g.jsx)("primitive", { object: t }, e))]
	});
}
//#endregion
export { y as default };
