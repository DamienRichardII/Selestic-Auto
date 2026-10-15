import { r as e } from "./chunks/rolldown-runtime-Y_bBpyJl.js";
import { _ as t, b as n, y as r } from "./chunks/r3f-C1LUL5py.js";
import { a as i, c as a, d as o, f as s, l as c, o as l, r as u, s as d, t as f, u as p } from "./chunks/proc-D30mCTcD.js";
import { i as m, n as h, t as g } from "./chunks/api-DLoyHBA5.js";
//#region src/lib/recap.ts
var _ = /* @__PURE__ */ e(n(), 1), v = /* @__PURE__ */ e(r(), 1);
function y(e) {
	return o.map((t) => {
		let n = e[t.id], r = l[n.material].label, i = n.material === "carbon" || n.material === "brushed_alu" ? "" : " — " + (c[n.color]?.label ?? n.color), a = n.pattern === "plain" ? "" : ` (${d[n.pattern].label.toLowerCase()})`;
		return `${t.label} : ${r}${i}${a}`;
	});
}
function b(e, t) {
	let n = {};
	for (let t of o) {
		let r = e[t.id];
		n[t.id] = `${r.material}.${r.color}.${r.pattern}`;
	}
	return btoa(encodeURIComponent(JSON.stringify({
		i: t,
		c: n
	})));
}
function x(e) {
	try {
		let t = JSON.parse(decodeURIComponent(atob(e))), n = {};
		for (let [e, r] of Object.entries(t.c)) {
			let [t, i, a] = r.split(".");
			n[e] = {
				material: t,
				color: i,
				pattern: a || "plain"
			};
		}
		return {
			id: t.i,
			cfg: n
		};
	} catch {
		return null;
	}
}
//#endregion
//#region src/ui/App.tsx
var S = t(), C = (0, _.lazy)(() => import("./chunks/Scene-BQ9MqA3J.js").then((e) => e.t)), w = class extends _.Component {
	state = { err: !1 };
	static getDerivedStateFromError() {
		return { err: !0 };
	}
	componentDidCatch(e) {
		this.props.onError?.(e);
	}
	render() {
		return this.state.err ? /* @__PURE__ */ (0, S.jsx)("div", {
			className: "s3d-fail",
			children: "Le rendu 3D a rencontré un problème."
		}) : this.props.children;
	}
}, T = /* @__PURE__ */ new Map();
function E(e) {
	let t = T.get(e);
	if (t) return t;
	let n = f(e, "plain", 96), r = "";
	if (n) {
		let e = document.createElement("canvas");
		e.width = e.height = 96;
		let t = e.getContext("2d"), i = t.createImageData(96, 96);
		for (let e = 0; e < 9216; e++) {
			let t = e % 96, r = e / 96 | 0, a = n.h[r * 96 + (t + 1) % 96] - n.h[(r + 1) % 96 * 96 + t], o = Math.max(0, Math.min(255, (n.a[e] ** (1 / 2.2) + a * .9) * 255));
			i.data[e * 4] = i.data[e * 4 + 1] = i.data[e * 4 + 2] = o, i.data[e * 4 + 3] = 255;
		}
		t.putImageData(i, 0, 0), r = e.toDataURL("image/png");
	}
	return T.set(e, r), r;
}
function D({ d: e }) {
	return /* @__PURE__ */ (0, S.jsx)("svg", {
		viewBox: "0 0 24 24",
		width: "18",
		height: "18",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.7",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, S.jsx)("path", { d: e })
	});
}
function O() {
	let e = u((e) => e.view), t = u((e) => e.setView), n = u((e) => e.lighting), r = u((e) => e.setLighting);
	u((e) => e.cutaway);
	let i = u((e) => e.ready), a = u((e) => e.hovered), o = u((e) => e.selected), c = u((e) => e.qualityPref), l = u((e) => e.setQualityPref), d = u((e) => e.tier), f = (0, _.useRef)(null), [p, v] = (0, _.useState)(!1);
	(0, _.useEffect)(() => {
		let e = () => v(document.fullscreenElement === f.current);
		return document.addEventListener("fullscreenchange", e), () => document.removeEventListener("fullscreenchange", e);
	}, []);
	let y = a ? s[a].label : null;
	return /* @__PURE__ */ (0, S.jsxs)("div", {
		className: "s3d-stage",
		ref: f,
		children: [
			/* @__PURE__ */ (0, S.jsx)(w, { children: /* @__PURE__ */ (0, S.jsx)(_.Suspense, {
				fallback: null,
				children: /* @__PURE__ */ (0, S.jsx)(C, {})
			}) }),
			!i && /* @__PURE__ */ (0, S.jsxs)("div", {
				className: "s3d-loading",
				role: "status",
				children: [/* @__PURE__ */ (0, S.jsx)("span", { className: "s3d-spin" }), "Préparation de l’habitacle 3D…"]
			}),
			/* @__PURE__ */ (0, S.jsxs)("div", {
				className: "s3d-top",
				children: [/* @__PURE__ */ (0, S.jsx)("div", {
					className: "s3d-views",
					role: "group",
					"aria-label": "Points de vue",
					children: h.map((n) => /* @__PURE__ */ (0, S.jsx)("button", {
						type: "button",
						className: e === n ? "on" : "",
						onClick: () => t(n),
						"aria-pressed": e === n,
						children: m[n]
					}, n))
				}), /* @__PURE__ */ (0, S.jsxs)("div", {
					className: "s3d-tools",
					children: [
						/* @__PURE__ */ (0, S.jsx)("button", {
							type: "button",
							onClick: () => g.current?.dolly(.5),
							"aria-label": "Zoom avant",
							title: "Zoom +",
							children: /* @__PURE__ */ (0, S.jsx)(D, { d: "M12 5v14M5 12h14" })
						}),
						/* @__PURE__ */ (0, S.jsx)("button", {
							type: "button",
							onClick: () => g.current?.dolly(-.5),
							"aria-label": "Zoom arrière",
							title: "Zoom −",
							children: /* @__PURE__ */ (0, S.jsx)(D, { d: "M5 12h14" })
						}),
						/* @__PURE__ */ (0, S.jsx)("button", {
							type: "button",
							onClick: () => {
								document.fullscreenElement ? document.exitFullscreen() : f.current?.requestFullscreen?.();
							},
							"aria-label": p ? "Quitter le plein écran" : "Plein écran",
							title: "Plein écran",
							children: /* @__PURE__ */ (0, S.jsx)(D, { d: "M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" })
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, S.jsxs)("div", {
				className: "s3d-bottom",
				children: [/* @__PURE__ */ (0, S.jsx)("div", {
					className: "s3d-light",
					role: "group",
					"aria-label": "Éclairage",
					children: [
						"showroom",
						"day",
						"night"
					].map((e) => /* @__PURE__ */ (0, S.jsx)("button", {
						type: "button",
						className: n === e ? "on" : "",
						onClick: () => r(e),
						"aria-pressed": n === e,
						children: e === "showroom" ? "Showroom" : e === "day" ? "Jour" : "Nuit"
					}, e))
				}), /* @__PURE__ */ (0, S.jsxs)("label", {
					className: "s3d-q",
					title: "Niveau de qualité du rendu",
					children: [/* @__PURE__ */ (0, S.jsx)("span", { children: "Qualité" }), /* @__PURE__ */ (0, S.jsxs)("select", {
						value: c,
						onChange: (e) => l(e.target.value),
						"aria-label": "Qualité du rendu",
						children: [
							/* @__PURE__ */ (0, S.jsxs)("option", {
								value: "auto",
								children: [
									"Auto (",
									d === "low" ? "éco" : d === "medium" ? "équilibrée" : "max",
									")"
								]
							}),
							/* @__PURE__ */ (0, S.jsx)("option", {
								value: "low",
								children: "Économique"
							}),
							/* @__PURE__ */ (0, S.jsx)("option", {
								value: "medium",
								children: "Équilibrée"
							}),
							/* @__PURE__ */ (0, S.jsx)("option", {
								value: "high",
								children: "Maximale"
							})
						]
					})]
				})]
			}),
			y && /* @__PURE__ */ (0, S.jsx)("div", {
				className: "s3d-tip",
				children: y
			}),
			/* @__PURE__ */ (0, S.jsxs)("div", {
				className: "s3d-sel",
				children: [/* @__PURE__ */ (0, S.jsx)("span", { children: "Zone" }), s[o].label]
			}),
			/* @__PURE__ */ (0, S.jsxs)("p", {
				className: "s3d-hint",
				children: ["Glissez pour tourner · molette / pincement pour zoomer · touchez une pièce pour la personnaliser", ""]
			})
		]
	});
}
function k({ id: e, active: t, onPick: n }) {
	let r = c[e];
	return /* @__PURE__ */ (0, S.jsx)("button", {
		type: "button",
		className: "s3d-sw" + (t ? " on" : ""),
		style: { background: r.hex },
		onClick: n,
		"aria-label": r.label,
		"aria-pressed": t,
		title: r.label
	});
}
function A() {
	let e = u((e) => e.selected), t = u((e) => e.select), n = u((e) => e.setView), r = u((e) => e.config), i = u((e) => e.setMaterial), f = u((e) => e.setColor), m = u((e) => e.setPattern), h = u((e) => e.applyTo), g = u((e) => e.reset), v = u((e) => e.save), y = u((e) => e.load), b = u((e) => e.say), x = u((e) => e.setRecap), C = s[e], w = r[e], T = w.material !== "carbon" && w.material !== "brushed_alu", D = (0, _.useRef)(null);
	(0, _.useEffect)(() => {
		D.current?.querySelector(".on")?.scrollIntoView({
			block: "nearest",
			inline: "center",
			behavior: "smooth"
		});
	}, [e]);
	let O = [
		"seat_cushion",
		"seat_back",
		"seat_bolster",
		"seat_headrest"
	], A = o.map((e) => e.id).filter((e) => e !== "stitching"), M = (t, n, r) => {
		let i = h(e, t, n);
		b(i ? `Appliqué à ${i} zone${i > 1 ? "s" : ""} (${r})` : "Rien à appliquer : matière ou teinte non compatible avec ces zones");
	};
	return /* @__PURE__ */ (0, S.jsxs)("aside", {
		className: "s3d-panel",
		"aria-label": "Options de personnalisation",
		children: [
			/* @__PURE__ */ (0, S.jsx)("div", {
				className: "s3d-chips",
				ref: D,
				role: "tablist",
				"aria-label": "Zones",
				children: p.map((r) => /* @__PURE__ */ (0, S.jsxs)("div", {
					className: "s3d-grp",
					children: [/* @__PURE__ */ (0, S.jsx)("small", { children: r }), /* @__PURE__ */ (0, S.jsx)("div", { children: o.filter((e) => e.group === r).map((r) => /* @__PURE__ */ (0, S.jsx)("button", {
						type: "button",
						role: "tab",
						"aria-selected": e === r.id,
						className: e === r.id ? "on" : "",
						onClick: () => {
							t(r.id), n(r.view);
						},
						children: r.label
					}, r.id)) })]
				}, r))
			}),
			/* @__PURE__ */ (0, S.jsxs)("div", {
				className: "s3d-body",
				children: [
					/* @__PURE__ */ (0, S.jsxs)("header", { children: [/* @__PURE__ */ (0, S.jsx)("h3", { children: C.label }), /* @__PURE__ */ (0, S.jsx)("p", { children: C.hint })] }),
					C.materials.length > 1 && /* @__PURE__ */ (0, S.jsxs)("section", { children: [
						/* @__PURE__ */ (0, S.jsxs)("h4", { children: [/* @__PURE__ */ (0, S.jsx)("b", { children: "1" }), " Matière"] }),
						/* @__PURE__ */ (0, S.jsx)("div", {
							className: "s3d-mats",
							children: C.materials.map((t) => /* @__PURE__ */ (0, S.jsxs)("button", {
								type: "button",
								className: "s3d-mat" + (w.material === t ? " on" : ""),
								onClick: () => i(e, t),
								"aria-pressed": w.material === t,
								children: [/* @__PURE__ */ (0, S.jsx)("i", { style: {
									backgroundImage: `url(${E(t)})`,
									backgroundColor: j(t, w.color)
								} }), /* @__PURE__ */ (0, S.jsxs)("span", { children: [l[t].label, l[t].optional ? " *" : ""] })]
							}, t))
						}),
						/* @__PURE__ */ (0, S.jsxs)("p", {
							className: "s3d-note",
							children: [l[w.material].short, l[w.material].optional ? " — finition à valider avec l’atelier." : ""]
						})
					] }),
					T && /* @__PURE__ */ (0, S.jsxs)("section", { children: [/* @__PURE__ */ (0, S.jsxs)("h4", { children: [
						/* @__PURE__ */ (0, S.jsx)("b", { children: C.materials.length > 1 ? 2 : 1 }),
						" ",
						e === "stitching" ? "Couleur du fil" : "Couleur",
						" ",
						/* @__PURE__ */ (0, S.jsx)("em", { children: c[w.color]?.label })
					] }), /* @__PURE__ */ (0, S.jsx)("div", {
						className: "s3d-sws",
						children: a.map((t) => /* @__PURE__ */ (0, S.jsx)(k, {
							id: t.id,
							active: w.color === t.id,
							onPick: () => f(e, t.id)
						}, t.id))
					})] }),
					C.patterns && C.patterns.length > 1 && /* @__PURE__ */ (0, S.jsxs)("section", { children: [/* @__PURE__ */ (0, S.jsxs)("h4", { children: [/* @__PURE__ */ (0, S.jsx)("b", { children: "3" }), " Motif de sellerie"] }), /* @__PURE__ */ (0, S.jsx)("div", {
						className: "s3d-pats",
						children: C.patterns.map((t) => /* @__PURE__ */ (0, S.jsx)("button", {
							type: "button",
							className: w.pattern === t ? "on" : "",
							onClick: () => m(e, t),
							"aria-pressed": w.pattern === t,
							children: d[t].label
						}, t))
					})] }),
					e !== "stitching" && /* @__PURE__ */ (0, S.jsxs)("section", { children: [/* @__PURE__ */ (0, S.jsx)("h4", { children: "Appliquer à plusieurs zones" }), /* @__PURE__ */ (0, S.jsxs)("div", {
						className: "s3d-apply",
						children: [
							/* @__PURE__ */ (0, S.jsx)("button", {
								type: "button",
								onClick: () => M(O, "both", "sièges"),
								children: "Tous les sièges"
							}),
							/* @__PURE__ */ (0, S.jsx)("button", {
								type: "button",
								onClick: () => M(A, "color", "couleur"),
								children: "Couleur à tout l’habitacle"
							}),
							/* @__PURE__ */ (0, S.jsx)("button", {
								type: "button",
								onClick: () => M(A, "material", "matière"),
								children: "Matière à tout l’habitacle"
							})
						]
					})] })
				]
			}),
			/* @__PURE__ */ (0, S.jsxs)("footer", {
				className: "s3d-actions",
				children: [
					/* @__PURE__ */ (0, S.jsx)("button", {
						type: "button",
						className: "ghost",
						onClick: () => {
							g(), b("Configuration réinitialisée");
						},
						children: "Réinitialiser"
					}),
					/* @__PURE__ */ (0, S.jsx)("button", {
						type: "button",
						className: "ghost",
						onClick: v,
						children: "Enregistrer"
					}),
					/* @__PURE__ */ (0, S.jsx)("button", {
						type: "button",
						className: "ghost",
						onClick: () => b(y() ? "Configuration enregistrée rechargée" : "Aucune configuration enregistrée"),
						children: "Recharger"
					}),
					/* @__PURE__ */ (0, S.jsx)("button", {
						type: "button",
						className: "gold",
						onClick: () => x(!0),
						children: "Récapitulatif & devis"
					})
				]
			})
		]
	});
}
function j(e, t) {
	return e === "carbon" ? "#bbbbbb" : e === "brushed_alu" ? "#e3e6e8" : c[t]?.hex ?? "#888";
}
function M() {
	let e = u((e) => e.recapOpen), t = u((e) => e.setRecap), n = u((e) => e.config), r = u((e) => e.projectId), i = u((e) => e.snapshots), a = u((e) => e.setSnapshots), o = u((e) => e.say), [s, c] = (0, _.useState)(!1), l = (0, _.useMemo)(() => y(n), [n]), d = (0, _.useRef)(null);
	if ((0, _.useEffect)(() => {
		if (!e) return;
		let n = (e) => {
			e.key === "Escape" && t(!1);
		};
		return document.addEventListener("keydown", n), d.current?.focus(), () => document.removeEventListener("keydown", n);
	}, [e, t]), (0, _.useEffect)(() => {
		e && !i.length && g.current && (c(!0), g.current.capture().then(a).catch(() => o("Capture indisponible sur cet appareil")).finally(() => c(!1)));
	}, [
		e,
		i.length,
		a,
		o
	]), !e) return null;
	let f = () => {
		let e = new URL(location.href);
		return e.search = "", e.hash = "", e.searchParams.set("cfg", b(n, r)), e.toString();
	};
	return /* @__PURE__ */ (0, S.jsx)("div", {
		className: "s3d-modal",
		onMouseDown: (e) => {
			e.target === e.currentTarget && t(!1);
		},
		children: /* @__PURE__ */ (0, S.jsxs)("div", {
			className: "s3d-dialog",
			role: "dialog",
			"aria-modal": "true",
			"aria-label": "Récapitulatif de la configuration",
			tabIndex: -1,
			ref: d,
			children: [
				/* @__PURE__ */ (0, S.jsx)("button", {
					type: "button",
					className: "s3d-x",
					onClick: () => t(!1),
					"aria-label": "Fermer",
					children: "×"
				}),
				/* @__PURE__ */ (0, S.jsxs)("small", {
					className: "s3d-pid",
					children: ["Projet ", r]
				}),
				/* @__PURE__ */ (0, S.jsx)("h3", { children: "Votre configuration" }),
				/* @__PURE__ */ (0, S.jsx)("div", {
					className: "s3d-snaps",
					children: i.length ? i.map((e) => /* @__PURE__ */ (0, S.jsxs)("figure", { children: [/* @__PURE__ */ (0, S.jsx)("img", {
						src: e.url,
						alt: e.label
					}), /* @__PURE__ */ (0, S.jsx)("figcaption", { children: e.label })] }, e.view)) : /* @__PURE__ */ (0, S.jsx)("p", { children: s ? "Capture des rendus 3D…" : "Aucun rendu capturé." })
				}),
				/* @__PURE__ */ (0, S.jsx)("ul", { children: l.map((e) => /* @__PURE__ */ (0, S.jsx)("li", { children: e }, e)) }),
				/* @__PURE__ */ (0, S.jsx)("p", {
					className: "s3d-note",
					children: "Teintes et finitions indicatives : l’atelier confirme les références réelles lors du devis. Aucun prix n’est calculé automatiquement."
				}),
				/* @__PURE__ */ (0, S.jsxs)("div", {
					className: "s3d-actions row",
					children: [
						/* @__PURE__ */ (0, S.jsx)("button", {
							type: "button",
							className: "ghost",
							onClick: async () => {
								c(!0);
								try {
									a(await g.current.capture());
								} catch {
									o("Capture indisponible");
								} finally {
									c(!1);
								}
							},
							disabled: s,
							children: "Actualiser les rendus"
						}),
						/* @__PURE__ */ (0, S.jsx)("button", {
							type: "button",
							className: "ghost",
							onClick: async () => {
								try {
									await navigator.clipboard.writeText(f()), o("Lien de la configuration copié");
								} catch {
									o(f());
								}
							},
							children: "Copier le lien"
						}),
						i.length > 0 && /* @__PURE__ */ (0, S.jsx)("a", {
							className: "ghost",
							href: i[0].url,
							download: `selestic-${r}.jpg`,
							children: "Télécharger le rendu"
						}),
						/* @__PURE__ */ (0, S.jsx)("button", {
							type: "button",
							className: "gold",
							onClick: () => {
								try {
									sessionStorage.setItem("selestic-sim3d-snaps", JSON.stringify(i.map((e) => ({
										view: e.view,
										label: e.label,
										url: e.url
									}))));
								} catch {}
								let e = encodeURIComponent(JSON.stringify({
									v: 3,
									id: r,
									lines: l
								}));
								location.href = "devis.html?sim=" + e;
							},
							children: "Envoyer au devis"
						})
					]
				})
			]
		})
	});
}
function N() {
	let e = u((e) => e.toast), t = u((e) => e.say);
	return (0, _.useEffect)(() => {
		if (!e) return;
		let n = setTimeout(() => t(""), 3200);
		return () => clearTimeout(n);
	}, [e, t]), /* @__PURE__ */ (0, S.jsx)("div", {
		className: "s3d-toast" + (e ? " on" : ""),
		role: "status",
		"aria-live": "polite",
		children: e
	});
}
function P({ onError: e }) {
	return (0, _.useEffect)(() => {
		let t = new URLSearchParams(location.search).get("cfg"), n = u.getState();
		if (t) {
			let e = x(t);
			e && n.loadConfig(e.cfg, e.id);
		}
		i().webgl2 || e?.(/* @__PURE__ */ Error("webgl2"));
	}, [e]), /* @__PURE__ */ (0, S.jsxs)("div", {
		className: "s3d",
		children: [/* @__PURE__ */ (0, S.jsxs)(w, {
			onError: e,
			children: [
				/* @__PURE__ */ (0, S.jsx)(O, {}),
				/* @__PURE__ */ (0, S.jsx)(A, {}),
				/* @__PURE__ */ (0, S.jsx)(M, {}),
				/* @__PURE__ */ (0, S.jsx)(N, {})
			]
		}), /* @__PURE__ */ (0, S.jsx)("p", {
			className: "s3d-legal",
			children: "Aperçu 3D de démonstration sur habitacle générique — pas un modèle de véhicule précis. Teintes et finitions indicatives, confirmées par l’atelier. * Finition à valider avec l’atelier."
		})]
	});
}
//#endregion
//#region src/embed.tsx
function F() {
	return i().webgl2;
}
function I(e, t = {}) {
	if (t.modelUrl) try {
		let e = new URL(t.modelUrl, document.baseURI);
		e.origin === location.origin && u.getState().setModelUrl(e.href);
	} catch {}
	let n = (0, v.createRoot)(e);
	return n.render(/* @__PURE__ */ (0, S.jsx)(_.StrictMode, { children: /* @__PURE__ */ (0, S.jsx)(P, { onError: t.onError }) })), { unmount: () => n.unmount() };
}
//#endregion
export { I as mountSim3D, F as supported };
