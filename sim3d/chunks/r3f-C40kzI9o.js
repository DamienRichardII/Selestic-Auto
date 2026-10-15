import { r as e, t } from "./rolldown-runtime-Y_bBpyJl.js";
import { $ as n, $t as r, At as i, B as a, Bt as o, C as s, Ct as c, D as l, Dt as u, Et as d, F as f, Ft as p, G as m, Gt as h, H as g, Ht as _, I as v, It as y, J as b, Jt as x, Kt as S, Lt as C, Mt as w, N as T, Nt as E, O as D, Ot as ee, P as te, Pt as ne, Qt as re, R as O, Rt as k, S as ie, St as ae, T as oe, Tt as se, U as ce, Ut as le, V as ue, Vt as de, Wt as fe, X as pe, Xt as me, Y as he, Yt as ge, Z as _e, Zt as A, _ as ve, _t as ye, a as be, at as xe, b as Se, bt as Ce, c as j, cn as M, ct as we, d as Te, dn as Ee, dt as De, en as Oe, et as N, f as ke, fn as Ae, ft as je, g as Me, gt as Ne, h as Pe, ht as Fe, i as Ie, it as Le, jt as Re, k as ze, kt as Be, l as Ve, ln as He, lt as Ue, m as We, mt as P, n as Ge, nn as Ke, nt as qe, o as Je, on as Ye, ot as Xe, p as Ze, pt as Qe, q as $e, qt as et, r as tt, rt as nt, s as rt, sn as it, st as at, t as ot, tn as st, tt as ct, u as lt, un as ut, ut as dt, vt as ft, w as pt, wt as mt, x as ht, xt as gt, y as _t, yt as vt, zt as yt } from "./post-OfUYQ3IA.js";
//#region node_modules/react/cjs/react.production.js
var bt = /* @__PURE__ */ t(((e) => {
	var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.consumer"), s = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), f = Symbol.for("react.activity"), p = Symbol.for("react.view_transition"), m = Symbol.iterator;
	function h(e) {
		return typeof e != "object" || !e ? null : (e = m && e[m] || e["@@iterator"], typeof e == "function" ? e : null);
	}
	var g = {
		isMounted: function() {
			return !1;
		},
		enqueueForceUpdate: function() {},
		enqueueReplaceState: function() {},
		enqueueSetState: function() {}
	}, _ = Object.assign, v = {};
	function y(e, t, n) {
		this.props = e, this.context = t, this.refs = v, this.updater = n || g;
	}
	y.prototype.isReactComponent = {}, y.prototype.setState = function(e, t) {
		if (typeof e != "object" && typeof e != "function" && e != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
		this.updater.enqueueSetState(this, e, t, "setState");
	}, y.prototype.forceUpdate = function(e) {
		this.updater.enqueueForceUpdate(this, e, "forceUpdate");
	};
	function b() {}
	b.prototype = y.prototype;
	function x(e, t, n) {
		this.props = e, this.context = t, this.refs = v, this.updater = n || g;
	}
	var S = x.prototype = new b();
	S.constructor = x, _(S, y.prototype), S.isPureReactComponent = !0;
	var C = Array.isArray;
	function w() {}
	var T = {
		H: null,
		A: null,
		T: null,
		S: null
	}, E = Object.prototype.hasOwnProperty;
	function D(e, n, r) {
		var i = r.ref;
		return {
			$$typeof: t,
			type: e,
			key: n,
			ref: i === void 0 ? null : i,
			props: r
		};
	}
	function ee(e, t) {
		return D(e.type, t, e.props);
	}
	function te(e) {
		return typeof e == "object" && !!e && e.$$typeof === t;
	}
	function ne(e) {
		var t = {
			"=": "=0",
			":": "=2"
		};
		return "$" + e.replace(/[=:]/g, function(e) {
			return t[e];
		});
	}
	var re = /\/+/g;
	function O(e, t) {
		return typeof e == "object" && e && e.key != null ? ne("" + e.key) : t.toString(36);
	}
	function k(e) {
		switch (e.status) {
			case "fulfilled": return e.value;
			case "rejected": throw e.reason;
			default: switch (typeof e.status == "string" ? e.then(w, w) : (e.status = "pending", e.then(function(t) {
				e.status === "pending" && (e.status = "fulfilled", e.value = t);
			}, function(t) {
				e.status === "pending" && (e.status = "rejected", e.reason = t);
			})), e.status) {
				case "fulfilled": return e.value;
				case "rejected": throw e.reason;
			}
		}
		throw e;
	}
	function ie(e, r, i, a, o) {
		var s = typeof e;
		(s === "undefined" || s === "boolean") && (e = null);
		var c = !1;
		if (e === null) c = !0;
		else switch (s) {
			case "bigint":
			case "string":
			case "number":
				c = !0;
				break;
			case "object": switch (e.$$typeof) {
				case t:
				case n:
					c = !0;
					break;
				case d: return c = e._init, ie(c(e._payload), r, i, a, o);
			}
		}
		if (c) return o = o(e), c = a === "" ? "." + O(e, 0) : a, C(o) ? (i = "", c != null && (i = c.replace(re, "$&/") + "/"), ie(o, r, i, "", function(e) {
			return e;
		})) : o != null && (te(o) && (o = ee(o, i + (o.key == null || e && e.key === o.key ? "" : ("" + o.key).replace(re, "$&/") + "/") + c)), r.push(o)), 1;
		c = 0;
		var l = a === "" ? "." : a + ":";
		if (C(e)) for (var u = 0; u < e.length; u++) a = e[u], s = l + O(a, u), c += ie(a, r, i, s, o);
		else if (u = h(e), typeof u == "function") for (e = u.call(e), u = 0; !(a = e.next()).done;) a = a.value, s = l + O(a, u++), c += ie(a, r, i, s, o);
		else if (s === "object") {
			if (typeof e.then == "function") return ie(k(e), r, i, a, o);
			throw r = String(e), Error("Objects are not valid as a React child (found: " + (r === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : r) + "). If you meant to render a collection of children, use an array instead.");
		}
		return c;
	}
	function ae(e, t, n) {
		if (e == null) return e;
		var r = [], i = 0;
		return ie(e, r, "", "", function(e) {
			return t.call(n, e, i++);
		}), r;
	}
	function oe(e) {
		if (e._status === -1) {
			var t = e._result, n = t();
			n.then(function(t) {
				(e._status === 0 || e._status === -1) && (e._status = 1, e._result = t, n.status === void 0 && (n.status = "fulfilled", n.value = t));
			}, function(t) {
				(e._status === 0 || e._status === -1) && (e._status = 2, e._result = t, n.status === void 0 && (n.status = "rejected", n.reason = t));
			}), e._status === -1 && (e._status = 0, e._result = n);
		}
		if (e._status === 1) return e._result.default;
		throw e._result;
	}
	var se = typeof reportError == "function" ? reportError : function(e) {
		if (typeof window == "object" && typeof window.ErrorEvent == "function") {
			var t = new window.ErrorEvent("error", {
				bubbles: !0,
				cancelable: !0,
				message: typeof e == "object" && e && typeof e.message == "string" ? String(e.message) : String(e),
				error: e
			});
			if (!window.dispatchEvent(t)) return;
		} else if (typeof process == "object" && typeof process.emit == "function") {
			process.emit("uncaughtException", e);
			return;
		}
		console.error(e);
	};
	function ce(e) {
		var t = T.T, n = {};
		n.types = t === null ? null : t.types, T.T = n;
		try {
			var r = e(), i = T.S;
			i !== null && i(n, r), typeof r == "object" && r && typeof r.then == "function" && r.then(w, se);
		} catch (e) {
			se(e);
		} finally {
			t !== null && n.types !== null && (t.types = n.types), T.T = t;
		}
	}
	function le(e) {
		var t = T.T;
		if (t !== null) {
			var n = t.types;
			n === null ? t.types = [e] : n.indexOf(e) === -1 && n.push(e);
		} else ce(le.bind(null, e));
	}
	var ue = {
		map: ae,
		forEach: function(e, t, n) {
			ae(e, function() {
				t.apply(this, arguments);
			}, n);
		},
		count: function(e) {
			var t = 0;
			return ae(e, function() {
				t++;
			}), t;
		},
		toArray: function(e) {
			return ae(e, function(e) {
				return e;
			}) || [];
		},
		only: function(e) {
			if (!te(e)) throw Error("React.Children.only expected to receive a single React element child.");
			return e;
		}
	};
	e.Activity = f, e.Children = ue, e.Component = y, e.Fragment = r, e.Profiler = a, e.PureComponent = x, e.StrictMode = i, e.Suspense = l, e.ViewTransition = p, e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = T, e.__COMPILER_RUNTIME = {
		__proto__: null,
		c: function(e) {
			return T.H.useMemoCache(e);
		}
	}, e.addTransitionType = le, e.cache = function(e) {
		return function() {
			return e.apply(null, arguments);
		};
	}, e.cacheSignal = function() {
		return null;
	}, e.cloneElement = function(e, t, n) {
		if (e == null) throw Error("The argument must be a React element, but you passed " + e + ".");
		var r = _({}, e.props), i = e.key;
		if (t != null) for (a in t.key !== void 0 && (i = "" + t.key), t) !E.call(t, a) || a === "key" || a === "__self" || a === "__source" || a === "ref" && t.ref === void 0 || (r[a] = t[a]);
		var a = arguments.length - 2;
		if (a === 1) r.children = n;
		else if (1 < a) {
			for (var o = Array(a), s = 0; s < a; s++) o[s] = arguments[s + 2];
			r.children = o;
		}
		return D(e.type, i, r);
	}, e.createContext = function(e) {
		return e = {
			$$typeof: s,
			_currentValue: e,
			_currentValue2: e,
			_threadCount: 0,
			Provider: null,
			Consumer: null
		}, e.Provider = e, e.Consumer = {
			$$typeof: o,
			_context: e
		}, e;
	}, e.createElement = function(e, t, n) {
		var r, i = {}, a = null;
		if (t != null) for (r in t.key !== void 0 && (a = "" + t.key), t) E.call(t, r) && r !== "key" && r !== "__self" && r !== "__source" && (i[r] = t[r]);
		var o = arguments.length - 2;
		if (o === 1) i.children = n;
		else if (1 < o) {
			for (var s = Array(o), c = 0; c < o; c++) s[c] = arguments[c + 2];
			i.children = s;
		}
		if (e && e.defaultProps) for (r in o = e.defaultProps, o) i[r] === void 0 && (i[r] = o[r]);
		return D(e, a, i);
	}, e.createRef = function() {
		return { current: null };
	}, e.forwardRef = function(e) {
		return {
			$$typeof: c,
			render: e
		};
	}, e.isValidElement = te, e.lazy = function(e) {
		return {
			$$typeof: d,
			_payload: {
				_status: -1,
				_result: e
			},
			_init: oe
		};
	}, e.memo = function(e, t) {
		return {
			$$typeof: u,
			type: e,
			compare: t === void 0 ? null : t
		};
	}, e.startTransition = ce, e.unstable_useCacheRefresh = function() {
		return T.H.useCacheRefresh();
	}, e.use = function(e) {
		return T.H.use(e);
	}, e.useActionState = function(e, t, n) {
		return T.H.useActionState(e, t, n);
	}, e.useCallback = function(e, t) {
		return T.H.useCallback(e, t);
	}, e.useContext = function(e) {
		return T.H.useContext(e);
	}, e.useDebugValue = function() {}, e.useDeferredValue = function(e, t) {
		return T.H.useDeferredValue(e, t);
	}, e.useEffect = function(e, t) {
		return T.H.useEffect(e, t);
	}, e.useEffectEvent = function(e) {
		return T.H.useEffectEvent(e);
	}, e.useId = function() {
		return T.H.useId();
	}, e.useImperativeHandle = function(e, t, n) {
		return T.H.useImperativeHandle(e, t, n);
	}, e.useInsertionEffect = function(e, t) {
		return T.H.useInsertionEffect(e, t);
	}, e.useLayoutEffect = function(e, t) {
		return T.H.useLayoutEffect(e, t);
	}, e.useMemo = function(e, t) {
		return T.H.useMemo(e, t);
	}, e.useOptimistic = function(e, t) {
		return T.H.useOptimistic(e, t);
	}, e.useReducer = function(e, t, n) {
		return T.H.useReducer(e, t, n);
	}, e.useRef = function(e) {
		return T.H.useRef(e);
	}, e.useState = function(e) {
		return T.H.useState(e);
	}, e.useSyncExternalStore = function(e, t, n) {
		return T.H.useSyncExternalStore(e, t, n);
	}, e.useTransition = function() {
		return T.H.useTransition();
	}, e.version = "19.3.1";
})), xt = /* @__PURE__ */ t(((e, t) => {
	t.exports = bt();
})), St = /* @__PURE__ */ t(((e) => {
	function t(e, t) {
		var n = e.length;
		e.push(t);
		a: for (; 0 < n;) {
			var r = n - 1 >>> 1, a = e[r];
			if (0 < i(a, t)) e[r] = t, e[n] = a, n = r;
			else break a;
		}
	}
	function n(e) {
		return e.length === 0 ? null : e[0];
	}
	function r(e) {
		if (e.length === 0) return null;
		var t = e[0], n = e.pop();
		if (n !== t) {
			e[0] = n;
			a: for (var r = 0, a = e.length, o = a >>> 1; r < o;) {
				var s = 2 * (r + 1) - 1, c = e[s], l = s + 1, u = e[l];
				if (0 > i(c, n)) l < a && 0 > i(u, c) ? (e[r] = u, e[l] = n, r = l) : (e[r] = c, e[s] = n, r = s);
				else if (l < a && 0 > i(u, n)) e[r] = u, e[l] = n, r = l;
				else break a;
			}
		}
		return t;
	}
	function i(e, t) {
		var n = e.sortIndex - t.sortIndex;
		return n === 0 ? e.id - t.id : n;
	}
	if (e.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
		var a = performance;
		e.unstable_now = function() {
			return a.now();
		};
	} else {
		var o = Date, s = o.now();
		e.unstable_now = function() {
			return o.now() - s;
		};
	}
	var c = [], l = [], u = 1, d = null, f = 3, p = !1, m = !1, h = !1, g = !1, _ = typeof setTimeout == "function" ? setTimeout : null, v = typeof clearTimeout == "function" ? clearTimeout : null, y = typeof setImmediate < "u" ? setImmediate : null;
	function b(e) {
		for (var i = n(l); i !== null;) {
			if (i.callback === null) r(l);
			else if (i.startTime <= e) r(l), i.sortIndex = i.expirationTime, t(c, i);
			else break;
			i = n(l);
		}
	}
	function x(e) {
		if (h = !1, b(e), !m) {
			if (n(c) !== null) m = !0, S || (S = !0, ee());
			else {
				var t = n(l);
				t !== null && re(x, t.startTime - e);
			}
		}
	}
	var S = !1, C = -1, w = 5, T = -1;
	function E() {
		return g ? !0 : !(e.unstable_now() - T < w);
	}
	function D() {
		if (g = !1, S) {
			var t = e.unstable_now();
			T = t;
			var i = !0;
			try {
				a: {
					m = !1, h && (h = !1, v(C), C = -1), p = !0;
					var a = f;
					try {
						b: {
							for (b(t), d = n(c); d !== null && !(d.expirationTime > t && E());) {
								var o = d.callback;
								if (typeof o == "function") {
									d.callback = null, f = d.priorityLevel;
									var s = o(d.expirationTime <= t);
									if (t = e.unstable_now(), typeof s == "function") {
										d.callback = s, b(t), i = !0;
										break b;
									}
									d === n(c) && r(c), b(t);
								} else r(c);
								d = n(c);
							}
							if (d !== null) i = !0;
							else {
								var u = n(l);
								u !== null && re(x, u.startTime - t), i = !1;
							}
						}
						break a;
					} finally {
						d = null, f = a, p = !1;
					}
					i = void 0;
				}
			} finally {
				i ? ee() : S = !1;
			}
		}
	}
	var ee;
	if (typeof y == "function") ee = function() {
		y(D);
	};
	else if (typeof MessageChannel < "u") {
		var te = new MessageChannel(), ne = te.port2;
		te.port1.onmessage = D, ee = function() {
			ne.postMessage(null);
		};
	} else ee = function() {
		_(D, 0);
	};
	function re(t, n) {
		C = _(function() {
			t(e.unstable_now());
		}, n);
	}
	e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(e) {
		e.callback = null;
	}, e.unstable_forceFrameRate = function(e) {
		0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : w = 0 < e ? Math.floor(1e3 / e) : 5;
	}, e.unstable_getCurrentPriorityLevel = function() {
		return f;
	}, e.unstable_next = function(e) {
		switch (f) {
			case 1:
			case 2:
			case 3:
				var t = 3;
				break;
			default: t = f;
		}
		var n = f;
		f = t;
		try {
			return e();
		} finally {
			f = n;
		}
	}, e.unstable_requestPaint = function() {
		g = !0;
	}, e.unstable_runWithPriority = function(e, t) {
		switch (e) {
			case 1:
			case 2:
			case 3:
			case 4:
			case 5: break;
			default: e = 3;
		}
		var n = f;
		f = e;
		try {
			return t();
		} finally {
			f = n;
		}
	}, e.unstable_scheduleCallback = function(r, i, a) {
		var o = e.unstable_now();
		switch (typeof a == "object" && a ? (a = a.delay, a = typeof a == "number" && 0 < a ? o + a : o) : a = o, r) {
			case 1:
				var s = -1;
				break;
			case 2:
				s = 250;
				break;
			case 5:
				s = 1073741823;
				break;
			case 4:
				s = 1e4;
				break;
			default: s = 5e3;
		}
		return s = a + s, r = {
			id: u++,
			callback: i,
			priorityLevel: r,
			startTime: a,
			expirationTime: s,
			sortIndex: -1
		}, a > o ? (r.sortIndex = a, t(l, r), n(c) === null && r === n(l) && (h ? (v(C), C = -1) : h = !0, re(x, a - o))) : (r.sortIndex = s, t(c, r), m || p || (m = !0, S || (S = !0, ee()))), r;
	}, e.unstable_shouldYield = E, e.unstable_wrapCallback = function(e) {
		var t = f;
		return function() {
			var n = f;
			f = t;
			try {
				return e.apply(this, arguments);
			} finally {
				f = n;
			}
		};
	};
})), Ct = /* @__PURE__ */ t(((e, t) => {
	t.exports = St();
})), wt = /* @__PURE__ */ t(((e) => {
	var t = xt();
	function n(e) {
		var t = "https://react.dev/errors/" + e;
		if (1 < arguments.length) {
			t += "?args[]=" + encodeURIComponent(arguments[1]);
			for (var n = 2; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
		}
		return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
	}
	function r() {}
	var i = {
		d: {
			f: r,
			r: function() {
				throw Error(n(522));
			},
			D: r,
			C: r,
			L: r,
			m: r,
			X: r,
			S: r,
			M: r
		},
		p: 0,
		findDOMNode: null
	}, a = Symbol.for("react.portal"), o = Symbol.for("react.recoverable"), s = Symbol.for("react.optimistic_key");
	function c(e, t, n) {
		var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
		return {
			$$typeof: a,
			key: r == null ? null : r === s ? s : "" + r,
			children: e,
			containerInfo: t,
			implementation: n
		};
	}
	var l = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
	function u(e, t) {
		if (e === "font") return "";
		if (typeof t == "string") return t === "use-credentials" ? t : "";
	}
	e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i, e.browser = function(e) {
		return {
			$$typeof: o,
			_reason: e
		};
	}, e.createPortal = function(e, t) {
		var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
		if (!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11) throw Error(n(299));
		return c(e, t, null, r);
	}, e.flushSync = function(e) {
		var t = l.T, n = i.p;
		try {
			if (l.T = null, i.p = 2, e) return e();
		} finally {
			l.T = t, i.p = n, i.d.f();
		}
	}, e.preconnect = function(e, t) {
		typeof e == "string" && (t ? (t = t.crossOrigin, t = typeof t == "string" ? t === "use-credentials" ? t : "" : void 0) : t = null, i.d.C(e, t));
	}, e.prefetchDNS = function(e) {
		typeof e == "string" && i.d.D(e);
	}, e.preinit = function(e, t) {
		if (typeof e == "string" && t && typeof t.as == "string") {
			var n = t.as, r = u(n, t.crossOrigin), a = typeof t.integrity == "string" ? t.integrity : void 0, o = typeof t.fetchPriority == "string" ? t.fetchPriority : void 0;
			n === "style" ? i.d.S(e, typeof t.precedence == "string" ? t.precedence : void 0, {
				crossOrigin: r,
				integrity: a,
				fetchPriority: o
			}) : n === "script" && i.d.X(e, {
				crossOrigin: r,
				integrity: a,
				fetchPriority: o,
				nonce: typeof t.nonce == "string" ? t.nonce : void 0
			});
		}
	}, e.preinitModule = function(e, t) {
		if (typeof e == "string") {
			if (typeof t == "object" && t) {
				if (t.as == null || t.as === "script") {
					var n = u(t.as, t.crossOrigin);
					i.d.M(e, {
						crossOrigin: n,
						integrity: typeof t.integrity == "string" ? t.integrity : void 0,
						nonce: typeof t.nonce == "string" ? t.nonce : void 0,
						fetchPriority: typeof t.fetchPriority == "string" ? t.fetchPriority : void 0
					});
				}
			} else t ?? i.d.M(e);
		}
	}, e.preload = function(e, t) {
		if (typeof e == "string" && typeof t == "object" && t && typeof t.as == "string") {
			var n = t.as, r = u(n, t.crossOrigin);
			i.d.L(e, n, {
				crossOrigin: r,
				integrity: typeof t.integrity == "string" ? t.integrity : void 0,
				nonce: typeof t.nonce == "string" ? t.nonce : void 0,
				type: typeof t.type == "string" ? t.type : void 0,
				fetchPriority: typeof t.fetchPriority == "string" ? t.fetchPriority : void 0,
				referrerPolicy: typeof t.referrerPolicy == "string" ? t.referrerPolicy : void 0,
				imageSrcSet: typeof t.imageSrcSet == "string" ? t.imageSrcSet : void 0,
				imageSizes: typeof t.imageSizes == "string" ? t.imageSizes : void 0,
				media: typeof t.media == "string" ? t.media : void 0
			});
		}
	}, e.preloadModule = function(e, t) {
		if (typeof e == "string") {
			if (t) {
				var n = u(t.as, t.crossOrigin);
				i.d.m(e, {
					as: typeof t.as == "string" && t.as !== "script" ? t.as : void 0,
					crossOrigin: n,
					integrity: typeof t.integrity == "string" ? t.integrity : void 0,
					nonce: typeof t.nonce == "string" ? t.nonce : void 0,
					fetchPriority: typeof t.fetchPriority == "string" ? t.fetchPriority : void 0
				});
			} else i.d.m(e);
		}
	}, e.requestFormReset = function(e) {
		i.d.r(e);
	}, e.unstable_batchedUpdates = function(e, t) {
		return e(t);
	}, e.useFormState = function(e, t, n) {
		return l.H.useFormState(e, t, n);
	}, e.useFormStatus = function() {
		return l.H.useHostTransitionStatus();
	}, e.version = "19.3.1";
})), Tt = /* @__PURE__ */ t(((e, t) => {
	function n() {
		if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE == "function") try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
		} catch (e) {
			console.error(e);
		}
	}
	n(), t.exports = wt();
})), Et = /* @__PURE__ */ t(((e) => {
	var t = Ct(), n = xt(), r = Tt();
	function i(e) {
		var t = "https://react.dev/errors/" + e;
		if (1 < arguments.length) {
			t += "?args[]=" + encodeURIComponent(arguments[1]);
			for (var n = 2; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
		}
		return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
	}
	function a(e) {
		return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
	}
	function o(e) {
		for (var t = e, n = t; n && !n.alternate;) t = n, t.flags & 4098 && (e = t.return), n = t.return;
		for (; t.return;) t = t.return;
		return t.tag === 3 ? e : null;
	}
	function s(e) {
		if (e.tag === 13) {
			var t = e.memoizedState;
			if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
		}
		return null;
	}
	function c(e) {
		if (e.tag === 31) {
			var t = e.memoizedState;
			if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
		}
		return null;
	}
	function l(e) {
		if (o(e) !== e) throw Error(i(188));
	}
	function u(e) {
		var t = e.alternate;
		if (!t) {
			if (t = o(e), t === null) throw Error(i(188));
			return t === e ? e : null;
		}
		for (var n = e, r = t;;) {
			var a = n.return;
			if (a === null) break;
			var s = a.alternate;
			if (s === null) {
				if (r = a.return, r !== null) {
					n = r;
					continue;
				}
				break;
			}
			if (a.child === s.child) {
				for (s = a.child; s;) {
					if (s === n) return l(a), e;
					if (s === r) return l(a), t;
					s = s.sibling;
				}
				throw Error(i(188));
			}
			if (n.return !== r.return) n = a, r = s;
			else {
				for (var c = !1, u = a.child; u;) {
					if (u === n) {
						c = !0, n = a, r = s;
						break;
					}
					if (u === r) {
						c = !0, r = a, n = s;
						break;
					}
					u = u.sibling;
				}
				if (!c) {
					for (u = s.child; u;) {
						if (u === n) {
							c = !0, n = s, r = a;
							break;
						}
						if (u === r) {
							c = !0, r = s, n = a;
							break;
						}
						u = u.sibling;
					}
					if (!c) throw Error(i(189));
				}
			}
			if (n.alternate !== r) throw Error(i(190));
		}
		if (n.tag !== 3) throw Error(i(188));
		return n.stateNode.current === n ? e : t;
	}
	function d(e) {
		var t = e.tag;
		if (t === 5 || t === 26 || t === 27 || t === 6) return e;
		for (e = e.child; e !== null;) {
			if (t = d(e), t !== null) return t;
			e = e.sibling;
		}
		return null;
	}
	function f(e, t, n, r, i, a) {
		for (; e !== null;) {
			if ((e.tag === 5 || e.tag === 27 || e.tag === 6) && n(e, r, i, a) || (e.tag !== 22 || e.memoizedState === null) && (t || e.tag !== 5 && e.tag !== 27) && f(e.child, t, n, r, i, a)) return !0;
			e = e.sibling;
		}
		return !1;
	}
	function p(e) {
		for (e = e.return; e !== null;) {
			if (e.tag === 3 || e.tag === 5 || e.tag === 27) return e;
			e = e.return;
		}
		return null;
	}
	function m(e) {
		var t = !1;
		for (e = e.return; e !== null && (e.tag === 4 && (t = !0), e.tag !== 3 && e.tag !== 5 && e.tag !== 27);) e = e.return;
		return t;
	}
	function h(e) {
		var t = [null, null], n = p(e);
		return n === null || g(t, e, n.child, { foundSelf: !1 }), t;
	}
	function g(e, t, n, r) {
		for (; n !== null;) {
			if (n === t) r.foundSelf = !0;
			else if (n.tag === 5 || n.tag === 27 || n.tag === 6) {
				if (r.foundSelf) return e[1] = n, !0;
				e[0] = n;
			} else if ((n.tag !== 22 || n.memoizedState === null) && g(e, t, n.child, r)) return !0;
			n = n.sibling;
		}
		return !1;
	}
	function _(e) {
		switch (e.tag) {
			case 5:
			case 27:
			case 6: return e.stateNode;
			case 3: return e.stateNode.containerInfo;
			default: throw Error(i(559));
		}
	}
	var v = null, y = null;
	function b(e, t, n) {
		return e === n || e === t && (v = e, !0);
	}
	function x(e, t, n) {
		return e === n ? (y = e, !1) : e === t && (y !== null && (v = e), !0);
	}
	function S(e) {
		if (e === null) return null;
		do
			e = e === null ? null : e.return;
		while (e && e.tag !== 5 && e.tag !== 27 && e.tag !== 3);
		return e || null;
	}
	function C(e, t, n) {
		for (var r = 0, i = e; i; i = n(i)) r++;
		i = 0;
		for (var a = t; a; a = n(a)) i++;
		for (; 0 < r - i;) e = n(e), r--;
		for (; 0 < i - r;) t = n(t), i--;
		for (; r--;) {
			if (e === t || t !== null && e === t.alternate) return e;
			e = n(e), t = n(t);
		}
		return null;
	}
	var w = Object.assign, T = Symbol.for("react.element"), E = Symbol.for("react.transitional.element"), D = Symbol.for("react.portal"), ee = Symbol.for("react.fragment"), te = Symbol.for("react.strict_mode"), ne = Symbol.for("react.profiler"), re = Symbol.for("react.consumer"), O = Symbol.for("react.context"), k = Symbol.for("react.forward_ref"), ie = Symbol.for("react.suspense"), ae = Symbol.for("react.suspense_list"), oe = Symbol.for("react.memo"), se = Symbol.for("react.lazy"), ce = Symbol.for("react.activity"), le = Symbol.for("react.legacy_hidden"), ue = Symbol.for("react.memo_cache_sentinel"), de = Symbol.for("react.view_transition"), fe = Symbol.for("react.recoverable"), pe = Symbol.iterator;
	function me(e) {
		return typeof e != "object" || !e ? null : (e = pe && e[pe] || e["@@iterator"], typeof e == "function" ? e : null);
	}
	var he = Symbol.for("react.client.reference");
	function ge(e) {
		if (e == null) return null;
		if (typeof e == "function") return e.$$typeof === he ? null : e.displayName || e.name || null;
		if (typeof e == "string") return e;
		switch (e) {
			case ee: return "Fragment";
			case ne: return "Profiler";
			case te: return "StrictMode";
			case ie: return "Suspense";
			case ae: return "SuspenseList";
			case ce: return "Activity";
			case de: return "ViewTransition";
		}
		if (typeof e == "object") switch (e.$$typeof) {
			case D: return "Portal";
			case O: return e.displayName || "Context";
			case re: return (e._context.displayName || "Context") + ".Consumer";
			case k:
				var t = e.render;
				return e = e.displayName, e ||= (e = t.displayName || t.name || "", e === "" ? "ForwardRef" : "ForwardRef(" + e + ")"), e;
			case oe: return t = e.displayName || null, t === null ? ge(e.type) || "Memo" : t;
			case se:
				t = e._payload, e = e._init;
				try {
					return ge(e(t));
				} catch {}
		}
		return null;
	}
	var _e = Array.isArray, A = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ve = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ye = {
		pending: !1,
		data: null,
		method: null,
		action: null
	}, be = [], xe = -1;
	function Se(e) {
		return { current: e };
	}
	function Ce(e) {
		0 > xe || (e.current = be[xe], be[xe] = null, xe--);
	}
	function j(e, t) {
		xe++, be[xe] = e.current, e.current = t;
	}
	var M = Se(null), we = Se(null), Te = Se(null), Ee = Se(null);
	function De(e, t) {
		switch (j(Te, t), j(we, e), j(M, null), t.nodeType) {
			case 9:
			case 11:
				e = (e = t.documentElement) && (e = e.namespaceURI) ? up(e) : 0;
				break;
			default: if (e = t.tagName, t = t.namespaceURI) t = up(t), e = dp(t, e);
			else switch (e) {
				case "svg":
					e = 1;
					break;
				case "math":
					e = 2;
					break;
				default: e = 0;
			}
		}
		Ce(M), j(M, e);
	}
	function Oe() {
		Ce(M), Ce(we), Ce(Te);
	}
	function N(e) {
		var t = e.memoizedState;
		t !== null && (sh._currentValue = t.memoizedState, j(Ee, e)), t = M.current;
		var n = dp(t, e.type);
		t !== n && (j(we, e), j(M, n));
	}
	function ke(e) {
		we.current === e && (Ce(M), Ce(we)), Ee.current === e && (Ce(Ee), sh._currentValue = ye);
	}
	var Ae, je;
	function Me(e) {
		if (Ae === void 0) try {
			throw Error();
		} catch (e) {
			var t = e.stack.trim().match(/\n( *(at )?)/);
			Ae = t && t[1] || "", je = -1 < e.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : "";
		}
		return "\n" + Ae + e + je;
	}
	var Ne = !1;
	function Pe(e, t) {
		if (!e || Ne) return "";
		Ne = !0;
		var n = Error.prepareStackTrace;
		Error.prepareStackTrace = void 0;
		try {
			var r = { DetermineComponentFrameRoot: function() {
				try {
					if (t) {
						var n = function() {
							throw Error();
						};
						if (Object.defineProperty(n.prototype, "props", { set: function() {
							throw Error();
						} }), typeof Reflect == "object" && Reflect.construct) {
							try {
								Reflect.construct(n, []);
							} catch (e) {
								var r = e;
							}
							Reflect.construct(e, [], n);
						} else {
							try {
								n.call();
							} catch (e) {
								r = e;
							}
							n = !1;
							try {
								var i = Object.getOwnPropertyDescriptor(e.prototype, "props");
								Object.defineProperty(e.prototype, "props", {
									configurable: !0,
									set: function() {
										throw Error();
									}
								}), n = !0, new e();
							} finally {
								n && (i === void 0 ? delete e.prototype.props : Object.defineProperty(e.prototype, "props", i));
							}
						}
					} else {
						try {
							throw Error();
						} catch (e) {
							r = e;
						}
						(n = e()) && typeof n.catch == "function" && n.catch(function() {});
					}
				} catch (e) {
					if (e && r && typeof e.stack == "string") return [e.stack, r.stack];
				}
				return [null, null];
			} };
			r.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
			var i = Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot, "name");
			i && i.configurable && Object.defineProperty(r.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
			var a = r.DetermineComponentFrameRoot(), o = a[0], s = a[1];
			if (o && s) {
				var c = o.split("\n"), l = s.split("\n");
				for (i = r = 0; r < c.length && !c[r].includes("DetermineComponentFrameRoot");) r++;
				for (; i < l.length && !l[i].includes("DetermineComponentFrameRoot");) i++;
				if (r === c.length || i === l.length) for (r = c.length - 1, i = l.length - 1; 1 <= r && 0 <= i && c[r] !== l[i];) i--;
				for (; 1 <= r && 0 <= i; r--, i--) if (c[r] !== l[i]) {
					if (r !== 1 || i !== 1) do
						if (r--, i--, 0 > i || c[r] !== l[i]) {
							var u = "\n" + c[r].replace(" at new ", " at ");
							return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u;
						}
					while (1 <= r && 0 <= i);
					break;
				}
			}
		} finally {
			Ne = !1, Error.prepareStackTrace = n;
		}
		return (n = e ? e.displayName || e.name : "") ? Me(n) : "";
	}
	function Fe(e, t) {
		switch (e.tag) {
			case 26:
			case 27:
			case 5: return Me(e.type);
			case 16: return Me("Lazy");
			case 13: return e.child !== t && t !== null ? Me("Suspense Fallback") : Me("Suspense");
			case 19: return Me("SuspenseList");
			case 0:
			case 15: return Pe(e.type, !1);
			case 11: return Pe(e.type.render, !1);
			case 1: return Pe(e.type, !0);
			case 31: return Me("Activity");
			case 30: return Me("ViewTransition");
			default: return "";
		}
	}
	function Ie(e) {
		try {
			var t = "", n = null;
			do
				t += Fe(e, n), n = e, e = e.return;
			while (e);
			return t;
		} catch (e) {
			return "\nError generating stack: " + e.message + "\n" + e.stack;
		}
	}
	var Le = Object.prototype.hasOwnProperty, Re = t.unstable_scheduleCallback, ze = t.unstable_cancelCallback, Be = t.unstable_shouldYield, Ve = t.unstable_requestPaint, He = t.unstable_now, Ue = t.unstable_getCurrentPriorityLevel, We = t.unstable_ImmediatePriority, P = t.unstable_UserBlockingPriority, Ge = t.unstable_NormalPriority, Ke = t.unstable_LowPriority, qe = t.unstable_IdlePriority, Je = t.log, Ye = t.unstable_setDisableYieldValue, Xe = null, Ze = null;
	function Qe(e) {
		if (typeof Je == "function" && Ye(e), Ze && typeof Ze.setStrictMode == "function") try {
			Ze.setStrictMode(Xe, e);
		} catch {}
	}
	var $e = Math.clz32 ? Math.clz32 : nt, et = Math.log, tt = Math.LN2;
	function nt(e) {
		return e >>>= 0, e === 0 ? 32 : 31 - (et(e) / tt | 0) | 0;
	}
	var rt = 256, it = 262144, at = 4194304;
	function ot(e) {
		var t = e & 42;
		if (t !== 0) return t;
		switch (e & -e) {
			case 1: return 1;
			case 2: return 2;
			case 4: return 4;
			case 8: return 8;
			case 16: return 16;
			case 32: return 32;
			case 64: return 64;
			case 128: return 128;
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072: return e & -e;
			case 262144:
			case 524288:
			case 1048576:
			case 2097152: return e & 3932160;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432: return e & 62914560;
			case 67108864: return 67108864;
			case 134217728: return 134217728;
			case 268435456: return 268435456;
			case 536870912: return 536870912;
			case 1073741824: return 0;
			default: return e;
		}
	}
	function st(e, t, n) {
		var r = e.pendingLanes;
		if (r === 0) return 0;
		var i = 0, a = e.suspendedLanes, o = e.pingedLanes;
		e = e.warmLanes;
		var s = r & 134217727;
		return s === 0 ? (s = r & ~a, s === 0 ? o === 0 ? n || (n = r & ~e, n !== 0 && (i = ot(n))) : i = ot(o) : i = ot(s)) : (r = s & ~a, r === 0 ? (o &= s, o === 0 ? n || (n = s & ~e, n !== 0 && (i = ot(n))) : i = ot(o)) : i = ot(r)), i === 0 ? 0 : t !== 0 && t !== i && (t & a) === 0 && (a = i & -i, n = t & -t, a >= n || a === 32 && n & 4194048) ? t : i;
	}
	function ct(e, t) {
		return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
	}
	function lt(e, t) {
		t & 8 && (t |= t & 32);
		var n = e.entangledLanes;
		if (n !== 0) for (e = e.entanglements, n &= t; 0 < n;) {
			var r = 31 - $e(n), i = 1 << r;
			t |= e[r], n &= ~i;
		}
		return t;
	}
	function ut(e, t) {
		switch (e) {
			case 1:
			case 2:
			case 4:
			case 8:
			case 64: return t + 250;
			case 16:
			case 32:
			case 128:
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152: return t + 5e3;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432: return -1;
			case 67108864:
			case 134217728:
			case 268435456:
			case 536870912:
			case 1073741824: return -1;
			default: return -1;
		}
	}
	function dt() {
		var e = at;
		return at <<= 1, !(at & 62914560) && (at = 4194304), e;
	}
	function ft(e) {
		for (var t = [], n = 0; 31 > n; n++) t.push(e);
		return t;
	}
	function pt(e, t) {
		e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
	}
	function mt(e, t, n, r, i, a) {
		var o = e.pendingLanes;
		e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
		var s = e.entanglements, c = e.expirationTimes, l = e.hiddenUpdates;
		for (n = o & ~n; 0 < n;) {
			var u = 31 - $e(n), d = 1 << u;
			s[u] = 0, c[u] = -1;
			var f = l[u];
			if (f !== null) for (l[u] = null, u = 0; u < f.length; u++) {
				var p = f[u];
				p !== null && (p.lane &= -536870913);
			}
			n &= ~d;
		}
		r !== 0 && ht(e, r, 0), a !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= a & ~(o & ~t));
	}
	function ht(e, t, n) {
		e.pendingLanes |= t, e.suspendedLanes &= ~t;
		var r = 31 - $e(t);
		e.entangledLanes |= t, e.entanglements[r] = e.entanglements[r] | 1073741824 | n & 261930;
	}
	function gt(e, t) {
		var n = e.entangledLanes |= t;
		for (e = e.entanglements; n;) {
			var r = 31 - $e(n), i = 1 << r;
			i & t | e[r] & t && (e[r] |= t), n &= ~i;
		}
	}
	function _t(e, t) {
		var n = t & -t;
		return n = n & 42 ? 1 : vt(n), (n & (e.suspendedLanes | t)) === 0 ? n : 0;
	}
	function vt(e) {
		switch (e) {
			case 2:
				e = 1;
				break;
			case 8:
				e = 4;
				break;
			case 32:
				e = 16;
				break;
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152:
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
				e = 128;
				break;
			case 268435456:
				e = 134217728;
				break;
			default: e = 0;
		}
		return e;
	}
	function yt(e) {
		return e &= -e, 2 < e ? 8 < e ? e & 134217727 ? 32 : 268435456 : 8 : 2;
	}
	function bt() {
		var e = ve.p;
		return e === 0 ? (e = window.event, e === void 0 ? 32 : Ch(e.type)) : e;
	}
	function St(e, t) {
		var n = ve.p;
		try {
			return ve.p = e, t();
		} finally {
			ve.p = n;
		}
	}
	var wt = Math.random().toString(36).slice(2), Et = "__reactFiber$" + wt, Dt = "__reactProps$" + wt, F = "__reactContainer$" + wt, Ot = "__reactEvents$" + wt, kt = "__reactListeners$" + wt, At = "__reactHandles$" + wt, jt = "__reactResources$" + wt, Mt = "__reactMarker$" + wt, Nt = "__reactLoad$" + wt;
	function Pt(e) {
		delete e[Et], delete e[Dt], delete e[kt], delete e[At];
	}
	function Ft(e) {
		var t;
		if (t = e[Et]) return t;
		for (var n = e.parentNode; n;) {
			if (t = n[F] || n[Et]) {
				if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = fm(e); e !== null;) {
					if (n = e[Et]) return n;
					e = fm(e);
				}
				return t;
			}
			e = n, n = e.parentNode;
		}
		return null;
	}
	function It(e) {
		if (e = e[Et] || e[F]) {
			var t = e.tag;
			if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e;
		}
		return null;
	}
	function I(e) {
		var t = e.tag;
		if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
		throw Error(i(33));
	}
	function Lt(e) {
		var t = e[jt];
		return t ||= e[jt] = {
			hoistableStyles: /* @__PURE__ */ new Map(),
			hoistableScripts: /* @__PURE__ */ new Map()
		}, t;
	}
	function Rt(e) {
		e[Mt] = !0;
	}
	function zt(e) {
		e[Nt] = void 0;
	}
	var Bt = /* @__PURE__ */ new Set(), Vt = {};
	function Ht(e, t) {
		Ut(e, t), Ut(e + "Capture", t);
	}
	function Ut(e, t) {
		for (Vt[e] = t, e = 0; e < t.length; e++) Bt.add(t[e]);
	}
	var Wt = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Gt = {}, Kt = {};
	function qt(e) {
		return Le.call(Kt, e) ? !0 : Le.call(Gt, e) ? !1 : Wt.test(e) ? Kt[e] = !0 : (Gt[e] = !0, !1);
	}
	var Jt = !1;
	function Yt() {
		var e = Jt;
		return Jt = !1, e;
	}
	function Xt(e, t, n) {
		if (qt(t)) {
			if (n === null) e.removeAttribute(t);
			else {
				switch (typeof n) {
					case "undefined":
					case "function":
					case "symbol":
						e.removeAttribute(t);
						return;
					case "boolean":
						var r = t.toLowerCase().slice(0, 5);
						if (r !== "data-" && r !== "aria-") {
							e.removeAttribute(t);
							return;
						}
				}
				e.setAttribute(t, n);
			}
		}
	}
	function Zt(e, t, n) {
		if (n === null) e.removeAttribute(t);
		else {
			switch (typeof n) {
				case "undefined":
				case "function":
				case "symbol":
				case "boolean":
					e.removeAttribute(t);
					return;
			}
			e.setAttribute(t, n);
		}
	}
	function Qt(e, t, n, r) {
		if (r === null) e.removeAttribute(n);
		else {
			switch (typeof r) {
				case "undefined":
				case "function":
				case "symbol":
				case "boolean":
					e.removeAttribute(n);
					return;
			}
			e.setAttributeNS(t, n, r);
		}
	}
	function $t(e) {
		switch (typeof e) {
			case "bigint":
			case "boolean":
			case "number":
			case "string":
			case "undefined": return e;
			case "object": return e;
			default: return "";
		}
	}
	function en(e) {
		var t = e.type;
		return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
	}
	function tn(e, t, n) {
		var r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
		if (!e.hasOwnProperty(t) && r !== void 0 && typeof r.get == "function" && typeof r.set == "function") {
			var i = r.get, a = r.set;
			return Object.defineProperty(e, t, {
				configurable: !0,
				get: function() {
					return i.call(this);
				},
				set: function(e) {
					n = "" + e, a.call(this, e);
				}
			}), Object.defineProperty(e, t, { enumerable: r.enumerable }), {
				getValue: function() {
					return n;
				},
				setValue: function(e) {
					n = "" + e;
				},
				stopTracking: function() {
					e._valueTracker = null, delete e[t];
				}
			};
		}
	}
	function nn(e) {
		if (!e._valueTracker) {
			var t = en(e) ? "checked" : "value";
			e._valueTracker = tn(e, t, "" + e[t]);
		}
	}
	function rn(e) {
		if (!e) return !1;
		var t = e._valueTracker;
		if (!t) return !0;
		var n = t.getValue(), r = "";
		return e && (r = en(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n && (t.setValue(e), !0);
	}
	var an = /[\n"\\]/g;
	function on(e) {
		return e.replace(an, function(e) {
			return "\\" + e.charCodeAt(0).toString(16) + " ";
		});
	}
	function sn(e, t, n, r, i, a, o, s) {
		e.name = "", o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" ? e.type = o : e.removeAttribute("type"), t == null ? o !== "submit" && o !== "reset" || e.removeAttribute("value") : o === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + $t(t)) : e.value !== "" + $t(t) && (e.value = "" + $t(t)), t == null ? n == null ? r != null && e.removeAttribute("value") : ln(e, $t(n)) : o === "number" && e.value == t ? ln(e, $t(e.value)) : ln(e, $t(t)), i == null && a != null && (e.defaultChecked = !!a), i != null && (e.checked = i && typeof i != "function" && typeof i != "symbol"), s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" ? e.name = "" + $t(s) : e.removeAttribute("name");
	}
	function cn(e, t, n, r, i, a, o, s) {
		if (a != null && typeof a != "function" && typeof a != "symbol" && typeof a != "boolean" && (e.type = a), t != null || n != null) {
			if (!(a !== "submit" && a !== "reset" || t != null)) {
				nn(e);
				return;
			}
			n = n == null ? "" : "" + $t(n), t = t == null ? n : "" + $t(t), s || t === e.value || (e.value = t), e.defaultValue = t;
		}
		r ??= i, r = typeof r != "function" && typeof r != "symbol" && !!r, e.checked = s ? e.checked : !!r, e.defaultChecked = !!r, o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" && (e.name = o), nn(e);
	}
	function ln(e, t) {
		e.defaultValue !== "" + t && (e.defaultValue = "" + t);
	}
	function un(e, t, n, r) {
		if (e = e.options, t) {
			t = {};
			for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
			for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
		} else {
			for (n = "" + $t(n), t = null, i = 0; i < e.length; i++) {
				if (e[i].value === n) {
					e[i].selected = !0, r && (e[i].defaultSelected = !0);
					return;
				}
				t !== null || e[i].disabled || (t = e[i]);
			}
			t !== null && (t.selected = !0);
		}
	}
	function dn(e, t, n) {
		t != null && (t = "" + $t(t), t !== e.value && (e.value = t), n == null) ? e.defaultValue !== t && (e.defaultValue = t) : e.defaultValue = n == null ? "" : "" + $t(n);
	}
	function fn(e, t, n, r) {
		if (t == null) {
			if (r != null) {
				if (n != null) throw Error(i(92));
				if (_e(r)) {
					if (1 < r.length) throw Error(i(93));
					r = r[0];
				}
				n = r;
			}
			n ??= "", t = n;
		}
		n = $t(t), e.defaultValue = n, r = e.textContent, r === n && r !== "" && r !== null && (e.value = r), nn(e);
	}
	function pn(e, t) {
		if (t) {
			var n = e.firstChild;
			if (n && n === e.lastChild && n.nodeType === 3) {
				n.nodeValue = t;
				return;
			}
		}
		e.textContent = t;
	}
	var mn = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
	function hn(e, t, n) {
		var r = t.indexOf("--") === 0;
		n == null || typeof n == "boolean" || n === "" ? r ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : r ? e.setProperty(t, n) : typeof n != "number" || n === 0 || mn.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
	}
	function gn(e, t, n) {
		if (t != null && typeof t != "object") throw Error(i(62));
		if (e = e.style, n != null) {
			for (var r in n) !n.hasOwnProperty(r) || t != null && t.hasOwnProperty(r) || (r.indexOf("--") === 0 ? e.setProperty(r, "") : r === "float" ? e.cssFloat = "" : e[r] = "", Jt = !0);
			for (var a in t) r = t[a], t.hasOwnProperty(a) && n[a] !== r && (hn(e, a, r), Jt = !0);
		} else for (var o in t) t.hasOwnProperty(o) && hn(e, o, t[o]);
	}
	function _n(e) {
		if (e.indexOf("-") === -1) return !1;
		switch (e) {
			case "annotation-xml":
			case "color-profile":
			case "font-face":
			case "font-face-src":
			case "font-face-uri":
			case "font-face-format":
			case "font-face-name":
			case "missing-glyph": return !1;
			default: return !0;
		}
	}
	var vn = /* @__PURE__ */ new Map([
		["acceptCharset", "accept-charset"],
		["htmlFor", "for"],
		["httpEquiv", "http-equiv"],
		["crossOrigin", "crossorigin"],
		["accentHeight", "accent-height"],
		["alignmentBaseline", "alignment-baseline"],
		["arabicForm", "arabic-form"],
		["baselineShift", "baseline-shift"],
		["capHeight", "cap-height"],
		["clipPath", "clip-path"],
		["clipRule", "clip-rule"],
		["colorInterpolation", "color-interpolation"],
		["colorInterpolationFilters", "color-interpolation-filters"],
		["colorProfile", "color-profile"],
		["colorRendering", "color-rendering"],
		["dominantBaseline", "dominant-baseline"],
		["enableBackground", "enable-background"],
		["fillOpacity", "fill-opacity"],
		["fillRule", "fill-rule"],
		["floodColor", "flood-color"],
		["floodOpacity", "flood-opacity"],
		["fontFamily", "font-family"],
		["fontSize", "font-size"],
		["fontSizeAdjust", "font-size-adjust"],
		["fontStretch", "font-stretch"],
		["fontStyle", "font-style"],
		["fontVariant", "font-variant"],
		["fontWeight", "font-weight"],
		["glyphName", "glyph-name"],
		["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
		["glyphOrientationVertical", "glyph-orientation-vertical"],
		["horizAdvX", "horiz-adv-x"],
		["horizOriginX", "horiz-origin-x"],
		["imageRendering", "image-rendering"],
		["letterSpacing", "letter-spacing"],
		["lightingColor", "lighting-color"],
		["markerEnd", "marker-end"],
		["markerMid", "marker-mid"],
		["markerStart", "marker-start"],
		["maskType", "mask-type"],
		["overlinePosition", "overline-position"],
		["overlineThickness", "overline-thickness"],
		["paintOrder", "paint-order"],
		["panose-1", "panose-1"],
		["pointerEvents", "pointer-events"],
		["renderingIntent", "rendering-intent"],
		["shapeRendering", "shape-rendering"],
		["stopColor", "stop-color"],
		["stopOpacity", "stop-opacity"],
		["strikethroughPosition", "strikethrough-position"],
		["strikethroughThickness", "strikethrough-thickness"],
		["strokeDasharray", "stroke-dasharray"],
		["strokeDashoffset", "stroke-dashoffset"],
		["strokeLinecap", "stroke-linecap"],
		["strokeLinejoin", "stroke-linejoin"],
		["strokeMiterlimit", "stroke-miterlimit"],
		["strokeOpacity", "stroke-opacity"],
		["strokeWidth", "stroke-width"],
		["textAnchor", "text-anchor"],
		["textDecoration", "text-decoration"],
		["textRendering", "text-rendering"],
		["transformOrigin", "transform-origin"],
		["underlinePosition", "underline-position"],
		["underlineThickness", "underline-thickness"],
		["unicodeBidi", "unicode-bidi"],
		["unicodeRange", "unicode-range"],
		["unitsPerEm", "units-per-em"],
		["vAlphabetic", "v-alphabetic"],
		["vHanging", "v-hanging"],
		["vIdeographic", "v-ideographic"],
		["vMathematical", "v-mathematical"],
		["vectorEffect", "vector-effect"],
		["vertAdvY", "vert-adv-y"],
		["vertOriginX", "vert-origin-x"],
		["vertOriginY", "vert-origin-y"],
		["wordSpacing", "word-spacing"],
		["writingMode", "writing-mode"],
		["xmlnsXlink", "xmlns:xlink"],
		["xHeight", "x-height"]
	]), yn = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
	function bn(e) {
		return yn.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
	}
	function xn() {}
	var Sn = null;
	function Cn(e) {
		return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
	}
	var wn = null, Tn = null;
	function En(e) {
		var t = It(e);
		if (t && (e = t.stateNode)) {
			var n = e[Dt] || null;
			a: switch (e = t.stateNode, t.type) {
				case "input":
					if (sn(e, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name), t = n.name, n.type === "radio" && t != null) {
						for (n = e; n.parentNode;) n = n.parentNode;
						for (n = n.querySelectorAll("input[name=\"" + on("" + t) + "\"][type=\"radio\"]"), t = 0; t < n.length; t++) {
							var r = n[t];
							if (r !== e && r.form === e.form) {
								var a = r[Dt] || null;
								if (!a) throw Error(i(90));
								sn(r, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name);
							}
						}
						for (t = 0; t < n.length; t++) r = n[t], r.form === e.form && rn(r);
					}
					break a;
				case "textarea":
					dn(e, n.value, n.defaultValue);
					break a;
				case "select": t = n.value, t != null && un(e, !!n.multiple, t, !1);
			}
		}
	}
	var Dn = !1;
	function On(e, t, n) {
		if (Dn) return e(t, n);
		Dn = !0;
		try {
			return e(t);
		} finally {
			if (Dn = !1, (wn !== null || Tn !== null) && (Rd(), wn && (t = wn, e = Tn, Tn = wn = null, En(t), e))) for (t = 0; t < e.length; t++) En(e[t]);
		}
	}
	function kn(e, t) {
		var n = e.stateNode;
		if (n === null) return null;
		var r = n[Dt] || null;
		if (r === null) return null;
		n = r[t];
		a: switch (t) {
			case "onClick":
			case "onClickCapture":
			case "onDoubleClick":
			case "onDoubleClickCapture":
			case "onMouseDown":
			case "onMouseDownCapture":
			case "onMouseMove":
			case "onMouseMoveCapture":
			case "onMouseUp":
			case "onMouseUpCapture":
			case "onMouseEnter":
				(r = !r.disabled) || (e = e.type, r = e !== "button" && e !== "input" && e !== "select" && e !== "textarea"), e = !r;
				break a;
			default: e = !1;
		}
		if (e) return null;
		if (n && typeof n != "function") throw Error(i(231, t, typeof n));
		return n;
	}
	var An = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, jn = !1;
	if (An) try {
		var Mn = {};
		Object.defineProperty(Mn, "passive", { get: function() {
			jn = !0;
		} }), window.addEventListener("test", Mn, Mn), window.removeEventListener("test", Mn, Mn);
	} catch {
		jn = !1;
	}
	var Nn = null, Pn = null, Fn = null;
	function In() {
		if (Fn) return Fn;
		var e, t = Pn, n = t.length, r, i = "value" in Nn ? Nn.value : Nn.textContent, a = i.length;
		for (e = 0; e < n && t[e] === i[e]; e++);
		var o = n - e;
		for (r = 1; r <= o && t[n - r] === i[a - r]; r++);
		return Fn = i.slice(e, 1 < r ? 1 - r : void 0);
	}
	function Ln(e) {
		var t = e.keyCode;
		return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
	}
	function Rn() {
		return !0;
	}
	function zn() {
		return !1;
	}
	function Bn(e) {
		function t(t, n, r, i, a) {
			for (var o in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = i, this.target = a, this.currentTarget = null, e) e.hasOwnProperty(o) && (t = e[o], this[o] = t ? t(i) : i[o]);
			return this.isDefaultPrevented = (i.defaultPrevented == null ? !1 === i.returnValue : i.defaultPrevented) ? Rn : zn, this.isPropagationStopped = zn, this;
		}
		return w(t.prototype, {
			preventDefault: function() {
				this.defaultPrevented = !0;
				var e = this.nativeEvent;
				e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = !1), this.isDefaultPrevented = Rn);
			},
			stopPropagation: function() {
				var e = this.nativeEvent;
				e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0), this.isPropagationStopped = Rn);
			},
			persist: function() {},
			isPersistent: Rn
		}), t;
	}
	var Vn = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function(e) {
			return e.timeStamp || Date.now();
		},
		defaultPrevented: 0,
		isTrusted: 0
	}, Hn = Bn(Vn), Un = w({}, Vn, {
		view: 0,
		detail: 0
	}), Wn = Bn(Un), Gn, Kn, qn, Jn = w({}, Un, {
		screenX: 0,
		screenY: 0,
		clientX: 0,
		clientY: 0,
		pageX: 0,
		pageY: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		getModifierState: ar,
		button: 0,
		buttons: 0,
		relatedTarget: function(e) {
			return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
		},
		movementX: function(e) {
			return "movementX" in e ? e.movementX : (e !== qn && (qn && e.type === "mousemove" ? (Gn = e.screenX - qn.screenX, Kn = e.screenY - qn.screenY) : Kn = Gn = 0, qn = e), Gn);
		},
		movementY: function(e) {
			return "movementY" in e ? e.movementY : Kn;
		}
	}), Yn = Bn(Jn), Xn = Bn(w({}, Jn, { dataTransfer: 0 })), Zn = Bn(w({}, Un, { relatedTarget: 0 })), Qn = Bn(w({}, Vn, {
		animationName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	})), $n = Bn(w({}, Vn, { clipboardData: function(e) {
		return "clipboardData" in e ? e.clipboardData : window.clipboardData;
	} })), er = Bn(w({}, Vn, { data: 0 })), tr = {
		Esc: "Escape",
		Spacebar: " ",
		Left: "ArrowLeft",
		Up: "ArrowUp",
		Right: "ArrowRight",
		Down: "ArrowDown",
		Del: "Delete",
		Win: "OS",
		Menu: "ContextMenu",
		Apps: "ContextMenu",
		Scroll: "ScrollLock",
		MozPrintableKey: "Unidentified"
	}, nr = {
		8: "Backspace",
		9: "Tab",
		12: "Clear",
		13: "Enter",
		16: "Shift",
		17: "Control",
		18: "Alt",
		19: "Pause",
		20: "CapsLock",
		27: "Escape",
		32: " ",
		33: "PageUp",
		34: "PageDown",
		35: "End",
		36: "Home",
		37: "ArrowLeft",
		38: "ArrowUp",
		39: "ArrowRight",
		40: "ArrowDown",
		45: "Insert",
		46: "Delete",
		112: "F1",
		113: "F2",
		114: "F3",
		115: "F4",
		116: "F5",
		117: "F6",
		118: "F7",
		119: "F8",
		120: "F9",
		121: "F10",
		122: "F11",
		123: "F12",
		144: "NumLock",
		145: "ScrollLock",
		224: "Meta"
	}, rr = {
		Alt: "altKey",
		Control: "ctrlKey",
		Meta: "metaKey",
		Shift: "shiftKey"
	};
	function ir(e) {
		var t = this.nativeEvent;
		return t.getModifierState ? t.getModifierState(e) : (e = rr[e]) ? !!t[e] : !1;
	}
	function ar() {
		return ir;
	}
	var or = Bn(w({}, Un, {
		key: function(e) {
			if (e.key) {
				var t = tr[e.key] || e.key;
				if (t !== "Unidentified") return t;
			}
			return e.type === "keypress" ? (e = Ln(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? nr[e.keyCode] || "Unidentified" : "";
		},
		code: 0,
		location: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		repeat: 0,
		locale: 0,
		getModifierState: ar,
		charCode: function(e) {
			return e.type === "keypress" ? Ln(e) : 0;
		},
		keyCode: function(e) {
			return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
		},
		which: function(e) {
			return e.type === "keypress" ? Ln(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
		}
	})), sr = Bn(w({}, Jn, {
		pointerId: 0,
		width: 0,
		height: 0,
		pressure: 0,
		tangentialPressure: 0,
		tiltX: 0,
		tiltY: 0,
		twist: 0,
		pointerType: 0,
		isPrimary: 0
	})), cr = Bn(w({}, Vn, { submitter: 0 })), lr = Bn(w({}, Un, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: ar
	})), ur = Bn(w({}, Vn, {
		propertyName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	})), dr = Bn(w({}, Jn, {
		deltaX: function(e) {
			return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
		},
		deltaY: function(e) {
			return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
		},
		deltaZ: 0,
		deltaMode: 0
	})), fr = Bn(w({}, Vn, {
		newState: 0,
		oldState: 0,
		source: 0
	})), pr = [
		9,
		13,
		27,
		32
	], mr = An && "CompositionEvent" in window, hr = null;
	An && "documentMode" in document && (hr = document.documentMode);
	var gr = An && "TextEvent" in window && !hr, _r = An && (!mr || hr && 8 < hr && 11 >= hr), vr = " ", yr = !1;
	function br(e, t) {
		switch (e) {
			case "keyup": return pr.indexOf(t.keyCode) !== -1;
			case "keydown": return t.keyCode !== 229;
			case "keypress":
			case "mousedown":
			case "focusout": return !0;
			default: return !1;
		}
	}
	function xr(e) {
		return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
	}
	var Sr = !1;
	function Cr(e, t) {
		switch (e) {
			case "compositionend": return xr(t);
			case "keypress": return t.which === 32 ? (yr = !0, vr) : null;
			case "textInput": return e = t.data, e === vr && yr ? null : e;
			default: return null;
		}
	}
	function wr(e, t) {
		if (Sr) return e === "compositionend" || !mr && br(e, t) ? (e = In(), Fn = Pn = Nn = null, Sr = !1, e) : null;
		switch (e) {
			case "paste": return null;
			case "keypress":
				if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
					if (t.char && 1 < t.char.length) return t.char;
					if (t.which) return String.fromCharCode(t.which);
				}
				return null;
			case "compositionend": return _r && t.locale !== "ko" ? null : t.data;
			default: return null;
		}
	}
	var Tr = {
		color: !0,
		date: !0,
		datetime: !0,
		"datetime-local": !0,
		email: !0,
		month: !0,
		number: !0,
		password: !0,
		range: !0,
		search: !0,
		tel: !0,
		text: !0,
		time: !0,
		url: !0,
		week: !0
	};
	function Er(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return t === "input" ? !!Tr[e.type] : t === "textarea";
	}
	function Dr(e, t, n, r) {
		wn ? Tn ? Tn.push(r) : Tn = [r] : wn = r, t = qf(t, "onChange"), 0 < t.length && (n = new Hn("onChange", "change", null, n, r), e.push({
			event: n,
			listeners: t
		}));
	}
	var Or = null, kr = null;
	function Ar(e) {
		zf(e, 0);
	}
	function jr(e) {
		if (rn(I(e))) return e;
	}
	function Mr(e, t) {
		if (e === "change") return t;
	}
	var Nr = !1;
	if (An) {
		var Pr;
		if (An) {
			var Fr = "oninput" in document;
			if (!Fr) {
				var Ir = document.createElement("div");
				Ir.setAttribute("oninput", "return;"), Fr = typeof Ir.oninput == "function";
			}
			Pr = Fr;
		} else Pr = !1;
		Nr = Pr && (!document.documentMode || 9 < document.documentMode);
	}
	function Lr() {
		Or && (Or.detachEvent("onpropertychange", Rr), kr = Or = null);
	}
	function Rr(e) {
		if (e.propertyName === "value" && jr(kr)) {
			var t = [];
			Dr(t, kr, e, Cn(e)), On(Ar, t);
		}
	}
	function zr(e, t, n) {
		e === "focusin" ? (Lr(), Or = t, kr = n, Or.attachEvent("onpropertychange", Rr)) : e === "focusout" && Lr();
	}
	function Br(e) {
		if (e === "selectionchange" || e === "keyup" || e === "keydown") return jr(kr);
	}
	function Vr(e, t) {
		if (e === "click") return jr(t);
	}
	function Hr(e, t) {
		if (e === "input" || e === "change") return jr(t);
	}
	function Ur(e, t) {
		return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
	}
	var Wr = typeof Object.is == "function" ? Object.is : Ur;
	function Gr(e, t) {
		if (Wr(e, t)) return !0;
		if (typeof e != "object" || !e || typeof t != "object" || !t) return !1;
		var n = Object.keys(e), r = Object.keys(t);
		if (n.length !== r.length) return !1;
		for (r = 0; r < n.length; r++) {
			var i = n[r];
			if (!Le.call(t, i) || !Wr(e[i], t[i])) return !1;
		}
		return !0;
	}
	function Kr(e) {
		if (e ||= typeof document < "u" ? document : void 0, e === void 0) return null;
		try {
			return e.activeElement || e.body;
		} catch {
			return e.body;
		}
	}
	function qr(e) {
		for (; e && e.firstChild;) e = e.firstChild;
		return e;
	}
	function Jr(e, t) {
		var n = qr(e);
		e = 0;
		for (var r; n;) {
			if (n.nodeType === 3) {
				if (r = e + n.textContent.length, e <= t && r >= t) return {
					node: n,
					offset: t - e
				};
				e = r;
			}
			a: {
				for (; n;) {
					if (n.nextSibling) {
						n = n.nextSibling;
						break a;
					}
					n = n.parentNode;
				}
				n = void 0;
			}
			n = qr(n);
		}
	}
	function Yr(e, t) {
		return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Yr(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
	}
	function Xr(e) {
		e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
		for (var t = Kr(e.document); t instanceof e.HTMLIFrameElement;) {
			try {
				var n = typeof t.contentWindow.location.href == "string";
			} catch {
				n = !1;
			}
			if (n) e = t.contentWindow;
			else break;
			t = Kr(e.document);
		}
		return t;
	}
	function Zr(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
	}
	var Qr = An && "documentMode" in document && 11 >= document.documentMode, $r = null, ei = null, ti = null, ni = !1;
	function ri(e, t, n) {
		var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
		ni || $r == null || $r !== Kr(r) || (r = $r, "selectionStart" in r && Zr(r) ? r = {
			start: r.selectionStart,
			end: r.selectionEnd
		} : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
			anchorNode: r.anchorNode,
			anchorOffset: r.anchorOffset,
			focusNode: r.focusNode,
			focusOffset: r.focusOffset
		}), ti && Gr(ti, r) || (ti = r, r = qf(ei, "onSelect"), 0 < r.length && (t = new Hn("onSelect", "select", null, t, n), e.push({
			event: t,
			listeners: r
		}), t.target = $r)));
	}
	function ii(e, t) {
		var n = {};
		return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
	}
	var ai = {
		animationend: ii("Animation", "AnimationEnd"),
		animationiteration: ii("Animation", "AnimationIteration"),
		animationstart: ii("Animation", "AnimationStart"),
		transitionrun: ii("Transition", "TransitionRun"),
		transitionstart: ii("Transition", "TransitionStart"),
		transitioncancel: ii("Transition", "TransitionCancel"),
		transitionend: ii("Transition", "TransitionEnd")
	}, oi = {}, si = {};
	An && (si = document.createElement("div").style, "AnimationEvent" in window || (delete ai.animationend.animation, delete ai.animationiteration.animation, delete ai.animationstart.animation), "TransitionEvent" in window || delete ai.transitionend.transition);
	function ci(e) {
		if (oi[e]) return oi[e];
		if (!ai[e]) return e;
		var t = ai[e], n;
		for (n in t) if (t.hasOwnProperty(n) && n in si) return oi[e] = t[n];
		return e;
	}
	var li = ci("animationend"), ui = ci("animationiteration"), di = ci("animationstart"), fi = ci("transitionrun"), pi = ci("transitionstart"), mi = ci("transitioncancel"), hi = ci("transitionend"), gi = /* @__PURE__ */ new Map(), _i = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
	_i.push("scrollEnd");
	function vi(e, t) {
		gi.set(e, t), Ht(t, [e]);
	}
	var yi = 0;
	function bi(e, t) {
		if (e.name != null && e.name !== "auto") return e.name;
		if (t.autoName !== null) return t.autoName;
		e = yd.identifierPrefix;
		var n = yi++;
		return e = "_" + e + "t_" + n.toString(32) + "_", t.autoName = e;
	}
	function xi(e) {
		if (e == null || typeof e == "string") return e;
		var t = null, n = Dd;
		if (n !== null) for (var r = 0; r < n.length; r++) {
			var i = e[n[r]];
			if (i != null) {
				if (i === "none") return "none";
				t = t == null ? i : t + (" " + i);
			}
		}
		return t ?? e.default;
	}
	function Si(e, t) {
		return e = xi(e), t = xi(t), t == null ? e === "auto" ? null : e : t === "auto" ? null : t;
	}
	var Ci = typeof reportError == "function" ? reportError : function(e) {
		if (typeof window == "object" && typeof window.ErrorEvent == "function") {
			var t = new window.ErrorEvent("error", {
				bubbles: !0,
				cancelable: !0,
				message: typeof e == "object" && e && typeof e.message == "string" ? String(e.message) : String(e),
				error: e
			});
			if (!window.dispatchEvent(t)) return;
		} else if (typeof process == "object" && typeof process.emit == "function") {
			process.emit("uncaughtException", e);
			return;
		}
		console.error(e);
	}, wi = [], Ti = 0, Ei = 0;
	function Di() {
		for (var e = Ti, t = Ei = Ti = 0; t < e;) {
			var n = wi[t];
			wi[t++] = null;
			var r = wi[t];
			wi[t++] = null;
			var i = wi[t];
			wi[t++] = null;
			var a = wi[t];
			if (wi[t++] = null, r !== null && i !== null) {
				var o = r.pending;
				o === null ? i.next = i : (i.next = o.next, o.next = i), r.pending = i;
			}
			a !== 0 && ji(n, i, a);
		}
	}
	function Oi(e, t, n, r) {
		wi[Ti++] = e, wi[Ti++] = t, wi[Ti++] = n, wi[Ti++] = r, Ei |= r, e.lanes |= r, e = e.alternate, e !== null && (e.lanes |= r);
	}
	function ki(e, t, n, r) {
		return Oi(e, t, n, r), Mi(e);
	}
	function Ai(e, t) {
		return Oi(e, null, null, t), Mi(e);
	}
	function ji(e, t, n) {
		e.lanes |= n;
		var r = e.alternate;
		r !== null && (r.lanes |= n);
		for (var i = !1, a = e.return; a !== null;) a.childLanes |= n, r = a.alternate, r !== null && (r.childLanes |= n), a.tag === 22 && (e = a.stateNode, e === null || e._visibility & 1 || (i = !0)), e = a, a = a.return;
		return e.tag === 3 ? (a = e.stateNode, i && t !== null && (i = 31 - $e(n), e = a.hiddenUpdates, r = e[i], r === null ? e[i] = [t] : r.push(t), t.lane = n | 536870912), a) : null;
	}
	function Mi(e) {
		if (50 < Od) throw Od = 0, kd = null, Error(i(185));
		for (var t = e.return; t !== null;) e = t, t = e.return;
		return e.tag === 3 ? e.stateNode : null;
	}
	var Ni = {};
	function Pi(e, t, n, r) {
		this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
	}
	function Fi(e, t, n, r) {
		return new Pi(e, t, n, r);
	}
	function Ii(e) {
		return e = e.prototype, !(!e || !e.isReactComponent);
	}
	function Li(e, t) {
		var n = e.alternate;
		return n === null ? (n = Fi(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 1206910976, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
			lanes: t.lanes,
			firstContext: t.firstContext
		}, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n;
	}
	function Ri(e, t) {
		e.flags &= 1206910978;
		var n = e.alternate;
		return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : {
			lanes: t.lanes,
			firstContext: t.firstContext
		}), e;
	}
	function zi(e, t, n, r, a, o) {
		var s = 0;
		if (r = e, typeof r == "function") Ii(r) && (s = 1);
		else if (typeof r == "string") s = qm(e, n, M.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
		else a: switch (r) {
			case ce: return e = Fi(31, n, t, a), e.elementType = ce, e.lanes = o, e;
			case ee: return Bi(n.children, a, o, t);
			case te:
				s = 8, a |= 24;
				break;
			case ne: return e = Fi(12, n, t, a | 2), e.elementType = ne, e.lanes = o, e;
			case ie: return e = Fi(13, n, t, a), e.elementType = ie, e.lanes = o, e;
			case ae: return e = Fi(19, n, t, a), e.elementType = ae, e.lanes = o, e;
			case le:
			case de: return e = a | 32, e = Fi(30, n, t, e), e.elementType = de, e.lanes = o, e.stateNode = {
				autoName: null,
				paired: null,
				clones: null,
				ref: null
			}, e;
			default:
				if (typeof r == "object" && r) switch (r.$$typeof) {
					case O:
						s = 10;
						break a;
					case re:
						s = 9;
						break a;
					case k:
						s = 11;
						break a;
					case oe:
						s = 14;
						break a;
					case se:
						s = 16, r = null;
						break a;
				}
				s = 29, n = Error(i(130, e === null ? "null" : typeof e, "")), r = null;
		}
		return t = Fi(s, n, t, a), t.elementType = e, t.type = r, t.lanes = o, t;
	}
	function Bi(e, t, n, r) {
		return e = Fi(7, e, r, t), e.lanes = n, e;
	}
	function Vi(e, t, n) {
		return e = Fi(6, e, null, t), e.lanes = n, e;
	}
	function Hi(e) {
		var t = Fi(18, null, null, 0);
		return t.stateNode = e, t;
	}
	function Ui(e, t, n) {
		return t = Fi(4, e.children === null ? [] : e.children, e.key, t), t.lanes = n, t.stateNode = {
			containerInfo: e.containerInfo,
			pendingChildren: null,
			implementation: e.implementation
		}, t;
	}
	var Wi = /* @__PURE__ */ new WeakMap();
	function Gi(e, t) {
		if (typeof e == "object" && e) {
			var n = Wi.get(e);
			return n === void 0 ? (t = {
				value: e,
				source: t,
				stack: Ie(t)
			}, Wi.set(e, t), t) : n;
		}
		return {
			value: e,
			source: t,
			stack: Ie(t)
		};
	}
	var Ki = [], qi = 0, Ji = null, Yi = 0, Xi = [], Zi = 0, Qi = null, $i = 1, ea = "";
	function ta(e, t) {
		Ki[qi++] = Yi, Ki[qi++] = Ji, Ji = e, Yi = t;
	}
	function na(e, t, n) {
		Xi[Zi++] = $i, Xi[Zi++] = ea, Xi[Zi++] = Qi, Qi = e;
		var r = $i;
		e = ea;
		var i = 32 - $e(r) - 1;
		r &= ~(1 << i), n += 1;
		var a = 32 - $e(t) + i;
		if (30 < a) {
			var o = i - i % 5;
			a = (r & (1 << o) - 1).toString(32), r >>= o, i -= o, $i = 1 << 32 - $e(t) + i | n << i | r, ea = a + e;
		} else $i = 1 << a | n << i | r, ea = e;
	}
	function ra(e) {
		e.return !== null && (ta(e, 1), na(e, 1, 0));
	}
	function ia(e) {
		for (; e === Ji;) Ji = Ki[--qi], Ki[qi] = null, Yi = Ki[--qi], Ki[qi] = null;
		for (; e === Qi;) Qi = Xi[--Zi], Xi[Zi] = null, ea = Xi[--Zi], Xi[Zi] = null, $i = Xi[--Zi], Xi[Zi] = null;
	}
	function aa(e, t) {
		Xi[Zi++] = $i, Xi[Zi++] = ea, Xi[Zi++] = Qi, $i = t.id, ea = t.overflow, Qi = e;
	}
	var oa = null, sa = null, L = !1, ca = null, la = !1, ua = Error(i(519));
	function da(e) {
		throw _a(Gi(Error(i(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", "")), e)), ua;
	}
	function fa(e) {
		var t = e.stateNode, n = e.type, r = e.memoizedProps;
		switch (t[Et] = e, t[Dt] = r, n) {
			case "dialog":
				Bf("cancel", t), Bf("close", t);
				break;
			case "iframe":
			case "object":
			case "embed":
				Bf("load", t);
				break;
			case "video":
			case "audio":
				for (n = 0; n < Lf.length; n++) Bf(Lf[n], t);
				break;
			case "source":
				Bf("error", t);
				break;
			case "img":
			case "image":
			case "link":
				Bf("error", t), Bf("load", t);
				break;
			case "details":
				Bf("toggle", t);
				break;
			case "input":
				Bf("invalid", t), cn(t, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, !0);
				break;
			case "select":
				Bf("invalid", t);
				break;
			case "textarea": Bf("invalid", t), fn(t, r.value, r.defaultValue, r.children);
		}
		n = r.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || !0 === r.suppressHydrationWarning || $f(t.textContent, n) ? (r.popover != null && (Bf("beforetoggle", t), Bf("toggle", t)), r.onScroll != null && Bf("scroll", t), r.onScrollEnd != null && Bf("scrollend", t), r.onClick != null && (t.onclick = xn), t = !0) : t = !1, t || da(e, !0);
	}
	function pa(e) {
		for (oa = e.return; oa;) switch (oa.tag) {
			case 5:
			case 31:
			case 13:
				la = !1;
				return;
			case 27:
			case 3:
				la = !0;
				return;
			default: oa = oa.return;
		}
	}
	function ma(e) {
		if (e !== oa) return !1;
		if (!L) return pa(e), L = !0, !1;
		var t = e.tag, n;
		if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = n === "form" || n === "button" || pp(e.type, e.memoizedProps)), n = !n), n && sa && da(e), pa(e), t === 13) {
			if (e = e.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(i(317));
			sa = dm(e);
		} else if (t === 31) {
			if (e = e.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(i(317));
			sa = dm(e);
		} else t === 27 ? (t = sa, Sp(e.type) ? (e = um, um = null, sa = e) : sa = t) : sa = oa ? lm(e.stateNode.nextSibling) : null;
		return !0;
	}
	function ha() {
		sa = oa = null, L = !1;
	}
	function ga() {
		var e = ca;
		return e !== null && (dd === null ? dd = e : dd.push.apply(dd, e), ca = null), e;
	}
	function _a(e) {
		ca === null ? ca = [e] : ca.push(e);
	}
	var va = Se(null), ya = null, ba = null;
	function xa(e, t, n) {
		j(va, t._currentValue), t._currentValue = n;
	}
	function Sa(e) {
		e._currentValue = va.current, Ce(va);
	}
	function Ca(e, t, n) {
		for (; e !== null;) {
			var r = e.alternate;
			if ((e.childLanes & t) === t ? r !== null && (r.childLanes & t) !== t && (r.childLanes |= t) : (e.childLanes |= t, r !== null && (r.childLanes |= t)), e === n) break;
			e = e.return;
		}
	}
	function wa(e, t, n, r) {
		var a = e.child;
		for (a !== null && (a.return = e); a !== null;) {
			var o = a.dependencies;
			if (o !== null) {
				var s = a.child;
				o = o.firstContext;
				a: for (; o !== null;) {
					var c = o;
					o = a;
					for (var l = 0; l < t.length; l++) if (c.context === t[l]) {
						o.lanes |= n, c = o.alternate, c !== null && (c.lanes |= n), Ca(o.return, n, e), r || (s = null);
						break a;
					}
					o = c.next;
				}
			} else if (a.tag === 18) {
				if (s = a.return, s === null) throw Error(i(341));
				s.lanes |= n, o = s.alternate, o !== null && (o.lanes |= n), Ca(s, n, e), s = null;
			} else a.tag === 13 && a.memoizedState !== null && a.memoizedState.dehydrated === null ? (a.lanes |= n, s = a.alternate, s !== null && (s.lanes |= n), Ca(a.return, n, e), s = a.child, s = s === null ? null : s.sibling) : s = a.child;
			if (s !== null) s.return = a;
			else for (s = a; s !== null;) {
				if (s === e) {
					s = null;
					break;
				}
				if (a = s.sibling, a !== null) {
					a.return = s.return, s = a;
					break;
				}
				s = s.return;
			}
			a = s;
		}
	}
	function Ta(e, t, n, r) {
		e = null;
		for (var a = t, o = !1; a !== null;) {
			if (!o) {
				if (a.flags & 524288) o = !0;
				else if (a.flags & 262144) break;
			}
			if (a.tag === 10) {
				var s = a.alternate;
				if (s === null) throw Error(i(387));
				if (s = s.memoizedProps, s !== null) {
					var c = a.type;
					Wr(a.pendingProps.value, s.value) || (e === null ? e = [c] : e.push(c));
				}
			} else if (a === Ee.current) {
				if (s = a.alternate, s === null) throw Error(i(387));
				s.memoizedState.memoizedState !== a.memoizedState.memoizedState && (e === null ? e = [sh] : e.push(sh));
			}
			a = a.return;
		}
		return e !== null && wa(t, e, n, r), t.flags |= 262144, e !== null;
	}
	function Ea(e) {
		for (e = e.firstContext; e !== null;) {
			if (!Wr(e.context._currentValue, e.memoizedValue)) return !0;
			e = e.next;
		}
		return !1;
	}
	function Da(e) {
		ya = e, ba = null, e = e.dependencies, e !== null && (e.firstContext = null);
	}
	function Oa(e) {
		return Aa(ya, e);
	}
	function ka(e, t) {
		return ya === null && Da(e), Aa(e, t);
	}
	function Aa(e, t) {
		var n = t._currentValue;
		if (t = {
			context: t,
			memoizedValue: n,
			next: null
		}, ba === null) {
			if (e === null) throw Error(i(308));
			ba = t, e.dependencies = {
				lanes: 0,
				firstContext: t
			}, e.flags |= 524288;
		} else ba = ba.next = t;
		return n;
	}
	var ja = typeof AbortController < "u" ? AbortController : function() {
		var e = [], t = this.signal = {
			aborted: !1,
			addEventListener: function(t, n) {
				e.push(n);
			}
		};
		this.abort = function() {
			t.aborted = !0, e.forEach(function(e) {
				return e();
			});
		};
	}, Ma = t.unstable_scheduleCallback, Na = t.unstable_NormalPriority, Pa = {
		$$typeof: O,
		Consumer: null,
		Provider: null,
		_currentValue: null,
		_currentValue2: null,
		_threadCount: 0
	};
	function Fa() {
		return {
			controller: new ja(),
			data: /* @__PURE__ */ new Map(),
			refCount: 0
		};
	}
	function Ia(e) {
		e.refCount--, e.refCount === 0 && Ma(Na, function() {
			e.controller.abort();
		});
	}
	function R(e, t) {
		if (e.pendingLanes & 4194048) {
			var n = e.transitionTypes;
			for (n === null && (n = e.transitionTypes = []), e = 0; e < t.length; e++) {
				var r = t[e];
				n.indexOf(r) === -1 && n.push(r);
			}
		}
	}
	var La = null;
	function Ra(e) {
		var t = e.transitionTypes;
		return e.transitionTypes = null, t;
	}
	var za = null, Ba = 0, Va = 0, Ha = null;
	function Ua(e, t) {
		if (za === null) {
			var n = za = [];
			Ba = 0, Va = Mf(), Ha = {
				status: "pending",
				value: void 0,
				then: function(e) {
					n.push(e);
				}
			};
		}
		return Ba++, t.then(Wa, Wa), t;
	}
	function Wa() {
		if (--Ba === 0 && (La = null, za !== null)) {
			Ha !== null && (Ha.status = "fulfilled");
			var e = za;
			za = null, Va = 0, Ha = null;
			for (var t = 0; t < e.length; t++) (0, e[t])();
		}
	}
	function Ga(e, t) {
		var n = [], r = {
			status: "pending",
			value: null,
			reason: null,
			then: function(e) {
				n.push(e);
			}
		};
		return e.then(function() {
			r.status = "fulfilled", r.value = t;
			for (var e = 0; e < n.length; e++) (0, n[e])(t);
		}, function(e) {
			for (r.status = "rejected", r.reason = e, e = 0; e < n.length; e++) (0, n[e])(void 0);
		}), r;
	}
	var Ka = A.S;
	A.S = function(e, t) {
		if (md = He(), typeof t == "object" && t && typeof t.then == "function" && Ua(e, t), La !== null) for (var n = vf; n !== null;) R(n, La), n = n.next;
		if (n = e.types, n !== null) {
			for (var r = vf; r !== null;) R(r, n), r = r.next;
			if (Va !== 0) {
				r = La, r === null && (r = La = []);
				for (var i = 0; i < n.length; i++) {
					var a = n[i];
					r.indexOf(a) === -1 && r.push(a);
				}
			}
		}
		Ka !== null && Ka(e, t);
	};
	var qa = Se(null);
	function Ja() {
		var e = qa.current;
		return e === null ? $u.pooledCache : e;
	}
	function Ya(e, t) {
		t === null ? j(qa, qa.current) : j(qa, t.pool);
	}
	function Xa() {
		var e = Ja();
		return e === null ? null : {
			parent: Pa._currentValue,
			pool: e
		};
	}
	var Za = Error(i(460)), Qa = Error(i(474)), $a = Error(i(542)), z = { then: function() {} };
	function eo(e) {
		return e = e.status, e === "fulfilled" || e === "rejected";
	}
	function to(e, t, n) {
		switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(xn, xn), t = n), t.status) {
			case "fulfilled": return t.value;
			case "rejected": throw e = t.reason, ao(e), e === void 0 && !("reason" in t) ? Error(i(600)) : e;
			default:
				if (typeof t.status == "string") t.then(xn, xn);
				else {
					if (e = $u, e !== null && 100 < e.shellSuspendCounter) throw Error(i(482));
					e = t, e.status = "pending", e.then(function(e) {
						if (t.status === "pending") {
							var n = t;
							n.status = "fulfilled", n.value = e;
						}
					}, function(e) {
						if (t.status === "pending") {
							var n = t;
							n.status = "rejected", n.reason = e;
						}
					});
				}
				switch (t.status) {
					case "fulfilled": return t.value;
					case "rejected": throw e = t.reason, ao(e), e;
				}
				throw ro = t, Za;
		}
	}
	function no(e) {
		try {
			var t = e._init;
			return t(e._payload);
		} catch (e) {
			throw typeof e == "object" && e && typeof e.then == "function" ? (ro = e, Za) : e;
		}
	}
	var ro = null;
	function io() {
		if (ro === null) throw Error(i(459));
		var e = ro;
		return ro = null, e;
	}
	function ao(e) {
		if (e === Za || e === $a) throw Error(i(483));
	}
	var oo = null, so = 0;
	function co(e) {
		var t = so;
		return so += 1, oo === null && (oo = []), to(oo, e, t);
	}
	function lo(e, t) {
		t = t.props.ref, e.ref = t === void 0 ? null : t;
	}
	function uo(e, t) {
		throw t.$$typeof === T ? Error(i(525)) : (e = Object.prototype.toString.call(t), Error(i(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)));
	}
	function fo(e) {
		function t(t, n) {
			if (e) {
				var r = t.deletions;
				r === null ? (t.deletions = [n], t.flags |= 16) : r.push(n);
			}
		}
		function n(n, r) {
			if (!e) return null;
			for (; r !== null;) t(n, r), r = r.sibling;
			return null;
		}
		function r(e) {
			for (var t = /* @__PURE__ */ new Map(); e !== null;) e.key === null ? t.set(e.index, e) : t.set(e.key, e), e = e.sibling;
			return t;
		}
		function a(e, t) {
			return e = Li(e, t), e.index = 0, e.sibling = null, e;
		}
		function o(t, n, r) {
			return t.index = r, e ? (r = t.alternate, r === null ? (t.flags |= 134217730, n) : (r = r.index, r < n ? (t.flags |= 2, n) : r)) : (t.flags |= 1048576, n);
		}
		function s(t) {
			return e && t.alternate === null && (t.flags |= 134217730), t;
		}
		function c(e, t, n, r) {
			return t === null || t.tag !== 6 ? (t = Vi(n, e.mode, r), t.return = e, t) : (t = a(t, n), t.return = e, t);
		}
		function l(e, t, n, r) {
			var i = n.type;
			return i === ee ? (e = d(e, t, n.props.children, r, n.key), lo(e, n), e) : t !== null && (t.elementType === i || typeof i == "object" && i && i.$$typeof === se && no(i) === t.type) ? (t = a(t, n.props), lo(t, n), t.return = e, t) : (t = zi(n.type, n.key, n.props, null, e.mode, r), lo(t, n), t.return = e, t);
		}
		function u(e, t, n, r) {
			return t === null || t.tag !== 4 || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? (t = Ui(n, e.mode, r), t.return = e, t) : (t = a(t, n.children || []), t.return = e, t);
		}
		function d(e, t, n, r, i) {
			return t === null || t.tag !== 7 ? (t = Bi(n, e.mode, r, i), t.return = e, t) : (t = a(t, n), t.return = e, t);
		}
		function f(e, t, n) {
			if (typeof t == "string" && t !== "" || typeof t == "number" || typeof t == "bigint") return t = Vi("" + t, e.mode, n), t.return = e, t;
			if (typeof t == "object" && t) {
				switch (t.$$typeof) {
					case E: return n = zi(t.type, t.key, t.props, null, e.mode, n), lo(n, t), n.return = e, n;
					case D: return t = Ui(t, e.mode, n), t.return = e, t;
					case se: return t = no(t), f(e, t, n);
				}
				if (_e(t) || me(t)) return t = Bi(t, e.mode, n, null), t.return = e, t;
				if (typeof t.then == "function") return f(e, co(t), n);
				if (t.$$typeof === O) return f(e, ka(e, t), n);
				uo(e, t);
			}
			return null;
		}
		function p(e, t, n, r) {
			var i = t === null ? null : t.key;
			if (typeof n == "string" && n !== "" || typeof n == "number" || typeof n == "bigint") return i === null ? c(e, t, "" + n, r) : null;
			if (typeof n == "object" && n) {
				switch (n.$$typeof) {
					case E: return n.key === i ? l(e, t, n, r) : null;
					case D: return n.key === i ? u(e, t, n, r) : null;
					case se: return n = no(n), p(e, t, n, r);
				}
				if (_e(n) || me(n)) return i === null ? d(e, t, n, r, null) : null;
				if (typeof n.then == "function") return p(e, t, co(n), r);
				if (n.$$typeof === O) return p(e, t, ka(e, n), r);
				uo(e, n);
			}
			return null;
		}
		function m(e, t, n, r, i) {
			if (typeof r == "string" && r !== "" || typeof r == "number" || typeof r == "bigint") return e = e.get(n) || null, c(t, e, "" + r, i);
			if (typeof r == "object" && r) {
				switch (r.$$typeof) {
					case E: return e = e.get(r.key === null ? n : r.key) || null, l(t, e, r, i);
					case D: return e = e.get(r.key === null ? n : r.key) || null, u(t, e, r, i);
					case se: return r = no(r), m(e, t, n, r, i);
				}
				if (_e(r) || me(r)) return e = e.get(n) || null, d(t, e, r, i, null);
				if (typeof r.then == "function") return m(e, t, n, co(r), i);
				if (r.$$typeof === O) return m(e, t, n, ka(t, r), i);
				uo(t, r);
			}
			return null;
		}
		function h(i, a, s, c) {
			for (var l = null, u = null, d = a, h = a = 0, g = null; d !== null && h < s.length; h++) {
				d.index > h ? (g = d, d = null) : g = d.sibling;
				var _ = p(i, d, s[h], c);
				if (_ === null) {
					d === null && (d = g);
					break;
				}
				e && d && _.alternate === null && t(i, d), a = o(_, a, h), u === null ? l = _ : u.sibling = _, u = _, d = g;
			}
			if (h === s.length) return n(i, d), L && ta(i, h), l;
			if (d === null) {
				for (; h < s.length; h++) d = f(i, s[h], c), d !== null && (a = o(d, a, h), u === null ? l = d : u.sibling = d, u = d);
				return L && ta(i, h), l;
			}
			for (d = r(d); h < s.length; h++) g = m(d, i, h, s[h], c), g !== null && (e && (_ = g.alternate, _ !== null && d.delete(_.key === null ? h : _.key)), a = o(g, a, h), u === null ? l = g : u.sibling = g, u = g);
			return e && d.forEach(function(e) {
				return t(i, e);
			}), L && ta(i, h), l;
		}
		function g(a, s, c, l) {
			if (c == null) throw Error(i(151));
			for (var u = null, d = null, h = s, g = s = 0, _ = null, v = c.next(); h !== null && !v.done; g++, v = c.next()) {
				h.index > g ? (_ = h, h = null) : _ = h.sibling;
				var y = p(a, h, v.value, l);
				if (y === null) {
					h === null && (h = _);
					break;
				}
				e && h && y.alternate === null && t(a, h), s = o(y, s, g), d === null ? u = y : d.sibling = y, d = y, h = _;
			}
			if (v.done) return n(a, h), L && ta(a, g), u;
			if (h === null) {
				for (; !v.done; g++, v = c.next()) v = f(a, v.value, l), v !== null && (s = o(v, s, g), d === null ? u = v : d.sibling = v, d = v);
				return L && ta(a, g), u;
			}
			for (h = r(h); !v.done; g++, v = c.next()) v = m(h, a, g, v.value, l), v !== null && (e && (_ = v.alternate, _ !== null && h.delete(_.key === null ? g : _.key)), s = o(v, s, g), d === null ? u = v : d.sibling = v, d = v);
			return e && h.forEach(function(e) {
				return t(a, e);
			}), L && ta(a, g), u;
		}
		function _(e, r, o, c) {
			if (typeof o == "object" && o && o.type === ee && o.key === null && o.props.ref === void 0 && (o = o.props.children), typeof o == "object" && o) {
				switch (o.$$typeof) {
					case E:
						a: {
							for (var l = o.key; r !== null;) {
								if (r.key === l) {
									if (l = o.type, l === ee) {
										if (r.tag === 7) {
											n(e, r.sibling), c = a(r, o.props.children), lo(c, o), c.return = e, e = c;
											break a;
										}
									} else if (r.elementType === l || typeof l == "object" && l && l.$$typeof === se && no(l) === r.type) {
										n(e, r.sibling), c = a(r, o.props), lo(c, o), c.return = e, e = c;
										break a;
									}
									n(e, r);
									break;
								}
								t(e, r), r = r.sibling;
							}
							o.type === ee ? (c = Bi(o.props.children, e.mode, c, o.key), lo(c, o), c.return = e, e = c) : (c = zi(o.type, o.key, o.props, null, e.mode, c), lo(c, o), c.return = e, e = c);
						}
						return s(e);
					case D:
						a: {
							for (l = o.key; r !== null;) {
								if (r.key === l) {
									if (r.tag === 4 && r.stateNode.containerInfo === o.containerInfo && r.stateNode.implementation === o.implementation) {
										n(e, r.sibling), c = a(r, o.children || []), c.return = e, e = c;
										break a;
									}
									n(e, r);
									break;
								}
								t(e, r), r = r.sibling;
							}
							c = Ui(o, e.mode, c), c.return = e, e = c;
						}
						return s(e);
					case se: return o = no(o), _(e, r, o, c);
				}
				if (_e(o)) return h(e, r, o, c);
				if (me(o)) {
					if (l = me(o), typeof l != "function") throw Error(i(150));
					return o = l.call(o), g(e, r, o, c);
				}
				if (typeof o.then == "function") return _(e, r, co(o), c);
				if (o.$$typeof === O) return _(e, r, ka(e, o), c);
				uo(e, o);
			}
			return typeof o == "string" && o !== "" || typeof o == "number" || typeof o == "bigint" ? (o = "" + o, r !== null && r.tag === 6 ? (n(e, r.sibling), c = a(r, o), c.return = e, e = c) : (n(e, r), c = Vi(o, e.mode, c), c.return = e, e = c), s(e)) : n(e, r);
		}
		return function(e, t, n, r) {
			try {
				so = 0;
				var i = _(e, t, n, r);
				return oo = null, i;
			} catch (t) {
				if (t === Za || t === $a) throw t;
				var a = Fi(29, t, null, e.mode);
				return a.lanes = r, a.return = e, a;
			}
		};
	}
	var po = fo(!0), mo = fo(!1), ho = !1;
	function go(e) {
		e.updateQueue = {
			baseState: e.memoizedState,
			firstBaseUpdate: null,
			lastBaseUpdate: null,
			shared: {
				pending: null,
				lanes: 0,
				hiddenCallbacks: null
			},
			callbacks: null
		};
	}
	function _o(e, t) {
		e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
			baseState: e.baseState,
			firstBaseUpdate: e.firstBaseUpdate,
			lastBaseUpdate: e.lastBaseUpdate,
			shared: e.shared,
			callbacks: null
		});
	}
	function vo(e) {
		return {
			lane: e,
			tag: 0,
			payload: null,
			callback: null,
			next: null
		};
	}
	function yo(e, t, n) {
		var r = e.updateQueue;
		if (r === null) return null;
		if (r = r.shared, Qu & 2) {
			var i = r.pending;
			return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, t = Mi(e), ji(e, null, n), t;
		}
		return Oi(e, r, t, n), Mi(e);
	}
	function bo(e, t, n) {
		if (t = t.updateQueue, t !== null && (t = t.shared, n & 4194048)) {
			var r = t.lanes;
			r &= e.pendingLanes, n |= r, t.lanes = n, gt(e, n);
		}
	}
	function xo(e, t) {
		var n = e.updateQueue, r = e.alternate;
		if (r !== null && (r = r.updateQueue, n === r)) {
			var i = null, a = null;
			if (n = n.firstBaseUpdate, n !== null) {
				do {
					var o = {
						lane: n.lane,
						tag: n.tag,
						payload: n.payload,
						callback: null,
						next: null
					};
					a === null ? i = a = o : a = a.next = o, n = n.next;
				} while (n !== null);
				a === null ? i = a = t : a = a.next = t;
			} else i = a = t;
			n = {
				baseState: r.baseState,
				firstBaseUpdate: i,
				lastBaseUpdate: a,
				shared: r.shared,
				callbacks: r.callbacks
			}, e.updateQueue = n;
		} else e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
	}
	var So = !1;
	function B() {
		if (So) {
			var e = Ha;
			if (e !== null) throw e;
		}
	}
	function Co(e, t, n, r) {
		So = !1;
		var i = e.updateQueue;
		ho = !1;
		var a = i.firstBaseUpdate, o = i.lastBaseUpdate, s = i.shared.pending;
		if (s !== null) {
			i.shared.pending = null;
			var c = s, l = c.next;
			c.next = null, o === null ? a = l : o.next = l, o = c;
			var u = e.alternate;
			u !== null && (u = u.updateQueue, s = u.lastBaseUpdate, s !== o && (s === null ? u.firstBaseUpdate = l : s.next = l, u.lastBaseUpdate = c));
		}
		if (a !== null) {
			var d = i.baseState;
			o = 0, u = l = c = null, s = a;
			do {
				var f = s.lane & -536870913, p = f !== s.lane;
				if (p ? (Y & f) === f : (r & f) === f) {
					f !== 0 && f === Va && (So = !0), u !== null && (u = u.next = {
						lane: 0,
						tag: s.tag,
						payload: s.payload,
						callback: null,
						next: null
					});
					a: {
						var m = e, h = s;
						f = t;
						var g = n;
						switch (h.tag) {
							case 1:
								if (m = h.payload, typeof m == "function") {
									d = m.call(g, d, f);
									break a;
								}
								d = m;
								break a;
							case 3: m.flags = m.flags & -65537 | 128;
							case 0:
								if (m = h.payload, f = typeof m == "function" ? m.call(g, d, f) : m, f == null) break a;
								d = w({}, d, f);
								break a;
							case 2: ho = !0;
						}
					}
					f = s.callback, f !== null && (e.flags |= 64, p && (e.flags |= 8192), p = i.callbacks, p === null ? i.callbacks = [f] : p.push(f));
				} else p = {
					lane: f,
					tag: s.tag,
					payload: s.payload,
					callback: s.callback,
					next: null
				}, u === null ? (l = u = p, c = d) : u = u.next = p, o |= f;
				if (s = s.next, s === null) {
					if (s = i.shared.pending, s === null) break;
					p = s, s = p.next, p.next = null, i.lastBaseUpdate = p, i.shared.pending = null;
				}
			} while (1);
			u === null && (c = d), i.baseState = c, i.firstBaseUpdate = l, i.lastBaseUpdate = u, a === null && (i.shared.lanes = 0), ad |= o, e.lanes = o, e.memoizedState = d;
		}
	}
	function wo(e, t) {
		if (typeof e != "function") throw Error(i(191, e));
		e.call(t);
	}
	function To(e, t) {
		var n = e.callbacks;
		if (n !== null) for (e.callbacks = null, e = 0; e < n.length; e++) wo(n[e], t);
	}
	var Eo = Se(null), Do = Se(0);
	function Oo(e, t) {
		e = rd, j(Do, e), j(Eo, t), rd = e | t.baseLanes;
	}
	function ko() {
		j(Do, rd), j(Eo, Eo.current);
	}
	function Ao() {
		rd = Do.current, Ce(Eo), Ce(Do);
	}
	var jo = Se(null), Mo = null;
	function No(e) {
		var t = e.alternate;
		j(Ro, Ro.current & 1), j(jo, e), Mo === null && (t === null || Eo.current !== null || t.memoizedState !== null) && (Mo = e);
	}
	function Po(e) {
		j(Ro, Ro.current), j(jo, e), Mo === null && (Mo = e);
	}
	function Fo(e) {
		e.tag === 22 ? (j(Ro, Ro.current), j(jo, e), Mo === null && (Mo = e)) : Io();
	}
	function Io() {
		j(Ro, Ro.current), j(jo, jo.current);
	}
	function Lo(e) {
		Ce(jo), Mo === e && (Mo = null), Ce(Ro);
	}
	var Ro = Se(0);
	function zo(e, t) {
		j(jo, jo.current), j(Ro, t);
	}
	function Bo(e) {
		Ce(Ro), Ce(jo), Mo === e && (Mo = null);
	}
	function Vo(e) {
		for (var t = e; t !== null;) {
			if (t.tag === 13) {
				var n = t.memoizedState;
				if (n !== null && (n = n.dehydrated, n === null || om(n) || sm(n))) return t;
			} else if (t.tag === 19 && t.memoizedProps.revealOrder !== "independent") {
				if (t.flags & 128) return t;
			} else if (t.child !== null) {
				t.child.return = t, t = t.child;
				continue;
			}
			if (t === e) break;
			for (; t.sibling === null;) {
				if (t.return === null || t.return === e) return null;
				t = t.return;
			}
			t.sibling.return = t.return, t = t.sibling;
		}
		return null;
	}
	var Ho = 0, V = null, H = null, U = null, Uo = !1, Wo = !1, W = !1, Go = 0, Ko = 0, qo = null, Jo = 0;
	function Yo() {
		throw Error(i(321));
	}
	function Xo(e, t) {
		if (t === null) return !1;
		for (var n = 0; n < t.length && n < e.length; n++) if (!Wr(e[n], t[n])) return !1;
		return !0;
	}
	function Zo(e, t, n, r, i, a) {
		return Ho = a, V = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, A.H = e === null || e.memoizedState === null ? fc : pc, W = !1, a = n(r, i), W = !1, Wo && (a = $o(t, n, r, i)), Qo(e), a;
	}
	function Qo(e) {
		A.H = dc;
		var t = H !== null && H.next !== null;
		if (Ho = 0, U = H = V = null, Uo = !1, Ko = 0, qo = null, t) throw Error(i(300));
		e === null || Ac || (e = e.dependencies, e !== null && Ea(e) && (Ac = !0));
	}
	function $o(e, t, n, r) {
		V = e;
		var a = 0;
		do {
			if (Wo && (qo = null), Ko = 0, Wo = !1, 25 <= a) throw Error(i(301));
			if (a += 1, U = H = null, e.updateQueue != null) {
				var o = e.updateQueue;
				o.lastEffect = null, o.events = null, o.stores = null, o.memoCache != null && (o.memoCache.index = 0);
			}
			A.H = mc, o = t(n, r);
		} while (Wo);
		return o;
	}
	function es() {
		var e = A.H, t = e.useState()[0];
		return t = typeof t.then == "function" ? ss(t) : t, e = e.useState()[0], (H === null ? null : H.memoizedState) !== e && (V.flags |= 1024), t;
	}
	function ts() {
		var e = Go !== 0;
		return Go = 0, e;
	}
	function ns(e, t, n) {
		t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n;
	}
	function rs(e) {
		if (Uo) {
			for (e = e.memoizedState; e !== null;) {
				var t = e.queue;
				t !== null && (t.pending = null), e = e.next;
			}
			Uo = !1;
		}
		Ho = 0, U = H = V = null, Wo = !1, Ko = Go = 0, qo = null;
	}
	function is() {
		var e = {
			memoizedState: null,
			baseState: null,
			baseQueue: null,
			queue: null,
			next: null
		};
		return U === null ? V.memoizedState = U = e : U = U.next = e, U;
	}
	function as() {
		if (H === null) {
			var e = V.alternate;
			e = e === null ? null : e.memoizedState;
		} else e = H.next;
		var t = U === null ? V.memoizedState : U.next;
		if (t !== null) U = t, H = e;
		else {
			if (e === null) throw V.alternate === null ? Error(i(467)) : Error(i(310));
			H = e, e = {
				memoizedState: H.memoizedState,
				baseState: H.baseState,
				baseQueue: H.baseQueue,
				queue: H.queue,
				next: null
			}, U === null ? V.memoizedState = U = e : U = U.next = e;
		}
		return U;
	}
	function os() {
		return {
			lastEffect: null,
			events: null,
			stores: null,
			memoCache: null
		};
	}
	function ss(e) {
		var t = Ko;
		return Ko += 1, qo === null && (qo = []), e = to(qo, e, t), t = V, (U === null ? t.memoizedState : U.next) === null && (t = t.alternate, A.H = t === null || t.memoizedState === null ? fc : pc), e;
	}
	function cs(e) {
		if (typeof e == "object" && e) {
			if (typeof e.then == "function") return ss(e);
			if (e.$$typeof === fe) return;
			if (e.$$typeof === O) return Oa(e);
		}
		throw Error(i(438, String(e)));
	}
	function G(e) {
		var t = null, n = V.updateQueue;
		if (n !== null && (t = n.memoCache), t == null) {
			var r = V.alternate;
			r !== null && (r = r.updateQueue, r !== null && (r = r.memoCache, r != null && (t = {
				data: r.data.map(function(e) {
					return e.slice();
				}),
				index: 0
			})));
		}
		if (t ??= {
			data: [],
			index: 0
		}, n === null && (n = os(), V.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0) for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = ue;
		return t.index++, n;
	}
	function ls(e, t) {
		return typeof t == "function" ? t(e) : t;
	}
	function us(e) {
		return ds(as(), H, e);
	}
	function ds(e, t, n) {
		var r = e.queue;
		if (r === null) throw Error(i(311));
		r.lastRenderedReducer = n;
		var a = e.baseQueue, o = r.pending;
		if (o !== null) {
			if (a !== null) {
				var s = a.next;
				a.next = o.next, o.next = s;
			}
			t.baseQueue = a = o, r.pending = null;
		}
		if (o = e.baseState, a === null) e.memoizedState = o;
		else {
			t = a.next;
			var c = s = null, l = null, u = t, d = !1;
			do {
				var f = u.lane & -536870913;
				if (f === u.lane ? (Ho & f) === f : (Y & f) === f) {
					var p = u.revertLane;
					if (p === 0) l !== null && (l = l.next = {
						lane: 0,
						revertLane: 0,
						gesture: null,
						action: u.action,
						hasEagerState: u.hasEagerState,
						eagerState: u.eagerState,
						next: null
					}), f === Va && (d = !0);
					else if ((Ho & p) === p) {
						u = u.next, p === Va && (d = !0);
						continue;
					} else f = {
						lane: 0,
						revertLane: u.revertLane,
						gesture: null,
						action: u.action,
						hasEagerState: u.hasEagerState,
						eagerState: u.eagerState,
						next: null
					}, l === null ? (c = l = f, s = o) : l = l.next = f, V.lanes |= p, ad |= p;
					f = u.action, W && n(o, f), o = u.hasEagerState ? u.eagerState : n(o, f);
				} else p = {
					lane: f,
					revertLane: u.revertLane,
					gesture: u.gesture,
					action: u.action,
					hasEagerState: u.hasEagerState,
					eagerState: u.eagerState,
					next: null
				}, l === null ? (c = l = p, s = o) : l = l.next = p, V.lanes |= f, ad |= f;
				u = u.next;
			} while (u !== null && u !== t);
			if (l === null ? s = o : l.next = c, !Wr(o, e.memoizedState) && (Ac = !0, d && (n = Ha, n !== null))) throw n;
			e.memoizedState = o, e.baseState = s, e.baseQueue = l, r.lastRenderedState = o;
		}
		return a === null && (r.lanes = 0), [e.memoizedState, r.dispatch];
	}
	function fs(e) {
		var t = as(), n = t.queue;
		if (n === null) throw Error(i(311));
		n.lastRenderedReducer = e;
		var r = n.dispatch, a = n.pending, o = t.memoizedState;
		if (a !== null) {
			n.pending = null;
			var s = a = a.next;
			do
				o = e(o, s.action), s = s.next;
			while (s !== a);
			Wr(o, t.memoizedState) || (Ac = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
		}
		return [o, r];
	}
	function K(e, t, n) {
		var r = V, a = as(), o = L;
		if (o) {
			if (n === void 0) throw Error(i(407));
			n = n();
		} else n = t();
		var s = !Wr((H || a).memoizedState, n);
		if (s && (a.memoizedState = n, Ac = !0), a = a.queue, Ls(hs.bind(null, r, a, e), [e]), e = a.getSnapshot !== t || s || U !== null && !!(U.memoizedState.tag & 1), Ms(e ? 9 : 8, { destroy: void 0 }, ms.bind(null, r, a, n, t), null), e) {
			if (r.flags |= 2048, $u === null) throw Error(i(349));
			o || Ho & 127 || ps(r, t, n);
		}
		return n;
	}
	function ps(e, t, n) {
		e.flags |= 16384, e = {
			getSnapshot: t,
			value: n
		}, t = V.updateQueue, t === null ? (t = os(), V.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
	}
	function ms(e, t, n, r) {
		t.value = n, t.getSnapshot = r, gs(t) && _s(e);
	}
	function hs(e, t, n) {
		return n(function() {
			gs(t) && _s(e);
		});
	}
	function gs(e) {
		var t = e.getSnapshot;
		e = e.value;
		try {
			var n = t();
			return !Wr(e, n);
		} catch {
			return !0;
		}
	}
	function _s(e) {
		var t = Ai(e, 2);
		t !== null && Nd(t, e, 2);
	}
	function vs(e) {
		var t = is();
		if (typeof e == "function") {
			var n = e;
			if (e = n(), W) {
				Qe(!0);
				try {
					n();
				} finally {
					Qe(!1);
				}
			}
		}
		return t.memoizedState = t.baseState = e, t.queue = {
			pending: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: ls,
			lastRenderedState: e
		}, t;
	}
	function ys(e, t, n, r) {
		return e.baseState = n, ds(e, H, typeof r == "function" ? r : ls);
	}
	function bs(e, t, n, r, a) {
		if (cc(e)) throw Error(i(485));
		if (e = t.action, e !== null) {
			var o = {
				payload: a,
				action: e,
				next: null,
				isTransition: !0,
				status: "pending",
				value: null,
				reason: null,
				listeners: [],
				then: function(e) {
					o.listeners.push(e);
				}
			};
			A.T === null ? o.isTransition = !1 : n(!0), r(o), n = t.pending, n === null ? (o.next = t.pending = o, xs(t, o)) : (o.next = n.next, t.pending = n.next = o);
		}
	}
	function xs(e, t) {
		var n = t.action, r = t.payload, i = e.state;
		if (t.isTransition) {
			var a = A.T, o = {};
			o.types = a === null ? null : a.types, A.T = o;
			try {
				var s = n(i, r), c = A.S;
				c !== null && c(o, s), Ss(e, t, s);
			} catch (n) {
				ws(e, t, n);
			} finally {
				a !== null && o.types !== null && (a.types = o.types), A.T = a;
			}
		} else try {
			a = n(i, r), Ss(e, t, a);
		} catch (n) {
			ws(e, t, n);
		}
	}
	function Ss(e, t, n) {
		typeof n == "object" && n && typeof n.then == "function" ? n.then(function(n) {
			Cs(e, t, n);
		}, function(n) {
			return ws(e, t, n);
		}) : Cs(e, t, n);
	}
	function Cs(e, t, n) {
		t.status = "fulfilled", t.value = n, Ts(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, xs(e, n)));
	}
	function ws(e, t, n) {
		var r = e.pending;
		if (e.pending = null, r !== null) {
			r = r.next;
			do
				t.status = "rejected", t.reason = n, Ts(t), t = t.next;
			while (t !== r);
		}
		e.action = null;
	}
	function Ts(e) {
		e = e.listeners;
		for (var t = 0; t < e.length; t++) (0, e[t])();
	}
	function Es(e, t) {
		return t;
	}
	function Ds(e, t) {
		if (L) {
			var n = $u.formState;
			if (n !== null) {
				a: {
					var r = V;
					if (L) {
						if (sa) {
							b: {
								for (var i = sa, a = la; i.nodeType !== 8;) if (!a || (i = lm(i.nextSibling), i === null)) {
									i = null;
									break b;
								}
								a = i.data, i = a === "F!" || a === "F" ? i : null;
							}
							if (i) {
								sa = lm(i.nextSibling), r = i.data === "F!";
								break a;
							}
						}
						da(r);
					}
					r = !1;
				}
				r && (t = n[0]);
			}
		}
		return n = is(), n.memoizedState = n.baseState = t, r = {
			pending: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: Es,
			lastRenderedState: t
		}, n.queue = r, n = ac.bind(null, V, r), r.dispatch = n, r = vs(!1), a = sc.bind(null, V, !1, r.queue), r = is(), i = {
			state: t,
			dispatch: null,
			action: e,
			pending: null
		}, r.queue = i, n = bs.bind(null, V, i, a, n), i.dispatch = n, r.memoizedState = e, [
			t,
			n,
			!1
		];
	}
	function Os(e) {
		return ks(as(), H, e);
	}
	function ks(e, t, n) {
		if (t = ds(e, t, Es)[0], e = us(ls)[0], typeof t == "object" && t && typeof t.then == "function") try {
			var r = ss(t);
		} catch (e) {
			throw e === Za ? $a : e;
		}
		else r = t;
		t = as();
		var i = t.queue, a = i.dispatch;
		return n !== t.memoizedState && (V.flags |= 2048, Ms(9, { destroy: void 0 }, As.bind(null, i, n), null)), [
			r,
			a,
			e
		];
	}
	function As(e, t) {
		e.action = t;
	}
	function js(e) {
		var t = as(), n = H;
		if (n !== null) return ks(t, n, e);
		as(), t = t.memoizedState, n = as();
		var r = n.queue.dispatch;
		return n.memoizedState = e, [
			t,
			r,
			!1
		];
	}
	function Ms(e, t, n, r) {
		return e = {
			tag: e,
			create: n,
			deps: r,
			inst: t,
			next: null
		}, t = V.updateQueue, t === null && (t = os(), V.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e;
	}
	function Ns() {
		return as().memoizedState;
	}
	function Ps(e, t, n, r) {
		var i = is();
		V.flags |= e, i.memoizedState = Ms(1 | t, { destroy: void 0 }, n, r === void 0 ? null : r);
	}
	function Fs(e, t, n, r) {
		var i = as();
		r = r === void 0 ? null : r;
		var a = i.memoizedState.inst;
		H !== null && r !== null && Xo(r, H.memoizedState.deps) ? i.memoizedState = Ms(t, a, n, r) : (V.flags |= e, i.memoizedState = Ms(1 | t, a, n, r));
	}
	function Is(e, t) {
		Ps(8390656, 8, e, t);
	}
	function Ls(e, t) {
		Fs(2048, 8, e, t);
	}
	function Rs(e) {
		V.flags |= 4;
		var t = V.updateQueue;
		if (t === null) t = os(), V.updateQueue = t, t.events = [e];
		else {
			var n = t.events;
			n === null ? t.events = [e] : n.push(e);
		}
	}
	function zs(e) {
		var t = as().memoizedState;
		return Rs({
			ref: t,
			nextImpl: e
		}), function() {
			if (Qu & 2) throw Error(i(440));
			return t.impl.apply(void 0, arguments);
		};
	}
	function Bs(e, t) {
		return Fs(4, 2, e, t);
	}
	function Vs(e, t) {
		return Fs(4, 4, e, t);
	}
	function Hs(e, t) {
		if (typeof t == "function") {
			e = e();
			var n = t(e);
			return function() {
				typeof n == "function" ? n() : t(null);
			};
		}
		if (t != null) return e = e(), t.current = e, function() {
			t.current = null;
		};
	}
	function Us(e, t, n) {
		n = n == null ? null : n.concat([e]), Fs(4, 4, Hs.bind(null, t, e), n);
	}
	function Ws() {}
	function Gs(e, t) {
		var n = as();
		t = t === void 0 ? null : t;
		var r = n.memoizedState;
		return t !== null && Xo(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
	}
	function Ks(e, t) {
		var n = as();
		t = t === void 0 ? null : t;
		var r = n.memoizedState;
		if (t !== null && Xo(t, r[1])) return r[0];
		if (r = e(), W) {
			Qe(!0);
			try {
				e();
			} finally {
				Qe(!1);
			}
		}
		return n.memoizedState = [r, t], r;
	}
	function qs(e, t, n) {
		return n === void 0 || Ho & 1073741824 && !(Y & 261930) ? e.memoizedState = t : (e.memoizedState = n, e = jd(), V.lanes |= e, ad |= e, n);
	}
	function Js(e, t, n, r) {
		return Wr(n, t) ? n : Eo.current === null ? !(Ho & 106) || Ho & 1073741824 && !(Y & 261930) ? (Ac = !0, e.memoizedState = n) : (e = jd(), V.lanes |= e, ad |= e, t) : (e = qs(e, n, r), Wr(e, t) || (Ac = !0), e);
	}
	function Ys(e, t, n, r, i) {
		var a = ve.p;
		ve.p = a !== 0 && 8 > a ? a : 8;
		var o = A.T, s = {};
		s.types = o === null ? null : o.types, A.T = s, sc(e, !1, t, n);
		try {
			var c = i(), l = A.S;
			l !== null && l(s, c), typeof c == "object" && c && typeof c.then == "function" ? oc(e, t, Ga(c, r), Ad(e)) : oc(e, t, r, Ad(e));
		} catch (n) {
			oc(e, t, {
				then: function() {},
				status: "rejected",
				reason: n
			}, Ad());
		} finally {
			ve.p = a, o !== null && s.types !== null && (o.types = s.types), A.T = o;
		}
	}
	function Xs() {}
	function Zs(e, t, n, r) {
		if (e.tag !== 5) throw Error(i(476));
		var a = Qs(e).queue;
		Ys(e, a, t, ye, n === null ? Xs : function() {
			return $s(e), n(r);
		});
	}
	function Qs(e) {
		var t = e.memoizedState;
		if (t !== null) return t;
		t = {
			memoizedState: ye,
			baseState: ye,
			baseQueue: null,
			queue: {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: ls,
				lastRenderedState: ye
			},
			next: null
		};
		var n = {};
		return t.next = {
			memoizedState: n,
			baseState: n,
			baseQueue: null,
			queue: {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: ls,
				lastRenderedState: n
			},
			next: null
		}, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
	}
	function $s(e) {
		var t = Qs(e);
		t.next === null && (t = e.alternate.memoizedState), oc(e, t.next.queue, {}, Ad());
	}
	function ec() {
		return Oa(sh);
	}
	function tc() {
		return as().memoizedState;
	}
	function nc() {
		return as().memoizedState;
	}
	function rc(e) {
		for (var t = e.return; t !== null;) {
			switch (t.tag) {
				case 24:
				case 3:
					var n = Ad();
					e = vo(n);
					var r = yo(t, e, n);
					r !== null && (Nd(r, t, n), bo(r, t, n)), t = { cache: Fa() }, e.payload = t;
					return;
			}
			t = t.return;
		}
	}
	function ic(e, t, n) {
		var r = Ad();
		n = {
			lane: r,
			revertLane: 0,
			gesture: null,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null
		}, cc(e) ? lc(t, n) : (n = ki(e, t, n, r), n !== null && (Nd(n, e, r), uc(n, t, r)));
	}
	function ac(e, t, n) {
		oc(e, t, n, Ad());
	}
	function oc(e, t, n, r) {
		var i = {
			lane: r,
			revertLane: 0,
			gesture: null,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null
		};
		if (cc(e)) lc(t, i);
		else {
			var a = e.alternate;
			if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null)) try {
				var o = t.lastRenderedState, s = a(o, n);
				if (i.hasEagerState = !0, i.eagerState = s, Wr(s, o)) return Oi(e, t, i, 0), $u === null && Di(), !1;
			} catch {}
			if (n = ki(e, t, i, r), n !== null) return Nd(n, e, r), uc(n, t, r), !0;
		}
		return !1;
	}
	function sc(e, t, n, r) {
		if (r = {
			lane: 2,
			revertLane: Mf(),
			gesture: null,
			action: r,
			hasEagerState: !1,
			eagerState: null,
			next: null
		}, cc(e)) {
			if (t) throw Error(i(479));
		} else t = ki(e, n, r, 2), t !== null && Nd(t, e, 2);
	}
	function cc(e) {
		var t = e.alternate;
		return e === V || t !== null && t === V;
	}
	function lc(e, t) {
		Wo = Uo = !0;
		var n = e.pending;
		n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
	}
	function uc(e, t, n) {
		if (n & 4194048) {
			var r = t.lanes;
			r &= e.pendingLanes, n |= r, t.lanes = n, gt(e, n);
		}
	}
	var dc = {
		readContext: Oa,
		use: cs,
		useCallback: Yo,
		useContext: Yo,
		useEffect: Yo,
		useImperativeHandle: Yo,
		useLayoutEffect: Yo,
		useInsertionEffect: Yo,
		useMemo: Yo,
		useReducer: Yo,
		useRef: Yo,
		useState: Yo,
		useDebugValue: Yo,
		useDeferredValue: Yo,
		useTransition: Yo,
		useSyncExternalStore: Yo,
		useId: Yo,
		useHostTransitionStatus: Yo,
		useFormState: Yo,
		useActionState: Yo,
		useOptimistic: Yo,
		useMemoCache: Yo,
		useCacheRefresh: Yo,
		useEffectEvent: Yo
	}, fc = {
		readContext: Oa,
		use: cs,
		useCallback: function(e, t) {
			return is().memoizedState = [e, t === void 0 ? null : t], e;
		},
		useContext: Oa,
		useEffect: Is,
		useImperativeHandle: function(e, t, n) {
			n = n == null ? null : n.concat([e]), Ps(4194308, 4, Hs.bind(null, t, e), n);
		},
		useLayoutEffect: function(e, t) {
			return Ps(4194308, 4, e, t);
		},
		useInsertionEffect: function(e, t) {
			Ps(4, 2, e, t);
		},
		useMemo: function(e, t) {
			var n = is();
			t = t === void 0 ? null : t;
			var r = e();
			if (W) {
				Qe(!0);
				try {
					e();
				} finally {
					Qe(!1);
				}
			}
			return n.memoizedState = [r, t], r;
		},
		useReducer: function(e, t, n) {
			var r = is();
			if (n !== void 0) {
				var i = n(t);
				if (W) {
					Qe(!0);
					try {
						n(t);
					} finally {
						Qe(!1);
					}
				}
			} else i = t;
			return r.memoizedState = r.baseState = i, e = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: e,
				lastRenderedState: i
			}, r.queue = e, e = e.dispatch = ic.bind(null, V, e), [r.memoizedState, e];
		},
		useRef: function(e) {
			var t = is();
			return e = { current: e }, t.memoizedState = e;
		},
		useState: function(e) {
			e = vs(e);
			var t = e.queue, n = ac.bind(null, V, t);
			return t.dispatch = n, [e.memoizedState, n];
		},
		useDebugValue: Ws,
		useDeferredValue: function(e, t) {
			return qs(is(), e, t);
		},
		useTransition: function() {
			var e = vs(!1);
			return e = Ys.bind(null, V, e.queue, !0, !1), is().memoizedState = e, [!1, e];
		},
		useSyncExternalStore: function(e, t, n) {
			var r = V, a = is();
			if (L) {
				if (n === void 0) throw Error(i(407));
				n = n();
			} else {
				if (n = t(), $u === null) throw Error(i(349));
				Y & 127 || ps(r, t, n);
			}
			a.memoizedState = n;
			var o = {
				value: n,
				getSnapshot: t
			};
			return a.queue = o, Is(hs.bind(null, r, o, e), [e]), r.flags |= 2048, Ms(9, { destroy: void 0 }, ms.bind(null, r, o, n, t), null), n;
		},
		useId: function() {
			var e = is(), t = $u.identifierPrefix;
			if (L) {
				var n = ea, r = $i;
				n = (r & ~(1 << 32 - $e(r) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = Go++, 0 < n && (t += "H" + n.toString(32)), t += "_";
			} else n = Jo++, t = "_" + t + "r_" + n.toString(32) + "_";
			return e.memoizedState = t;
		},
		useHostTransitionStatus: ec,
		useFormState: Ds,
		useActionState: Ds,
		useOptimistic: function(e) {
			var t = is();
			t.memoizedState = t.baseState = e;
			var n = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: null,
				lastRenderedState: null
			};
			return t.queue = n, t = sc.bind(null, V, !0, n), n.dispatch = t, [e, t];
		},
		useMemoCache: G,
		useCacheRefresh: function() {
			return is().memoizedState = rc.bind(null, V);
		},
		useEffectEvent: function(e) {
			var t = is(), n = { impl: e };
			return t.memoizedState = n, function() {
				if (Qu & 2) throw Error(i(440));
				return n.impl.apply(void 0, arguments);
			};
		}
	}, pc = {
		readContext: Oa,
		use: cs,
		useCallback: Gs,
		useContext: Oa,
		useEffect: Ls,
		useImperativeHandle: Us,
		useInsertionEffect: Bs,
		useLayoutEffect: Vs,
		useMemo: Ks,
		useReducer: us,
		useRef: Ns,
		useState: function() {
			return us(ls);
		},
		useDebugValue: Ws,
		useDeferredValue: function(e, t) {
			return Js(as(), H.memoizedState, e, t);
		},
		useTransition: function() {
			var e = us(ls)[0], t = as().memoizedState;
			return [typeof e == "boolean" ? e : ss(e), t];
		},
		useSyncExternalStore: K,
		useId: tc,
		useHostTransitionStatus: ec,
		useFormState: Os,
		useActionState: Os,
		useOptimistic: function(e, t) {
			return ys(as(), H, e, t);
		},
		useMemoCache: G,
		useCacheRefresh: nc,
		useEffectEvent: zs
	}, mc = {
		readContext: Oa,
		use: cs,
		useCallback: Gs,
		useContext: Oa,
		useEffect: Ls,
		useImperativeHandle: Us,
		useInsertionEffect: Bs,
		useLayoutEffect: Vs,
		useMemo: Ks,
		useReducer: fs,
		useRef: Ns,
		useState: function() {
			return fs(ls);
		},
		useDebugValue: Ws,
		useDeferredValue: function(e, t) {
			var n = as();
			return H === null ? qs(n, e, t) : Js(n, H.memoizedState, e, t);
		},
		useTransition: function() {
			var e = fs(ls)[0], t = as().memoizedState;
			return [typeof e == "boolean" ? e : ss(e), t];
		},
		useSyncExternalStore: K,
		useId: tc,
		useHostTransitionStatus: ec,
		useFormState: js,
		useActionState: js,
		useOptimistic: function(e, t) {
			var n = as();
			return H === null ? (n.baseState = e, [e, n.queue.dispatch]) : ys(n, H, e, t);
		},
		useMemoCache: G,
		useCacheRefresh: nc,
		useEffectEvent: zs
	};
	function hc(e, t, n, r) {
		t = e.memoizedState, n = n(r, t), n = n == null ? t : w({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
	}
	var gc = {
		enqueueSetState: function(e, t, n) {
			e = e._reactInternals;
			var r = Ad(), i = vo(r);
			i.payload = t, n != null && (i.callback = n), t = yo(e, i, r), t !== null && (Nd(t, e, r), bo(t, e, r));
		},
		enqueueReplaceState: function(e, t, n) {
			e = e._reactInternals;
			var r = Ad(), i = vo(r);
			i.tag = 1, i.payload = t, n != null && (i.callback = n), t = yo(e, i, r), t !== null && (Nd(t, e, r), bo(t, e, r));
		},
		enqueueForceUpdate: function(e, t) {
			e = e._reactInternals;
			var n = Ad(), r = vo(n);
			r.tag = 2, t != null && (r.callback = t), t = yo(e, r, n), t !== null && (Nd(t, e, n), bo(t, e, n));
		}
	};
	function _c(e, t, n, r, i, a, o) {
		return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, a, o) : t.prototype && t.prototype.isPureReactComponent ? !Gr(n, r) || !Gr(i, a) : !0;
	}
	function vc(e, t, n, r) {
		e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && gc.enqueueReplaceState(t, t.state, null);
	}
	function yc(e, t) {
		var n = t;
		if ("ref" in t) for (var r in n = {}, t) r !== "ref" && (n[r] = t[r]);
		if (e = e.defaultProps) for (var i in n === t && (n = w({}, n)), e) n[i] === void 0 && (n[i] = e[i]);
		return n;
	}
	function bc(e) {
		Ci(e);
	}
	function xc(e) {
		console.error(e);
	}
	function Sc(e) {
		Ci(e);
	}
	function Cc(e, t) {
		try {
			var n = e.onUncaughtError;
			n(t.value, { componentStack: t.stack });
		} catch (e) {
			setTimeout(function() {
				throw e;
			});
		}
	}
	function wc(e, t, n) {
		try {
			var r = e.onCaughtError;
			r(n.value, {
				componentStack: n.stack,
				errorBoundary: t.tag === 1 ? t.stateNode : null
			});
		} catch (e) {
			setTimeout(function() {
				throw e;
			});
		}
	}
	function Tc(e, t, n) {
		return n = vo(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
			Cc(e, t);
		}, n;
	}
	function Ec(e) {
		return e = vo(e), e.tag = 3, e;
	}
	function Dc(e, t, n, r) {
		var i = n.type.getDerivedStateFromError;
		if (typeof i == "function") {
			var a = r.value;
			e.payload = function() {
				return i(a);
			}, e.callback = function() {
				wc(t, n, r);
			};
		}
		var o = n.stateNode;
		o !== null && typeof o.componentDidCatch == "function" && (e.callback = function() {
			wc(t, n, r), typeof i != "function" && (_d === null ? _d = /* @__PURE__ */ new Set([this]) : _d.add(this));
			var e = r.stack;
			this.componentDidCatch(r.value, { componentStack: e === null ? "" : e });
		});
	}
	function Oc(e, t, n, r, a) {
		if (n.flags |= 32768, typeof r == "object" && r && typeof r.then == "function") {
			if (t = n.alternate, t !== null && Ta(t, n, a, !0), n = jo.current, n !== null) {
				switch (n.tag) {
					case 31:
					case 13:
					case 19: return Mo === null ? Gd() : n.alternate === null && id === 0 && (id = 3), n.flags &= -257, n.flags |= 65536, n.lanes = a, r === z ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([r]) : t.add(r), ff(e, r, a)), !1;
					case 22: return n.flags |= 65536, r === z ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
						transitions: null,
						markerInstances: null,
						retryQueue: /* @__PURE__ */ new Set([r])
					}, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([r]) : n.add(r)), ff(e, r, a)), !1;
				}
				throw Error(i(435, n.tag));
			}
			return ff(e, r, a), Gd(), !1;
		}
		if (L) return t = jo.current, t === null ? (r !== ua && (t = Error(i(423), { cause: r }), _a(Gi(t, n))), e = e.current.alternate, e.flags |= 65536, a &= -a, e.lanes |= a, r = Gi(r, n), a = Tc(e.stateNode, r, a), xo(e, a), id !== 4 && (id = 2)) : (!(t.flags & 65536) && (t.flags |= 256), t.flags |= 65536, t.lanes = a, r !== ua && (e = Error(i(422), { cause: r }), _a(Gi(e, n)))), !1;
		var o = Error(i(520), { cause: r });
		if (o = Gi(o, n), ud === null ? ud = [o] : ud.push(o), id !== 4 && (id = 2), t === null) return !0;
		r = Gi(r, n), n = t;
		do {
			switch (n.tag) {
				case 3: return n.flags |= 65536, e = a & -a, n.lanes |= e, e = Tc(n.stateNode, r, e), xo(n, e), !1;
				case 1:
					if (t = n.type, o = n.stateNode, !(n.flags & 128) && (typeof t.getDerivedStateFromError == "function" || o !== null && typeof o.componentDidCatch == "function" && (_d === null || !_d.has(o)))) return n.flags |= 65536, a &= -a, n.lanes |= a, a = Ec(a), Dc(a, e, n, r), xo(n, a), !1;
					break;
				case 22: if (n.memoizedState !== null) return n.flags |= 65536, !1;
			}
			n = n.return;
		} while (n !== null);
		return !1;
	}
	var kc = Error(i(461)), Ac = !1;
	function jc(e, t, n, r) {
		t.child = e === null ? mo(t, null, n, r) : po(t, e.child, n, r);
	}
	function Mc(e, t, n, r, i) {
		n = n.render;
		var a = t.ref;
		if ("ref" in r) {
			var o = {};
			for (var s in r) s !== "ref" && (o[s] = r[s]);
		} else o = r;
		return Da(t), r = Zo(e, t, n, o, a, i), s = ts(), e !== null && !Ac ? (ns(e, t, i), ol(e, t, i)) : (L && s && ra(t), t.flags |= 1, jc(e, t, r, i), t.child);
	}
	function Nc(e, t, n, r, i) {
		if (e === null) {
			var a = n.type;
			return typeof a == "function" && !Ii(a) && a.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = a, Pc(e, t, a, r, i)) : (e = zi(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
		}
		if (a = e.child, !sl(e, i)) {
			var o = a.memoizedProps;
			if (n = n.compare, n = n === null ? Gr : n, n(o, r) && e.ref === t.ref) return ol(e, t, i);
		}
		return t.flags |= 1, e = Li(a, r), e.ref = t.ref, e.return = t, t.child = e;
	}
	function Pc(e, t, n, r, i) {
		if (e !== null) {
			var a = e.memoizedProps;
			if (Gr(a, r) && e.ref === t.ref) {
				if (Ac = !1, t.pendingProps = r = a, sl(e, i)) e.flags & 131072 && (Ac = !0);
				else return t.lanes = e.lanes, ol(e, t, i);
			}
		}
		return Hc(e, t, n, r, i);
	}
	function Fc(e, t, n, r) {
		var i = r.children, a = e === null ? null : e.memoizedState;
		if (e === null && t.stateNode === null && (t.stateNode = {
			_visibility: 1,
			_pendingMarkers: null,
			_retryCache: null,
			_transitions: null
		}), r.mode === "hidden") {
			if (t.flags & 128) {
				if (a = a === null ? n : a.baseLanes | n, e !== null) {
					for (r = t.child = e.child, i = 0; r !== null;) i = i | r.lanes | r.childLanes, r = r.sibling;
					r = i & ~a;
				} else r = 0, t.child = null;
				return Lc(e, t, a, n, r);
			}
			if (n & 536870912) t.memoizedState = {
				baseLanes: 0,
				cachePool: null
			}, e !== null && Ya(t, a === null ? null : a.cachePool), a === null ? ko() : Oo(t, a), Fo(t);
			else return r = t.lanes = 536870912, Lc(e, t, a === null ? n : a.baseLanes | n, n, r);
		} else a === null ? (e !== null && Ya(t, null), ko(), Io()) : (Ya(t, a.cachePool), Oo(t, a), Io(), t.memoizedState = null);
		return jc(e, t, i, n), t.child;
	}
	function Ic(e, t) {
		return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
			_visibility: 1,
			_pendingMarkers: null,
			_retryCache: null,
			_transitions: null
		}), t.sibling;
	}
	function Lc(e, t, n, r, i) {
		var a = Ja();
		return a = a === null ? null : {
			parent: Pa._currentValue,
			pool: a
		}, t.memoizedState = {
			baseLanes: n,
			cachePool: a
		}, e !== null && Ya(t, null), ko(), Fo(t), e !== null && Ta(e, t, r, !0), t.childLanes = i, null;
	}
	function Rc(e, t) {
		return t = Zc({
			mode: t.mode,
			children: t.children
		}, e.mode), t.ref = e.ref, e.child = t, t.return = e, t;
	}
	function zc(e, t, n) {
		return po(t, e.child, null, n), e = Rc(t, t.pendingProps), e.flags |= 2, Lo(t), t.memoizedState = null, e;
	}
	function Bc(e, t, n) {
		var r = t.pendingProps, a = !!(t.flags & 128);
		if (t.flags &= -129, e === null) {
			if (L) {
				if (r.mode === "hidden") return e = Rc(t, r), t.lanes = 536870912, e.memoizedState = {
					baseLanes: 0,
					cachePool: null
				}, Ic(null, e);
				if (Po(t), (e = sa) ? (e = am(e, la), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
					dehydrated: e,
					treeContext: Qi === null ? null : {
						id: $i,
						overflow: ea
					},
					retryLane: 536870912,
					hydrationErrors: null
				}, n = Hi(e), n.return = t, t.child = n, oa = t, sa = null)) : e = null, e === null) throw da(t);
				return t.lanes = 536870912, null;
			}
			return Rc(t, r);
		}
		var o = e.memoizedState;
		if (o !== null) {
			var s = o.dehydrated;
			if (Po(t), a) {
				if (t.flags & 256) t.flags &= -257, t = zc(e, t, n);
				else if (t.memoizedState !== null) t.child = e.child, t.flags |= 128, t = null;
				else throw Error(i(558));
			} else if (Ac || Ta(e, t, n, !1), a = (n & e.childLanes) !== 0, Ac || a) {
				if (Eo.current === null) {
					if (r = $u, r !== null && (s = _t(r, n), s !== 0 && s !== o.retryLane)) throw o.retryLane = s, Ai(e, s), Nd(r, e, s), kc;
					Gd();
				}
				t = zc(e, t, n);
			} else e = o.treeContext, sa = lm(s.nextSibling), oa = t, L = !0, ca = null, la = !1, e !== null && aa(t, e), t = Rc(t, r), t.flags |= 134221824;
			return t;
		}
		return e = Li(e.child, {
			mode: r.mode,
			children: r.children
		}), e.ref = t.ref, t.child = e, e.return = t, e;
	}
	function Vc(e, t) {
		var n = t.ref;
		if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
		else {
			if (typeof n != "function" && typeof n != "object") throw Error(i(284));
			(e === null || e.ref !== n) && (t.flags |= 4194816);
		}
	}
	function Hc(e, t, n, r, i) {
		return Da(t), n = Zo(e, t, n, r, void 0, i), r = ts(), e !== null && !Ac ? (ns(e, t, i), ol(e, t, i)) : (L && r && ra(t), t.flags |= 1, jc(e, t, n, i), t.child);
	}
	function Uc(e, t, n, r, i, a) {
		return Da(t), t.updateQueue = null, n = $o(t, r, n, i), Qo(e), r = ts(), e !== null && !Ac ? (ns(e, t, a), ol(e, t, a)) : (L && r && ra(t), t.flags |= 1, jc(e, t, n, a), t.child);
	}
	function Wc(e, t, n, r, i) {
		if (Da(t), t.stateNode === null) {
			var a = Ni, o = n.contextType;
			typeof o == "object" && o && (a = Oa(o)), a = new n(r, a), t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, a.updater = gc, t.stateNode = a, a._reactInternals = t, a = t.stateNode, a.props = r, a.state = t.memoizedState, a.refs = {}, go(t), o = n.contextType, a.context = typeof o == "object" && o ? Oa(o) : Ni, a.state = t.memoizedState, o = n.getDerivedStateFromProps, typeof o == "function" && (hc(t, n, o, r), a.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function" || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (o = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), o !== a.state && gc.enqueueReplaceState(a, a.state, null), Co(t, r, a, i), B(), a.state = t.memoizedState), typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !0;
		} else if (e === null) {
			a = t.stateNode;
			var s = t.memoizedProps, c = yc(n, s);
			a.props = c;
			var l = a.context, u = n.contextType;
			o = Ni, typeof u == "object" && u && (o = Oa(u));
			var d = n.getDerivedStateFromProps;
			u = typeof d == "function" || typeof a.getSnapshotBeforeUpdate == "function", s = t.pendingProps !== s, u || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s || l !== o) && vc(t, a, r, o), ho = !1;
			var f = t.memoizedState;
			a.state = f, Co(t, r, a, i), B(), l = t.memoizedState, s || f !== l || ho ? (typeof d == "function" && (hc(t, n, d, r), l = t.memoizedState), (c = ho || _c(t, n, c, r, f, l, o)) ? (u || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), a.props = r, a.state = l, a.context = o, r = c) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
		} else {
			a = t.stateNode, _o(e, t), o = t.memoizedProps, u = yc(n, o), a.props = u, d = t.pendingProps, f = a.context, l = n.contextType, c = Ni, typeof l == "object" && l && (c = Oa(l)), s = n.getDerivedStateFromProps, (l = typeof s == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (o !== d || f !== c) && vc(t, a, r, c), ho = !1, f = t.memoizedState, a.state = f, Co(t, r, a, i), B();
			var p = t.memoizedState;
			o !== d || f !== p || ho || e !== null && e.dependencies !== null && Ea(e.dependencies) ? (typeof s == "function" && (hc(t, n, s, r), p = t.memoizedState), (u = ho || _c(t, n, u, r, f, p, c) || e !== null && e.dependencies !== null && Ea(e.dependencies)) ? (l || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, p, c), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, p, c)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = p), a.props = r, a.state = p, a.context = c, r = u) : (typeof a.componentDidUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1);
		}
		return a = r, Vc(e, t), r = !!(t.flags & 128), a || r ? (a = t.stateNode, n = r && typeof n.getDerivedStateFromError != "function" ? null : a.render(), t.flags |= 1, e !== null && r ? (t.child = po(t, e.child, null, i), t.child = po(t, null, n, i)) : jc(e, t, n, i), t.memoizedState = a.state, e = t.child) : e = ol(e, t, i), e;
	}
	function Gc(e, t, n, r) {
		return ha(), t.flags |= 256, jc(e, t, n, r), t.child;
	}
	var Kc = {
		dehydrated: null,
		treeContext: null,
		retryLane: 0,
		hydrationErrors: null
	};
	function qc(e) {
		return {
			baseLanes: e,
			cachePool: Xa()
		};
	}
	function Jc(e, t, n) {
		return e = e === null ? 0 : e.childLanes & ~n, t && (e |= cd), e;
	}
	function Yc(e, t, n) {
		var r = t.pendingProps, i = !1, a = !!(t.flags & 128), o;
		if ((o = a) || (o = e !== null && e.memoizedState === null ? !1 : !!(Ro.current & 2)), o && (i = !0, t.flags &= -129), o = !!(t.flags & 32), t.flags &= -33, e === null) {
			if (L) {
				if (i ? No(t) : Io(), (e = sa) ? (e = am(e, la), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
					dehydrated: e,
					treeContext: Qi === null ? null : {
						id: $i,
						overflow: ea
					},
					retryLane: 536870912,
					hydrationErrors: null
				}, n = Hi(e), n.return = t, t.child = n, oa = t, sa = null)) : e = null, e === null) throw da(t);
				return t.lanes = sm(e) ? 32 : 536870912, null;
			}
			return a = r.children, r = r.fallback, i ? (Io(), i = t.mode, a = Zc({
				mode: "hidden",
				children: a
			}, i), r = Bi(r, i, n, null), a.return = t, r.return = t, a.sibling = r, t.child = a, r = t.child, r.memoizedState = qc(n), r.childLanes = Jc(e, o, n), t.memoizedState = Kc, Ic(null, r)) : (No(t), Xc(t, a));
		}
		var s = e.memoizedState;
		if (s !== null) {
			var c = s.dehydrated;
			if (c !== null) return $c(e, t, a, o, r, c, s, n);
		}
		return i ? (Io(), i = r.fallback, a = t.mode, s = e.child, c = s.sibling, r = Li(s, {
			mode: "hidden",
			children: r.children
		}), r.subtreeFlags = s.subtreeFlags & 1206910976, c === null ? (i = Bi(i, a, n, null), i.flags |= 2) : i = Li(c, i), i.return = t, r.return = t, r.sibling = i, t.child = r, Ic(null, r), r = t.child, i = e.child.memoizedState, i === null ? i = qc(n) : (a = i.cachePool, a === null ? a = Xa() : (s = Pa._currentValue, a = a.parent === s ? a : {
			parent: s,
			pool: s
		}), i = {
			baseLanes: i.baseLanes | n,
			cachePool: a
		}), r.memoizedState = i, r.childLanes = Jc(e, o, n), t.memoizedState = Kc, Ic(e.child, r)) : (No(t), n = e.child, e = n.sibling, n = Li(n, {
			mode: "visible",
			children: r.children
		}), n.return = t, n.sibling = null, e !== null && (o = t.deletions, o === null ? (t.deletions = [e], t.flags |= 16) : o.push(e)), t.child = n, t.memoizedState = null, n);
	}
	function Xc(e, t) {
		return t = Zc({
			mode: "visible",
			children: t
		}, e.mode), t.return = e, e.child = t;
	}
	function Zc(e, t) {
		return e = Fi(22, e, null, t), e.lanes = 0, e;
	}
	function Qc(e, t, n) {
		return po(t, e.child, null, n), e = Xc(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
	}
	function $c(e, t, n, r, a, o, s, c) {
		if (n) return t.flags & 256 ? (No(t), t.flags &= -257, Qc(e, t, c)) : t.memoizedState === null ? (Io(), o = a.fallback, s = t.mode, a = Zc({
			mode: "visible",
			children: a.children
		}, s), o = Bi(o, s, c, null), o.flags |= 2, a.return = t, o.return = t, a.sibling = o, t.child = a, po(t, e.child, null, c), a = t.child, a.memoizedState = qc(c), a.childLanes = Jc(e, r, c), t.memoizedState = Kc, Ic(null, a)) : (Io(), t.child = e.child, t.flags |= 128, null);
		if (No(t), sm(o)) {
			if (r = o.nextSibling && o.nextSibling.dataset, r) var l = r.dgst;
			return r = l, r !== "" && (a = Error(i(419)), a.stack = "", a.digest = r, _a({
				value: a,
				source: null,
				stack: null
			})), Qc(e, t, c);
		}
		if (Ac || Ta(e, t, c, !1), r = (c & e.childLanes) !== 0, Ac || r) {
			if (Eo.current !== null) return Qc(e, t, c);
			if (r = $u, r !== null && (a = _t(r, c), a !== 0 && a !== s.retryLane)) throw s.retryLane = a, Ai(e, a), Nd(r, e, a), kc;
			return om(o) || Gd(), Qc(e, t, c);
		}
		return om(o) ? (t.flags |= 192, t.child = e.child, null) : (e = s.treeContext, sa = lm(o.nextSibling), oa = t, L = !0, ca = null, la = !1, e !== null && aa(t, e), t = Xc(t, a.children), t.flags |= 134221824, t);
	}
	function el(e, t, n) {
		e.lanes |= t;
		var r = e.alternate;
		r !== null && (r.lanes |= t), Ca(e.return, t, n);
	}
	function tl(e) {
		for (var t = null; e !== null;) {
			var n = e.alternate;
			n !== null && Vo(n) === null && (t = e), e = e.sibling;
		}
		return t;
	}
	function nl(e, t, n, r, i, a) {
		var o = e.memoizedState;
		o === null ? e.memoizedState = {
			isBackwards: t,
			rendering: null,
			renderingStartTime: 0,
			last: r,
			tail: n,
			tailMode: i,
			treeForkCount: a
		} : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i, o.treeForkCount = a);
	}
	function rl(e) {
		var t = e.child;
		for (e.child = null; t !== null;) {
			var n = t.sibling;
			t.sibling = e.child, e.child = t, t = n;
		}
	}
	function il(e, t, n) {
		var r = t.pendingProps, i = r.revealOrder, a = r.tail;
		r = r.children;
		var o = Ro.current;
		if (t.flags & 128) return zo(t, o), null;
		var s = !!(o & 2);
		if (s ? (o = o & 1 | 2, t.flags |= 128) : o &= 1, zo(t, o), i === "backwards" && e !== null ? (rl(e), jc(e, t, r, n), rl(e)) : jc(e, t, r, n), r = L ? Yi : 0, !s && e !== null && e.flags & 128) a: for (e = t.child; e !== null;) {
			if (e.tag === 13) e.memoizedState !== null && el(e, n, t);
			else if (e.tag === 19) el(e, n, t);
			else if (e.child !== null) {
				e.child.return = e, e = e.child;
				continue;
			}
			if (e === t) break a;
			for (; e.sibling === null;) {
				if (e.return === null || e.return === t) break a;
				e = e.return;
			}
			e.sibling.return = e.return, e = e.sibling;
		}
		switch (i) {
			case "backwards":
				n = tl(t.child), n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null, rl(t)), nl(t, !0, i, null, a, r);
				break;
			case "unstable_legacy-backwards":
				for (n = null, i = t.child, t.child = null; i !== null;) {
					if (e = i.alternate, e !== null && Vo(e) === null) {
						t.child = i;
						break;
					}
					e = i.sibling, i.sibling = n, n = i, i = e;
				}
				nl(t, !0, n, null, a, r);
				break;
			case "together":
				nl(t, !1, null, null, void 0, r);
				break;
			case "independent":
				t.memoizedState = null;
				break;
			default: n = tl(t.child), n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), nl(t, !1, i, n, a, r);
		}
		return t.child;
	}
	function al(e, t, n) {
		var r = t.pendingProps;
		return xa(t, t.type, r.value), jc(e, t, r.children, n), t.child;
	}
	function ol(e, t, n) {
		if (e !== null && (t.dependencies = e.dependencies), ad |= t.lanes, (n & t.childLanes) === 0) {
			if (e !== null) {
				if (Ta(e, t, n, !1), (n & t.childLanes) === 0) return null;
			} else return null;
		}
		if (e !== null && t.child !== e.child) throw Error(i(153));
		if (t.child !== null) {
			for (e = t.child, n = Li(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = Li(e, e.pendingProps), n.return = t;
			n.sibling = null;
		}
		return t.child;
	}
	function sl(e, t) {
		return (e.lanes & t) !== 0 || (e = e.dependencies, !!(e !== null && Ea(e)));
	}
	function cl(e, t, n) {
		switch (t.tag) {
			case 3:
				De(t, t.stateNode.containerInfo), xa(t, Pa, e.memoizedState.cache), ha();
				break;
			case 27:
			case 5:
				N(t);
				break;
			case 4:
				De(t, t.stateNode.containerInfo);
				break;
			case 10:
				xa(t, t.type, t.memoizedProps.value);
				break;
			case 31:
				if (t.memoizedState !== null) return t.flags |= 128, Po(t), null;
				break;
			case 13:
				var r = t.memoizedState;
				if (r !== null) {
					if (r.dehydrated !== null) return No(t), t.flags |= 128, null;
					r = Ta(e, t, n, !1);
					var i = t.child.childLanes;
					return r || (n & i) !== 0 ? Yc(e, t, n) : (No(t), e = ol(e, t, n), e === null ? null : e.sibling);
				}
				No(t);
				break;
			case 19:
				if (t.flags & 128) return il(e, t, n);
				if (i = !!(e.flags & 128), r = (n & t.childLanes) !== 0, r ||= (Ta(e, t, n, !1), (n & t.childLanes) !== 0), i) {
					if (r) return il(e, t, n);
					t.flags |= 128;
				}
				if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), zo(t, Ro.current), r) break;
				return null;
			case 22: return t.lanes = 0, Fc(e, t, n, t.pendingProps);
			case 24: xa(t, Pa, e.memoizedState.cache);
		}
		return ol(e, t, n);
	}
	function ll(e, t, n) {
		if (e !== null) {
			if (e.memoizedProps !== t.pendingProps) Ac = !0;
			else {
				if (!sl(e, n) && !(t.flags & 128)) return Ac = !1, cl(e, t, n);
				Ac = !!(e.flags & 131072);
			}
		} else Ac = !1, L && t.flags & 1048576 && na(t, Yi, t.index);
		switch (t.lanes = 0, t.tag) {
			case 16:
				a: {
					var r = t.pendingProps;
					if (e = no(t.elementType), t.type = e, typeof e == "function") Ii(e) ? (r = yc(e, r), t.tag = 1, t = Wc(null, t, e, r, n)) : (t.tag = 0, t = Hc(null, t, e, r, n));
					else {
						if (e != null) {
							var a = e.$$typeof;
							if (a === k) {
								t.tag = 11, t = Mc(null, t, e, r, n);
								break a;
							}
							if (a === oe) {
								t.tag = 14, t = Nc(null, t, e, r, n);
								break a;
							}
							if (a === O) {
								t.tag = 10, t.type = e, t = al(null, t, n);
								break a;
							}
						}
						throw t = ge(e) || e, Error(i(306, t, ""));
					}
				}
				return t;
			case 0: return Hc(e, t, t.type, t.pendingProps, n);
			case 1: return r = t.type, a = yc(r, t.pendingProps), Wc(e, t, r, a, n);
			case 3:
				a: {
					if (De(t, t.stateNode.containerInfo), e === null) throw Error(i(387));
					r = t.pendingProps;
					var o = t.memoizedState;
					a = o.element, _o(e, t), Co(t, r, null, n);
					var s = t.memoizedState;
					if (r = s.cache, xa(t, Pa, r), r !== o.cache && wa(t, [Pa], n, !0), B(), r = s.element, o.isDehydrated) {
						if (o = {
							element: r,
							isDehydrated: !1,
							cache: s.cache
						}, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
							t = Gc(e, t, r, n);
							break a;
						}
						if (r !== a) {
							a = Gi(Error(i(424)), t), _a(a), t = Gc(e, t, r, n);
							break a;
						}
						switch (e = t.stateNode.containerInfo, e.nodeType) {
							case 9:
								e = e.body;
								break;
							default: e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
						}
						for (sa = lm(e.firstChild), oa = t, L = !0, ca = null, la = !0, n = mo(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 134221824, n = n.sibling;
					} else {
						if (ha(), r === a) {
							t = ol(e, t, n);
							break a;
						}
						jc(e, t, r, n);
					}
					t = t.child;
				}
				return t;
			case 26: return Vc(e, t), e === null ? (n = Nm(t.type, null, t.pendingProps, null)) ? t.memoizedState = n : L || (t.stateNode = fp(t.type, t.pendingProps, Te.current, t)) : t.memoizedState = Nm(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
			case 27: return N(t), e === null && L && (r = t.stateNode = hm(t.type, t.pendingProps, Te.current), oa = t, la = !0, a = sa, Sp(t.type) ? (um = a, sa = lm(r.firstChild)) : sa = a), jc(e, t, t.pendingProps.children, n), Vc(e, t), e === null && (t.flags |= 4194304), t.child;
			case 5: return e === null && L && ((a = r = sa) && (r = rm(r, t.type, t.pendingProps, la), r === null ? a = !1 : (t.stateNode = r, oa = t, sa = lm(r.firstChild), la = !1, a = !0)), a || da(t)), N(t), a = t.type, o = t.pendingProps, s = e === null ? null : e.memoizedProps, r = o.children, pp(a, o) ? r = null : s !== null && pp(a, s) && (t.flags |= 32), t.memoizedState !== null && (a = Zo(e, t, es, null, null, n), sh._currentValue = a), Vc(e, t), jc(e, t, r, n), t.child;
			case 6: return e === null && L && ((e = n = sa) && (n = im(n, t.pendingProps, la), n === null ? e = !1 : (t.stateNode = n, oa = t, sa = null, e = !0)), e || da(t)), null;
			case 13: return Yc(e, t, n);
			case 4: return De(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = po(t, null, r, n) : jc(e, t, r, n), t.child;
			case 11: return Mc(e, t, t.type, t.pendingProps, n);
			case 7: return r = t.pendingProps, Vc(e, t), jc(e, t, r, n), t.child;
			case 8: return jc(e, t, t.pendingProps.children, n), t.child;
			case 12: return jc(e, t, t.pendingProps.children, n), t.child;
			case 10: return al(e, t, n);
			case 9: return a = t.type._context, r = t.pendingProps.children, Da(t), a = Oa(a), r = r(a), t.flags |= 1, jc(e, t, r, n), t.child;
			case 14: return Nc(e, t, t.type, t.pendingProps, n);
			case 15: return Pc(e, t, t.type, t.pendingProps, n);
			case 19: return il(e, t, n);
			case 31: return Bc(e, t, n);
			case 22: return Fc(e, t, n, t.pendingProps);
			case 24: return Da(t), r = Oa(Pa), e === null ? (a = Ja(), a === null && (a = $u, o = Fa(), a.pooledCache = o, o.refCount++, o !== null && (a.pooledCacheLanes |= n), a = o), t.memoizedState = {
				parent: r,
				cache: a
			}, go(t), xa(t, Pa, a)) : ((e.lanes & n) !== 0 && (_o(e, t), Co(t, null, null, n), B()), a = e.memoizedState, o = t.memoizedState, a.parent === r ? (r = o.cache, xa(t, Pa, r), r !== a.cache && wa(t, [Pa], n, !0)) : (a = {
				parent: r,
				cache: r
			}, t.memoizedState = a, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = a), xa(t, Pa, r))), jc(e, t, t.pendingProps.children, n), t.child;
			case 30: return t.stateNode === null && (t.stateNode = {
				autoName: null,
				paired: null,
				clones: null,
				ref: null
			}), r = t.pendingProps, r.name != null && r.name !== "auto" ? t.flags |= e === null ? 18882560 : 18874368 : L && ra(t), e !== null && e.memoizedProps.name !== r.name ? t.flags |= 4194816 : Vc(e, t), jc(e, t, r.children, n), t.child;
			case 29: throw t.pendingProps;
		}
		throw Error(i(156, t.tag));
	}
	function ul(e) {
		e.flags |= 4;
	}
	function dl(e, t, n, r, i) {
		var a;
		if ((a = !!(e.mode & 32)) && (a = n === null ? Jm(t, r) : Jm(t, r) && (r.src !== n.src || r.srcSet !== n.srcSet)), a) {
			if (e.flags |= 16777216, (i & 335544128) === i) {
				if (e.stateNode.complete) e.flags |= 8192;
				else if (Hd()) e.flags |= 8192;
				else throw ro = z, Qa;
			}
		} else e.flags &= -16777217;
	}
	function fl(e, t) {
		if (t.type !== "stylesheet" || t.state.loading & 4) e.flags &= -16777217;
		else if (e.flags |= 16777216, !Ym(t)) {
			if (Hd()) e.flags |= 8192;
			else throw ro = z, Qa;
		}
	}
	function pl(e, t) {
		t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag === 22 ? 536870912 : dt(), e.lanes |= t, ld |= t);
	}
	function ml(e, t) {
		if (!L) switch (e.tailMode) {
			case "visible": break;
			case "collapsed":
				for (var n = e.tail, r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
				r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
				break;
			default:
				for (t = e.tail, n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
				n === null ? e.tail = null : n.sibling = null;
		}
	}
	function hl(e) {
		var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
		if (t) for (var i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 1206910976, r |= i.flags & 1206910976, i.return = e, i = i.sibling;
		else for (i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
		return e.subtreeFlags |= r, e.childLanes = n, t;
	}
	function gl(e, t, n) {
		var r = t.pendingProps;
		switch (ia(t), t.tag) {
			case 16:
			case 15:
			case 0:
			case 11:
			case 7:
			case 8:
			case 12:
			case 9:
			case 14: return hl(t), null;
			case 1: return hl(t), null;
			case 3: return n = t.stateNode, r = null, e !== null && (r = e.memoizedState.cache), t.memoizedState.cache !== r && (t.flags |= 2048), Sa(Pa), Oe(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (ma(t) ? ul(t) : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, ga())), hl(t), null;
			case 26:
				var a = t.type, o = t.memoizedState;
				return e === null ? (ul(t), o === null ? (hl(t), dl(t, a, null, r, n)) : (hl(t), fl(t, o))) : o ? o === e.memoizedState ? (hl(t), t.flags &= -16777217) : (ul(t), hl(t), fl(t, o)) : (e = e.memoizedProps, e !== r && ul(t), hl(t), dl(t, a, e, r, n)), null;
			case 27:
				if (ke(t), n = Te.current, a = t.type, e !== null && t.stateNode != null) e.memoizedProps !== r && ul(t);
				else {
					if (!r) {
						if (t.stateNode === null) throw Error(i(166));
						return hl(t), t.subtreeFlags &= -33554433, null;
					}
					e = M.current, ma(t) ? fa(t, e) : (e = hm(a, r, n), t.stateNode = e, ul(t));
				}
				return hl(t), t.subtreeFlags &= -33554433, null;
			case 5:
				if (ke(t), a = t.type, e !== null && t.stateNode != null) e.memoizedProps !== r && ul(t);
				else {
					if (!r) {
						if (t.stateNode === null) throw Error(i(166));
						return hl(t), t.subtreeFlags &= -33554433, null;
					}
					if (o = M.current, ma(t)) fa(t, o);
					else {
						var s = lp(Te.current);
						switch (o) {
							case 1:
								o = s.createElementNS("http://www.w3.org/2000/svg", a);
								break;
							case 2:
								o = s.createElementNS("http://www.w3.org/1998/Math/MathML", a);
								break;
							default: switch (a) {
								case "svg":
									o = s.createElementNS("http://www.w3.org/2000/svg", a);
									break;
								case "math":
									o = s.createElementNS("http://www.w3.org/1998/Math/MathML", a);
									break;
								case "script":
									o = s.createElement("div"), o.innerHTML = "<script><\/script>", o = o.removeChild(o.firstChild);
									break;
								case "select":
									o = typeof r.is == "string" ? s.createElement("select", { is: r.is }) : s.createElement("select"), r.multiple ? o.multiple = !0 : r.size && (o.size = r.size);
									break;
								default: o = typeof r.is == "string" ? s.createElement(a, { is: r.is }) : s.createElement(a);
							}
						}
						o[Et] = t, o[Dt] = r;
						a: for (s = t.child; s !== null;) {
							if (s.tag === 5 || s.tag === 6) o.appendChild(s.stateNode);
							else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
								s.child.return = s, s = s.child;
								continue;
							}
							if (s === t) break a;
							for (; s.sibling === null;) {
								if (s.return === null || s.return === t) break a;
								s = s.return;
							}
							s.sibling.return = s.return, s = s.sibling;
						}
						t.stateNode = o;
						a: switch (np(o, a, r), a) {
							case "button":
							case "input":
							case "select":
							case "textarea":
								r = !!r.autoFocus;
								break a;
							case "img":
								r = !0;
								break a;
							default: r = !1;
						}
						r && ul(t);
					}
				}
				return hl(t), t.subtreeFlags &= -33554433, dl(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n), null;
			case 6:
				if (e && t.stateNode != null) e.memoizedProps !== r && ul(t);
				else {
					if (typeof r != "string" && t.stateNode === null) throw Error(i(166));
					if (e = Te.current, ma(t)) {
						if (e = t.stateNode, n = t.memoizedProps, r = null, a = oa, a !== null) switch (a.tag) {
							case 27:
							case 5: r = a.memoizedProps;
						}
						e[Et] = t, e = !!(e.nodeValue === n || r !== null && !0 === r.suppressHydrationWarning || $f(e.nodeValue, n)), e || da(t, !0);
					} else e = lp(e).createTextNode(r), e[Et] = t, t.stateNode = e;
				}
				return hl(t), null;
			case 31:
				if (n = t.memoizedState, e === null || e.memoizedState !== null) {
					if (r = ma(t), n !== null) {
						if (e === null) {
							if (!r) throw Error(i(318));
							if (e = t.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(i(557));
							e[Et] = t;
						} else ha(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
						hl(t), e = !1;
					} else n = ga(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), e = !0;
					if (!e) return t.flags & 256 ? (Lo(t), t) : (Lo(t), null);
					if (t.flags & 128) throw Error(i(558));
				}
				return hl(t), null;
			case 13:
				if (r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
					if (a = ma(t), r !== null && r.dehydrated !== null) {
						if (e === null) {
							if (!a) throw Error(i(318));
							if (a = t.memoizedState, a = a === null ? null : a.dehydrated, !a) throw Error(i(317));
							a[Et] = t;
						} else ha(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
						hl(t), a = !1;
					} else a = ga(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), a = !0;
					if (!a) return t.flags & 256 ? (Lo(t), t) : (Lo(t), null);
				}
				return Lo(t), t.flags & 128 ? (t.lanes = n, t) : (n = r !== null, e = e !== null && e.memoizedState !== null, n && (r = t.child, a = null, r.alternate !== null && r.alternate.memoizedState !== null && r.alternate.memoizedState.cachePool !== null && (a = r.alternate.memoizedState.cachePool.pool), o = null, r.memoizedState !== null && r.memoizedState.cachePool !== null && (o = r.memoizedState.cachePool.pool), o !== a && (r.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), pl(t, t.updateQueue), hl(t), null);
			case 4: return Oe(), e === null && Uf(t.stateNode.containerInfo), t.flags |= 67108864, hl(t), null;
			case 10: return Sa(t.type), hl(t), null;
			case 19:
				if (Bo(t), r = t.memoizedState, r === null) return hl(t), null;
				if (a = !!(t.flags & 128), o = r.rendering, o === null) {
					if (a) ml(r, !1);
					else {
						if (id !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null;) {
							if (o = Vo(e), o !== null) {
								for (t.flags |= 128, ml(r, !1), e = o.updateQueue, t.updateQueue = e, pl(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null;) Ri(n, e), n = n.sibling;
								return zo(t, Ro.current & 1 | 2), L && ta(t, r.treeForkCount), t.child;
							}
							e = e.sibling;
						}
						r.tail !== null && He() > hd && (t.flags |= 128, a = !0, ml(r, !1), t.lanes = 4194304);
					}
				} else {
					if (!a) {
						if (e = Vo(o), e !== null) {
							if (t.flags |= 128, a = !0, e = e.updateQueue, t.updateQueue = e, pl(t, e), ml(r, !0), r.tail === null && r.tailMode !== "collapsed" && r.tailMode !== "visible" && !o.alternate && !L) return hl(t), null;
						} else 2 * He() - r.renderingStartTime > hd && n !== 536870912 && (t.flags |= 128, a = !0, ml(r, !1), t.lanes = 4194304);
					}
					r.isBackwards ? (o.sibling = t.child, t.child = o) : (e = r.last, e === null ? t.child = o : e.sibling = o, r.last = o);
				}
				if (r.tail !== null) {
					e = r.tail;
					a: {
						for (n = e; n !== null;) {
							if (n.alternate !== null) {
								n = !1;
								break a;
							}
							n = n.sibling;
						}
						n = !0;
					}
					return r.rendering = e, r.tail = e.sibling, r.renderingStartTime = He(), e.sibling = null, o = Ro.current, o = a ? o & 1 | 2 : o & 1, r.tailMode === "visible" || r.tailMode === "collapsed" || !n || L ? zo(t, o) : (n = o, j(jo, t), j(Ro, n), Mo === null && (Mo = t)), L && ta(t, r.treeForkCount), e;
				}
				return hl(t), null;
			case 22:
			case 23: return Lo(t), Ao(), r = t.memoizedState !== null, e === null ? r && (t.flags |= 8192) : e.memoizedState !== null !== r && (t.flags |= 8192), r ? n & 536870912 && !(t.flags & 128) && (hl(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : hl(t), n = t.updateQueue, n !== null && pl(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), r = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (r = t.memoizedState.cachePool.pool), r !== n && (t.flags |= 2048), e !== null && Ce(qa), null;
			case 24: return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), Sa(Pa), hl(t), null;
			case 25: return null;
			case 30: return t.flags |= 33554432, hl(t), null;
		}
		throw Error(i(156, t.tag));
	}
	function _l(e, t) {
		switch (ia(t), t.tag) {
			case 1: return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 3: return Sa(Pa), Oe(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
			case 26:
			case 27:
			case 5: return ke(t), null;
			case 31:
				if (t.memoizedState !== null) {
					if (Lo(t), t.alternate === null) throw Error(i(340));
					ha();
				}
				return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 13:
				if (Lo(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
					if (t.alternate === null) throw Error(i(340));
					ha();
				}
				return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 19: return Bo(t), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, e = t.memoizedState, e !== null && (e.rendering = null, e.tail = null), t.flags |= 4, t) : null;
			case 4: return Oe(), null;
			case 10: return Sa(t.type), null;
			case 22:
			case 23: return Lo(t), Ao(), e !== null && Ce(qa), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 24: return Sa(Pa), null;
			case 25: return null;
			default: return null;
		}
	}
	function vl(e, t) {
		switch (ia(t), t.tag) {
			case 3:
				Sa(Pa), Oe();
				break;
			case 26:
			case 27:
			case 5:
				ke(t);
				break;
			case 4:
				Oe();
				break;
			case 31:
				t.memoizedState !== null && Lo(t);
				break;
			case 13:
				Lo(t);
				break;
			case 19:
				Bo(t);
				break;
			case 10:
				Sa(t.type);
				break;
			case 22:
			case 23:
				Lo(t), Ao(), e !== null && Ce(qa);
				break;
			case 24: Sa(Pa);
		}
	}
	function yl(e, t) {
		try {
			var n = t.updateQueue, r = n === null ? null : n.lastEffect;
			if (r !== null) {
				var i = r.next;
				n = i;
				do {
					if ((n.tag & e) === e) {
						r = void 0;
						var a = n.create, o = n.inst;
						r = a(), o.destroy = r;
					}
					n = n.next;
				} while (n !== i);
			}
		} catch (e) {
			df(t, t.return, e);
		}
	}
	function bl(e, t, n) {
		try {
			var r = t.updateQueue, i = r === null ? null : r.lastEffect;
			if (i !== null) {
				var a = i.next;
				r = a;
				do {
					if ((r.tag & e) === e) {
						var o = r.inst, s = o.destroy;
						if (s !== void 0) {
							o.destroy = void 0, i = t;
							var c = n, l = s;
							try {
								l();
							} catch (e) {
								df(i, c, e);
							}
						}
					}
					r = r.next;
				} while (r !== a);
			}
		} catch (e) {
			df(t, t.return, e);
		}
	}
	function xl(e) {
		var t = e.updateQueue;
		if (t !== null) {
			var n = e.stateNode;
			try {
				To(t, n);
			} catch (t) {
				df(e, e.return, t);
			}
		}
	}
	function Sl(e, t, n) {
		n.props = yc(e.type, e.memoizedProps), n.state = e.memoizedState;
		try {
			n.componentWillUnmount();
		} catch (n) {
			df(e, t, n);
		}
	}
	function Cl(e, t) {
		try {
			var n = e.ref;
			if (n !== null) {
				switch (e.tag) {
					case 26:
					case 27:
					case 5:
						var r = e.stateNode;
						break;
					case 30:
						var i = e.stateNode, a = bi(e.memoizedProps, i);
						(i.ref === null || i.ref.name !== a) && (i.ref = Pp(a)), r = i.ref;
						break;
					case 7:
						if (e.stateNode === null) {
							var o = new Fp(e);
							f(e.child, !1, Qp, o, void 0, void 0), e.stateNode = o;
						}
						r = e.stateNode;
						break;
					default: r = e.stateNode;
				}
				typeof n == "function" ? e.refCleanup = n(r) : n.current = r;
			}
		} catch (n) {
			df(e, t, n);
		}
	}
	function wl(e, t) {
		var n = e.ref, r = e.refCleanup;
		if (n !== null) {
			if (typeof r == "function") try {
				r();
			} catch (n) {
				df(e, t, n);
			} finally {
				e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
			}
			else if (typeof n == "function") try {
				n(null);
			} catch (n) {
				df(e, t, n);
			}
			else n.current = null;
		}
	}
	function Tl(e, t) {
		if ((e.tag === 5 || e.tag === 27 || e.tag === 6) && e.alternate === null && t !== null) for (var n = 0; n < t.length; n++) em(e.stateNode, t[n]);
	}
	function El(e) {
		for (var t = e.return; t !== null && (kl(t) && em(e.stateNode, t.stateNode), !Ol(t));) t = t.return;
	}
	function Dl(e) {
		for (var t = e.return; t !== null && (kl(t) && tm(e.stateNode, t.stateNode), !Ol(t));) t = t.return;
	}
	function Ol(e) {
		return e.tag === 5 || e.tag === 3 || e.tag === 27;
	}
	function kl(e) {
		return e && e.tag === 7 && e.stateNode !== null;
	}
	function Al(e) {
		var t = e.type, n = e.memoizedProps, r = e.stateNode;
		try {
			a: switch (t) {
				case "button":
				case "input":
				case "select":
				case "textarea":
					n.autoFocus && r.focus();
					break a;
				case "img": n.src ? r.src = n.src : n.srcSet && (r.srcset = n.srcSet);
			}
		} catch (t) {
			df(e, e.return, t);
		}
	}
	function jl(e, t, n) {
		try {
			var r = e.stateNode;
			ip(r, e.type, n, t), r[Dt] = t;
		} catch (t) {
			df(e, e.return, t);
		}
	}
	function Ml(e) {
		return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Sp(e.type) || e.tag === 4;
	}
	function Nl(e) {
		a: for (;;) {
			for (; e.sibling === null;) {
				if (e.return === null || Ml(e.return)) return null;
				e = e.return;
			}
			for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
				if (e.tag === 27 && Sp(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue a;
				e.child.return = e, e = e.child;
			}
			if (!(e.flags & 2)) return e.stateNode;
		}
	}
	function Pl(e, t, n, r) {
		var i = e.tag;
		if (i === 5 || i === 6) i = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(i, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(i), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = xn)), Tl(e, r), Jt = !0;
		else if (i !== 4 && (i === 27 && (Tl(e, r), r = null, Sp(e.type) && (n = e.stateNode, t = null)), e = e.child, e !== null)) for (Pl(e, t, n, r), e = e.sibling; e !== null;) Pl(e, t, n, r), e = e.sibling;
	}
	function Fl(e, t, n, r) {
		var i = e.tag;
		if (i === 5 || i === 6) i = e.stateNode, t ? n.insertBefore(i, t) : n.appendChild(i), Tl(e, r), Jt = !0;
		else if (i !== 4 && (i === 27 && (Tl(e, r), r = null, Sp(e.type) && (n = e.stateNode)), e = e.child, e !== null)) for (Fl(e, t, n, r), e = e.sibling; e !== null;) Fl(e, t, n, r), e = e.sibling;
	}
	function Il(e) {
		var t = e.stateNode, n = e.memoizedProps;
		try {
			for (var r = e.type, i = t.attributes; i.length;) t.removeAttributeNode(i[0]);
			np(t, r, n), t[Et] = e, t[Dt] = n;
		} catch (t) {
			df(e, e.return, t);
		}
	}
	var Ll = !1, Rl = null;
	function zl(e) {
		(e.tag === 30 || e.subtreeFlags & 33554432) && (Ll = !0);
	}
	var Bl = null;
	function Vl() {
		var e = Bl;
		return Bl = null, e;
	}
	var Hl = 0;
	function Ul(e, t, n, r, i) {
		return Hl = 0, Wl(e.child, t, n, r, i);
	}
	function Wl(e, t, n, r, i) {
		for (var a = !1; e !== null;) {
			if (e.tag === 5) {
				var o = e.stateNode;
				if (r !== null) {
					var s = Op(o);
					r.push(s), s.view && (a = !0);
				} else a || Op(o).view && (a = !0);
				Ll = !0, Tp(o, Hl === 0 ? t : t + "_" + Hl, n), Hl++;
			} else (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && i || Wl(e.child, t, n, r, i) && (a = !0));
			e = e.sibling;
		}
		return a;
	}
	function Gl(e, t) {
		for (; e !== null;) e.tag === 5 ? Ep(e.stateNode, e.memoizedProps) : (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && t || Gl(e.child, t)), e = e.sibling;
	}
	function Kl(e) {
		if (e.subtreeFlags & 18874368) for (e = e.child; e !== null;) {
			if ((e.tag !== 22 || e.memoizedState === null) && (Kl(e), e.tag === 30 && e.flags & 18874368 && e.stateNode.paired)) {
				var t = e.memoizedProps;
				if (t.name == null || t.name === "auto") throw Error(i(544));
				var n = t.name;
				t = Si(t.default, t.share), t !== "none" && (Ul(e, n, t, null, !1) || Gl(e.child, !1));
			}
			e = e.sibling;
		}
	}
	function ql(e, t) {
		if (e.tag === 30) {
			var n = e.stateNode, r = e.memoizedProps, i = bi(r, n), a = Si(r.default, n.paired ? r.share : r.enter);
			a === "none" ? Kl(e) : Ul(e, i, a, null, !1) ? (Kl(e), n.paired || t || Md(e, r.onEnter)) : Gl(e.child, !1);
		} else if (e.subtreeFlags & 33554432) for (e = e.child; e !== null;) ql(e, t), e = e.sibling;
		else Kl(e);
	}
	function Jl(e) {
		if (Rl !== null && Rl.size !== 0) {
			var t = Rl;
			if (e.subtreeFlags & 18874368) for (e = e.child; e !== null;) {
				if (e.tag !== 22 || e.memoizedState === null) {
					if (e.tag === 30 && e.flags & 18874368) {
						var n = e.memoizedProps, r = n.name;
						if (r != null && r !== "auto") {
							var i = t.get(r);
							if (i !== void 0) {
								var a = Si(n.default, n.share);
								if (a !== "none" && (Ul(e, r, a, null, !1) ? (a = e.stateNode, i.paired = a, a.paired = i, Md(e, n.onShare)) : Gl(e.child, !1)), t.delete(r), t.size === 0) break;
							}
						}
					}
					Jl(e);
				}
				e = e.sibling;
			}
		}
	}
	function Yl(e) {
		if (e.tag === 30) {
			var t = e.memoizedProps, n = bi(t, e.stateNode), r = Rl === null ? void 0 : Rl.get(n), i = Si(t.default, r === void 0 ? t.exit : t.share);
			i !== "none" && (Ul(e, n, i, null, !1) ? r === void 0 ? Md(e, t.onExit) : (i = e.stateNode, r.paired = i, i.paired = r, Rl.delete(n), Md(e, t.onShare)) : Gl(e.child, !1)), Rl !== null && Jl(e);
		} else if (e.subtreeFlags & 33554432) for (e = e.child; e !== null;) Yl(e), e = e.sibling;
		else Rl !== null && Jl(e);
	}
	function Xl(e) {
		for (e = e.child; e !== null;) {
			if (e.tag === 30) {
				var t = e.memoizedProps, n = bi(t, e.stateNode);
				t = Si(t.default, t.update), e.flags &= -5, t !== "none" && Ul(e, n, t, e.memoizedState = [], !1);
			} else e.subtreeFlags & 33554432 && Xl(e);
			e = e.sibling;
		}
	}
	function Zl(e) {
		if (e.subtreeFlags & 18874368) for (e = e.child; e !== null;) {
			if (e.tag !== 22 || e.memoizedState === null) {
				if (e.tag === 30 && e.flags & 18874368) {
					var t = e.stateNode;
					t.paired !== null && (t.paired = null, Gl(e.child, !1));
				}
				Zl(e);
			}
			e = e.sibling;
		}
	}
	function Ql(e) {
		if (e.tag === 30) e.stateNode.paired = null, Gl(e.child, !1), Zl(e);
		else if (e.subtreeFlags & 33554432) for (e = e.child; e !== null;) Ql(e), e = e.sibling;
		else Zl(e);
	}
	function $l(e) {
		for (e = e.child; e !== null;) e.tag === 30 ? Gl(e.child, !1) : e.subtreeFlags & 33554432 && $l(e), e = e.sibling;
	}
	function eu(e, t, n, r, i, a, o) {
		for (var s = !1; t !== null;) {
			if (t.tag === 5) {
				var c = t.stateNode;
				if (a !== null && Hl < a.length) {
					var l = a[Hl], u = Op(c);
					(l.view || u.view) && (s = !0);
					var d;
					if (d = !(e.flags & 4)) {
						if (u.clip) d = !0;
						else {
							d = l.rect;
							var f = u.rect;
							d = d.y !== f.y || d.x !== f.x || d.height !== f.height || d.width !== f.width;
						}
					}
					d && (e.flags |= 4), u.abs ? u = !l.abs : (l = l.rect, u = u.rect, u = l.height !== u.height || l.width !== u.width), u && (e.flags |= 32);
				} else e.flags |= 32;
				e.flags & 4 && Tp(c, Hl === 0 ? n : n + "_" + Hl, i), s && e.flags & 4 || (Bl === null && (Bl = []), Bl.push(c, Hl === 0 ? r : r + "_" + Hl, t.memoizedProps)), Hl++;
			} else (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && o ? e.flags |= t.flags & 32 : eu(e, t.child, n, r, i, a, o) && (s = !0));
			t = t.sibling;
		}
		return s;
	}
	function tu(e, t) {
		for (e = e.child; e !== null;) {
			if (e.tag === 30) {
				var n = e.memoizedProps, r = e.stateNode, i = bi(n, r), a = Si(n.default, n.update);
				if (t) {
					r = r.clones;
					var o = r === null ? null : r.map(kp);
				} else o = e.memoizedState, e.memoizedState = null;
				r = e;
				var s = e.child;
				Hl = 0, i = eu(r, s, i, i, a, o, !1), e.flags & 4 && i && (t || Md(e, n.onUpdate));
			} else e.subtreeFlags & 33554432 && tu(e, t);
			e = e.sibling;
		}
	}
	var nu = !1, ru = !1, iu = !1, au = !1, ou = typeof WeakSet == "function" ? WeakSet : Set, su = null, cu = !1, lu = !1, uu = !1, du = !1;
	function fu(e, t, n) {
		if (e = e.containerInfo, sp = gh, e = Xr(e), Zr(e)) {
			if ("selectionStart" in e) var r = {
				start: e.selectionStart,
				end: e.selectionEnd
			};
			else a: {
				r = (r = e.ownerDocument) && r.defaultView || window;
				var i = r.getSelection && r.getSelection();
				if (i && i.rangeCount !== 0) {
					r = i.anchorNode;
					var a = i.anchorOffset, o = i.focusNode;
					i = i.focusOffset;
					try {
						r.nodeType, o.nodeType;
					} catch {
						r = null;
						break a;
					}
					var s = 0, c = -1, l = -1, u = 0, d = 0, f = e, p = null;
					b: for (;;) {
						for (var m; f !== r || a !== 0 && f.nodeType !== 3 || (c = s + a), f !== o || i !== 0 && f.nodeType !== 3 || (l = s + i), f.nodeType === 3 && (s += f.nodeValue.length), (m = f.firstChild) !== null;) p = f, f = m;
						for (;;) {
							if (f === e) break b;
							if (p === r && ++u === a && (c = s), p === o && ++d === i && (l = s), (m = f.nextSibling) !== null) break;
							f = p, p = f.parentNode;
						}
						f = m;
					}
					r = c === -1 || l === -1 ? null : {
						start: c,
						end: l
					};
				} else r = null;
			}
			r ||= {
				start: 0,
				end: 0
			};
		} else r = null;
		for (cp = {
			focusedElem: e,
			selectionRange: r
		}, gh = !1, n = (n & 335544064) === n, su = t, t = n ? 9270 : 1024; su !== null;) {
			if (e = su, n && (r = e.deletions, r !== null)) for (a = 0; a < r.length; a++) n && Yl(r[a]);
			if (e.alternate === null && e.flags & 2) n && zl(e), pu(n);
			else {
				if (e.tag === 22) {
					if (r = e.alternate, e.memoizedState !== null) {
						r !== null && r.memoizedState === null && n && Yl(r), pu(n);
						continue;
					}
					if (r !== null && r.memoizedState !== null) {
						n && zl(e), pu(n);
						continue;
					}
				}
				r = e.child, (e.subtreeFlags & t) !== 0 && r !== null ? (r.return = e, su = r) : (n && Xl(e), pu(n));
			}
		}
		Rl = null;
	}
	function pu(e) {
		for (; su !== null;) {
			var t = su, n = e, r = t.alternate, a = t.flags;
			switch (t.tag) {
				case 0:
				case 11:
				case 15: break;
				case 1:
					if (a & 1024 && r !== null) {
						n = void 0, a = r.memoizedProps, r = r.memoizedState;
						var o = t.stateNode;
						try {
							var s = yc(t.type, a);
							n = o.getSnapshotBeforeUpdate(s, r), o.__reactInternalSnapshotBeforeUpdate = n;
						} catch (e) {
							df(t, t.return, e);
						}
					}
					break;
				case 3:
					if (a & 1024) {
						if (r = t.stateNode.containerInfo, n = r.nodeType, n === 9) nm(r);
						else if (n === 1) switch (r.nodeName) {
							case "HEAD":
							case "HTML":
							case "BODY":
								nm(r);
								break;
							default: r.textContent = "";
						}
					}
					break;
				case 5:
				case 26:
				case 27:
				case 6:
				case 4:
				case 17: break;
				case 30:
					n && r !== null && (n = bi(r.memoizedProps, r.stateNode), a = t.memoizedProps, a = Si(a.default, a.update), a !== "none" && Ul(r, n, a, r.memoizedState = [], !0));
					break;
				default: if (a & 1024) throw Error(i(163));
			}
			if (r = t.sibling, r !== null) {
				r.return = t.return, su = r;
				break;
			}
			su = t.return;
		}
	}
	function mu(e, t, n) {
		var r = n.flags;
		switch (n.tag) {
			case 0:
			case 11:
			case 15:
				Nu(e, n), r & 4 && yl(5, n);
				break;
			case 1:
				if (Nu(e, n), r & 4) {
					if (e = n.stateNode, t === null) try {
						e.componentDidMount();
					} catch (e) {
						df(n, n.return, e);
					}
					else {
						var i = yc(n.type, t.memoizedProps);
						t = t.memoizedState;
						try {
							e.componentDidUpdate(i, t, e.__reactInternalSnapshotBeforeUpdate);
						} catch (e) {
							df(n, n.return, e);
						}
					}
				}
				r & 64 && xl(n), r & 512 && Cl(n, n.return);
				break;
			case 3:
				if (Nu(e, n), r & 64 && (e = n.updateQueue, e !== null)) {
					if (t = null, n.child !== null) switch (n.child.tag) {
						case 27:
						case 5:
							t = n.child.stateNode;
							break;
						case 1: t = n.child.stateNode;
					}
					try {
						To(e, t);
					} catch (e) {
						df(n, n.return, e);
					}
				}
				break;
			case 27: t === null && r & 4 && Il(n);
			case 26:
			case 5:
				Nu(e, n), t === null && r & 4 && Al(n), r & 512 && Cl(n, n.return);
				break;
			case 12:
				Nu(e, n);
				break;
			case 31:
				Nu(e, n), r & 4 && Su(e, n);
				break;
			case 13:
				Nu(e, n), r & 4 && Cu(e, n), r & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = hf.bind(null, n), cm(e, n))));
				break;
			case 22:
				if (r = n.memoizedState !== null || nu, !r) {
					var a = t !== null && t.memoizedState !== null || ru;
					t = nu, i = ru, nu = r, (ru = a) && !i ? (r = 2, n.subtreeFlags & 8772 && (r |= 1), Fu(e, n, r)) : Nu(e, n), nu = t, ru = i;
				}
				break;
			case 30:
				Nu(e, n), r & 512 && Cl(n, n.return);
				break;
			case 7: r & 512 && Cl(n, n.return);
			default: Nu(e, n);
		}
	}
	function hu(e, t) {
		for (e = e.child; e !== null;) q(e, t), e = e.sibling;
	}
	function q(e, t) {
		switch (e.tag) {
			case 5:
			case 26:
				try {
					var n = e.stateNode;
					if (t) {
						var r = n.style;
						typeof r.setProperty == "function" ? r.setProperty("display", "none", "important") : r.display = "none";
					} else {
						var i = e.stateNode, a = e.memoizedProps.style, o = a != null && a.hasOwnProperty("display") ? a.display : null;
						i.style.display = o == null || typeof o == "boolean" ? "" : ("" + o).trim();
					}
				} catch (t) {
					df(e, e.return, t);
				}
				gu(e, t);
				break;
			case 6:
				try {
					e.stateNode.nodeValue = t ? "" : e.memoizedProps, Jt = !0;
				} catch (t) {
					df(e, e.return, t);
				}
				break;
			case 18:
				try {
					var s = e.stateNode;
					t ? wp(s, !0) : wp(e.stateNode, !1);
				} catch (t) {
					df(e, e.return, t);
				}
				break;
			case 22:
			case 23:
				e.memoizedState === null && hu(e, t);
				break;
			default: hu(e, t);
		}
	}
	function gu(e, t) {
		if (e.subtreeFlags & 67108864) for (e = e.child; e !== null;) {
			a: {
				var n = e, r = t;
				switch (n.tag) {
					case 4:
						q(n, r);
						break a;
					case 22:
						n.memoizedState === null && gu(n, r);
						break a;
					default: gu(n, r);
				}
			}
			e = e.sibling;
		}
	}
	function _u(e) {
		var t = e.alternate;
		t !== null && (e.alternate = null, _u(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Pt(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
	}
	var vu = null, yu = !1;
	function bu(e, t, n) {
		for (n = n.child; n !== null;) xu(e, t, n), n = n.sibling;
	}
	function xu(e, t, n) {
		if (Ze && typeof Ze.onCommitFiberUnmount == "function") try {
			Ze.onCommitFiberUnmount(Xe, n);
		} catch {}
		switch (n.tag) {
			case 26:
				ru || wl(n, t), bu(e, t, n), n.memoizedState ? n.memoizedState.count-- : n.stateNode && !ru && (n = n.stateNode, n.parentNode.removeChild(n));
				break;
			case 27:
				ru || wl(n, t), Dl(n);
				var r = vu, i = yu;
				Sp(n.type) && (vu = n.stateNode, yu = !1), bu(e, t, n), gm(n.stateNode, n.type, n.memoizedProps), vu = r, yu = i;
				break;
			case 5: ru || wl(n, t), Dl(n);
			case 6:
				if (n.tag === 6 && Dl(n), r = vu, i = yu, vu = null, bu(e, t, n), vu = r, yu = i, vu !== null) {
					if (yu) try {
						(vu.nodeType === 9 ? vu.body : vu.nodeName === "HTML" ? vu.ownerDocument.body : vu).removeChild(n.stateNode), Jt = !0;
					} catch (e) {
						df(n, t, e);
					}
					else try {
						vu.removeChild(n.stateNode), Jt = !0;
					} catch (e) {
						df(n, t, e);
					}
				}
				break;
			case 18:
				vu !== null && (yu ? (e = vu, Cp(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, n.stateNode), Hh(e)) : Cp(vu, n.stateNode));
				break;
			case 4:
				r = vu, i = yu, vu = n.stateNode.containerInfo, yu = !0, bu(e, t, n), vu = r, yu = i;
				break;
			case 0:
			case 11:
			case 14:
			case 15:
				bl(2, n, t), ru || bl(4, n, t), bu(e, t, n);
				break;
			case 1:
				ru || (wl(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function" && Sl(n, t, r)), bu(e, t, n);
				break;
			case 21:
				bu(e, t, n);
				break;
			case 22:
				ru = (r = ru) || n.memoizedState !== null, bu(e, t, n), ru = r;
				break;
			case 30:
				wl(n, t), bu(e, t, n);
				break;
			case 7:
				ru || wl(n, t), bu(e, t, n);
				break;
			default: bu(e, t, n);
		}
	}
	function Su(e, t) {
		if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
			e = e.dehydrated;
			try {
				Hh(e);
			} catch (e) {
				df(t, t.return, e);
			}
		}
	}
	function Cu(e, t) {
		if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
			Hh(e);
		} catch (e) {
			df(t, t.return, e);
		}
	}
	function wu(e) {
		switch (e.tag) {
			case 31:
			case 13:
			case 19:
				var t = e.stateNode;
				return t === null && (t = e.stateNode = new ou()), t;
			case 22: return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new ou()), t;
			default: throw Error(i(435, e.tag));
		}
	}
	function Tu(e, t) {
		var n = wu(e);
		t.forEach(function(t) {
			if (!n.has(t)) {
				n.add(t);
				var r = gf.bind(null, e, t);
				t.then(r, r);
			}
		});
	}
	function Eu(e, t, n) {
		var r = t.deletions;
		if (r !== null) for (var a = 0; a < r.length; a++) {
			var o = r[a], s = e, c = t, l = c;
			a: for (; l !== null;) {
				switch (l.tag) {
					case 27:
						if (Sp(l.type)) {
							vu = l.stateNode, yu = !1;
							break a;
						}
						break;
					case 5:
						vu = l.stateNode, yu = !1;
						break a;
					case 3:
					case 4:
						vu = l.stateNode.containerInfo, yu = !0;
						break a;
				}
				l = l.return;
			}
			if (vu === null) throw Error(i(160));
			xu(s, c, o), vu = null, yu = !1, s = o.alternate, s !== null && (s.return = null), o.return = null;
		}
		if (t.subtreeFlags & 13886) for (t = t.child; t !== null;) Ou(t, e, n), t = t.sibling;
	}
	var Du = null;
	function Ou(e, t, n) {
		var r = e.alternate, a = e.flags;
		switch (e.tag) {
			case 0:
			case 11:
			case 14:
			case 15:
				if (a & 4 && (r = e.updateQueue, r = r === null ? null : r.events, r !== null)) for (var o = 0; o < r.length; o++) {
					var s = r[o];
					s.ref.impl = s.nextImpl;
				}
				Eu(t, e, n), ku(e), a & 4 && (bl(3, e, e.return), yl(3, e), bl(5, e, e.return));
				break;
			case 1:
				Eu(t, e, n), ku(e), a & 512 && (ru || r === null || wl(r, r.return)), a & 64 && nu && (e = e.updateQueue, e !== null && (t = e.callbacks, t !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? t : n.concat(t))));
				break;
			case 26:
				if (o = Du, Eu(t, e, n), ku(e), a & 512 && (ru || r === null || wl(r, r.return)), a & 4) {
					if (a = r === null ? null : r.memoizedState, n = e.memoizedState, r === null) {
						if (n === null) {
							if (e.stateNode === null) {
								if (nu) e.stateNode = fp(e.type, e.memoizedProps, t.containerInfo, e);
								else {
									a: {
										t = e.type, n = e.memoizedProps, a = o.ownerDocument || o;
										b: switch (t) {
											case "title":
												r = a.getElementsByTagName("title")[0], (!r || r[Mt] || r[Et] || r.namespaceURI === "http://www.w3.org/2000/svg" || r.hasAttribute("itemprop")) && (r = a.createElement(t), a.head.insertBefore(r, a.querySelector("head > title"))), np(r, t, n), r[Et] = e, Rt(r), t = r;
												break a;
											case "link":
												if (o = Gm("link", "href", a).get(t + (n.href || ""))) {
													for (s = 0; s < o.length; s++) if (r = o[s], r.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && r.getAttribute("rel") === (n.rel == null ? null : n.rel) && r.getAttribute("title") === (n.title == null ? null : n.title) && r.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
														o.splice(s, 1);
														break b;
													}
												}
												r = a.createElement(t), np(r, t, n), a.head.appendChild(r);
												break;
											case "meta":
												if (o = Gm("meta", "content", a).get(t + (n.content || ""))) {
													for (s = 0; s < o.length; s++) if (r = o[s], r.getAttribute("content") === (n.content == null ? null : "" + n.content) && r.getAttribute("name") === (n.name == null ? null : n.name) && r.getAttribute("property") === (n.property == null ? null : n.property) && r.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && r.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
														o.splice(s, 1);
														break b;
													}
												}
												r = a.createElement(t), np(r, t, n), a.head.appendChild(r);
												break;
											default: throw Error(i(468, t));
										}
										r[Et] = e, Rt(r), t = r;
									}
									e.stateNode = t;
								}
							} else nu || Km(o, e.type, e.stateNode);
						} else e.stateNode = Bm(o, n, e.memoizedProps);
					} else a === n ? n === null && e.stateNode !== null && jl(e, e.memoizedProps, r.memoizedProps) : (a === null ? (t = r.stateNode, t === null || ru || t.parentNode.removeChild(t)) : a.count--, n === null ? nu || Km(o, e.type, e.stateNode) : Bm(o, n, e.memoizedProps));
				}
				break;
			case 27:
				Eu(t, e, n), ku(e), a & 512 && (ru || r === null || wl(r, r.return)), r !== null && a & 4 && jl(e, e.memoizedProps, r.memoizedProps);
				break;
			case 5:
				if (o = iu, iu = !1, Eu(t, e, n), iu = o, ku(e), a & 512 && (ru || r === null || wl(r, r.return)), e.flags & 32) {
					t = e.stateNode;
					try {
						pn(t, ""), Jt = !0;
					} catch (t) {
						df(e, e.return, t);
					}
				}
				a & 4 && e.stateNode != null && (t = e.memoizedProps, jl(e, t, r === null ? t : r.memoizedProps)), a & 1024 && (au = !0);
				break;
			case 6:
				if (Eu(t, e, n), ku(e), a & 4) {
					if (e.stateNode === null) throw Error(i(162));
					t = e.memoizedProps, n = e.stateNode;
					try {
						n.nodeValue = t, Jt = !0;
					} catch (t) {
						df(e, e.return, t);
					}
				}
				break;
			case 3:
				if (Jt = !1, Wm = null, o = Du, Du = bm(t.containerInfo), Eu(t, e, n), Du = o, ku(e), a & 4 && r !== null && r.memoizedState.isDehydrated) try {
					Hh(t.containerInfo);
				} catch (t) {
					df(e, e.return, t);
				}
				au && (au = !1, Au(e)), Jt = !1;
				break;
			case 4:
				a = iu, iu = nu, r = Yt(), o = Du, Du = bm(e.stateNode.containerInfo), Eu(t, e, n), ku(e), Du = o, Jt && lu && (uu = !0), Jt = r, iu = a;
				break;
			case 12:
				Eu(t, e, n), ku(e);
				break;
			case 31:
				Eu(t, e, n), ku(e), a & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, Tu(e, t)));
				break;
			case 13:
				Eu(t, e, n), ku(e), e.child.flags & 8192 && e.memoizedState !== null != (r !== null && r.memoizedState !== null) && (pd = He()), a & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, Tu(e, t)));
				break;
			case 22:
				o = e.memoizedState !== null, s = r !== null && r.memoizedState !== null;
				var c = nu, l = ru, u = iu;
				nu = c || o, iu = u || o, ru = l || s, Eu(t, e, n), ru = l, iu = u, nu = c, ku(e), a & 8192 && (t = e.stateNode, t._visibility = o ? t._visibility & -2 : t._visibility | 1, !o || r === null || s || nu || ru || (t = s || ru, n = nu, r = ru, nu = o || nu, ru = t, Pu(e, 2), nu = n, ru = r), !o && iu || hu(e, o)), a & 4 && (t = e.updateQueue, t !== null && (n = t.retryQueue, n !== null && (t.retryQueue = null, Tu(e, n))));
				break;
			case 19:
				Eu(t, e, n), ku(e), a & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, Tu(e, t)));
				break;
			case 30:
				a & 512 && (ru || r === null || wl(r, r.return)), a = Yt(), o = lu, s = (n & 335544064) === n, c = e.memoizedProps, lu = s && Si(c.default, c.update) !== "none", Eu(t, e, n), ku(e), s && r !== null && Jt && (e.flags |= 4), lu = o, Jt = a;
				break;
			case 21: break;
			case 7: a & 512 && (ru || r === null || wl(r, r.return)), r && r.stateNode !== null && (r.stateNode._fragmentFiber = e);
			default: Eu(t, e, n), ku(e);
		}
	}
	function ku(e) {
		var t = e.flags;
		if (t & 2) {
			try {
				for (var n, r = e.return; r !== null;) {
					if (Ml(r)) {
						n = r;
						break;
					}
					r = r.return;
				}
				r = null;
				for (var a = e.return; a !== null;) {
					if (kl(a)) {
						var o = a.stateNode;
						r === null ? r = [o] : r.push(o);
					}
					if (Ol(a)) break;
					a = a.return;
				}
				var s = r;
				if (n == null) throw Error(i(160));
				switch (n.tag) {
					case 27:
						var c = n.stateNode;
						Fl(e, Nl(e), c, s);
						break;
					case 5:
						var l = n.stateNode;
						n.flags & 32 && (pn(l, ""), n.flags &= -33), Fl(e, Nl(e), l, s);
						break;
					case 3:
					case 4:
						var u = n.stateNode.containerInfo;
						Pl(e, Nl(e), u, s);
						break;
					default: throw Error(i(161));
				}
			} catch (t) {
				df(e, e.return, t);
			}
			e.flags &= -3;
		}
		t & 4096 && (e.flags &= -4097);
	}
	function Au(e) {
		if (e.subtreeFlags & 1024) for (e = e.child; e !== null;) {
			var t = e;
			Au(t), t.tag === 5 && t.flags & 1024 && (t = t.stateNode, gh = !0, t.reset(), gh = !1), e = e.sibling;
		}
	}
	function ju(e, t) {
		if (t.subtreeFlags & 9270) for (t = t.child; t !== null;) Mu(t, e), t = t.sibling;
		else tu(t, !1);
	}
	function Mu(e, t) {
		var n = e.alternate;
		if (n === null) ql(e, !1);
		else switch (e.tag) {
			case 3:
				if (du = cu = !1, Vl(), ju(t, e), !cu && !uu) {
					if (e = Bl, e !== null) for (var r = 0; r < e.length; r += 3) {
						n = e[r];
						var i = e[r + 1];
						Ep(n, e[r + 2]), n = n.ownerDocument.documentElement, n !== null && n.animate({
							opacity: [0, 0],
							pointerEvents: ["none", "none"]
						}, {
							duration: 0,
							fill: "forwards",
							pseudoElement: "::view-transition-group(" + i + ")"
						});
					}
					e = t.containerInfo, e = e.nodeType === 9 ? e.documentElement : e.ownerDocument.documentElement, e !== null && e.style.viewTransitionName === "" && (e.style.viewTransitionName = "none", e.animate({
						opacity: [0, 0],
						pointerEvents: ["none", "none"]
					}, {
						duration: 0,
						fill: "forwards",
						pseudoElement: "::view-transition-group(root)"
					}), e.animate({
						width: [0, 0],
						height: [0, 0]
					}, {
						duration: 0,
						fill: "forwards",
						pseudoElement: "::view-transition"
					})), du = !0;
				}
				Bl = null;
				break;
			case 5:
				ju(t, e);
				break;
			case 4:
				r = cu, cu = !1, ju(t, e), cu && (uu = !0), cu = r;
				break;
			case 22:
				e.memoizedState === null && (n.memoizedState === null ? ju(t, e) : ql(e, !1));
				break;
			case 30:
				r = cu, i = Vl(), cu = !1, ju(t, e), cu && (e.flags |= 4);
				var a = e.memoizedProps, o = e.stateNode;
				t = bi(a, o), o = bi(n.memoizedProps, o);
				var s = Si(a.default, a.update);
				s === "none" ? t = !1 : (a = n.memoizedState, n.memoizedState = null, n = e.child, Hl = 0, t = eu(e, n, t, o, s, a, !0), Hl !== (a === null ? 0 : a.length) && (e.flags |= 32)), e.flags & 4 && t ? (Md(e, e.memoizedProps.onUpdate), Bl = i) : i !== null && (i.push.apply(i, Bl), Bl = i), cu = e.flags & 32 ? !0 : r;
				break;
			default: ju(t, e);
		}
	}
	function Nu(e, t) {
		if (t.subtreeFlags & 8772) for (t = t.child; t !== null;) mu(e, t.alternate, t), t = t.sibling;
	}
	function Pu(e, t) {
		for (e = e.child; e !== null;) {
			var n = e, r = t;
			switch (n.tag) {
				case 0:
				case 11:
				case 14:
				case 15:
					bl(4, n, n.return), Pu(n, r);
					break;
				case 1:
					wl(n, n.return);
					var i = n.stateNode;
					typeof i.componentWillUnmount == "function" && Sl(n, n.return, i), Pu(n, r);
					break;
				case 27: r & 2 && gm(n.stateNode, n.type, n.memoizedProps);
				case 5:
					wl(n, n.return), n.tag !== 5 && n.tag !== 27 || Dl(n), Pu(n, r);
					break;
				case 6:
					Dl(n);
					break;
				case 26:
					wl(n, n.return), i = n.stateNode, n.memoizedState !== null || i === null || ru || i.parentNode.removeChild(i), Pu(n, r);
					break;
				case 22:
					n.memoizedState === null && Pu(n, r);
					break;
				case 30:
					wl(n, n.return), Pu(n, r);
					break;
				case 7: wl(n, n.return);
				default: Pu(n, r);
			}
			e = e.sibling;
		}
	}
	function Fu(e, t, n) {
		for (n = t.subtreeFlags & 8772 ? n : n & -2, t = t.child; t !== null;) {
			var r = t.alternate, i = e, a = t, o = a.flags, s = !!(n & 1);
			switch (a.tag) {
				case 0:
				case 11:
				case 15:
					Fu(i, a, n), yl(4, a);
					break;
				case 1:
					if (Fu(i, a, n), r = a, i = r.stateNode, typeof i.componentDidMount == "function") try {
						i.componentDidMount();
					} catch (e) {
						df(r, r.return, e);
					}
					if (r = a, i = r.updateQueue, i !== null) {
						var c = r.stateNode;
						try {
							var l = i.shared.hiddenCallbacks;
							if (l !== null) for (i.shared.hiddenCallbacks = null, i = 0; i < l.length; i++) wo(l[i], c);
						} catch (e) {
							df(r, r.return, e);
						}
					}
					s && o & 64 && xl(a), Cl(a, a.return);
					break;
				case 27: n & 2 && Il(a);
				case 5:
					a.tag !== 5 && a.tag !== 27 || El(a), Fu(i, a, n), s && r === null && o & 4 && Al(a), Cl(a, a.return);
					break;
				case 6:
					El(a);
					break;
				case 26:
					c = a.stateNode, a.memoizedState !== null || c === null || nu || Km(bm(c.ownerDocument), a.type, c), Fu(i, a, n), s && r === null && o & 4 && Al(a), Cl(a, a.return);
					break;
				case 12:
					Fu(i, a, n);
					break;
				case 31:
					Fu(i, a, n), s && o & 4 && Su(i, a);
					break;
				case 13:
					Fu(i, a, n), s && o & 4 && Cu(i, a);
					break;
				case 22:
					a.memoizedState === null && Fu(i, a, n), Cl(a, a.return);
					break;
				case 30:
					Fu(i, a, n), Cl(a, a.return);
					break;
				case 7: Cl(a, a.return);
				default: Fu(i, a, n);
			}
			t = t.sibling;
		}
	}
	function Iu(e, t) {
		var n = null;
		e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && Ia(n));
	}
	function Lu(e, t) {
		e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Ia(e));
	}
	function Ru(e, t, n, r) {
		var i = (n & 335544064) === n;
		if (t.subtreeFlags & (i ? 10262 : 10256)) for (t = t.child; t !== null;) zu(e, t, n, r), t = t.sibling;
		else i && $l(t);
	}
	function zu(e, t, n, r) {
		var i = (n & 335544064) === n;
		i && t.alternate === null && t.return !== null && t.return.alternate !== null && Ql(t);
		var a = t.flags;
		switch (t.tag) {
			case 0:
			case 11:
			case 15:
				Ru(e, t, n, r), a & 2048 && yl(9, t);
				break;
			case 1:
				Ru(e, t, n, r);
				break;
			case 3:
				Ru(e, t, n, r), i && du && (e = e.containerInfo, e = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, e.style.viewTransitionName === "root" && (e.style.viewTransitionName = ""), e = e.ownerDocument.documentElement, e !== null && e.style.viewTransitionName === "none" && (e.style.viewTransitionName = "")), a & 2048 && (a = null, t.alternate !== null && (a = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== a && (t.refCount++, a != null && Ia(a)));
				break;
			case 12:
				if (a & 2048) {
					Ru(e, t, n, r), a = t.stateNode;
					try {
						var o = t.memoizedProps, s = o.id, c = o.onPostCommit;
						typeof c == "function" && c(s, t.alternate === null ? "mount" : "update", a.passiveEffectDuration, -0);
					} catch (e) {
						df(t, t.return, e);
					}
				} else Ru(e, t, n, r);
				break;
			case 31:
				Ru(e, t, n, r);
				break;
			case 13:
				Ru(e, t, n, r);
				break;
			case 23: break;
			case 22:
				o = t.stateNode, s = t.alternate, t.memoizedState === null ? (i && s !== null && s.memoizedState !== null && Ql(t), o._visibility & 2 ? Ru(e, t, n, r) : (o._visibility |= 2, Bu(e, t, n, r, !!(t.subtreeFlags & 10256) || !1))) : (i && s !== null && s.memoizedState === null && Ql(s), o._visibility & 2 ? Ru(e, t, n, r) : Vu(e, t)), a & 2048 && Iu(s, t);
				break;
			case 24:
				Ru(e, t, n, r), a & 2048 && Lu(t.alternate, t);
				break;
			case 30:
				i && (a = t.alternate, a !== null && (Gl(a.child, !0), Gl(t.child, !0))), Ru(e, t, n, r);
				break;
			default: Ru(e, t, n, r);
		}
	}
	function Bu(e, t, n, r, i) {
		for (i &&= !!(t.subtreeFlags & 10256) || !1, t = t.child; t !== null;) {
			var a = e, o = t, s = n, c = r, l = o.flags;
			switch (o.tag) {
				case 0:
				case 11:
				case 15:
					Bu(a, o, s, c, i), yl(8, o);
					break;
				case 23: break;
				case 22:
					var u = o.stateNode;
					o.memoizedState === null ? (u._visibility |= 2, Bu(a, o, s, c, i)) : u._visibility & 2 ? Bu(a, o, s, c, i) : Vu(a, o), i && l & 2048 && Iu(o.alternate, o);
					break;
				case 24:
					Bu(a, o, s, c, i), i && l & 2048 && Lu(o.alternate, o);
					break;
				default: Bu(a, o, s, c, i);
			}
			t = t.sibling;
		}
	}
	function Vu(e, t) {
		if (t.subtreeFlags & 10256) for (t = t.child; t !== null;) {
			var n = e, r = t, i = r.flags;
			switch (r.tag) {
				case 22:
					Vu(n, r), i & 2048 && Iu(r.alternate, r);
					break;
				case 24:
					Vu(n, r), i & 2048 && Lu(r.alternate, r);
					break;
				default: Vu(n, r);
			}
			t = t.sibling;
		}
	}
	var Hu = 8192;
	function Uu(e, t, n) {
		if (e.subtreeFlags & Hu) for (e = e.child; e !== null;) Wu(e, t, n), e = e.sibling;
	}
	function Wu(e, t, n) {
		switch (e.tag) {
			case 26:
				Uu(e, t, n), e.flags & Hu && (e.memoizedState === null ? (e = e.stateNode, (t & 335544128) === t && Zm(n, e)) : Qm(n, Du, e.memoizedState, e.memoizedProps));
				break;
			case 5:
				Uu(e, t, n), e.flags & Hu && (e = e.stateNode, (t & 335544128) === t && Zm(n, e));
				break;
			case 3:
			case 4:
				var r = Du;
				Du = bm(e.stateNode.containerInfo), Uu(e, t, n), Du = r;
				break;
			case 22:
				e.memoizedState === null && (r = e.alternate, r !== null && r.memoizedState !== null ? (r = Hu, Hu = 16777216, Uu(e, t, n), Hu = r) : Uu(e, t, n));
				break;
			case 30:
				if ((e.flags & Hu) !== 0 && (r = e.memoizedProps.name, r != null && r !== "auto")) {
					var i = e.stateNode;
					i.paired = null, Rl === null && (Rl = /* @__PURE__ */ new Map()), Rl.set(r, i);
				}
				Uu(e, t, n);
				break;
			default: Uu(e, t, n);
		}
	}
	function Gu(e) {
		var t = e.alternate;
		if (t !== null && (e = t.child, e !== null)) {
			t.child = null;
			do
				t = e.sibling, e.sibling = null, e = t;
			while (e !== null);
		}
	}
	function Ku(e) {
		var t = e.deletions;
		if (e.flags & 16) {
			if (t !== null) for (var n = 0; n < t.length; n++) {
				var r = t[n];
				su = r, Yu(r, e);
			}
			Gu(e);
		}
		if (e.subtreeFlags & 10256) for (e = e.child; e !== null;) qu(e), e = e.sibling;
	}
	function qu(e) {
		switch (e.tag) {
			case 0:
			case 11:
			case 15:
				Ku(e), e.flags & 2048 && bl(9, e, e.return);
				break;
			case 3:
				Ku(e);
				break;
			case 12:
				Ku(e);
				break;
			case 22:
				var t = e.stateNode;
				e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Ju(e)) : Ku(e);
				break;
			default: Ku(e);
		}
	}
	function Ju(e) {
		var t = e.deletions;
		if (e.flags & 16) {
			if (t !== null) for (var n = 0; n < t.length; n++) {
				var r = t[n];
				su = r, Yu(r, e);
			}
			Gu(e);
		}
		for (e = e.child; e !== null;) {
			switch (t = e, t.tag) {
				case 0:
				case 11:
				case 15:
					bl(8, t, t.return), Ju(t);
					break;
				case 22:
					n = t.stateNode, n._visibility & 2 && (n._visibility &= -3, Ju(t));
					break;
				default: Ju(t);
			}
			e = e.sibling;
		}
	}
	function Yu(e, t) {
		for (; su !== null;) {
			var n = su;
			switch (n.tag) {
				case 0:
				case 11:
				case 15:
					bl(8, n, t);
					break;
				case 23:
				case 22:
					if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
						var r = n.memoizedState.cachePool.pool;
						r != null && r.refCount++;
					}
					break;
				case 24: Ia(n.memoizedState.cache);
			}
			if (r = n.child, r !== null) r.return = n, su = r;
			else a: for (n = e; su !== null;) {
				r = su;
				var i = r.sibling, a = r.return;
				if (_u(r), r === n) {
					su = null;
					break a;
				}
				if (i !== null) {
					i.return = a, su = i;
					break a;
				}
				su = a;
			}
		}
	}
	var Xu = {
		getCacheForType: function(e) {
			var t = Oa(Pa), n = t.data.get(e);
			return n === void 0 && (n = e(), t.data.set(e, n)), n;
		},
		cacheSignal: function() {
			return Oa(Pa).controller.signal;
		}
	}, Zu = typeof WeakMap == "function" ? WeakMap : Map, Qu = 0, $u = null, J = null, Y = 0, X = 0, ed = null, td = !1, Z = !1, nd = !1, rd = 0, id = 0, ad = 0, od = 0, sd = 0, cd = 0, ld = 0, ud = null, dd = null, fd = !1, pd = 0, md = 0, hd = Infinity, gd = null, _d = null, vd = 0, yd = null, bd = null, xd = 0, Sd = 0, Cd = null, wd = null, Td = null, Ed = null, Dd = null, Od = 0, kd = null;
	function Ad() {
		return Qu & 2 && Y !== 0 ? Y & -Y : A.T === null ? bt() : Mf();
	}
	function jd() {
		if (cd === 0) {
			if (!(Y & 536870912) || L) {
				var e = it;
				it <<= 1, !(it & 3932160) && (it = 262144), cd = e;
			} else cd = 536870912;
		}
		return e = jo.current, e !== null && (e.flags |= 32), cd;
	}
	function Md(e, t) {
		if (t != null) {
			var n = e.stateNode, r = n.ref;
			r === null && (r = n.ref = Pp(bi(e.memoizedProps, n))), Ed === null && (Ed = []), Ed.push(t.bind(null, r));
		}
	}
	function Nd(e, t, n) {
		(e === $u && (X === 2 || X === 9) || e.cancelPendingCommit !== null) && (Bd(e, 0), Ld(e, Y, cd, !1)), pt(e, n), (!(Qu & 2) || e !== $u) && (e === $u && (!(Qu & 2) && (od |= n), id === 4 && Ld(e, Y, cd, !1)), wf(e));
	}
	function Pd(e, t, n) {
		if (Qu & 6) throw Error(i(327));
		var r = !n && !(t & 127) && (t & e.expiredLanes) === 0 || ct(e, t), a = r ? $(e, t) : Q(e, t, !0), o = r;
		do {
			if (a === 0) {
				Z && !r && Ld(e, t, 0, !1);
				break;
			}
			if (n = e.current.alternate, o && !Id(n)) a = Q(e, t, !1), o = !1;
			else {
				if (a === 2) {
					if (o = t, e.errorRecoveryDisabledLanes & o) var s = 0;
					else s = e.pendingLanes & -536870913, s = s === 0 ? s & 536870912 ? 536870912 : 0 : s;
					if (s !== 0) {
						t = s;
						a: {
							var c = e;
							a = ud;
							var l = c.current.memoizedState.isDehydrated;
							if (l && (Bd(c, s).flags |= 256), s = Q(c, s, !1), s !== 2 && s !== 6) {
								if (nd && !l) {
									c.errorRecoveryDisabledLanes |= o, od |= o, a = 4;
									break a;
								}
								o = dd, dd = a, o !== null && (dd === null ? dd = o : dd.push.apply(dd, o));
							}
							a = s;
						}
						if (o = !1, a !== 2) continue;
					}
				}
				if (a === 1) {
					Bd(e, 0), Ld(e, t, 0, !0);
					break;
				}
				a: {
					switch (r = e, o = a, o) {
						case 0:
						case 1: throw Error(i(345));
						case 4: if ((t & 4194048) !== t && (t & 62914560) !== t) break;
						case 6:
							Ld(r, t, cd, !td);
							break a;
						case 2:
							dd = null;
							break;
						case 3:
						case 5: break;
						default: throw Error(i(329));
					}
					if ((t & 62914560) === t && (a = pd + 300 - He(), 10 < a)) {
						if (Ld(r, t, cd, !td), st(r, 0, !0) !== 0) break a;
						xd = t, r.timeoutHandle = gp(Fd.bind(null, r, n, dd, gd, fd, t, cd, od, ld, td, o, "Throttled", -0, 0), a);
						break a;
					}
					Fd(r, n, dd, gd, fd, t, cd, od, ld, td, o, null, -0, 0);
				}
				break;
			}
		} while (1);
		wf(e);
	}
	function Fd(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
		e.timeoutHandle = -1;
		var m = t.subtreeFlags, h = (a & 335544064) === a;
		d = null, (h || m & 8192 || (m & 16785408) == 16785408) && (d = {
			stylesheets: null,
			count: 0,
			imgCount: 0,
			imgBytes: 0,
			suspenseyImages: [],
			waitingForImages: !0,
			waitingForViewTransition: !1,
			unsuspend: xn
		}, Rl = null, Wu(t, a, d), h && (m = d, h = e.containerInfo, h = (h.nodeType === 9 ? h : h.ownerDocument).__reactViewTransition, h != null && (m.count++, m.waitingForViewTransition = !0, m = nh.bind(m), h.finished.then(m, m))), m = (a & 62914560) === a ? pd - He() : (a & 4194048) === a ? md - He() : 0, m = eh(d, m), m !== null) ? (xd = a, e.cancelPendingCommit = m($d.bind(null, e, t, a, n, r, i, o, s, c, l, u, d, null, f, p)), Ld(e, a, o, !l)) : $d(e, t, a, n, r, i, o, s, c, l, u, d);
	}
	function Id(e) {
		for (var t = e;;) {
			var n = t.tag;
			if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null))) for (var r = 0; r < n.length; r++) {
				var i = n[r], a = i.getSnapshot;
				i = i.value;
				try {
					if (!Wr(a(), i)) return !1;
				} catch {
					return !1;
				}
			}
			if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
			else {
				if (t === e) break;
				for (; t.sibling === null;) {
					if (t.return === null || t.return === e) return !0;
					t = t.return;
				}
				t.sibling.return = t.return, t = t.sibling;
			}
		}
		return !0;
	}
	function Ld(e, t, n, r) {
		t = lt(e, t), t &= ~sd, t &= ~od, e.suspendedLanes |= t, e.pingedLanes &= ~t, r && (e.warmLanes |= t), r = e.expirationTimes;
		for (var i = t; 0 < i;) {
			var a = 31 - $e(i), o = 1 << a;
			r[a] = -1, i &= ~o;
		}
		n !== 0 && ht(e, n, t);
	}
	function Rd() {
		return Qu & 6 ? !0 : (Tf(0, !1), !1);
	}
	function zd() {
		if (J !== null) {
			if (X === 0) var e = J.return;
			else e = J, ba = ya = null, rs(e), oo = null, so = 0, e = J;
			for (; e !== null;) vl(e.alternate, e), e = e.return;
			J = null;
		}
	}
	function Bd(e, t) {
		var n = e.timeoutHandle;
		return n !== -1 && (e.timeoutHandle = -1, _p(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), xd = 0, zd(), $u = e, J = n = Li(e.current, null), Y = t, X = 0, ed = null, td = !1, Z = ct(e, t), nd = !1, ld = cd = sd = od = ad = id = 0, dd = ud = null, fd = !1, rd = lt(e, t), Di(), n;
	}
	function Vd(e, t) {
		V = null, A.H = dc, t === Za || t === $a ? (t = io(), X = 3) : t === Qa ? (t = io(), X = 4) : X = t === kc ? 8 : typeof t == "object" && t && typeof t.then == "function" ? 6 : 1, ed = t, J === null && (id = 1, Cc(e, Gi(t, e.current)));
	}
	function Hd() {
		var e = jo.current;
		return e === null ? !0 : (Y & 4194048) === Y ? Mo === null : (Y & 62914560) === Y || Y & 536870912 ? e === Mo : !1;
	}
	function Ud() {
		var e = A.H;
		return A.H = dc, e === null ? dc : e;
	}
	function Wd() {
		var e = A.A;
		return A.A = Xu, e;
	}
	function Gd() {
		id = 4, td || (Y & 4194048) !== Y && jo.current !== null || (Z = !0), !(ad & 134217727) && !(od & 134217727) || $u === null || Ld($u, Y, cd, !1);
	}
	function Q(e, t, n) {
		var r = Qu;
		Qu |= 2;
		var i = Ud(), a = Wd();
		($u !== e || Y !== t) && (gd = null, Bd(e, t)), t = !1;
		var o = id;
		a: do
			try {
				if (X !== 0 && J !== null) {
					var s = J, c = ed;
					switch (X) {
						case 8:
							zd(), o = 6;
							break a;
						case 3:
						case 2:
						case 9:
						case 6:
							jo.current === null && (t = !0);
							var l = X;
							if (X = 0, ed = null, Xd(e, s, c, l), n && Z) {
								o = 0;
								break a;
							}
							break;
						default: l = X, X = 0, ed = null, Xd(e, s, c, l);
					}
				}
				Kd(), o = id;
				break;
			} catch (t) {
				Vd(e, t);
			}
		while (1);
		return t && e.shellSuspendCounter++, ba = ya = null, Qu = r, A.H = i, A.A = a, J === null && ($u = null, Y = 0, Di()), o;
	}
	function Kd() {
		for (; J !== null;) Jd(J);
	}
	function $(e, t) {
		var n = Qu;
		Qu |= 2;
		var r = Ud(), a = Wd();
		$u !== e || Y !== t ? (gd = null, hd = He() + 500, Bd(e, t)) : Z = ct(e, t);
		a: do
			try {
				if (X !== 0 && J !== null) {
					t = J;
					var o = ed;
					b: switch (X) {
						case 1:
							X = 0, ed = null, Xd(e, t, o, 1);
							break;
						case 2:
						case 9:
							if (eo(o)) {
								X = 0, ed = null, Yd(t);
								break;
							}
							t = function() {
								X !== 2 && X !== 9 || $u !== e || (X = 7), wf(e);
							}, o.then(t, t);
							break a;
						case 3:
							X = 7;
							break a;
						case 4:
							X = 5;
							break a;
						case 7:
							eo(o) ? (X = 0, ed = null, Yd(t)) : (X = 0, ed = null, Xd(e, t, o, 7));
							break;
						case 5:
							var s = null;
							switch (J.tag) {
								case 26: s = J.memoizedState;
								case 5:
								case 27:
									var c = J;
									if (s ? Ym(s) : c.stateNode.complete) {
										X = 0, ed = null;
										var l = c.sibling;
										if (l !== null) J = l;
										else {
											var u = c.return;
											u === null ? J = null : (J = u, Zd(u));
										}
										break b;
									}
							}
							X = 0, ed = null, Xd(e, t, o, 5);
							break;
						case 6:
							X = 0, ed = null, Xd(e, t, o, 6);
							break;
						case 8:
							zd(), id = 6;
							break a;
						default: throw Error(i(462));
					}
				}
				qd();
				break;
			} catch (t) {
				Vd(e, t);
			}
		while (1);
		return ba = ya = null, A.H = r, A.A = a, Qu = n, J === null ? ($u = null, Y = 0, Di(), id) : 0;
	}
	function qd() {
		for (; J !== null && !Be();) Jd(J);
	}
	function Jd(e) {
		var t = ll(e.alternate, e, rd);
		e.memoizedProps = e.pendingProps, t === null ? Zd(e) : J = t;
	}
	function Yd(e) {
		var t = e, n = t.alternate;
		switch (t.tag) {
			case 15:
			case 0:
				t = Uc(n, t, t.pendingProps, t.type, void 0, Y);
				break;
			case 11:
				t = Uc(n, t, t.pendingProps, t.type.render, t.ref, Y);
				break;
			case 5:
				rs(t);
				var r = t;
				r === oa && (L ? (pa(r), r.tag === 5 && r.stateNode != null && (sa = r.stateNode)) : (pa(r), L = !0));
			default: vl(n, t), t = J = Ri(t, rd), t = ll(n, t, rd);
		}
		e.memoizedProps = e.pendingProps, t === null ? Zd(e) : J = t;
	}
	function Xd(e, t, n, r) {
		ba = ya = null, rs(t), oo = null, so = 0;
		var i = t.return;
		try {
			if (Oc(e, i, t, n, Y)) {
				id = 1, Cc(e, Gi(n, e.current)), J = null;
				return;
			}
		} catch (t) {
			if (i !== null) throw J = i, t;
			id = 1, Cc(e, Gi(n, e.current)), J = null;
			return;
		}
		t.flags & 32768 ? (L || r === 1 ? e = !0 : Z || Y & 536870912 ? e = !1 : (td = e = !0, (r === 2 || r === 9 || r === 3 || r === 6) && (r = jo.current, r !== null && r.tag === 13 && (r.flags |= 16384))), Qd(t, e)) : Zd(t);
	}
	function Zd(e) {
		var t = e;
		do {
			if (t.flags & 32768) {
				Qd(t, td);
				return;
			}
			e = t.return;
			var n = gl(t.alternate, t, rd);
			if (n !== null) {
				J = n;
				return;
			}
			if (t = t.sibling, t !== null) {
				J = t;
				return;
			}
			J = t = e;
		} while (t !== null);
		id === 0 && (id = 5);
	}
	function Qd(e, t) {
		do {
			var n = _l(e.alternate, e);
			if (n !== null) {
				n.flags &= 32767, J = n;
				return;
			}
			if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
				J = e;
				return;
			}
			J = e = n;
		} while (e !== null);
		id = 6, J = null;
	}
	function $d(e, t, n, r, a, o, s, c, l, u, d, f) {
		e.cancelPendingCommit = null;
		do
			cf();
		while (vd !== 0);
		if (Qu & 6) throw Error(i(327));
		if (t !== null) {
			if (t === e.current) throw Error(i(177));
			e === $u && (J = $u = null, Y = 0), bd = t, yd = e, xd = n, Cd = a, wd = r, ef(e, t, n, s, c, l, f);
		}
	}
	function ef(e, t, n, r, i, a, o) {
		var s = t.lanes | t.childLanes;
		if (Sd = s, s |= Ei, mt(e, n, s, r, i, a), Ed = null, (n & 335544064) === n ? (Dd = Ra(e), r = 10262) : (Dd = null, r = 10256), (t.subtreeFlags & r) !== 0 || (t.flags & r) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, _f(Ge, function() {
			return lf(), null;
		})) : (e.callbackNode = null, e.callbackPriority = 0), Ll = !1, r = !!(t.flags & 13878), t.subtreeFlags & 13878 || r) {
			r = A.T, A.T = null, i = ve.p, ve.p = 2, a = Qu, Qu |= 4;
			try {
				fu(e, t, n);
			} finally {
				Qu = a, ve.p = i, A.T = r;
			}
		}
		vd = 1, Ll ? Td = Mp(o, e.containerInfo, Dd, rf, af, nf, of, lf, tf, null, null) : (rf(), af(), of());
	}
	function tf(e) {
		if (vd !== 0) {
			var t = yd.onRecoverableError;
			t(e, { componentStack: null });
		}
	}
	function nf() {
		vd === 3 && (vd = 0, Mu(bd, yd), vd = 4);
	}
	function rf() {
		if (vd === 1) {
			vd = 0;
			var e = yd, t = bd, n = xd, r = !!(t.flags & 13878);
			if (t.subtreeFlags & 13878 || r) {
				r = A.T, A.T = null;
				var i = ve.p;
				ve.p = 2;
				var a = Qu;
				Qu |= 4;
				try {
					lu = uu = !1, Ou(t, e, n), n = cp;
					var o = Xr(e.containerInfo), s = n.focusedElem, c = n.selectionRange;
					if (o !== s && s && s.ownerDocument && Yr(s.ownerDocument.documentElement, s)) {
						if (c !== null && Zr(s)) {
							var l = c.start, u = c.end;
							if (u === void 0 && (u = l), "selectionStart" in s) s.selectionStart = l, s.selectionEnd = Math.min(u, s.value.length);
							else {
								var d = s.ownerDocument || document, f = d && d.defaultView || window;
								if (f.getSelection) {
									var p = f.getSelection(), m = s.textContent.length, h = Math.min(c.start, m), g = c.end === void 0 ? h : Math.min(c.end, m);
									!p.extend && h > g && (o = g, g = h, h = o);
									var _ = Jr(s, h), v = Jr(s, g);
									if (_ && v && (p.rangeCount !== 1 || p.anchorNode !== _.node || p.anchorOffset !== _.offset || p.focusNode !== v.node || p.focusOffset !== v.offset)) {
										var y = d.createRange();
										y.setStart(_.node, _.offset), p.removeAllRanges(), h > g ? (p.addRange(y), p.extend(v.node, v.offset)) : (y.setEnd(v.node, v.offset), p.addRange(y));
									}
								}
							}
						}
						for (d = [], p = s; p = p.parentNode;) p.nodeType === 1 && d.push({
							element: p,
							left: p.scrollLeft,
							top: p.scrollTop
						});
						for (typeof s.focus == "function" && s.focus(), s = 0; s < d.length; s++) {
							var b = d[s];
							b.element.scrollLeft = b.left, b.element.scrollTop = b.top;
						}
					}
					gh = !!sp, cp = sp = null;
				} finally {
					Qu = a, ve.p = i, A.T = r;
				}
			}
			e.current = t, vd = 2;
		}
	}
	function af() {
		if (vd === 2) {
			vd = 0;
			var e = yd, t = bd, n = !!(t.flags & 8772);
			if (t.subtreeFlags & 8772 || n) {
				n = A.T, A.T = null;
				var r = ve.p;
				ve.p = 2;
				var i = Qu;
				Qu |= 4;
				try {
					mu(e, t.alternate, t);
				} finally {
					Qu = i, ve.p = r, A.T = n;
				}
			}
			vd = 3;
		}
	}
	function of() {
		if (vd === 4 || vd === 3) {
			vd = 0;
			var e = Td;
			Td = null, Ve();
			var t = yd, n = bd, r = xd, i = wd, a = (r & 335544064) === r ? 10262 : 10256;
			if ((n.subtreeFlags & a) !== 0 || (n.flags & a) !== 0 ? vd = 5 : (vd = 0, bd = yd = null, sf(t, t.pendingLanes)), a = t.pendingLanes, a === 0 && (_d = null), yt(r), n = n.stateNode, Ze && typeof Ze.onCommitFiberRoot == "function") try {
				Ze.onCommitFiberRoot(Xe, n, void 0, (n.current.flags & 128) == 128);
			} catch {}
			if (i !== null) {
				n = A.T, a = ve.p, ve.p = 2, A.T = null;
				try {
					for (var o = t.onRecoverableError, s = 0; s < i.length; s++) {
						var c = i[s];
						o(c.value, { componentStack: c.stack });
					}
				} finally {
					A.T = n, ve.p = a;
				}
			}
			if (i = Ed, o = Dd, Dd = null, i !== null && (Ed = null, o === null && (o = []), e !== null)) for (c = 0; c < i.length; c++) n = (0, i[c])(o), n !== void 0 && e.finished.finally(n);
			xd & 3 && cf(), wf(t), a = t.pendingLanes, r & 261930 && a & 42 ? t === kd ? Od++ : (Od = 0, kd = t) : (Od = 0, kd = null), Tf(0, !1);
		}
	}
	function sf(e, t) {
		(e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Ia(t)));
	}
	function cf() {
		return Td !== null && (Td.skipTransition(), Td = null), rf(), af(), of(), lf();
	}
	function lf() {
		if (vd !== 5) return !1;
		var e = yd, t = Sd;
		Sd = 0;
		var n = yt(xd), r = A.T, a = ve.p;
		try {
			ve.p = 32 > n ? 32 : n, A.T = null, n = Cd, Cd = null;
			var o = yd, s = xd;
			if (vd = 0, bd = yd = null, xd = 0, Qu & 6) throw Error(i(331));
			var c = Qu;
			if (Qu |= 4, qu(o.current), zu(o, o.current, s, n), Qu = c, Tf(0, !1), Ze && typeof Ze.onPostCommitFiberRoot == "function") try {
				Ze.onPostCommitFiberRoot(Xe, o);
			} catch {}
			return !0;
		} finally {
			ve.p = a, A.T = r, sf(e, t);
		}
	}
	function uf(e, t, n) {
		t = Gi(n, t), t = Tc(e.stateNode, t, 2), e = yo(e, t, 2), e !== null && (pt(e, 2), wf(e));
	}
	function df(e, t, n) {
		if (e.tag === 3) uf(e, e, n);
		else for (; t !== null;) {
			if (t.tag === 3) {
				uf(t, e, n);
				break;
			}
			if (t.tag === 1) {
				var r = t.stateNode;
				if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (_d === null || !_d.has(r))) {
					e = Gi(n, e), n = Ec(2), r = yo(t, n, 2), r !== null && (Dc(n, r, t, e), pt(r, 2), wf(r));
					break;
				}
			}
			t = t.return;
		}
	}
	function ff(e, t, n) {
		var r = e.pingCache;
		if (r === null) {
			r = e.pingCache = new Zu();
			var i = /* @__PURE__ */ new Set();
			r.set(t, i);
		} else i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
		i.has(n) || (nd = !0, i.add(n), e = pf.bind(null, e, t, n), t.then(e, e));
	}
	function pf(e, t, n) {
		var r = e.pingCache;
		r !== null && r.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, $u === e && (Y & n) === n && (id === 4 || id === 3 && (Y & 62914560) === Y && 300 > He() - pd ? Qu & 2 ? sd |= n : Bd(e, 0) : sd |= n, ld === Y && (ld = 0)), wf(e);
	}
	function mf(e, t) {
		t === 0 && (t = dt()), e = Ai(e, t), e !== null && (pt(e, t), wf(e));
	}
	function hf(e) {
		var t = e.memoizedState, n = 0;
		t !== null && (n = t.retryLane), mf(e, n);
	}
	function gf(e, t) {
		var n = 0;
		switch (e.tag) {
			case 31:
			case 13:
				var r = e.stateNode, a = e.memoizedState;
				a !== null && (n = a.retryLane);
				break;
			case 19:
				r = e.stateNode;
				break;
			case 22:
				r = e.stateNode._retryCache;
				break;
			default: throw Error(i(314));
		}
		r !== null && r.delete(t), mf(e, n);
	}
	function _f(e, t) {
		return Re(e, t);
	}
	var vf = null, yf = null, bf = !1, xf = !1, Sf = !1, Cf = 0;
	function wf(e) {
		e !== yf && e.next === null && (yf === null ? vf = yf = e : yf = yf.next = e), xf = !0, bf || (bf = !0, jf());
	}
	function Tf(e, t) {
		if (!Sf && xf) {
			Sf = !0;
			do
				for (var n = !1, r = vf; r !== null;) {
					if (!t) {
						if (e !== 0) {
							var i = r.pendingLanes;
							if (i === 0) var a = 0;
							else {
								var o = r.suspendedLanes, s = r.pingedLanes;
								a = (1 << 31 - $e(42 | e) + 1) - 1, a &= i & ~(o & ~s), a = a & 201326741 ? a & 201326741 | 1 : a ? a | 2 : 0;
							}
							a !== 0 && (n = !0, Af(r, a));
						} else a = Y, a = st(r, r === $u ? a : 0, r.cancelPendingCommit !== null || r.timeoutHandle !== -1), !(a & 3) || ct(r, a) || (n = !0, Af(r, a));
					}
					r = r.next;
				}
			while (n);
			Sf = !1;
		}
	}
	function Ef() {
		Df();
	}
	function Df() {
		xf = bf = !1;
		var e = 0;
		Cf !== 0 && hp() && (e = Cf);
		for (var t = He(), n = null, r = vf; r !== null;) {
			var i = r.next, a = Of(r, t);
			a === 0 ? (r.next = null, n === null ? vf = i : n.next = i, i === null && (yf = n)) : (n = r, (e !== 0 || a & 3) && (xf = !0)), r = i;
		}
		vd !== 0 && vd !== 5 || Tf(e, !1), Cf !== 0 && (Cf = 0);
	}
	function Of(e, t) {
		for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, a = e.pendingLanes & -62914561; 0 < a;) {
			var o = 31 - $e(a), s = 1 << o, c = i[o];
			c === -1 ? ((s & n) === 0 || (s & r) !== 0) && (i[o] = ut(s, t)) : c <= t && (e.expiredLanes |= s), a &= ~s;
		}
		if (t = $u, n = Y, n = st(e, e === t ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), r = e.callbackNode, n === 0 || e === t && (X === 2 || X === 9) || e.cancelPendingCommit !== null) return r !== null && r !== null && ze(r), e.callbackNode = null, e.callbackPriority = 0;
		if (!(n & 3) || ct(e, n)) {
			if (t = n & -n, t === e.callbackPriority) return t;
			switch (r !== null && ze(r), yt(n)) {
				case 2:
				case 8:
					n = P;
					break;
				case 32:
					n = Ge;
					break;
				case 268435456:
					n = qe;
					break;
				default: n = Ge;
			}
			return r = kf.bind(null, e), n = Re(n, r), e.callbackPriority = t, e.callbackNode = n, t;
		}
		return r !== null && r !== null && ze(r), e.callbackPriority = 2, e.callbackNode = null, 2;
	}
	function kf(e, t) {
		if (vd !== 0 && vd !== 5) return e.callbackNode = null, e.callbackPriority = 0, null;
		var n = e.callbackNode;
		if (cf() && e.callbackNode !== n) return null;
		var r = Y;
		return r = st(e, e === $u ? r : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), r === 0 ? null : (Pd(e, r, t), Of(e, He()), e.callbackNode != null && e.callbackNode === n ? kf.bind(null, e) : null);
	}
	function Af(e, t) {
		if (cf()) return null;
		Pd(e, t, !0);
	}
	function jf() {
		bp(function() {
			Qu & 6 ? Re(We, Ef) : Df();
		});
	}
	function Mf() {
		if (Cf === 0) {
			var e = Va;
			e === 0 && (e = rt, rt <<= 1, !(rt & 261888) && (rt = 256)), Cf = e;
		}
		return Cf;
	}
	function Nf(e) {
		return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : bn(e);
	}
	function Pf(e, t, n, r, i) {
		if (t === "submit" && n && n.stateNode === i) {
			var a = Nf((i[Dt] || null).action), o = r.submitter;
			o && (t = (t = o[Dt] || null) ? Nf(t.formAction) : o.getAttribute("formAction"), t !== null && (a = t, o = null));
			var s = new Hn("action", "action", null, r, i);
			e.push({
				event: s,
				listeners: [{
					instance: null,
					listener: function() {
						if (r.defaultPrevented) {
							if (Cf !== 0) {
								var e = new FormData(i, o);
								Zs(n, {
									pending: !0,
									data: e,
									method: i.method,
									action: a
								}, null, e);
							}
						} else typeof a == "function" && (s.preventDefault(), e = new FormData(i, o), Zs(n, {
							pending: !0,
							data: e,
							method: i.method,
							action: a
						}, a, e));
					},
					currentTarget: i
				}]
			});
		}
	}
	for (var Ff = 0; Ff < _i.length; Ff++) {
		var If = _i[Ff];
		vi(If.toLowerCase(), "on" + (If[0].toUpperCase() + If.slice(1)));
	}
	vi(li, "onAnimationEnd"), vi(ui, "onAnimationIteration"), vi(di, "onAnimationStart"), vi("dblclick", "onDoubleClick"), vi("focusin", "onFocus"), vi("focusout", "onBlur"), vi(fi, "onTransitionRun"), vi(pi, "onTransitionStart"), vi(mi, "onTransitionCancel"), vi(hi, "onTransitionEnd"), Ut("onMouseEnter", ["mouseout", "mouseover"]), Ut("onMouseLeave", ["mouseout", "mouseover"]), Ut("onPointerEnter", ["pointerout", "pointerover"]), Ut("onPointerLeave", ["pointerout", "pointerover"]), Ht("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Ht("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Ht("onBeforeInput", [
		"compositionend",
		"keypress",
		"textInput",
		"paste"
	]), Ht("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Ht("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Ht("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
	var Lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Rf = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Lf));
	function zf(e, t) {
		t = !!(t & 4);
		for (var n = 0; n < e.length; n++) {
			var r = e[n], i = r.event;
			r = r.listeners;
			a: {
				var a = void 0;
				if (t) for (var o = r.length - 1; 0 <= o; o--) {
					var s = r[o], c = s.instance, l = s.currentTarget;
					if (s = s.listener, c !== a && i.isPropagationStopped()) break a;
					a = s, i.currentTarget = l;
					try {
						a(i);
					} catch (e) {
						Ci(e);
					}
					i.currentTarget = null, a = c;
				}
				else for (o = 0; o < r.length; o++) {
					if (s = r[o], c = s.instance, l = s.currentTarget, s = s.listener, c !== a && i.isPropagationStopped()) break a;
					a = s, i.currentTarget = l;
					try {
						a(i);
					} catch (e) {
						Ci(e);
					}
					i.currentTarget = null, a = c;
				}
			}
		}
	}
	function Bf(e, t) {
		var n = t[Ot];
		n === void 0 && (n = t[Ot] = /* @__PURE__ */ new Set());
		var r = e + "__bubble";
		n.has(r) || (Wf(t, e, 2, !1), n.add(r));
	}
	function Vf(e, t, n) {
		var r = 0;
		t && (r |= 4), Wf(n, e, r, t);
	}
	var Hf = "_reactListening" + Math.random().toString(36).slice(2);
	function Uf(e) {
		if (!e[Hf]) {
			e[Hf] = !0, Bt.forEach(function(t) {
				t !== "selectionchange" && (Rf.has(t) || Vf(t, !1, e), Vf(t, !0, e));
			});
			var t = e.nodeType === 9 ? e : e.ownerDocument;
			t === null || t[Hf] || (t[Hf] = !0, Vf("selectionchange", !1, t));
		}
	}
	function Wf(e, t, n, r) {
		switch (Ch(t)) {
			case 2:
				var i = _h;
				break;
			case 8:
				i = vh;
				break;
			default: i = yh;
		}
		n = i.bind(null, t, n, e), i = void 0, !jn || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i === void 0 ? e.addEventListener(t, n, !0) : e.addEventListener(t, n, {
			capture: !0,
			passive: i
		}) : i === void 0 ? e.addEventListener(t, n, !1) : e.addEventListener(t, n, { passive: i });
	}
	function Gf(e, t, n, r, i) {
		var a = r;
		if (!(t & 1) && !(t & 2) && r !== null) a: for (;;) {
			if (r === null) return;
			var s = r.tag;
			if (s === 3 || s === 4) {
				var c = r.stateNode.containerInfo;
				if (c === i) break;
				if (s === 4) for (s = r.return; s !== null;) {
					var l = s.tag;
					if ((l === 3 || l === 4) && s.stateNode.containerInfo === i) return;
					s = s.return;
				}
				for (; c !== null;) {
					if (s = Ft(c), s === null) return;
					if (l = s.tag, l === 5 || l === 6 || l === 26 || l === 27) {
						r = a = s;
						continue a;
					}
					c = c.parentNode;
				}
			}
			r = r.return;
		}
		On(function() {
			var r = a, i = Cn(n), s = [];
			a: {
				var c = gi.get(e);
				if (c !== void 0) {
					var l = Hn, u = e;
					switch (e) {
						case "keypress": if (Ln(n) === 0) break a;
						case "keydown":
						case "keyup":
							l = or;
							break;
						case "focusin":
							u = "focus", l = Zn;
							break;
						case "focusout":
							u = "blur", l = Zn;
							break;
						case "beforeblur":
						case "afterblur":
							l = Zn;
							break;
						case "click": if (n.button === 2) break a;
						case "auxclick":
						case "dblclick":
						case "mousedown":
						case "mousemove":
						case "mouseup":
						case "mouseout":
						case "mouseover":
						case "contextmenu":
							l = Yn;
							break;
						case "drag":
						case "dragend":
						case "dragenter":
						case "dragexit":
						case "dragleave":
						case "dragover":
						case "dragstart":
						case "drop":
							l = Xn;
							break;
						case "touchcancel":
						case "touchend":
						case "touchmove":
						case "touchstart":
							l = lr;
							break;
						case li:
						case ui:
						case di:
							l = Qn;
							break;
						case hi:
							l = ur;
							break;
						case "scroll":
						case "scrollend":
							l = Wn;
							break;
						case "wheel":
							l = dr;
							break;
						case "copy":
						case "cut":
						case "paste":
							l = $n;
							break;
						case "gotpointercapture":
						case "lostpointercapture":
						case "pointercancel":
						case "pointerdown":
						case "pointermove":
						case "pointerout":
						case "pointerover":
						case "pointerup":
							l = sr;
							break;
						case "submit":
							l = cr;
							break;
						case "toggle":
						case "beforetoggle": l = fr;
					}
					var d = !!(t & 4), f = !d && (e === "scroll" || e === "scrollend"), p = d ? c === null ? null : c + "Capture" : c;
					d = [];
					for (var m = r, h; m !== null;) {
						var g = m;
						if (h = g.stateNode, g = g.tag, g !== 5 && g !== 26 && g !== 27 || h === null || p === null || (g = kn(m, p), g != null && d.push(Kf(m, g, h))), f) break;
						m = m.return;
					}
					0 < d.length && (c = new l(c, u, null, n, i), s.push({
						event: c,
						listeners: d
					}));
				}
			}
			if (!(t & 7)) {
				a: {
					if (l = e === "mouseover" || e === "pointerover", c = e === "mouseout" || e === "pointerout", l && n !== Sn && (u = n.relatedTarget || n.fromElement) && (Ft(u) || u[F])) break a;
					(c || l) && (u = i.window === i ? i : (l = i.ownerDocument) ? l.defaultView || l.parentWindow : window, c ? (l = n.relatedTarget || n.toElement, c = r, l = l ? Ft(l) : null, l !== null && (f = o(l), d = l.tag, l !== f || d !== 5 && d !== 27 && d !== 6) && (l = null)) : (c = null, l = r), c !== l && (d = Yn, g = "onMouseLeave", p = "onMouseEnter", m = "mouse", (e === "pointerout" || e === "pointerover") && (d = sr, g = "onPointerLeave", p = "onPointerEnter", m = "pointer"), f = c == null ? u : I(c), h = l == null ? u : I(l), u = new d(g, m + "leave", c, n, i), u.target = f, u.relatedTarget = h, g = null, Ft(i) === r && (d = new d(p, m + "enter", l, n, i), d.target = h, d.relatedTarget = f, g = d), f = g, d = c && l ? C(c, l, Jf) : null, c !== null && Yf(s, u, c, d, !1), l !== null && f !== null && Yf(s, f, l, d, !0)));
				}
				a: {
					if (c = r ? I(r) : window, l = c.nodeName && c.nodeName.toLowerCase(), l === "select" || l === "input" && c.type === "file") var _ = Mr;
					else if (Er(c)) {
						if (Nr) _ = Hr;
						else {
							_ = Br;
							var v = zr;
						}
					} else l = c.nodeName, !l || l.toLowerCase() !== "input" || c.type !== "checkbox" && c.type !== "radio" ? r && _n(r.elementType) && (_ = Mr) : _ = Vr;
					if (_ &&= _(e, r)) {
						Dr(s, _, n, i);
						break a;
					}
					v && v(e, c, r);
				}
				switch (v = r ? I(r) : window, e) {
					case "focusin":
						(Er(v) || v.contentEditable === "true") && ($r = v, ei = r, ti = null);
						break;
					case "focusout":
						ti = ei = $r = null;
						break;
					case "mousedown":
						ni = !0;
						break;
					case "contextmenu":
					case "mouseup":
					case "dragend":
						ni = !1, ri(s, n, i);
						break;
					case "selectionchange": if (Qr) break;
					case "keydown":
					case "keyup": ri(s, n, i);
				}
				var y;
				if (mr) b: {
					switch (e) {
						case "compositionstart":
							var b = "onCompositionStart";
							break b;
						case "compositionend":
							b = "onCompositionEnd";
							break b;
						case "compositionupdate":
							b = "onCompositionUpdate";
							break b;
					}
					b = void 0;
				}
				else Sr ? br(e, n) && (b = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (b = "onCompositionStart");
				b && (_r && n.locale !== "ko" && (Sr || b !== "onCompositionStart" ? b === "onCompositionEnd" && Sr && (y = In()) : (Nn = i, Pn = "value" in Nn ? Nn.value : Nn.textContent, Sr = !0)), v = qf(r, b), 0 < v.length && (b = new er(b, e, null, n, i), s.push({
					event: b,
					listeners: v
				}), y ? b.data = y : (y = xr(n), y !== null && (b.data = y)))), (y = gr ? Cr(e, n) : wr(e, n)) && (b = qf(r, "onBeforeInput"), 0 < b.length && (v = new er("onBeforeInput", "beforeinput", null, n, i), s.push({
					event: v,
					listeners: b
				}), v.data = y)), Pf(s, e, r, n, i);
			}
			zf(s, t);
		});
	}
	function Kf(e, t, n) {
		return {
			instance: e,
			listener: t,
			currentTarget: n
		};
	}
	function qf(e, t) {
		for (var n = t + "Capture", r = []; e !== null;) {
			var i = e, a = i.stateNode;
			if (i = i.tag, i !== 5 && i !== 26 && i !== 27 || a === null || (i = kn(e, n), i != null && r.unshift(Kf(e, i, a)), i = kn(e, t), i != null && r.push(Kf(e, i, a))), e.tag === 3) return r;
			e = e.return;
		}
		return [];
	}
	function Jf(e) {
		if (e === null) return null;
		do
			e = e.return;
		while (e && e.tag !== 5 && e.tag !== 27);
		return e || null;
	}
	function Yf(e, t, n, r, i) {
		for (var a = t._reactName, o = []; n !== null && n !== r;) {
			var s = n, c = s.alternate, l = s.stateNode;
			if (s = s.tag, c !== null && c === r) break;
			s !== 5 && s !== 26 && s !== 27 || l === null || (c = l, i ? (l = kn(n, a), l != null && o.unshift(Kf(n, l, c))) : i || (l = kn(n, a), l != null && o.push(Kf(n, l, c)))), n = n.return;
		}
		o.length !== 0 && e.push({
			event: t,
			listeners: o
		});
	}
	var Xf = /\r\n?/g, Zf = /\u0000|\uFFFD/g;
	function Qf(e) {
		return (typeof e == "string" ? e : "" + e).replace(Xf, "\n").replace(Zf, "");
	}
	function $f(e, t) {
		return t = Qf(t), Qf(e) === t;
	}
	function ep(e, t, n, r, a, o) {
		switch (n) {
			case "children":
				if (typeof r == "string") t === "body" || t === "textarea" && r === "" || pn(e, r);
				else if (typeof r == "number" || typeof r == "bigint") t !== "body" && pn(e, "" + r);
				else return;
				break;
			case "className":
				Zt(e, "class", r);
				break;
			case "tabIndex":
				Zt(e, "tabindex", r);
				break;
			case "dir":
			case "role":
			case "viewBox":
			case "width":
			case "height":
				Zt(e, n, r);
				break;
			case "style":
				gn(e, r, o);
				return;
			case "data": if (t !== "object") {
				Zt(e, "data", r);
				break;
			}
			case "src":
			case "href":
				if (r === "" && (t !== "a" || n !== "href") || r == null || typeof r == "function" || typeof r == "symbol" || typeof r == "boolean") {
					e.removeAttribute(n);
					break;
				}
				r = bn(r), e.setAttribute(n, r);
				break;
			case "action":
			case "formAction":
				if (typeof r == "function") {
					e.setAttribute(n, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
					break;
				}
				if (typeof o == "function" && (n === "formAction" ? (t !== "input" && ep(e, t, "name", a.name, a, null), ep(e, t, "formEncType", a.formEncType, a, null), ep(e, t, "formMethod", a.formMethod, a, null), ep(e, t, "formTarget", a.formTarget, a, null)) : (ep(e, t, "encType", a.encType, a, null), ep(e, t, "method", a.method, a, null), ep(e, t, "target", a.target, a, null))), r == null || typeof r == "symbol" || typeof r == "boolean") {
					e.removeAttribute(n);
					break;
				}
				r = bn(r), e.setAttribute(n, r);
				break;
			case "onClick":
				r != null && (e.onclick = xn);
				return;
			case "onScroll":
				r != null && Bf("scroll", e);
				return;
			case "onScrollEnd":
				r != null && Bf("scrollend", e);
				return;
			case "dangerouslySetInnerHTML":
				if (r != null) {
					if (typeof r != "object" || !("__html" in r)) throw Error(i(61));
					if (n = r.__html, n != null) {
						if (a.children != null) throw Error(i(60));
						o?.__html !== n && (e.innerHTML = n);
					}
				}
				break;
			case "multiple":
				e.multiple = r && typeof r != "function" && typeof r != "symbol";
				break;
			case "muted":
				e.muted = r && typeof r != "function" && typeof r != "symbol";
				break;
			case "suppressContentEditableWarning":
			case "suppressHydrationWarning":
			case "defaultValue":
			case "defaultChecked":
			case "innerHTML":
			case "ref": break;
			case "autoFocus": break;
			case "xlinkHref":
				if (r == null || typeof r == "function" || typeof r == "boolean" || typeof r == "symbol") {
					e.removeAttribute("xlink:href");
					break;
				}
				n = bn(r), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
				break;
			case "contentEditable":
			case "spellCheck":
			case "draggable":
			case "value":
			case "autoReverse":
			case "externalResourcesRequired":
			case "focusable":
			case "preserveAlpha":
				r != null && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(n, r) : e.removeAttribute(n);
				break;
			case "inert":
			case "allowFullScreen":
			case "async":
			case "autoPlay":
			case "controls":
			case "credentialless":
			case "default":
			case "defer":
			case "disabled":
			case "disablePictureInPicture":
			case "disableRemotePlayback":
			case "formNoValidate":
			case "hidden":
			case "loop":
			case "noModule":
			case "noValidate":
			case "open":
			case "playsInline":
			case "readOnly":
			case "required":
			case "reversed":
			case "scoped":
			case "seamless":
			case "itemScope":
				r && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(n, "") : e.removeAttribute(n);
				break;
			case "capture":
			case "download":
				!0 === r ? e.setAttribute(n, "") : !1 !== r && r != null && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(n, r) : e.removeAttribute(n);
				break;
			case "cols":
			case "rows":
			case "size":
			case "span":
				r != null && typeof r != "function" && typeof r != "symbol" && !isNaN(r) && 1 <= r ? e.setAttribute(n, r) : e.removeAttribute(n);
				break;
			case "rowSpan":
			case "start":
				r == null || typeof r == "function" || typeof r == "symbol" || isNaN(r) ? e.removeAttribute(n) : e.setAttribute(n, r);
				break;
			case "popover":
				Bf("beforetoggle", e), Bf("toggle", e), Xt(e, "popover", r);
				break;
			case "xlinkActuate":
				Qt(e, "http://www.w3.org/1999/xlink", "xlink:actuate", r);
				break;
			case "xlinkArcrole":
				Qt(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", r);
				break;
			case "xlinkRole":
				Qt(e, "http://www.w3.org/1999/xlink", "xlink:role", r);
				break;
			case "xlinkShow":
				Qt(e, "http://www.w3.org/1999/xlink", "xlink:show", r);
				break;
			case "xlinkTitle":
				Qt(e, "http://www.w3.org/1999/xlink", "xlink:title", r);
				break;
			case "xlinkType":
				Qt(e, "http://www.w3.org/1999/xlink", "xlink:type", r);
				break;
			case "xmlBase":
				Qt(e, "http://www.w3.org/XML/1998/namespace", "xml:base", r);
				break;
			case "xmlLang":
				Qt(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", r);
				break;
			case "xmlSpace":
				Qt(e, "http://www.w3.org/XML/1998/namespace", "xml:space", r);
				break;
			case "is":
				Xt(e, "is", r);
				break;
			case "innerText":
			case "textContent": return;
			default: if (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") n = vn.get(n) || n, Xt(e, n, r);
			else return;
		}
		Jt = !0;
	}
	function tp(e, t, n, r, a, o) {
		switch (n) {
			case "style":
				gn(e, r, o);
				return;
			case "dangerouslySetInnerHTML":
				if (r != null) {
					if (typeof r != "object" || !("__html" in r)) throw Error(i(61));
					if (n = r.__html, n != null) {
						if (a.children != null) throw Error(i(60));
						o?.__html !== n && (e.innerHTML = n);
					}
				}
				break;
			case "children":
				if (typeof r == "string") pn(e, r);
				else if (typeof r == "number" || typeof r == "bigint") pn(e, "" + r);
				else return;
				break;
			case "onScroll":
				r != null && Bf("scroll", e);
				return;
			case "onScrollEnd":
				r != null && Bf("scrollend", e);
				return;
			case "onClick":
				r != null && (e.onclick = xn);
				return;
			case "suppressContentEditableWarning":
			case "suppressHydrationWarning":
			case "innerHTML":
			case "ref": return;
			case "innerText":
			case "textContent": return;
			default:
				if (!Vt.hasOwnProperty(n)) a: {
					if (n[0] === "o" && n[1] === "n" && (a = n.endsWith("Capture"), o = n.slice(2, a ? n.length - 7 : void 0), t = e[Dt] || null, t = t == null ? null : t[n], typeof t == "function" && e.removeEventListener(o, t, a), typeof r == "function")) {
						typeof t != "function" && t !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(o, r, a);
						break a;
					}
					Jt = !0, n in e ? e[n] = r : !0 === r ? e.setAttribute(n, "") : Xt(e, n, r);
				}
				return;
		}
		Jt = !0;
	}
	function np(e, t, n) {
		switch (t) {
			case "div":
			case "span":
			case "svg":
			case "path":
			case "a":
			case "g":
			case "p":
			case "li": break;
			case "img":
				Bf("error", e), Bf("load", e);
				var r = !1, a = !1, o;
				for (o in n) if (n.hasOwnProperty(o)) {
					var s = n[o];
					if (s != null) switch (o) {
						case "src":
							r = !0;
							break;
						case "srcSet":
							a = !0;
							break;
						case "children":
						case "dangerouslySetInnerHTML": throw Error(i(137, t));
						default: ep(e, t, o, s, n, null);
					}
				}
				a && ep(e, t, "srcSet", n.srcSet, n, null), r && ep(e, t, "src", n.src, n, null);
				return;
			case "input":
				Bf("invalid", e);
				var c = o = s = a = null, l = null, u = null;
				for (r in n) if (n.hasOwnProperty(r)) {
					var d = n[r];
					if (d != null) switch (r) {
						case "name":
							a = d;
							break;
						case "type":
							s = d;
							break;
						case "checked":
							l = d;
							break;
						case "defaultChecked":
							u = d;
							break;
						case "value":
							o = d;
							break;
						case "defaultValue":
							c = d;
							break;
						case "children":
						case "dangerouslySetInnerHTML":
							if (d != null) throw Error(i(137, t));
							break;
						default: ep(e, t, r, d, n, null);
					}
				}
				cn(e, o, c, l, u, s, a, !1);
				return;
			case "select":
				for (a in Bf("invalid", e), r = s = o = null, n) if (n.hasOwnProperty(a) && (c = n[a], c != null)) switch (a) {
					case "value":
						o = c;
						break;
					case "defaultValue":
						s = c;
						break;
					case "multiple": r = c;
					default: ep(e, t, a, c, n, null);
				}
				t = o, n = s, e.multiple = !!r, t == null ? n != null && un(e, !!r, n, !0) : un(e, !!r, t, !1);
				return;
			case "textarea":
				for (s in Bf("invalid", e), o = a = r = null, n) if (n.hasOwnProperty(s) && (c = n[s], c != null)) switch (s) {
					case "value":
						r = c;
						break;
					case "defaultValue":
						a = c;
						break;
					case "children":
						o = c;
						break;
					case "dangerouslySetInnerHTML":
						if (c != null) throw Error(i(91));
						break;
					default: ep(e, t, s, c, n, null);
				}
				fn(e, r, a, o);
				return;
			case "option":
				for (l in n) if (n.hasOwnProperty(l) && (r = n[l], r != null)) switch (l) {
					case "selected":
						e.selected = r && typeof r != "function" && typeof r != "symbol";
						break;
					default: ep(e, t, l, r, n, null);
				}
				return;
			case "dialog":
				Bf("beforetoggle", e), Bf("toggle", e), Bf("cancel", e), Bf("close", e);
				break;
			case "iframe":
			case "object":
				Bf("load", e);
				break;
			case "video":
			case "audio":
				for (r = 0; r < Lf.length; r++) Bf(Lf[r], e);
				break;
			case "image":
				Bf("error", e), Bf("load", e);
				break;
			case "details":
				Bf("toggle", e);
				break;
			case "embed":
			case "source":
			case "link": Bf("error", e), Bf("load", e);
			case "area":
			case "base":
			case "br":
			case "col":
			case "hr":
			case "keygen":
			case "meta":
			case "param":
			case "track":
			case "wbr":
			case "menuitem":
				for (u in n) if (n.hasOwnProperty(u) && (r = n[u], r != null)) switch (u) {
					case "children":
					case "dangerouslySetInnerHTML": throw Error(i(137, t));
					default: ep(e, t, u, r, n, null);
				}
				return;
			default: if (_n(t)) {
				for (d in n) n.hasOwnProperty(d) && (r = n[d], r !== void 0 && tp(e, t, d, r, n, void 0));
				return;
			}
		}
		for (c in n) n.hasOwnProperty(c) && (r = n[c], r != null && ep(e, t, c, r, n, null));
	}
	var rp = {};
	function ip(e, t, n, r) {
		switch (t) {
			case "div":
			case "span":
			case "svg":
			case "path":
			case "a":
			case "g":
			case "p":
			case "li": break;
			case "input":
				var a = null, o = null, s = null, c = null, l = null, u = null, d = null;
				for (m in n) {
					var f = n[m];
					if (n.hasOwnProperty(m) && f != null) switch (m) {
						case "checked": break;
						case "value": break;
						case "defaultValue": l = f;
						default: r.hasOwnProperty(m) || ep(e, t, m, null, r, f);
					}
				}
				for (var p in r) {
					var m = r[p];
					if (f = n[p], r.hasOwnProperty(p) && (m != null || f != null)) switch (p) {
						case "type":
							m !== f && (Jt = !0), o = m;
							break;
						case "name":
							m !== f && (Jt = !0), a = m;
							break;
						case "checked":
							m !== f && (Jt = !0), u = m;
							break;
						case "defaultChecked":
							m !== f && (Jt = !0), d = m;
							break;
						case "value":
							m !== f && (Jt = !0), s = m;
							break;
						case "defaultValue":
							m !== f && (Jt = !0), c = m;
							break;
						case "children":
						case "dangerouslySetInnerHTML":
							if (m != null) throw Error(i(137, t));
							break;
						default: m !== f && ep(e, t, p, m, r, f);
					}
				}
				sn(e, s, c, l, u, d, o, a);
				return;
			case "select":
				for (o in m = s = c = p = null, n) if (l = n[o], n.hasOwnProperty(o) && l != null) switch (o) {
					case "value": break;
					case "multiple": m = l;
					default: r.hasOwnProperty(o) || ep(e, t, o, null, r, l);
				}
				for (a in r) if (o = r[a], l = n[a], r.hasOwnProperty(a) && (o != null || l != null)) switch (a) {
					case "value":
						o !== l && (Jt = !0), p = o;
						break;
					case "defaultValue":
						o !== l && (Jt = !0), c = o;
						break;
					case "multiple": o !== l && (Jt = !0), s = o;
					default: o !== l && ep(e, t, a, o, r, l);
				}
				t = c, n = s, r = m, p == null ? !!r != !!n && (t == null ? un(e, !!n, n ? [] : "", !1) : un(e, !!n, t, !0)) : un(e, !!n, p, !1);
				return;
			case "textarea":
				for (c in m = p = null, n) if (a = n[c], n.hasOwnProperty(c) && a != null && !r.hasOwnProperty(c)) switch (c) {
					case "value": break;
					case "children": break;
					default: ep(e, t, c, null, r, a);
				}
				for (s in r) if (a = r[s], o = n[s], r.hasOwnProperty(s) && (a != null || o != null)) switch (s) {
					case "value":
						a !== o && (Jt = !0), p = a;
						break;
					case "defaultValue":
						a !== o && (Jt = !0), m = a;
						break;
					case "children": break;
					case "dangerouslySetInnerHTML":
						if (a != null) throw Error(i(91));
						break;
					default: a !== o && ep(e, t, s, a, r, o);
				}
				dn(e, p, m);
				return;
			case "option":
				for (var h in n) if (p = n[h], n.hasOwnProperty(h) && p != null && !r.hasOwnProperty(h)) switch (h) {
					case "selected":
						e.selected = !1;
						break;
					default: ep(e, t, h, null, r, p);
				}
				for (l in r) if (p = r[l], m = n[l], r.hasOwnProperty(l) && p !== m && (p != null || m != null)) switch (l) {
					case "selected":
						p !== m && (Jt = !0), e.selected = p && typeof p != "function" && typeof p != "symbol";
						break;
					default: ep(e, t, l, p, r, m);
				}
				return;
			case "img":
			case "link":
			case "area":
			case "base":
			case "br":
			case "col":
			case "embed":
			case "hr":
			case "keygen":
			case "meta":
			case "param":
			case "source":
			case "track":
			case "wbr":
			case "menuitem":
				for (var g in n) p = n[g], n.hasOwnProperty(g) && p != null && !r.hasOwnProperty(g) && ep(e, t, g, null, r, p);
				for (u in r) if (p = r[u], m = n[u], r.hasOwnProperty(u) && p !== m && (p != null || m != null)) switch (u) {
					case "children":
					case "dangerouslySetInnerHTML":
						if (p != null) throw Error(i(137, t));
						break;
					default: ep(e, t, u, p, r, m);
				}
				return;
			default: if (_n(t)) {
				for (var _ in n) p = n[_], n.hasOwnProperty(_) && p !== void 0 && !r.hasOwnProperty(_) && tp(e, t, _, void 0, r, p);
				for (d in r) p = r[d], m = n[d], !r.hasOwnProperty(d) || p === m || p === void 0 && m === void 0 || tp(e, t, d, p, r, m);
				return;
			}
		}
		for (var v in n) p = n[v], n.hasOwnProperty(v) && p != null && !r.hasOwnProperty(v) && ep(e, t, v, null, r, p);
		for (f in r) p = r[f], m = n[f], !r.hasOwnProperty(f) || p === m || p == null && m == null || ep(e, t, f, p, r, m);
	}
	function ap(e) {
		switch (e) {
			case "css":
			case "script":
			case "font":
			case "img":
			case "image":
			case "input":
			case "link": return !0;
			default: return !1;
		}
	}
	function op() {
		if (typeof performance.getEntriesByType == "function") {
			for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), r = 0; r < n.length; r++) {
				var i = n[r], a = i.transferSize, o = i.initiatorType, s = i.duration;
				if (a && s && ap(o)) {
					for (o = 0, s = i.responseEnd, r += 1; r < n.length; r++) {
						var c = n[r], l = c.startTime;
						if (l > s) break;
						var u = c.transferSize, d = c.initiatorType;
						u && ap(d) && (c = c.responseEnd, o += u * (c < s ? 1 : (s - l) / (c - l)));
					}
					if (--r, t += 8 * (a + o) / (i.duration / 1e3), e++, 10 < e) break;
				}
			}
			if (0 < e) return t / e / 1e6;
		}
		return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
	}
	var sp = null, cp = null;
	function lp(e) {
		return e.nodeType === 9 ? e : e.ownerDocument;
	}
	function up(e) {
		switch (e) {
			case "http://www.w3.org/2000/svg": return 1;
			case "http://www.w3.org/1998/Math/MathML": return 2;
			default: return 0;
		}
	}
	function dp(e, t) {
		if (e === 0) switch (t) {
			case "svg": return 1;
			case "math": return 2;
			default: return 0;
		}
		return e === 1 && t === "foreignObject" ? 0 : e;
	}
	function fp(e, t, n, r) {
		return n = lp(n).createElement(e), n[Et] = r, n[Dt] = t, np(n, e, t), Rt(n), n;
	}
	function pp(e, t) {
		return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
	}
	var mp = null;
	function hp() {
		var e = window.event;
		return e && e.type === "popstate" ? e !== mp && (mp = e, !0) : (mp = null, !1);
	}
	var gp = typeof setTimeout == "function" ? setTimeout : void 0, _p = typeof clearTimeout == "function" ? clearTimeout : void 0, vp = typeof Promise == "function" ? Promise : void 0, yp = typeof requestAnimationFrame == "function" ? requestAnimationFrame : gp, bp = typeof queueMicrotask == "function" ? queueMicrotask : vp === void 0 ? gp : function(e) {
		return vp.resolve(null).then(e).catch(xp);
	};
	function xp(e) {
		setTimeout(function() {
			throw e;
		});
	}
	function Sp(e) {
		return e === "head";
	}
	function Cp(e, t) {
		var n = t, r = 0;
		do {
			var i = n.nextSibling;
			if (e.removeChild(n), i && i.nodeType === 8) {
				if (n = i.data, n === "/$" || n === "/&") {
					if (r === 0) {
						e.removeChild(i), Hh(t);
						return;
					}
					r--;
				} else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&") r++;
				else if (n === "html") _m(e.ownerDocument.documentElement);
				else if (n === "head") {
					n = e.ownerDocument.head, _m(n);
					for (var a = n.firstChild; a;) {
						var o = a.nextSibling, s = a.nodeName;
						a[Mt] || s === "SCRIPT" || s === "STYLE" || s === "LINK" && a.rel.toLowerCase() === "stylesheet" || n.removeChild(a), a = o;
					}
				} else n === "body" && _m(e.ownerDocument.body);
			}
			n = i;
		} while (n);
		Hh(t);
	}
	function wp(e, t) {
		var n = e;
		e = 0;
		do {
			var r = n.nextSibling;
			if (n.nodeType === 1 ? t ? (n._stashedDisplay = n.style.display, n.style.display = "none") : (n.style.display = n._stashedDisplay || "", n.getAttribute("style") === "" && n.removeAttribute("style")) : n.nodeType === 3 && (t ? (n._stashedText = n.nodeValue, n.nodeValue = "") : n.nodeValue = n._stashedText || ""), r && r.nodeType === 8) {
				if (n = r.data, n === "/$") {
					if (e === 0) break;
					e--;
				} else n !== "$" && n !== "$?" && n !== "$~" && n !== "$!" || e++;
			}
			n = r;
		} while (n);
	}
	function Tp(e, t, n) {
		if (t = CSS.escape(t) === t ? t : "r-" + btoa(t).replace(/=/g, ""), e.style.viewTransitionName = t, n != null && (e.style.viewTransitionClass = n), n = getComputedStyle(e), n.display === "inline") {
			if (t = e.getClientRects(), t.length === 1) var r = 1;
			else for (var i = r = 0; i < t.length; i++) {
				var a = t[i];
				0 < a.width && 0 < a.height && r++;
			}
			r === 1 && (e = e.style, e.display = t.length === 1 ? "inline-block" : "block", e.marginTop = "-" + n.paddingTop, e.marginBottom = "-" + n.paddingBottom);
		}
	}
	function Ep(e, t) {
		e = e.style, t = t.style;
		var n = t == null ? null : t.hasOwnProperty("viewTransitionName") ? t.viewTransitionName : t.hasOwnProperty("view-transition-name") ? t["view-transition-name"] : null;
		e.viewTransitionName = n == null || typeof n == "boolean" ? "" : ("" + n).trim(), n = t == null ? null : t.hasOwnProperty("viewTransitionClass") ? t.viewTransitionClass : t.hasOwnProperty("view-transition-class") ? t["view-transition-class"] : null, e.viewTransitionClass = n == null || typeof n == "boolean" ? "" : ("" + n).trim(), e.display === "inline-block" && (t == null ? e.display = e.margin = "" : (n = t.display, e.display = n == null || typeof n == "boolean" ? "" : n, n = t.margin, n == null ? (n = t.hasOwnProperty("marginTop") ? t.marginTop : t["margin-top"], e.marginTop = n == null || typeof n == "boolean" ? "" : n, t = t.hasOwnProperty("marginBottom") ? t.marginBottom : t["margin-bottom"], e.marginBottom = t == null || typeof t == "boolean" ? "" : t) : e.margin = n));
	}
	function Dp(e, t, n) {
		return n = n.ownerDocument.defaultView, {
			rect: e,
			abs: t.position === "absolute" || t.position === "fixed",
			clip: t.clipPath !== "none" || t.overflow !== "visible" || t.filter !== "none" || t.mask !== "none" || t.mask !== "none" || t.borderRadius !== "0px",
			view: 0 <= e.bottom && 0 <= e.right && e.top <= n.innerHeight && e.left <= n.innerWidth
		};
	}
	function Op(e) {
		return Dp(e.getBoundingClientRect(), getComputedStyle(e), e);
	}
	function kp(e) {
		var t = e.getBoundingClientRect();
		t = new DOMRect(t.x + 2e4, t.y + 2e4, t.width, t.height);
		var n = getComputedStyle(e);
		return Dp(t, n, e);
	}
	function Ap(e) {
		return e.documentElement.clientHeight;
	}
	function jp(e) {
		this.addEventListener("load", e), this.addEventListener("error", e);
	}
	function Mp(e, t, n, r, i, a, o, s, c) {
		var l = t.nodeType === 9 ? t : t.ownerDocument;
		try {
			var u = l.startViewTransition({
				update: function() {
					var t = l.defaultView, n = t.navigation && t.navigation.transition, o = l.fonts.status;
					r();
					var s = [];
					if (o === "loaded" && (Ap(l), l.fonts.status === "loading" && s.push(l.fonts.ready)), o = s.length, e !== null) for (var c = e.suspenseyImages, u = 0, d = 0; d < c.length; d++) {
						var f = c[d];
						if (!f.complete) {
							var p = f.getBoundingClientRect();
							if (0 < p.bottom && 0 < p.right && p.top < t.innerHeight && p.left < t.innerWidth) {
								if (u += Xm(f), u > $m) {
									s.length = o;
									break;
								}
								f = new Promise(jp.bind(f)), s.push(f);
							}
						}
					}
					if (0 < s.length) return t = Promise.race([Promise.all(s), new Promise(function(e) {
						return setTimeout(e, 500);
					})]).then(i, i), (n ? Promise.allSettled([n.finished, t]) : t).then(a, a);
					if (i(), n) return n.finished.then(a, a);
					a();
				},
				types: n
			});
			l.__reactViewTransition = u;
			var d = [];
			return u.ready.then(function() {
				for (var e = l.documentElement.getAnimations({ subtree: !0 }), t = 0; t < e.length; t++) {
					var n = e[t], r = n.effect, i = r.pseudoElement;
					if (i != null && i.startsWith("::view-transition")) {
						d.push(n), n = r.getKeyframes();
						for (var a = i = void 0, s = !0, c = 0; c < n.length; c++) {
							var u = n[c], f = u.width;
							if (i === void 0) i = f;
							else if (i !== f) {
								s = !1;
								break;
							}
							if (f = u.height, a === void 0) a = f;
							else if (a !== f) {
								s = !1;
								break;
							}
							delete u.width, delete u.height, u.transform === "none" && delete u.transform;
						}
						s && i !== void 0 && a !== void 0 && (r.setKeyframes(n), s = getComputedStyle(r.target, r.pseudoElement), s.width !== i || s.height !== a) && (s = n[0], s.width = i, s.height = a, s = n[n.length - 1], s.width = i, s.height = a, r.setKeyframes(n));
					}
				}
				o();
			}, function(e) {
				l.__reactViewTransition === u && (l.__reactViewTransition = null);
				try {
					if (typeof e == "object" && e) switch (e.name) {
						case "InvalidStateError": (e.message === "View transition was skipped because document visibility state is hidden." || e.message === "Skipping view transition because document visibility state has become hidden." || e.message === "Skipping view transition because viewport size changed." || e.message === "Transition was aborted because of invalid state") && (e = null);
					}
					e !== null && c(e);
				} finally {
					r(), i(), o();
				}
			}), u.finished.finally(function() {
				for (var e = 0; e < d.length; e++) d[e].cancel();
				l.__reactViewTransition === u && (l.__reactViewTransition = null), s();
			}), u;
		} catch {
			return r(), i(), o(), null;
		}
	}
	function Np(e, t) {
		this._scope = document.documentElement, this._selector = "::view-transition-" + e + "(" + t + ")";
	}
	Np.prototype.animate = function(e, t) {
		return t = typeof t == "number" ? { duration: t } : w({}, t), t.pseudoElement = this._selector, this._scope.animate(e, t);
	}, Np.prototype.getAnimations = function() {
		for (var e = this._scope, t = this._selector, n = e.getAnimations({ subtree: !0 }), r = [], i = 0; i < n.length; i++) {
			var a = n[i].effect;
			a !== null && a.target === e && a.pseudoElement === t && r.push(n[i]);
		}
		return r;
	}, Np.prototype.getComputedStyle = function() {
		return getComputedStyle(this._scope, this._selector);
	};
	function Pp(e) {
		return {
			name: e,
			group: new Np("group", e),
			imagePair: new Np("image-pair", e),
			old: new Np("old", e),
			new: new Np("new", e)
		};
	}
	function Fp(e) {
		this._fragmentFiber = e, this._observers = this._eventListeners = null;
	}
	Fp.prototype.addEventListener = function(e, t, n) {
		var r = null, i = null;
		if (!(n != null && typeof n != "boolean" && (r = n.signal || null, r !== null && r.aborted))) {
			this._eventListeners === null && (this._eventListeners = []);
			var a = this._eventListeners;
			if (Bp(a, e, t, n) === -1) {
				var o = this, s = t;
				n != null && typeof n != "boolean" && !0 === n.once && (s = function(r) {
					o.removeEventListener(e, t, n), typeof t == "function" ? t.call(this, r) : t.handleEvent(r);
				}), r !== null && (i = o.removeEventListener.bind(o, e, t, n), r.addEventListener("abort", i, { once: !0 }), i = r.removeEventListener.bind(r, "abort", i)), r = Rp(n), a.push({
					type: e,
					listener: t,
					optionsOrUseCapture: n,
					attachedListener: s,
					cleanup: i
				}), f(this._fragmentFiber.child, !1, Ip, e, s, r);
			}
			this._eventListeners = a;
		}
	};
	function Ip(e, t, n, r) {
		return _(e).addEventListener(t, n, r), !1;
	}
	Fp.prototype.removeEventListener = function(e, t, n) {
		var r = this._eventListeners;
		if (r !== null && (t = Bp(r, e, t, n), t !== -1)) {
			var i = r[t];
			n = i.attachedListener;
			var a = i.cleanup;
			i = Rp(i.optionsOrUseCapture), f(this._fragmentFiber.child, !1, Lp, e, n, i), r.splice(t, 1), a !== null && a();
		}
	};
	function Lp(e, t, n, r) {
		return _(e).removeEventListener(t, n, r), !1;
	}
	function Rp(e) {
		return e != null && typeof e != "boolean" && (!0 === e.once || e.signal instanceof AbortSignal) ? {
			capture: e.capture,
			passive: e.passive
		} : e;
	}
	function zp(e) {
		return e == null ? "c=0" : typeof e == "boolean" ? "c=" + (e ? "1" : "0") : "c=" + (e.capture ? "1" : "0");
	}
	function Bp(e, t, n, r) {
		if (e.length === 0) return -1;
		r = zp(r);
		for (var i = 0; i < e.length; i++) {
			var a = e[i];
			if (a.type === t && a.listener === n && zp(a.optionsOrUseCapture) === r) return i;
		}
		return -1;
	}
	Fp.prototype.dispatchEvent = function(e) {
		var t = p(this._fragmentFiber);
		if (t === null) return !0;
		t = _(t);
		var n = this._eventListeners;
		if (n !== null && 0 < n.length || !e.bubbles) {
			var r = t.nodeType === 9 ? t.createComment("") : document.createTextNode("");
			if (n) for (var i = 0; i < n.length; i++) {
				var a = n[i];
				r.addEventListener(a.type, a.attachedListener, Rp(a.optionsOrUseCapture));
			}
			if (t.appendChild(r), e = r.dispatchEvent(e), n) for (i = 0; i < n.length; i++) a = n[i], r.removeEventListener(a.type, a.attachedListener, Rp(a.optionsOrUseCapture));
			return t.removeChild(r), e;
		}
		return t.dispatchEvent(e);
	}, Fp.prototype.focus = function(e) {
		f(this._fragmentFiber.child, !0, Vp, e, void 0, void 0);
	};
	function Vp(e, t) {
		return e.tag !== 6 && (e = _(e), pm(e, t));
	}
	Fp.prototype.focusLast = function(e) {
		var t = [];
		f(this._fragmentFiber.child, !0, Hp, t, void 0, void 0);
		for (var n = t.length - 1; 0 <= n && !Vp(t[n], e); n--);
	};
	function Hp(e, t) {
		return t.push(e), !1;
	}
	Fp.prototype.blur = function() {
		var e = p(this._fragmentFiber);
		e !== null && (e = _(e), e = lp(e).activeElement, e !== null && f(this._fragmentFiber.child, !1, Up, e, void 0, void 0));
	};
	function Up(e, t) {
		return e.tag !== 6 && (e = _(e), e === t || e.contains(t) ? (t.blur(), !0) : !1);
	}
	Fp.prototype.observeUsing = function(e) {
		this._observers === null && (this._observers = /* @__PURE__ */ new Set()), this._observers.add(e), f(this._fragmentFiber.child, !1, Wp, e, void 0, void 0);
	};
	function Wp(e, t) {
		return e.tag === 6 || (e = _(e), t.observe(e)), !1;
	}
	Fp.prototype.unobserveUsing = function(e) {
		var t = this._observers;
		if (t !== null && t.has(e)) {
			t.delete(e), f(this._fragmentFiber.child, !1, Gp, e, void 0, void 0);
			for (var n = t = 0; n < Kp.length; n++) {
				var r = Kp[n];
				r.fragmentInstance === this && r.observer === e ? e.unobserve(r.instance) : Kp[t++] = r;
			}
			Kp.length = t;
		}
	};
	function Gp(e, t) {
		return e.tag === 6 || (e = _(e), t.unobserve(e)), !1;
	}
	var Kp = [], qp = !1;
	function Jp(e, t, n) {
		Kp.push({
			fragmentInstance: e,
			observer: t,
			instance: n
		}), qp || (qp = !0, mm(function() {
			qp = !1;
			var e = Kp;
			Kp = [];
			for (var t = 0; t < e.length; t++) {
				var n = e[t];
				n.observer.unobserve(n.instance);
			}
		}));
	}
	Fp.prototype.getClientRects = function() {
		var e = [];
		return f(this._fragmentFiber.child, !1, Yp, e, void 0, void 0), e;
	};
	function Yp(e, t) {
		if (e.tag === 6) {
			e = e.stateNode;
			var n = e.ownerDocument.createRange();
			n.selectNodeContents(e), t.push.apply(t, n.getClientRects());
		} else e = _(e), t.push.apply(t, e.getClientRects());
		return !1;
	}
	Fp.prototype.getRootNode = function(e) {
		var t = p(this._fragmentFiber);
		return t === null ? this : _(t).getRootNode(e);
	}, Fp.prototype.compareDocumentPosition = function(e) {
		var t = p(this._fragmentFiber);
		if (t === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
		var n = [];
		f(this._fragmentFiber.child, !1, Hp, n, void 0, void 0);
		var r = _(t);
		if (n.length === 0) {
			if (n = r, m(this._fragmentFiber)) {
				a: {
					for (t = this._fragmentFiber.return; t !== null;) {
						if (t.tag === 4) {
							t = t.stateNode.containerInfo;
							break a;
						}
						if (t.tag === 3 || t.tag === 5 || t.tag === 27) break;
						t = t.return;
					}
					t = null;
				}
				t != null && (n = t);
			}
			t = this._fragmentFiber;
			var i = r = n.compareDocumentPosition(e);
			return n === e ? i = Node.DOCUMENT_POSITION_CONTAINS : r & Node.DOCUMENT_POSITION_CONTAINED_BY && (n = h(t)[1], n === null ? i = Node.DOCUMENT_POSITION_PRECEDING : (e = _(n).compareDocumentPosition(e), i = e === 0 || e & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)), i |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
		}
		t = _(n[0]), i = _(n[n.length - 1]);
		var a = m(this._fragmentFiber) ? t.parentElement : r;
		if (a == null) return Node.DOCUMENT_POSITION_DISCONNECTED;
		r = a.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY, a = a.compareDocumentPosition(i) & Node.DOCUMENT_POSITION_CONTAINED_BY;
		var o = t.compareDocumentPosition(e), s = i.compareDocumentPosition(e), c = o & Node.DOCUMENT_POSITION_CONTAINED_BY || s & Node.DOCUMENT_POSITION_CONTAINED_BY;
		return s = r && a && o & Node.DOCUMENT_POSITION_FOLLOWING && s & Node.DOCUMENT_POSITION_PRECEDING, t = r && t === e || a && i === e || c || s ? Node.DOCUMENT_POSITION_CONTAINED_BY : !r && t === e || !a && i === e ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : o, t & Node.DOCUMENT_POSITION_DISCONNECTED || t & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || Xp(t, this._fragmentFiber, n[0], n[n.length - 1], e) ? t : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
	};
	function Xp(e, t, n, r, i) {
		var a = Ft(i);
		if (e & Node.DOCUMENT_POSITION_CONTAINED_BY) {
			if (n = !!a) a: {
				for (; a !== null;) {
					if (a.tag === 7 && (a === t || a.alternate === t)) {
						n = !0;
						break a;
					}
					a = a.return;
				}
				n = !1;
			}
			return n;
		}
		if (e & Node.DOCUMENT_POSITION_CONTAINS) {
			if (a === null) return a = i.ownerDocument, i === a || i === a.documentElement || i === a.body;
			a: {
				for (a = t, t = p(t); a !== null;) {
					if (!(a.tag !== 5 && a.tag !== 3 && a.tag !== 27 || a !== t && a.alternate !== t)) {
						a = !0;
						break a;
					}
					a = a.return;
				}
				a = !1;
			}
			return a;
		}
		return e & Node.DOCUMENT_POSITION_PRECEDING ? ((t = !!a) && !(t = a === n) && (t = C(n, a, S), t === null ? t = !1 : (f(t, !0, b, a, n), a = v, v = null, t = a !== null)), t) : e & Node.DOCUMENT_POSITION_FOLLOWING ? ((t = !!a) && !(t = a === r) && (t = C(r, a, S), t === null ? t = !1 : (f(t, !0, x, a, r), a = v, y = v = null, t = a !== null)), t) : !1;
	}
	function Zp(e, t) {
		var n = e.ownerDocument.createRange();
		n.selectNodeContents(e), e = n.getBoundingClientRect(), window.scrollTo(window.scrollX + e.left, t ? window.scrollY + e.top : window.scrollY + e.bottom - window.innerHeight);
	}
	Fp.prototype.scrollIntoView = function(e) {
		if (typeof e == "object") throw Error(i(566));
		var t = [];
		f(this._fragmentFiber.child, !1, Hp, t, void 0, void 0);
		var n = !1 !== e;
		if (t.length === 0) {
			var r = h(this._fragmentFiber);
			if (r = n ? r[1] || r[0] || p(this._fragmentFiber) : r[0] || r[1], r === null) return;
			if (r.tag === 6) {
				e = _(r), Zp(e, n);
				return;
			}
			if (r = _(r), r.nodeType !== 9) {
				if (r.nodeType === 11) {
					n = "host" in r ? r.host : null, n !== null && n.scrollIntoView(e);
					return;
				}
				r.scrollIntoView(e);
			}
		}
		for (r = n ? t.length - 1 : 0; r !== (n ? -1 : t.length);) {
			var a = t[r];
			a.tag === 6 ? (a = _(a), Zp(a, n)) : _(a).scrollIntoView(e), r += n ? -1 : 1;
		}
	};
	function Qp(e, t) {
		return e = _(e), $p(e, t), !1;
	}
	function $p(e, t) {
		e.reactFragments ??= /* @__PURE__ */ new Set(), e.reactFragments.add(t);
	}
	function em(e, t) {
		var n = t._eventListeners;
		if (n !== null) for (var r = 0; r < n.length; r++) {
			var i = n[r];
			e.addEventListener(i.type, i.attachedListener, Rp(i.optionsOrUseCapture));
		}
		e.nodeType !== 3 && (n = t._observers, n !== null && n.forEach(function(n) {
			for (var r = 0, i = 0; i < Kp.length; i++) {
				var a = Kp[i];
				(a.fragmentInstance !== t || a.observer !== n || a.instance !== e) && (Kp[r++] = a);
			}
			Kp.length = r, n.observe(e);
		}), $p(e, t));
	}
	function tm(e, t) {
		var n = t._eventListeners;
		if (n !== null) for (var r = 0; r < n.length; r++) {
			var i = n[r];
			e.removeEventListener(i.type, i.attachedListener, Rp(i.optionsOrUseCapture));
		}
		e.nodeType !== 3 && (n = t._observers, n !== null && n.forEach(function(n) {
			typeof n.rootMargin == "string" ? Jp(t, n, e) : n.unobserve(e);
		}), e.reactFragments != null && e.reactFragments.delete(t));
	}
	function nm(e) {
		var t = e.firstChild;
		for (t && t.nodeType === 10 && (t = t.nextSibling); t;) {
			var n = t;
			switch (t = t.nextSibling, n.nodeName) {
				case "HTML":
				case "HEAD":
				case "BODY":
					nm(n), Pt(n);
					continue;
				case "SCRIPT":
				case "STYLE": continue;
				case "LINK": if (n.rel.toLowerCase() === "stylesheet") continue;
			}
			e.removeChild(n);
		}
	}
	function rm(e, t, n, r) {
		for (; e.nodeType === 1;) {
			var i = n;
			if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
				if (!r && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
			} else if (!r) {
				if (t === "input" && e.type === "hidden") {
					var a = i.name == null ? null : "" + i.name;
					if (i.type === "hidden" && e.getAttribute("name") === a) return e;
				} else return e;
			} else if (!e[Mt]) switch (t) {
				case "meta":
					if (!e.hasAttribute("itemprop")) break;
					return e;
				case "link":
					if (a = e.getAttribute("rel"), a === "stylesheet" && e.hasAttribute("data-precedence") || a !== i.rel || e.getAttribute("href") !== (i.href == null || i.href === "" ? null : i.href) || e.getAttribute("crossorigin") !== (i.crossOrigin == null ? null : i.crossOrigin) || e.getAttribute("title") !== (i.title == null ? null : i.title)) break;
					return e;
				case "style":
					if (e.hasAttribute("data-precedence")) break;
					return e;
				case "script":
					if (a = e.getAttribute("src"), (a !== (i.src == null ? null : i.src) || e.getAttribute("type") !== (i.type == null ? null : i.type) || e.getAttribute("crossorigin") !== (i.crossOrigin == null ? null : i.crossOrigin)) && a && e.hasAttribute("async") && !e.hasAttribute("itemprop")) break;
					return e;
				default: return e;
			}
			if (e = lm(e.nextSibling), e === null) break;
		}
		return null;
	}
	function im(e, t, n) {
		if (t === "") return null;
		for (; e.nodeType !== 3;) if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = lm(e.nextSibling), e === null)) return null;
		return e;
	}
	function am(e, t) {
		for (; e.nodeType !== 8;) if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = lm(e.nextSibling), e === null)) return null;
		return e;
	}
	function om(e) {
		return e.data === "$?" || e.data === "$~";
	}
	function sm(e) {
		return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
	}
	function cm(e, t) {
		var n = e.ownerDocument;
		if (e.data === "$~") e._reactRetry = t;
		else if (e.data !== "$?" || n.readyState !== "loading") t();
		else {
			var r = function() {
				t(), n.removeEventListener("DOMContentLoaded", r);
			};
			n.addEventListener("DOMContentLoaded", r), e._reactRetry = r;
		}
	}
	function lm(e) {
		for (; e != null; e = e.nextSibling) {
			var t = e.nodeType;
			if (t === 1 || t === 3) break;
			if (t === 8) {
				if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F") break;
				if (t === "/$" || t === "/&") return null;
			}
		}
		return e;
	}
	var um = null;
	function dm(e) {
		e = e.nextSibling;
		for (var t = 0; e;) {
			if (e.nodeType === 8) {
				var n = e.data;
				if (n === "/$" || n === "/&") {
					if (t === 0) return lm(e.nextSibling);
					t--;
				} else n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || t++;
			}
			e = e.nextSibling;
		}
		return null;
	}
	function fm(e) {
		e = e.previousSibling;
		for (var t = 0; e;) {
			if (e.nodeType === 8) {
				var n = e.data;
				if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
					if (t === 0) return e;
					t--;
				} else n !== "/$" && n !== "/&" || t++;
			}
			e = e.previousSibling;
		}
		return null;
	}
	function pm(e, t) {
		function n() {
			r = !0;
		}
		if (e.ownerDocument.activeElement === e) return !0;
		var r = !1;
		try {
			e.ownerDocument.addEventListener("focus", n, !0), (e.focus || HTMLElement.prototype.focus).call(e, t);
		} finally {
			e.ownerDocument.removeEventListener("focus", n, !0);
		}
		return r;
	}
	function mm(e) {
		yp(function() {
			yp(function(t) {
				return e(t);
			});
		});
	}
	function hm(e, t, n) {
		switch (t = lp(n), e) {
			case "html":
				if (e = t.documentElement, !e) throw Error(i(452));
				return e;
			case "head":
				if (e = t.head, !e) throw Error(i(453));
				return e;
			case "body":
				if (e = t.body, !e) throw Error(i(454));
				return e;
			default: throw Error(i(451));
		}
	}
	function gm(e, t, n) {
		for (var r in n) {
			var i = n[r];
			n.hasOwnProperty(r) && i != null && ep(e, t, r, null, rp, i);
		}
		n.dangerouslySetInnerHTML != null && (e.textContent = ""), e.onclick === xn && (e.onclick = null), Pt(e);
	}
	function _m(e) {
		for (var t = e.attributes; t.length;) e.removeAttributeNode(t[0]);
		Pt(e);
	}
	var vm = /* @__PURE__ */ new Map(), ym = /* @__PURE__ */ new Set();
	function bm(e) {
		if (typeof e.getRootNode == "function") {
			var t = e.getRootNode();
			if (t.nodeType === 9 || t.nodeType === 11) return t;
		}
		return e.nodeType === 9 ? e : e.ownerDocument;
	}
	var xm = ve.d;
	ve.d = {
		f: Sm,
		r: Cm,
		D: Em,
		C: Dm,
		L: Om,
		m: km,
		X: jm,
		S: Am,
		M: Mm
	};
	function Sm() {
		var e = xm.f(), t = Rd();
		return e || t;
	}
	function Cm(e) {
		var t = It(e);
		t !== null && t.tag === 5 && t.type === "form" ? $s(t) : xm.r(e);
	}
	var wm = typeof document > "u" ? null : document;
	function Tm(e, t, n) {
		var r = wm;
		if (r && typeof t == "string" && t) {
			var i = on(t);
			i = "link[rel=\"" + e + "\"][href=\"" + i + "\"]", typeof n == "string" && (i += "[crossorigin=\"" + n + "\"]"), ym.has(i) || (ym.add(i), e = {
				rel: e,
				crossOrigin: n,
				href: t
			}, r.querySelector(i) === null && (t = r.createElement("link"), np(t, "link", e), Rt(t), r.head.appendChild(t)));
		}
	}
	function Em(e) {
		xm.D(e), Tm("dns-prefetch", e, null);
	}
	function Dm(e, t) {
		xm.C(e, t), Tm("preconnect", e, t);
	}
	function Om(e, t, n) {
		xm.L(e, t, n);
		var r = wm;
		if (r && e && t) {
			var i = "link[rel=\"preload\"][as=\"" + on(t) + "\"]";
			t === "image" && n && n.imageSrcSet ? (i += "[imagesrcset=\"" + on(n.imageSrcSet) + "\"]", typeof n.imageSizes == "string" && (i += "[imagesizes=\"" + on(n.imageSizes) + "\"]")) : i += "[href=\"" + on(e) + "\"]";
			var a = i;
			switch (t) {
				case "style":
					a = Pm(e);
					break;
				case "script": a = Rm(e);
			}
			if (!(vm.has(a) || (e = w({
				rel: "preload",
				href: t === "image" && n && n.imageSrcSet ? void 0 : e,
				as: t
			}, n), vm.set(a, e), r.querySelector(i) !== null || t === "style" && r.querySelector(Fm(a)) || t === "script" && r.querySelector(zm(a))))) {
				var o = r.createElement("link");
				np(o, "link", e), t === "style" && (o[Nt] = !0, o.onload = o.onerror = function() {
					zt(o);
				}), Rt(o), r.head.appendChild(o);
			}
		}
	}
	function km(e, t) {
		xm.m(e, t);
		var n = wm;
		if (n && e) {
			var r = t && typeof t.as == "string" ? t.as : "script", i = "link[rel=\"modulepreload\"][as=\"" + on(r) + "\"][href=\"" + on(e) + "\"]", a = i;
			switch (r) {
				case "audioworklet":
				case "paintworklet":
				case "serviceworker":
				case "sharedworker":
				case "worker":
				case "script": a = Rm(e);
			}
			if (!vm.has(a) && (e = w({
				rel: "modulepreload",
				href: e
			}, t), vm.set(a, e), n.querySelector(i) === null)) {
				switch (r) {
					case "audioworklet":
					case "paintworklet":
					case "serviceworker":
					case "sharedworker":
					case "worker":
					case "script": if (n.querySelector(zm(a))) return;
				}
				r = n.createElement("link"), np(r, "link", e), Rt(r), n.head.appendChild(r);
			}
		}
	}
	function Am(e, t, n) {
		xm.S(e, t, n);
		var r = wm;
		if (r && e) {
			var i = Lt(r).hoistableStyles, a = Pm(e);
			t ||= "default";
			var o = i.get(a);
			if (!o) {
				var s = {
					loading: 0,
					preload: null
				};
				if (o = r.querySelector(Fm(a))) s.loading = 5;
				else {
					e = w({
						rel: "stylesheet",
						href: e,
						"data-precedence": t
					}, n), (n = vm.get(a)) && Hm(e, n);
					var c = o = r.createElement("link");
					Rt(c), np(c, "link", e), c._p = new Promise(function(e, t) {
						c.onload = e, c.onerror = t;
					}), c.addEventListener("load", function() {
						s.loading |= 1;
					}), c.addEventListener("error", function() {
						s.loading |= 2;
					}), s.loading |= 4, Vm(o, t, r);
				}
				o = {
					type: "stylesheet",
					instance: o,
					count: 1,
					state: s
				}, i.set(a, o);
			}
		}
	}
	function jm(e, t) {
		xm.X(e, t);
		var n = wm;
		if (n && e) {
			var r = Lt(n).hoistableScripts, i = Rm(e), a = r.get(i);
			a || (a = n.querySelector(zm(i)), a || (e = w({
				src: e,
				async: !0
			}, t), (t = vm.get(i)) && Um(e, t), a = n.createElement("script"), Rt(a), np(a, "link", e), n.head.appendChild(a)), a = {
				type: "script",
				instance: a,
				count: 1,
				state: null
			}, r.set(i, a));
		}
	}
	function Mm(e, t) {
		xm.M(e, t);
		var n = wm;
		if (n && e) {
			var r = Lt(n).hoistableScripts, i = Rm(e), a = r.get(i);
			a || (a = n.querySelector(zm(i)), a || (e = w({
				src: e,
				async: !0,
				type: "module"
			}, t), (t = vm.get(i)) && Um(e, t), a = n.createElement("script"), Rt(a), np(a, "link", e), n.head.appendChild(a)), a = {
				type: "script",
				instance: a,
				count: 1,
				state: null
			}, r.set(i, a));
		}
	}
	function Nm(e, t, n, r) {
		var a = (a = Te.current) ? bm(a) : null;
		if (!a) throw Error(i(446));
		switch (e) {
			case "meta":
			case "title": return null;
			case "style": return typeof n.precedence == "string" && typeof n.href == "string" ? (n = Pm(n.href), t = Lt(a).hoistableStyles, r = t.get(n), r || (r = {
				type: "style",
				instance: null,
				count: 0,
				state: null
			}, t.set(n, r)), r) : {
				type: "void",
				instance: null,
				count: 0,
				state: null
			};
			case "link":
				if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
					e = Pm(n.href);
					var o = Lt(a).hoistableStyles, s = o.get(e);
					if (s || (a = a.ownerDocument || a, s = {
						type: "stylesheet",
						instance: null,
						count: 0,
						state: {
							loading: 0,
							preload: null
						}
					}, o.set(e, s), (o = a.querySelector(Fm(e))) ? o._p || (s.instance = o, s.state.loading = 5) : (o = vm.get(e), o || (o = {
						rel: "preload",
						as: "style",
						href: n.href,
						crossOrigin: n.crossOrigin,
						integrity: n.integrity,
						media: n.media,
						hrefLang: n.hrefLang,
						referrerPolicy: n.referrerPolicy
					}, vm.set(e, o)), Lm(a, e, o, s.state))), t && r === null) throw Error(i(528, ""));
					return s;
				}
				if (t && r !== null) throw Error(i(529, ""));
				return null;
			case "script": return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (n = Rm(n), t = Lt(a).hoistableScripts, r = t.get(n), r || (r = {
				type: "script",
				instance: null,
				count: 0,
				state: null
			}, t.set(n, r)), r) : {
				type: "void",
				instance: null,
				count: 0,
				state: null
			};
			default: throw Error(i(444, e));
		}
	}
	function Pm(e) {
		return "href=\"" + on(e) + "\"";
	}
	function Fm(e) {
		return "link[rel=\"stylesheet\"][" + e + "]";
	}
	function Im(e) {
		return w({}, e, {
			"data-precedence": e.precedence,
			precedence: null
		});
	}
	function Lm(e, t, n, r) {
		if (t = e.querySelector("link[rel=\"preload\"][as=\"style\"][" + t + "]")) {
			if (!0 !== t[Nt]) {
				r.loading = 1;
				return;
			}
		} else t = e.createElement("link"), t[Nt] = !0, t.onload = t.onerror = zt.bind(null, t), np(t, "link", n), Rt(t), e.head.appendChild(t);
		r.preload = t, t.addEventListener("load", function() {
			return r.loading |= 1;
		}), t.addEventListener("error", function() {
			return r.loading |= 2;
		});
	}
	function Rm(e) {
		return "[src=\"" + on(e) + "\"]";
	}
	function zm(e) {
		return "script[async]" + e;
	}
	function Bm(e, t, n) {
		if (t.count++, t.instance === null) switch (t.type) {
			case "style":
				var r = e.querySelector("style[data-href~=\"" + on(n.href) + "\"]");
				if (r) return t.instance = r, Rt(r), r;
				var a = w({}, n, {
					"data-href": n.href,
					"data-precedence": n.precedence,
					href: null,
					precedence: null
				});
				return r = (e.ownerDocument || e).createElement("style"), Rt(r), np(r, "style", a), Vm(r, n.precedence, e), t.instance = r;
			case "stylesheet":
				a = Pm(n.href);
				var o = e.querySelector(Fm(a));
				if (o) return t.state.loading |= 4, t.instance = o, Rt(o), o;
				r = Im(n), (a = vm.get(a)) && Hm(r, a), o = (e.ownerDocument || e).createElement("link"), Rt(o);
				var s = o;
				return s._p = new Promise(function(e, t) {
					s.onload = e, s.onerror = t;
				}), np(o, "link", r), t.state.loading |= 4, Vm(o, n.precedence, e), t.instance = o;
			case "script": return o = Rm(n.src), (a = e.querySelector(zm(o))) ? (t.instance = a, Rt(a), a) : (r = n, (a = vm.get(o)) && (r = w({}, n), Um(r, a)), e = e.ownerDocument || e, a = e.createElement("script"), Rt(a), np(a, "link", r), e.head.appendChild(a), t.instance = a);
			case "void": return null;
			default: throw Error(i(443, t.type));
		}
		else t.type === "stylesheet" && !(t.state.loading & 4) && (r = t.instance, t.state.loading |= 4, Vm(r, n.precedence, e));
		return t.instance;
	}
	function Vm(e, t, n) {
		for (var r = n.querySelectorAll("link[rel=\"stylesheet\"][data-precedence],style[data-precedence]"), i = r.length ? r[r.length - 1] : null, a = i, o = 0; o < r.length; o++) {
			var s = r[o];
			if (s.dataset.precedence === t) a = s;
			else if (a !== i) break;
		}
		a ? a.parentNode.insertBefore(e, a.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild));
	}
	function Hm(e, t) {
		e.crossOrigin ??= t.crossOrigin, e.referrerPolicy ??= t.referrerPolicy, e.title ??= t.title;
	}
	function Um(e, t) {
		e.crossOrigin ??= t.crossOrigin, e.referrerPolicy ??= t.referrerPolicy, e.integrity ??= t.integrity;
	}
	var Wm = null;
	function Gm(e, t, n) {
		if (Wm === null) {
			var r = /* @__PURE__ */ new Map(), i = Wm = /* @__PURE__ */ new Map();
			i.set(n, r);
		} else i = Wm, r = i.get(n), r || (r = /* @__PURE__ */ new Map(), i.set(n, r));
		if (r.has(e)) return r;
		for (r.set(e, null), n = n.getElementsByTagName(e), i = 0; i < n.length; i++) {
			var a = n[i];
			if (!(a[Mt] || a[Et] || e === "link" && a.getAttribute("rel") === "stylesheet") && a.namespaceURI !== "http://www.w3.org/2000/svg") {
				var o = a.getAttribute(t) || "";
				o = e + o;
				var s = r.get(o);
				s ? s.push(a) : r.set(o, [a]);
			}
		}
		return r;
	}
	function Km(e, t, n) {
		e = e.ownerDocument || e, e.head.insertBefore(n, t === "title" ? e.querySelector("head > title") : null);
	}
	function qm(e, t, n) {
		if (n === 1 || t.itemProp != null) return !1;
		switch (e) {
			case "meta":
			case "title": return !0;
			case "style":
				if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") break;
				return !0;
			case "link":
				if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) break;
				switch (t.rel) {
					case "stylesheet": return e = t.disabled, typeof t.precedence == "string" && e == null;
					default: return !0;
				}
			case "script": if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string") return !0;
		}
		return !1;
	}
	function Jm(e, t) {
		return e === "img" && t.src != null && t.src !== "" && t.onLoad == null && t.loading !== "lazy";
	}
	function Ym(e) {
		return !(e.type === "stylesheet" && !(e.state.loading & 3));
	}
	function Xm(e) {
		return (e.width || 100) * (e.height || 100) * (typeof devicePixelRatio == "number" ? devicePixelRatio : 1) * .25;
	}
	function Zm(e, t) {
		typeof t.decode == "function" && (e.imgCount++, t.complete || (e.imgBytes += Xm(t), e.suspenseyImages.push(t)), e = rh.bind(e), t.decode().then(e, e));
	}
	function Qm(e, t, n, r) {
		if (n.type === "stylesheet" && (typeof r.media != "string" || !1 !== matchMedia(r.media).matches) && !(n.state.loading & 4)) {
			if (n.instance === null) {
				var i = Pm(r.href), a = t.querySelector(Fm(i));
				if (a) {
					t = a._p, typeof t == "object" && t && typeof t.then == "function" && (e.count++, e = nh.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = a, Rt(a);
					return;
				}
				a = t.ownerDocument || t, r = Im(r), (i = vm.get(i)) && Hm(r, i), a = a.createElement("link"), Rt(a);
				var o = a;
				o._p = new Promise(function(e, t) {
					o.onload = e, o.onerror = t;
				}), np(a, "link", r), n.instance = a;
			}
			e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && !(n.state.loading & 3) && (e.count++, n = nh.bind(e), t.addEventListener("load", n), t.addEventListener("error", n));
		}
	}
	var $m = 0;
	function eh(e, t) {
		return e.stylesheets && e.count === 0 && ah(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
			var r = setTimeout(function() {
				if (e.stylesheets && ah(e, e.stylesheets), e.unsuspend) {
					var t = e.unsuspend;
					e.unsuspend = null, t();
				}
			}, 6e4 + t);
			0 < e.imgBytes && $m === 0 && ($m = 62500 * op());
			var i = setTimeout(function() {
				if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && ah(e, e.stylesheets), e.unsuspend)) {
					var t = e.unsuspend;
					e.unsuspend = null, t();
				}
			}, (e.imgBytes > $m ? 50 : 800) + t);
			return e.unsuspend = n, function() {
				e.unsuspend = null, clearTimeout(r), clearTimeout(i);
			};
		} : null;
	}
	function th(e) {
		if (e.count === 0 && (e.imgCount === 0 || !e.waitingForImages)) {
			if (e.stylesheets) ah(e, e.stylesheets);
			else if (e.unsuspend) {
				var t = e.unsuspend;
				e.unsuspend = null, t();
			}
		}
	}
	function nh() {
		this.count--, th(this);
	}
	function rh() {
		this.imgCount--, th(this);
	}
	var ih = null;
	function ah(e, t) {
		e.stylesheets = null, e.unsuspend !== null && (e.count++, ih = /* @__PURE__ */ new Map(), t.forEach(oh, e), ih = null, nh.call(e));
	}
	function oh(e, t) {
		if (!(t.state.loading & 4)) {
			var n = ih.get(e);
			if (n) var r = n.get(null);
			else {
				n = /* @__PURE__ */ new Map(), ih.set(e, n);
				for (var i = e.querySelectorAll("link[data-precedence],style[data-precedence]"), a = 0; a < i.length; a++) {
					var o = i[a];
					(o.nodeName === "LINK" || o.getAttribute("media") !== "not all") && (n.set(o.dataset.precedence, o), r = o);
				}
				r && n.set(null, r);
			}
			i = t.instance, o = i.getAttribute("data-precedence"), a = n.get(o) || r, a === r && n.set(null, i), n.set(o, i), this.count++, r = nh.bind(this), i.addEventListener("load", r), i.addEventListener("error", r), a ? a.parentNode.insertBefore(i, a.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(i, e.firstChild)), t.state.loading |= 4;
		}
	}
	var sh = {
		$$typeof: O,
		Provider: null,
		Consumer: null,
		_currentValue: ye,
		_currentValue2: ye,
		_threadCount: 0
	};
	function ch(e, t, n, r, i, a, o, s, c) {
		this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = ft(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ft(0), this.hiddenUpdates = ft(null), this.identifierPrefix = r, this.onUncaughtError = i, this.onCaughtError = a, this.onRecoverableError = o, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = c, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
	}
	function lh(e, t, n, r, i, a, o, s, c, l, u, d) {
		return e = new ch(e, t, n, o, c, l, u, d, s), t = 1, !0 === a && (t |= 24), a = Fi(3, null, null, t), e.current = a, a.stateNode = e, t = Fa(), t.refCount++, e.pooledCache = t, t.refCount++, a.memoizedState = {
			element: r,
			isDehydrated: n,
			cache: t
		}, go(a), e;
	}
	function uh(e) {
		return e ? (e = Ni, e) : Ni;
	}
	function dh(e, t, n, r, i, a) {
		i = uh(i), r.context === null ? r.context = i : r.pendingContext = i, r = vo(t), r.payload = { element: n }, a = a === void 0 ? null : a, a !== null && (r.callback = a), n = yo(e, r, t), n !== null && (Nd(n, e, t), bo(n, e, t));
	}
	function fh(e, t) {
		if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
			var n = e.retryLane;
			e.retryLane = n !== 0 && n < t ? n : t;
		}
	}
	function ph(e, t) {
		fh(e, t), (e = e.alternate) && fh(e, t);
	}
	function mh(e) {
		if (e.tag === 13 || e.tag === 31) {
			var t = Ai(e, 67108864);
			t !== null && Nd(t, e, 67108864), ph(e, 67108864);
		}
	}
	function hh(e) {
		if (e.tag === 13 || e.tag === 31) {
			var t = Ad();
			t = vt(t);
			var n = Ai(e, t);
			n !== null && Nd(n, e, t), ph(e, t);
		}
	}
	var gh = !0;
	function _h(e, t, n, r) {
		var i = A.T;
		A.T = null;
		var a = ve.p;
		try {
			ve.p = 2, yh(e, t, n, r);
		} finally {
			ve.p = a, A.T = i;
		}
	}
	function vh(e, t, n, r) {
		var i = A.T;
		A.T = null;
		var a = ve.p;
		try {
			ve.p = 8, yh(e, t, n, r);
		} finally {
			ve.p = a, A.T = i;
		}
	}
	function yh(e, t, n, r) {
		if (gh) {
			var i = bh(r);
			if (i === null) Gf(e, t, r, xh, n), Mh(e, r);
			else if (Ph(i, e, t, n, r)) r.stopPropagation();
			else if (Mh(e, r), t & 4 && -1 < jh.indexOf(e)) {
				for (; i !== null;) {
					var a = It(i);
					if (a !== null) switch (a.tag) {
						case 3:
							if (a = a.stateNode, a.current.memoizedState.isDehydrated) {
								var o = ot(a.pendingLanes);
								if (o !== 0) {
									var s = a;
									for (s.pendingLanes |= 2, s.entangledLanes |= 2; o;) {
										var c = 1 << 31 - $e(o);
										s.entanglements[1] |= c, o &= ~c;
									}
									wf(a), !(Qu & 6) && (hd = He() + 500, Tf(0, !1));
								}
							}
							break;
						case 31:
						case 13: s = Ai(a, 2), s !== null && Nd(s, a, 2), Rd(), ph(a, 2);
					}
					if (a = bh(r), a === null && Gf(e, t, r, xh, n), a === i) break;
					i = a;
				}
				i !== null && r.stopPropagation();
			} else Gf(e, t, r, null, n);
		}
	}
	function bh(e) {
		return e = Cn(e), Sh(e);
	}
	var xh = null;
	function Sh(e) {
		if (xh = null, e = Ft(e), e !== null) {
			var t = o(e);
			if (t === null) e = null;
			else {
				var n = t.tag;
				if (n === 13) {
					if (e = s(t), e !== null) return e;
					e = null;
				} else if (n === 31) {
					if (e = c(t), e !== null) return e;
					e = null;
				} else if (n === 3) {
					if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
					e = null;
				} else t !== e && (e = null);
			}
		}
		return xh = e, null;
	}
	function Ch(e) {
		switch (e) {
			case "beforetoggle":
			case "cancel":
			case "click":
			case "close":
			case "contextmenu":
			case "copy":
			case "cut":
			case "auxclick":
			case "dblclick":
			case "dragend":
			case "dragstart":
			case "drop":
			case "focusin":
			case "focusout":
			case "input":
			case "invalid":
			case "keydown":
			case "keypress":
			case "keyup":
			case "mousedown":
			case "mouseup":
			case "paste":
			case "pause":
			case "play":
			case "pointercancel":
			case "pointerdown":
			case "pointerup":
			case "ratechange":
			case "reset":
			case "seeked":
			case "submit":
			case "toggle":
			case "touchcancel":
			case "touchend":
			case "touchstart":
			case "volumechange":
			case "change":
			case "selectionchange":
			case "textInput":
			case "compositionstart":
			case "compositionend":
			case "compositionupdate":
			case "beforeblur":
			case "afterblur":
			case "beforeinput":
			case "blur":
			case "fullscreenchange":
			case "fullscreenerror":
			case "focus":
			case "hashchange":
			case "popstate":
			case "select":
			case "selectstart": return 2;
			case "drag":
			case "dragenter":
			case "dragexit":
			case "dragleave":
			case "dragover":
			case "mousemove":
			case "mouseout":
			case "mouseover":
			case "pointermove":
			case "pointerout":
			case "pointerover":
			case "resize":
			case "scroll":
			case "touchmove":
			case "wheel":
			case "mouseenter":
			case "mouseleave":
			case "pointerenter":
			case "pointerleave": return 8;
			case "message": switch (Ue()) {
				case We: return 2;
				case P: return 8;
				case Ge:
				case Ke: return 32;
				case qe: return 268435456;
				default: return 32;
			}
			default: return 32;
		}
	}
	var wh = !1, Th = null, Eh = null, Dh = null, Oh = /* @__PURE__ */ new Map(), kh = /* @__PURE__ */ new Map(), Ah = [], jh = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
	function Mh(e, t) {
		switch (e) {
			case "focusin":
			case "focusout":
				Th = null;
				break;
			case "dragenter":
			case "dragleave":
				Eh = null;
				break;
			case "mouseover":
			case "mouseout":
				Dh = null;
				break;
			case "pointerover":
			case "pointerout":
				Oh.delete(t.pointerId);
				break;
			case "gotpointercapture":
			case "lostpointercapture": kh.delete(t.pointerId);
		}
	}
	function Nh(e, t, n, r, i, a) {
		return e === null || e.nativeEvent !== a ? (e = {
			blockedOn: t,
			domEventName: n,
			eventSystemFlags: r,
			nativeEvent: a,
			targetContainers: [i]
		}, t !== null && (t = It(t), t !== null && mh(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
	}
	function Ph(e, t, n, r, i) {
		switch (t) {
			case "focusin": return Th = Nh(Th, e, t, n, r, i), !0;
			case "dragenter": return Eh = Nh(Eh, e, t, n, r, i), !0;
			case "mouseover": return Dh = Nh(Dh, e, t, n, r, i), !0;
			case "pointerover":
				var a = i.pointerId;
				return Oh.set(a, Nh(Oh.get(a) || null, e, t, n, r, i)), !0;
			case "gotpointercapture": return a = i.pointerId, kh.set(a, Nh(kh.get(a) || null, e, t, n, r, i)), !0;
		}
		return !1;
	}
	function Fh(e) {
		var t = Ft(e.target);
		if (t !== null) {
			var n = o(t);
			if (n !== null) {
				if (t = n.tag, t === 13) {
					if (t = s(n), t !== null) {
						e.blockedOn = t, St(e.priority, function() {
							hh(n);
						});
						return;
					}
				} else if (t === 31) {
					if (t = c(n), t !== null) {
						e.blockedOn = t, St(e.priority, function() {
							hh(n);
						});
						return;
					}
				} else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
					e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
					return;
				}
			}
		}
		e.blockedOn = null;
	}
	function Ih(e) {
		if (e.blockedOn !== null) return !1;
		for (var t = e.targetContainers; 0 < t.length;) {
			var n = bh(e.nativeEvent);
			if (n === null) {
				n = e.nativeEvent;
				var r = new n.constructor(n.type, n);
				Sn = r, n.target.dispatchEvent(r), Sn = null;
			} else return t = It(n), t !== null && mh(t), e.blockedOn = n, !1;
			t.shift();
		}
		return !0;
	}
	function Lh(e, t, n) {
		Ih(e) && n.delete(t);
	}
	function Rh() {
		wh = !1, Th !== null && Ih(Th) && (Th = null), Eh !== null && Ih(Eh) && (Eh = null), Dh !== null && Ih(Dh) && (Dh = null), Oh.forEach(Lh), kh.forEach(Lh);
	}
	function zh(e, n) {
		e.blockedOn === n && (e.blockedOn = null, wh || (wh = !0, t.unstable_scheduleCallback(t.unstable_NormalPriority, Rh)));
	}
	var Bh = null;
	function Vh(e) {
		Bh !== e && (Bh = e, t.unstable_scheduleCallback(t.unstable_NormalPriority, function() {
			Bh === e && (Bh = null);
			for (var t = 0; t < e.length; t += 3) {
				var n = e[t], r = e[t + 1], i = e[t + 2];
				if (typeof r != "function") {
					if (Sh(r || n) === null) continue;
					break;
				}
				var a = It(n);
				a !== null && (e.splice(t, 3), t -= 3, Zs(a, {
					pending: !0,
					data: i,
					method: n.method,
					action: r
				}, r, i));
			}
		}));
	}
	function Hh(e) {
		function t(t) {
			return zh(t, e);
		}
		Th !== null && zh(Th, e), Eh !== null && zh(Eh, e), Dh !== null && zh(Dh, e), Oh.forEach(t), kh.forEach(t);
		for (var n = 0; n < Ah.length; n++) {
			var r = Ah[n];
			r.blockedOn === e && (r.blockedOn = null);
		}
		for (; 0 < Ah.length && (n = Ah[0], n.blockedOn === null);) Fh(n), n.blockedOn === null && Ah.shift();
		if (n = (e.ownerDocument || e).$$reactFormReplay, n != null) for (r = 0; r < n.length; r += 3) {
			var i = n[r], a = n[r + 1], o = i[Dt] || null;
			if (typeof a == "function") o || Vh(n);
			else if (o) {
				var s = null;
				if (a && a.hasAttribute("formAction")) {
					if (i = a, o = a[Dt] || null) s = o.formAction;
					else if (Sh(i) !== null) continue;
				} else s = o.action;
				typeof s == "function" ? n[r + 1] = s : (n.splice(r, 3), r -= 3), Vh(n);
			}
		}
	}
	function Uh() {
		function e(e) {
			e.canIntercept && e.info === "react-transition" && e.intercept({
				handler: function() {
					return new Promise(function(e) {
						return i = e;
					});
				},
				focusReset: "manual",
				scroll: "manual"
			});
		}
		function t() {
			i !== null && (i(), i = null), r || setTimeout(n, 20);
		}
		function n() {
			if (!r && !navigation.transition) {
				var e = navigation.currentEntry;
				e && e.url != null && navigation.navigate(e.url, {
					state: e.getState(),
					info: "react-transition",
					history: "replace"
				});
			}
		}
		if (typeof navigation == "object") {
			var r = !1, i = null;
			return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(n, 100), function() {
				r = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), i !== null && (i(), i = null);
			};
		}
	}
	function Wh(e) {
		this._internalRoot = e;
	}
	Gh.prototype.render = Wh.prototype.render = function(e) {
		var t = this._internalRoot;
		if (t === null) throw Error(i(409));
		var n = t.current;
		dh(n, Ad(), e, t, null, null);
	}, Gh.prototype.unmount = Wh.prototype.unmount = function() {
		var e = this._internalRoot;
		if (e !== null) {
			this._internalRoot = null;
			var t = e.containerInfo;
			dh(e.current, 2, null, e, null, null), Rd(), t[F] = null;
		}
	};
	function Gh(e) {
		this._internalRoot = e;
	}
	Gh.prototype.unstable_scheduleHydration = function(e) {
		if (e) {
			var t = bt();
			e = {
				blockedOn: null,
				target: e,
				priority: t
			};
			for (var n = 0; n < Ah.length && t !== 0 && t < Ah[n].priority; n++);
			Ah.splice(n, 0, e), n === 0 && Fh(e);
		}
	};
	var Kh = n.version;
	if (Kh !== "19.3.1") throw Error(i(527, Kh, "19.3.1"));
	ve.findDOMNode = function(e) {
		var t = e._reactInternals;
		if (t === void 0) throw typeof e.render == "function" ? Error(i(188)) : (e = Object.keys(e).join(","), Error(i(268, e)));
		return e = u(t), e = e === null ? null : d(e), e = e === null ? null : e.stateNode, e;
	};
	var qh = {
		bundleType: 0,
		version: "19.3.1",
		rendererPackageName: "react-dom",
		currentDispatcherRef: A,
		reconcilerVersion: "19.3.1"
	};
	if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
		var Jh = __REACT_DEVTOOLS_GLOBAL_HOOK__;
		if (!Jh.isDisabled && Jh.supportsFiber) try {
			Xe = Jh.inject(qh), Ze = Jh;
		} catch {}
	}
	e.createRoot = function(e, t) {
		if (!a(e)) throw Error(i(299));
		var n = !1, r = "", o = bc, s = xc, c = Sc;
		return t != null && (!0 === t.unstable_strictMode && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onUncaughtError !== void 0 && (o = t.onUncaughtError), t.onCaughtError !== void 0 && (s = t.onCaughtError), t.onRecoverableError !== void 0 && (c = t.onRecoverableError)), t = lh(e, 1, !1, null, null, n, r, null, o, s, c, Uh), e[F] = t.current, Uf(e), new Wh(t);
	};
})), Dt = /* @__PURE__ */ t(((e, t) => {
	function n() {
		if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE == "function") try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
		} catch (e) {
			console.error(e);
		}
	}
	n(), t.exports = Et();
})), F = /* @__PURE__ */ e(xt(), 1), Ot = (e) => {
	let t, n = /* @__PURE__ */ new Set(), r = (e, r) => {
		let i = typeof e == "function" ? e(t) : e;
		if (!Object.is(i, t)) {
			let e = t;
			t = r ?? (typeof i != "object" || !i) ? i : Object.assign({}, t, i), n.forEach((n) => n(t, e));
		}
	}, i = () => t, a = {
		setState: r,
		getState: i,
		getInitialState: () => o,
		subscribe: (e) => (n.add(e), () => n.delete(e))
	}, o = t = e(r, i, a);
	return a;
}, kt = ((e) => e ? Ot(e) : Ot), At = /* @__PURE__ */ t(((e) => {
	var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
	function r(e, n, r) {
		var i = null;
		if (r !== void 0 && (i = "" + r), n.key !== void 0 && (i = "" + n.key), "key" in n) for (var a in r = {}, n) a !== "key" && (r[a] = n[a]);
		else r = n;
		return n = r.ref, {
			$$typeof: t,
			type: e,
			key: i,
			ref: n === void 0 ? null : n,
			props: r
		};
	}
	e.Fragment = n, e.jsx = r, e.jsxs = r;
})), jt = /* @__PURE__ */ t(((e, t) => {
	t.exports = At();
}));
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/extends.js
function Mt() {
	return Mt = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, Mt.apply(null, arguments);
}
//#endregion
//#region node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.js
var Nt = /* @__PURE__ */ t(((e) => {
	var t = xt();
	function n(e, t) {
		return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
	}
	var r = typeof Object.is == "function" ? Object.is : n, i = t.useState, a = t.useEffect, o = t.useLayoutEffect, s = t.useDebugValue;
	function c(e, t) {
		var n = t(), r = i({ inst: {
			value: n,
			getSnapshot: t
		} }), c = r[0].inst, u = r[1];
		return o(function() {
			c.value = n, c.getSnapshot = t, l(c) && u({ inst: c });
		}, [
			e,
			n,
			t
		]), a(function() {
			return l(c) && u({ inst: c }), e(function() {
				l(c) && u({ inst: c });
			});
		}, [e]), s(n), n;
	}
	function l(e) {
		var t = e.getSnapshot;
		e = e.value;
		try {
			var n = t();
			return !r(e, n);
		} catch {
			return !0;
		}
	}
	function u(e, t) {
		return t();
	}
	var d = typeof window > "u" || window.document === void 0 || window.document.createElement === void 0 ? u : c;
	e.useSyncExternalStore = t.useSyncExternalStore === void 0 ? d : t.useSyncExternalStore;
})), Pt = /* @__PURE__ */ t(((e, t) => {
	t.exports = Nt();
})), Ft = /* @__PURE__ */ t(((e) => {
	var t = xt(), n = Pt();
	function r(e, t) {
		return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
	}
	var i = typeof Object.is == "function" ? Object.is : r, a = n.useSyncExternalStore, o = t.useRef, s = t.useEffect, c = t.useMemo, l = t.useDebugValue;
	e.useSyncExternalStoreWithSelector = function(e, t, n, r, u) {
		var d = o(null);
		if (d.current === null) {
			var f = {
				hasValue: !1,
				value: null
			};
			d.current = f;
		} else f = d.current;
		d = c(function() {
			function e(e) {
				if (!a) {
					if (a = !0, o = e, e = r(e), u !== void 0 && f.hasValue) {
						var t = f.value;
						if (u(t, e)) return s = t;
					}
					return s = e;
				}
				if (t = s, i(o, e)) return t;
				var n = r(e);
				return u !== void 0 && u(t, n) ? (o = e, t) : (o = e, s = n);
			}
			var a = !1, o, s, c = n === void 0 ? null : n;
			return [function() {
				return e(t());
			}, c === null ? void 0 : function() {
				return e(c());
			}];
		}, [
			t,
			n,
			r,
			u
		]);
		var p = a(e, d[0], d[1]);
		return s(function() {
			f.hasValue = !0, f.value = p;
		}, [p]), l(p), p;
	};
})), It = /* @__PURE__ */ t(((e, t) => {
	t.exports = Ft();
})), I = jt(), { useSyncExternalStoreWithSelector: Lt } = (/* @__PURE__ */ e(It(), 1)).default, Rt = (e) => e;
function zt(e, t = Rt, n) {
	let r = Lt(e.subscribe, e.getState, e.getInitialState, t, n);
	return F.useDebugValue(r), r;
}
var Bt = (e, t) => {
	let n = kt(e), r = (e, r = t) => zt(n, e, r);
	return Object.assign(r, n), r;
}, Vt = ((e, t) => e ? Bt(e, t) : Bt), Ht = (e) => typeof e == "object" && typeof e.then == "function", Ut = [];
function Wt(e, t, n = (e, t) => e === t) {
	if (e === t) return !0;
	if (!e || !t) return !1;
	let r = e.length;
	if (t.length !== r) return !1;
	for (let i = 0; i < r; i++) if (!n(e[i], t[i])) return !1;
	return !0;
}
function Gt(e, t = null, n = !1, r = {}) {
	t === null && (t = [e]);
	for (let e of Ut) if (Wt(t, e.keys, e.equal)) {
		if (n) return;
		if (Object.prototype.hasOwnProperty.call(e, "error")) throw e.error;
		if (Object.prototype.hasOwnProperty.call(e, "response")) return r.lifespan && r.lifespan > 0 && (e.timeout && clearTimeout(e.timeout), e.timeout = setTimeout(e.remove, r.lifespan)), e.response;
		if (!n) throw e.promise;
	}
	let i = {
		keys: t,
		equal: r.equal,
		remove: () => {
			let e = Ut.indexOf(i);
			e !== -1 && Ut.splice(e, 1);
		},
		promise: (Ht(e) ? e : e(...t)).then((e) => {
			i.response = e, r.lifespan && r.lifespan > 0 && (i.timeout = setTimeout(i.remove, r.lifespan));
		}).catch((e) => i.error = e)
	};
	if (Ut.push(i), !n) throw i.promise;
}
var Kt = (e, t, n) => Gt(e, t, !1, n), qt = (e, t, n) => void Gt(e, t, !0, n), Jt = (e) => {
	if (e === void 0 || e.length === 0) Ut.splice(0, Ut.length);
	else {
		let t = Ut.find((t) => Wt(e, t.keys, t.equal));
		t && t.remove();
	}
};
typeof window < "u" && (window.document?.createElement || window.navigator?.product === "ReactNative") ? F.useLayoutEffect : F.useEffect;
function Yt(e, t, n) {
	if (!e) return;
	if (n(e) === !0) return e;
	let r = t ? e.return : e.child;
	for (; r;) {
		let e = Yt(r, t, n);
		if (e) return e;
		r = t ? null : r.sibling;
	}
}
function Xt(e) {
	try {
		return Object.defineProperties(e, {
			_currentRenderer: {
				get() {
					return null;
				},
				set() {}
			},
			_currentRenderer2: {
				get() {
					return null;
				},
				set() {}
			}
		});
	} catch {
		return e;
	}
}
var Zt = /* @__PURE__ */ Xt(/* @__PURE__ */ F.createContext(null)), Qt = class extends F.Component {
	render() {
		return /* @__PURE__ */ F.createElement(Zt.Provider, { value: this._reactInternals }, this.props.children);
	}
};
function $t() {
	let e = F.useContext(Zt);
	if (e === null) throw Error("its-fine: useFiber must be called within a <FiberProvider />!");
	let t = F.useId();
	return F.useMemo(() => {
		for (let n of [e, e?.alternate]) {
			if (!n) continue;
			let e = Yt(n, !1, (e) => {
				let n = e.memoizedState;
				for (; n;) {
					if (n.memoizedState === t) return !0;
					n = n.next;
				}
			});
			if (e) return e;
		}
	}, [e, t]);
}
var en = Symbol.for("react.context"), tn = (e) => typeof e == "object" && !!e && "$$typeof" in e && e.$$typeof === en;
function nn() {
	let e = $t(), [t] = F.useState(() => /* @__PURE__ */ new Map());
	t.clear();
	let n = e;
	for (; n;) {
		let e = n.type;
		tn(e) && e !== Zt && !t.has(e) && t.set(e, F.use(Xt(e))), n = n.return;
	}
	return t;
}
function rn() {
	let e = nn();
	return F.useMemo(() => Array.from(e.keys()).reduce((t, n) => (r) => /* @__PURE__ */ F.createElement(t, null, /* @__PURE__ */ F.createElement(n.Provider, {
		...r,
		value: e.get(n)
	})), (e) => /* @__PURE__ */ F.createElement(Qt, { ...e })), [e]);
}
function an(e) {
	if (typeof requestAnimationFrame == "function") {
		let t = requestAnimationFrame(e);
		return () => cancelAnimationFrame(t);
	}
	let t = setTimeout(e, 16);
	return () => clearTimeout(t);
}
function on() {
	if (!F.Activity) throw Error("its-fine: useActivityBridge requires React 19.2 or later!");
	let e = $t(), [t] = F.useState(() => {
		let t = [], n = !1;
		Yt(e, !0, (e) => {
			if (e.elementType === F.Activity) {
				let n = e.child?.tag === 22 ? e.child.stateNode : null;
				if (typeof n?._visibility != "number") throw Error("its-fine: unsupported React Activity internals!");
				t.push(n);
			} else e.tag === 22 && e.return?.elementType !== F.Activity && (n = !0);
		});
		let r = "hidden", i = /* @__PURE__ */ new Set(), a, o = {
			mounted: !1,
			connected: !1,
			subscribe(e) {
				return i.add(e), () => {
					i.delete(e);
				};
			},
			sync(e) {
				o.mounted && !o.connected && n && t.length > 0 ? a ||= an(() => {
					a = void 0, o.sync(!0);
				}) : (a?.(), a = void 0);
				let s = r;
				if (o.mounted ? o.connected ? s = "visible" : e && (s = t.every((e) => !!(e._visibility & 1)) ? "visible" : "hidden") : s = "hidden", r !== s) {
					r = s;
					for (let e of i) e();
				}
			},
			Bridge({ children: e }) {
				return /* @__PURE__ */ F.createElement(F.Activity, { mode: F.useSyncExternalStore(o.subscribe, () => r, () => "hidden") }, e);
			}
		};
		return o;
	});
	return F.useInsertionEffect(() => (t.mounted = !0, queueMicrotask(() => t.sync(!1)), () => {
		t.mounted = !1, queueMicrotask(() => t.sync(!1));
	}), [t]), F.useLayoutEffect(() => (t.connected = !0, t.sync(!1), () => {
		t.connected = !1, t.sync(!0);
	}), [t]), t.Bridge;
}
//#endregion
//#region node_modules/@react-three/fiber/dist/events-e51d7528.esm.js
var sn = /* @__PURE__ */ e(Ct()), cn = /* @__PURE__ */ ((e, t) => typeof window < "u" && ((e = window.document)?.createElement || (t = window.navigator)?.product === "ReactNative"))() ? F.useLayoutEffect : F.useEffect;
function ln(e) {
	let t = F.useRef(e);
	return cn(() => void (t.current = e), [e]), t;
}
function un({ promise: e, onSettled: t }) {
	return F.use(e), cn(t, [t]), null;
}
function dn() {
	let [e, t] = F.useState(null), n = F.useCallback(() => t(null), []), r = F.useCallback((e) => t((t) => t ?? Promise.resolve(e).then(() => {}, () => {})), []);
	return [e ? /*#__PURE__*/ (0, I.jsx)(F.Suspense, {
		fallback: null,
		children: /*#__PURE__*/ (0, I.jsx)(un, {
			promise: e,
			onSettled: n
		})
	}) : null, r];
}
var fn = F.Activity ? on : () => F.Fragment;
function pn() {
	let e = $t(), t = rn(), n = fn();
	return F.useMemo(() => ({ children: r }) => {
		let i = Yt(e, !0, (e) => e.type === F.StrictMode) ? F.StrictMode : F.Fragment;
		return /*#__PURE__*/ (0, I.jsx)(i, { children: /*#__PURE__*/ (0, I.jsx)(n, { children: /*#__PURE__*/ (0, I.jsx)(t, { children: r }) }) });
	}, [
		e,
		t,
		n
	]);
}
function mn({ set: e }) {
	return cn(() => (e(new Promise(() => null)), () => e(!1)), [e]), null;
}
var hn = /* @__PURE__ */ ((e) => (e = class extends F.Component {
	constructor(...e) {
		super(...e), this.state = { error: !1 };
	}
	componentDidCatch(e) {
		this.props.set(e);
	}
	render() {
		return this.state.error ? null : this.props.children;
	}
}, e.getDerivedStateFromError = () => ({ error: !0 }), e))();
function gn(e) {
	let t = e.root;
	for (; t.getState().previousRoot;) t = t.getState().previousRoot;
	return t;
}
var _n = (e) => e && e.isOrthographicCamera, vn = (e) => e && e.hasOwnProperty("current"), yn = (e) => e != null && (typeof e == "string" || typeof e == "number" || e.isColor), bn = () => {};
function xn(e) {
	let t = typeof window < "u" ? window.devicePixelRatio ?? 2 : 1;
	return Array.isArray(e) ? Math.min(Math.max(e[0], t), e[1]) : e;
}
function Sn(e) {
	if (typeof window > "u" || typeof window.matchMedia != "function" || !window.devicePixelRatio) return () => {};
	let t, n = () => {
		try {
			var e;
			t = window.matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`), typeof t?.addEventListener == "function" ? t.addEventListener("change", i) : (e = t) == null || e.addListener == null || e.addListener(i);
		} catch {
			t = void 0;
		}
	}, r = () => {
		var e;
		typeof t?.removeEventListener == "function" ? t.removeEventListener("change", i) : (e = t) == null || e.removeListener == null || e.removeListener(i), t = void 0;
	}, i = () => {
		r(), n(), e();
	};
	return n(), r;
}
function Cn(e) {
	return e.__r3f?.root.getState();
}
var wn = {
	obj: (e) => e === Object(e) && !wn.arr(e) && typeof e != "function",
	fun: (e) => typeof e == "function",
	str: (e) => typeof e == "string",
	num: (e) => typeof e == "number",
	boo: (e) => typeof e == "boolean",
	und: (e) => e === void 0,
	nul: (e) => e === null,
	arr: (e) => Array.isArray(e),
	equ(e, t, { arrays: n = "shallow", objects: r = "reference", strict: i = !0 } = {}) {
		if (typeof e != typeof t || !!e != !!t) return !1;
		if (wn.str(e) || wn.num(e) || wn.boo(e)) return e === t;
		let a = wn.obj(e);
		if (a && r === "reference") return e === t;
		let o = wn.arr(e);
		if (o && n === "reference") return e === t;
		if ((o || a) && e === t) return !0;
		let s;
		for (s in e) if (!(s in t)) return !1;
		if (a && n === "shallow" && r === "shallow") {
			for (s in i ? t : e) if (!wn.equ(e[s], t[s], {
				strict: i,
				objects: "reference"
			})) return !1;
		} else for (s in i ? t : e) if (e[s] !== t[s]) return !1;
		if (wn.und(s)) {
			if (o && e.length === 0 && t.length === 0 || a && Object.keys(e).length === 0 && Object.keys(t).length === 0) return !0;
			if (e !== t) return !1;
		}
		return !0;
	}
};
function Tn(e) {
	let t = {
		nodes: {},
		materials: {},
		meshes: {}
	};
	return e && e.traverse((e) => {
		e.name && (t.nodes[e.name] = e), e.material && !t.materials[e.material.name] && (t.materials[e.material.name] = e.material), e.isMesh && !t.meshes[e.name] && (t.meshes[e.name] = e);
	}), t;
}
function En(e) {
	e.type !== "Scene" && (e.dispose == null || e.dispose());
	for (let t in e) {
		let n = e[t];
		n?.type !== "Scene" && (n == null || n.dispose == null || n.dispose());
	}
}
var Dn = [
	"children",
	"key",
	"ref"
];
function On(e) {
	let t = {};
	for (let n in e) Dn.includes(n) || (t[n] = e[n]);
	return t;
}
function kn(e, t, n, r) {
	let i = e, a = i?.__r3f;
	return a || (a = {
		root: t,
		type: n,
		parent: null,
		children: [],
		props: On(r),
		object: i,
		eventCount: 0,
		handlers: {},
		previousVisible: void 0,
		isHidden: !1
	}, i && (i.__r3f = a)), a;
}
function An(e, t) {
	if (!t.includes("-") || t in e) return {
		root: e,
		key: t,
		target: e[t]
	};
	let n = e, r = t.split("-");
	for (let i of r) {
		if (typeof n != "object" || !n) {
			if (n !== void 0) {
				let e = r.slice(r.indexOf(i)).join("-");
				return {
					root: n,
					key: e,
					target: void 0
				};
			}
			return {
				root: e,
				key: t,
				target: void 0
			};
		}
		t = i, e = n, n = n[t];
	}
	return {
		root: e,
		key: t,
		target: n
	};
}
var jn = /-\d+$/;
function Mn(e, t) {
	if (wn.str(t.props.attach)) {
		if (jn.test(t.props.attach)) {
			let n = t.props.attach.replace(jn, ""), { root: r, key: i } = An(e.object, n);
			Array.isArray(r[i]) || (r[i] = []);
		}
		let { root: n, key: r } = An(e.object, t.props.attach);
		t.previousAttach = n[r], n[r] = t.object;
	} else wn.fun(t.props.attach) && (t.previousAttach = t.props.attach(e.object, t.object));
}
function Nn(e, t) {
	if (wn.str(t.props.attach)) {
		let { root: n, key: r } = An(e.object, t.props.attach), i = t.previousAttach;
		i === void 0 ? delete n[r] : n[r] = i;
	} else t.previousAttach == null || t.previousAttach(e.object, t.object);
	delete t.previousAttach;
}
var Pn = [
	...Dn,
	"args",
	"dispose",
	"attach",
	"object",
	"onUpdate",
	"dispose"
], Fn = /* @__PURE__ */ new Map();
function In(e) {
	let t = Fn.get(e.constructor);
	try {
		t || (t = new e.constructor(), Fn.set(e.constructor, t));
	} catch {}
	return t;
}
function Ln(e, t) {
	let n = {};
	for (let r in t) if (!Pn.includes(r) && !wn.equ(t[r], e.props[r])) {
		n[r] = t[r];
		for (let e in t) e.startsWith(`${r}-`) && (n[e] = t[e]);
	}
	for (let r in e.props) {
		if (Pn.includes(r) || t.hasOwnProperty(r)) continue;
		let { root: i, key: a } = An(e.object, r);
		if (i.constructor && i.constructor.length === 0) {
			let e = In(i);
			wn.und(e) || (n[r] = e[a]);
		} else n[r] = 0;
	}
	return n;
}
var Rn = [
	"map",
	"emissiveMap",
	"sheenColorMap",
	"specularColorMap",
	"envMap"
], zn = /^on(Pointer|Click|DoubleClick|ContextMenu|Wheel)/;
function Bn(e, t) {
	var n;
	let r = e.__r3f, i = r && gn(r).getState(), a = r?.eventCount;
	for (let n in t) {
		let a = t[n];
		if (Pn.includes(n)) continue;
		if (r && zn.test(n)) {
			typeof a == "function" ? r.handlers[n] = a : delete r.handlers[n], r.eventCount = Object.keys(r.handlers).length;
			continue;
		}
		if (a === void 0) continue;
		if (n === "visible" && r != null && r.isHidden && r.previousVisible !== void 0) {
			r.previousVisible = a;
			continue;
		}
		let { root: s, key: c, target: l } = An(e, n);
		if (l === void 0 && (typeof s != "object" || !s)) throw Error(`R3F: Cannot set "${n}". Ensure it is an object before setting "${c}".`);
		if (l instanceof at && a instanceof at) l.mask = a.mask;
		else if (l instanceof f && yn(a)) l.set(a);
		else if (typeof l == "object" && l && typeof l.set == "function" && typeof l.copy == "function" && a != null && a.constructor && l.constructor === a.constructor) l.copy(a);
		else if (typeof l == "object" && l && typeof l.set == "function" && Array.isArray(a)) typeof l.fromArray == "function" ? l.fromArray(a) : l.set(...a);
		else if (typeof l == "object" && l && typeof l.set == "function" && typeof a == "number") typeof l.setScalar == "function" ? l.setScalar(a) : l.set(a);
		else if (s instanceof x && c === "uniforms" && wn.obj(a)) {
			wn.obj(s.uniforms) || (s.uniforms = {});
			let e = s.uniforms, t = a;
			for (let n in t) {
				let r = t[n], i = e[n];
				i ? Object.assign(i, r) : e[n] = { ...r };
			}
		} else {
			var o;
			s[c] = a, i && !i.linear && Rn.includes(c) && (o = s[c]) != null && o.isTexture && s[c].format === 1023 && s[c].type === 1009 && (s[c].colorSpace = S);
		}
	}
	if (r != null && r.parent && i != null && i.internal && (n = r.object) != null && n.isObject3D && a !== r.eventCount) {
		let e = r.object, t = i.internal.interaction.indexOf(e);
		t > -1 && i.internal.interaction.splice(t, 1), r.eventCount && e.raycast !== null && i.internal.interaction.push(e);
	}
	return r && r.props.attach === void 0 && (r.object.isBufferGeometry ? r.props.attach = "geometry" : r.object.isMaterial && (r.props.attach = "material")), r && Vn(r), e;
}
function Vn(e) {
	var t;
	if (!e.parent) return;
	e.props.onUpdate == null || e.props.onUpdate(e.object);
	let n = (t = e.root) == null || t.getState == null ? void 0 : t.getState();
	n && n.internal.frames === 0 && n.invalidate();
}
function Hn(e, t) {
	e.manual || (_n(e) ? (e.left = t.width / -2, e.right = t.width / 2, e.top = t.height / 2, e.bottom = t.height / -2) : e.aspect = t.width / t.height, e.updateProjectionMatrix());
}
var Un = (e) => e?.isObject3D;
function Wn(e) {
	return (e.eventObject || e.object).uuid + "/" + e.index + e.instanceId;
}
function Gn(e, t, n, r) {
	let i = n.get(t);
	i && (n.delete(t), n.size === 0 && (e.delete(r), i.target.releasePointerCapture(r)));
}
function Kn(e, t, n) {
	let { internal: r } = e.getState();
	for (let e = 0; e < r.interaction.length; e++) r.interaction[e] === t && (r.interaction[e] = n);
	for (let e = 0; e < r.initialHits.length; e++) r.initialHits[e] === t && (r.initialHits[e] = n);
	r.hovered.forEach((e, i) => {
		if (e.eventObject === t || e.object === t) {
			r.hovered.delete(i);
			let a = {
				...e,
				eventObject: e.eventObject === t ? n : e.eventObject,
				object: e.object === t ? n : e.object
			};
			r.hovered.set(Wn(a), a);
		}
	}), r.capturedMap.forEach((e) => {
		for (let [r, i] of Array.from(e)) {
			let { intersection: a } = i;
			(r === t || a.object === t || a.eventObject === t) && (r === t && e.delete(r), e.set(r === t ? n : r, {
				...i,
				intersection: {
					...a,
					object: a.object === t ? n : a.object,
					eventObject: a.eventObject === t ? n : a.eventObject
				}
			}));
		}
	});
}
function qn(e, t) {
	let { internal: n } = e.getState();
	n.interaction = n.interaction.filter((e) => e !== t), n.initialHits = n.initialHits.filter((e) => e !== t), n.hovered.forEach((e, r) => {
		(e.eventObject === t || e.object === t) && n.hovered.delete(r);
	}), n.capturedMap.forEach((e, r) => {
		Gn(n.capturedMap, t, e, r);
	});
}
function Jn(e) {
	function t(t) {
		let { internal: n } = e.getState(), r = t.offsetX - n.initialClick[0], i = t.offsetY - n.initialClick[1];
		return Math.round(Math.sqrt(r * r + i * i));
	}
	function n(e) {
		return e.filter((e) => [
			"Move",
			"Over",
			"Enter",
			"Out",
			"Leave"
		].some((t) => e.__r3f?.handlers["onPointer" + t]));
	}
	function r(t, n) {
		let r = e.getState(), i = /* @__PURE__ */ new Set(), a = [], o = n ? n(r.internal.interaction) : r.internal.interaction;
		for (let e = 0; e < o.length; e++) {
			let t = Cn(o[e]);
			t && (t.raycaster.camera = void 0);
		}
		r.previousRoot || r.events.compute == null || r.events.compute(t, r);
		function s(e) {
			let n = Cn(e);
			return !n || !n.events.enabled || n.raycaster.camera === null ? [] : (n.raycaster.camera === void 0 && (n.events.compute == null || n.events.compute(t, n, n.previousRoot?.getState()), n.raycaster.camera === void 0 && (n.raycaster.camera = null)), n.raycaster.camera ? n.raycaster.intersectObject(e, !0) : []);
		}
		let c = o.flatMap(s).sort((e, t) => {
			let n = Cn(e.object), r = Cn(t.object);
			return !n || !r ? e.distance - t.distance : r.events.priority - n.events.priority || e.distance - t.distance;
		}).filter((e) => {
			let t = Wn(e);
			return !i.has(t) && (i.add(t), !0);
		});
		r.events.filter && (c = r.events.filter(c, r));
		for (let e of c) {
			let t = e.object;
			for (; t;) {
				var l;
				(l = t.__r3f) != null && l.eventCount && a.push({
					...e,
					eventObject: t
				}), t = t.parent;
			}
		}
		if ("pointerId" in t && r.internal.capturedMap.has(t.pointerId)) for (let e of r.internal.capturedMap.get(t.pointerId).values()) i.has(Wn(e.intersection)) || a.push(e.intersection);
		return a;
	}
	function i(e, t, n, r) {
		if (e.length) {
			let i = { stopped: !1 };
			for (let o of e) {
				let s = Cn(o.object);
				if (s || o.object.traverseAncestors((e) => {
					let t = Cn(e);
					if (t) return s = t, !1;
				}), s) {
					let { raycaster: c, pointer: l, camera: u, internal: d } = s, f = new He(l.x, l.y, 0).unproject(u), p = (e) => d.capturedMap.get(e)?.has(o.eventObject) ?? !1, m = (e) => {
						let n = {
							intersection: o,
							target: t.target
						};
						d.capturedMap.has(e) ? d.capturedMap.get(e).set(o.eventObject, n) : d.capturedMap.set(e, /* @__PURE__ */ new Map([[o.eventObject, n]])), t.target.setPointerCapture(e);
					}, h = (e) => {
						let t = d.capturedMap.get(e);
						t && Gn(d.capturedMap, o.eventObject, t, e);
					}, g = {};
					for (let e in t) {
						let n = t[e];
						typeof n != "function" && (g[e] = n);
					}
					let _ = {
						...o,
						...g,
						pointer: l,
						intersections: e,
						stopped: i.stopped,
						delta: n,
						unprojectedPoint: f,
						ray: c.ray,
						camera: u,
						stopPropagation() {
							let n = "pointerId" in t && d.capturedMap.get(t.pointerId);
							(!n || n.has(o.eventObject)) && (_.stopped = i.stopped = !0, d.hovered.size && Array.from(d.hovered.values()).find((e) => e.eventObject === o.eventObject) && a([...e.slice(0, e.indexOf(o)), o]));
						},
						target: {
							hasPointerCapture: p,
							setPointerCapture: m,
							releasePointerCapture: h
						},
						currentTarget: {
							hasPointerCapture: p,
							setPointerCapture: m,
							releasePointerCapture: h
						},
						nativeEvent: t
					};
					if (r(_), i.stopped === !0) break;
				}
			}
		}
		return e;
	}
	function a(t) {
		let { internal: n } = e.getState();
		for (let e of n.hovered.values()) if (!t.length || !t.find((t) => t.object === e.object && t.index === e.index && t.instanceId === e.instanceId)) {
			let r = e.eventObject.__r3f;
			if (n.hovered.delete(Wn(e)), r != null && r.eventCount) {
				let n = r.handlers, i = {
					...e,
					intersections: t
				};
				n.onPointerOut == null || n.onPointerOut(i), n.onPointerLeave == null || n.onPointerLeave(i);
			}
		}
	}
	function o(e, t) {
		for (let n = 0; n < t.length; n++) {
			let r = t[n].__r3f;
			r == null || r.handlers.onPointerMissed == null || r.handlers.onPointerMissed(e);
		}
	}
	function s(s) {
		switch (s) {
			case "onPointerLeave":
			case "onPointerCancel": return () => a([]);
			case "onLostPointerCapture": return (t) => {
				let { internal: n } = e.getState();
				"pointerId" in t && n.capturedMap.has(t.pointerId) && requestAnimationFrame(() => {
					n.capturedMap.has(t.pointerId) && (n.capturedMap.delete(t.pointerId), a([]));
				});
			};
		}
		return function(c) {
			let { onPointerMissed: l, internal: u } = e.getState();
			u.lastEvent.current = c;
			let d = s === "onPointerMove", f = s === "onClick" || s === "onContextMenu" || s === "onDoubleClick", p = r(c, d ? n : void 0), m = f ? t(c) : 0;
			s === "onPointerDown" && (u.initialClick = [c.offsetX, c.offsetY], u.initialHits = p.map((e) => e.eventObject)), f && !p.length && m <= 2 && (o(c, u.interaction), l && l(c)), d && a(p);
			function h(e) {
				let t = e.eventObject, n = t.__r3f;
				if (!(n != null && n.eventCount)) return;
				let r = n.handlers;
				if (d) {
					if (r.onPointerOver || r.onPointerEnter || r.onPointerOut || r.onPointerLeave) {
						let t = Wn(e), n = u.hovered.get(t);
						n ? n.stopped && e.stopPropagation() : (u.hovered.set(t, e), r.onPointerOver == null || r.onPointerOver(e), r.onPointerEnter == null || r.onPointerEnter(e));
					}
					r.onPointerMove == null || r.onPointerMove(e);
				} else {
					let n = r[s];
					n ? (!f || u.initialHits.includes(t)) && (o(c, u.interaction.filter((e) => !u.initialHits.includes(e))), n(e)) : f && u.initialHits.includes(t) && o(c, u.interaction.filter((e) => !u.initialHits.includes(e)));
				}
			}
			i(p, c, m, h);
		};
	}
	return { handlePointer: s };
}
var Yn = (e) => typeof e?.then == "function", Xn = (e) => Object.assign(Promise.resolve(e), {
	status: "fulfilled",
	value: e
}), Zn = (e) => {
	let t = Promise.reject(e);
	return t.catch(() => {}), Object.assign(t, {
		status: "rejected",
		reason: e
	});
}, Qn = () => {
	let e, t, n = new Promise((r, i) => {
		e = (e) => {
			Object.assign(n, {
				status: "fulfilled",
				value: e
			}), r(e);
		}, t = (e) => {
			Object.assign(n, {
				status: "rejected",
				reason: e
			}), i(e);
		};
	});
	return n.status = "pending", n.catch(() => {}), {
		promise: n,
		resolve: e,
		reject: t
	};
}, $n = (e) => !!(e != null && e.render);
function er(e, t) {
	let n = {
		canvas: e,
		powerPreference: "high-performance",
		antialias: !0,
		alpha: !0
	};
	return typeof t == "function" ? t(n) : $n(t) ? t : new ht({
		...n,
		...t
	});
}
function tr(e) {
	if ((e.hasInitialized == null ? void 0 : e.hasInitialized()) === !1) return;
	let t = rr(() => {
		var t;
		return e.dispose ? e.dispose() : (t = e.renderLists) == null || t.dispose == null ? void 0 : t.dispose();
	});
	if (Yn(t)) return Promise.resolve(t).catch((e) => console.warn("[R3F] Error disposing renderer", e)).then(() => rr(() => e.forceContextLoss == null ? void 0 : e.forceContextLoss()));
	rr(() => e.forceContextLoss == null ? void 0 : e.forceContextLoss());
}
function nr(e, t) {
	if (e) {
		if (t) return tr(e);
		rr(() => {
			var t;
			return (t = e.renderLists) == null || t.dispose == null ? void 0 : t.dispose();
		}), rr(() => e.forceContextLoss == null ? void 0 : e.forceContextLoss());
	}
}
function rr(e) {
	try {
		return e();
	} catch (e) {
		console.warn("[R3F] Error while unmounting root; teardown may be incomplete:", e);
	}
}
var ir = /* @__PURE__ */ F.createContext(null), ar = (e, t) => {
	let n = Vt((n, r) => {
		let i = new He(), a = new He(), o = new He();
		function s(e = r().camera, t = a, n = r().size) {
			let { width: s, height: c, top: l, left: u } = n, d = s / c;
			t.isVector3 ? o.copy(t) : o.set(...t);
			let f = e.getWorldPosition(i).distanceTo(o);
			if (_n(e)) return {
				width: s / e.zoom,
				height: c / e.zoom,
				top: l,
				left: u,
				factor: 1,
				distance: f,
				aspect: d
			};
			{
				let t = e.fov * Math.PI / 180, n = 2 * Math.tan(t / 2) * f, r = s / c * n;
				return {
					width: r,
					height: n,
					top: l,
					left: u,
					factor: s / r,
					distance: f,
					aspect: d
				};
			}
		}
		let c, l = (e) => n((t) => ({ performance: {
			...t.performance,
			current: e
		} })), u = new M();
		return {
			set: n,
			get: r,
			gl: null,
			camera: null,
			raycaster: null,
			events: {
				priority: 1,
				enabled: !0,
				connected: !1
			},
			scene: null,
			xr: null,
			invalidate: (t = 1) => e(r(), t),
			advance: (e, n) => t(e, n, r()),
			legacy: !1,
			linear: !1,
			flat: !1,
			controls: null,
			clock: new te(),
			pointer: u,
			mouse: u,
			frameloop: "always",
			onPointerMissed: void 0,
			performance: {
				current: 1,
				min: .5,
				max: 1,
				debounce: 200,
				regress: () => {
					let e = r();
					c && clearTimeout(c), e.performance.current !== e.performance.min && l(e.performance.min), c = setTimeout(() => l(r().performance.max), e.performance.debounce);
				}
			},
			size: {
				width: 0,
				height: 0,
				top: 0,
				left: 0
			},
			viewport: {
				initialDpr: 0,
				dpr: 0,
				width: 0,
				height: 0,
				top: 0,
				left: 0,
				aspect: 0,
				distance: 0,
				factor: 0,
				getCurrentViewport: s
			},
			setEvents: (e) => n((t) => ({
				...t,
				events: {
					...t.events,
					...e
				}
			})),
			setSize: (e, t, i = 0, o = 0) => {
				let c = r().camera, l = {
					width: e,
					height: t,
					top: i,
					left: o
				};
				n((e) => ({
					size: l,
					viewport: {
						...e.viewport,
						...s(c, a, l)
					}
				}));
			},
			setDpr: (e) => n((t) => {
				let n = xn(e);
				return { viewport: {
					...t.viewport,
					dpr: n,
					initialDpr: t.viewport.initialDpr || n
				} };
			}),
			setFrameloop: (e = "always") => {
				let t = r().clock;
				t.stop(), t.elapsedTime = 0, e !== "never" && (t.start(), t.elapsedTime = 0), n(() => ({ frameloop: e }));
			},
			previousRoot: void 0,
			internal: {
				interaction: [],
				hovered: /* @__PURE__ */ new Map(),
				subscribers: [],
				initialClick: [0, 0],
				initialHits: [],
				capturedMap: /* @__PURE__ */ new Map(),
				lastEvent: /*#__PURE__*/ F.createRef(),
				active: !1,
				frames: 0,
				priority: 0,
				subscribe: (e, t, n) => {
					let i = r().internal;
					return i.priority += +(t > 0), i.subscribers.push({
						ref: e,
						priority: t,
						store: n
					}), i.subscribers = i.subscribers.sort((e, t) => e.priority - t.priority), () => {
						let n = r().internal;
						n != null && n.subscribers && (n.priority -= +(t > 0), n.subscribers = n.subscribers.filter((t) => t.ref !== e));
					};
				}
			}
		};
	}), r = n.getState(), i = r.size, a = r.viewport.dpr, o = r.camera;
	return n.subscribe(() => {
		let { camera: e, size: t, viewport: r, gl: s, set: c } = n.getState();
		if (t.width !== i.width || t.height !== i.height || r.dpr !== a) {
			i = t, a = r.dpr, Hn(e, t), r.dpr > 0 && s.setPixelRatio(r.dpr);
			let n = typeof HTMLCanvasElement < "u" && s.domElement instanceof HTMLCanvasElement;
			s.setSize(t.width, t.height, n);
		}
		e !== o && (o = e, c((t) => ({ viewport: {
			...t.viewport,
			...t.viewport.getCurrentViewport(e)
		} })));
	}), n.subscribe((t) => e(t)), n;
};
function or() {
	let e = F.useContext(ir);
	if (!e) throw Error("R3F: Hooks can only be used within the Canvas component!");
	return e;
}
function sr(e = (e) => e, t) {
	return or()(e, t);
}
function cr(e, t = 0) {
	let n = or(), r = n.getState().internal.subscribe, i = ln(e);
	return cn(() => r(i, t, n), [
		t,
		r,
		n
	]), null;
}
var lr = /* @__PURE__ */ new WeakMap(), ur = (e) => typeof e == "function" && e?.prototype?.constructor === e;
function dr(e, t) {
	return function(n, ...r) {
		let i;
		return ur(n) ? (i = lr.get(n), i || (i = new n(), lr.set(n, i))) : i = n, e && e(i), Promise.all(r.map((e) => new Promise((n, r) => i.load(e, (e) => {
			Un(e?.scene) && Object.assign(e, Tn(e.scene)), n(e);
		}, t, (t) => r(/* @__PURE__ */ Error(`Could not load ${e}: ${t?.message}`))))));
	};
}
function fr(e, t, n, r) {
	let i = Array.isArray(t) ? t : [t], a = Kt(dr(n, r), [e, ...i], { equal: wn.equ });
	return Array.isArray(t) ? a : a[0];
}
fr.preload = function(e, t, n) {
	let r = Array.isArray(t) ? t : [t];
	return qt(dr(n), [e, ...r]);
}, fr.clear = function(e, t) {
	return Jt([e, ...Array.isArray(t) ? t : [t]]);
};
var pr = 1, mr = 8, hr = 32, gr = 2, _r = 268435456, vr = { objects: "shallow" };
function yr(e, t) {
	if (!t && typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement && e.parentElement) {
		let { width: t, height: n, top: r, left: i } = e.parentElement.getBoundingClientRect();
		return {
			width: t,
			height: n,
			top: r,
			left: i
		};
	}
	return !t && typeof OffscreenCanvas < "u" && e instanceof OffscreenCanvas ? {
		width: e.width,
		height: e.height,
		top: 0,
		left: 0
	} : {
		width: 0,
		height: 0,
		top: 0,
		left: 0,
		...t
	};
}
function br({ store: e, configuration: t }, n, r) {
	let { gl: i, scene: a, camera: o, shadows: s = !1, linear: c = !1, flat: l = !1, legacy: u = !1, frameloop: d = "always", dpr: f = [1, 2], performance: p, onPointerMissed: m } = r, h = yr(n, r.size), g = {
		...r,
		shadows: s,
		linear: c,
		flat: l,
		legacy: u,
		frameloop: d,
		size: h
	}, _ = e.getState(), y = _.gl, b = t.previous, x = (e) => !b || !wn.equ(g[e], b[e], vr);
	t.previous = void 0;
	let C = _.raycaster;
	if (C || _.set({ raycaster: C = new le() }), x("raycaster")) {
		let { params: e, ...t } = r.raycaster ?? {};
		Bn(C, {
			...t,
			params: {
				...C.params,
				...e
			}
		});
	}
	if (!_.camera || _.camera === t.camera && x("camera")) {
		t.camera = o;
		let e = o?.isCamera, n = e ? o : r.orthographic ? new E(0, 0, 0, 0, .1, 1e3) : new ne(75, 0, .1, 1e3);
		e || (n.position.z = 5, o && (Bn(n, o), n.manual || ("aspect" in o || "left" in o || "right" in o || "bottom" in o || "top" in o) && (n.manual = !0, n.updateProjectionMatrix())), !_.camera && !(o != null && o.rotation) && n.lookAt(0, 0, 0)), _.set({ camera: n }), C.camera = n;
	}
	if (!_.scene) {
		let t;
		a != null && a.isScene ? (t = a, kn(t, e, "", {})) : (t = new et(), kn(t, e, "", {}), a && Bn(t, a)), _.set({ scene: t });
	}
	if (r.events && !_.events.handlers && _.set({ events: r.events(e) }), x("size") && _.setSize(h.width, h.height, h.top, h.left), _.viewport.dpr !== xn(f) && _.setDpr(f), x("frameloop") && _.setFrameloop(d), x("onPointerMissed") && _.set({ onPointerMissed: m }), p && x("performance") && _.set((e) => ({ performance: {
		...e.performance,
		...p
	} })), !_.xr) {
		let t = (t, n) => {
			let r = e.getState();
			r.frameloop !== "never" && Ei(t, !0, r, n);
		}, n = () => {
			let n = e.getState();
			n.gl.xr.enabled = n.gl.xr.isPresenting, n.gl.xr.setAnimationLoop(n.gl.xr.isPresenting ? t : null), n.gl.xr.isPresenting || Ti(n);
		}, r = {
			connect() {
				let t = e.getState().gl;
				t.xr.addEventListener("sessionstart", n), t.xr.addEventListener("sessionend", n);
			},
			disconnect() {
				let t = e.getState().gl;
				t.xr.removeEventListener("sessionstart", n), t.xr.removeEventListener("sessionend", n);
			}
		};
		typeof y.xr?.addEventListener == "function" && r.connect(), _.set({ xr: r });
	}
	if (y.shadowMap && x("shadows")) {
		let e = y.shadowMap.enabled, t = y.shadowMap.type;
		if (y.shadowMap.enabled = !!s, wn.boo(s)) y.shadowMap.type = 2;
		else if (wn.str(s)) {
			let e = {
				basic: 0,
				percentage: 1,
				soft: 2,
				variance: 3
			};
			y.shadowMap.type = e[s] ?? 2;
		} else wn.obj(s) && Object.assign(y.shadowMap, s);
		(e !== y.shadowMap.enabled || t !== y.shadowMap.type) && (y.shadowMap.needsUpdate = !0);
	}
	let w = i && !wn.fun(i) && !$n(i) ? i : void 0;
	x("legacy") && (v.enabled = !u, _.set({ legacy: u })), x("linear") && (w?.outputColorSpace === void 0 && (y.outputColorSpace = c ? Ne : S), _.set({ linear: c })), x("flat") && (w?.toneMapping === void 0 && (y.toneMapping = l ? 0 : 4), _.set({ flat: l })), w && x("gl") && Bn(y, w), t.previous = g;
}
function xr(e) {
	let t = () => e.store.getState().gl?.xr, n = () => {
		var r, i, a;
		let o = e.store.getState();
		if ((r = t()) != null && r.isPresenting || (i = t()) != null && i.getSession != null && i.getSession()) {
			t().addEventListener("sessionend", n);
			return;
		}
		(a = t()) == null || a.removeEventListener == null || a.removeEventListener("sessionend", n);
		let s = e.configuration.previous;
		if (!s) return;
		let c = s.dpr ?? [1, 2];
		o.viewport.dpr !== xn(c) && o.setDpr(c);
	}, r = Sn(n);
	return () => {
		var e;
		r(), (e = t()) == null || e.removeEventListener == null || e.removeEventListener("sessionend", n);
	};
}
var Sr = {
	name: "@react-three/fiber",
	version: "9.8.2",
	description: "A React renderer for Threejs",
	keywords: [
		"react",
		"renderer",
		"fiber",
		"three",
		"threejs"
	],
	author: "Paul Henschel (https://github.com/drcmda)",
	license: "MIT",
	maintainers: [
		"Josh Ellis (https://github.com/joshuaellis)",
		"Cody Bennett (https://github.com/codyjasonbennett)",
		"Kris Baumgarter (https://github.com/krispya)"
	],
	bugs: { url: "https://github.com/pmndrs/react-three-fiber/issues" },
	homepage: "https://github.com/pmndrs/react-three-fiber#readme",
	repository: {
		type: "git",
		url: "git+https://github.com/pmndrs/react-three-fiber.git"
	},
	collective: {
		type: "opencollective",
		url: "https://opencollective.com/react-three-fiber"
	},
	main: "dist/react-three-fiber.cjs.js",
	module: "dist/react-three-fiber.esm.js",
	types: "dist/react-three-fiber.cjs.d.ts",
	"react-native": "native/dist/react-three-fiber-native.cjs.js",
	files: [
		"dist",
		"native",
		"react-reconciler",
		"CHANGELOG.md"
	],
	sideEffects: !1,
	preconstruct: { entrypoints: ["index.tsx", "native.tsx"] },
	scripts: { prebuild: "cp ../../readme.md readme.md" },
	devDependencies: {
		"@types/react-reconciler": "^0.33.0",
		"react-reconciler": "^0.34.0"
	},
	dependencies: {
		"@babel/runtime": "^7.17.8",
		"@types/webxr": "*",
		"base64-js": "^1.5.1",
		buffer: "^6.0.3",
		"its-fine": "^2.1.1",
		"react-use-measure": "^2.1.7",
		scheduler: "^0.28.0",
		"suspend-react": "^0.1.3",
		"use-sync-external-store": "^1.4.0",
		zustand: "^5.0.3"
	},
	peerDependencies: {
		expo: ">=43.0",
		"expo-asset": ">=8.4",
		"expo-file-system": ">=11.0",
		"expo-gl": ">=11.0",
		react: ">=19 <19.4",
		"react-dom": ">=19 <19.4",
		"react-native": ">=0.78",
		three: ">=0.156"
	},
	peerDependenciesMeta: {
		"react-dom": { optional: !0 },
		"react-native": { optional: !0 },
		expo: { optional: !0 },
		"expo-asset": { optional: !0 },
		"expo-file-system": { optional: !0 },
		"expo-gl": { optional: !0 }
	}
};
function Cr(e) {
	return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var wr = { exports: {} }, Tr = { exports: {} };
Tr.exports;
var Er;
function Dr() {
	return Er || (Er = 1, function(e) {
		e.exports = function(e) {
			function t(e, t, n, r) {
				return new oo(e, t, n, r);
			}
			function n() {}
			function r(e) {
				var t = "https://react.dev/errors/" + e;
				if (1 < arguments.length) {
					t += "?args[]=" + encodeURIComponent(arguments[1]);
					for (var n = 2; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
				}
				return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
			}
			function i(e) {
				for (var t = e, n = t; n && !n.alternate;) t = n, t.flags & 4098 && (e = t.return), n = t.return;
				for (; t.return;) t = t.return;
				return t.tag === 3 ? e : null;
			}
			function a(e) {
				if (i(e) !== e) throw Error(r(188));
			}
			function o(e) {
				var t = e.alternate;
				if (!t) {
					if (t = i(e), t === null) throw Error(r(188));
					return t === e ? e : null;
				}
				for (var n = e, o = t;;) {
					var s = n.return;
					if (s === null) break;
					var c = s.alternate;
					if (c === null) {
						if (o = s.return, o !== null) {
							n = o;
							continue;
						}
						break;
					}
					if (s.child === c.child) {
						for (c = s.child; c;) {
							if (c === n) return a(s), e;
							if (c === o) return a(s), t;
							c = c.sibling;
						}
						throw Error(r(188));
					}
					if (n.return !== o.return) n = s, o = c;
					else {
						for (var l = !1, u = s.child; u;) {
							if (u === n) {
								l = !0, n = s, o = c;
								break;
							}
							if (u === o) {
								l = !0, o = s, n = c;
								break;
							}
							u = u.sibling;
						}
						if (!l) {
							for (u = c.child; u;) {
								if (u === n) {
									l = !0, n = c, o = s;
									break;
								}
								if (u === o) {
									l = !0, o = c, n = s;
									break;
								}
								u = u.sibling;
							}
							if (!l) throw Error(r(189));
						}
					}
					if (n.alternate !== o) throw Error(r(190));
				}
				if (n.tag !== 3) throw Error(r(188));
				return n.stateNode.current === n ? e : t;
			}
			function s(e) {
				var t = e.tag;
				if (t === 5 || t === 26 || t === 27 || t === 6) return e;
				for (e = e.child; e !== null;) {
					if (t = s(e), t !== null) return t;
					e = e.sibling;
				}
				return null;
			}
			function c(e) {
				var t = e.tag;
				if (t === 5 || t === 26 || t === 27 || t === 6) return e;
				for (e = e.child; e !== null;) {
					if (e.tag !== 4 && (t = c(e), t !== null)) return t;
					e = e.sibling;
				}
				return null;
			}
			function l(e) {
				return typeof e != "object" || !e ? null : (e = H && e[H] || e["@@iterator"], typeof e == "function" ? e : null);
			}
			function u(e) {
				if (e == null) return null;
				if (typeof e == "function") return e.$$typeof === Uo ? null : e.displayName || e.name || null;
				if (typeof e == "string") return e;
				switch (e) {
					case ko: return "Fragment";
					case jo: return "Profiler";
					case Ao: return "StrictMode";
					case Fo: return "Suspense";
					case Io: return "SuspenseList";
					case zo: return "Activity";
					case Ho: return "ViewTransition";
				}
				if (typeof e == "object") switch (e.$$typeof) {
					case Oo: return "Portal";
					case No: return e.displayName || "Context";
					case Mo: return (e._context.displayName || "Context") + ".Consumer";
					case Po:
						var t = e.render;
						return e = e.displayName, e ||= (e = t.displayName || t.name || "", e === "" ? "ForwardRef" : "ForwardRef(" + e + ")"), e;
					case Lo: return t = e.displayName || null, t === null ? u(e.type) || "Memo" : t;
					case Ro:
						t = e._payload, e = e._init;
						try {
							return u(e(t));
						} catch {}
				}
				return null;
			}
			function d(e) {
				return { current: e };
			}
			function f(e) {
				0 > El || (e.current = Tl[El], Tl[El] = null, El--);
			}
			function p(e, t) {
				El++, Tl[El] = e.current, e.current = t;
			}
			function m(e) {
				return e >>>= 0, e === 0 ? 32 : 31 - (kl(e) / Al | 0) | 0;
			}
			function h(e) {
				var t = e & 42;
				if (t !== 0) return t;
				switch (e & -e) {
					case 1: return 1;
					case 2: return 2;
					case 4: return 4;
					case 8: return 8;
					case 16: return 16;
					case 32: return 32;
					case 64: return 64;
					case 128: return 128;
					case 256:
					case 512:
					case 1024:
					case 2048:
					case 4096:
					case 8192:
					case 16384:
					case 32768:
					case 65536:
					case 131072: return e & -e;
					case 262144:
					case 524288:
					case 1048576:
					case 2097152: return e & 3932160;
					case 4194304:
					case 8388608:
					case 16777216:
					case 33554432: return e & 62914560;
					case 67108864: return 67108864;
					case 134217728: return 134217728;
					case 268435456: return 268435456;
					case 536870912: return 536870912;
					case 1073741824: return 0;
					default: return e;
				}
			}
			function g(e, t, n) {
				var r = e.pendingLanes;
				if (r === 0) return 0;
				var i = 0, a = e.suspendedLanes, o = e.pingedLanes;
				e = e.warmLanes;
				var s = r & 134217727;
				return s === 0 ? (s = r & ~a, s === 0 ? o === 0 ? n || (n = r & ~e, n !== 0 && (i = h(n))) : i = h(o) : i = h(s)) : (r = s & ~a, r === 0 ? (o &= s, o === 0 ? n || (n = s & ~e, n !== 0 && (i = h(n))) : i = h(o)) : i = h(r)), i === 0 ? 0 : t !== 0 && t !== i && (t & a) === 0 && (a = i & -i, n = t & -t, a >= n || a === 32 && n & 4194048) ? t : i;
			}
			function _(e, t) {
				return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
			}
			function v(e, t) {
				t & 8 && (t |= t & 32);
				var n = e.entangledLanes;
				if (n !== 0) for (e = e.entanglements, n &= t; 0 < n;) {
					var r = 31 - Ol(n), i = 1 << r;
					t |= e[r], n &= ~i;
				}
				return t;
			}
			function y(e, t) {
				switch (e) {
					case 1:
					case 2:
					case 4:
					case 8:
					case 64: return t + 250;
					case 16:
					case 32:
					case 128:
					case 256:
					case 512:
					case 1024:
					case 2048:
					case 4096:
					case 8192:
					case 16384:
					case 32768:
					case 65536:
					case 131072:
					case 262144:
					case 524288:
					case 1048576:
					case 2097152: return t + 5e3;
					case 4194304:
					case 8388608:
					case 16777216:
					case 33554432: return -1;
					case 67108864:
					case 134217728:
					case 268435456:
					case 536870912:
					case 1073741824: return -1;
					default: return -1;
				}
			}
			function b() {
				var e = Nl;
				return Nl <<= 1, !(Nl & 62914560) && (Nl = 4194304), e;
			}
			function x(e) {
				for (var t = [], n = 0; 31 > n; n++) t.push(e);
				return t;
			}
			function S(e, t) {
				e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
			}
			function C(e, t, n, r, i, a) {
				var o = e.pendingLanes;
				e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
				var s = e.entanglements, c = e.expirationTimes, l = e.hiddenUpdates;
				for (n = o & ~n; 0 < n;) {
					var u = 31 - Ol(n), d = 1 << u;
					s[u] = 0, c[u] = -1;
					var f = l[u];
					if (f !== null) for (l[u] = null, u = 0; u < f.length; u++) {
						var p = f[u];
						p !== null && (p.lane &= -536870913);
					}
					n &= ~d;
				}
				r !== 0 && w(e, r, 0), a !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= a & ~(o & ~t));
			}
			function w(e, t, n) {
				e.pendingLanes |= t, e.suspendedLanes &= ~t;
				var r = 31 - Ol(t);
				e.entangledLanes |= t, e.entanglements[r] = e.entanglements[r] | 1073741824 | n & 261930;
			}
			function T(e, t) {
				var n = e.entangledLanes |= t;
				for (e = e.entanglements; n;) {
					var r = 31 - Ol(n), i = 1 << r;
					i & t | e[r] & t && (e[r] |= t), n &= ~i;
				}
			}
			function E(e, t) {
				var n = t & -t;
				return n = n & 42 ? 1 : D(n), (n & (e.suspendedLanes | t)) === 0 ? n : 0;
			}
			function D(e) {
				switch (e) {
					case 2:
						e = 1;
						break;
					case 8:
						e = 4;
						break;
					case 32:
						e = 16;
						break;
					case 256:
					case 512:
					case 1024:
					case 2048:
					case 4096:
					case 8192:
					case 16384:
					case 32768:
					case 65536:
					case 131072:
					case 262144:
					case 524288:
					case 1048576:
					case 2097152:
					case 4194304:
					case 8388608:
					case 16777216:
					case 33554432:
						e = 128;
						break;
					case 268435456:
						e = 134217728;
						break;
					default: e = 0;
				}
				return e;
			}
			function ee(e) {
				return e &= -e, 2 < e ? 8 < e ? e & 134217727 ? 32 : 268435456 : 8 : 2;
			}
			function te(e) {
				if (typeof Ul == "function" && Wl(e), Kl && typeof Kl.setStrictMode == "function") try {
					Kl.setStrictMode(Gl, e);
				} catch {}
			}
			function ne(e, t) {
				if (e.name != null && e.name !== "auto") return e.name;
				if (t.autoName !== null) return t.autoName;
				e = gf.identifierPrefix;
				var n = ql++;
				return e = "_" + e + "t_" + n.toString(32) + "_", t.autoName = e;
			}
			function re(e) {
				if (e == null || typeof e == "string") return e;
				var t = null, n = wf;
				if (n !== null) for (var r = 0; r < n.length; r++) {
					var i = e[n[r]];
					if (i != null) {
						if (i === "none") return "none";
						t = t == null ? i : t + (" " + i);
					}
				}
				return t ?? e.default;
			}
			function O(e, t) {
				return e = re(e), t = re(t), t == null ? e === "auto" ? null : e : t === "auto" ? null : t;
			}
			function k(e, t) {
				return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
			}
			function ie(e) {
				if (Zl === void 0) try {
					throw Error();
				} catch (e) {
					var t = e.stack.trim().match(/\n( *(at )?)/);
					Zl = t && t[1] || "", Ql = -1 < e.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : "";
				}
				return "\n" + Zl + e + Ql;
			}
			function ae(e, t) {
				if (!e || $l) return "";
				$l = !0;
				var n = Error.prepareStackTrace;
				Error.prepareStackTrace = void 0;
				try {
					var r = { DetermineComponentFrameRoot: function() {
						try {
							if (t) {
								var n = function() {
									throw Error();
								};
								if (Object.defineProperty(n.prototype, "props", { set: function() {
									throw Error();
								} }), typeof Reflect == "object" && Reflect.construct) {
									try {
										Reflect.construct(n, []);
									} catch (e) {
										var r = e;
									}
									Reflect.construct(e, [], n);
								} else {
									try {
										n.call();
									} catch (e) {
										r = e;
									}
									n = !1;
									try {
										var i = Object.getOwnPropertyDescriptor(e.prototype, "props");
										Object.defineProperty(e.prototype, "props", {
											configurable: !0,
											set: function() {
												throw Error();
											}
										}), n = !0, new e();
									} finally {
										n && (i === void 0 ? delete e.prototype.props : Object.defineProperty(e.prototype, "props", i));
									}
								}
							} else {
								try {
									throw Error();
								} catch (e) {
									r = e;
								}
								(n = e()) && typeof n.catch == "function" && n.catch(function() {});
							}
						} catch (e) {
							if (e && r && typeof e.stack == "string") return [e.stack, r.stack];
						}
						return [null, null];
					} };
					r.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
					var i = Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot, "name");
					i && i.configurable && Object.defineProperty(r.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
					var a = r.DetermineComponentFrameRoot(), o = a[0], s = a[1];
					if (o && s) {
						var c = o.split("\n"), l = s.split("\n");
						for (i = r = 0; r < c.length && !c[r].includes("DetermineComponentFrameRoot");) r++;
						for (; i < l.length && !l[i].includes("DetermineComponentFrameRoot");) i++;
						if (r === c.length || i === l.length) for (r = c.length - 1, i = l.length - 1; 1 <= r && 0 <= i && c[r] !== l[i];) i--;
						for (; 1 <= r && 0 <= i; r--, i--) if (c[r] !== l[i]) {
							if (r !== 1 || i !== 1) do
								if (r--, i--, 0 > i || c[r] !== l[i]) {
									var u = "\n" + c[r].replace(" at new ", " at ");
									return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u;
								}
							while (1 <= r && 0 <= i);
							break;
						}
					}
				} finally {
					$l = !1, Error.prepareStackTrace = n;
				}
				return (n = e ? e.displayName || e.name : "") ? ie(n) : "";
			}
			function oe(e, t) {
				switch (e.tag) {
					case 26:
					case 27:
					case 5: return ie(e.type);
					case 16: return ie("Lazy");
					case 13: return e.child !== t && t !== null ? ie("Suspense Fallback") : ie("Suspense");
					case 19: return ie("SuspenseList");
					case 0:
					case 15: return ae(e.type, !1);
					case 11: return ae(e.type.render, !1);
					case 1: return ae(e.type, !0);
					case 31: return ie("Activity");
					case 30: return ie("ViewTransition");
					default: return "";
				}
			}
			function se(e) {
				try {
					var t = "", n = null;
					do
						t += oe(e, n), n = e, e = e.return;
					while (e);
					return t;
				} catch (e) {
					return "\nError generating stack: " + e.message + "\n" + e.stack;
				}
			}
			function ce(e, t) {
				if (typeof e == "object" && e) {
					var n = eu.get(e);
					return n === void 0 ? (t = {
						value: e,
						source: t,
						stack: se(t)
					}, eu.set(e, t), t) : n;
				}
				return {
					value: e,
					source: t,
					stack: se(t)
				};
			}
			function le(e, t) {
				tu[nu++] = iu, tu[nu++] = ru, ru = e, iu = t;
			}
			function ue(e, t, n) {
				au[ou++] = cu, au[ou++] = lu, au[ou++] = su, su = e;
				var r = cu;
				e = lu;
				var i = 32 - Ol(r) - 1;
				r &= ~(1 << i), n += 1;
				var a = 32 - Ol(t) + i;
				if (30 < a) {
					var o = i - i % 5;
					a = (r & (1 << o) - 1).toString(32), r >>= o, i -= o, cu = 1 << 32 - Ol(t) + i | n << i | r, lu = a + e;
				} else cu = 1 << a | n << i | r, lu = e;
			}
			function de(e) {
				e.return !== null && (le(e, 1), ue(e, 1, 0));
			}
			function fe(e) {
				for (; e === ru;) ru = tu[--nu], tu[nu] = null, iu = tu[--nu], tu[nu] = null;
				for (; e === su;) su = au[--ou], au[ou] = null, lu = au[--ou], au[ou] = null, cu = au[--ou], au[ou] = null;
			}
			function pe(e, t) {
				au[ou++] = cu, au[ou++] = lu, au[ou++] = su, cu = t.id, lu = t.overflow, su = e;
			}
			function me(e, t) {
				p(fu, t), p(du, e), p(uu, null), e = Yo(t), f(uu), p(uu, e);
			}
			function he() {
				f(uu), f(du), f(fu);
			}
			function ge(e) {
				var t = e.memoizedState;
				t !== null && (t = t.memoizedState, ss ? Ts._currentValue = t : Ts._currentValue2 = t, p(pu, e)), t = uu.current;
				var n = Xo(t, e.type);
				t !== n && (p(du, e), p(uu, n));
			}
			function _e(e) {
				du.current === e && (f(uu), f(du)), pu.current === e && (f(pu), ss ? Ts._currentValue = ws : Ts._currentValue2 = ws);
			}
			function A(e) {
				throw Ce(ce(Error(r(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", "")), e)), vu;
			}
			function ve(e, t) {
				if (!ls) throw Error(r(175));
				Bc(e.stateNode, e.type, e.memoizedProps, t, e) || A(e, !0);
			}
			function ye(e) {
				for (mu = e.return; mu;) switch (mu.tag) {
					case 5:
					case 31:
					case 13:
						_u = !1;
						return;
					case 27:
					case 3:
						_u = !0;
						return;
					default: mu = mu.return;
				}
			}
			function be(e) {
				if (!ls || e !== mu) return !1;
				if (!q) return ye(e), q = !0, !1;
				var t = e.tag;
				if (yl ? t !== 3 && t !== 27 && (t !== 5 || nl(e.type) && !ns(e.type, e.memoizedProps)) && hu && A(e) : t !== 3 && (t !== 5 || nl(e.type) && !ns(e.type, e.memoizedProps)) && hu && A(e), ye(e), t === 13) {
					if (!ls) throw Error(r(316));
					if (e = e.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(r(317));
					hu = Gc(e);
				} else if (t === 31) {
					if (e = e.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(r(317));
					hu = Wc(e);
				} else hu = yl && t === 27 ? Ac(e.type, hu) : mu ? kc(e.stateNode) : null;
				return !0;
			}
			function xe() {
				ls && (hu = mu = null, q = !1);
			}
			function Se() {
				var e = gu;
				return e !== null && (cf === null ? cf = e : cf.push.apply(cf, e), gu = null), e;
			}
			function Ce(e) {
				gu === null ? gu = [e] : gu.push(e);
			}
			function j(e, t, n) {
				ss ? (p(yu, t._currentValue), t._currentValue = n) : (p(yu, t._currentValue2), t._currentValue2 = n);
			}
			function M(e) {
				var t = yu.current;
				ss ? e._currentValue = t : e._currentValue2 = t, f(yu);
			}
			function we(e, t, n) {
				for (; e !== null;) {
					var r = e.alternate;
					if ((e.childLanes & t) === t ? r !== null && (r.childLanes & t) !== t && (r.childLanes |= t) : (e.childLanes |= t, r !== null && (r.childLanes |= t)), e === n) break;
					e = e.return;
				}
			}
			function Te(e, t, n, i) {
				var a = e.child;
				for (a !== null && (a.return = e); a !== null;) {
					var o = a.dependencies;
					if (o !== null) {
						var s = a.child;
						o = o.firstContext;
						e: for (; o !== null;) {
							var c = o;
							o = a;
							for (var l = 0; l < t.length; l++) if (c.context === t[l]) {
								o.lanes |= n, c = o.alternate, c !== null && (c.lanes |= n), we(o.return, n, e), i || (s = null);
								break e;
							}
							o = c.next;
						}
					} else if (a.tag === 18) {
						if (s = a.return, s === null) throw Error(r(341));
						s.lanes |= n, o = s.alternate, o !== null && (o.lanes |= n), we(s, n, e), s = null;
					} else a.tag === 13 && a.memoizedState !== null && a.memoizedState.dehydrated === null ? (a.lanes |= n, s = a.alternate, s !== null && (s.lanes |= n), we(a.return, n, e), s = a.child, s = s === null ? null : s.sibling) : s = a.child;
					if (s !== null) s.return = a;
					else for (s = a; s !== null;) {
						if (s === e) {
							s = null;
							break;
						}
						if (a = s.sibling, a !== null) {
							a.return = s.return, s = a;
							break;
						}
						s = s.return;
					}
					a = s;
				}
			}
			function Ee(e, t, n, i) {
				e = null;
				for (var a = t, o = !1; a !== null;) {
					if (!o) {
						if (a.flags & 524288) o = !0;
						else if (a.flags & 262144) break;
					}
					if (a.tag === 10) {
						var s = a.alternate;
						if (s === null) throw Error(r(387));
						if (s = s.memoizedProps, s !== null) {
							var c = a.type;
							Jl(a.pendingProps.value, s.value) || (e === null ? e = [c] : e.push(c));
						}
					} else if (a === pu.current) {
						if (s = a.alternate, s === null) throw Error(r(387));
						s.memoizedState.memoizedState !== a.memoizedState.memoizedState && (e === null ? e = [Ts] : e.push(Ts));
					}
					a = a.return;
				}
				return e !== null && Te(t, e, n, i), t.flags |= 262144, e !== null;
			}
			function De(e) {
				for (e = e.firstContext; e !== null;) {
					var t = e.context;
					if (!Jl(ss ? t._currentValue : t._currentValue2, e.memoizedValue)) return !0;
					e = e.next;
				}
				return !1;
			}
			function Oe(e) {
				bu = e, xu = null, e = e.dependencies, e !== null && (e.firstContext = null);
			}
			function N(e) {
				return Ae(bu, e);
			}
			function ke(e, t) {
				return bu === null && Oe(e), Ae(e, t);
			}
			function Ae(e, t) {
				var n = ss ? t._currentValue : t._currentValue2;
				if (t = {
					context: t,
					memoizedValue: n,
					next: null
				}, xu === null) {
					if (e === null) throw Error(r(308));
					xu = t, e.dependencies = {
						lanes: 0,
						firstContext: t
					}, e.flags |= 524288;
				} else xu = xu.next = t;
				return n;
			}
			function je() {
				return {
					controller: new Su(),
					data: /* @__PURE__ */ new Map(),
					refCount: 0
				};
			}
			function Me(e) {
				e.refCount--, e.refCount === 0 && Cu(wu, function() {
					e.controller.abort();
				});
			}
			function Ne(e, t) {
				if (e.pendingLanes & 4194048) {
					var n = e.transitionTypes;
					for (n === null && (n = e.transitionTypes = []), e = 0; e < t.length; e++) {
						var r = t[e];
						n.indexOf(r) === -1 && n.push(r);
					}
				}
			}
			function Pe(e) {
				var t = e.transitionTypes;
				return e.transitionTypes = null, t;
			}
			function Fe() {}
			function Ie(e) {
				e !== Ou && e.next === null && (Ou === null ? Du = Ou = e : Ou = Ou.next = e), Au = !0, ku || (ku = !0, Ue());
			}
			function Le(e, t) {
				if (!ju && Au) {
					ju = !0;
					do
						for (var n = !1, r = Du; r !== null;) {
							if (!t) {
								if (e !== 0) {
									var i = r.pendingLanes;
									if (i === 0) var a = 0;
									else {
										var o = r.suspendedLanes, s = r.pingedLanes;
										a = (1 << 31 - Ol(42 | e) + 1) - 1, a &= i & ~(o & ~s), a = a & 201326741 ? a & 201326741 | 1 : a ? a | 2 : 0;
									}
									a !== 0 && (n = !0, He(r, a));
								} else a = qd, a = g(r, r === Kd ? a : 0, r.cancelPendingCommit !== null || r.timeoutHandle !== os), !(a & 3) || _(r, a) || (n = !0, He(r, a));
							}
							r = r.next;
						}
					while (n);
					ju = !1;
				}
			}
			function Re() {
				ze();
			}
			function ze() {
				Au = ku = !1;
				var e = 0;
				Mu !== 0 && ms() && (e = Mu);
				for (var t = Rl(), n = null, r = Du; r !== null;) {
					var i = r.next, a = Be(r, t);
					a === 0 ? (r.next = null, n === null ? Du = i : n.next = i, i === null && (Ou = n)) : (n = r, (e !== 0 || a & 3) && (Au = !0)), r = i;
				}
				hf !== 0 && hf !== 5 || Le(e, !1), Mu !== 0 && (Mu = 0);
			}
			function Be(e, t) {
				for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, a = e.pendingLanes & -62914561; 0 < a;) {
					var o = 31 - Ol(a), s = 1 << o, c = i[o];
					c === -1 ? ((s & n) === 0 || (s & r) !== 0) && (i[o] = y(s, t)) : c <= t && (e.expiredLanes |= s), a &= ~s;
				}
				if (t = Kd, n = qd, n = g(e, e === t ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== os), r = e.callbackNode, n === 0 || e === t && (Jd === 2 || Jd === 9) || e.cancelPendingCommit !== null) return r !== null && r !== null && Fl(r), e.callbackNode = null, e.callbackPriority = 0;
				if (!(n & 3) || _(e, n)) {
					if (t = n & -n, t === e.callbackPriority) return t;
					switch (r !== null && Fl(r), ee(n)) {
						case 2:
						case 8:
							n = Bl;
							break;
						case 32:
							n = Vl;
							break;
						case 268435456:
							n = Hl;
							break;
						default: n = Vl;
					}
					return r = Ve.bind(null, e), n = Pl(n, r), e.callbackPriority = t, e.callbackNode = n, t;
				}
				return r !== null && r !== null && Fl(r), e.callbackPriority = 2, e.callbackNode = null, 2;
			}
			function Ve(e, t) {
				if (hf !== 0 && hf !== 5) return e.callbackNode = null, e.callbackPriority = 0, null;
				var n = e.callbackNode;
				if (Za() && e.callbackNode !== n) return null;
				var r = qd;
				return r = g(e, e === Kd ? r : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== os), r === 0 ? null : (Ca(e, r, t), Be(e, Rl()), e.callbackNode != null && e.callbackNode === n ? Ve.bind(null, e) : null);
			}
			function He(e, t) {
				if (Za()) return null;
				Ca(e, t, !0);
			}
			function Ue() {
				Ds ? Os(function() {
					Q & 6 ? Pl(zl, Re) : ze();
				}) : Pl(zl, Re);
			}
			function We() {
				if (Mu === 0) {
					var e = Fu;
					e === 0 && (e = jl, jl <<= 1, !(jl & 261888) && (jl = 256)), Mu = e;
				}
				return Mu;
			}
			function P(e, t) {
				if (Nu === null) {
					var n = Nu = [];
					Pu = 0, Fu = We(), Iu = {
						status: "pending",
						value: void 0,
						then: function(e) {
							n.push(e);
						}
					};
				}
				return Pu++, t.then(Ge, Ge), t;
			}
			function Ge() {
				if (--Pu === 0 && (Eu = null, Nu !== null)) {
					Iu !== null && (Iu.status = "fulfilled");
					var e = Nu;
					Nu = null, Fu = 0, Iu = null;
					for (var t = 0; t < e.length; t++) (0, e[t])();
				}
			}
			function Ke(e, t) {
				var n = [], r = {
					status: "pending",
					value: null,
					reason: null,
					then: function(e) {
						n.push(e);
					}
				};
				return e.then(function() {
					r.status = "fulfilled", r.value = t;
					for (var e = 0; e < n.length; e++) (0, n[e])(t);
				}, function(e) {
					for (r.status = "rejected", r.reason = e, e = 0; e < n.length; e++) (0, n[e])(void 0);
				}), r;
			}
			function qe() {
				var e = Ru.current;
				return e === null ? Kd.pooledCache : e;
			}
			function Je(e, t) {
				t === null ? p(Ru, Ru.current) : p(Ru, t.pool);
			}
			function Ye() {
				var e = qe();
				return e === null ? null : {
					parent: ss ? Tu._currentValue : Tu._currentValue2,
					pool: e
				};
			}
			function Xe(e, t) {
				if (Jl(e, t)) return !0;
				if (typeof e != "object" || !e || typeof t != "object" || !t) return !1;
				var n = Object.keys(e), r = Object.keys(t);
				if (n.length !== r.length) return !1;
				for (r = 0; r < n.length; r++) {
					var i = n[r];
					if (!Xl.call(t, i) || !Jl(e[i], t[i])) return !1;
				}
				return !0;
			}
			function Ze(e) {
				return e = e.status, e === "fulfilled" || e === "rejected";
			}
			function Qe(e, t, n) {
				switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(Fe, Fe), t = n), t.status) {
					case "fulfilled": return t.value;
					case "rejected": throw e = t.reason, tt(e), e === void 0 && !("reason" in t) ? Error(r(600)) : e;
					default:
						if (typeof t.status == "string") t.then(Fe, Fe);
						else {
							if (e = Kd, e !== null && 100 < e.shellSuspendCounter) throw Error(r(482));
							e = t, e.status = "pending", e.then(function(e) {
								if (t.status === "pending") {
									var n = t;
									n.status = "fulfilled", n.value = e;
								}
							}, function(e) {
								if (t.status === "pending") {
									var n = t;
									n.status = "rejected", n.reason = e;
								}
							});
						}
						switch (t.status) {
							case "fulfilled": return t.value;
							case "rejected": throw e = t.reason, tt(e), e;
						}
						throw Uu = t, zu;
				}
			}
			function $e(e) {
				try {
					var t = e._init;
					return t(e._payload);
				} catch (e) {
					throw typeof e == "object" && e && typeof e.then == "function" ? (Uu = e, zu) : e;
				}
			}
			function et() {
				if (Uu === null) throw Error(r(459));
				var e = Uu;
				return Uu = null, e;
			}
			function tt(e) {
				if (e === zu || e === Vu) throw Error(r(483));
			}
			function nt(e) {
				var t = Gu;
				return Gu += 1, Wu === null && (Wu = []), Qe(Wu, e, t);
			}
			function rt(e, t) {
				t = t.props.ref, e.ref = t === void 0 ? null : t;
			}
			function it(e, t) {
				throw t.$$typeof === Eo ? Error(r(525)) : (e = Object.prototype.toString.call(t), Error(r(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)));
			}
			function at(e) {
				function n(t, n) {
					if (e) {
						var r = t.deletions;
						r === null ? (t.deletions = [n], t.flags |= 16) : r.push(n);
					}
				}
				function i(t, r) {
					if (!e) return null;
					for (; r !== null;) n(t, r), r = r.sibling;
					return null;
				}
				function a(e) {
					for (var t = /* @__PURE__ */ new Map(); e !== null;) e.key === null ? t.set(e.index, e) : t.set(e.key, e), e = e.sibling;
					return t;
				}
				function o(e, t) {
					return e = co(e, t), e.index = 0, e.sibling = null, e;
				}
				function s(t, n, r) {
					return t.index = r, e ? (r = t.alternate, r === null ? (t.flags |= 134217730, n) : (r = r.index, r < n ? (t.flags |= 2, n) : r)) : (t.flags |= 1048576, n);
				}
				function c(t) {
					return e && t.alternate === null && (t.flags |= 134217730), t;
				}
				function u(e, t, n, r) {
					return t === null || t.tag !== 6 ? (t = po(n, e.mode, r), t.return = e, t) : (t = o(t, n), t.return = e, t);
				}
				function d(e, t, n, r) {
					var i = n.type;
					return i === ko ? (e = p(e, t, n.props.children, r, n.key), rt(e, n), e) : t !== null && (t.elementType === i || typeof i == "object" && i && i.$$typeof === Ro && $e(i) === t.type) ? (t = o(t, n.props), rt(t, n), t.return = e, t) : (t = uo(n.type, n.key, n.props, null, e.mode, r), rt(t, n), t.return = e, t);
				}
				function f(e, t, n, r) {
					return t === null || t.tag !== 4 || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? (t = ho(n, e.mode, r), t.return = e, t) : (t = o(t, n.children || []), t.return = e, t);
				}
				function p(e, t, n, r, i) {
					return t === null || t.tag !== 7 ? (t = fo(n, e.mode, r, i), t.return = e, t) : (t = o(t, n), t.return = e, t);
				}
				function m(e, t, n) {
					if (typeof t == "string" && t !== "" || typeof t == "number" || typeof t == "bigint") return t = po("" + t, e.mode, n), t.return = e, t;
					if (typeof t == "object" && t) {
						switch (t.$$typeof) {
							case Do: return n = uo(t.type, t.key, t.props, null, e.mode, n), rt(n, t), n.return = e, n;
							case Oo: return t = ho(t, e.mode, n), t.return = e, t;
							case Ro: return t = $e(t), m(e, t, n);
						}
						if (Wo(t) || l(t)) return t = fo(t, e.mode, n, null), t.return = e, t;
						if (typeof t.then == "function") return m(e, nt(t), n);
						if (t.$$typeof === No) return m(e, ke(e, t), n);
						it(e, t);
					}
					return null;
				}
				function h(e, t, n, r) {
					var i = t === null ? null : t.key;
					if (typeof n == "string" && n !== "" || typeof n == "number" || typeof n == "bigint") return i === null ? u(e, t, "" + n, r) : null;
					if (typeof n == "object" && n) {
						switch (n.$$typeof) {
							case Do: return n.key === i ? d(e, t, n, r) : null;
							case Oo: return n.key === i ? f(e, t, n, r) : null;
							case Ro: return n = $e(n), h(e, t, n, r);
						}
						if (Wo(n) || l(n)) return i === null ? p(e, t, n, r, null) : null;
						if (typeof n.then == "function") return h(e, t, nt(n), r);
						if (n.$$typeof === No) return h(e, t, ke(e, n), r);
						it(e, n);
					}
					return null;
				}
				function g(e, t, n, r, i) {
					if (typeof r == "string" && r !== "" || typeof r == "number" || typeof r == "bigint") return e = e.get(n) || null, u(t, e, "" + r, i);
					if (typeof r == "object" && r) {
						switch (r.$$typeof) {
							case Do: return e = e.get(r.key === null ? n : r.key) || null, d(t, e, r, i);
							case Oo: return e = e.get(r.key === null ? n : r.key) || null, f(t, e, r, i);
							case Ro: return r = $e(r), g(e, t, n, r, i);
						}
						if (Wo(r) || l(r)) return e = e.get(n) || null, p(t, e, r, i, null);
						if (typeof r.then == "function") return g(e, t, n, nt(r), i);
						if (r.$$typeof === No) return g(e, t, n, ke(t, r), i);
						it(t, r);
					}
					return null;
				}
				function _(t, r, o, c) {
					for (var l = null, u = null, d = r, f = r = 0, p = null; d !== null && f < o.length; f++) {
						d.index > f ? (p = d, d = null) : p = d.sibling;
						var _ = h(t, d, o[f], c);
						if (_ === null) {
							d === null && (d = p);
							break;
						}
						e && d && _.alternate === null && n(t, d), r = s(_, r, f), u === null ? l = _ : u.sibling = _, u = _, d = p;
					}
					if (f === o.length) return i(t, d), q && le(t, f), l;
					if (d === null) {
						for (; f < o.length; f++) d = m(t, o[f], c), d !== null && (r = s(d, r, f), u === null ? l = d : u.sibling = d, u = d);
						return q && le(t, f), l;
					}
					for (d = a(d); f < o.length; f++) p = g(d, t, f, o[f], c), p !== null && (e && (_ = p.alternate, _ !== null && d.delete(_.key === null ? f : _.key)), r = s(p, r, f), u === null ? l = p : u.sibling = p, u = p);
					return e && d.forEach(function(e) {
						return n(t, e);
					}), q && le(t, f), l;
				}
				function v(t, o, c, l) {
					if (c == null) throw Error(r(151));
					for (var u = null, d = null, f = o, p = o = 0, _ = null, v = c.next(); f !== null && !v.done; p++, v = c.next()) {
						f.index > p ? (_ = f, f = null) : _ = f.sibling;
						var y = h(t, f, v.value, l);
						if (y === null) {
							f === null && (f = _);
							break;
						}
						e && f && y.alternate === null && n(t, f), o = s(y, o, p), d === null ? u = y : d.sibling = y, d = y, f = _;
					}
					if (v.done) return i(t, f), q && le(t, p), u;
					if (f === null) {
						for (; !v.done; p++, v = c.next()) v = m(t, v.value, l), v !== null && (o = s(v, o, p), d === null ? u = v : d.sibling = v, d = v);
						return q && le(t, p), u;
					}
					for (f = a(f); !v.done; p++, v = c.next()) v = g(f, t, p, v.value, l), v !== null && (e && (_ = v.alternate, _ !== null && f.delete(_.key === null ? p : _.key)), o = s(v, o, p), d === null ? u = v : d.sibling = v, d = v);
					return e && f.forEach(function(e) {
						return n(t, e);
					}), q && le(t, p), u;
				}
				function y(e, t, a, s) {
					if (typeof a == "object" && a && a.type === ko && a.key === null && a.props.ref === void 0 && (a = a.props.children), typeof a == "object" && a) {
						switch (a.$$typeof) {
							case Do:
								e: {
									for (var u = a.key; t !== null;) {
										if (t.key === u) {
											if (u = a.type, u === ko) {
												if (t.tag === 7) {
													i(e, t.sibling), s = o(t, a.props.children), rt(s, a), s.return = e, e = s;
													break e;
												}
											} else if (t.elementType === u || typeof u == "object" && u && u.$$typeof === Ro && $e(u) === t.type) {
												i(e, t.sibling), s = o(t, a.props), rt(s, a), s.return = e, e = s;
												break e;
											}
											i(e, t);
											break;
										}
										n(e, t), t = t.sibling;
									}
									a.type === ko ? (s = fo(a.props.children, e.mode, s, a.key), rt(s, a), s.return = e, e = s) : (s = uo(a.type, a.key, a.props, null, e.mode, s), rt(s, a), s.return = e, e = s);
								}
								return c(e);
							case Oo:
								e: {
									for (u = a.key; t !== null;) {
										if (t.key === u) {
											if (t.tag === 4 && t.stateNode.containerInfo === a.containerInfo && t.stateNode.implementation === a.implementation) {
												i(e, t.sibling), s = o(t, a.children || []), s.return = e, e = s;
												break e;
											}
											i(e, t);
											break;
										}
										n(e, t), t = t.sibling;
									}
									s = ho(a, e.mode, s), s.return = e, e = s;
								}
								return c(e);
							case Ro: return a = $e(a), y(e, t, a, s);
						}
						if (Wo(a)) return _(e, t, a, s);
						if (l(a)) {
							if (u = l(a), typeof u != "function") throw Error(r(150));
							return a = u.call(a), v(e, t, a, s);
						}
						if (typeof a.then == "function") return y(e, t, nt(a), s);
						if (a.$$typeof === No) return y(e, t, ke(e, a), s);
						it(e, a);
					}
					return typeof a == "string" && a !== "" || typeof a == "number" || typeof a == "bigint" ? (a = "" + a, t !== null && t.tag === 6 ? (i(e, t.sibling), s = o(t, a), s.return = e, e = s) : (i(e, t), s = po(a, e.mode, s), s.return = e, e = s), c(e)) : i(e, t);
				}
				return function(e, n, r, i) {
					try {
						Gu = 0;
						var a = y(e, n, r, i);
						return Wu = null, a;
					} catch (n) {
						if (n === zu || n === Vu) throw n;
						var o = t(29, n, null, e.mode);
						return o.lanes = i, o.return = e, o;
					}
				};
			}
			function ot() {
				for (var e = Yu, t = Xu = Yu = 0; t < e;) {
					var n = Ju[t];
					Ju[t++] = null;
					var r = Ju[t];
					Ju[t++] = null;
					var i = Ju[t];
					Ju[t++] = null;
					var a = Ju[t];
					if (Ju[t++] = null, r !== null && i !== null) {
						var o = r.pending;
						o === null ? i.next = i : (i.next = o.next, o.next = i), r.pending = i;
					}
					a !== 0 && ut(n, i, a);
				}
			}
			function st(e, t, n, r) {
				Ju[Yu++] = e, Ju[Yu++] = t, Ju[Yu++] = n, Ju[Yu++] = r, Xu |= r, e.lanes |= r, e = e.alternate, e !== null && (e.lanes |= r);
			}
			function ct(e, t, n, r) {
				return st(e, t, n, r), dt(e);
			}
			function lt(e, t) {
				return st(e, null, null, t), dt(e);
			}
			function ut(e, t, n) {
				e.lanes |= n;
				var r = e.alternate;
				r !== null && (r.lanes |= n);
				for (var i = !1, a = e.return; a !== null;) a.childLanes |= n, r = a.alternate, r !== null && (r.childLanes |= n), a.tag === 22 && (e = a.stateNode, e === null || e._visibility & 1 || (i = !0)), e = a, a = a.return;
				return e.tag === 3 ? (a = e.stateNode, i && t !== null && (i = 31 - Ol(n), e = a.hiddenUpdates, r = e[i], r === null ? e[i] = [t] : r.push(t), t.lane = n | 536870912), a) : null;
			}
			function dt(e) {
				if (50 < Tf) throw Tf = 0, Ef = null, Error(r(185));
				for (var t = e.return; t !== null;) e = t, t = e.return;
				return e.tag === 3 ? e.stateNode : null;
			}
			function ft(e) {
				e.updateQueue = {
					baseState: e.memoizedState,
					firstBaseUpdate: null,
					lastBaseUpdate: null,
					shared: {
						pending: null,
						lanes: 0,
						hiddenCallbacks: null
					},
					callbacks: null
				};
			}
			function pt(e, t) {
				e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
					baseState: e.baseState,
					firstBaseUpdate: e.firstBaseUpdate,
					lastBaseUpdate: e.lastBaseUpdate,
					shared: e.shared,
					callbacks: null
				});
			}
			function mt(e) {
				return {
					lane: e,
					tag: 0,
					payload: null,
					callback: null,
					next: null
				};
			}
			function ht(e, t, n) {
				var r = e.updateQueue;
				if (r === null) return null;
				if (r = r.shared, Q & 2) {
					var i = r.pending;
					return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, t = dt(e), ut(e, null, n), t;
				}
				return st(e, r, t, n), dt(e);
			}
			function gt(e, t, n) {
				if (t = t.updateQueue, t !== null && (t = t.shared, n & 4194048)) {
					var r = t.lanes;
					r &= e.pendingLanes, n |= r, t.lanes = n, T(e, n);
				}
			}
			function _t(e, t) {
				var n = e.updateQueue, r = e.alternate;
				if (r !== null && (r = r.updateQueue, n === r)) {
					var i = null, a = null;
					if (n = n.firstBaseUpdate, n !== null) {
						do {
							var o = {
								lane: n.lane,
								tag: n.tag,
								payload: n.payload,
								callback: null,
								next: null
							};
							a === null ? i = a = o : a = a.next = o, n = n.next;
						} while (n !== null);
						a === null ? i = a = t : a = a.next = t;
					} else i = a = t;
					n = {
						baseState: r.baseState,
						firstBaseUpdate: i,
						lastBaseUpdate: a,
						shared: r.shared,
						callbacks: r.callbacks
					}, e.updateQueue = n;
				} else e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
			}
			function vt() {
				if (Qu) {
					var e = Iu;
					if (e !== null) throw e;
				}
			}
			function yt(e, t, n, r) {
				Qu = !1;
				var i = e.updateQueue;
				Zu = !1;
				var a = i.firstBaseUpdate, o = i.lastBaseUpdate, s = i.shared.pending;
				if (s !== null) {
					i.shared.pending = null;
					var c = s, l = c.next;
					c.next = null, o === null ? a = l : o.next = l, o = c;
					var u = e.alternate;
					u !== null && (u = u.updateQueue, s = u.lastBaseUpdate, s !== o && (s === null ? u.firstBaseUpdate = l : s.next = l, u.lastBaseUpdate = c));
				}
				if (a !== null) {
					var d = i.baseState;
					o = 0, u = l = c = null, s = a;
					do {
						var f = s.lane & -536870913, p = f !== s.lane;
						if (p ? (qd & f) === f : (r & f) === f) {
							f !== 0 && f === Fu && (Qu = !0), u !== null && (u = u.next = {
								lane: 0,
								tag: s.tag,
								payload: s.payload,
								callback: null,
								next: null
							});
							e: {
								var m = e, h = s;
								f = t;
								var g = n;
								switch (h.tag) {
									case 1:
										if (m = h.payload, typeof m == "function") {
											d = m.call(g, d, f);
											break e;
										}
										d = m;
										break e;
									case 3: m.flags = m.flags & -65537 | 128;
									case 0:
										if (m = h.payload, f = typeof m == "function" ? m.call(g, d, f) : m, f == null) break e;
										d = To({}, d, f);
										break e;
									case 2: Zu = !0;
								}
							}
							f = s.callback, f !== null && (e.flags |= 64, p && (e.flags |= 8192), p = i.callbacks, p === null ? i.callbacks = [f] : p.push(f));
						} else p = {
							lane: f,
							tag: s.tag,
							payload: s.payload,
							callback: s.callback,
							next: null
						}, u === null ? (l = u = p, c = d) : u = u.next = p, o |= f;
						if (s = s.next, s === null) {
							if (s = i.shared.pending, s === null) break;
							p = s, s = p.next, p.next = null, i.lastBaseUpdate = p, i.shared.pending = null;
						}
					} while (1);
					u === null && (c = d), i.baseState = c, i.firstBaseUpdate = l, i.lastBaseUpdate = u, a === null && (i.shared.lanes = 0), tf |= o, e.lanes = o, e.memoizedState = d;
				}
			}
			function bt(e, t) {
				if (typeof e != "function") throw Error(r(191, e));
				e.call(t);
			}
			function xt(e, t) {
				var n = e.callbacks;
				if (n !== null) for (e.callbacks = null, e = 0; e < n.length; e++) bt(n[e], t);
			}
			function St(e, t) {
				e = $d, p(J, e), p($u, t), $d = e | t.baseLanes;
			}
			function Ct() {
				p(J, $d), p($u, $u.current);
			}
			function wt() {
				$d = J.current, f($u), f(J);
			}
			function Tt(e) {
				var t = e.alternate;
				p(ed, ed.current & 1), p(Y, e), X === null && (t === null || $u.current !== null || t.memoizedState !== null) && (X = e);
			}
			function Et(e) {
				p(ed, ed.current), p(Y, e), X === null && (X = e);
			}
			function Dt(e) {
				e.tag === 22 ? (p(ed, ed.current), p(Y, e), X === null && (X = e)) : Ot();
			}
			function Ot() {
				p(ed, ed.current), p(Y, Y.current);
			}
			function kt(e) {
				f(Y), X === e && (X = null), f(ed);
			}
			function At(e, t) {
				p(Y, Y.current), p(ed, t);
			}
			function jt(e) {
				f(ed), f(Y), X === e && (X = null);
			}
			function Mt(e) {
				for (var t = e; t !== null;) {
					if (t.tag === 13) {
						var n = t.memoizedState;
						if (n !== null && (n = n.dehydrated, n === null || Cc(n) || wc(n))) return t;
					} else if (t.tag === 19 && t.memoizedProps.revealOrder !== "independent") {
						if (t.flags & 128) return t;
					} else if (t.child !== null) {
						t.child.return = t, t = t.child;
						continue;
					}
					if (t === e) break;
					for (; t.sibling === null;) {
						if (t.return === null || t.return === e) return null;
						t = t.return;
					}
					t.sibling.return = t.return, t = t.sibling;
				}
				return null;
			}
			function Nt() {
				throw Error(r(321));
			}
			function Pt(e, t) {
				if (t === null) return !1;
				for (var n = 0; n < t.length && n < e.length; n++) if (!Jl(e[n], t[n])) return !1;
				return !0;
			}
			function Ft(e, t, n, r, i, a) {
				return td = a, Z = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, W.H = e === null || e.memoizedState === null ? fd : pd, od = !1, a = n(r, i), od = !1, ad && (a = I(t, n, r, i)), It(e), a;
			}
			function It(e) {
				W.H = dd;
				var t = nd !== null && nd.next !== null;
				if (td = 0, rd = nd = Z = null, id = !1, cd = 0, ld = null, t) throw Error(r(300));
				e === null || _d || (e = e.dependencies, e !== null && De(e) && (_d = !0));
			}
			function I(e, t, n, i) {
				Z = e;
				var a = 0;
				do {
					if (ad && (ld = null), cd = 0, ad = !1, 25 <= a) throw Error(r(301));
					if (a += 1, rd = nd = null, e.updateQueue != null) {
						var o = e.updateQueue;
						o.lastEffect = null, o.events = null, o.stores = null, o.memoCache != null && (o.memoCache.index = 0);
					}
					W.H = md, o = t(n, i);
				} while (ad);
				return o;
			}
			function Lt() {
				var e = W.H, t = e.useState()[0];
				return t = typeof t.then == "function" ? Wt(t) : t, e = e.useState()[0], (nd === null ? null : nd.memoizedState) !== e && (Z.flags |= 1024), t;
			}
			function Rt() {
				var e = sd !== 0;
				return sd = 0, e;
			}
			function zt(e, t, n) {
				t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n;
			}
			function Bt(e) {
				if (id) {
					for (e = e.memoizedState; e !== null;) {
						var t = e.queue;
						t !== null && (t.pending = null), e = e.next;
					}
					id = !1;
				}
				td = 0, rd = nd = Z = null, ad = !1, cd = sd = 0, ld = null;
			}
			function Vt() {
				var e = {
					memoizedState: null,
					baseState: null,
					baseQueue: null,
					queue: null,
					next: null
				};
				return rd === null ? Z.memoizedState = rd = e : rd = rd.next = e, rd;
			}
			function Ht() {
				if (nd === null) {
					var e = Z.alternate;
					e = e === null ? null : e.memoizedState;
				} else e = nd.next;
				var t = rd === null ? Z.memoizedState : rd.next;
				if (t !== null) rd = t, nd = e;
				else {
					if (e === null) throw Z.alternate === null ? Error(r(467)) : Error(r(310));
					nd = e, e = {
						memoizedState: nd.memoizedState,
						baseState: nd.baseState,
						baseQueue: nd.baseQueue,
						queue: nd.queue,
						next: null
					}, rd === null ? Z.memoizedState = rd = e : rd = rd.next = e;
				}
				return rd;
			}
			function Ut() {
				return {
					lastEffect: null,
					events: null,
					stores: null,
					memoCache: null
				};
			}
			function Wt(e) {
				var t = cd;
				return cd += 1, ld === null && (ld = []), e = Qe(ld, e, t), t = Z, (rd === null ? t.memoizedState : rd.next) === null && (t = t.alternate, W.H = t === null || t.memoizedState === null ? fd : pd), e;
			}
			function Gt(e) {
				if (typeof e == "object" && e) {
					if (typeof e.then == "function") return Wt(e);
					if (e.$$typeof === V) return;
					if (e.$$typeof === No) return N(e);
				}
				throw Error(r(438, String(e)));
			}
			function Kt(e) {
				var t = null, n = Z.updateQueue;
				if (n !== null && (t = n.memoCache), t == null) {
					var r = Z.alternate;
					r !== null && (r = r.updateQueue, r !== null && (r = r.memoCache, r != null && (t = {
						data: r.data.map(function(e) {
							return e.slice();
						}),
						index: 0
					})));
				}
				if (t ??= {
					data: [],
					index: 0
				}, n === null && (n = Ut(), Z.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0) for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = Vo;
				return t.index++, n;
			}
			function qt(e, t) {
				return typeof t == "function" ? t(e) : t;
			}
			function Jt(e) {
				return Yt(Ht(), nd, e);
			}
			function Yt(e, t, n) {
				var i = e.queue;
				if (i === null) throw Error(r(311));
				i.lastRenderedReducer = n;
				var a = e.baseQueue, o = i.pending;
				if (o !== null) {
					if (a !== null) {
						var s = a.next;
						a.next = o.next, o.next = s;
					}
					t.baseQueue = a = o, i.pending = null;
				}
				if (o = e.baseState, a === null) e.memoizedState = o;
				else {
					t = a.next;
					var c = s = null, l = null, u = t, d = !1;
					do {
						var f = u.lane & -536870913;
						if (f === u.lane ? (td & f) === f : (qd & f) === f) {
							var p = u.revertLane;
							if (p === 0) l !== null && (l = l.next = {
								lane: 0,
								revertLane: 0,
								gesture: null,
								action: u.action,
								hasEagerState: u.hasEagerState,
								eagerState: u.eagerState,
								next: null
							}), f === Fu && (d = !0);
							else if ((td & p) === p) {
								u = u.next, p === Fu && (d = !0);
								continue;
							} else f = {
								lane: 0,
								revertLane: u.revertLane,
								gesture: null,
								action: u.action,
								hasEagerState: u.hasEagerState,
								eagerState: u.eagerState,
								next: null
							}, l === null ? (c = l = f, s = o) : l = l.next = f, Z.lanes |= p, tf |= p;
							f = u.action, od && n(o, f), o = u.hasEagerState ? u.eagerState : n(o, f);
						} else p = {
							lane: f,
							revertLane: u.revertLane,
							gesture: u.gesture,
							action: u.action,
							hasEagerState: u.hasEagerState,
							eagerState: u.eagerState,
							next: null
						}, l === null ? (c = l = p, s = o) : l = l.next = p, Z.lanes |= f, tf |= f;
						u = u.next;
					} while (u !== null && u !== t);
					if (l === null ? s = o : l.next = c, !Jl(o, e.memoizedState) && (_d = !0, d && (n = Iu, n !== null))) throw n;
					e.memoizedState = o, e.baseState = s, e.baseQueue = l, i.lastRenderedState = o;
				}
				return a === null && (i.lanes = 0), [e.memoizedState, i.dispatch];
			}
			function Xt(e) {
				var t = Ht(), n = t.queue;
				if (n === null) throw Error(r(311));
				n.lastRenderedReducer = e;
				var i = n.dispatch, a = n.pending, o = t.memoizedState;
				if (a !== null) {
					n.pending = null;
					var s = a = a.next;
					do
						o = e(o, s.action), s = s.next;
					while (s !== a);
					Jl(o, t.memoizedState) || (_d = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
				}
				return [o, i];
			}
			function Zt(e, t, n) {
				var i = Z, a = Ht(), o = q;
				if (o) {
					if (n === void 0) throw Error(r(407));
					n = n();
				} else n = t();
				var s = !Jl((nd || a).memoizedState, n);
				if (s && (a.memoizedState = n, _d = !0), a = a.queue, wn(en.bind(null, i, a, e), [e]), e = a.getSnapshot !== t || s || rd !== null && !!(rd.memoizedState.tag & 1), yn(e ? 9 : 8, { destroy: void 0 }, $t.bind(null, i, a, n, t), null), e) {
					if (i.flags |= 2048, Kd === null) throw Error(r(349));
					o || td & 127 || Qt(i, t, n);
				}
				return n;
			}
			function Qt(e, t, n) {
				e.flags |= 16384, e = {
					getSnapshot: t,
					value: n
				}, t = Z.updateQueue, t === null ? (t = Ut(), Z.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
			}
			function $t(e, t, n, r) {
				t.value = n, t.getSnapshot = r, tn(t) && nn(e);
			}
			function en(e, t, n) {
				return n(function() {
					tn(t) && nn(e);
				});
			}
			function tn(e) {
				var t = e.getSnapshot;
				e = e.value;
				try {
					var n = t();
					return !Jl(e, n);
				} catch {
					return !0;
				}
			}
			function nn(e) {
				var t = lt(e, 2);
				t !== null && Sa(t, e, 2);
			}
			function rn(e) {
				var t = Vt();
				if (typeof e == "function") {
					var n = e;
					if (e = n(), od) {
						te(!0);
						try {
							n();
						} finally {
							te(!1);
						}
					}
				}
				return t.memoizedState = t.baseState = e, t.queue = {
					pending: null,
					lanes: 0,
					dispatch: null,
					lastRenderedReducer: qt,
					lastRenderedState: e
				}, t;
			}
			function an(e, t, n, r) {
				return e.baseState = n, Yt(e, nd, typeof r == "function" ? r : qt);
			}
			function on(e, t, n, i, a) {
				if (Kn(e)) throw Error(r(485));
				if (e = t.action, e !== null) {
					var o = {
						payload: a,
						action: e,
						next: null,
						isTransition: !0,
						status: "pending",
						value: null,
						reason: null,
						listeners: [],
						then: function(e) {
							o.listeners.push(e);
						}
					};
					W.T === null ? o.isTransition = !1 : n(!0), i(o), n = t.pending, n === null ? (o.next = t.pending = o, cn(t, o)) : (o.next = n.next, t.pending = n.next = o);
				}
			}
			function cn(e, t) {
				var n = t.action, r = t.payload, i = e.state;
				if (t.isTransition) {
					var a = W.T, o = {};
					o.types = a === null ? null : a.types, W.T = o;
					try {
						var s = n(i, r), c = W.S;
						c !== null && c(o, s), ln(e, t, s);
					} catch (n) {
						dn(e, t, n);
					} finally {
						a !== null && o.types !== null && (a.types = o.types), W.T = a;
					}
				} else try {
					a = n(i, r), ln(e, t, a);
				} catch (n) {
					dn(e, t, n);
				}
			}
			function ln(e, t, n) {
				typeof n == "object" && n && typeof n.then == "function" ? n.then(function(n) {
					un(e, t, n);
				}, function(n) {
					return dn(e, t, n);
				}) : un(e, t, n);
			}
			function un(e, t, n) {
				t.status = "fulfilled", t.value = n, fn(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, cn(e, n)));
			}
			function dn(e, t, n) {
				var r = e.pending;
				if (e.pending = null, r !== null) {
					r = r.next;
					do
						t.status = "rejected", t.reason = n, fn(t), t = t.next;
					while (t !== r);
				}
				e.action = null;
			}
			function fn(e) {
				e = e.listeners;
				for (var t = 0; t < e.length; t++) (0, e[t])();
			}
			function pn(e, t) {
				return t;
			}
			function mn(e, t) {
				if (q) {
					var n = Kd.formState;
					if (n !== null) {
						e: {
							var r = Z;
							if (q) {
								if (hu) {
									var i = Dc(hu, _u);
									if (i) {
										hu = kc(i), r = Oc(i);
										break e;
									}
								}
								A(r);
							}
							r = !1;
						}
						r && (t = n[0]);
					}
				}
				n = Vt(), n.memoizedState = n.baseState = t, r = {
					pending: null,
					lanes: 0,
					dispatch: null,
					lastRenderedReducer: pn,
					lastRenderedState: t
				}, n.queue = r, n = Un.bind(null, Z, r), r.dispatch = n, r = rn(!1);
				var a = Gn.bind(null, Z, !1, r.queue);
				return r = Vt(), i = {
					state: t,
					dispatch: null,
					action: e,
					pending: null
				}, r.queue = i, n = on.bind(null, Z, i, a, n), i.dispatch = n, r.memoizedState = e, [
					t,
					n,
					!1
				];
			}
			function hn(e) {
				return gn(Ht(), nd, e);
			}
			function gn(e, t, n) {
				if (t = Yt(e, t, pn)[0], e = Jt(qt)[0], typeof t == "object" && t && typeof t.then == "function") try {
					var r = Wt(t);
				} catch (e) {
					throw e === zu ? Vu : e;
				}
				else r = t;
				t = Ht();
				var i = t.queue, a = i.dispatch;
				return n !== t.memoizedState && (Z.flags |= 2048, yn(9, { destroy: void 0 }, _n.bind(null, i, n), null)), [
					r,
					a,
					e
				];
			}
			function _n(e, t) {
				e.action = t;
			}
			function vn(e) {
				var t = Ht(), n = nd;
				if (n !== null) return gn(t, n, e);
				Ht(), t = t.memoizedState, n = Ht();
				var r = n.queue.dispatch;
				return n.memoizedState = e, [
					t,
					r,
					!1
				];
			}
			function yn(e, t, n, r) {
				return e = {
					tag: e,
					create: n,
					deps: r,
					inst: t,
					next: null
				}, t = Z.updateQueue, t === null && (t = Ut(), Z.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e;
			}
			function bn() {
				return Ht().memoizedState;
			}
			function xn(e, t, n, r) {
				var i = Vt();
				Z.flags |= e, i.memoizedState = yn(1 | t, { destroy: void 0 }, n, r === void 0 ? null : r);
			}
			function Sn(e, t, n, r) {
				var i = Ht();
				r = r === void 0 ? null : r;
				var a = i.memoizedState.inst;
				nd !== null && r !== null && Pt(r, nd.memoizedState.deps) ? i.memoizedState = yn(t, a, n, r) : (Z.flags |= e, i.memoizedState = yn(1 | t, a, n, r));
			}
			function Cn(e, t) {
				xn(8390656, 8, e, t);
			}
			function wn(e, t) {
				Sn(2048, 8, e, t);
			}
			function Tn(e) {
				Z.flags |= 4;
				var t = Z.updateQueue;
				if (t === null) t = Ut(), Z.updateQueue = t, t.events = [e];
				else {
					var n = t.events;
					n === null ? t.events = [e] : n.push(e);
				}
			}
			function En(e) {
				var t = Ht().memoizedState;
				return Tn({
					ref: t,
					nextImpl: e
				}), function() {
					if (Q & 2) throw Error(r(440));
					return t.impl.apply(void 0, arguments);
				};
			}
			function Dn(e, t) {
				return Sn(4, 2, e, t);
			}
			function On(e, t) {
				return Sn(4, 4, e, t);
			}
			function kn(e, t) {
				if (typeof t == "function") {
					e = e();
					var n = t(e);
					return function() {
						typeof n == "function" ? n() : t(null);
					};
				}
				if (t != null) return e = e(), t.current = e, function() {
					t.current = null;
				};
			}
			function An(e, t, n) {
				n = n == null ? null : n.concat([e]), Sn(4, 4, kn.bind(null, t, e), n);
			}
			function jn() {}
			function Mn(e, t) {
				var n = Ht();
				t = t === void 0 ? null : t;
				var r = n.memoizedState;
				return t !== null && Pt(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
			}
			function Nn(e, t) {
				var n = Ht();
				t = t === void 0 ? null : t;
				var r = n.memoizedState;
				if (t !== null && Pt(t, r[1])) return r[0];
				if (r = e(), od) {
					te(!0);
					try {
						e();
					} finally {
						te(!1);
					}
				}
				return n.memoizedState = [r, t], r;
			}
			function Pn(e, t, n) {
				return n === void 0 || td & 1073741824 && !(qd & 261930) ? e.memoizedState = t : (e.memoizedState = n, e = ba(), Z.lanes |= e, tf |= e, n);
			}
			function Fn(e, t, n, r) {
				return Jl(n, t) ? n : $u.current === null ? !(td & 106) || td & 1073741824 && !(qd & 261930) ? (_d = !0, e.memoizedState = n) : (e = ba(), Z.lanes |= e, tf |= e, t) : (e = Pn(e, n, r), Jl(e, t) || (_d = !0), e);
			}
			function In(e, t, n, r, i) {
				var a = K();
				fs(a !== 0 && 8 > a ? a : 8);
				var o = W.T, s = {};
				s.types = o === null ? null : o.types, W.T = s, Gn(e, !1, t, n);
				try {
					var c = i(), l = W.S;
					l !== null && l(s, c), typeof c == "object" && c && typeof c.then == "function" ? Wn(e, t, Ke(c, r), ya(e)) : Wn(e, t, r, ya(e));
				} catch (n) {
					Wn(e, t, {
						then: function() {},
						status: "rejected",
						reason: n
					}, ya());
				} finally {
					fs(a), o !== null && s.types !== null && (o.types = s.types), W.T = o;
				}
			}
			function Ln(e) {
				var t = e.memoizedState;
				if (t !== null) return t;
				t = {
					memoizedState: ws,
					baseState: ws,
					baseQueue: null,
					queue: {
						pending: null,
						lanes: 0,
						dispatch: null,
						lastRenderedReducer: qt,
						lastRenderedState: ws
					},
					next: null
				};
				var n = {};
				return t.next = {
					memoizedState: n,
					baseState: n,
					baseQueue: null,
					queue: {
						pending: null,
						lanes: 0,
						dispatch: null,
						lastRenderedReducer: qt,
						lastRenderedState: n
					},
					next: null
				}, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
			}
			function Rn() {
				return N(Ts);
			}
			function zn() {
				return Ht().memoizedState;
			}
			function Bn() {
				return Ht().memoizedState;
			}
			function Vn(e) {
				for (var t = e.return; t !== null;) {
					switch (t.tag) {
						case 24:
						case 3:
							var n = ya();
							e = mt(n);
							var r = ht(t, e, n);
							r !== null && (Sa(r, t, n), gt(r, t, n)), t = { cache: je() }, e.payload = t;
							return;
					}
					t = t.return;
				}
			}
			function Hn(e, t, n) {
				var r = ya();
				n = {
					lane: r,
					revertLane: 0,
					gesture: null,
					action: n,
					hasEagerState: !1,
					eagerState: null,
					next: null
				}, Kn(e) ? qn(t, n) : (n = ct(e, t, n, r), n !== null && (Sa(n, e, r), Jn(n, t, r)));
			}
			function Un(e, t, n) {
				Wn(e, t, n, ya());
			}
			function Wn(e, t, n, r) {
				var i = {
					lane: r,
					revertLane: 0,
					gesture: null,
					action: n,
					hasEagerState: !1,
					eagerState: null,
					next: null
				};
				if (Kn(e)) qn(t, i);
				else {
					var a = e.alternate;
					if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null)) try {
						var o = t.lastRenderedState, s = a(o, n);
						if (i.hasEagerState = !0, i.eagerState = s, Jl(s, o)) return st(e, t, i, 0), Kd === null && ot(), !1;
					} catch {}
					if (n = ct(e, t, i, r), n !== null) return Sa(n, e, r), Jn(n, t, r), !0;
				}
				return !1;
			}
			function Gn(e, t, n, i) {
				if (i = {
					lane: 2,
					revertLane: We(),
					gesture: null,
					action: i,
					hasEagerState: !1,
					eagerState: null,
					next: null
				}, Kn(e)) {
					if (t) throw Error(r(479));
				} else t = ct(e, n, i, 2), t !== null && Sa(t, e, 2);
			}
			function Kn(e) {
				var t = e.alternate;
				return e === Z || t !== null && t === Z;
			}
			function qn(e, t) {
				ad = id = !0;
				var n = e.pending;
				n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
			}
			function Jn(e, t, n) {
				if (n & 4194048) {
					var r = t.lanes;
					r &= e.pendingLanes, n |= r, t.lanes = n, T(e, n);
				}
			}
			function Yn(e, t, n, r) {
				t = e.memoizedState, n = n(r, t), n = n == null ? t : To({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
			}
			function Xn(e, t, n, r, i, a, o) {
				return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, a, o) : t.prototype && t.prototype.isPureReactComponent ? !Xe(n, r) || !Xe(i, a) : !0;
			}
			function Zn(e, t, n, r) {
				e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && hd.enqueueReplaceState(t, t.state, null);
			}
			function Qn(e, t) {
				var n = t;
				if ("ref" in t) for (var r in n = {}, t) r !== "ref" && (n[r] = t[r]);
				if (e = e.defaultProps) for (var i in n === t && (n = To({}, n)), e) n[i] === void 0 && (n[i] = e[i]);
				return n;
			}
			function $n(e, t) {
				try {
					var n = e.onUncaughtError;
					n(t.value, { componentStack: t.stack });
				} catch (e) {
					setTimeout(function() {
						throw e;
					});
				}
			}
			function er(e, t, n) {
				try {
					var r = e.onCaughtError;
					r(n.value, {
						componentStack: n.stack,
						errorBoundary: t.tag === 1 ? t.stateNode : null
					});
				} catch (e) {
					setTimeout(function() {
						throw e;
					});
				}
			}
			function tr(e, t, n) {
				return n = mt(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
					$n(e, t);
				}, n;
			}
			function nr(e) {
				return e = mt(e), e.tag = 3, e;
			}
			function rr(e, t, n, r) {
				var i = n.type.getDerivedStateFromError;
				if (typeof i == "function") {
					var a = r.value;
					e.payload = function() {
						return i(a);
					}, e.callback = function() {
						er(t, n, r);
					};
				}
				var o = n.stateNode;
				o !== null && typeof o.componentDidCatch == "function" && (e.callback = function() {
					er(t, n, r), typeof i != "function" && (mf === null ? mf = /* @__PURE__ */ new Set([this]) : mf.add(this));
					var e = r.stack;
					this.componentDidCatch(r.value, { componentStack: e === null ? "" : e });
				});
			}
			function ir(e, t, n, i, a) {
				if (n.flags |= 32768, typeof i == "object" && i && typeof i.then == "function") {
					if (t = n.alternate, t !== null && Ee(t, n, a, !0), n = Y.current, n !== null) {
						switch (n.tag) {
							case 31:
							case 13:
							case 19: return X === null ? Pa() : n.alternate === null && ef === 0 && (ef = 3), n.flags &= -257, n.flags |= 65536, n.lanes = a, i === Hu ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([i]) : t.add(i), eo(e, i, a)), !1;
							case 22: return n.flags |= 65536, i === Hu ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
								transitions: null,
								markerInstances: null,
								retryQueue: /* @__PURE__ */ new Set([i])
							}, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([i]) : n.add(i)), eo(e, i, a)), !1;
						}
						throw Error(r(435, n.tag));
					}
					return eo(e, i, a), Pa(), !1;
				}
				if (q) return t = Y.current, t === null ? (i !== vu && (t = Error(r(423), { cause: i }), Ce(ce(t, n))), e = e.current.alternate, e.flags |= 65536, a &= -a, e.lanes |= a, i = ce(i, n), a = tr(e.stateNode, i, a), _t(e, a), ef !== 4 && (ef = 2)) : (!(t.flags & 65536) && (t.flags |= 256), t.flags |= 65536, t.lanes = a, i !== vu && (e = Error(r(422), { cause: i }), Ce(ce(e, n)))), !1;
				var o = Error(r(520), { cause: i });
				if (o = ce(o, n), sf === null ? sf = [o] : sf.push(o), ef !== 4 && (ef = 2), t === null) return !0;
				i = ce(i, n), n = t;
				do {
					switch (n.tag) {
						case 3: return n.flags |= 65536, e = a & -a, n.lanes |= e, e = tr(n.stateNode, i, e), _t(n, e), !1;
						case 1:
							if (t = n.type, o = n.stateNode, !(n.flags & 128) && (typeof t.getDerivedStateFromError == "function" || o !== null && typeof o.componentDidCatch == "function" && (mf === null || !mf.has(o)))) return n.flags |= 65536, a &= -a, n.lanes |= a, a = nr(a), rr(a, e, n, i), _t(n, a), !1;
							break;
						case 22: if (n.memoizedState !== null) return n.flags |= 65536, !1;
					}
					n = n.return;
				} while (n !== null);
				return !1;
			}
			function ar(e, t, n, r) {
				t.child = e === null ? qu(t, null, n, r) : Ku(t, e.child, n, r);
			}
			function or(e, t, n, r, i) {
				n = n.render;
				var a = t.ref;
				if ("ref" in r) {
					var o = {};
					for (var s in r) s !== "ref" && (o[s] = r[s]);
				} else o = r;
				return Oe(t), r = Ft(e, t, n, o, a, i), s = Rt(), e !== null && !_d ? (zt(e, t, i), Nr(e, t, i)) : (q && s && de(t), t.flags |= 1, ar(e, t, r, i), t.child);
			}
			function sr(e, t, n, r, i) {
				if (e === null) {
					var a = n.type;
					return typeof a == "function" && !so(a) && a.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = a, cr(e, t, a, r, i)) : (e = uo(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
				}
				if (a = e.child, !Pr(e, i)) {
					var o = a.memoizedProps;
					if (n = n.compare, n = n === null ? Xe : n, n(o, r) && e.ref === t.ref) return Nr(e, t, i);
				}
				return t.flags |= 1, e = co(a, r), e.ref = t.ref, e.return = t, t.child = e;
			}
			function cr(e, t, n, r, i) {
				if (e !== null) {
					var a = e.memoizedProps;
					if (Xe(a, r) && e.ref === t.ref) {
						if (_d = !1, t.pendingProps = r = a, Pr(e, i)) e.flags & 131072 && (_d = !0);
						else return t.lanes = e.lanes, Nr(e, t, i);
					}
				}
				return gr(e, t, n, r, i);
			}
			function lr(e, t, n, r) {
				var i = r.children, a = e === null ? null : e.memoizedState;
				if (e === null && t.stateNode === null && (t.stateNode = {
					_visibility: 1,
					_pendingMarkers: null,
					_retryCache: null,
					_transitions: null
				}), r.mode === "hidden") {
					if (t.flags & 128) {
						if (a = a === null ? n : a.baseLanes | n, e !== null) {
							for (r = t.child = e.child, i = 0; r !== null;) i = i | r.lanes | r.childLanes, r = r.sibling;
							r = i & ~a;
						} else r = 0, t.child = null;
						return dr(e, t, a, n, r);
					}
					if (n & 536870912) t.memoizedState = {
						baseLanes: 0,
						cachePool: null
					}, e !== null && Je(t, a === null ? null : a.cachePool), a === null ? Ct() : St(t, a), Dt(t);
					else return r = t.lanes = 536870912, dr(e, t, a === null ? n : a.baseLanes | n, n, r);
				} else a === null ? (e !== null && Je(t, null), Ct(), Ot()) : (Je(t, a.cachePool), St(t, a), Ot(), t.memoizedState = null);
				return ar(e, t, i, n), t.child;
			}
			function ur(e, t) {
				return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
					_visibility: 1,
					_pendingMarkers: null,
					_retryCache: null,
					_transitions: null
				}), t.sibling;
			}
			function dr(e, t, n, r, i) {
				var a = qe();
				return a = a === null ? null : {
					parent: ss ? Tu._currentValue : Tu._currentValue2,
					pool: a
				}, t.memoizedState = {
					baseLanes: n,
					cachePool: a
				}, e !== null && Je(t, null), Ct(), Dt(t), e !== null && Ee(e, t, r, !0), t.childLanes = i, null;
			}
			function fr(e, t) {
				return t = wr({
					mode: t.mode,
					children: t.children
				}, e.mode), t.ref = e.ref, e.child = t, t.return = e, t;
			}
			function pr(e, t, n) {
				return Ku(t, e.child, null, n), e = fr(t, t.pendingProps), e.flags |= 2, kt(t), t.memoizedState = null, e;
			}
			function mr(e, t, n) {
				var i = t.pendingProps, a = !!(t.flags & 128);
				if (t.flags &= -129, e === null) {
					if (q) {
						if (i.mode === "hidden") return e = fr(t, i), t.lanes = 536870912, e.memoizedState = {
							baseLanes: 0,
							cachePool: null
						}, ur(null, e);
						if (Et(t), (e = hu) ? (e = Rc(e, _u), e !== null && (t.memoizedState = {
							dehydrated: e,
							treeContext: su === null ? null : {
								id: cu,
								overflow: lu
							},
							retryLane: 536870912,
							hydrationErrors: null
						}, n = mo(e), n.return = t, t.child = n, mu = t, hu = null)) : e = null, e === null) throw A(t);
						return t.lanes = 536870912, null;
					}
					return fr(t, i);
				}
				var o = e.memoizedState;
				if (o !== null) {
					var s = o.dehydrated;
					if (Et(t), a) {
						if (t.flags & 256) t.flags &= -257, t = pr(e, t, n);
						else if (t.memoizedState !== null) t.child = e.child, t.flags |= 128, t = null;
						else throw Error(r(558));
					} else if (_d || Ee(e, t, n, !1), a = (n & e.childLanes) !== 0, _d || a) {
						if ($u.current === null) {
							if (i = Kd, i !== null && (s = E(i, n), s !== 0 && s !== o.retryLane)) throw o.retryLane = s, lt(e, s), Sa(i, e, s), gd;
							Pa();
						}
						t = pr(e, t, n);
					} else e = o.treeContext, ls && (hu = Nc(s), mu = t, q = !0, gu = null, _u = !1, e !== null && pe(t, e)), t = fr(t, i), t.flags |= 134221824;
					return t;
				}
				return e = co(e.child, {
					mode: i.mode,
					children: i.children
				}), e.ref = t.ref, t.child = e, e.return = t, e;
			}
			function hr(e, t) {
				var n = t.ref;
				if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
				else {
					if (typeof n != "function" && typeof n != "object") throw Error(r(284));
					(e === null || e.ref !== n) && (t.flags |= 4194816);
				}
			}
			function gr(e, t, n, r, i) {
				return Oe(t), n = Ft(e, t, n, r, void 0, i), r = Rt(), e !== null && !_d ? (zt(e, t, i), Nr(e, t, i)) : (q && r && de(t), t.flags |= 1, ar(e, t, n, i), t.child);
			}
			function _r(e, t, n, r, i, a) {
				return Oe(t), t.updateQueue = null, n = I(t, r, n, i), It(e), r = Rt(), e !== null && !_d ? (zt(e, t, a), Nr(e, t, a)) : (q && r && de(t), t.flags |= 1, ar(e, t, n, a), t.child);
			}
			function vr(e, t, n, r, i) {
				if (Oe(t), t.stateNode === null) {
					var a = Dl, o = n.contextType;
					typeof o == "object" && o && (a = N(o)), a = new n(r, a), t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, a.updater = hd, t.stateNode = a, a._reactInternals = t, a = t.stateNode, a.props = r, a.state = t.memoizedState, a.refs = {}, ft(t), o = n.contextType, a.context = typeof o == "object" && o ? N(o) : Dl, a.state = t.memoizedState, o = n.getDerivedStateFromProps, typeof o == "function" && (Yn(t, n, o, r), a.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function" || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (o = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), o !== a.state && hd.enqueueReplaceState(a, a.state, null), yt(t, r, a, i), vt(), a.state = t.memoizedState), typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !0;
				} else if (e === null) {
					a = t.stateNode;
					var s = t.memoizedProps, c = Qn(n, s);
					a.props = c;
					var l = a.context, u = n.contextType;
					o = Dl, typeof u == "object" && u && (o = N(u));
					var d = n.getDerivedStateFromProps;
					u = typeof d == "function" || typeof a.getSnapshotBeforeUpdate == "function", s = t.pendingProps !== s, u || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s || l !== o) && Zn(t, a, r, o), Zu = !1;
					var f = t.memoizedState;
					a.state = f, yt(t, r, a, i), vt(), l = t.memoizedState, s || f !== l || Zu ? (typeof d == "function" && (Yn(t, n, d, r), l = t.memoizedState), (c = Zu || Xn(t, n, c, r, f, l, o)) ? (u || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), a.props = r, a.state = l, a.context = o, r = c) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
				} else {
					a = t.stateNode, pt(e, t), o = t.memoizedProps, u = Qn(n, o), a.props = u, d = t.pendingProps, f = a.context, l = n.contextType, c = Dl, typeof l == "object" && l && (c = N(l)), s = n.getDerivedStateFromProps, (l = typeof s == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (o !== d || f !== c) && Zn(t, a, r, c), Zu = !1, f = t.memoizedState, a.state = f, yt(t, r, a, i), vt();
					var p = t.memoizedState;
					o !== d || f !== p || Zu || e !== null && e.dependencies !== null && De(e.dependencies) ? (typeof s == "function" && (Yn(t, n, s, r), p = t.memoizedState), (u = Zu || Xn(t, n, u, r, f, p, c) || e !== null && e.dependencies !== null && De(e.dependencies)) ? (l || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, p, c), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, p, c)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = p), a.props = r, a.state = p, a.context = c, r = u) : (typeof a.componentDidUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1);
				}
				return a = r, hr(e, t), r = !!(t.flags & 128), a || r ? (a = t.stateNode, n = r && typeof n.getDerivedStateFromError != "function" ? null : a.render(), t.flags |= 1, e !== null && r ? (t.child = Ku(t, e.child, null, i), t.child = Ku(t, null, n, i)) : ar(e, t, n, i), t.memoizedState = a.state, e = t.child) : e = Nr(e, t, i), e;
			}
			function yr(e, t, n, r) {
				return xe(), t.flags |= 256, ar(e, t, n, r), t.child;
			}
			function br(e) {
				return {
					baseLanes: e,
					cachePool: Ye()
				};
			}
			function xr(e, t, n) {
				return e = e === null ? 0 : e.childLanes & ~n, t && (e |= af), e;
			}
			function Sr(e, t, n) {
				var r = t.pendingProps, i = !1, a = !!(t.flags & 128), o;
				if ((o = a) || (o = e !== null && e.memoizedState === null ? !1 : !!(ed.current & 2)), o && (i = !0, t.flags &= -129), o = !!(t.flags & 32), t.flags &= -33, e === null) {
					if (q) {
						if (i ? Tt(t) : Ot(), (e = hu) ? (e = zc(e, _u), e !== null && (t.memoizedState = {
							dehydrated: e,
							treeContext: su === null ? null : {
								id: cu,
								overflow: lu
							},
							retryLane: 536870912,
							hydrationErrors: null
						}, n = mo(e), n.return = t, t.child = n, mu = t, hu = null)) : e = null, e === null) throw A(t);
						return t.lanes = wc(e) ? 32 : 536870912, null;
					}
					return a = r.children, r = r.fallback, i ? (Ot(), i = t.mode, a = wr({
						mode: "hidden",
						children: a
					}, i), r = fo(r, i, n, null), a.return = t, r.return = t, a.sibling = r, t.child = a, r = t.child, r.memoizedState = br(n), r.childLanes = xr(e, o, n), t.memoizedState = vd, ur(null, r)) : (Tt(t), Cr(t, a));
				}
				var s = e.memoizedState;
				if (s !== null) {
					var c = s.dehydrated;
					if (c !== null) return Er(e, t, a, o, r, c, s, n);
				}
				return i ? (Ot(), i = r.fallback, a = t.mode, s = e.child, c = s.sibling, r = co(s, {
					mode: "hidden",
					children: r.children
				}), r.subtreeFlags = s.subtreeFlags & 1206910976, c === null ? (i = fo(i, a, n, null), i.flags |= 2) : i = co(c, i), i.return = t, r.return = t, r.sibling = i, t.child = r, ur(null, r), r = t.child, i = e.child.memoizedState, i === null ? i = br(n) : (a = i.cachePool, a === null ? a = Ye() : (s = ss ? Tu._currentValue : Tu._currentValue2, a = a.parent === s ? a : {
					parent: s,
					pool: s
				}), i = {
					baseLanes: i.baseLanes | n,
					cachePool: a
				}), r.memoizedState = i, r.childLanes = xr(e, o, n), t.memoizedState = vd, ur(e.child, r)) : (Tt(t), n = e.child, e = n.sibling, n = co(n, {
					mode: "visible",
					children: r.children
				}), n.return = t, n.sibling = null, e !== null && (o = t.deletions, o === null ? (t.deletions = [e], t.flags |= 16) : o.push(e)), t.child = n, t.memoizedState = null, n);
			}
			function Cr(e, t) {
				return t = wr({
					mode: "visible",
					children: t
				}, e.mode), t.return = e, e.child = t;
			}
			function wr(e, n) {
				return e = t(22, e, null, n), e.lanes = 0, e;
			}
			function Tr(e, t, n) {
				return Ku(t, e.child, null, n), e = Cr(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
			}
			function Er(e, t, n, i, a, o, s, c) {
				if (n) return t.flags & 256 ? (Tt(t), t.flags &= -257, Tr(e, t, c)) : t.memoizedState === null ? (Ot(), o = a.fallback, s = t.mode, a = wr({
					mode: "visible",
					children: a.children
				}, s), o = fo(o, s, c, null), o.flags |= 2, a.return = t, o.return = t, a.sibling = o, t.child = a, Ku(t, e.child, null, c), a = t.child, a.memoizedState = br(c), a.childLanes = xr(e, i, c), t.memoizedState = vd, ur(null, a)) : (Ot(), t.child = e.child, t.flags |= 128, null);
				if (Tt(t), wc(o)) return i = Tc(o).digest, i !== "" && (a = Error(r(419)), a.stack = "", a.digest = i, Ce({
					value: a,
					source: null,
					stack: null
				})), Tr(e, t, c);
				if (_d || Ee(e, t, c, !1), i = (c & e.childLanes) !== 0, _d || i) {
					if ($u.current !== null) return Tr(e, t, c);
					if (i = Kd, i !== null && (a = E(i, c), a !== 0 && a !== s.retryLane)) throw s.retryLane = a, lt(e, a), Sa(i, e, a), gd;
					return Cc(o) || Pa(), Tr(e, t, c);
				}
				return Cc(o) ? (t.flags |= 192, t.child = e.child, null) : (e = s.treeContext, ls && (hu = Pc(o), mu = t, q = !0, gu = null, _u = !1, e !== null && pe(t, e)), t = Cr(t, a.children), t.flags |= 134221824, t);
			}
			function Dr(e, t, n) {
				e.lanes |= t;
				var r = e.alternate;
				r !== null && (r.lanes |= t), we(e.return, t, n);
			}
			function Or(e) {
				for (var t = null; e !== null;) {
					var n = e.alternate;
					n !== null && Mt(n) === null && (t = e), e = e.sibling;
				}
				return t;
			}
			function kr(e, t, n, r, i, a) {
				var o = e.memoizedState;
				o === null ? e.memoizedState = {
					isBackwards: t,
					rendering: null,
					renderingStartTime: 0,
					last: r,
					tail: n,
					tailMode: i,
					treeForkCount: a
				} : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i, o.treeForkCount = a);
			}
			function Ar(e) {
				var t = e.child;
				for (e.child = null; t !== null;) {
					var n = t.sibling;
					t.sibling = e.child, e.child = t, t = n;
				}
			}
			function jr(e, t, n) {
				var r = t.pendingProps, i = r.revealOrder, a = r.tail;
				r = r.children;
				var o = ed.current;
				if (t.flags & 128) return At(t, o), null;
				var s = !!(o & 2);
				if (s ? (o = o & 1 | 2, t.flags |= 128) : o &= 1, At(t, o), i === "backwards" && e !== null ? (Ar(e), ar(e, t, r, n), Ar(e)) : ar(e, t, r, n), r = q ? iu : 0, !s && e !== null && e.flags & 128) e: for (e = t.child; e !== null;) {
					if (e.tag === 13) e.memoizedState !== null && Dr(e, n, t);
					else if (e.tag === 19) Dr(e, n, t);
					else if (e.child !== null) {
						e.child.return = e, e = e.child;
						continue;
					}
					if (e === t) break e;
					for (; e.sibling === null;) {
						if (e.return === null || e.return === t) break e;
						e = e.return;
					}
					e.sibling.return = e.return, e = e.sibling;
				}
				switch (i) {
					case "backwards":
						n = Or(t.child), n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null, Ar(t)), kr(t, !0, i, null, a, r);
						break;
					case "unstable_legacy-backwards":
						for (n = null, i = t.child, t.child = null; i !== null;) {
							if (e = i.alternate, e !== null && Mt(e) === null) {
								t.child = i;
								break;
							}
							e = i.sibling, i.sibling = n, n = i, i = e;
						}
						kr(t, !0, n, null, a, r);
						break;
					case "together":
						kr(t, !1, null, null, void 0, r);
						break;
					case "independent":
						t.memoizedState = null;
						break;
					default: n = Or(t.child), n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), kr(t, !1, i, n, a, r);
				}
				return t.child;
			}
			function Mr(e, t, n) {
				var r = t.pendingProps;
				return j(t, t.type, r.value), ar(e, t, r.children, n), t.child;
			}
			function Nr(e, t, n) {
				if (e !== null && (t.dependencies = e.dependencies), tf |= t.lanes, (n & t.childLanes) === 0) {
					if (e !== null) {
						if (Ee(e, t, n, !1), (n & t.childLanes) === 0) return null;
					} else return null;
				}
				if (e !== null && t.child !== e.child) throw Error(r(153));
				if (t.child !== null) {
					for (e = t.child, n = co(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = co(e, e.pendingProps), n.return = t;
					n.sibling = null;
				}
				return t.child;
			}
			function Pr(e, t) {
				return (e.lanes & t) !== 0 || (e = e.dependencies, !!(e !== null && De(e)));
			}
			function Fr(e, t, n) {
				switch (t.tag) {
					case 3:
						me(t, t.stateNode.containerInfo), j(t, Tu, e.memoizedState.cache), xe();
						break;
					case 27:
					case 5:
						ge(t);
						break;
					case 4:
						me(t, t.stateNode.containerInfo);
						break;
					case 10:
						j(t, t.type, t.memoizedProps.value);
						break;
					case 31:
						if (t.memoizedState !== null) return t.flags |= 128, Et(t), null;
						break;
					case 13:
						var r = t.memoizedState;
						if (r !== null) {
							if (r.dehydrated !== null) return Tt(t), t.flags |= 128, null;
							r = Ee(e, t, n, !1);
							var i = t.child.childLanes;
							return r || (n & i) !== 0 ? Sr(e, t, n) : (Tt(t), e = Nr(e, t, n), e === null ? null : e.sibling);
						}
						Tt(t);
						break;
					case 19:
						if (t.flags & 128) return jr(e, t, n);
						if (i = !!(e.flags & 128), r = (n & t.childLanes) !== 0, r ||= (Ee(e, t, n, !1), (n & t.childLanes) !== 0), i) {
							if (r) return jr(e, t, n);
							t.flags |= 128;
						}
						if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), At(t, ed.current), r) break;
						return null;
					case 22: return t.lanes = 0, lr(e, t, n, t.pendingProps);
					case 24: j(t, Tu, e.memoizedState.cache);
				}
				return Nr(e, t, n);
			}
			function Ir(e, t, n) {
				if (e !== null) {
					if (e.memoizedProps !== t.pendingProps) _d = !0;
					else {
						if (!Pr(e, n) && !(t.flags & 128)) return _d = !1, Fr(e, t, n);
						_d = !!(e.flags & 131072);
					}
				} else _d = !1, q && t.flags & 1048576 && ue(t, iu, t.index);
				switch (t.lanes = 0, t.tag) {
					case 16:
						e: {
							var i = t.pendingProps;
							if (e = $e(t.elementType), t.type = e, typeof e == "function") so(e) ? (i = Qn(e, i), t.tag = 1, t = vr(null, t, e, i, n)) : (t.tag = 0, t = gr(null, t, e, i, n));
							else {
								if (e != null) {
									var a = e.$$typeof;
									if (a === Po) {
										t.tag = 11, t = or(null, t, e, i, n);
										break e;
									}
									if (a === Lo) {
										t.tag = 14, t = sr(null, t, e, i, n);
										break e;
									}
									if (a === No) {
										t.tag = 10, t.type = e, t = Mr(null, t, n);
										break e;
									}
								}
								throw t = u(e) || e, Error(r(306, t, ""));
							}
						}
						return t;
					case 0: return gr(e, t, t.type, t.pendingProps, n);
					case 1: return i = t.type, a = Qn(i, t.pendingProps), vr(e, t, i, a, n);
					case 3:
						e: {
							if (me(t, t.stateNode.containerInfo), e === null) throw Error(r(387));
							var o = t.pendingProps;
							a = t.memoizedState, i = a.element, pt(e, t), yt(t, o, null, n);
							var s = t.memoizedState;
							if (o = s.cache, j(t, Tu, o), o !== a.cache && Te(t, [Tu], n, !0), vt(), o = s.element, ls && a.isDehydrated) {
								if (a = {
									element: o,
									isDehydrated: !1,
									cache: s.cache
								}, t.updateQueue.baseState = a, t.memoizedState = a, t.flags & 256) {
									t = yr(e, t, o, n);
									break e;
								}
								if (o !== i) {
									i = ce(Error(r(424)), t), Ce(i), t = yr(e, t, o, n);
									break e;
								}
								for (ls && (hu = Mc(t.stateNode.containerInfo), mu = t, q = !0, gu = null, _u = !0), n = qu(t, null, o, n), t.child = n; n;) n.flags = n.flags & -3 | 134221824, n = n.sibling;
							} else {
								if (xe(), o === i) {
									t = Nr(e, t, n);
									break e;
								}
								ar(e, t, o, n);
							}
							t = t.child;
						}
						return t;
					case 26: if (al) return hr(e, t), e === null ? (n = cl(t.type, null, t.pendingProps, null)) ? t.memoizedState = n : q || (t.stateNode = ml(t.type, t.pendingProps, fu.current, t)) : t.memoizedState = cl(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
					case 27: if (yl) return ge(t), e === null && yl && q && (i = t.stateNode = bl(t.type, t.pendingProps, fu.current, uu.current, !1), mu = t, _u = !0, hu = Fc(t.type, i, hu)), ar(e, t, t.pendingProps.children, n), hr(e, t), e === null && (t.flags |= 4194304), t.child;
					case 5: return e === null && q && (rl(t.type, t.pendingProps, uu.current), (a = i = hu) && (i = Ic(i, t.type, t.pendingProps, _u), i === null ? a = !1 : (t.stateNode = i, mu = t, hu = jc(i), _u = !1, a = !0)), a || A(t)), ge(t), a = t.type, o = t.pendingProps, s = e === null ? null : e.memoizedProps, i = o.children, ns(a, o) ? i = null : s !== null && ns(a, s) && (t.flags |= 32), t.memoizedState !== null && (a = Ft(e, t, Lt, null, null, n), ss ? Ts._currentValue = a : Ts._currentValue2 = a), hr(e, t), ar(e, t, i, n), t.child;
					case 6: return e === null && q && (il(t.pendingProps, uu.current), (e = n = hu) && (n = Lc(n, t.pendingProps, _u), n === null ? e = !1 : (t.stateNode = n, mu = t, hu = null, e = !0)), e || A(t)), null;
					case 13: return Sr(e, t, n);
					case 4: return me(t, t.stateNode.containerInfo), i = t.pendingProps, e === null ? t.child = Ku(t, null, i, n) : ar(e, t, i, n), t.child;
					case 11: return or(e, t, t.type, t.pendingProps, n);
					case 7: return i = t.pendingProps, hr(e, t), ar(e, t, i, n), t.child;
					case 8: return ar(e, t, t.pendingProps.children, n), t.child;
					case 12: return ar(e, t, t.pendingProps.children, n), t.child;
					case 10: return Mr(e, t, n);
					case 9: return a = t.type._context, i = t.pendingProps.children, Oe(t), a = N(a), i = i(a), t.flags |= 1, ar(e, t, i, n), t.child;
					case 14: return sr(e, t, t.type, t.pendingProps, n);
					case 15: return cr(e, t, t.type, t.pendingProps, n);
					case 19: return jr(e, t, n);
					case 31: return mr(e, t, n);
					case 22: return lr(e, t, n, t.pendingProps);
					case 24: return Oe(t), i = N(Tu), e === null ? (a = qe(), a === null && (a = Kd, o = je(), a.pooledCache = o, o.refCount++, o !== null && (a.pooledCacheLanes |= n), a = o), t.memoizedState = {
						parent: i,
						cache: a
					}, ft(t), j(t, Tu, a)) : ((e.lanes & n) !== 0 && (pt(e, t), yt(t, null, null, n), vt()), a = e.memoizedState, o = t.memoizedState, a.parent === i ? (i = o.cache, j(t, Tu, i), i !== a.cache && Te(t, [Tu], n, !0)) : (a = {
						parent: i,
						cache: i
					}, t.memoizedState = a, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = a), j(t, Tu, i))), ar(e, t, t.pendingProps.children, n), t.child;
					case 30: return t.stateNode === null && (t.stateNode = {
						autoName: null,
						paired: null,
						clones: null,
						ref: null
					}), i = t.pendingProps, i.name != null && i.name !== "auto" ? t.flags |= e === null ? 18882560 : 18874368 : q && de(t), e !== null && e.memoizedProps.name !== i.name ? t.flags |= 4194816 : hr(e, t), ar(e, t, i.children, n), t.child;
					case 29: throw t.pendingProps;
				}
				throw Error(r(156, t.tag));
			}
			function Lr(e) {
				e.flags |= 4;
			}
			function Rr(e) {
				G && (e.flags |= 8);
			}
			function zr(e, t) {
				if (e !== null && e.child === t.child) return !1;
				if (t.flags & 16) return !0;
				for (e = t.child; e !== null;) {
					if (e.flags & 8218 || e.subtreeFlags & 8218) return !0;
					e = e.sibling;
				}
				return !1;
			}
			function Br(e, t, n, r) {
				if (cs) for (n = t.child; n !== null;) {
					if (n.tag === 5 || n.tag === 6) es(e, n.stateNode);
					else if (!(n.tag === 4 || yl && n.tag === 27) && n.child !== null) {
						n.child.return = n, n = n.child;
						continue;
					}
					if (n === t) break;
					for (; n.sibling === null;) {
						if (n.return === null || n.return === t) return;
						n = n.return;
					}
					n.sibling.return = n.return, n = n.sibling;
				}
				else if (G) for (var i = t.child; i !== null;) {
					if (i.tag === 5) {
						var a = i.stateNode;
						n && r && (a = xc(a, i.type, i.memoizedProps)), es(e, a);
					} else if (i.tag === 6) a = i.stateNode, n && r && (a = Sc(a, i.memoizedProps)), es(e, a);
					else if (i.tag !== 4) {
						if (i.tag === 22 && i.memoizedState !== null) a = i.child, a !== null && (a.return = i), Br(e, i, !0, !0);
						else if (i.child !== null) {
							i.child.return = i, i = i.child;
							continue;
						}
					}
					if (i === t) break;
					for (; i.sibling === null;) {
						if (i.return === null || i.return === t) return;
						i = i.return;
					}
					i.sibling.return = i.return, i = i.sibling;
				}
			}
			function Vr(e, t, n, r) {
				var i = !1;
				if (G) for (var a = t.child; a !== null;) {
					if (a.tag === 5) {
						var o = a.stateNode;
						n && r && (o = xc(o, a.type, a.memoizedProps)), vc(e, o);
					} else if (a.tag === 6) o = a.stateNode, n && r && (o = Sc(o, a.memoizedProps)), vc(e, o);
					else if (a.tag !== 4) {
						if (a.tag === 22 && a.memoizedState !== null) i = a.child, i !== null && (i.return = a), Vr(e, a, !0, !0), i = !0;
						else if (a.child !== null) {
							a.child.return = a, a = a.child;
							continue;
						}
					}
					if (a === t) break;
					for (; a.sibling === null;) {
						if (a.return === null || a.return === t) return i;
						a = a.return;
					}
					a.sibling.return = a.return, a = a.sibling;
				}
				return i;
			}
			function Hr(e, t) {
				if (G && zr(e, t)) {
					e = t.stateNode;
					var n = e.containerInfo, r = _c();
					Vr(r, t, !1, !1), e.pendingChildren = r, Lr(t), yc(n, r);
				}
			}
			function Ur(e, t, n, r) {
				if (cs) e.memoizedProps !== r && Lr(t);
				else if (G) {
					var i = e.stateNode, a = e.memoizedProps;
					if ((e = zr(e, t)) || a !== r) {
						var o = uu.current;
						a = gc(i, n, a, r, !e, null), a === i ? t.stateNode = i : (Rr(t), ts(a, n, r, o) && Lr(t), t.stateNode = a, e && Br(a, t, !1, !1));
					} else t.stateNode = i;
				}
			}
			function Wr(e, t, n, r, i) {
				if (e.mode & 32 && (n === null ? gs(t, r) : _s(t, n, r))) {
					if (e.flags |= 16777216, (i & 335544128) === i || vs(t, r)) {
						if (ys(e.stateNode, t, r)) e.flags |= 8192;
						else if (ja()) e.flags |= 8192;
						else throw Uu = Hu, Bu;
					}
				} else e.flags &= -16777217;
			}
			function Gr(e, t) {
				if (gl(t)) {
					if (e.flags |= 16777216, !_l(t)) {
						if (ja()) e.flags |= 8192;
						else throw Uu = Hu, Bu;
					}
				} else e.flags &= -16777217;
			}
			function Kr(e, t) {
				t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag === 22 ? 536870912 : b(), e.lanes |= t, of |= t);
			}
			function qr(e, t) {
				if (!q) switch (e.tailMode) {
					case "visible": break;
					case "collapsed":
						for (var n = e.tail, r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
						r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
						break;
					default:
						for (t = e.tail, n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
						n === null ? e.tail = null : n.sibling = null;
				}
			}
			function Jr(e) {
				var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
				if (t) for (var i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 1206910976, r |= i.flags & 1206910976, i.return = e, i = i.sibling;
				else for (i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
				return e.subtreeFlags |= r, e.childLanes = n, t;
			}
			function Yr(e, t, n) {
				var i = t.pendingProps;
				switch (fe(t), t.tag) {
					case 16:
					case 15:
					case 0:
					case 11:
					case 7:
					case 8:
					case 12:
					case 9:
					case 14: return Jr(t), null;
					case 1: return Jr(t), null;
					case 3: return n = t.stateNode, i = null, e !== null && (i = e.memoizedState.cache), t.memoizedState.cache !== i && (t.flags |= 2048), M(Tu), he(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (be(t) ? Lr(t) : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Se())), Hr(e, t), Jr(t), null;
					case 26: if (al) {
						var a = t.type, o = t.memoizedState;
						return e === null ? (Lr(t), o === null ? (Jr(t), Wr(t, a, null, i, n)) : (Jr(t), Gr(t, o))) : o ? o === e.memoizedState ? (Jr(t), t.flags &= -16777217) : (Lr(t), Jr(t), Gr(t, o)) : (o = e.memoizedProps, cs ? o !== i && Lr(t) : Ur(e, t, a, i), Jr(t), Wr(t, a, o, i, n)), null;
					}
					case 27: if (yl) {
						if (_e(t), n = fu.current, a = t.type, e !== null && t.stateNode != null) cs ? e.memoizedProps !== i && Lr(t) : Ur(e, t, a, i);
						else {
							if (!i) {
								if (t.stateNode === null) throw Error(r(166));
								return Jr(t), t.subtreeFlags &= -33554433, null;
							}
							e = uu.current, be(t) ? ve(t, e) : (e = bl(a, i, n, e, !0), t.stateNode = e, Lr(t));
						}
						return Jr(t), t.subtreeFlags &= -33554433, null;
					}
					case 5:
						if (_e(t), a = t.type, e !== null && t.stateNode != null) Ur(e, t, a, i);
						else {
							if (!i) {
								if (t.stateNode === null) throw Error(r(166));
								return Jr(t), t.subtreeFlags &= -33554433, null;
							}
							if (o = uu.current, be(t)) ve(t, o), Xc(t.stateNode, a, i, o) && (t.flags |= 64);
							else {
								var s = $o(a, i, fu.current, o, t);
								Rr(t), Br(s, t, !1, !1), t.stateNode = s, ts(s, a, i, o) && Lr(t);
							}
						}
						return Jr(t), t.subtreeFlags &= -33554433, Wr(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n), null;
					case 6:
						if (e && t.stateNode != null) n = e.memoizedProps, cs ? n !== i && Lr(t) : G && (n === i ? t.stateNode = e.stateNode : (e = fu.current, n = uu.current, Rr(t), t.stateNode = rs(i, e, n, t)));
						else {
							if (typeof i != "string" && t.stateNode === null) throw Error(r(166));
							if (e = fu.current, n = uu.current, be(t)) {
								if (!ls) throw Error(r(176));
								if (e = t.stateNode, n = t.memoizedProps, i = null, a = mu, a !== null) switch (a.tag) {
									case 27:
									case 5: i = a.memoizedProps;
								}
								Vc(e, n, t, i) || A(t, !0);
							} else Rr(t), t.stateNode = rs(i, e, n, t);
						}
						return Jr(t), null;
					case 31:
						if (n = t.memoizedState, e === null || e.memoizedState !== null) {
							if (i = be(t), n !== null) {
								if (e === null) {
									if (!i) throw Error(r(318));
									if (!ls) throw Error(r(556));
									if (e = t.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(r(557));
									Hc(e, t);
								} else xe(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
								Jr(t), e = !1;
							} else n = Se(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), e = !0;
							if (!e) return t.flags & 256 ? (kt(t), t) : (kt(t), null);
							if (t.flags & 128) throw Error(r(558));
						}
						return Jr(t), null;
					case 13:
						if (i = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
							if (a = be(t), i !== null && i.dehydrated !== null) {
								if (e === null) {
									if (!a) throw Error(r(318));
									if (!ls) throw Error(r(344));
									if (a = t.memoizedState, a = a === null ? null : a.dehydrated, !a) throw Error(r(317));
									Uc(a, t);
								} else xe(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
								Jr(t), a = !1;
							} else a = Se(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), a = !0;
							if (!a) return t.flags & 256 ? (kt(t), t) : (kt(t), null);
						}
						return kt(t), t.flags & 128 ? (t.lanes = n, t) : (n = i !== null, e = e !== null && e.memoizedState !== null, n && (i = t.child, a = null, i.alternate !== null && i.alternate.memoizedState !== null && i.alternate.memoizedState.cachePool !== null && (a = i.alternate.memoizedState.cachePool.pool), o = null, i.memoizedState !== null && i.memoizedState.cachePool !== null && (o = i.memoizedState.cachePool.pool), o !== a && (i.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), Kr(t, t.updateQueue), Jr(t), null);
					case 4: return he(), Hr(e, t), e === null && ds(t.stateNode.containerInfo), t.flags |= 67108864, Jr(t), null;
					case 10: return M(t.type), Jr(t), null;
					case 19:
						if (jt(t), i = t.memoizedState, i === null) return Jr(t), null;
						if (a = !!(t.flags & 128), o = i.rendering, o === null) {
							if (a) qr(i, !1);
							else {
								if (ef !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null;) {
									if (o = Mt(e), o !== null) {
										for (t.flags |= 128, qr(i, !1), e = o.updateQueue, t.updateQueue = e, Kr(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null;) lo(n, e), n = n.sibling;
										return At(t, ed.current & 1 | 2), q && le(t, i.treeForkCount), t.child;
									}
									e = e.sibling;
								}
								i.tail !== null && Rl() > ff && (t.flags |= 128, a = !0, qr(i, !1), t.lanes = 4194304);
							}
						} else {
							if (!a) {
								if (e = Mt(o), e !== null) {
									if (t.flags |= 128, a = !0, e = e.updateQueue, t.updateQueue = e, Kr(t, e), qr(i, !0), i.tail === null && i.tailMode !== "collapsed" && i.tailMode !== "visible" && !o.alternate && !q) return Jr(t), null;
								} else 2 * Rl() - i.renderingStartTime > ff && n !== 536870912 && (t.flags |= 128, a = !0, qr(i, !1), t.lanes = 4194304);
							}
							i.isBackwards ? (o.sibling = t.child, t.child = o) : (e = i.last, e === null ? t.child = o : e.sibling = o, i.last = o);
						}
						if (i.tail !== null) {
							e = i.tail;
							e: {
								for (n = e; n !== null;) {
									if (n.alternate !== null) {
										n = !1;
										break e;
									}
									n = n.sibling;
								}
								n = !0;
							}
							return i.rendering = e, i.tail = e.sibling, i.renderingStartTime = Rl(), e.sibling = null, o = ed.current, o = a ? o & 1 | 2 : o & 1, i.tailMode === "visible" || i.tailMode === "collapsed" || !n || q ? At(t, o) : (n = o, p(Y, t), p(ed, n), X === null && (X = t)), q && le(t, i.treeForkCount), e;
						}
						return Jr(t), null;
					case 22:
					case 23: return kt(t), wt(), i = t.memoizedState !== null, e === null ? i && (t.flags |= 8192) : e.memoizedState !== null !== i && (t.flags |= 8192), i ? n & 536870912 && !(t.flags & 128) && (Jr(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Jr(t), n = t.updateQueue, n !== null && Kr(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), i = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (i = t.memoizedState.cachePool.pool), i !== n && (t.flags |= 2048), e !== null && f(Ru), null;
					case 24: return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), M(Tu), Jr(t), null;
					case 25: return null;
					case 30: return t.flags |= 33554432, Jr(t), null;
				}
				throw Error(r(156, t.tag));
			}
			function Xr(e, t) {
				switch (fe(t), t.tag) {
					case 1: return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
					case 3: return M(Tu), he(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
					case 26:
					case 27:
					case 5: return _e(t), null;
					case 31:
						if (t.memoizedState !== null) {
							if (kt(t), t.alternate === null) throw Error(r(340));
							xe();
						}
						return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
					case 13:
						if (kt(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
							if (t.alternate === null) throw Error(r(340));
							xe();
						}
						return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
					case 19: return jt(t), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, e = t.memoizedState, e !== null && (e.rendering = null, e.tail = null), t.flags |= 4, t) : null;
					case 4: return he(), null;
					case 10: return M(t.type), null;
					case 22:
					case 23: return kt(t), wt(), e !== null && f(Ru), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
					case 24: return M(Tu), null;
					case 25: return null;
					default: return null;
				}
			}
			function Zr(e, t) {
				switch (fe(t), t.tag) {
					case 3:
						M(Tu), he();
						break;
					case 26:
					case 27:
					case 5:
						_e(t);
						break;
					case 4:
						he();
						break;
					case 31:
						t.memoizedState !== null && kt(t);
						break;
					case 13:
						kt(t);
						break;
					case 19:
						jt(t);
						break;
					case 10:
						M(t.type);
						break;
					case 22:
					case 23:
						kt(t), wt(), e !== null && f(Ru);
						break;
					case 24: M(Tu);
				}
			}
			function Qr(e, t) {
				try {
					var n = t.updateQueue, r = n === null ? null : n.lastEffect;
					if (r !== null) {
						var i = r.next;
						n = i;
						do {
							if ((n.tag & e) === e) {
								r = void 0;
								var a = n.create, o = n.inst;
								r = a(), o.destroy = r;
							}
							n = n.next;
						} while (n !== i);
					}
				} catch (e) {
					z(t, t.return, e);
				}
			}
			function $r(e, t, n) {
				try {
					var r = t.updateQueue, i = r === null ? null : r.lastEffect;
					if (i !== null) {
						var a = i.next;
						r = a;
						do {
							if ((r.tag & e) === e) {
								var o = r.inst, s = o.destroy;
								if (s !== void 0) {
									o.destroy = void 0, i = t;
									var c = n, l = s;
									try {
										l();
									} catch (e) {
										z(i, c, e);
									}
								}
							}
							r = r.next;
						} while (r !== a);
					}
				} catch (e) {
					z(t, t.return, e);
				}
			}
			function ei(e) {
				var t = e.updateQueue;
				if (t !== null) {
					var n = e.stateNode;
					try {
						xt(t, n);
					} catch (t) {
						z(e, e.return, t);
					}
				}
			}
			function ti(e, t, n) {
				n.props = Qn(e.type, e.memoizedProps), n.state = e.memoizedState;
				try {
					n.componentWillUnmount();
				} catch (n) {
					z(e, t, n);
				}
			}
			function ni(e, t) {
				try {
					var n = e.ref;
					if (n !== null) {
						switch (e.tag) {
							case 26:
							case 27:
							case 5:
								var r = Jo(e.stateNode);
								break;
							case 30:
								var i = e.stateNode, a = ne(e.memoizedProps, i);
								(i.ref === null || i.ref.name !== a) && (i.ref = uc(a)), r = i.ref;
								break;
							case 7:
								e.stateNode === null && (e.stateNode = fc(e)), r = e.stateNode;
								break;
							default: r = e.stateNode;
						}
						typeof n == "function" ? e.refCleanup = n(r) : n.current = r;
					}
				} catch (n) {
					z(e, t, n);
				}
			}
			function ri(e, t) {
				var n = e.ref, r = e.refCleanup;
				if (n !== null) {
					if (typeof r == "function") try {
						r();
					} catch (n) {
						z(e, t, n);
					} finally {
						e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
					}
					else if (typeof n == "function") try {
						n(null);
					} catch (n) {
						z(e, t, n);
					}
					else n.current = null;
				}
			}
			function ii() {
				var e = yd;
				return yd = !1, e;
			}
			function ai(e, t) {
				if ((e.tag === 5 || e.tag === 27 || e.tag === 6) && e.alternate === null && t !== null) for (var n = 0; n < t.length; n++) mc(e.stateNode, t[n]);
			}
			function oi(e) {
				for (var t = e.return; t !== null && (li(t) && mc(e.stateNode, t.stateNode), !ci(t));) t = t.return;
			}
			function si(e) {
				for (var t = e.return; t !== null && (li(t) && hc(e.stateNode, t.stateNode), !ci(t));) t = t.return;
			}
			function ci(e) {
				return e.tag === 5 || e.tag === 3 || (yl ? e.tag === 27 : !1);
			}
			function li(e) {
				return e && e.tag === 7 && e.stateNode !== null;
			}
			function ui(e) {
				var t = e.type, n = e.memoizedProps, r = e.stateNode;
				try {
					Bs(r, t, n, e);
				} catch (t) {
					z(e, e.return, t);
				}
			}
			function di(e, t, n) {
				try {
					Vs(e.stateNode, e.type, n, t, e);
				} catch (t) {
					z(e, e.return, t);
				}
			}
			function fi(e) {
				return e.tag === 5 || e.tag === 3 || (al ? e.tag === 26 : !1) || (yl ? e.tag === 27 && wl(e.type) : !1) || e.tag === 4;
			}
			function pi(e) {
				e: for (;;) {
					for (; e.sibling === null;) {
						if (e.return === null || fi(e.return)) return null;
						e = e.return;
					}
					for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
						if (yl && e.tag === 27 && wl(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
						e.child.return = e, e = e.child;
					}
					if (!(e.flags & 2)) return e.stateNode;
				}
			}
			function mi(e, t, n, r) {
				var i = e.tag;
				if (i === 5 || i === 6) i = e.stateNode, t ? Us(n, i, t) : Rs(n, i), ai(e, r), yd = !0;
				else if (i !== 4 && (yl && i === 27 && (ai(e, r), r = null, wl(e.type) && (n = e.stateNode, t = null)), e = e.child, e !== null)) for (mi(e, t, n, r), e = e.sibling; e !== null;) mi(e, t, n, r), e = e.sibling;
			}
			function hi(e, t, n, r) {
				var i = e.tag;
				if (i === 5 || i === 6) i = e.stateNode, t ? Hs(n, i, t) : Ls(n, i), ai(e, r), yd = !0;
				else if (i !== 4 && (yl && i === 27 && (ai(e, r), r = null, wl(e.type) && (n = e.stateNode)), e = e.child, e !== null)) for (hi(e, t, n, r), e = e.sibling; e !== null;) hi(e, t, n, r), e = e.sibling;
			}
			function gi(e, t) {
				if (e.tag === 5 || yl && e.tag === 27) ai(e, t);
				else if (e.tag !== 4 && (e = e.child, e !== null)) for (gi(e, t), e = e.sibling; e !== null;) gi(e, t), e = e.sibling;
			}
			function _i(e, t, n) {
				e = e.containerInfo;
				try {
					bc(e, n);
				} catch (e) {
					z(t, t.return, e);
				}
			}
			function vi(e) {
				var t = e.stateNode, n = e.memoizedProps;
				try {
					xl(e.type, n, t, e);
				} catch (t) {
					z(e, e.return, t);
				}
			}
			function yi(e) {
				(e.tag === 30 || e.subtreeFlags & 33554432) && (bd = !0);
			}
			function bi() {
				var e = Sd;
				return Sd = null, e;
			}
			function xi(e, t, n, r, i) {
				return Cd = 0, Si(e.child, t, n, r, i);
			}
			function Si(e, t, n, r, i) {
				if (!cs) return !1;
				for (var a = !1; e !== null;) {
					if (e.tag === 5) {
						var o = e.stateNode;
						if (r !== null) {
							var s = nc(o);
							r.push(s), ic(s) && (a = !0);
						} else a || ic(nc(o)) && (a = !0);
						bd = !0, Zs(o, Cd === 0 ? t : t + "_" + Cd, n), Cd++;
					} else (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && i || Si(e.child, t, n, r, i) && (a = !0));
					e = e.sibling;
				}
				return a;
			}
			function Ci(e, t) {
				if (cs) for (; e !== null;) e.tag === 5 ? Qs(e.stateNode, e.memoizedProps) : (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && t || Ci(e.child, t)), e = e.sibling;
			}
			function wi(e) {
				if (e.subtreeFlags & 18874368) for (e = e.child; e !== null;) {
					if ((e.tag !== 22 || e.memoizedState === null) && (wi(e), e.tag === 30 && e.flags & 18874368 && e.stateNode.paired)) {
						var t = e.memoizedProps;
						if (t.name == null || t.name === "auto") throw Error(r(544));
						var n = t.name;
						t = O(t.default, t.share), t !== "none" && (xi(e, n, t, null, !1) || Ci(e.child, !1));
					}
					e = e.sibling;
				}
			}
			function Ti(e, t) {
				if (e.tag === 30) {
					var n = e.stateNode, r = e.memoizedProps, i = ne(r, n), a = O(r.default, n.paired ? r.share : r.enter);
					a === "none" ? wi(e) : xi(e, i, a, null, !1) ? (wi(e), n.paired || t || xa(e, r.onEnter)) : Ci(e.child, !1);
				} else if (e.subtreeFlags & 33554432) for (e = e.child; e !== null;) Ti(e, t), e = e.sibling;
				else wi(e);
			}
			function Ei(e) {
				if (xd !== null && xd.size !== 0) {
					var t = xd;
					if (e.subtreeFlags & 18874368) for (e = e.child; e !== null;) {
						if (e.tag !== 22 || e.memoizedState === null) {
							if (e.tag === 30 && e.flags & 18874368) {
								var n = e.memoizedProps, r = n.name;
								if (r != null && r !== "auto") {
									var i = t.get(r);
									if (i !== void 0) {
										var a = O(n.default, n.share);
										if (a !== "none" && (xi(e, r, a, null, !1) ? (a = e.stateNode, i.paired = a, a.paired = i, xa(e, n.onShare)) : Ci(e.child, !1)), t.delete(r), t.size === 0) break;
									}
								}
							}
							Ei(e);
						}
						e = e.sibling;
					}
				}
			}
			function Di(e) {
				if (e.tag === 30) {
					var t = e.memoizedProps, n = ne(t, e.stateNode), r = xd === null ? void 0 : xd.get(n), i = O(t.default, r === void 0 ? t.exit : t.share);
					i !== "none" && (xi(e, n, i, null, !1) ? r === void 0 ? xa(e, t.onExit) : (i = e.stateNode, r.paired = i, i.paired = r, xd.delete(n), xa(e, t.onShare)) : Ci(e.child, !1)), xd !== null && Ei(e);
				} else if (e.subtreeFlags & 33554432) for (e = e.child; e !== null;) Di(e), e = e.sibling;
				else xd !== null && Ei(e);
			}
			function Oi(e) {
				for (e = e.child; e !== null;) {
					if (e.tag === 30) {
						var t = e.memoizedProps, n = ne(t, e.stateNode);
						t = O(t.default, t.update), e.flags &= -5, t !== "none" && xi(e, n, t, e.memoizedState = [], !1);
					} else e.subtreeFlags & 33554432 && Oi(e);
					e = e.sibling;
				}
			}
			function ki(e) {
				if (e.subtreeFlags & 18874368) for (e = e.child; e !== null;) {
					if (e.tag !== 22 || e.memoizedState === null) {
						if (e.tag === 30 && e.flags & 18874368) {
							var t = e.stateNode;
							t.paired !== null && (t.paired = null, Ci(e.child, !1));
						}
						ki(e);
					}
					e = e.sibling;
				}
			}
			function Ai(e) {
				if (e.tag === 30) e.stateNode.paired = null, Ci(e.child, !1), ki(e);
				else if (e.subtreeFlags & 33554432) for (e = e.child; e !== null;) Ai(e), e = e.sibling;
				else ki(e);
			}
			function ji(e) {
				for (e = e.child; e !== null;) e.tag === 30 ? Ci(e.child, !1) : e.subtreeFlags & 33554432 && ji(e), e = e.sibling;
			}
			function Mi(e, t, n, r, i, a, o) {
				if (!cs) return !1;
				for (var s = !1; t !== null;) {
					if (t.tag === 5) {
						var c = t.stateNode;
						if (a !== null && Cd < a.length) {
							var l = a[Cd], u = nc(c);
							(ic(l) || ic(u)) && (s = !0), !(e.flags & 4) && ac(l, u) && (e.flags |= 4), oc(l, u) && (e.flags |= 32);
						} else e.flags |= 32;
						e.flags & 4 && Zs(c, Cd === 0 ? n : n + "_" + Cd, i), s && e.flags & 4 || (Sd === null && (Sd = []), Sd.push(c, Cd === 0 ? r : r + "_" + Cd, t.memoizedProps)), Cd++;
					} else (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && o ? e.flags |= t.flags & 32 : Mi(e, t.child, n, r, i, a, o) && (s = !0));
					t = t.sibling;
				}
				return s;
			}
			function Ni(e, t) {
				for (e = e.child; e !== null;) {
					if (e.tag === 30) {
						var n = e.memoizedProps, r = e.stateNode, i = ne(n, r), a = O(n.default, n.update);
						if (t) {
							r = r.clones;
							var o = r === null ? null : r.map(rc);
						} else o = e.memoizedState, e.memoizedState = null;
						r = e;
						var s = e.child;
						Cd = 0, i = Mi(r, s, i, i, a, o, !1), e.flags & 4 && i && (t || xa(e, n.onUpdate));
					} else e.subtreeFlags & 33554432 && Ni(e, t);
					e = e.sibling;
				}
			}
			function Pi(e, t, n) {
				for (Zo(e.containerInfo), e = (n & 335544064) === n, kd = t, t = e ? 9270 : 1024; kd !== null;) {
					if (n = kd, e) {
						var r = n.deletions;
						if (r !== null) for (var i = 0; i < r.length; i++) e && Di(r[i]);
					}
					if (n.alternate === null && n.flags & 2) e && yi(n), Fi(e);
					else {
						if (n.tag === 22) {
							if (r = n.alternate, n.memoizedState !== null) {
								r !== null && r.memoizedState === null && e && Di(r), Fi(e);
								continue;
							}
							if (r !== null && r.memoizedState !== null) {
								e && yi(n), Fi(e);
								continue;
							}
						}
						r = n.child, (n.subtreeFlags & t) !== 0 && r !== null ? (r.return = n, kd = r) : (e && Oi(n), Fi(e));
					}
				}
				xd = null;
			}
			function Fi(e) {
				for (; kd !== null;) {
					var t = kd, n = e, i = t.alternate, a = t.flags;
					switch (t.tag) {
						case 0:
						case 11:
						case 15: break;
						case 1:
							if (a & 1024 && i !== null) {
								n = void 0, a = i.memoizedProps, i = i.memoizedState;
								var o = t.stateNode;
								try {
									var s = Qn(t.type, a);
									n = o.getSnapshotBeforeUpdate(s, i), o.__reactInternalSnapshotBeforeUpdate = n;
								} catch (e) {
									z(t, t.return, e);
								}
							}
							break;
						case 3:
							a & 1024 && cs && dc(t.stateNode.containerInfo);
							break;
						case 5:
						case 26:
						case 27:
						case 6:
						case 4:
						case 17: break;
						case 30:
							n && i !== null && (n = ne(i.memoizedProps, i.stateNode), a = t.memoizedProps, a = O(a.default, a.update), a !== "none" && xi(i, n, a, i.memoizedState = [], !0));
							break;
						default: if (a & 1024) throw Error(r(163));
					}
					if (i = t.sibling, i !== null) {
						i.return = t.return, kd = i;
						break;
					}
					kd = t.return;
				}
			}
			function Ii(e, t, n) {
				var r = n.flags;
				switch (n.tag) {
					case 0:
					case 11:
					case 15:
						$i(e, n), r & 4 && Qr(5, n);
						break;
					case 1:
						if ($i(e, n), r & 4) {
							if (e = n.stateNode, t === null) try {
								e.componentDidMount();
							} catch (e) {
								z(n, n.return, e);
							}
							else {
								var i = Qn(n.type, t.memoizedProps);
								t = t.memoizedState;
								try {
									e.componentDidUpdate(i, t, e.__reactInternalSnapshotBeforeUpdate);
								} catch (e) {
									z(n, n.return, e);
								}
							}
						}
						r & 64 && ei(n), r & 512 && ni(n, n.return);
						break;
					case 3:
						if ($i(e, n), r & 64 && (r = n.updateQueue, r !== null)) {
							if (e = null, n.child !== null) switch (n.child.tag) {
								case 27:
								case 5:
									e = Jo(n.child.stateNode);
									break;
								case 1: e = n.child.stateNode;
							}
							try {
								xt(r, e);
							} catch (e) {
								z(n, n.return, e);
							}
						}
						break;
					case 27: yl && t === null && r & 4 && vi(n);
					case 26:
					case 5:
						if ($i(e, n), t === null) {
							if (r & 4) ui(n);
							else if (r & 64) {
								e = n.type, t = n.memoizedProps, i = n.stateNode;
								try {
									Kc(i, e, t, n);
								} catch (e) {
									z(n, n.return, e);
								}
							}
						}
						r & 512 && ni(n, n.return);
						break;
					case 12:
						$i(e, n);
						break;
					case 31:
						$i(e, n), r & 4 && Ui(e, n);
						break;
					case 13:
						$i(e, n), r & 4 && Wi(e, n), r & 64 && (r = n.memoizedState, r !== null && (r = r.dehydrated, r !== null && (n = ro.bind(null, n), Ec(r, n))));
						break;
					case 22:
						if (r = n.memoizedState !== null || wd, !r) {
							var a = t !== null && t.memoizedState !== null || Td;
							t = wd, i = Td, wd = r, (Td = a) && !i ? (r = yl ? 2 : 0, n.subtreeFlags & 8772 && (r |= 1), ta(e, n, r)) : $i(e, n), wd = t, Td = i;
						}
						break;
					case 30:
						$i(e, n), r & 512 && ni(n, n.return);
						break;
					case 7: r & 512 && ni(n, n.return);
					default: $i(e, n);
				}
			}
			function Li(e, t) {
				if (cs) for (e = e.child; e !== null;) Ri(e, t), e = e.sibling;
			}
			function Ri(e, t) {
				if (cs) switch (e.tag) {
					case 5:
					case 26:
						try {
							var n = e.stateNode;
							t ? qs(n) : Ys(e.stateNode, e.memoizedProps);
						} catch (t) {
							z(e, e.return, t);
						}
						zi(e, t);
						break;
					case 6:
						try {
							var r = e.stateNode;
							t ? Js(r) : Xs(r, e.memoizedProps), yd = !0;
						} catch (t) {
							z(e, e.return, t);
						}
						break;
					case 18:
						try {
							var i = e.stateNode;
							t ? el(i) : tl(e.stateNode);
						} catch (t) {
							z(e, e.return, t);
						}
						break;
					case 22:
					case 23:
						e.memoizedState === null && Li(e, t);
						break;
					default: Li(e, t);
				}
			}
			function zi(e, t) {
				if (cs && e.subtreeFlags & 67108864) for (e = e.child; e !== null;) {
					var n = e, r = t;
					if (cs) switch (n.tag) {
						case 4:
							Ri(n, r);
							break;
						case 22:
							n.memoizedState === null && zi(n, r);
							break;
						default: zi(n, r);
					}
					e = e.sibling;
				}
			}
			function Bi(e) {
				var t = e.alternate;
				t !== null && (e.alternate = null, Bi(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && hs(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
			}
			function Vi(e, t, n) {
				for (n = n.child; n !== null;) Hi(e, t, n), n = n.sibling;
			}
			function Hi(e, t, n) {
				if (Kl && typeof Kl.onCommitFiberUnmount == "function") try {
					Kl.onCommitFiberUnmount(Gl, n);
				} catch {}
				switch (n.tag) {
					case 26: if (al) {
						Td || ri(n, t), Vi(e, t, n), n.memoizedState ? ul(n.memoizedState) : n.stateNode && (Td || pl(n.stateNode));
						break;
					}
					case 27: if (yl) {
						Td || ri(n, t), si(n);
						var r = Pd, i = Fd;
						wl(n.type) && (Pd = n.stateNode, Fd = !1), Vi(e, t, n), Sl(n.stateNode, n.type, n.memoizedProps), Pd = r, Fd = i;
						break;
					}
					case 5: Td || ri(n, t), si(n);
					case 6:
						if (n.tag === 6 && si(n), cs) {
							if (r = Pd, i = Fd, Pd = null, Vi(e, t, n), Pd = r, Fd = i, Pd !== null) {
								if (Fd) try {
									Gs(Pd, n.stateNode), yd = !0;
								} catch (e) {
									z(n, t, e);
								}
								else try {
									Ws(Pd, n.stateNode), yd = !0;
								} catch (e) {
									z(n, t, e);
								}
							}
						} else Vi(e, t, n);
						break;
					case 18:
						cs && Pd !== null && (Fd ? $c(Pd, n.stateNode) : Qc(Pd, n.stateNode));
						break;
					case 4:
						cs ? (r = Pd, i = Fd, Pd = n.stateNode.containerInfo, Fd = !0, Vi(e, t, n), Pd = r, Fd = i) : (G && _i(n.stateNode, n, _c()), Vi(e, t, n));
						break;
					case 0:
					case 11:
					case 14:
					case 15:
						$r(2, n, t), Td || $r(4, n, t), Vi(e, t, n);
						break;
					case 1:
						Td || (ri(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function" && ti(n, t, r)), Vi(e, t, n);
						break;
					case 21:
						Vi(e, t, n);
						break;
					case 22:
						Td = (r = Td) || n.memoizedState !== null, Vi(e, t, n), Td = r;
						break;
					case 30:
						ri(n, t), Vi(e, t, n);
						break;
					case 7:
						Td || ri(n, t), Vi(e, t, n);
						break;
					default: Vi(e, t, n);
				}
			}
			function Ui(e, t) {
				if (ls && t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
					e = e.dehydrated;
					try {
						Jc(e);
					} catch (e) {
						z(t, t.return, e);
					}
				}
			}
			function Wi(e, t) {
				if (ls && t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
					Yc(e);
				} catch (e) {
					z(t, t.return, e);
				}
			}
			function Gi(e) {
				switch (e.tag) {
					case 31:
					case 13:
					case 19:
						var t = e.stateNode;
						return t === null && (t = e.stateNode = new Od()), t;
					case 22: return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Od()), t;
					default: throw Error(r(435, e.tag));
				}
			}
			function Ki(e, t) {
				var n = Gi(e);
				t.forEach(function(t) {
					if (!n.has(t)) {
						n.add(t);
						var r = io.bind(null, e, t);
						t.then(r, r);
					}
				});
			}
			function qi(e, t, n) {
				var i = t.deletions;
				if (i !== null) for (var a = 0; a < i.length; a++) {
					var o = i[a], s = e, c = t;
					if (cs) {
						var l = c;
						e: for (; l !== null;) {
							switch (l.tag) {
								case 27: if (yl) {
									if (wl(l.type)) {
										Pd = l.stateNode, Fd = !1;
										break e;
									}
									break;
								}
								case 5:
									Pd = l.stateNode, Fd = !1;
									break e;
								case 3:
								case 4:
									Pd = l.stateNode.containerInfo, Fd = !0;
									break e;
							}
							l = l.return;
						}
						if (Pd === null) throw Error(r(160));
						Hi(s, c, o), Pd = null, Fd = !1;
					} else Hi(s, c, o);
					s = o.alternate, s !== null && (s.return = null), o.return = null;
				}
				if (t.subtreeFlags & 13886) for (t = t.child; t !== null;) Ji(t, e, n), t = t.sibling;
			}
			function Ji(e, t, n) {
				var i = e.alternate, a = e.flags;
				switch (e.tag) {
					case 0:
					case 11:
					case 14:
					case 15:
						if (a & 4 && (i = e.updateQueue, i = i === null ? null : i.events, i !== null)) for (var o = 0; o < i.length; o++) {
							var s = i[o];
							s.ref.impl = s.nextImpl;
						}
						qi(t, e, n), Yi(e), a & 4 && ($r(3, e, e.return), Qr(3, e), $r(5, e, e.return));
						break;
					case 1:
						qi(t, e, n), Yi(e), a & 512 && (Td || i === null || ri(i, i.return)), a & 64 && wd && (e = e.updateQueue, e !== null && (t = e.callbacks, t !== null && (a = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = a === null ? t : a.concat(t))));
						break;
					case 26: if (al) {
						o = Id, qi(t, e, n), Yi(e), a & 512 && (Td || i === null || ri(i, i.return)), a & 4 && (n = i === null ? null : i.memoizedState, a = e.memoizedState, i === null ? a === null ? e.stateNode === null ? e.stateNode = wd ? ml(e.type, e.memoizedProps, t.containerInfo, e) : dl(o, e.type, e.memoizedProps, e) : wd || fl(o, e.type, e.stateNode) : e.stateNode = ll(o, a, e.memoizedProps) : n === a ? a === null && e.stateNode !== null && di(e, e.memoizedProps, i.memoizedProps) : (n === null ? (t = i.stateNode, t === null || Td || pl(t)) : ul(n), a === null ? wd || fl(o, e.type, e.stateNode) : ll(o, a, e.memoizedProps)));
						break;
					}
					case 27: if (yl) {
						qi(t, e, n), Yi(e), a & 512 && (Td || i === null || ri(i, i.return)), i !== null && a & 4 && di(e, e.memoizedProps, i.memoizedProps);
						break;
					}
					case 5:
						if (o = Ed, Ed = !1, qi(t, e, n), Ed = o, Yi(e), a & 512 && (Td || i === null || ri(i, i.return)), cs) {
							if (e.flags & 32) {
								t = e.stateNode;
								try {
									Ks(t), yd = !0;
								} catch (t) {
									z(e, e.return, t);
								}
							}
							a & 4 && e.stateNode != null && (t = e.memoizedProps, di(e, t, i === null ? t : i.memoizedProps)), a & 1024 && (Dd = !0);
						} else G && e.alternate !== null && (e.alternate.stateNode = e.stateNode);
						break;
					case 6:
						if (qi(t, e, n), Yi(e), a & 4 && cs) {
							if (e.stateNode === null) throw Error(r(162));
							t = e.memoizedProps, a = i === null ? t : i.memoizedProps, n = e.stateNode;
							try {
								zs(n, a, t), yd = !0;
							} catch (t) {
								z(e, e.return, t);
							}
						}
						break;
					case 3:
						if (yd = !1, al ? (hl(), o = Id, Id = sl(t.containerInfo), qi(t, e, n), Id = o) : qi(t, e, n), Yi(e), a & 4) {
							if (cs && ls && i !== null && i.memoizedState.isDehydrated) try {
								qc(t.containerInfo);
							} catch (t) {
								z(e, e.return, t);
							}
							if (G) {
								a = t.containerInfo, t = t.pendingChildren;
								try {
									bc(a, t), yd = !0;
								} catch (t) {
									z(e, e.return, t);
								}
							}
						}
						Dd && (Dd = !1, Xi(e)), yd = !1;
						break;
					case 4:
						i = Ed, Ed = wd, o = ii(), al ? (s = Id, Id = sl(e.stateNode.containerInfo), qi(t, e, n), Yi(e), Id = s) : (qi(t, e, n), Yi(e)), yd && jd && (Md = !0), yd = o, Ed = i, a & 4 && G && _i(e.stateNode, e, e.stateNode.pendingChildren);
						break;
					case 12:
						qi(t, e, n), Yi(e);
						break;
					case 31:
						qi(t, e, n), Yi(e), a & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, Ki(e, t)));
						break;
					case 13:
						qi(t, e, n), Yi(e), e.child.flags & 8192 && e.memoizedState !== null != (i !== null && i.memoizedState !== null) && (uf = Rl()), a & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, Ki(e, t)));
						break;
					case 22:
						o = e.memoizedState !== null, s = i !== null && i.memoizedState !== null;
						var c = wd, l = Td, u = Ed;
						wd = c || o, Ed = u || o, Td = l || s, qi(t, e, n), Td = l, Ed = u, wd = c, Yi(e), a & 8192 && (t = e.stateNode, t._visibility = o ? t._visibility & -2 : t._visibility | 1, !o || i === null || s || wd || Td || (t = yl ? 2 : 0, n = s || Td, i = wd, s = Td, wd = o || wd, Td = n, ea(e, t), wd = i, Td = s), cs && (o || !Ed) && Li(e, o)), a & 4 && (t = e.updateQueue, t !== null && (a = t.retryQueue, a !== null && (t.retryQueue = null, Ki(e, a))));
						break;
					case 19:
						qi(t, e, n), Yi(e), a & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, Ki(e, t)));
						break;
					case 30:
						a & 512 && (Td || i === null || ri(i, i.return)), a = ii(), o = jd, s = (n & 335544064) === n, c = e.memoizedProps, jd = s && O(c.default, c.update) !== "none", qi(t, e, n), Yi(e), s && i !== null && yd && (e.flags |= 4), jd = o, yd = a;
						break;
					case 21: break;
					case 7: a & 512 && (Td || i === null || ri(i, i.return)), i && i.stateNode !== null && pc(e, i.stateNode);
					default: qi(t, e, n), Yi(e);
				}
			}
			function Yi(e) {
				var t = e.flags;
				if (t & 2) {
					try {
						for (var n, i = e.return; i !== null;) {
							if (fi(i)) {
								n = i;
								break;
							}
							i = i.return;
						}
						i = null;
						for (var a = e.return; a !== null;) {
							if (li(a)) {
								var o = a.stateNode;
								i === null ? i = [o] : i.push(o);
							}
							if (ci(a)) break;
							a = a.return;
						}
						var s = i;
						if (cs) {
							if (n == null) throw Error(r(160));
							switch (n.tag) {
								case 27: if (yl) {
									var c = n.stateNode;
									hi(e, pi(e), c, s);
									break;
								}
								case 5:
									var l = n.stateNode;
									n.flags & 32 && (Ks(l), n.flags &= -33), hi(e, pi(e), l, s);
									break;
								case 3:
								case 4:
									var u = n.stateNode.containerInfo;
									mi(e, pi(e), u, s);
									break;
								default: throw Error(r(161));
							}
						} else gi(e, s);
					} catch (t) {
						z(e, e.return, t);
					}
					e.flags &= -3;
				}
				t & 4096 && (e.flags &= -4097);
			}
			function Xi(e) {
				if (e.subtreeFlags & 1024) for (e = e.child; e !== null;) {
					var t = e;
					Xi(t), t.tag === 5 && t.flags & 1024 && Es(t.stateNode), e = e.sibling;
				}
			}
			function Zi(e, t) {
				if (t.subtreeFlags & 9270) for (t = t.child; t !== null;) Qi(t, e), t = t.sibling;
				else Ni(t, !1);
			}
			function Qi(e, t) {
				var n = e.alternate;
				if (n === null) Ti(e, !1);
				else switch (e.tag) {
					case 3:
						if (Nd = Ad = !1, bi(), Zi(t, e), !Ad && !Md) {
							if (e = Sd, e !== null) for (var r = 0; r < e.length; r += 3) $s(e[r], e[r + 1], e[r + 2]);
							ec(t.containerInfo), Nd = !0;
						}
						Sd = null;
						break;
					case 5:
						Zi(t, e);
						break;
					case 4:
						r = Ad, Ad = !1, Zi(t, e), Ad && (Md = !0), Ad = r;
						break;
					case 22:
						e.memoizedState === null && (n.memoizedState === null ? Zi(t, e) : Ti(e, !1));
						break;
					case 30:
						r = Ad;
						var i = bi();
						Ad = !1, Zi(t, e), Ad && (e.flags |= 4);
						var a = e.memoizedProps, o = e.stateNode;
						t = ne(a, o), o = ne(n.memoizedProps, o);
						var s = O(a.default, a.update);
						s === "none" ? n = !1 : (a = n.memoizedState, n.memoizedState = null, n = e.child, Cd = 0, n = Mi(e, n, t, o, s, a, !0), Cd !== (a === null ? 0 : a.length) && (e.flags |= 32)), e.flags & 4 && n ? (xa(e, e.memoizedProps.onUpdate), Sd = i) : i !== null && (i.push.apply(i, Sd), Sd = i), Ad = e.flags & 32 ? !0 : r;
						break;
					default: Zi(t, e);
				}
			}
			function $i(e, t) {
				if (t.subtreeFlags & 8772) for (t = t.child; t !== null;) Ii(e, t.alternate, t), t = t.sibling;
			}
			function ea(e, t) {
				for (e = e.child; e !== null;) {
					var n = e, r = t;
					switch (n.tag) {
						case 0:
						case 11:
						case 14:
						case 15:
							$r(4, n, n.return), ea(n, r);
							break;
						case 1:
							ri(n, n.return);
							var i = n.stateNode;
							typeof i.componentWillUnmount == "function" && ti(n, n.return, i), ea(n, r);
							break;
						case 27: yl && r & 2 && Sl(n.stateNode, n.type, n.memoizedProps);
						case 5:
							ri(n, n.return), n.tag !== 5 && n.tag !== 27 || si(n), ea(n, r);
							break;
						case 6:
							si(n);
							break;
						case 26:
							ri(n, n.return), al && (i = n.stateNode, n.memoizedState !== null || i === null || Td || pl(i)), ea(n, r);
							break;
						case 22:
							n.memoizedState === null && ea(n, r);
							break;
						case 30:
							ri(n, n.return), ea(n, r);
							break;
						case 7: ri(n, n.return);
						default: ea(n, r);
					}
					e = e.sibling;
				}
			}
			function ta(e, t, n) {
				for (n = t.subtreeFlags & 8772 ? n : n & -2, t = t.child; t !== null;) {
					var r = t.alternate, i = e, a = t, o = a.flags, s = !!(n & 1);
					switch (a.tag) {
						case 0:
						case 11:
						case 15:
							ta(i, a, n), Qr(4, a);
							break;
						case 1:
							if (ta(i, a, n), r = a, i = r.stateNode, typeof i.componentDidMount == "function") try {
								i.componentDidMount();
							} catch (e) {
								z(r, r.return, e);
							}
							if (r = a, i = r.updateQueue, i !== null) {
								var c = r.stateNode;
								try {
									var l = i.shared.hiddenCallbacks;
									if (l !== null) for (i.shared.hiddenCallbacks = null, i = 0; i < l.length; i++) bt(l[i], c);
								} catch (e) {
									z(r, r.return, e);
								}
							}
							s && o & 64 && ei(a), ni(a, a.return);
							break;
						case 27: yl && n & 2 && vi(a);
						case 5:
							a.tag !== 5 && a.tag !== 27 || oi(a), ta(i, a, n), s && r === null && o & 4 && ui(a), ni(a, a.return);
							break;
						case 6:
							oi(a);
							break;
						case 26:
							al && (c = a.stateNode, a.memoizedState !== null || c === null || wd || fl(sl(c.ownerDocument), a.type, c)), ta(i, a, n), s && r === null && o & 4 && ui(a), ni(a, a.return);
							break;
						case 12:
							ta(i, a, n);
							break;
						case 31:
							ta(i, a, n), s && o & 4 && Ui(i, a);
							break;
						case 13:
							ta(i, a, n), s && o & 4 && Wi(i, a);
							break;
						case 22:
							a.memoizedState === null && ta(i, a, n), ni(a, a.return);
							break;
						case 30:
							ta(i, a, n), ni(a, a.return);
							break;
						case 7: ni(a, a.return);
						default: ta(i, a, n);
					}
					t = t.sibling;
				}
			}
			function na(e, t) {
				var n = null;
				e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && Me(n));
			}
			function ra(e, t) {
				e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Me(e));
			}
			function ia(e, t, n, r) {
				var i = (n & 335544064) === n;
				if (t.subtreeFlags & (i ? 10262 : 10256)) for (t = t.child; t !== null;) aa(e, t, n, r), t = t.sibling;
				else i && ji(t);
			}
			function aa(e, t, n, r) {
				var i = (n & 335544064) === n;
				i && t.alternate === null && t.return !== null && t.return.alternate !== null && Ai(t);
				var a = t.flags;
				switch (t.tag) {
					case 0:
					case 11:
					case 15:
						ia(e, t, n, r), a & 2048 && Qr(9, t);
						break;
					case 1:
						ia(e, t, n, r);
						break;
					case 3:
						ia(e, t, n, r), i && cs && Nd && tc(e.containerInfo), a & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Me(e)));
						break;
					case 12:
						if (a & 2048) {
							ia(e, t, n, r), e = t.stateNode;
							try {
								var o = t.memoizedProps, s = o.id, c = o.onPostCommit;
								typeof c == "function" && c(s, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0);
							} catch (e) {
								z(t, t.return, e);
							}
						} else ia(e, t, n, r);
						break;
					case 31:
						ia(e, t, n, r);
						break;
					case 13:
						ia(e, t, n, r);
						break;
					case 23: break;
					case 22:
						o = t.stateNode, s = t.alternate, t.memoizedState === null ? (i && s !== null && s.memoizedState !== null && Ai(t), o._visibility & 2 ? ia(e, t, n, r) : (o._visibility |= 2, oa(e, t, n, r, !!(t.subtreeFlags & 10256) || !1))) : (i && s !== null && s.memoizedState === null && Ai(s), o._visibility & 2 ? ia(e, t, n, r) : sa(e, t)), a & 2048 && na(s, t);
						break;
					case 24:
						ia(e, t, n, r), a & 2048 && ra(t.alternate, t);
						break;
					case 30:
						i && (i = t.alternate, i !== null && (Ci(i.child, !0), Ci(t.child, !0))), ia(e, t, n, r);
						break;
					default: ia(e, t, n, r);
				}
			}
			function oa(e, t, n, r, i) {
				for (i &&= !!(t.subtreeFlags & 10256) || !1, t = t.child; t !== null;) {
					var a = e, o = t, s = n, c = r, l = o.flags;
					switch (o.tag) {
						case 0:
						case 11:
						case 15:
							oa(a, o, s, c, i), Qr(8, o);
							break;
						case 23: break;
						case 22:
							var u = o.stateNode;
							o.memoizedState === null ? (u._visibility |= 2, oa(a, o, s, c, i)) : u._visibility & 2 ? oa(a, o, s, c, i) : sa(a, o), i && l & 2048 && na(o.alternate, o);
							break;
						case 24:
							oa(a, o, s, c, i), i && l & 2048 && ra(o.alternate, o);
							break;
						default: oa(a, o, s, c, i);
					}
					t = t.sibling;
				}
			}
			function sa(e, t) {
				if (t.subtreeFlags & 10256) for (t = t.child; t !== null;) {
					var n = e, r = t, i = r.flags;
					switch (r.tag) {
						case 22:
							sa(n, r), i & 2048 && na(r.alternate, r);
							break;
						case 24:
							sa(n, r), i & 2048 && ra(r.alternate, r);
							break;
						default: sa(n, r);
					}
					t = t.sibling;
				}
			}
			function L(e, t, n) {
				if (e.subtreeFlags & Ld) for (e = e.child; e !== null;) ca(e, t, n), e = e.sibling;
			}
			function ca(e, t, n) {
				switch (e.tag) {
					case 26:
						if (L(e, t, n), e.flags & Ld) {
							if (e.memoizedState !== null) vl(n, Id, e.memoizedState, e.memoizedProps);
							else {
								var r = e.stateNode, i = e.type;
								e = e.memoizedProps, ((t & 335544128) === t || vs(i, e)) && xs(n, r, i, e);
							}
						}
						break;
					case 5:
						L(e, t, n), e.flags & Ld && (r = e.stateNode, i = e.type, e = e.memoizedProps, ((t & 335544128) === t || vs(i, e)) && xs(n, r, i, e));
						break;
					case 3:
					case 4:
						al ? (r = Id, Id = sl(e.stateNode.containerInfo), L(e, t, n), Id = r) : L(e, t, n);
						break;
					case 22:
						e.memoizedState === null && (r = e.alternate, r !== null && r.memoizedState !== null ? (r = Ld, Ld = 16777216, L(e, t, n), Ld = r) : L(e, t, n));
						break;
					case 30:
						(e.flags & Ld) !== 0 && (r = e.memoizedProps.name, r != null && r !== "auto" && (i = e.stateNode, i.paired = null, xd === null && (xd = /* @__PURE__ */ new Map()), xd.set(r, i))), L(e, t, n);
						break;
					default: L(e, t, n);
				}
			}
			function la(e) {
				var t = e.alternate;
				if (t !== null && (e = t.child, e !== null)) {
					t.child = null;
					do
						t = e.sibling, e.sibling = null, e = t;
					while (e !== null);
				}
			}
			function ua(e) {
				var t = e.deletions;
				if (e.flags & 16) {
					if (t !== null) for (var n = 0; n < t.length; n++) {
						var r = t[n];
						kd = r, pa(r, e);
					}
					la(e);
				}
				if (e.subtreeFlags & 10256) for (e = e.child; e !== null;) da(e), e = e.sibling;
			}
			function da(e) {
				switch (e.tag) {
					case 0:
					case 11:
					case 15:
						ua(e), e.flags & 2048 && $r(9, e, e.return);
						break;
					case 3:
						ua(e);
						break;
					case 12:
						ua(e);
						break;
					case 22:
						var t = e.stateNode;
						e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, fa(e)) : ua(e);
						break;
					default: ua(e);
				}
			}
			function fa(e) {
				var t = e.deletions;
				if (e.flags & 16) {
					if (t !== null) for (var n = 0; n < t.length; n++) {
						var r = t[n];
						kd = r, pa(r, e);
					}
					la(e);
				}
				for (e = e.child; e !== null;) {
					switch (t = e, t.tag) {
						case 0:
						case 11:
						case 15:
							$r(8, t, t.return), fa(t);
							break;
						case 22:
							n = t.stateNode, n._visibility & 2 && (n._visibility &= -3, fa(t));
							break;
						default: fa(t);
					}
					e = e.sibling;
				}
			}
			function pa(e, t) {
				for (; kd !== null;) {
					var n = kd;
					switch (n.tag) {
						case 0:
						case 11:
						case 15:
							$r(8, n, t);
							break;
						case 23:
						case 22:
							if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
								var r = n.memoizedState.cachePool.pool;
								r != null && r.refCount++;
							}
							break;
						case 24: Me(n.memoizedState.cache);
					}
					if (r = n.child, r !== null) r.return = n, kd = r;
					else e: for (n = e; kd !== null;) {
						r = kd;
						var i = r.sibling, a = r.return;
						if (Bi(r), r === n) {
							kd = null;
							break e;
						}
						if (i !== null) {
							i.return = a, kd = i;
							break e;
						}
						kd = a;
					}
				}
			}
			function ma(e) {
				var t = us(e);
				if (t != null) {
					if (typeof t.memoizedProps["data-testname"] != "string") throw Error(r(364));
					return t;
				}
				if (e = As(e), e === null) throw Error(r(362));
				return e.stateNode.current;
			}
			function ha(e, t) {
				var n = e.tag;
				switch (t.$$typeof) {
					case zd:
						if (e.type === t.value) return !0;
						break;
					case Bd:
						e: {
							for (t = t.value, e = [e, 0], n = 0; n < e.length;) {
								var i = e[n++], a = i.tag, o = e[n++], s = t[o];
								if (a !== 5 && a !== 26 && a !== 27 || !Ns(i)) {
									for (; s != null && ha(i, s);) o++, s = t[o];
									if (o === t.length) {
										t = !0;
										break e;
									}
									for (i = i.child; i !== null;) e.push(i, o), i = i.sibling;
								}
							}
							t = !1;
						}
						return t;
					case Vd:
						if ((n === 5 || n === 26 || n === 27) && Ps(e.stateNode, t.value)) return !0;
						break;
					case Ud:
						if ((n === 5 || n === 6 || n === 26 || n === 27) && (e = Ms(e), e !== null && 0 <= e.indexOf(t.value))) return !0;
						break;
					case Hd:
						if ((n === 5 || n === 26 || n === 27) && (e = e.memoizedProps["data-testname"], typeof e == "string" && e.toLowerCase() === t.value.toLowerCase())) return !0;
						break;
					default: throw Error(r(365));
				}
				return !1;
			}
			function ga(e) {
				switch (e.$$typeof) {
					case zd: return "<" + (u(e.value) || "Unknown") + ">";
					case Bd: return ":has(" + (ga(e) || "") + ")";
					case Vd: return "[role=\"" + e.value + "\"]";
					case Ud: return "\"" + e.value + "\"";
					case Hd: return "[data-testname=\"" + e.value + "\"]";
					default: throw Error(r(365));
				}
			}
			function _a(e, t) {
				var n = [];
				e = [e, 0];
				for (var r = 0; r < e.length;) {
					var i = e[r++], a = i.tag, o = e[r++], s = t[o];
					if (a !== 5 && a !== 26 && a !== 27 || !Ns(i)) {
						for (; s != null && ha(i, s);) o++, s = t[o];
						if (o === t.length) n.push(i);
						else for (i = i.child; i !== null;) e.push(i, o), i = i.sibling;
					}
				}
				return n;
			}
			function va(e, t) {
				if (!ks) throw Error(r(363));
				e = ma(e), e = _a(e, t), t = [], e = Array.from(e);
				for (var n = 0; n < e.length;) {
					var i = e[n++], a = i.tag;
					if (a === 5 || a === 26 || a === 27) Ns(i) || t.push(i.stateNode);
					else for (i = i.child; i !== null;) e.push(i), i = i.sibling;
				}
				return t;
			}
			function ya() {
				return Q & 2 && qd !== 0 ? qd & -qd : W.T === null ? ps() : We();
			}
			function ba() {
				if (af === 0) {
					if (!(qd & 536870912) || q) {
						var e = Ml;
						Ml <<= 1, !(Ml & 3932160) && (Ml = 262144), af = e;
					} else af = 536870912;
				}
				return e = Y.current, e !== null && (e.flags |= 32), af;
			}
			function xa(e, t) {
				if (t != null) {
					var n = e.stateNode, r = n.ref;
					r === null && (r = n.ref = uc(ne(e.memoizedProps, n))), Cf === null && (Cf = []), Cf.push(t.bind(null, r));
				}
			}
			function Sa(e, t, n) {
				(e === Kd && (Jd === 2 || Jd === 9) || e.cancelPendingCommit !== null) && (ka(e, 0), Ea(e, qd, af, !1)), S(e, n), (!(Q & 2) || e !== Kd) && (e === Kd && (!(Q & 2) && (nf |= n), ef === 4 && Ea(e, qd, af, !1)), Ie(e));
			}
			function Ca(e, t, n) {
				if (Q & 6) throw Error(r(327));
				var i = !n && !(t & 127) && (t & e.expiredLanes) === 0 || _(e, t), a = i ? R(e, t) : Fa(e, t, !0), o = i;
				do {
					if (a === 0) {
						Zd && !i && Ea(e, t, 0, !1);
						break;
					}
					if (n = e.current.alternate, o && !Ta(n)) a = Fa(e, t, !1), o = !1;
					else {
						if (a === 2) {
							if (o = t, e.errorRecoveryDisabledLanes & o) var s = 0;
							else s = e.pendingLanes & -536870913, s = s === 0 ? s & 536870912 ? 536870912 : 0 : s;
							if (s !== 0) {
								t = s;
								e: {
									var c = e;
									a = sf;
									var l = ls && c.current.memoizedState.isDehydrated;
									if (l && (ka(c, s).flags |= 256), s = Fa(c, s, !1), s !== 2 && s !== 6) {
										if (Qd && !l) {
											c.errorRecoveryDisabledLanes |= o, nf |= o, a = 4;
											break e;
										}
										o = cf, cf = a, o !== null && (cf === null ? cf = o : cf.push.apply(cf, o));
									}
									a = s;
								}
								if (o = !1, a !== 2) continue;
							}
						}
						if (a === 1) {
							ka(e, 0), Ea(e, t, 0, !0);
							break;
						}
						e: {
							switch (i = e, o = a, o) {
								case 0:
								case 1: throw Error(r(345));
								case 4: if ((t & 4194048) !== t && (t & 62914560) !== t) break;
								case 6:
									Ea(i, t, af, !Xd);
									break e;
								case 2:
									cf = null;
									break;
								case 3:
								case 5: break;
								default: throw Error(r(329));
							}
							if ((t & 62914560) === t && (a = uf + 300 - Rl(), 10 < a)) {
								if (Ea(i, t, af, !Xd), g(i, 0, !0) !== 0) break e;
								vf = t, i.timeoutHandle = is(wa.bind(null, i, n, cf, pf, lf, t, af, nf, of, Xd, o, "Throttled", -0, 0), a);
								break e;
							}
							wa(i, n, cf, pf, lf, t, af, nf, of, Xd, o, null, -0, 0);
						}
						break;
					}
				} while (1);
				Ie(e);
			}
			function wa(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
				e.timeoutHandle = os;
				var m = t.subtreeFlags, h = (a & 335544064) === a;
				d = null, (h || m & 8192 || (m & 16785408) == 16785408) && (d = bs(), xd = null, ca(t, a, d), h && Ss(d, e.containerInfo), m = (a & 62914560) === a ? uf - Rl() : (a & 4194048) === a ? df - Rl() : 0, m = Cs(d, m), m !== null) ? (vf = a, e.cancelPendingCommit = m(Ua.bind(null, e, t, a, n, r, i, o, s, c, l, u, d, null, f, p)), Ea(e, a, o, !l)) : Ua(e, t, a, n, r, i, o, s, c, l, u, d);
			}
			function Ta(e) {
				for (var t = e;;) {
					var n = t.tag;
					if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null))) for (var r = 0; r < n.length; r++) {
						var i = n[r], a = i.getSnapshot;
						i = i.value;
						try {
							if (!Jl(a(), i)) return !1;
						} catch {
							return !1;
						}
					}
					if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
					else {
						if (t === e) break;
						for (; t.sibling === null;) {
							if (t.return === null || t.return === e) return !0;
							t = t.return;
						}
						t.sibling.return = t.return, t = t.sibling;
					}
				}
				return !0;
			}
			function Ea(e, t, n, r) {
				t = v(e, t), t &= ~rf, t &= ~nf, e.suspendedLanes |= t, e.pingedLanes &= ~t, r && (e.warmLanes |= t), r = e.expirationTimes;
				for (var i = t; 0 < i;) {
					var a = 31 - Ol(i), o = 1 << a;
					r[a] = -1, i &= ~o;
				}
				n !== 0 && w(e, n, t);
			}
			function Da() {
				return Q & 6 ? !0 : (Le(0, !1), !1);
			}
			function Oa() {
				if ($ !== null) {
					if (Jd === 0) var e = $.return;
					else e = $, xu = bu = null, Bt(e), Wu = null, Gu = 0, e = $;
					for (; e !== null;) Zr(e.alternate, e), e = e.return;
					$ = null;
				}
			}
			function ka(e, t) {
				var n = e.timeoutHandle;
				return n !== os && (e.timeoutHandle = os, as(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), vf = 0, Oa(), Kd = e, $ = n = co(e.current, null), qd = t, Jd = 0, Yd = null, Xd = !1, Zd = _(e, t), Qd = !1, of = af = rf = nf = tf = ef = 0, cf = sf = null, lf = !1, $d = v(e, t), ot(), n;
			}
			function Aa(e, t) {
				Z = null, W.H = dd, t === zu || t === Vu ? (t = et(), Jd = 3) : t === Bu ? (t = et(), Jd = 4) : Jd = t === gd ? 8 : typeof t == "object" && t && typeof t.then == "function" ? 6 : 1, Yd = t, $ === null && (ef = 1, $n(e, ce(t, e.current)));
			}
			function ja() {
				var e = Y.current;
				return e === null ? !0 : (qd & 4194048) === qd ? X === null : (qd & 62914560) === qd || qd & 536870912 ? e === X : !1;
			}
			function Ma() {
				var e = W.H;
				return W.H = dd, e === null ? dd : e;
			}
			function Na() {
				var e = W.A;
				return W.A = Rd, e;
			}
			function Pa() {
				ef = 4, Xd || (qd & 4194048) !== qd && Y.current !== null || (Zd = !0), !(tf & 134217727) && !(nf & 134217727) || Kd === null || Ea(Kd, qd, af, !1);
			}
			function Fa(e, t, n) {
				var r = Q;
				Q |= 2;
				var i = Ma(), a = Na();
				(Kd !== e || qd !== t) && (pf = null, ka(e, t)), t = !1;
				var o = ef;
				e: do
					try {
						if (Jd !== 0 && $ !== null) {
							var s = $, c = Yd;
							switch (Jd) {
								case 8:
									Oa(), o = 6;
									break e;
								case 3:
								case 2:
								case 9:
								case 6:
									Y.current === null && (t = !0);
									var l = Jd;
									if (Jd = 0, Yd = null, Ba(e, s, c, l), n && Zd) {
										o = 0;
										break e;
									}
									break;
								default: l = Jd, Jd = 0, Yd = null, Ba(e, s, c, l);
							}
						}
						Ia(), o = ef;
						break;
					} catch (t) {
						Aa(e, t);
					}
				while (1);
				return t && e.shellSuspendCounter++, xu = bu = null, Q = r, W.H = i, W.A = a, $ === null && (Kd = null, qd = 0, ot()), o;
			}
			function Ia() {
				for (; $ !== null;) Ra($);
			}
			function R(e, t) {
				var n = Q;
				Q |= 2;
				var i = Ma(), a = Na();
				Kd !== e || qd !== t ? (pf = null, ff = Rl() + 500, ka(e, t)) : Zd = _(e, t);
				e: do
					try {
						if (Jd !== 0 && $ !== null) {
							t = $;
							var o = Yd;
							n: switch (Jd) {
								case 1:
									Jd = 0, Yd = null, Ba(e, t, o, 1);
									break;
								case 2:
								case 9:
									if (Ze(o)) {
										Jd = 0, Yd = null, za(t);
										break;
									}
									t = function() {
										Jd !== 2 && Jd !== 9 || Kd !== e || (Jd = 7), Ie(e);
									}, o.then(t, t);
									break e;
								case 3:
									Jd = 7;
									break e;
								case 4:
									Jd = 5;
									break e;
								case 7:
									Ze(o) ? (Jd = 0, Yd = null, za(t)) : (Jd = 0, Yd = null, Ba(e, t, o, 7));
									break;
								case 5:
									var s = null;
									switch ($.tag) {
										case 26: s = $.memoizedState;
										case 5:
										case 27:
											var c = $, l = c.type, u = c.pendingProps;
											if (s ? _l(s) : ys(c.stateNode, l, u)) {
												Jd = 0, Yd = null;
												var d = c.sibling;
												if (d !== null) $ = d;
												else {
													var f = c.return;
													f === null ? $ = null : ($ = f, Va(f));
												}
												break n;
											}
									}
									Jd = 0, Yd = null, Ba(e, t, o, 5);
									break;
								case 6:
									Jd = 0, Yd = null, Ba(e, t, o, 6);
									break;
								case 8:
									Oa(), ef = 6;
									break e;
								default: throw Error(r(462));
							}
						}
						La();
						break;
					} catch (t) {
						Aa(e, t);
					}
				while (1);
				return xu = bu = null, W.H = i, W.A = a, Q = n, $ === null ? (Kd = null, qd = 0, ot(), ef) : 0;
			}
			function La() {
				for (; $ !== null && !Il();) Ra($);
			}
			function Ra(e) {
				var t = Ir(e.alternate, e, $d);
				e.memoizedProps = e.pendingProps, t === null ? Va(e) : $ = t;
			}
			function za(e) {
				var t = e, n = t.alternate;
				switch (t.tag) {
					case 15:
					case 0:
						t = _r(n, t, t.pendingProps, t.type, void 0, qd);
						break;
					case 11:
						t = _r(n, t, t.pendingProps, t.type.render, t.ref, qd);
						break;
					case 5:
						Bt(t);
						var r = t;
						ls && r === mu && (q ? (ye(r), r.tag === 5 && r.stateNode != null && (hu = r.stateNode)) : (ye(r), q = !0));
					default: Zr(n, t), t = $ = lo(t, $d), t = Ir(n, t, $d);
				}
				e.memoizedProps = e.pendingProps, t === null ? Va(e) : $ = t;
			}
			function Ba(e, t, n, r) {
				xu = bu = null, Bt(t), Wu = null, Gu = 0;
				var i = t.return;
				try {
					if (ir(e, i, t, n, qd)) {
						ef = 1, $n(e, ce(n, e.current)), $ = null;
						return;
					}
				} catch (t) {
					if (i !== null) throw $ = i, t;
					ef = 1, $n(e, ce(n, e.current)), $ = null;
					return;
				}
				t.flags & 32768 ? (q || r === 1 ? e = !0 : Zd || qd & 536870912 ? e = !1 : (Xd = e = !0, (r === 2 || r === 9 || r === 3 || r === 6) && (r = Y.current, r !== null && r.tag === 13 && (r.flags |= 16384))), Ha(t, e)) : Va(t);
			}
			function Va(e) {
				var t = e;
				do {
					if (t.flags & 32768) {
						Ha(t, Xd);
						return;
					}
					e = t.return;
					var n = Yr(t.alternate, t, $d);
					if (n !== null) {
						$ = n;
						return;
					}
					if (t = t.sibling, t !== null) {
						$ = t;
						return;
					}
					$ = t = e;
				} while (t !== null);
				ef === 0 && (ef = 5);
			}
			function Ha(e, t) {
				do {
					var n = Xr(e.alternate, e);
					if (n !== null) {
						n.flags &= 32767, $ = n;
						return;
					}
					if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
						$ = e;
						return;
					}
					$ = e = n;
				} while (e !== null);
				ef = 6, $ = null;
			}
			function Ua(e, t, n, i, a, o, s, c, l, u, d, f) {
				e.cancelPendingCommit = null;
				do
					Za();
				while (hf !== 0);
				if (Q & 6) throw Error(r(327));
				if (t !== null) {
					if (t === e.current) throw Error(r(177));
					e === Kd && ($ = Kd = null, qd = 0), _f = t, gf = e, vf = n, bf = a, xf = i, Wa(e, t, n, s, c, l, f);
				}
			}
			function Wa(e, t, n, r, i, a, o) {
				var s = t.lanes | t.childLanes;
				if (yf = s, s |= Xu, C(e, n, s, r, i, a), Cf = null, (n & 335544064) === n ? (wf = Pe(e), r = 10262) : (wf = null, r = 10256), (t.subtreeFlags & r) !== 0 || (t.flags & r) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, ao(Vl, function() {
					return Qa(), null;
				})) : (e.callbackNode = null, e.callbackPriority = 0), bd = !1, r = !!(t.flags & 13878), t.subtreeFlags & 13878 || r) {
					r = W.T, W.T = null, i = K(), fs(2), a = Q, Q |= 4;
					try {
						Pi(e, t, n);
					} finally {
						Q = a, fs(i), W.T = r;
					}
				}
				hf = 1, bd ? Sf = sc(o, e.containerInfo, wf, qa, Ja, Ka, Ya, Qa, Ga, null, null) : (qa(), Ja(), Ya());
			}
			function Ga(e) {
				if (hf !== 0) {
					var t = gf.onRecoverableError;
					t(e, { componentStack: null });
				}
			}
			function Ka() {
				hf === 3 && (hf = 0, Qi(_f, gf), hf = 4);
			}
			function qa() {
				if (hf === 1) {
					hf = 0;
					var e = gf, t = _f, n = vf, r = !!(t.flags & 13878);
					if (t.subtreeFlags & 13878 || r) {
						r = W.T, W.T = null;
						var i = K();
						fs(2);
						var a = Q;
						Q |= 4;
						try {
							jd = Md = !1, Ji(t, e, n), Qo(e.containerInfo);
						} finally {
							Q = a, fs(i), W.T = r;
						}
					}
					e.current = t, hf = 2;
				}
			}
			function Ja() {
				if (hf === 2) {
					hf = 0;
					var e = gf, t = _f, n = !!(t.flags & 8772);
					if (t.subtreeFlags & 8772 || n) {
						n = W.T, W.T = null;
						var r = K();
						fs(2);
						var i = Q;
						Q |= 4;
						try {
							Ii(e, t.alternate, t);
						} finally {
							Q = i, fs(r), W.T = n;
						}
					}
					hf = 3;
				}
			}
			function Ya() {
				if (hf === 4 || hf === 3) {
					hf = 0;
					var e = Sf;
					Sf = null, Ll();
					var t = gf, n = _f, r = vf, i = xf, a = (r & 335544064) === r ? 10262 : 10256;
					if ((n.subtreeFlags & a) !== 0 || (n.flags & a) !== 0 ? hf = 5 : (hf = 0, _f = gf = null, Xa(t, t.pendingLanes)), a = t.pendingLanes, a === 0 && (mf = null), ee(r), n = n.stateNode, Kl && typeof Kl.onCommitFiberRoot == "function") try {
						Kl.onCommitFiberRoot(Gl, n, void 0, (n.current.flags & 128) == 128);
					} catch {}
					if (i !== null) {
						n = W.T, a = K(), fs(2), W.T = null;
						try {
							for (var o = t.onRecoverableError, s = 0; s < i.length; s++) {
								var c = i[s];
								o(c.value, { componentStack: c.stack });
							}
						} finally {
							W.T = n, fs(a);
						}
					}
					if (i = Cf, o = wf, wf = null, i !== null && (Cf = null, o === null && (o = []), e !== null)) for (c = 0; c < i.length; c++) n = (0, i[c])(o), n !== void 0 && lc(e, n);
					vf & 3 && Za(), Ie(t), a = t.pendingLanes, r & 261930 && a & 42 ? t === Ef ? Tf++ : (Tf = 0, Ef = t) : (Tf = 0, Ef = null), ls && Zc(), Le(0, !1);
				}
			}
			function Xa(e, t) {
				(e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Me(t)));
			}
			function Za() {
				return Sf !== null && (cc(Sf), Sf = null), qa(), Ja(), Ya(), Qa();
			}
			function Qa() {
				if (hf !== 5) return !1;
				var e = gf, t = yf;
				yf = 0;
				var n = ee(vf), i = 32 > n ? 32 : n;
				n = W.T;
				var a = K();
				try {
					fs(i), W.T = null, i = bf, bf = null;
					var o = gf, s = vf;
					if (hf = 0, _f = gf = null, vf = 0, Q & 6) throw Error(r(331));
					var c = Q;
					if (Q |= 4, da(o.current), aa(o, o.current, s, i), Q = c, Le(0, !1), Kl && typeof Kl.onPostCommitFiberRoot == "function") try {
						Kl.onPostCommitFiberRoot(Gl, o);
					} catch {}
					return !0;
				} finally {
					fs(a), W.T = n, Xa(e, t);
				}
			}
			function $a(e, t, n) {
				t = ce(n, t), t = tr(e.stateNode, t, 2), e = ht(e, t, 2), e !== null && (S(e, 2), Ie(e));
			}
			function z(e, t, n) {
				if (e.tag === 3) $a(e, e, n);
				else for (; t !== null;) {
					if (t.tag === 3) {
						$a(t, e, n);
						break;
					}
					if (t.tag === 1) {
						var r = t.stateNode;
						if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (mf === null || !mf.has(r))) {
							e = ce(n, e), n = nr(2), r = ht(t, n, 2), r !== null && (rr(n, r, t, e), S(r, 2), Ie(r));
							break;
						}
					}
					t = t.return;
				}
			}
			function eo(e, t, n) {
				var r = e.pingCache;
				if (r === null) {
					r = e.pingCache = new Gd();
					var i = /* @__PURE__ */ new Set();
					r.set(t, i);
				} else i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
				i.has(n) || (Qd = !0, i.add(n), e = to.bind(null, e, t, n), t.then(e, e));
			}
			function to(e, t, n) {
				var r = e.pingCache;
				r !== null && r.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, Kd === e && (qd & n) === n && ((ef === 4 || ef === 3 && (qd & 62914560) === qd && 300 > Rl() - uf) && !(Q & 2) ? ka(e, 0) : rf |= n, of === qd && (of = 0)), Ie(e);
			}
			function no(e, t) {
				t === 0 && (t = b()), e = lt(e, t), e !== null && (S(e, t), Ie(e));
			}
			function ro(e) {
				var t = e.memoizedState, n = 0;
				t !== null && (n = t.retryLane), no(e, n);
			}
			function io(e, t) {
				var n = 0;
				switch (e.tag) {
					case 31:
					case 13:
						var i = e.stateNode, a = e.memoizedState;
						a !== null && (n = a.retryLane);
						break;
					case 19:
						i = e.stateNode;
						break;
					case 22:
						i = e.stateNode._retryCache;
						break;
					default: throw Error(r(314));
				}
				i !== null && i.delete(t), no(e, n);
			}
			function ao(e, t) {
				return Pl(e, t);
			}
			function oo(e, t, n, r) {
				this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
			}
			function so(e) {
				return e = e.prototype, !(!e || !e.isReactComponent);
			}
			function co(e, n) {
				var r = e.alternate;
				return r === null ? (r = t(e.tag, n, e.key, e.mode), r.elementType = e.elementType, r.type = e.type, r.stateNode = e.stateNode, r.alternate = e, e.alternate = r) : (r.pendingProps = n, r.type = e.type, r.flags = 0, r.subtreeFlags = 0, r.deletions = null), r.flags = e.flags & 1206910976, r.childLanes = e.childLanes, r.lanes = e.lanes, r.child = e.child, r.memoizedProps = e.memoizedProps, r.memoizedState = e.memoizedState, r.updateQueue = e.updateQueue, n = e.dependencies, r.dependencies = n === null ? null : {
					lanes: n.lanes,
					firstContext: n.firstContext
				}, r.sibling = e.sibling, r.index = e.index, r.ref = e.ref, r.refCleanup = e.refCleanup, r;
			}
			function lo(e, t) {
				e.flags &= 1206910978;
				var n = e.alternate;
				return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : {
					lanes: t.lanes,
					firstContext: t.firstContext
				}), e;
			}
			function uo(e, n, i, a, o, s) {
				var c = 0;
				if (a = e, typeof a == "function") so(a) && (c = 1);
				else if (typeof a == "string") c = al && yl ? ol(e, i, uu.current) ? 26 : Cl(e) ? 27 : 5 : al ? ol(e, i, uu.current) ? 26 : 5 : yl && Cl(e) ? 27 : 5;
				else e: switch (a) {
					case zo: return e = t(31, i, n, o), e.elementType = zo, e.lanes = s, e;
					case ko: return fo(i.children, o, s, n);
					case Ao:
						c = 8, o |= 24;
						break;
					case jo: return e = t(12, i, n, o | 2), e.elementType = jo, e.lanes = s, e;
					case Fo: return e = t(13, i, n, o), e.elementType = Fo, e.lanes = s, e;
					case Io: return e = t(19, i, n, o), e.elementType = Io, e.lanes = s, e;
					case Bo:
					case Ho: return e = o | 32, e = t(30, i, n, e), e.elementType = Ho, e.lanes = s, e.stateNode = {
						autoName: null,
						paired: null,
						clones: null,
						ref: null
					}, e;
					default:
						if (typeof a == "object" && a) switch (a.$$typeof) {
							case No:
								c = 10;
								break e;
							case Mo:
								c = 9;
								break e;
							case Po:
								c = 11;
								break e;
							case Lo:
								c = 14;
								break e;
							case Ro:
								c = 16, a = null;
								break e;
						}
						c = 29, i = Error(r(130, e === null ? "null" : typeof e, "")), a = null;
				}
				return n = t(c, i, n, o), n.elementType = e, n.type = a, n.lanes = s, n;
			}
			function fo(e, n, r, i) {
				return e = t(7, e, i, n), e.lanes = r, e;
			}
			function po(e, n, r) {
				return e = t(6, e, null, n), e.lanes = r, e;
			}
			function mo(e) {
				var n = t(18, null, null, 0);
				return n.stateNode = e, n;
			}
			function ho(e, n, r) {
				return n = t(4, e.children === null ? [] : e.children, e.key, n), n.lanes = r, n.stateNode = {
					containerInfo: e.containerInfo,
					pendingChildren: null,
					implementation: e.implementation
				}, n;
			}
			function go(e, t, n, r, i, a, o, s, c) {
				this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = os, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = x(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = x(0), this.hiddenUpdates = x(null), this.identifierPrefix = r, this.onUncaughtError = i, this.onCaughtError = a, this.onRecoverableError = o, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = c, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
			}
			function _o(e, n, r, i, a, o, s, c, l, u, d, f) {
				return e = new go(e, n, r, s, l, u, d, f, c), n = 1, o === !0 && (n |= 24), o = t(3, null, null, n), e.current = o, o.stateNode = e, n = je(), n.refCount++, e.pooledCache = n, n.refCount++, o.memoizedState = {
					element: i,
					isDehydrated: r,
					cache: n
				}, ft(o), e;
			}
			function vo(e) {
				return e ? (e = Dl, e) : Dl;
			}
			function yo(e) {
				var t = e._reactInternals;
				if (t === void 0) throw typeof e.render == "function" ? Error(r(188)) : (e = Object.keys(e).join(","), Error(r(268, e)));
				return e = o(t), e = e === null ? null : s(e), e === null ? null : Jo(e.stateNode);
			}
			function bo(e, t, n, r, i, a) {
				i = vo(i), r.context === null ? r.context = i : r.pendingContext = i, r = mt(t), r.payload = { element: n }, a = a === void 0 ? null : a, a !== null && (r.callback = a), n = ht(e, r, t), n !== null && (Sa(n, e, t), gt(n, e, t));
			}
			function xo(e, t) {
				if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
					var n = e.retryLane;
					e.retryLane = n !== 0 && n < t ? n : t;
				}
			}
			function So(e, t) {
				xo(e, t), (e = e.alternate) && xo(e, t);
			}
			var B = {}, Co = F.default, wo = sn.default, To = Object.assign, Eo = Symbol.for("react.element"), Do = Symbol.for("react.transitional.element"), Oo = Symbol.for("react.portal"), ko = Symbol.for("react.fragment"), Ao = Symbol.for("react.strict_mode"), jo = Symbol.for("react.profiler"), Mo = Symbol.for("react.consumer"), No = Symbol.for("react.context"), Po = Symbol.for("react.forward_ref"), Fo = Symbol.for("react.suspense"), Io = Symbol.for("react.suspense_list"), Lo = Symbol.for("react.memo"), Ro = Symbol.for("react.lazy"), zo = Symbol.for("react.activity"), Bo = Symbol.for("react.legacy_hidden"), Vo = Symbol.for("react.memo_cache_sentinel"), Ho = Symbol.for("react.view_transition"), V = Symbol.for("react.recoverable"), H = Symbol.iterator, U = Symbol.for("react.optimistic_key"), Uo = Symbol.for("react.client.reference"), Wo = Array.isArray, W = Co.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Go = e.rendererVersion, Ko = e.rendererPackageName, qo = e.extraDevToolsConfig, Jo = e.getPublicInstance, Yo = e.getRootHostContext, Xo = e.getChildHostContext, Zo = e.prepareForCommit, Qo = e.resetAfterCommit, $o = e.createInstance;
			e.cloneMutableInstance;
			var es = e.appendInitialChild, ts = e.finalizeInitialChildren, ns = e.shouldSetTextContent, rs = e.createTextInstance;
			e.cloneMutableTextInstance;
			var is = e.scheduleTimeout, as = e.cancelTimeout, os = e.noTimeout, ss = e.isPrimaryRenderer;
			e.warnsIfNotActing;
			var cs = e.supportsMutation, G = e.supportsPersistence, ls = e.supportsHydration, us = e.getInstanceFromNode;
			e.beforeActiveInstanceBlur;
			var ds = e.preparePortalMount;
			e.prepareScopeUpdate, e.getInstanceFromScope;
			var fs = e.setCurrentUpdatePriority, K = e.getCurrentUpdatePriority, ps = e.resolveUpdatePriority;
			e.trackSchedulerEvent, e.resolveEventType, e.resolveEventTimeStamp;
			var ms = e.shouldAttemptEagerTransition, hs = e.detachDeletedInstance;
			e.requestPostPaintCallback;
			var gs = e.maySuspendCommit, _s = e.maySuspendCommitOnUpdate, vs = e.maySuspendCommitInSyncRender, ys = e.preloadInstance, bs = e.startSuspendingCommit, xs = e.suspendInstance, Ss = e.suspendOnActiveViewTransition, Cs = e.waitForCommitToBeReady;
			e.getSuspendedCommitReason;
			var ws = e.NotPendingTransition, Ts = e.HostTransitionContext, Es = e.resetFormInstance;
			e.bindToConsole;
			var Ds = e.supportsMicrotasks, Os = e.scheduleMicrotask, ks = e.supportsTestSelectors, As = e.findFiberRoot, js = e.getBoundingRect, Ms = e.getTextContent, Ns = e.isHiddenSubtree, Ps = e.matchAccessibilityRole, Fs = e.setFocusIfFocusable, Is = e.setupIntersectionObserver, Ls = e.appendChild, Rs = e.appendChildToContainer, zs = e.commitTextUpdate, Bs = e.commitMount, Vs = e.commitUpdate, Hs = e.insertBefore, Us = e.insertInContainerBefore, Ws = e.removeChild, Gs = e.removeChildFromContainer, Ks = e.resetTextContent, qs = e.hideInstance, Js = e.hideTextInstance, Ys = e.unhideInstance, Xs = e.unhideTextInstance, Zs = e.applyViewTransitionName, Qs = e.restoreViewTransitionName, $s = e.cancelViewTransitionName, ec = e.cancelRootViewTransitionName, tc = e.restoreRootViewTransitionName;
			e.cloneRootViewTransitionContainer, e.removeRootViewTransitionClone;
			var nc = e.measureInstance, rc = e.measureClonedInstance, ic = e.wasInstanceInViewport, ac = e.hasInstanceChanged, oc = e.hasInstanceAffectedParent, sc = e.startViewTransition;
			e.startGestureTransition;
			var cc = e.stopViewTransition, lc = e.addViewTransitionFinishedListener;
			e.getCurrentGestureOffset;
			var uc = e.createViewTransitionInstance, dc = e.clearContainer, fc = e.createFragmentInstance, pc = e.updateFragmentInstanceFiber, mc = e.commitNewChildToFragmentInstance, hc = e.deleteChildFromFragmentInstance, gc = e.cloneInstance, _c = e.createContainerChildSet, vc = e.appendChildToContainerChildSet, yc = e.finalizeContainerChildren, bc = e.replaceContainerChildren, xc = e.cloneHiddenInstance, Sc = e.cloneHiddenTextInstance, Cc = e.isSuspenseInstancePending, wc = e.isSuspenseInstanceFallback, Tc = e.getSuspenseInstanceFallbackErrorDetails, Ec = e.registerSuspenseInstanceRetry, Dc = e.canHydrateFormStateMarker, Oc = e.isFormStateMarkerMatching, kc = e.getNextHydratableSibling, Ac = e.getNextHydratableSiblingAfterSingleton, jc = e.getFirstHydratableChild, Mc = e.getFirstHydratableChildWithinContainer, Nc = e.getFirstHydratableChildWithinActivityInstance, Pc = e.getFirstHydratableChildWithinSuspenseInstance, Fc = e.getFirstHydratableChildWithinSingleton, Ic = e.canHydrateInstance, Lc = e.canHydrateTextInstance, Rc = e.canHydrateActivityInstance, zc = e.canHydrateSuspenseInstance, Bc = e.hydrateInstance, Vc = e.hydrateTextInstance, Hc = e.hydrateActivityInstance, Uc = e.hydrateSuspenseInstance, Wc = e.getNextHydratableInstanceAfterActivityInstance, Gc = e.getNextHydratableInstanceAfterSuspenseInstance, Kc = e.commitHydratedInstance, qc = e.commitHydratedContainer, Jc = e.commitHydratedActivityInstance, Yc = e.commitHydratedSuspenseInstance, Xc = e.finalizeHydratedChildren, Zc = e.flushHydrationEvents;
			e.clearActivityBoundary;
			var Qc = e.clearSuspenseBoundary;
			e.clearActivityBoundaryFromContainer;
			var $c = e.clearSuspenseBoundaryFromContainer, el = e.hideDehydratedBoundary, tl = e.unhideDehydratedBoundary, nl = e.shouldDeleteUnhydratedTailInstances;
			e.diffHydratedPropsForDevWarnings, e.diffHydratedTextForDevWarnings, e.describeHydratableInstanceForDevWarnings;
			var rl = e.validateHydratableInstance, il = e.validateHydratableTextInstance, al = e.supportsResources, ol = e.isHostHoistableType, sl = e.getHoistableRoot, cl = e.getResource, ll = e.acquireResource, ul = e.releaseResource, dl = e.hydrateHoistable, fl = e.mountHoistable, pl = e.unmountHoistable, ml = e.createHoistableInstance, hl = e.prepareToCommitHoistables, gl = e.mayResourceSuspendCommit, _l = e.preloadResource, vl = e.suspendResource, yl = e.supportsSingletons, bl = e.resolveSingletonInstance, xl = e.acquireSingletonInstance, Sl = e.releaseSingletonInstance, Cl = e.isHostSingletonType, wl = e.isSingletonScope, Tl = [], El = -1, Dl = {}, Ol = Math.clz32 ? Math.clz32 : m, kl = Math.log, Al = Math.LN2, jl = 256, Ml = 262144, Nl = 4194304, Pl = wo.unstable_scheduleCallback, Fl = wo.unstable_cancelCallback, Il = wo.unstable_shouldYield, Ll = wo.unstable_requestPaint, Rl = wo.unstable_now, zl = wo.unstable_ImmediatePriority, Bl = wo.unstable_UserBlockingPriority, Vl = wo.unstable_NormalPriority, Hl = wo.unstable_IdlePriority, Ul = wo.log, Wl = wo.unstable_setDisableYieldValue, Gl = null, Kl = null, ql = 0, Jl = typeof Object.is == "function" ? Object.is : k, Yl = typeof reportError == "function" ? reportError : function(e) {
				if (typeof window == "object" && typeof window.ErrorEvent == "function") {
					var t = new window.ErrorEvent("error", {
						bubbles: !0,
						cancelable: !0,
						message: typeof e == "object" && e && typeof e.message == "string" ? String(e.message) : String(e),
						error: e
					});
					if (!window.dispatchEvent(t)) return;
				} else if (typeof process == "object" && typeof process.emit == "function") {
					process.emit("uncaughtException", e);
					return;
				}
				console.error(e);
			}, Xl = Object.prototype.hasOwnProperty, Zl, Ql, $l = !1, eu = /* @__PURE__ */ new WeakMap(), tu = [], nu = 0, ru = null, iu = 0, au = [], ou = 0, su = null, cu = 1, lu = "", uu = d(null), du = d(null), fu = d(null), pu = d(null), mu = null, hu = null, q = !1, gu = null, _u = !1, vu = Error(r(519)), yu = d(null), bu = null, xu = null, Su = typeof AbortController < "u" ? AbortController : function() {
				var e = [], t = this.signal = {
					aborted: !1,
					addEventListener: function(t, n) {
						e.push(n);
					}
				};
				this.abort = function() {
					t.aborted = !0, e.forEach(function(e) {
						return e();
					});
				};
			}, Cu = wo.unstable_scheduleCallback, wu = wo.unstable_NormalPriority, Tu = {
				$$typeof: No,
				Consumer: null,
				Provider: null,
				_currentValue: null,
				_currentValue2: null,
				_threadCount: 0
			}, Eu = null, Du = null, Ou = null, ku = !1, Au = !1, ju = !1, Mu = 0, Nu = null, Pu = 0, Fu = 0, Iu = null, Lu = W.S;
			W.S = function(e, t) {
				if (df = Rl(), typeof t == "object" && t && typeof t.then == "function" && P(e, t), Eu !== null) for (var n = Du; n !== null;) Ne(n, Eu), n = n.next;
				if (n = e.types, n != null) {
					for (var r = Du; r !== null;) Ne(r, n), r = r.next;
					if (Fu !== 0) {
						r = Eu, r === null && (r = Eu = []);
						for (var i = 0; i < n.length; i++) {
							var a = n[i];
							r.indexOf(a) === -1 && r.push(a);
						}
					}
				}
				Lu !== null && Lu(e, t);
			};
			var Ru = d(null), zu = Error(r(460)), Bu = Error(r(474)), Vu = Error(r(542)), Hu = { then: function() {} }, Uu = null, Wu = null, Gu = 0, Ku = at(!0), qu = at(!1), Ju = [], Yu = 0, Xu = 0, Zu = !1, Qu = !1, $u = d(null), J = d(0), Y = d(null), X = null, ed = d(0), td = 0, Z = null, nd = null, rd = null, id = !1, ad = !1, od = !1, sd = 0, cd = 0, ld = null, ud = 0, dd = {
				readContext: N,
				use: Gt,
				useCallback: Nt,
				useContext: Nt,
				useEffect: Nt,
				useImperativeHandle: Nt,
				useLayoutEffect: Nt,
				useInsertionEffect: Nt,
				useMemo: Nt,
				useReducer: Nt,
				useRef: Nt,
				useState: Nt,
				useDebugValue: Nt,
				useDeferredValue: Nt,
				useTransition: Nt,
				useSyncExternalStore: Nt,
				useId: Nt,
				useHostTransitionStatus: Nt,
				useFormState: Nt,
				useActionState: Nt,
				useOptimistic: Nt,
				useMemoCache: Nt,
				useCacheRefresh: Nt,
				useEffectEvent: Nt
			}, fd = {
				readContext: N,
				use: Gt,
				useCallback: function(e, t) {
					return Vt().memoizedState = [e, t === void 0 ? null : t], e;
				},
				useContext: N,
				useEffect: Cn,
				useImperativeHandle: function(e, t, n) {
					n = n == null ? null : n.concat([e]), xn(4194308, 4, kn.bind(null, t, e), n);
				},
				useLayoutEffect: function(e, t) {
					return xn(4194308, 4, e, t);
				},
				useInsertionEffect: function(e, t) {
					xn(4, 2, e, t);
				},
				useMemo: function(e, t) {
					var n = Vt();
					t = t === void 0 ? null : t;
					var r = e();
					if (od) {
						te(!0);
						try {
							e();
						} finally {
							te(!1);
						}
					}
					return n.memoizedState = [r, t], r;
				},
				useReducer: function(e, t, n) {
					var r = Vt();
					if (n !== void 0) {
						var i = n(t);
						if (od) {
							te(!0);
							try {
								n(t);
							} finally {
								te(!1);
							}
						}
					} else i = t;
					return r.memoizedState = r.baseState = i, e = {
						pending: null,
						lanes: 0,
						dispatch: null,
						lastRenderedReducer: e,
						lastRenderedState: i
					}, r.queue = e, e = e.dispatch = Hn.bind(null, Z, e), [r.memoizedState, e];
				},
				useRef: function(e) {
					var t = Vt();
					return e = { current: e }, t.memoizedState = e;
				},
				useState: function(e) {
					e = rn(e);
					var t = e.queue, n = Un.bind(null, Z, t);
					return t.dispatch = n, [e.memoizedState, n];
				},
				useDebugValue: jn,
				useDeferredValue: function(e, t) {
					return Pn(Vt(), e, t);
				},
				useTransition: function() {
					var e = rn(!1);
					return e = In.bind(null, Z, e.queue, !0, !1), Vt().memoizedState = e, [!1, e];
				},
				useSyncExternalStore: function(e, t, n) {
					var i = Z, a = Vt();
					if (q) {
						if (n === void 0) throw Error(r(407));
						n = n();
					} else {
						if (n = t(), Kd === null) throw Error(r(349));
						qd & 127 || Qt(i, t, n);
					}
					a.memoizedState = n;
					var o = {
						value: n,
						getSnapshot: t
					};
					return a.queue = o, Cn(en.bind(null, i, o, e), [e]), i.flags |= 2048, yn(9, { destroy: void 0 }, $t.bind(null, i, o, n, t), null), n;
				},
				useId: function() {
					var e = Vt(), t = Kd.identifierPrefix;
					if (q) {
						var n = lu, r = cu;
						n = (r & ~(1 << 32 - Ol(r) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = sd++, 0 < n && (t += "H" + n.toString(32)), t += "_";
					} else n = ud++, t = "_" + t + "r_" + n.toString(32) + "_";
					return e.memoizedState = t;
				},
				useHostTransitionStatus: Rn,
				useFormState: mn,
				useActionState: mn,
				useOptimistic: function(e) {
					var t = Vt();
					t.memoizedState = t.baseState = e;
					var n = {
						pending: null,
						lanes: 0,
						dispatch: null,
						lastRenderedReducer: null,
						lastRenderedState: null
					};
					return t.queue = n, t = Gn.bind(null, Z, !0, n), n.dispatch = t, [e, t];
				},
				useMemoCache: Kt,
				useCacheRefresh: function() {
					return Vt().memoizedState = Vn.bind(null, Z);
				},
				useEffectEvent: function(e) {
					var t = Vt(), n = { impl: e };
					return t.memoizedState = n, function() {
						if (Q & 2) throw Error(r(440));
						return n.impl.apply(void 0, arguments);
					};
				}
			}, pd = {
				readContext: N,
				use: Gt,
				useCallback: Mn,
				useContext: N,
				useEffect: wn,
				useImperativeHandle: An,
				useInsertionEffect: Dn,
				useLayoutEffect: On,
				useMemo: Nn,
				useReducer: Jt,
				useRef: bn,
				useState: function() {
					return Jt(qt);
				},
				useDebugValue: jn,
				useDeferredValue: function(e, t) {
					return Fn(Ht(), nd.memoizedState, e, t);
				},
				useTransition: function() {
					var e = Jt(qt)[0], t = Ht().memoizedState;
					return [typeof e == "boolean" ? e : Wt(e), t];
				},
				useSyncExternalStore: Zt,
				useId: zn,
				useHostTransitionStatus: Rn,
				useFormState: hn,
				useActionState: hn,
				useOptimistic: function(e, t) {
					return an(Ht(), nd, e, t);
				},
				useMemoCache: Kt,
				useCacheRefresh: Bn,
				useEffectEvent: En
			}, md = {
				readContext: N,
				use: Gt,
				useCallback: Mn,
				useContext: N,
				useEffect: wn,
				useImperativeHandle: An,
				useInsertionEffect: Dn,
				useLayoutEffect: On,
				useMemo: Nn,
				useReducer: Xt,
				useRef: bn,
				useState: function() {
					return Xt(qt);
				},
				useDebugValue: jn,
				useDeferredValue: function(e, t) {
					var n = Ht();
					return nd === null ? Pn(n, e, t) : Fn(n, nd.memoizedState, e, t);
				},
				useTransition: function() {
					var e = Xt(qt)[0], t = Ht().memoizedState;
					return [typeof e == "boolean" ? e : Wt(e), t];
				},
				useSyncExternalStore: Zt,
				useId: zn,
				useHostTransitionStatus: Rn,
				useFormState: vn,
				useActionState: vn,
				useOptimistic: function(e, t) {
					var n = Ht();
					return nd === null ? (n.baseState = e, [e, n.queue.dispatch]) : an(n, nd, e, t);
				},
				useMemoCache: Kt,
				useCacheRefresh: Bn,
				useEffectEvent: En
			}, hd = {
				enqueueSetState: function(e, t, n) {
					e = e._reactInternals;
					var r = ya(), i = mt(r);
					i.payload = t, n != null && (i.callback = n), t = ht(e, i, r), t !== null && (Sa(t, e, r), gt(t, e, r));
				},
				enqueueReplaceState: function(e, t, n) {
					e = e._reactInternals;
					var r = ya(), i = mt(r);
					i.tag = 1, i.payload = t, n != null && (i.callback = n), t = ht(e, i, r), t !== null && (Sa(t, e, r), gt(t, e, r));
				},
				enqueueForceUpdate: function(e, t) {
					e = e._reactInternals;
					var n = ya(), r = mt(n);
					r.tag = 2, t != null && (r.callback = t), t = ht(e, r, n), t !== null && (Sa(t, e, n), gt(t, e, n));
				}
			}, gd = Error(r(461)), _d = !1, vd = {
				dehydrated: null,
				treeContext: null,
				retryLane: 0,
				hydrationErrors: null
			}, yd = !1, bd = !1, xd = null, Sd = null, Cd = 0, wd = !1, Td = !1, Ed = !1, Dd = !1, Od = typeof WeakSet == "function" ? WeakSet : Set, kd = null, Ad = !1, jd = !1, Md = !1, Nd = !1, Pd = null, Fd = !1, Id = null, Ld = 8192, Rd = {
				getCacheForType: function(e) {
					var t = N(Tu), n = t.data.get(e);
					return n === void 0 && (n = e(), t.data.set(e, n)), n;
				},
				cacheSignal: function() {
					return N(Tu).controller.signal;
				}
			}, zd = 0, Bd = 1, Vd = 2, Hd = 3, Ud = 4;
			if (typeof Symbol == "function" && Symbol.for) {
				var Wd = Symbol.for;
				zd = Wd("selector.component"), Bd = Wd("selector.has_pseudo_class"), Vd = Wd("selector.role"), Hd = Wd("selector.test_id"), Ud = Wd("selector.text");
			}
			var Gd = typeof WeakMap == "function" ? WeakMap : Map, Q = 0, Kd = null, $ = null, qd = 0, Jd = 0, Yd = null, Xd = !1, Zd = !1, Qd = !1, $d = 0, ef = 0, tf = 0, nf = 0, rf = 0, af = 0, of = 0, sf = null, cf = null, lf = !1, uf = 0, df = 0, ff = 1 / 0, pf = null, mf = null, hf = 0, gf = null, _f = null, vf = 0, yf = 0, bf = null, xf = null, Sf = null, Cf = null, wf = null, Tf = 0, Ef = null;
			return B.attemptContinuousHydration = function(e) {
				if (e.tag === 13 || e.tag === 31) {
					var t = lt(e, 67108864);
					t !== null && Sa(t, e, 67108864), So(e, 67108864);
				}
			}, B.attemptHydrationAtCurrentPriority = function(e) {
				if (e.tag === 13 || e.tag === 31) {
					var t = ya();
					t = D(t);
					var n = lt(e, t);
					n !== null && Sa(n, e, t), So(e, t);
				}
			}, B.attemptSynchronousHydration = function(e) {
				switch (e.tag) {
					case 3:
						if (e = e.stateNode, e.current.memoizedState.isDehydrated) {
							var t = h(e.pendingLanes);
							if (t !== 0) {
								for (e.pendingLanes |= 2, e.entangledLanes |= 2; t;) {
									var n = 1 << 31 - Ol(t);
									e.entanglements[1] |= n, t &= ~n;
								}
								Ie(e), !(Q & 6) && (ff = Rl() + 500, Le(0, !1));
							}
						}
						break;
					case 31:
					case 13: t = lt(e, 2), t !== null && Sa(t, e, 2), Da(), So(e, 2);
				}
			}, B.batchedUpdates = function(e, t) {
				return e(t);
			}, B.createComponentSelector = function(e) {
				return {
					$$typeof: zd,
					value: e
				};
			}, B.createContainer = function(e, t, n, r, i, a, o, s, c, l) {
				return _o(e, t, !1, null, n, r, a, null, o, s, c, l);
			}, B.createHasPseudoClassSelector = function(e) {
				return {
					$$typeof: Bd,
					value: e
				};
			}, B.createHydrationContainer = function(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
				return e = _o(n, r, !0, e, i, a, s, p, c, l, u, d), e.context = vo(null), n = e.current, r = ya(), r = D(r), i = mt(r), i.callback = t ?? null, ht(n, i, r), t = r, e.current.lanes = t, S(e, t), Ie(e), e;
			}, B.createPortal = function(e, t, n) {
				var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
				return {
					$$typeof: Oo,
					key: r == null ? null : r === U ? U : "" + r,
					children: e,
					containerInfo: t,
					implementation: n
				};
			}, B.createRoleSelector = function(e) {
				return {
					$$typeof: Vd,
					value: e
				};
			}, B.createTestNameSelector = function(e) {
				return {
					$$typeof: Hd,
					value: e
				};
			}, B.createTextSelector = function(e) {
				return {
					$$typeof: Ud,
					value: e
				};
			}, B.defaultOnCaughtError = function(e) {
				console.error(e);
			}, B.defaultOnRecoverableError = function(e) {
				Yl(e);
			}, B.defaultOnUncaughtError = function(e) {
				Yl(e);
			}, B.deferredUpdates = function(e) {
				var t = W.T, n = K();
				try {
					return fs(32), W.T = null, e();
				} finally {
					fs(n), W.T = t;
				}
			}, B.discreteUpdates = function(e, t, n, r, i) {
				var a = W.T, o = K();
				try {
					return fs(2), W.T = null, e(t, n, r, i);
				} finally {
					fs(o), W.T = a, Q === 0 && (ff = Rl() + 500);
				}
			}, B.findAllNodes = va, B.findBoundingRects = function(e, t) {
				if (!ks) throw Error(r(363));
				t = va(e, t), e = [];
				for (var n = 0; n < t.length; n++) e.push(js(t[n]));
				for (t = e.length - 1; 0 < t; t--) {
					n = e[t];
					for (var i = n.x, a = i + n.width, o = n.y, s = o + n.height, c = t - 1; 0 <= c; c--) if (t !== c) {
						var l = e[c], u = l.x, d = u + l.width, f = l.y, p = f + l.height;
						if (i >= u && o >= f && a <= d && s <= p) {
							e.splice(t, 1);
							break;
						}
						if (i !== u || n.width !== l.width || p < o || f > s) {
							if (!(o !== f || n.height !== l.height || d < i || u > a)) {
								u > i && (l.width += u - i, l.x = i), d < a && (l.width = a - u), e.splice(t, 1);
								break;
							}
						} else {
							f > o && (l.height += f - o, l.y = o), p < s && (l.height = s - f), e.splice(t, 1);
							break;
						}
					}
				}
				return e;
			}, B.findHostInstance = yo, B.findHostInstanceWithNoPortals = function(e) {
				return e = o(e), e = e === null ? null : c(e), e === null ? null : Jo(e.stateNode);
			}, B.findHostInstanceWithWarning = function(e) {
				return yo(e);
			}, B.flushPassiveEffects = Za, B.flushSyncFromReconciler = function(e) {
				var t = Q;
				Q |= 1;
				var n = W.T, r = K();
				try {
					if (fs(2), W.T = null, e) return e();
				} finally {
					fs(r), W.T = n, Q = t, !(Q & 6) && Le(0, !1);
				}
			}, B.flushSyncWork = Da, B.focusWithin = function(e, t) {
				if (!ks) throw Error(r(363));
				for (e = ma(e), t = _a(e, t), t = Array.from(t), e = 0; e < t.length;) {
					var n = t[e++], i = n.tag;
					if (!Ns(n)) {
						if ((i === 5 || i === 26 || i === 27) && Fs(n.stateNode)) return !0;
						for (n = n.child; n !== null;) t.push(n), n = n.sibling;
					}
				}
				return !1;
			}, B.getFindAllNodesFailureDescription = function(e, t) {
				if (!ks) throw Error(r(363));
				var n = 0, i = [];
				e = [ma(e), 0];
				for (var a = 0; a < e.length;) {
					var o = e[a++], s = o.tag, c = e[a++], l = t[c];
					if ((s !== 5 && s !== 26 && s !== 27 || !Ns(o)) && (ha(o, l) && (i.push(ga(l)), c++, c > n && (n = c)), c < t.length)) for (o = o.child; o !== null;) e.push(o, c), o = o.sibling;
				}
				if (n < t.length) {
					for (e = []; n < t.length; n++) e.push(ga(t[n]));
					return "findAllNodes was able to match part of the selector:\n  " + (i.join(" > ") + "\n\nNo matching component was found for:\n  ") + e.join(" > ");
				}
				return null;
			}, B.getPublicRootInstance = function(e) {
				if (e = e.current, !e.child) return null;
				switch (e.child.tag) {
					case 27:
					case 5: return Jo(e.child.stateNode);
					default: return e.child.stateNode;
				}
			}, B.injectIntoDevTools = function() {
				var e = {
					bundleType: 0,
					version: Go,
					rendererPackageName: Ko,
					currentDispatcherRef: W,
					reconcilerVersion: "19.3.0"
				};
				if (qo !== null && (e.rendererConfig = qo), typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u") e = !1;
				else {
					var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
					if (t.isDisabled || !t.supportsFiber) e = !0;
					else {
						try {
							Gl = t.inject(e), Kl = t;
						} catch {}
						e = !!t.checkDCE;
					}
				}
				return e;
			}, B.isAlreadyRendering = function() {
				return !!(Q & 6);
			}, B.observeVisibleRects = function(e, t, n, i) {
				if (!ks) throw Error(r(363));
				e = va(e, t);
				var a = Is(e, n, i).disconnect;
				return { disconnect: function() {
					a();
				} };
			}, B.shouldError = function() {
				return null;
			}, B.shouldSuspend = function() {
				return !1;
			}, B.startHostTransition = function(e, t, i, a) {
				if (e.tag !== 5) throw Error(r(476));
				var o = Ln(e).queue;
				In(e, o, t, ws, i === null ? n : function() {
					var t = Ln(e);
					return t.next === null && (t = e.alternate.memoizedState), Wn(e, t.next.queue, {}, ya()), i(a);
				});
			}, B.updateContainer = function(e, t, n, r) {
				var i = t.current, a = ya();
				return bo(i, a, e, t, n, r), a;
			}, B.updateContainerSync = function(e, t, n, r) {
				return bo(t.current, 2, e, t, n, r), 2;
			}, B;
		}, e.exports.default = e.exports, Object.defineProperty(e.exports, "__esModule", { value: !0 });
	}(Tr)), Tr.exports;
}
({ exports: {} }).exports;
var Or;
function kr() {
	return Or || (Or = 1, wr.exports = Dr()), wr.exports;
}
var Ar = Cr(kr()), jr = {}, Mr = 0, Nr = (e) => `${e[0].toUpperCase()}${e.slice(1)}`;
function Pr(e) {
	return e in jr;
}
function Fr(e) {
	return jr[e];
}
function Ir(e) {
	if (typeof e == "function") {
		let t = `${Mr++}`;
		return jr[t] = e, t;
	}
	Object.assign(jr, e);
}
function Lr(e) {
	let t = Ar(e);
	return t.injectIntoDevTools(), t;
}
var Rr = 0, zr = /^three(?=[A-Z])/;
function Br(e, t) {
	let n = Nr(e), r = Fr(n);
	if (e !== "primitive" && !r) throw Error(`R3F: ${n} is not part of the THREE namespace! Did you forget to extend? See: https://docs.pmnd.rs/react-three-fiber/api/objects#using-3rd-party-objects-declaratively`);
	if (e === "primitive" && !t.object) throw Error("R3F: Primitives without 'object' are invalid!");
	if (t.args !== void 0 && !Array.isArray(t.args)) throw Error("R3F: The args prop must be an array!");
}
function Vr(e, t, n) {
	var r;
	return e = Pr(Nr(e)) ? e : e.replace(zr, ""), Br(e, t), e === "primitive" && (r = t.object) != null && r.__r3f && delete t.object.__r3f, kn(t.object, n, e, t);
}
function Hr(e) {
	if (!e.isHidden) {
		var t;
		e.props.attach && (t = e.parent) != null && t.object ? Nn(e.parent, e) : Un(e.object) && (e.previousVisible = e.object.visible, e.object.visible = !1), e.isHidden = !0, Vn(e);
	}
}
function Ur(e) {
	if (e.isHidden) {
		var t;
		e.props.attach && (t = e.parent) != null && t.object ? Mn(e.parent, e) : Un(e.object) && (e.object.visible = e.previousVisible ?? !0), e.previousVisible = void 0, e.isHidden = !1, Vn(e);
	}
}
function Wr(e, t, n) {
	let r = t.root.getState();
	if (e.parent || e.object === r.scene) {
		if (!t.object) {
			let e = Fr(Nr(t.type));
			t.object = t.props.object ?? new e(...t.props.args ?? []), t.object.__r3f = t;
		}
		if (Bn(t.object, t.props), t.props.attach) Mn(e, t);
		else if (Un(t.object) && Un(e.object)) {
			let r = e.object.children.indexOf(n?.object);
			if (n && r !== -1) {
				let n = e.object.children.indexOf(t.object);
				if (n !== -1) {
					e.object.children.splice(n, 1);
					let i = n < r ? r - 1 : r;
					e.object.children.splice(i, 0, t.object);
				} else t.object.parent = e.object, e.object.children.splice(r, 0, t.object), t.object.dispatchEvent({ type: "added" }), e.object.dispatchEvent({
					type: "childadded",
					child: t.object
				});
			} else e.object.add(t.object);
		}
		for (let e of t.children) Wr(t, e);
		Vn(t);
	}
}
function Gr(e, t) {
	if (t) {
		if (t.parent === e) {
			let n = e.children.indexOf(t);
			n !== -1 && e.children.splice(n, 1);
		}
		t.parent = e, e.children.push(t), Wr(e, t);
	}
}
function Kr(e, t, n) {
	if (!t || !n) return;
	if (t.parent === e) {
		let n = e.children.indexOf(t);
		n !== -1 && e.children.splice(n, 1);
	}
	t.parent = e;
	let r = e.children.indexOf(n);
	r === -1 ? e.children.push(t) : e.children.splice(r, 0, t), Wr(e, t, n);
}
function qr(e) {
	if (typeof e.dispose == "function") {
		let t = () => {
			try {
				e.dispose();
			} catch {}
		};
		typeof IS_REACT_ACT_ENVIRONMENT < "u" ? t() : (0, sn.unstable_scheduleCallback)(sn.unstable_IdlePriority, t);
	}
}
function Jr(e, t, n) {
	if (!t) return;
	let r = !!t.parent;
	t.parent = null;
	let i = e.children.indexOf(t);
	i !== -1 && e.children.splice(i, 1), t.props.attach ? Nn(e, t) : Un(t.object) && Un(e.object) && (e.object.remove(t.object), qn(gn(t), t.object));
	let a = t.props.dispose !== null && n !== !1;
	for (let e = t.children.length - 1; e >= 0; e--) {
		let n = t.children[e];
		Jr(t, n, a);
	}
	if (t.children.length = 0, delete t.object.__r3f, a && t.type !== "primitive" && t.object.type !== "Scene" && qr(t.object), n === void 0 && r) {
		var o;
		let e = (o = t.root) == null || o.getState == null ? void 0 : o.getState();
		e && e.internal.frames === 0 && e.invalidate();
	}
}
function Yr(e, t) {
	for (let n of [e, e.alternate]) if (n !== null) {
		if (typeof n.ref == "function") {
			n.refCleanup == null || n.refCleanup();
			let e = n.ref(t);
			typeof e == "function" && (n.refCleanup = e);
		} else n.ref && (n.ref.current = t);
	}
}
var Xr = [];
function Zr() {
	if (Xr.length !== 0) try {
		Qr();
	} finally {
		Xr.length = 0;
	}
}
function Qr() {
	for (let [e] of Xr) {
		let t = e.parent;
		if (t) {
			e.props.attach ? Nn(t, e) : Un(e.object) && Un(t.object) && t.object.remove(e.object);
			for (let t of e.children) t.props.attach ? Nn(e, t) : Un(t.object) && Un(e.object) && e.object.remove(t.object);
		}
		e.isHidden && Ur(e), e.object.__r3f && delete e.object.__r3f, e.type !== "primitive" && qr(e.object);
	}
	for (let [e, t, n] of Xr) {
		e.props = t;
		let r = e.parent;
		if (r) {
			let t = Fr(Nr(e.type)), i = e.object;
			e.object = e.props.object ?? new t(...e.props.args ?? []), e.object.__r3f = e, Yr(n, e.object), Kn(gn(e), i, e.object), Bn(e.object, e.props), e.props.attach ? Mn(r, e) : Un(e.object) && Un(r.object) && r.object.add(e.object);
			for (let t of e.children) t.props.attach ? Mn(e, t) : Un(t.object) && Un(e.object) && e.object.add(t.object);
			Vn(e);
		}
	}
}
var $r = () => {}, ei = {}, ti = Rr;
function ni(e) {
	switch (e) {
		case "beforetoggle":
		case "cancel":
		case "click":
		case "close":
		case "contextmenu":
		case "copy":
		case "cut":
		case "auxclick":
		case "dblclick":
		case "dragend":
		case "dragstart":
		case "drop":
		case "focusin":
		case "focusout":
		case "input":
		case "invalid":
		case "keydown":
		case "keypress":
		case "keyup":
		case "mousedown":
		case "mouseup":
		case "paste":
		case "pause":
		case "play":
		case "pointercancel":
		case "pointerdown":
		case "pointerup":
		case "ratechange":
		case "reset":
		case "resize":
		case "seeked":
		case "submit":
		case "touchcancel":
		case "touchend":
		case "touchstart":
		case "volumechange":
		case "change":
		case "selectionchange":
		case "compositionstart":
		case "compositionend":
		case "compositionupdate":
		case "beforeinput":
		case "blur":
		case "fullscreenchange":
		case "focus":
		case "hashchange":
		case "popstate":
		case "select":
		case "selectstart": return gr;
		case "drag":
		case "dragenter":
		case "dragexit":
		case "dragleave":
		case "dragover":
		case "mousemove":
		case "mouseout":
		case "mouseover":
		case "pointermove":
		case "pointerout":
		case "pointerover":
		case "scroll":
		case "touchmove":
		case "wheel":
		case "mouseenter":
		case "mouseleave":
		case "pointerenter":
		case "pointerleave": return mr;
		case "message": switch ((0, sn.unstable_getCurrentPriorityLevel)()) {
			case sn.unstable_ImmediatePriority: return gr;
			case sn.unstable_UserBlockingPriority: return mr;
			case sn.unstable_NormalPriority:
			case sn.unstable_LowPriority: return hr;
			case sn.unstable_IdlePriority: return _r;
			default: return hr;
		}
		default: return hr;
	}
}
function ri(e) {
	typeof queueMicrotask == "function" ? queueMicrotask(e) : typeof Promise < "u" ? Promise.resolve().then(e).catch((e) => {
		setTimeout(() => {
			throw e;
		});
	}) : setTimeout(e);
}
var ii = /* @__PURE__ */ Lr({
	isPrimaryRenderer: !1,
	warnsIfNotActing: !1,
	supportsMutation: !0,
	supportsPersistence: !1,
	supportsHydration: !1,
	createInstance: Vr,
	removeChild: Jr,
	appendChild: Gr,
	appendInitialChild: Gr,
	insertBefore: Kr,
	appendChildToContainer(e, t) {
		let n = e.getState().scene.__r3f;
		t && n && Gr(n, t);
	},
	removeChildFromContainer(e, t) {
		let n = e.getState().scene.__r3f;
		t && n && Jr(n, t);
	},
	insertInContainerBefore(e, t, n) {
		let r = e.getState().scene.__r3f;
		t && n && r && Kr(r, t, n);
	},
	getRootHostContext: () => ei,
	getChildHostContext: () => ei,
	commitUpdate(e, t, n, r, i) {
		var a;
		Br(t, r);
		let o = !1;
		if (e.type === "primitive" && n.object !== r.object ? o = !0 : r.args?.length === n.args?.length ? (a = r.args) != null && a.some((e, t) => e !== n.args?.[t]) && (o = !0) : o = !0, o) Xr.push([
			e,
			On(r),
			i
		]);
		else {
			let t = Ln(e, r), n = e.props.attach;
			e.props = On(r), n === void 0 ? delete e.props.attach : e.props.attach = n, Object.keys(t).length && Bn(e.object, t);
		}
	},
	finalizeInitialChildren: () => !1,
	commitMount() {},
	getPublicInstance: (e) => e?.object,
	prepareForCommit: () => null,
	preparePortalMount: (e) => kn(e.getState().scene, e, "", {}),
	resetAfterCommit: Zr,
	shouldSetTextContent: () => !1,
	clearContainer: () => !1,
	hideInstance: Hr,
	unhideInstance: Ur,
	createTextInstance: $r,
	hideTextInstance: $r,
	unhideTextInstance: $r,
	supportsMicrotasks: !0,
	scheduleMicrotask: ri,
	scheduleTimeout: typeof setTimeout == "function" ? setTimeout : void 0,
	cancelTimeout: typeof clearTimeout == "function" ? clearTimeout : void 0,
	noTimeout: -1,
	getInstanceFromNode: () => null,
	beforeActiveInstanceBlur() {},
	afterActiveInstanceBlur() {},
	detachDeletedInstance() {},
	prepareScopeUpdate() {},
	getInstanceFromScope: () => null,
	shouldAttemptEagerTransition: () => !1,
	trackSchedulerEvent: () => {},
	resolveEventType: () => null,
	resolveEventTimeStamp: () => -1.1,
	requestPostPaintCallback() {},
	maySuspendCommit: () => !1,
	preloadInstance: () => !0,
	suspendInstance() {},
	waitForCommitToBeReady: () => null,
	NotPendingTransition: null,
	HostTransitionContext: /* @__PURE__ */ F.createContext(null),
	setCurrentUpdatePriority(e) {
		ti = e;
	},
	getCurrentUpdatePriority() {
		return ti;
	},
	resolveUpdatePriority() {
		if (ti !== Rr) return ti;
		let e = typeof window < "u" ? window.event?.type : void 0;
		return e === void 0 ? hr : ni(e);
	},
	resetFormInstance() {},
	rendererPackageName: "@react-three/fiber",
	rendererVersion: Sr.version,
	applyViewTransitionName(e, t, n) {},
	restoreViewTransitionName(e, t) {},
	cancelViewTransitionName(e, t, n) {},
	cancelRootViewTransitionName(e) {},
	restoreRootViewTransitionName(e) {},
	InstanceMeasurement: null,
	measureInstance: (e) => null,
	wasInstanceInViewport: (e) => !0,
	hasInstanceChanged: (e, t) => !1,
	hasInstanceAffectedParent: (e, t) => !1,
	suspendOnActiveViewTransition(e, t) {},
	startViewTransition(e, t, n, r, i, a, o, s, c, l, u) {
		return r(), i(), u?.(), o(), null;
	},
	startGestureTransition(e, t, n, r, i, a, o, s, c, l) {
		return o(), s(), l?.(), null;
	},
	stopViewTransition(e) {},
	addViewTransitionFinishedListener(e, t) {
		t();
	},
	createViewTransitionInstance: (e) => null,
	getCurrentGestureOffset(e) {
		throw Error("startGestureTransition is not yet supported in react-three-fiber.");
	},
	cloneMutableInstance(e, t) {
		return e;
	},
	cloneMutableTextInstance(e) {
		return e;
	},
	cloneRootViewTransitionContainer(e) {
		throw Error("Not implemented.");
	},
	removeRootViewTransitionClone(e, t) {
		throw Error("Not implemented.");
	},
	createFragmentInstance: (e) => null,
	updateFragmentInstanceFiber(e, t) {},
	commitNewChildToFragmentInstance(e, t) {},
	deleteChildFromFragmentInstance(e, t) {},
	measureClonedInstance: (e) => null,
	maySuspendCommitOnUpdate: (e, t, n) => !1,
	maySuspendCommitInSyncRender: (e, t) => !1,
	startSuspendingCommit: () => null,
	getSuspendedCommitReason: (e, t) => null
}), ai = /* @__PURE__ */ new Map();
function oi(e, t) {
	let n = e.state;
	switch (t.type) {
		case "use": return n.status !== "disposed" && (e.state = { status: "open" }, !0);
		case "unmount": return n.status !== "disposed" && (e.state = {
			status: "closing",
			token: t.token
		}, !0);
		case "dispose": return n.status !== "closing" || n.token !== t.token ? !1 : (e.state = { status: "disposed" }, !0);
	}
}
function si(e) {
	let t = ai.get(e), n = t?.fiber, r = t?.store;
	t && console.warn("R3F.createRoot should only be called once!");
	let i = typeof reportError == "function" ? reportError : console.error, a = r || ar(Ti, Ei), o = n || ii.createContainer(a, pr, null, !1, null, "", i, i, i, null), s = t || {
		fiber: o,
		store: a,
		state: { status: "open" },
		ready: Xn(void 0),
		configuration: {},
		ownsRenderer: !1
	};
	t || ai.set(e, s);
	let c = !1;
	return {
		get ready() {
			return s.ready;
		},
		configure(t = {}) {
			if (!oi(s, { type: "use" })) return Zn(/* @__PURE__ */ Error("R3F: Cannot configure a root after disposal has started."));
			let n = s.ready, { promise: r, resolve: i, reject: o } = Qn();
			s.ready = r;
			let c = (n) => {
				let r = a.getState();
				r.gl || (s.ownsRenderer = !$n(t.gl), r.set({ gl: n })), br(s, e, t), !s.unwatchDpr && (t.dpr === void 0 || Array.isArray(t.dpr)) && (s.unwatchDpr = xr(s)), i(this);
			}, l = () => {
				try {
					let n = a.getState().gl ?? er(e, t.gl);
					Yn(n) ? Promise.resolve(n).then(c).catch(o) : c(n);
				} catch (e) {
					o(e);
				}
			};
			return n.status === "pending" ? n.then(l, o) : l(), r;
		},
		render(t) {
			if (!oi(s, { type: "use" })) return a;
			if (!a.getState().gl && s.ready.status === "fulfilled" && this.configure(), s.ready.status === "rejected") throw s.ready.reason;
			let n = () => {
				if (s.state.status !== "open" || s.ready.status === "rejected") return;
				if (s.ready.status === "pending") {
					s.ready.then(n, i);
					return;
				}
				let r = s.configuration.previous?.onCreated, l = /*#__PURE__*/ (0, I.jsx)(ci, {
					store: a,
					children: t,
					onCreated: r,
					rootElement: e
				});
				c ? ii.updateContainer(l, o, null, bn) : (c = !0, ii.updateContainerSync(l, o, null, bn), ii.flushSyncWork());
			};
			return n(), a;
		},
		unmount() {
			ai.get(e) === s && ui(e);
		}
	};
}
function ci({ store: e, children: t, onCreated: n, rootElement: r }) {
	return cn(() => {
		let t = e.getState();
		t.set((e) => ({ internal: {
			...e.internal,
			active: !0
		} })), n && n(t), e.getState().events.connected || t.events.connect == null || t.events.connect(r);
	}, []), /*#__PURE__*/ (0, I.jsx)(ir.Provider, {
		value: e,
		children: t
	});
}
function li(e) {
	try {
		return e();
	} catch (e) {
		console.warn("[R3F] Error while unmounting root; teardown may be incomplete:", e);
	}
}
function ui(e, t) {
	let n = ai.get(e), r = Symbol("unmount");
	if (!n || !oi(n, {
		type: "unmount",
		token: r
	})) return;
	let i = () => {
		var a;
		if (n.ready.status === "pending") {
			n.ready.then(i, i);
			return;
		}
		if (!oi(n, {
			type: "dispose",
			token: r
		})) return;
		ai.delete(e);
		let o = n.store.getState();
		o.internal.active = !1, li(() => n.unwatchDpr == null ? void 0 : n.unwatchDpr()), li(() => o.events.disconnect == null ? void 0 : o.events.disconnect()), (a = o.gl) != null && a.xr && li(() => o.xr.disconnect()), o.scene && li(() => En(o.scene));
		let s = li(() => nr(o.gl, n.ownsRenderer));
		Yn(s) ? s.then(() => t?.(e)) : t?.(e);
	};
	ii.updateContainer(null, n.fiber, null, () => {
		n.state.status === "closing" && n.state.token === r && ii.updateContainer(null, n.fiber, null, i);
	});
}
var di = /* @__PURE__ */ new Set(), fi = /* @__PURE__ */ new Set(), pi = /* @__PURE__ */ new Set();
function mi(e, t) {
	if (e.size) for (let { callback: n } of e.values()) n(t);
}
function hi(e, t) {
	switch (e) {
		case "before": return mi(di, t);
		case "after": return mi(fi, t);
		case "tail": return mi(pi, t);
	}
}
var gi, _i;
function vi(e, t, n) {
	let r = t.clock.getDelta();
	t.frameloop === "never" && typeof e == "number" && (r = e - t.clock.elapsedTime, t.clock.oldTime = t.clock.elapsedTime, t.clock.elapsedTime = e), gi = t.internal.subscribers;
	for (let e = 0; e < gi.length; e++) _i = gi[e], _i.ref.current(_i.store.getState(), r, n);
	return !t.internal.priority && t.gl.render && t.gl.render(t.scene, t.camera), t.internal.frames = Math.max(0, t.internal.frames - 1), t.frameloop === "always" ? 1 : t.internal.frames;
}
var yi = !1, bi = !1, xi, Si, Ci;
function wi(e) {
	Si = requestAnimationFrame(wi), yi = !0, xi = 0, hi("before", e), bi = !0;
	for (let n of ai.values()) {
		var t;
		Ci = n.store.getState(), Ci.internal.active && (Ci.frameloop === "always" || Ci.internal.frames > 0) && !((t = Ci.gl.xr) != null && t.isPresenting) && (xi += vi(e, Ci));
	}
	if (bi = !1, hi("after", e), xi === 0) return hi("tail", e), yi = !1, cancelAnimationFrame(Si);
}
function Ti(e, t = 1) {
	var n;
	if (!e) return ai.forEach((e) => Ti(e.store.getState(), t));
	(n = e.gl.xr) != null && n.isPresenting || !e.internal.active || e.frameloop === "never" || (t > 1 ? e.internal.frames = Math.min(60, e.internal.frames + t) : bi ? e.internal.frames = 2 : e.internal.frames = 1, yi || (yi = !0, requestAnimationFrame(wi)));
}
function Ei(e, t = !0, n, r) {
	if (t && hi("before", e), n) vi(e, n, r);
	else for (let t of ai.values()) vi(e, t.store.getState());
	t && hi("after", e);
}
function Di(e, t, n) {
	return /*#__PURE__*/ (0, I.jsx)(ki, {
		children: e,
		container: t,
		state: n
	});
}
function Oi(e, t) {
	let { parentStore: n, container: r } = e, i = Vt((e, n) => ({
		...t,
		set: e,
		get: n,
		setEvents: (t) => e((e) => ({
			...e,
			events: {
				...e.events,
				...t
			}
		}))
	})), a = { current: n.getState() };
	return i.setState((t) => Ai(a.current, t, e)), {
		parentStore: n,
		container: r,
		portalStore: i,
		parentStateRef: a
	};
}
function ki({ state: e = {}, children: t, container: n }) {
	let r = or(), { events: i, size: a, ...o } = e, [s] = F.useState(() => new le()), [c] = F.useState(() => new M()), l = {
		parentStore: r,
		container: n,
		raycaster: s,
		pointer: c,
		events: i,
		size: a
	}, u = ln((e, t) => Ai(e, t, l)), [d, f] = F.useState(() => Oi(l, o));
	(d.parentStore !== r || d.container !== n) && f(Oi(l, o));
	let { portalStore: p, parentStateRef: m } = d;
	return cn(() => {
		let e = (e) => {
			m.current = e, p.setState((t) => u.current(e, t));
		}, t = r.subscribe(e), n = r.getState();
		return n !== m.current && e(n), t;
	}, [
		r,
		p,
		m
	]), /*#__PURE__*/ (0, I.jsx)(I.Fragment, { children: ii.createPortal(/*#__PURE__*/ (0, I.jsx)(ir.Provider, {
		value: p,
		children: t
	}), p, null) });
}
function Ai(e, t, n) {
	let { parentStore: r, container: i, raycaster: a, pointer: o, events: s, size: c } = n, l;
	if (t.camera && c) {
		let n = t.camera;
		l = e.viewport.getCurrentViewport(n, new He(), c), n !== e.camera && Hn(n, c);
	}
	return {
		...e,
		...t,
		scene: i,
		raycaster: a,
		pointer: o,
		mouse: o,
		previousRoot: r,
		events: {
			...e.events,
			...t.events,
			...s
		},
		size: {
			...e.size,
			...c
		},
		viewport: {
			...e.viewport,
			...l
		}
	};
}
var ji = {
	onClick: ["click", !1],
	onContextMenu: ["contextmenu", !1],
	onDoubleClick: ["dblclick", !1],
	onWheel: ["wheel", !0],
	onPointerDown: ["pointerdown", !0],
	onPointerUp: ["pointerup", !0],
	onPointerLeave: ["pointerleave", !0],
	onPointerMove: ["pointermove", !0],
	onPointerCancel: ["pointercancel", !0],
	onLostPointerCapture: ["lostpointercapture", !0]
};
function Mi(e) {
	let { handlePointer: t } = Jn(e);
	return {
		priority: 1,
		enabled: !0,
		compute(e, t, n) {
			t.pointer.set(e.offsetX / t.size.width * 2 - 1, -(e.offsetY / t.size.height) * 2 + 1), t.raycaster.setFromCamera(t.pointer, t.camera);
		},
		connected: void 0,
		handlers: Object.keys(ji).reduce((e, n) => ({
			...e,
			[n]: t(n)
		}), {}),
		update: () => {
			var t;
			let { events: n, internal: r } = e.getState();
			(t = r.lastEvent) != null && t.current && n.handlers && n.handlers.onPointerMove(r.lastEvent.current);
		},
		connect: (t) => {
			let { set: n, events: r } = e.getState();
			if (r.disconnect == null || r.disconnect(), n((e) => ({ events: {
				...e.events,
				connected: t
			} })), r.handlers) for (let e in r.handlers) {
				let n = r.handlers[e], [i, a] = ji[e];
				t.addEventListener(i, n, { passive: a });
			}
		},
		disconnect: () => {
			let { set: t, events: n } = e.getState();
			if (n.connected) {
				if (n.handlers) for (let e in n.handlers) {
					let t = n.handlers[e], [r] = ji[e];
					n.connected.removeEventListener(r, t);
				}
				t((e) => ({ events: {
					...e.events,
					connected: void 0
				} }));
			}
		}
	};
}
//#endregion
//#region node_modules/react-use-measure/dist/index.js
function Ni(e, t) {
	let n;
	return (...r) => {
		window.clearTimeout(n), n = window.setTimeout(() => e(...r), t);
	};
}
function Pi({ debounce: e, scroll: t, polyfill: n, offsetSize: r } = {
	debounce: 0,
	scroll: !1,
	offsetSize: !1
}) {
	let i = n || (typeof window > "u" ? class {} : window.ResizeObserver);
	if (!i) throw Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");
	let [a, o] = (0, F.useState)({
		left: 0,
		top: 0,
		width: 0,
		height: 0,
		bottom: 0,
		right: 0,
		x: 0,
		y: 0
	}), s = (0, F.useRef)({
		element: null,
		scrollContainers: null,
		resizeObserver: null,
		lastBounds: a,
		orientationHandler: null
	}), c = e ? typeof e == "number" ? e : e.scroll : null, l = e ? typeof e == "number" ? e : e.resize : null, u = (0, F.useRef)(!1);
	(0, F.useEffect)(() => (u.current = !0, () => void (u.current = !1)));
	let [d, f, p] = (0, F.useMemo)(() => {
		let e = () => {
			if (!s.current.element) return;
			let { left: e, top: t, width: n, height: i, bottom: a, right: c, x: l, y: d } = s.current.element.getBoundingClientRect(), f = {
				left: e,
				top: t,
				width: n,
				height: i,
				bottom: a,
				right: c,
				x: l,
				y: d
			};
			s.current.element instanceof HTMLElement && r && (f.height = s.current.element.offsetHeight, f.width = s.current.element.offsetWidth), Object.freeze(f), u.current && !zi(s.current.lastBounds, f) && o(s.current.lastBounds = f);
		};
		return [
			e,
			l ? Ni(e, l) : e,
			c ? Ni(e, c) : e
		];
	}, [
		o,
		r,
		c,
		l
	]);
	function m() {
		s.current.scrollContainers && (s.current.scrollContainers.forEach((e) => e.removeEventListener("scroll", p, !0)), s.current.scrollContainers = null), s.current.resizeObserver && (s.current.resizeObserver.disconnect(), s.current.resizeObserver = null), s.current.orientationHandler && ("orientation" in screen && "removeEventListener" in screen.orientation ? screen.orientation.removeEventListener("change", s.current.orientationHandler) : "onorientationchange" in window && window.removeEventListener("orientationchange", s.current.orientationHandler));
	}
	function h() {
		s.current.element && (s.current.resizeObserver = new i(p), s.current.resizeObserver.observe(s.current.element), t && s.current.scrollContainers && s.current.scrollContainers.forEach((e) => e.addEventListener("scroll", p, {
			capture: !0,
			passive: !0
		})), s.current.orientationHandler = () => {
			p();
		}, "orientation" in screen && "addEventListener" in screen.orientation ? screen.orientation.addEventListener("change", s.current.orientationHandler) : "onorientationchange" in window && window.addEventListener("orientationchange", s.current.orientationHandler));
	}
	return Ii(p, !!t), Fi(f), (0, F.useEffect)(() => {
		m(), h();
	}, [
		t,
		p,
		f
	]), (0, F.useEffect)(() => m, []), [
		(e) => {
			!e || e === s.current.element || (m(), s.current.element = e, s.current.scrollContainers = Li(e), h());
		},
		a,
		d
	];
}
function Fi(e) {
	(0, F.useEffect)(() => {
		let t = e;
		return window.addEventListener("resize", t), () => void window.removeEventListener("resize", t);
	}, [e]);
}
function Ii(e, t) {
	(0, F.useEffect)(() => {
		if (t) {
			let t = e;
			return window.addEventListener("scroll", t, {
				capture: !0,
				passive: !0
			}), () => void window.removeEventListener("scroll", t, !0);
		}
	}, [e, t]);
}
function Li(e) {
	let t = [];
	if (!e || e === document.body) return t;
	let { overflow: n, overflowX: r, overflowY: i } = window.getComputedStyle(e);
	return [
		n,
		r,
		i
	].some((e) => e === "auto" || e === "scroll") && t.push(e), [...t, ...Li(e.parentElement)];
}
var Ri = [
	"x",
	"y",
	"top",
	"bottom",
	"left",
	"right",
	"width",
	"height"
], zi = (e, t) => Ri.every((n) => e[n] === t[n]);
//#endregion
//#region node_modules/@react-three/fiber/dist/react-three-fiber.esm.js
function Bi({ ref: e, children: t, fallback: n, resize: r, style: i, gl: a, events: o = Mi, eventSource: s, eventPrefix: c, shadows: l, linear: u, flat: d, legacy: f, orthographic: p, frameloop: m, dpr: h, performance: g, raycaster: _, camera: v, scene: y, onPointerMissed: b, onCreated: x, ...S }) {
	F.useMemo(() => Ir(ie), []);
	let C = pn(), [w, T] = Pi({
		scroll: !0,
		debounce: {
			scroll: 50,
			resize: 0
		},
		...r
	}), E = F.useRef(null), D = F.useRef(null);
	F.useImperativeHandle(e, () => E.current);
	let ee = ln(b), te = F.useCallback((e) => ee.current == null ? void 0 : ee.current(e), [ee]), [ne, re] = F.useState(!1), [O, k] = F.useState(!1);
	if (ne) throw ne;
	if (O) throw O;
	let ae = F.useRef(null), [oe, se] = dn(), ce = F.useRef(null), le = () => s ? vn(s) ? s.current : s : D.current;
	return F.useInsertionEffect(() => () => {
		let e = ae.current;
		ae.current = null, e?.unmount();
	}, []), cn(() => {
		let e = E.current;
		T.width > 0 && T.height > 0 && e && (ae.current ||= si(e), ae.current.configure({
			gl: a,
			scene: y,
			events: o,
			shadows: l,
			linear: u,
			flat: d,
			legacy: f,
			orthographic: p,
			frameloop: m,
			dpr: h,
			performance: g,
			raycaster: _,
			camera: v,
			size: T,
			onPointerMissed: te,
			onCreated: (e) => {
				ce.current = e, e.events.connect == null || e.events.connect(le() ?? D.current), c && e.setEvents({ compute: (e, t) => {
					let n = e[c + "X"], r = e[c + "Y"];
					t.pointer.set(n / t.size.width * 2 - 1, -(r / t.size.height) * 2 + 1), t.raycaster.setFromCamera(t.pointer, t.camera);
				} }), x?.(e);
			}
		}).catch(k), ae.current.ready.status === "fulfilled" ? ae.current.render(/*#__PURE__*/ (0, I.jsx)(C, { children: /*#__PURE__*/ (0, I.jsx)(hn, {
			set: k,
			children: /*#__PURE__*/ (0, I.jsx)(F.Suspense, {
				fallback: /*#__PURE__*/ (0, I.jsx)(mn, { set: re }),
				children: t ?? null
			})
		}) })) : ae.current.ready.status === "pending" && se(ae.current.ready));
	}), F.useEffect(() => {
		let e = ce.current?.get(), t = le();
		e && t && e.events.connected !== t && (e.events.connect == null || e.events.connect(t));
	}), F.useEffect(() => {
		let e = E.current;
		return () => {
			var t;
			e.isConnected || (t = ae.current) == null || t.unmount();
		};
	}, []), /*#__PURE__*/ (0, I.jsxs)("div", {
		ref: D,
		style: {
			position: "relative",
			width: "100%",
			height: "100%",
			overflow: "hidden",
			pointerEvents: s ? "none" : "auto",
			...i
		},
		...S,
		children: [/*#__PURE__*/ (0, I.jsx)("div", {
			ref: w,
			style: {
				width: "100%",
				height: "100%"
			},
			children: /*#__PURE__*/ (0, I.jsx)("canvas", {
				ref: E,
				style: { display: "block" },
				children: n
			})
		}), oe]
	});
}
function Vi(e) {
	return /*#__PURE__*/ (0, I.jsx)(Qt, { children: /*#__PURE__*/ (0, I.jsx)(Bi, { ...e }) });
}
//#endregion
//#region node_modules/maath/dist/objectSpread2-284232a6.esm.js
function Hi(e, t, n) {
	return t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
new M(), new M();
//#endregion
//#region node_modules/maath/dist/classCallCheck-9098b006.esm.js
function Ui(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
//#endregion
//#region node_modules/maath/dist/index-0332b2ed.esm.js
var Wi = function e(t, n, r) {
	var i = this;
	Ui(this, e), Hi(this, "dot2", function(e, t) {
		return i.x * e + i.y * t;
	}), Hi(this, "dot3", function(e, t, n) {
		return i.x * e + i.y * t + i.z * n;
	}), this.x = t, this.y = n, this.z = r;
}, Gi = [
	new Wi(1, 1, 0),
	new Wi(-1, 1, 0),
	new Wi(1, -1, 0),
	new Wi(-1, -1, 0),
	new Wi(1, 0, 1),
	new Wi(-1, 0, 1),
	new Wi(1, 0, -1),
	new Wi(-1, 0, -1),
	new Wi(0, 1, 1),
	new Wi(0, -1, 1),
	new Wi(0, 1, -1),
	new Wi(0, -1, -1)
], Ki = [
	151,
	160,
	137,
	91,
	90,
	15,
	131,
	13,
	201,
	95,
	96,
	53,
	194,
	233,
	7,
	225,
	140,
	36,
	103,
	30,
	69,
	142,
	8,
	99,
	37,
	240,
	21,
	10,
	23,
	190,
	6,
	148,
	247,
	120,
	234,
	75,
	0,
	26,
	197,
	62,
	94,
	252,
	219,
	203,
	117,
	35,
	11,
	32,
	57,
	177,
	33,
	88,
	237,
	149,
	56,
	87,
	174,
	20,
	125,
	136,
	171,
	168,
	68,
	175,
	74,
	165,
	71,
	134,
	139,
	48,
	27,
	166,
	77,
	146,
	158,
	231,
	83,
	111,
	229,
	122,
	60,
	211,
	133,
	230,
	220,
	105,
	92,
	41,
	55,
	46,
	245,
	40,
	244,
	102,
	143,
	54,
	65,
	25,
	63,
	161,
	1,
	216,
	80,
	73,
	209,
	76,
	132,
	187,
	208,
	89,
	18,
	169,
	200,
	196,
	135,
	130,
	116,
	188,
	159,
	86,
	164,
	100,
	109,
	198,
	173,
	186,
	3,
	64,
	52,
	217,
	226,
	250,
	124,
	123,
	5,
	202,
	38,
	147,
	118,
	126,
	255,
	82,
	85,
	212,
	207,
	206,
	59,
	227,
	47,
	16,
	58,
	17,
	182,
	189,
	28,
	42,
	223,
	183,
	170,
	213,
	119,
	248,
	152,
	2,
	44,
	154,
	163,
	70,
	221,
	153,
	101,
	155,
	167,
	43,
	172,
	9,
	129,
	22,
	39,
	253,
	19,
	98,
	108,
	110,
	79,
	113,
	224,
	232,
	178,
	185,
	112,
	104,
	218,
	246,
	97,
	228,
	251,
	34,
	242,
	193,
	238,
	210,
	144,
	12,
	191,
	179,
	162,
	241,
	81,
	51,
	145,
	235,
	249,
	14,
	239,
	107,
	49,
	192,
	214,
	31,
	181,
	199,
	106,
	157,
	184,
	84,
	204,
	176,
	115,
	121,
	50,
	45,
	127,
	4,
	150,
	254,
	138,
	236,
	205,
	93,
	222,
	114,
	67,
	29,
	24,
	72,
	243,
	141,
	128,
	195,
	78,
	66,
	215,
	61,
	156,
	180
], qi = Array(512), Ji = Array(512);
(function(e) {
	e > 0 && e < 1 && (e *= 65536), e = Math.floor(e), e < 256 && (e |= e << 8);
	for (var t = 0; t < 256; t++) {
		var n = t & 1 ? Ki[t] ^ e & 255 : Ki[t] ^ e >> 8 & 255;
		qi[t] = qi[t + 256] = n, Ji[t] = Ji[t + 256] = Gi[n % 12];
	}
})(0), .5 * (Math.sqrt(3) - 1), (3 - Math.sqrt(3)) / 6;
function Yi(e) {
	if (typeof e == "number") e = Math.abs(e);
	else if (typeof e == "string") {
		var t = e;
		e = 0;
		for (var n = 0; n < t.length; n++) e = (e + (n + 1) * (t.charCodeAt(n) % 96)) % 2147483647;
	}
	return e === 0 && (e = 311), e;
}
function Xi(e) {
	var t = Yi(e);
	return function() {
		var e = t * 48271 % 2147483647;
		return t = e, e / 2147483647;
	};
}
new function e(t) {
	var n = this;
	Ui(this, e), Hi(this, "seed", 0), Hi(this, "init", function(e) {
		n.seed = e, n.value = Xi(e);
	}), Hi(this, "value", Xi(this.seed)), this.init(t);
}(Math.random());
//#endregion
//#region node_modules/three-stdlib/_polyfill/constants.js
var Zi = /* @__PURE__ */ parseInt("186".replace(/\D+/g, ""));
//#endregion
//#region node_modules/three-stdlib/utils/BufferGeometryUtils.js
function Qi(e, t) {
	if (t === 0) return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."), e;
	if (t === 2 || t === 1) {
		let n = e.getIndex();
		if (n === null) {
			let t = [], r = e.getAttribute("position");
			if (r !== void 0) {
				for (let e = 0; e < r.count; e++) t.push(e);
				e.setIndex(t), n = e.getIndex();
			} else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), e;
		}
		let r = n.count - 2, i = [];
		if (n) {
			if (t === 2) for (let e = 1; e <= r; e++) i.push(n.getX(0)), i.push(n.getX(e)), i.push(n.getX(e + 1));
			else for (let e = 0; e < r; e++) e % 2 == 0 ? (i.push(n.getX(e)), i.push(n.getX(e + 1)), i.push(n.getX(e + 2))) : (i.push(n.getX(e + 2)), i.push(n.getX(e + 1)), i.push(n.getX(e)));
		}
		i.length / 3 !== r && console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
		let a = e.clone();
		return a.setIndex(i), a.clearGroups(), a;
	}
	return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:", t), e;
}
//#endregion
//#region node_modules/three-stdlib/node_modules/fflate/esm/browser.js
var $i = Uint8Array, ea = Uint16Array, ta = Uint32Array, na = new $i([
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	1,
	1,
	1,
	1,
	2,
	2,
	2,
	2,
	3,
	3,
	3,
	3,
	4,
	4,
	4,
	4,
	5,
	5,
	5,
	5,
	0,
	0,
	0,
	0
]), ra = new $i([
	0,
	0,
	0,
	0,
	1,
	1,
	2,
	2,
	3,
	3,
	4,
	4,
	5,
	5,
	6,
	6,
	7,
	7,
	8,
	8,
	9,
	9,
	10,
	10,
	11,
	11,
	12,
	12,
	13,
	13,
	0,
	0
]), ia = new $i([
	16,
	17,
	18,
	0,
	8,
	7,
	9,
	6,
	10,
	5,
	11,
	4,
	12,
	3,
	13,
	2,
	14,
	1,
	15
]), aa = function(e, t) {
	for (var n = new ea(31), r = 0; r < 31; ++r) n[r] = t += 1 << e[r - 1];
	for (var i = new ta(n[30]), r = 1; r < 30; ++r) for (var a = n[r]; a < n[r + 1]; ++a) i[a] = a - n[r] << 5 | r;
	return [n, i];
}, oa = aa(na, 2), sa = oa[0], L = oa[1];
sa[28] = 258, L[258] = 28;
var ca = aa(ra, 0), la = ca[0];
ca[1];
for (var ua = new ea(32768), da = 0; da < 32768; ++da) {
	var fa = (da & 43690) >>> 1 | (da & 21845) << 1;
	fa = (fa & 52428) >>> 2 | (fa & 13107) << 2, fa = (fa & 61680) >>> 4 | (fa & 3855) << 4, ua[da] = ((fa & 65280) >>> 8 | (fa & 255) << 8) >>> 1;
}
for (var pa = (function(e, t, n) {
	for (var r = e.length, i = 0, a = new ea(t); i < r; ++i) ++a[e[i] - 1];
	var o = new ea(t);
	for (i = 0; i < t; ++i) o[i] = o[i - 1] + a[i - 1] << 1;
	var s;
	if (n) {
		s = new ea(1 << t);
		var c = 15 - t;
		for (i = 0; i < r; ++i) if (e[i]) for (var l = i << 4 | e[i], u = t - e[i], d = o[e[i] - 1]++ << u, f = d | (1 << u) - 1; d <= f; ++d) s[ua[d] >>> c] = l;
	} else for (s = new ea(r), i = 0; i < r; ++i) e[i] && (s[i] = ua[o[e[i] - 1]++] >>> 15 - e[i]);
	return s;
}), ma = new $i(288), da = 0; da < 144; ++da) ma[da] = 8;
for (var da = 144; da < 256; ++da) ma[da] = 9;
for (var da = 256; da < 280; ++da) ma[da] = 7;
for (var da = 280; da < 288; ++da) ma[da] = 8;
for (var ha = new $i(32), da = 0; da < 32; ++da) ha[da] = 5;
var ga = /*#__PURE__*/ pa(ma, 9, 1), _a = /*#__PURE__*/ pa(ha, 5, 1), va = function(e) {
	for (var t = e[0], n = 1; n < e.length; ++n) e[n] > t && (t = e[n]);
	return t;
}, ya = function(e, t, n) {
	var r = t / 8 | 0;
	return (e[r] | e[r + 1] << 8) >> (t & 7) & n;
}, ba = function(e, t) {
	var n = t / 8 | 0;
	return (e[n] | e[n + 1] << 8 | e[n + 2] << 16) >> (t & 7);
}, xa = function(e) {
	return (e / 8 | 0) + (e & 7 && 1);
}, Sa = function(e, t, n) {
	(t == null || t < 0) && (t = 0), (n == null || n > e.length) && (n = e.length);
	var r = new (e instanceof ea ? ea : e instanceof ta ? ta : $i)(n - t);
	return r.set(e.subarray(t, n)), r;
}, Ca = function(e, t, n) {
	var r = e.length;
	if (!r || n && !n.l && r < 5) return t || new $i(0);
	var i = !t || n, a = !n || n.i;
	n ||= {}, t ||= new $i(r * 3);
	var o = function(e) {
		var n = t.length;
		if (e > n) {
			var r = new $i(Math.max(n * 2, e));
			r.set(t), t = r;
		}
	}, s = n.f || 0, c = n.p || 0, l = n.b || 0, u = n.l, d = n.d, f = n.m, p = n.n, m = r * 8;
	do {
		if (!u) {
			n.f = s = ya(e, c, 1);
			var h = ya(e, c + 1, 3);
			if (c += 3, !h) {
				var g = xa(c) + 4, _ = e[g - 4] | e[g - 3] << 8, v = g + _;
				if (v > r) {
					if (a) throw "unexpected EOF";
					break;
				}
				i && o(l + _), t.set(e.subarray(g, v), l), n.b = l += _, n.p = c = v * 8;
				continue;
			}
			if (h == 1) u = ga, d = _a, f = 9, p = 5;
			else if (h == 2) {
				var y = ya(e, c, 31) + 257, b = ya(e, c + 10, 15) + 4, x = y + ya(e, c + 5, 31) + 1;
				c += 14;
				for (var S = new $i(x), C = new $i(19), w = 0; w < b; ++w) C[ia[w]] = ya(e, c + w * 3, 7);
				c += b * 3;
				for (var T = va(C), E = (1 << T) - 1, D = pa(C, T, 1), w = 0; w < x;) {
					var ee = D[ya(e, c, E)];
					c += ee & 15;
					var g = ee >>> 4;
					if (g < 16) S[w++] = g;
					else {
						var te = 0, ne = 0;
						for (g == 16 ? (ne = 3 + ya(e, c, 3), c += 2, te = S[w - 1]) : g == 17 ? (ne = 3 + ya(e, c, 7), c += 3) : g == 18 && (ne = 11 + ya(e, c, 127), c += 7); ne--;) S[w++] = te;
					}
				}
				var re = S.subarray(0, y), O = S.subarray(y);
				f = va(re), p = va(O), u = pa(re, f, 1), d = pa(O, p, 1);
			} else throw "invalid block type";
			if (c > m) {
				if (a) throw "unexpected EOF";
				break;
			}
		}
		i && o(l + 131072);
		for (var k = (1 << f) - 1, ie = (1 << p) - 1, ae = c;; ae = c) {
			var te = u[ba(e, c) & k], oe = te >>> 4;
			if (c += te & 15, c > m) {
				if (a) throw "unexpected EOF";
				break;
			}
			if (!te) throw "invalid length/literal";
			if (oe < 256) t[l++] = oe;
			else if (oe == 256) {
				ae = c, u = null;
				break;
			} else {
				var se = oe - 254;
				if (oe > 264) {
					var w = oe - 257, ce = na[w];
					se = ya(e, c, (1 << ce) - 1) + sa[w], c += ce;
				}
				var le = d[ba(e, c) & ie], ue = le >>> 4;
				if (!le) throw "invalid distance";
				c += le & 15;
				var O = la[ue];
				if (ue > 3) {
					var ce = ra[ue];
					O += ba(e, c) & (1 << ce) - 1, c += ce;
				}
				if (c > m) {
					if (a) throw "unexpected EOF";
					break;
				}
				i && o(l + 131072);
				for (var de = l + se; l < de; l += 4) t[l] = t[l - O], t[l + 1] = t[l + 1 - O], t[l + 2] = t[l + 2 - O], t[l + 3] = t[l + 3 - O];
				l = de;
			}
		}
		n.l = u, n.p = ae, n.b = l, u && (s = 1, n.m = f, n.d = d, n.n = p);
	} while (!s);
	return l == t.length ? t : Sa(t, 0, l);
}, wa = /*#__PURE__*/ new $i(0), Ta = function(e) {
	if ((e[0] & 15) != 8 || e[0] >>> 4 > 7 || (e[0] << 8 | e[1]) % 31) throw "invalid zlib data";
	if (e[1] & 32) throw "invalid zlib data: preset dictionaries not supported";
};
function Ea(e, t) {
	return Ca((Ta(e), e.subarray(2, -4)), t);
}
var Da = typeof TextDecoder < "u" && /*#__PURE__*/ new TextDecoder();
try {
	Da.decode(wa, { stream: !0 });
} catch {}
//#endregion
//#region node_modules/three-stdlib/objects/GroundProjectedEnv.js
var Oa = (e) => e && e.isCubeTexture, ka = class extends c {
	constructor(e, t) {
		let n = Oa(e), r = ((n ? e.image[0]?.width : e.image.width) ?? 1024) / 4, i = Math.floor(Math.log2(r)), a = 2 ** i, o = 3 * Math.max(a, 112), s = 4 * a, c = [
			n ? "#define ENVMAP_TYPE_CUBE" : "",
			`#define CUBEUV_TEXEL_WIDTH ${1 / o}`,
			`#define CUBEUV_TEXEL_HEIGHT ${1 / s}`,
			`#define CUBEUV_MAX_MIP ${i}.0`
		].join("\n") + `
        #define ENVMAP_TYPE_CUBE_UV
        varying vec3 vWorldPosition;
        uniform float radius;
        uniform float height;
        uniform float angle;
        #ifdef ENVMAP_TYPE_CUBE
            uniform samplerCube map;
        #else
            uniform sampler2D map;
        #endif
        // From: https://www.shadertoy.com/view/4tsBD7
        float diskIntersectWithBackFaceCulling( vec3 ro, vec3 rd, vec3 c, vec3 n, float r ) 
        {
            float d = dot ( rd, n );
            
            if( d > 0.0 ) { return 1e6; }
            
            vec3  o = ro - c;
            float t = - dot( n, o ) / d;
            vec3  q = o + rd * t;
            
            return ( dot( q, q ) < r * r ) ? t : 1e6;
        }
        // From: https://www.iquilezles.org/www/articles/intersectors/intersectors.htm
        float sphereIntersect( vec3 ro, vec3 rd, vec3 ce, float ra ) 
        {
            vec3 oc = ro - ce;
            float b = dot( oc, rd );
            float c = dot( oc, oc ) - ra * ra;
            float h = b * b - c;
            
            if( h < 0.0 ) { return -1.0; }
            
            h = sqrt( h );
            
            return - b + h;
        }
        vec3 project() 
        {
            vec3 p = normalize( vWorldPosition );
            vec3 camPos = cameraPosition;
            camPos.y -= height;
            float intersection = sphereIntersect( camPos, p, vec3( 0.0 ), radius );
            if( intersection > 0.0 ) {
                
                vec3 h = vec3( 0.0, - height, 0.0 );
                float intersection2 = diskIntersectWithBackFaceCulling( camPos, p, h, vec3( 0.0, 1.0, 0.0 ), radius );
                p = ( camPos + min( intersection, intersection2 ) * p ) / radius;
            } else {
                p = vec3( 0.0, 1.0, 0.0 );
            }
            return p;
        }
        #include <common>
        #include <cube_uv_reflection_fragment>
        void main() 
        {
            vec3 projectedWorldPosition = project();
            
            #ifdef ENVMAP_TYPE_CUBE
                vec3 outcolor = textureCube( map, projectedWorldPosition ).rgb;
            #else
                vec3 direction = normalize( projectedWorldPosition );
                vec2 uv = equirectUv( direction );
                vec3 outcolor = texture2D( map, uv ).rgb;
            #endif
            gl_FragColor = vec4( outcolor, 1.0 );
            #include <tonemapping_fragment>
            #include <${Zi >= 154 ? "colorspace_fragment" : "encodings_fragment"}>
        }
        `, l = {
			map: { value: e },
			height: { value: t?.height || 15 },
			radius: { value: t?.radius || 100 }
		}, u = new pe(1, 16), d = new x({
			uniforms: l,
			fragmentShader: c,
			vertexShader: "\n        varying vec3 vWorldPosition;\n        void main() \n        {\n            vec4 worldPosition = ( modelMatrix * vec4( position, 1.0 ) );\n            vWorldPosition = worldPosition.xyz;\n            \n            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n        }\n        ",
			side: 2
		});
		super(u, d);
	}
	set radius(e) {
		this.material.uniforms.radius.value = e;
	}
	get radius() {
		return this.material.uniforms.radius.value;
	}
	set height(e) {
		this.material.uniforms.height.value = e;
	}
	get height() {
		return this.material.uniforms.height.value;
	}
};
//#endregion
//#region node_modules/three-stdlib/_polyfill/LoaderUtils.js
function Aa(e) {
	if (typeof TextDecoder < "u") return new TextDecoder().decode(e);
	let t = "";
	for (let n = 0, r = e.length; n < r; n++) t += String.fromCharCode(e[n]);
	try {
		return decodeURIComponent(escape(t));
	} catch {
		return t;
	}
}
//#endregion
//#region node_modules/three-stdlib/loaders/GLTFLoader.js
var ja = "srgb", Ma = "srgb-linear", Na = 3001, Pa = 3e3, Fa = class extends ye {
	constructor(e) {
		super(e), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(e) {
			return new Ba(e);
		}), this.register(function(e) {
			return new Va(e);
		}), this.register(function(e) {
			return new Xa(e);
		}), this.register(function(e) {
			return new Za(e);
		}), this.register(function(e) {
			return new Qa(e);
		}), this.register(function(e) {
			return new Ua(e);
		}), this.register(function(e) {
			return new Wa(e);
		}), this.register(function(e) {
			return new Ga(e);
		}), this.register(function(e) {
			return new Ka(e);
		}), this.register(function(e) {
			return new za(e);
		}), this.register(function(e) {
			return new qa(e);
		}), this.register(function(e) {
			return new Ha(e);
		}), this.register(function(e) {
			return new Ya(e);
		}), this.register(function(e) {
			return new Ja(e);
		}), this.register(function(e) {
			return new La(e);
		}), this.register(function(e) {
			return new $a(e);
		}), this.register(function(e) {
			return new z(e);
		});
	}
	load(e, t, n, r) {
		let i = this, a;
		if (this.resourcePath !== "") a = this.resourcePath;
		else if (this.path !== "") {
			let t = ft.extractUrlBase(e);
			a = ft.resolveURL(t, this.path);
		} else a = ft.extractUrlBase(e);
		this.manager.itemStart(e);
		let o = function(t) {
			r ? r(t) : console.error(t), i.manager.itemError(e), i.manager.itemEnd(e);
		}, s = new m(this.manager);
		s.setPath(this.path), s.setResponseType("arraybuffer"), s.setRequestHeader(this.requestHeader), s.setWithCredentials(this.withCredentials), s.load(e, function(n) {
			try {
				i.parse(n, a, function(n) {
					t(n), i.manager.itemEnd(e);
				}, o);
			} catch (e) {
				o(e);
			}
		}, n, o);
	}
	setDRACOLoader(e) {
		return this.dracoLoader = e, this;
	}
	setDDSLoader() {
		throw Error("THREE.GLTFLoader: \"MSFT_texture_dds\" no longer supported. Please update to \"KHR_texture_basisu\".");
	}
	setKTX2Loader(e) {
		return this.ktx2Loader = e, this;
	}
	setMeshoptDecoder(e) {
		return this.meshoptDecoder = e, this;
	}
	register(e) {
		return this.pluginCallbacks.indexOf(e) === -1 && this.pluginCallbacks.push(e), this;
	}
	unregister(e) {
		return this.pluginCallbacks.indexOf(e) !== -1 && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1), this;
	}
	parse(e, t, n, r) {
		let i, a = {}, o = {};
		if (typeof e == "string") i = JSON.parse(e);
		else if (e instanceof ArrayBuffer) {
			if (Aa(new Uint8Array(e.slice(0, 4))) === eo) {
				try {
					a[R.KHR_BINARY_GLTF] = new ro(e);
				} catch (e) {
					r && r(e);
					return;
				}
				i = JSON.parse(a[R.KHR_BINARY_GLTF].content);
			} else i = JSON.parse(Aa(new Uint8Array(e)));
		} else i = e;
		if (i.asset === void 0 || i.asset.version[0] < 2) {
			r && r(/* @__PURE__ */ Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
			return;
		}
		let s = new ko(i, {
			path: t || this.resourcePath || "",
			crossOrigin: this.crossOrigin,
			requestHeader: this.requestHeader,
			manager: this.manager,
			ktx2Loader: this.ktx2Loader,
			meshoptDecoder: this.meshoptDecoder
		});
		s.fileLoader.setRequestHeader(this.requestHeader);
		for (let e = 0; e < this.pluginCallbacks.length; e++) {
			let t = this.pluginCallbacks[e](s);
			t.name || console.error("THREE.GLTFLoader: Invalid plugin found: missing name"), o[t.name] = t, a[t.name] = !0;
		}
		if (i.extensionsUsed) for (let e = 0; e < i.extensionsUsed.length; ++e) {
			let t = i.extensionsUsed[e], n = i.extensionsRequired || [];
			switch (t) {
				case R.KHR_MATERIALS_UNLIT:
					a[t] = new Ra();
					break;
				case R.KHR_DRACO_MESH_COMPRESSION:
					a[t] = new io(i, this.dracoLoader);
					break;
				case R.KHR_TEXTURE_TRANSFORM:
					a[t] = new ao();
					break;
				case R.KHR_MESH_QUANTIZATION:
					a[t] = new oo();
					break;
				default: n.indexOf(t) >= 0 && o[t] === void 0 && console.warn("THREE.GLTFLoader: Unknown extension \"" + t + "\".");
			}
		}
		s.setExtensions(a), s.setPlugins(o), s.parse(n, r);
	}
	parseAsync(e, t) {
		let n = this;
		return new Promise(function(r, i) {
			n.parse(e, t, r, i);
		});
	}
};
function Ia() {
	let e = {};
	return {
		get: function(t) {
			return e[t];
		},
		add: function(t, n) {
			e[t] = n;
		},
		remove: function(t) {
			delete e[t];
		},
		removeAll: function() {
			e = {};
		}
	};
}
var R = {
	KHR_BINARY_GLTF: "KHR_binary_glTF",
	KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
	KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
	KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
	KHR_MATERIALS_DISPERSION: "KHR_materials_dispersion",
	KHR_MATERIALS_IOR: "KHR_materials_ior",
	KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
	KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
	KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
	KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
	KHR_MATERIALS_ANISOTROPY: "KHR_materials_anisotropy",
	KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
	KHR_MATERIALS_VOLUME: "KHR_materials_volume",
	KHR_TEXTURE_BASISU: "KHR_texture_basisu",
	KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
	KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
	KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
	EXT_MATERIALS_BUMP: "EXT_materials_bump",
	EXT_TEXTURE_WEBP: "EXT_texture_webp",
	EXT_TEXTURE_AVIF: "EXT_texture_avif",
	EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
	EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing"
}, La = class {
	constructor(e) {
		this.parser = e, this.name = R.KHR_LIGHTS_PUNCTUAL, this.cache = {
			refs: {},
			uses: {}
		};
	}
	_markDefs() {
		let e = this.parser, t = this.parser.json.nodes || [];
		for (let n = 0, r = t.length; n < r; n++) {
			let r = t[n];
			r.extensions && r.extensions[this.name] && r.extensions[this.name].light !== void 0 && e._addNodeRef(this.cache, r.extensions[this.name].light);
		}
	}
	_loadLight(e) {
		let t = this.parser, n = "light:" + e, r = t.cache.get(n);
		if (r) return r;
		let i = t.json, a = ((i.extensions && i.extensions[this.name] || {}).lights || [])[e], o, s = new f(16777215);
		a.color !== void 0 && s.setRGB(a.color[0], a.color[1], a.color[2], Ma);
		let c = a.range === void 0 ? 0 : a.range;
		switch (a.type) {
			case "directional":
				o = new ce(s), o.target.position.set(0, 0, -1), o.add(o.target);
				break;
			case "point":
				o = new y(s), o.distance = c;
				break;
			case "spot":
				o = new Oe(s), o.distance = c, a.spot = a.spot || {}, a.spot.innerConeAngle = a.spot.innerConeAngle === void 0 ? 0 : a.spot.innerConeAngle, a.spot.outerConeAngle = a.spot.outerConeAngle === void 0 ? Math.PI / 4 : a.spot.outerConeAngle, o.angle = a.spot.outerConeAngle, o.penumbra = 1 - a.spot.innerConeAngle / a.spot.outerConeAngle, o.target.position.set(0, 0, -1), o.add(o.target);
				break;
			default: throw Error("THREE.GLTFLoader: Unexpected light type: " + a.type);
		}
		return o.position.set(0, 0, 0), o.decay = 2, So(o, a), a.intensity !== void 0 && (o.intensity = a.intensity), o.name = t.createUniqueName(a.name || "light_" + e), r = Promise.resolve(o), t.cache.add(n, r), r;
	}
	getDependency(e, t) {
		if (e === "light") return this._loadLight(t);
	}
	createNodeAttachment(e) {
		let t = this, n = this.parser, r = n.json.nodes[e], i = (r.extensions && r.extensions[this.name] || {}).light;
		return i === void 0 ? null : this._loadLight(i).then(function(e) {
			return n._getNodeRef(t.cache, i, e);
		});
	}
}, Ra = class {
	constructor() {
		this.name = R.KHR_MATERIALS_UNLIT;
	}
	getMaterialType() {
		return mt;
	}
	extendParams(e, t, n) {
		let r = [];
		e.color = new f(1, 1, 1), e.opacity = 1;
		let i = t.pbrMetallicRoughness;
		if (i) {
			if (Array.isArray(i.baseColorFactor)) {
				let t = i.baseColorFactor;
				e.color.setRGB(t[0], t[1], t[2], Ma), e.opacity = t[3];
			}
			i.baseColorTexture !== void 0 && r.push(n.assignTexture(e, "map", i.baseColorTexture, ja));
		}
		return Promise.all(r);
	}
}, za = class {
	constructor(e) {
		this.parser = e, this.name = R.KHR_MATERIALS_EMISSIVE_STRENGTH;
	}
	extendMaterialParams(e, t) {
		let n = this.parser.json.materials[e];
		if (!n.extensions || !n.extensions[this.name]) return Promise.resolve();
		let r = n.extensions[this.name].emissiveStrength;
		return r !== void 0 && (t.emissiveIntensity = r), Promise.resolve();
	}
}, Ba = class {
	constructor(e) {
		this.parser = e, this.name = R.KHR_MATERIALS_CLEARCOAT;
	}
	getMaterialType(e) {
		let t = this.parser.json.materials[e];
		return !t.extensions || !t.extensions[this.name] ? null : se;
	}
	extendMaterialParams(e, t) {
		let n = this.parser, r = n.json.materials[e];
		if (!r.extensions || !r.extensions[this.name]) return Promise.resolve();
		let i = [], a = r.extensions[this.name];
		if (a.clearcoatFactor !== void 0 && (t.clearcoat = a.clearcoatFactor), a.clearcoatTexture !== void 0 && i.push(n.assignTexture(t, "clearcoatMap", a.clearcoatTexture)), a.clearcoatRoughnessFactor !== void 0 && (t.clearcoatRoughness = a.clearcoatRoughnessFactor), a.clearcoatRoughnessTexture !== void 0 && i.push(n.assignTexture(t, "clearcoatRoughnessMap", a.clearcoatRoughnessTexture)), a.clearcoatNormalTexture !== void 0 && (i.push(n.assignTexture(t, "clearcoatNormalMap", a.clearcoatNormalTexture)), a.clearcoatNormalTexture.scale !== void 0)) {
			let e = a.clearcoatNormalTexture.scale;
			t.clearcoatNormalScale = new M(e, e);
		}
		return Promise.all(i);
	}
}, Va = class {
	constructor(e) {
		this.parser = e, this.name = R.KHR_MATERIALS_DISPERSION;
	}
	getMaterialType(e) {
		let t = this.parser.json.materials[e];
		return !t.extensions || !t.extensions[this.name] ? null : se;
	}
	extendMaterialParams(e, t) {
		let n = this.parser.json.materials[e];
		if (!n.extensions || !n.extensions[this.name]) return Promise.resolve();
		let r = n.extensions[this.name];
		return t.dispersion = r.dispersion === void 0 ? 0 : r.dispersion, Promise.resolve();
	}
}, Ha = class {
	constructor(e) {
		this.parser = e, this.name = R.KHR_MATERIALS_IRIDESCENCE;
	}
	getMaterialType(e) {
		let t = this.parser.json.materials[e];
		return !t.extensions || !t.extensions[this.name] ? null : se;
	}
	extendMaterialParams(e, t) {
		let n = this.parser, r = n.json.materials[e];
		if (!r.extensions || !r.extensions[this.name]) return Promise.resolve();
		let i = [], a = r.extensions[this.name];
		return a.iridescenceFactor !== void 0 && (t.iridescence = a.iridescenceFactor), a.iridescenceTexture !== void 0 && i.push(n.assignTexture(t, "iridescenceMap", a.iridescenceTexture)), a.iridescenceIor !== void 0 && (t.iridescenceIOR = a.iridescenceIor), t.iridescenceThicknessRange === void 0 && (t.iridescenceThicknessRange = [100, 400]), a.iridescenceThicknessMinimum !== void 0 && (t.iridescenceThicknessRange[0] = a.iridescenceThicknessMinimum), a.iridescenceThicknessMaximum !== void 0 && (t.iridescenceThicknessRange[1] = a.iridescenceThicknessMaximum), a.iridescenceThicknessTexture !== void 0 && i.push(n.assignTexture(t, "iridescenceThicknessMap", a.iridescenceThicknessTexture)), Promise.all(i);
	}
}, Ua = class {
	constructor(e) {
		this.parser = e, this.name = R.KHR_MATERIALS_SHEEN;
	}
	getMaterialType(e) {
		let t = this.parser.json.materials[e];
		return !t.extensions || !t.extensions[this.name] ? null : se;
	}
	extendMaterialParams(e, t) {
		let n = this.parser, r = n.json.materials[e];
		if (!r.extensions || !r.extensions[this.name]) return Promise.resolve();
		let i = [];
		t.sheenColor = new f(0, 0, 0), t.sheenRoughness = 0, t.sheen = 1;
		let a = r.extensions[this.name];
		if (a.sheenColorFactor !== void 0) {
			let e = a.sheenColorFactor;
			t.sheenColor.setRGB(e[0], e[1], e[2], Ma);
		}
		return a.sheenRoughnessFactor !== void 0 && (t.sheenRoughness = a.sheenRoughnessFactor), a.sheenColorTexture !== void 0 && i.push(n.assignTexture(t, "sheenColorMap", a.sheenColorTexture, ja)), a.sheenRoughnessTexture !== void 0 && i.push(n.assignTexture(t, "sheenRoughnessMap", a.sheenRoughnessTexture)), Promise.all(i);
	}
}, Wa = class {
	constructor(e) {
		this.parser = e, this.name = R.KHR_MATERIALS_TRANSMISSION;
	}
	getMaterialType(e) {
		let t = this.parser.json.materials[e];
		return !t.extensions || !t.extensions[this.name] ? null : se;
	}
	extendMaterialParams(e, t) {
		let n = this.parser, r = n.json.materials[e];
		if (!r.extensions || !r.extensions[this.name]) return Promise.resolve();
		let i = [], a = r.extensions[this.name];
		return a.transmissionFactor !== void 0 && (t.transmission = a.transmissionFactor), a.transmissionTexture !== void 0 && i.push(n.assignTexture(t, "transmissionMap", a.transmissionTexture)), Promise.all(i);
	}
}, Ga = class {
	constructor(e) {
		this.parser = e, this.name = R.KHR_MATERIALS_VOLUME;
	}
	getMaterialType(e) {
		let t = this.parser.json.materials[e];
		return !t.extensions || !t.extensions[this.name] ? null : se;
	}
	extendMaterialParams(e, t) {
		let n = this.parser, r = n.json.materials[e];
		if (!r.extensions || !r.extensions[this.name]) return Promise.resolve();
		let i = [], a = r.extensions[this.name];
		t.thickness = a.thicknessFactor === void 0 ? 0 : a.thicknessFactor, a.thicknessTexture !== void 0 && i.push(n.assignTexture(t, "thicknessMap", a.thicknessTexture)), t.attenuationDistance = a.attenuationDistance || Infinity;
		let o = a.attenuationColor || [
			1,
			1,
			1
		];
		return t.attenuationColor = new f().setRGB(o[0], o[1], o[2], Ma), Promise.all(i);
	}
}, Ka = class {
	constructor(e) {
		this.parser = e, this.name = R.KHR_MATERIALS_IOR;
	}
	getMaterialType(e) {
		let t = this.parser.json.materials[e];
		return !t.extensions || !t.extensions[this.name] ? null : se;
	}
	extendMaterialParams(e, t) {
		let n = this.parser.json.materials[e];
		if (!n.extensions || !n.extensions[this.name]) return Promise.resolve();
		let r = n.extensions[this.name];
		return t.ior = r.ior === void 0 ? 1.5 : r.ior, Promise.resolve();
	}
}, qa = class {
	constructor(e) {
		this.parser = e, this.name = R.KHR_MATERIALS_SPECULAR;
	}
	getMaterialType(e) {
		let t = this.parser.json.materials[e];
		return !t.extensions || !t.extensions[this.name] ? null : se;
	}
	extendMaterialParams(e, t) {
		let n = this.parser, r = n.json.materials[e];
		if (!r.extensions || !r.extensions[this.name]) return Promise.resolve();
		let i = [], a = r.extensions[this.name];
		t.specularIntensity = a.specularFactor === void 0 ? 1 : a.specularFactor, a.specularTexture !== void 0 && i.push(n.assignTexture(t, "specularIntensityMap", a.specularTexture));
		let o = a.specularColorFactor || [
			1,
			1,
			1
		];
		return t.specularColor = new f().setRGB(o[0], o[1], o[2], Ma), a.specularColorTexture !== void 0 && i.push(n.assignTexture(t, "specularColorMap", a.specularColorTexture, ja)), Promise.all(i);
	}
}, Ja = class {
	constructor(e) {
		this.parser = e, this.name = R.EXT_MATERIALS_BUMP;
	}
	getMaterialType(e) {
		let t = this.parser.json.materials[e];
		return !t.extensions || !t.extensions[this.name] ? null : se;
	}
	extendMaterialParams(e, t) {
		let n = this.parser, r = n.json.materials[e];
		if (!r.extensions || !r.extensions[this.name]) return Promise.resolve();
		let i = [], a = r.extensions[this.name];
		return t.bumpScale = a.bumpFactor === void 0 ? 1 : a.bumpFactor, a.bumpTexture !== void 0 && i.push(n.assignTexture(t, "bumpMap", a.bumpTexture)), Promise.all(i);
	}
}, Ya = class {
	constructor(e) {
		this.parser = e, this.name = R.KHR_MATERIALS_ANISOTROPY;
	}
	getMaterialType(e) {
		let t = this.parser.json.materials[e];
		return !t.extensions || !t.extensions[this.name] ? null : se;
	}
	extendMaterialParams(e, t) {
		let n = this.parser, r = n.json.materials[e];
		if (!r.extensions || !r.extensions[this.name]) return Promise.resolve();
		let i = [], a = r.extensions[this.name];
		return a.anisotropyStrength !== void 0 && (t.anisotropy = a.anisotropyStrength), a.anisotropyRotation !== void 0 && (t.anisotropyRotation = a.anisotropyRotation), a.anisotropyTexture !== void 0 && i.push(n.assignTexture(t, "anisotropyMap", a.anisotropyTexture)), Promise.all(i);
	}
}, Xa = class {
	constructor(e) {
		this.parser = e, this.name = R.KHR_TEXTURE_BASISU;
	}
	loadTexture(e) {
		let t = this.parser, n = t.json, r = n.textures[e];
		if (!r.extensions || !r.extensions[this.name]) return null;
		let i = r.extensions[this.name], a = t.options.ktx2Loader;
		if (!a) {
			if (n.extensionsRequired && n.extensionsRequired.indexOf(this.name) >= 0) throw Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
			return null;
		}
		return t.loadTextureImage(e, i.source, a);
	}
}, Za = class {
	constructor(e) {
		this.parser = e, this.name = R.EXT_TEXTURE_WEBP, this.isSupported = null;
	}
	loadTexture(e) {
		let t = this.name, n = this.parser, r = n.json, i = r.textures[e];
		if (!i.extensions || !i.extensions[t]) return null;
		let a = i.extensions[t], o = r.images[a.source], s = n.textureLoader;
		if (o.uri) {
			let e = n.options.manager.getHandler(o.uri);
			e !== null && (s = e);
		}
		return this.detectSupport().then(function(i) {
			if (i) return n.loadTextureImage(e, a.source, s);
			if (r.extensionsRequired && r.extensionsRequired.indexOf(t) >= 0) throw Error("THREE.GLTFLoader: WebP required by asset but unsupported.");
			return n.loadTexture(e);
		});
	}
	detectSupport() {
		return this.isSupported ||= new Promise(function(e) {
			let t = new Image();
			t.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA", t.onload = t.onerror = function() {
				e(t.height === 1);
			};
		}), this.isSupported;
	}
}, Qa = class {
	constructor(e) {
		this.parser = e, this.name = R.EXT_TEXTURE_AVIF, this.isSupported = null;
	}
	loadTexture(e) {
		let t = this.name, n = this.parser, r = n.json, i = r.textures[e];
		if (!i.extensions || !i.extensions[t]) return null;
		let a = i.extensions[t], o = r.images[a.source], s = n.textureLoader;
		if (o.uri) {
			let e = n.options.manager.getHandler(o.uri);
			e !== null && (s = e);
		}
		return this.detectSupport().then(function(i) {
			if (i) return n.loadTextureImage(e, a.source, s);
			if (r.extensionsRequired && r.extensionsRequired.indexOf(t) >= 0) throw Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");
			return n.loadTexture(e);
		});
	}
	detectSupport() {
		return this.isSupported ||= new Promise(function(e) {
			let t = new Image();
			t.src = "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=", t.onload = t.onerror = function() {
				e(t.height === 1);
			};
		}), this.isSupported;
	}
}, $a = class {
	constructor(e) {
		this.name = R.EXT_MESHOPT_COMPRESSION, this.parser = e;
	}
	loadBufferView(e) {
		let t = this.parser.json, n = t.bufferViews[e];
		if (n.extensions && n.extensions[this.name]) {
			let e = n.extensions[this.name], r = this.parser.getDependency("buffer", e.buffer), i = this.parser.options.meshoptDecoder;
			if (!i || !i.supported) {
				if (t.extensionsRequired && t.extensionsRequired.indexOf(this.name) >= 0) throw Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
				return null;
			}
			return r.then(function(t) {
				let n = e.byteOffset || 0, r = e.byteLength || 0, a = e.count, o = e.byteStride, s = new Uint8Array(t, n, r);
				return i.decodeGltfBufferAsync ? i.decodeGltfBufferAsync(a, o, s, e.mode, e.filter).then(function(e) {
					return e.buffer;
				}) : i.ready.then(function() {
					let t = new ArrayBuffer(a * o);
					return i.decodeGltfBuffer(new Uint8Array(t), a, o, s, e.mode, e.filter), t;
				});
			});
		}
		return null;
	}
}, z = class {
	constructor(e) {
		this.name = R.EXT_MESH_GPU_INSTANCING, this.parser = e;
	}
	createNodeMesh(e) {
		let t = this.parser.json, r = t.nodes[e];
		if (!r.extensions || !r.extensions[this.name] || r.mesh === void 0) return null;
		let i = t.meshes[r.mesh];
		for (let e of i.primitives) if (e.mode !== uo.TRIANGLES && e.mode !== uo.TRIANGLE_STRIP && e.mode !== uo.TRIANGLE_FAN && e.mode !== void 0) return null;
		let a = r.extensions[this.name].attributes, s = [], c = {};
		for (let e in a) s.push(this.parser.getDependency("accessor", a[e]).then((t) => (c[e] = t, c[e])));
		return s.length < 1 ? null : (s.push(this.parser.createNodeMesh(e)), Promise.all(s).then((e) => {
			let t = e.pop(), r = t.isGroup ? t.children : [t], i = e[0].count, a = [];
			for (let e of r) {
				let t = new ae(), r = new He(), s = new o(), l = new He(1, 1, 1), u = new N(e.geometry, e.material, i);
				for (let e = 0; e < i; e++) c.TRANSLATION && r.fromBufferAttribute(c.TRANSLATION, e), c.ROTATION && s.fromBufferAttribute(c.ROTATION, e), c.SCALE && l.fromBufferAttribute(c.SCALE, e), u.setMatrixAt(e, t.compose(r, s, l));
				for (let t in c) if (t === "_COLOR_0") {
					let e = c[t];
					u.instanceColor = new n(e.array, e.itemSize, e.normalized);
				} else t !== "TRANSLATION" && t !== "ROTATION" && t !== "SCALE" && e.geometry.setAttribute(t, c[t]);
				w.prototype.copy.call(u, e), this.parser.assignFinalMaterial(u), a.push(u);
			}
			return t.isGroup ? (t.clear(), t.add(...a), t) : a[0];
		}));
	}
}, eo = "glTF", to = 12, no = {
	JSON: 1313821514,
	BIN: 5130562
}, ro = class {
	constructor(e) {
		this.name = R.KHR_BINARY_GLTF, this.content = null, this.body = null;
		let t = new DataView(e, 0, to);
		if (this.header = {
			magic: Aa(new Uint8Array(e.slice(0, 4))),
			version: t.getUint32(4, !0),
			length: t.getUint32(8, !0)
		}, this.header.magic !== eo) throw Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
		if (this.header.version < 2) throw Error("THREE.GLTFLoader: Legacy binary file detected.");
		let n = this.header.length - to, r = new DataView(e, to), i = 0;
		for (; i < n;) {
			let t = r.getUint32(i, !0);
			i += 4;
			let n = r.getUint32(i, !0);
			if (i += 4, n === no.JSON) {
				let n = new Uint8Array(e, to + i, t);
				this.content = Aa(n);
			} else if (n === no.BIN) {
				let n = to + i;
				this.body = e.slice(n, n + t);
			}
			i += t;
		}
		if (this.content === null) throw Error("THREE.GLTFLoader: JSON content not found.");
	}
}, io = class {
	constructor(e, t) {
		if (!t) throw Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
		this.name = R.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t, this.dracoLoader.preload();
	}
	decodePrimitive(e, t) {
		let n = this.json, r = this.dracoLoader, i = e.extensions[this.name].bufferView, a = e.extensions[this.name].attributes, o = {}, s = {}, c = {};
		for (let e in a) {
			let t = go[e] || e.toLowerCase();
			o[t] = a[e];
		}
		for (let t in e.attributes) {
			let r = go[t] || t.toLowerCase();
			if (a[t] !== void 0) {
				let i = n.accessors[e.attributes[t]];
				c[r] = fo[i.componentType].name, s[r] = i.normalized === !0;
			}
		}
		return t.getDependency("bufferView", i).then(function(e) {
			return new Promise(function(t, n) {
				r.decodeDracoFile(e, function(e) {
					for (let t in e.attributes) {
						let n = e.attributes[t], r = s[t];
						r !== void 0 && (n.normalized = r);
					}
					t(e);
				}, o, c, Ma, n);
			});
		});
	}
}, ao = class {
	constructor() {
		this.name = R.KHR_TEXTURE_TRANSFORM;
	}
	extendTexture(e, t) {
		return (t.texCoord === void 0 || t.texCoord === e.channel) && t.offset === void 0 && t.rotation === void 0 && t.scale === void 0 || (e = e.clone(), t.texCoord !== void 0 && (e.channel = t.texCoord), t.offset !== void 0 && e.offset.fromArray(t.offset), t.rotation !== void 0 && (e.rotation = t.rotation), t.scale !== void 0 && e.repeat.fromArray(t.scale), e.needsUpdate = !0), e;
	}
}, oo = class {
	constructor() {
		this.name = R.KHR_MESH_QUANTIZATION;
	}
}, so = class extends Le {
	constructor(e, t, n, r) {
		super(e, t, n, r);
	}
	copySampleValue_(e) {
		let t = this.resultBuffer, n = this.sampleValues, r = this.valueSize, i = e * r * 3 + r;
		for (let e = 0; e !== r; e++) t[e] = n[i + e];
		return t;
	}
	interpolate_(e, t, n, r) {
		let i = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = o * 2, c = o * 3, l = r - t, u = (n - t) / l, d = u * u, f = d * u, p = e * c, m = p - c, h = -2 * f + 3 * d, g = f - d, _ = 1 - h, v = g - d + u;
		for (let e = 0; e !== o; e++) {
			let t = a[m + e + o], n = a[m + e + s] * l, r = a[p + e + o], c = a[p + e] * l;
			i[e] = _ * t + v * n + h * r + g * c;
		}
		return i;
	}
}, co = /* @__PURE__ */ new o(), lo = class extends so {
	interpolate_(e, t, n, r) {
		let i = super.interpolate_(e, t, n, r);
		return co.fromArray(i).normalize().toArray(i), i;
	}
}, uo = {
	FLOAT: 5126,
	FLOAT_MAT3: 35675,
	FLOAT_MAT4: 35676,
	FLOAT_VEC2: 35664,
	FLOAT_VEC3: 35665,
	FLOAT_VEC4: 35666,
	LINEAR: 9729,
	REPEAT: 10497,
	SAMPLER_2D: 35678,
	POINTS: 0,
	LINES: 1,
	LINE_LOOP: 2,
	LINE_STRIP: 3,
	TRIANGLES: 4,
	TRIANGLE_STRIP: 5,
	TRIANGLE_FAN: 6,
	UNSIGNED_BYTE: 5121,
	UNSIGNED_SHORT: 5123
}, fo = {
	5120: Int8Array,
	5121: Uint8Array,
	5122: Int16Array,
	5123: Uint16Array,
	5125: Uint32Array,
	5126: Float32Array
}, po = {
	9728: ee,
	9729: je,
	9984: i,
	9985: Fe,
	9986: Be,
	9987: P
}, mo = {
	33071: T,
	33648: u,
	10497: h
}, ho = {
	SCALAR: 1,
	VEC2: 2,
	VEC3: 3,
	VEC4: 4,
	MAT2: 4,
	MAT3: 9,
	MAT4: 16
}, go = {
	POSITION: "position",
	NORMAL: "normal",
	TANGENT: "tangent",
	...Zi >= 152 ? {
		TEXCOORD_0: "uv",
		TEXCOORD_1: "uv1",
		TEXCOORD_2: "uv2",
		TEXCOORD_3: "uv3"
	} : {
		TEXCOORD_0: "uv",
		TEXCOORD_1: "uv2"
	},
	COLOR_0: "color",
	WEIGHTS_0: "skinWeight",
	JOINTS_0: "skinIndex"
}, _o = {
	scale: "scale",
	translation: "position",
	rotation: "quaternion",
	weights: "morphTargetInfluences"
}, vo = {
	CUBICSPLINE: void 0,
	LINEAR: Xe,
	STEP: xe
}, yo = {
	OPAQUE: "OPAQUE",
	MASK: "MASK",
	BLEND: "BLEND"
};
function bo(e) {
	return e.DefaultMaterial === void 0 && (e.DefaultMaterial = new d({
		color: 16777215,
		emissive: 0,
		metalness: 1,
		roughness: 1,
		transparent: !1,
		depthTest: !0,
		side: 0
	})), e.DefaultMaterial;
}
function xo(e, t, n) {
	for (let r in n.extensions) e[r] === void 0 && (t.userData.gltfExtensions = t.userData.gltfExtensions || {}, t.userData.gltfExtensions[r] = n.extensions[r]);
}
function So(e, t) {
	t.extras !== void 0 && (typeof t.extras == "object" ? Object.assign(e.userData, t.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + t.extras));
}
function B(e, t, n) {
	let r = !1, i = !1, a = !1;
	for (let e = 0, n = t.length; e < n; e++) {
		let n = t[e];
		if (n.POSITION !== void 0 && (r = !0), n.NORMAL !== void 0 && (i = !0), n.COLOR_0 !== void 0 && (a = !0), r && i && a) break;
	}
	if (!r && !i && !a) return Promise.resolve(e);
	let o = [], s = [], c = [];
	for (let l = 0, u = t.length; l < u; l++) {
		let u = t[l];
		if (r) {
			let t = u.POSITION === void 0 ? e.attributes.position : n.getDependency("accessor", u.POSITION);
			o.push(t);
		}
		if (i) {
			let t = u.NORMAL === void 0 ? e.attributes.normal : n.getDependency("accessor", u.NORMAL);
			s.push(t);
		}
		if (a) {
			let t = u.COLOR_0 === void 0 ? e.attributes.color : n.getDependency("accessor", u.COLOR_0);
			c.push(t);
		}
	}
	return Promise.all([
		Promise.all(o),
		Promise.all(s),
		Promise.all(c)
	]).then(function(t) {
		let n = t[0], o = t[1], s = t[2];
		return r && (e.morphAttributes.position = n), i && (e.morphAttributes.normal = o), a && (e.morphAttributes.color = s), e.morphTargetsRelative = !0, e;
	});
}
function Co(e, t) {
	if (e.updateMorphTargets(), t.weights !== void 0) for (let n = 0, r = t.weights.length; n < r; n++) e.morphTargetInfluences[n] = t.weights[n];
	if (t.extras && Array.isArray(t.extras.targetNames)) {
		let n = t.extras.targetNames;
		if (e.morphTargetInfluences.length === n.length) {
			e.morphTargetDictionary = {};
			for (let t = 0, r = n.length; t < r; t++) e.morphTargetDictionary[n[t]] = t;
		} else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
	}
}
function wo(e) {
	let t, n = e.extensions && e.extensions[R.KHR_DRACO_MESH_COMPRESSION];
	if (t = n ? "draco:" + n.bufferView + ":" + n.indices + ":" + To(n.attributes) : e.indices + ":" + To(e.attributes) + ":" + e.mode, e.targets !== void 0) for (let n = 0, r = e.targets.length; n < r; n++) t += ":" + To(e.targets[n]);
	return t;
}
function To(e) {
	let t = "", n = Object.keys(e).sort();
	for (let r = 0, i = n.length; r < i; r++) t += n[r] + ":" + e[n[r]] + ";";
	return t;
}
function Eo(e) {
	switch (e) {
		case Int8Array: return 1 / 127;
		case Uint8Array: return 1 / 255;
		case Int16Array: return 1 / 32767;
		case Uint16Array: return 1 / 65535;
		default: throw Error("THREE.GLTFLoader: Unsupported normalized accessor component type.");
	}
}
function Do(e) {
	return e.search(/\.jpe?g($|\?)/i) > 0 || e.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : e.search(/\.webp($|\?)/i) > 0 || e.search(/^data\:image\/webp/) === 0 ? "image/webp" : "image/png";
}
var Oo = /* @__PURE__ */ new ae(), ko = class {
	constructor(e = {}, t = {}) {
		this.json = e, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new Ia(), this.associations = /* @__PURE__ */ new Map(), this.primitiveCache = {}, this.nodeCache = {}, this.meshCache = {
			refs: {},
			uses: {}
		}, this.cameraCache = {
			refs: {},
			uses: {}
		}, this.lightCache = {
			refs: {},
			uses: {}
		}, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
		let n = !1, r = !1, i = -1;
		typeof navigator < "u" && navigator.userAgent !== void 0 && (n = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) === !0, r = navigator.userAgent.indexOf("Firefox") > -1, i = r ? navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1] : -1), this.textureLoader = typeof createImageBitmap > "u" || n || r && i < 98 ? new Ke(this.options.manager) : new _e(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new m(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(!0);
	}
	setExtensions(e) {
		this.extensions = e;
	}
	setPlugins(e) {
		this.plugins = e;
	}
	parse(e, t) {
		let n = this, r = this.json, i = this.extensions;
		this.cache.removeAll(), this.nodeCache = {}, this._invokeAll(function(e) {
			return e._markDefs && e._markDefs();
		}), Promise.all(this._invokeAll(function(e) {
			return e.beforeRoot && e.beforeRoot();
		})).then(function() {
			return Promise.all([
				n.getDependencies("scene"),
				n.getDependencies("animation"),
				n.getDependencies("camera")
			]);
		}).then(function(t) {
			let a = {
				scene: t[0][r.scene || 0],
				scenes: t[0],
				animations: t[1],
				cameras: t[2],
				asset: r.asset,
				parser: n,
				userData: {}
			};
			return xo(i, a, r), So(a, r), Promise.all(n._invokeAll(function(e) {
				return e.afterRoot && e.afterRoot(a);
			})).then(function() {
				for (let e of a.scenes) e.updateMatrixWorld();
				e(a);
			});
		}).catch(t);
	}
	_markDefs() {
		let e = this.json.nodes || [], t = this.json.skins || [], n = this.json.meshes || [];
		for (let n = 0, r = t.length; n < r; n++) {
			let r = t[n].joints;
			for (let t = 0, n = r.length; t < n; t++) e[r[t]].isBone = !0;
		}
		for (let t = 0, r = e.length; t < r; t++) {
			let r = e[t];
			r.mesh !== void 0 && (this._addNodeRef(this.meshCache, r.mesh), r.skin !== void 0 && (n[r.mesh].isSkinnedMesh = !0)), r.camera !== void 0 && this._addNodeRef(this.cameraCache, r.camera);
		}
	}
	_addNodeRef(e, t) {
		t !== void 0 && (e.refs[t] === void 0 && (e.refs[t] = e.uses[t] = 0), e.refs[t]++);
	}
	_getNodeRef(e, t, n) {
		if (e.refs[t] <= 1) return n;
		let r = n.clone(), i = (e, t) => {
			let n = this.associations.get(e);
			n != null && this.associations.set(t, n);
			for (let [n, r] of e.children.entries()) i(r, t.children[n]);
		};
		return i(n, r), r.name += "_instance_" + e.uses[t]++, r;
	}
	_invokeOne(e) {
		let t = Object.values(this.plugins);
		t.push(this);
		for (let n = 0; n < t.length; n++) {
			let r = e(t[n]);
			if (r) return r;
		}
		return null;
	}
	_invokeAll(e) {
		let t = Object.values(this.plugins);
		t.unshift(this);
		let n = [];
		for (let r = 0; r < t.length; r++) {
			let i = e(t[r]);
			i && n.push(i);
		}
		return n;
	}
	getDependency(e, t) {
		let n = e + ":" + t, r = this.cache.get(n);
		if (!r) {
			switch (e) {
				case "scene":
					r = this.loadScene(t);
					break;
				case "node":
					r = this._invokeOne(function(e) {
						return e.loadNode && e.loadNode(t);
					});
					break;
				case "mesh":
					r = this._invokeOne(function(e) {
						return e.loadMesh && e.loadMesh(t);
					});
					break;
				case "accessor":
					r = this.loadAccessor(t);
					break;
				case "bufferView":
					r = this._invokeOne(function(e) {
						return e.loadBufferView && e.loadBufferView(t);
					});
					break;
				case "buffer":
					r = this.loadBuffer(t);
					break;
				case "material":
					r = this._invokeOne(function(e) {
						return e.loadMaterial && e.loadMaterial(t);
					});
					break;
				case "texture":
					r = this._invokeOne(function(e) {
						return e.loadTexture && e.loadTexture(t);
					});
					break;
				case "skin":
					r = this.loadSkin(t);
					break;
				case "animation":
					r = this._invokeOne(function(e) {
						return e.loadAnimation && e.loadAnimation(t);
					});
					break;
				case "camera":
					r = this.loadCamera(t);
					break;
				default: if (r = this._invokeOne(function(n) {
					return n != this && n.getDependency && n.getDependency(e, t);
				}), !r) throw Error("Unknown type: " + e);
			}
			this.cache.add(n, r);
		}
		return r;
	}
	getDependencies(e) {
		let t = this.cache.get(e);
		if (!t) {
			let n = this, r = this.json[e + (e === "mesh" ? "es" : "s")] || [];
			t = Promise.all(r.map(function(t, r) {
				return n.getDependency(e, r);
			})), this.cache.add(e, t);
		}
		return t;
	}
	loadBuffer(e) {
		let t = this.json.buffers[e], n = this.fileLoader;
		if (t.type && t.type !== "arraybuffer") throw Error("THREE.GLTFLoader: " + t.type + " buffer type is not supported.");
		if (t.uri === void 0 && e === 0) return Promise.resolve(this.extensions[R.KHR_BINARY_GLTF].body);
		let r = this.options;
		return new Promise(function(e, i) {
			n.load(ft.resolveURL(t.uri, r.path), e, void 0, function() {
				i(/* @__PURE__ */ Error("THREE.GLTFLoader: Failed to load buffer \"" + t.uri + "\"."));
			});
		});
	}
	loadBufferView(e) {
		let t = this.json.bufferViews[e];
		return this.getDependency("buffer", t.buffer).then(function(e) {
			let n = t.byteLength || 0, r = t.byteOffset || 0;
			return e.slice(r, r + n);
		});
	}
	loadAccessor(e) {
		let t = this, n = this.json, r = this.json.accessors[e];
		if (r.bufferView === void 0 && r.sparse === void 0) {
			let e = ho[r.type], t = fo[r.componentType], n = r.normalized === !0, i = new t(r.count * e);
			return Promise.resolve(new l(i, e, n));
		}
		let i = [];
		return r.bufferView === void 0 ? i.push(null) : i.push(this.getDependency("bufferView", r.bufferView)), r.sparse !== void 0 && (i.push(this.getDependency("bufferView", r.sparse.indices.bufferView)), i.push(this.getDependency("bufferView", r.sparse.values.bufferView))), Promise.all(i).then(function(e) {
			let i = e[0], a = ho[r.type], o = fo[r.componentType], s = o.BYTES_PER_ELEMENT, c = s * a, u = r.byteOffset || 0, d = r.bufferView === void 0 ? void 0 : n.bufferViews[r.bufferView].byteStride, f = r.normalized === !0, p, m;
			if (d && d !== c) {
				let e = Math.floor(u / d), n = "InterleavedBuffer:" + r.bufferView + ":" + r.componentType + ":" + e + ":" + r.count, c = t.cache.get(n);
				c || (p = new o(i, e * d, r.count * d / s), c = new qe(p, d / s), t.cache.add(n, c)), m = new nt(c, a, u % d / s, f);
			} else p = i === null ? new o(r.count * a) : new o(i, u, r.count * a), m = new l(p, a, f);
			if (r.sparse !== void 0) {
				let t = ho.SCALAR, n = fo[r.sparse.indices.componentType], s = r.sparse.indices.byteOffset || 0, c = r.sparse.values.byteOffset || 0, u = new n(e[1], s, r.sparse.count * t), d = new o(e[2], c, r.sparse.count * a);
				i !== null && (m = new l(m.array.slice(), m.itemSize, m.normalized));
				for (let e = 0, t = u.length; e < t; e++) {
					let t = u[e];
					if (m.setX(t, d[e * a]), a >= 2 && m.setY(t, d[e * a + 1]), a >= 3 && m.setZ(t, d[e * a + 2]), a >= 4 && m.setW(t, d[e * a + 3]), a >= 5) throw Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
				}
			}
			return m;
		});
	}
	loadTexture(e) {
		let t = this.json, n = this.options, r = t.textures[e].source, i = t.images[r], a = this.textureLoader;
		if (i.uri) {
			let e = n.manager.getHandler(i.uri);
			e !== null && (a = e);
		}
		return this.loadTextureImage(e, r, a);
	}
	loadTextureImage(e, t, n) {
		let r = this, i = this.json, a = i.textures[e], o = i.images[t], s = (o.uri || o.bufferView) + ":" + a.sampler;
		if (this.textureCache[s]) return this.textureCache[s];
		let c = this.loadImageSource(t, n).then(function(t) {
			t.flipY = !1, t.name = a.name || o.name || "", t.name === "" && typeof o.uri == "string" && o.uri.startsWith("data:image/") === !1 && (t.name = o.uri);
			let n = (i.samplers || {})[a.sampler] || {};
			return t.magFilter = po[n.magFilter] || 1006, t.minFilter = po[n.minFilter] || 1008, t.wrapS = mo[n.wrapS] || 1e3, t.wrapT = mo[n.wrapT] || 1e3, r.associations.set(t, { textures: e }), t;
		}).catch(function() {
			return null;
		});
		return this.textureCache[s] = c, c;
	}
	loadImageSource(e, t) {
		let n = this, r = this.json, i = this.options;
		if (this.sourceCache[e] !== void 0) return this.sourceCache[e].then((e) => e.clone());
		let a = r.images[e], o = self.URL || self.webkitURL, s = a.uri || "", c = !1;
		if (a.bufferView !== void 0) s = n.getDependency("bufferView", a.bufferView).then(function(e) {
			c = !0;
			let t = new Blob([e], { type: a.mimeType });
			return s = o.createObjectURL(t), s;
		});
		else if (a.uri === void 0) throw Error("THREE.GLTFLoader: Image " + e + " is missing URI and bufferView");
		let l = Promise.resolve(s).then(function(e) {
			return new Promise(function(n, r) {
				let a = n;
				t.isImageBitmapLoader === !0 && (a = function(e) {
					let t = new st(e);
					t.needsUpdate = !0, n(t);
				}), t.load(ft.resolveURL(e, i.path), a, void 0, r);
			});
		}).then(function(e) {
			return c === !0 && o.revokeObjectURL(s), So(e, a), e.userData.mimeType = a.mimeType || Do(a.uri), e;
		}).catch(function(e) {
			throw console.error("THREE.GLTFLoader: Couldn't load texture", s), e;
		});
		return this.sourceCache[e] = l, l;
	}
	assignTexture(e, t, n, r) {
		let i = this;
		return this.getDependency("texture", n.index).then(function(a) {
			if (!a) return null;
			if (n.texCoord !== void 0 && n.texCoord > 0 && (a = a.clone(), a.channel = n.texCoord), i.extensions[R.KHR_TEXTURE_TRANSFORM]) {
				let e = n.extensions === void 0 ? void 0 : n.extensions[R.KHR_TEXTURE_TRANSFORM];
				if (e) {
					let t = i.associations.get(a);
					a = i.extensions[R.KHR_TEXTURE_TRANSFORM].extendTexture(a, e), i.associations.set(a, t);
				}
			}
			return r !== void 0 && (typeof r == "number" && (r = r === Na ? ja : Ma), "colorSpace" in a ? a.colorSpace = r : a.encoding = r === ja ? Na : Pa), e[t] = a, a;
		});
	}
	assignFinalMaterial(e) {
		let t = e.geometry, n = e.material, r = t.attributes.tangent === void 0, i = t.attributes.color !== void 0, a = t.attributes.normal === void 0;
		if (e.isPoints) {
			let e = "PointsMaterial:" + n.uuid, t = this.cache.get(e);
			t || (t = new k(), Ce.prototype.copy.call(t, n), t.color.copy(n.color), t.map = n.map, t.sizeAttenuation = !1, this.cache.add(e, t)), n = t;
		} else if (e.isLine) {
			let e = "LineBasicMaterial:" + n.uuid, t = this.cache.get(e);
			t || (t = new Ue(), Ce.prototype.copy.call(t, n), t.color.copy(n.color), t.map = n.map, this.cache.add(e, t)), n = t;
		}
		if (r || i || a) {
			let e = "ClonedMaterial:" + n.uuid + ":";
			r && (e += "derivative-tangents:"), i && (e += "vertex-colors:"), a && (e += "flat-shading:");
			let t = this.cache.get(e);
			t || (t = n.clone(), i && (t.vertexColors = !0), a && (t.flatShading = !0), r && (t.normalScale && (t.normalScale.y *= -1), t.clearcoatNormalScale && (t.clearcoatNormalScale.y *= -1)), this.cache.add(e, t), this.associations.set(t, this.associations.get(n))), n = t;
		}
		e.material = n;
	}
	getMaterialType() {
		return d;
	}
	loadMaterial(e) {
		let t = this, n = this.json, r = this.extensions, i = n.materials[e], a, o = {}, s = i.extensions || {}, c = [];
		if (s[R.KHR_MATERIALS_UNLIT]) {
			let e = r[R.KHR_MATERIALS_UNLIT];
			a = e.getMaterialType(), c.push(e.extendParams(o, i, t));
		} else {
			let n = i.pbrMetallicRoughness || {};
			if (o.color = new f(1, 1, 1), o.opacity = 1, Array.isArray(n.baseColorFactor)) {
				let e = n.baseColorFactor;
				o.color.setRGB(e[0], e[1], e[2], Ma), o.opacity = e[3];
			}
			n.baseColorTexture !== void 0 && c.push(t.assignTexture(o, "map", n.baseColorTexture, ja)), o.metalness = n.metallicFactor === void 0 ? 1 : n.metallicFactor, o.roughness = n.roughnessFactor === void 0 ? 1 : n.roughnessFactor, n.metallicRoughnessTexture !== void 0 && (c.push(t.assignTexture(o, "metalnessMap", n.metallicRoughnessTexture)), c.push(t.assignTexture(o, "roughnessMap", n.metallicRoughnessTexture))), a = this._invokeOne(function(t) {
				return t.getMaterialType && t.getMaterialType(e);
			}), c.push(Promise.all(this._invokeAll(function(t) {
				return t.extendMaterialParams && t.extendMaterialParams(e, o);
			})));
		}
		i.doubleSided === !0 && (o.side = 2);
		let l = i.alphaMode || yo.OPAQUE;
		if (l === yo.BLEND ? (o.transparent = !0, o.depthWrite = !1) : (o.transparent = !1, l === yo.MASK && (o.alphaTest = i.alphaCutoff === void 0 ? .5 : i.alphaCutoff)), i.normalTexture !== void 0 && a !== mt && (c.push(t.assignTexture(o, "normalMap", i.normalTexture)), o.normalScale = new M(1, 1), i.normalTexture.scale !== void 0)) {
			let e = i.normalTexture.scale;
			o.normalScale.set(e, e);
		}
		if (i.occlusionTexture !== void 0 && a !== mt && (c.push(t.assignTexture(o, "aoMap", i.occlusionTexture)), i.occlusionTexture.strength !== void 0 && (o.aoMapIntensity = i.occlusionTexture.strength)), i.emissiveFactor !== void 0 && a !== mt) {
			let e = i.emissiveFactor;
			o.emissive = new f().setRGB(e[0], e[1], e[2], Ma);
		}
		return i.emissiveTexture !== void 0 && a !== mt && c.push(t.assignTexture(o, "emissiveMap", i.emissiveTexture, ja)), Promise.all(c).then(function() {
			let n = new a(o);
			return i.name && (n.name = i.name), So(n, i), t.associations.set(n, { materials: e }), i.extensions && xo(r, n, i), n;
		});
	}
	createUniqueName(e) {
		let t = yt.sanitizeNodeName(e || "");
		return t in this.nodeNamesUsed ? t + "_" + ++this.nodeNamesUsed[t] : (this.nodeNamesUsed[t] = 0, t);
	}
	loadGeometries(e) {
		let t = this, n = this.extensions, r = this.primitiveCache;
		function i(e) {
			return n[R.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(e, t).then(function(n) {
				return jo(n, e, t);
			});
		}
		let a = [];
		for (let n = 0, o = e.length; n < o; n++) {
			let o = e[n], s = wo(o), c = r[s];
			if (c) a.push(c.promise);
			else {
				let e;
				e = o.extensions && o.extensions[R.KHR_DRACO_MESH_COMPRESSION] ? i(o) : jo(new D(), o, t), r[s] = {
					primitive: o,
					promise: e
				}, a.push(e);
			}
		}
		return Promise.all(a);
	}
	loadMesh(e) {
		let t = this, n = this.json, r = this.extensions, i = n.meshes[e], a = i.primitives, o = [];
		for (let e = 0, t = a.length; e < t; e++) {
			let t = a[e].material === void 0 ? bo(this.cache) : this.getDependency("material", a[e].material);
			o.push(t);
		}
		return o.push(t.loadGeometries(a)), Promise.all(o).then(function(n) {
			let o = n.slice(0, n.length - 1), s = n[n.length - 1], l = [];
			for (let n = 0, u = s.length; n < u; n++) {
				let u = s[n], d = a[n], f, p = o[n];
				if (d.mode === uo.TRIANGLES || d.mode === uo.TRIANGLE_STRIP || d.mode === uo.TRIANGLE_FAN || d.mode === void 0) f = i.isSkinnedMesh === !0 ? new A(u, p) : new c(u, p), f.isSkinnedMesh === !0 && f.normalizeSkinWeights(), d.mode === uo.TRIANGLE_STRIP ? f.geometry = Qi(f.geometry, 1) : d.mode === uo.TRIANGLE_FAN && (f.geometry = Qi(f.geometry, 2));
				else if (d.mode === uo.LINES) f = new De(u, p);
				else if (d.mode === uo.LINE_STRIP) f = new we(u, p);
				else if (d.mode === uo.LINE_LOOP) f = new dt(u, p);
				else if (d.mode === uo.POINTS) f = new C(u, p);
				else throw Error("THREE.GLTFLoader: Primitive mode unsupported: " + d.mode);
				Object.keys(f.geometry.morphAttributes).length > 0 && Co(f, i), f.name = t.createUniqueName(i.name || "mesh_" + e), So(f, i), d.extensions && xo(r, f, d), t.assignFinalMaterial(f), l.push(f);
			}
			for (let n = 0, r = l.length; n < r; n++) t.associations.set(l[n], {
				meshes: e,
				primitives: n
			});
			if (l.length === 1) return i.extensions && xo(r, l[0], i), l[0];
			let u = new b();
			i.extensions && xo(r, u, i), t.associations.set(u, { meshes: e });
			for (let e = 0, t = l.length; e < t; e++) u.add(l[e]);
			return u;
		});
	}
	loadCamera(e) {
		let t, n = this.json.cameras[e], r = n[n.type];
		if (!r) console.warn("THREE.GLTFLoader: Missing camera parameters.");
		else return n.type === "perspective" ? t = new ne(gt.radToDeg(r.yfov), r.aspectRatio || 1, r.znear || 1, r.zfar || 2e6) : n.type === "orthographic" && (t = new E(-r.xmag, r.xmag, r.ymag, -r.ymag, r.znear, r.zfar)), n.name && (t.name = this.createUniqueName(n.name)), So(t, n), Promise.resolve(t);
	}
	loadSkin(e) {
		let t = this.json.skins[e], n = [];
		for (let e = 0, r = t.joints.length; e < r; e++) n.push(this._loadNodeShallow(t.joints[e]));
		return t.inverseBindMatrices === void 0 ? n.push(null) : n.push(this.getDependency("accessor", t.inverseBindMatrices)), Promise.all(n).then(function(e) {
			let n = e.pop(), r = e, i = [], a = [];
			for (let e = 0, o = r.length; e < o; e++) {
				let o = r[e];
				if (o) {
					i.push(o);
					let t = new ae();
					n !== null && t.fromArray(n.array, e * 16), a.push(t);
				} else console.warn("THREE.GLTFLoader: Joint \"%s\" could not be found.", t.joints[e]);
			}
			return new me(i, a);
		});
	}
	loadAnimation(e) {
		let t = this.json, n = this, r = t.animations[e], i = r.name ? r.name : "animation_" + e, a = [], o = [], c = [], l = [], u = [];
		for (let e = 0, t = r.channels.length; e < t; e++) {
			let t = r.channels[e], n = r.samplers[t.sampler], i = t.target, s = i.node, d = r.parameters === void 0 ? n.input : r.parameters[n.input], f = r.parameters === void 0 ? n.output : r.parameters[n.output];
			i.node !== void 0 && (a.push(this.getDependency("node", s)), o.push(this.getDependency("accessor", d)), c.push(this.getDependency("accessor", f)), l.push(n), u.push(i));
		}
		return Promise.all([
			Promise.all(a),
			Promise.all(o),
			Promise.all(c),
			Promise.all(l),
			Promise.all(u)
		]).then(function(e) {
			let t = e[0], r = e[1], a = e[2], o = e[3], c = e[4], l = [];
			for (let e = 0, i = t.length; e < i; e++) {
				let i = t[e], s = r[e], u = a[e], d = o[e], f = c[e];
				if (i === void 0) continue;
				i.updateMatrix && i.updateMatrix();
				let p = n._createAnimationTracks(i, s, u, d, f);
				if (p) for (let e = 0; e < p.length; e++) l.push(p[e]);
			}
			return new s(i, void 0, l);
		});
	}
	createNodeMesh(e) {
		let t = this.json, n = this, r = t.nodes[e];
		return r.mesh === void 0 ? null : n.getDependency("mesh", r.mesh).then(function(e) {
			let t = n._getNodeRef(n.meshCache, r.mesh, e);
			return r.weights !== void 0 && t.traverse(function(e) {
				if (e.isMesh) for (let t = 0, n = r.weights.length; t < n; t++) e.morphTargetInfluences[t] = r.weights[t];
			}), t;
		});
	}
	loadNode(e) {
		let t = this.json, n = this, r = t.nodes[e], i = n._loadNodeShallow(e), a = [], o = r.children || [];
		for (let e = 0, t = o.length; e < t; e++) a.push(n.getDependency("node", o[e]));
		let s = r.skin === void 0 ? Promise.resolve(null) : n.getDependency("skin", r.skin);
		return Promise.all([
			i,
			Promise.all(a),
			s
		]).then(function(e) {
			let t = e[0], n = e[1], r = e[2];
			r !== null && t.traverse(function(e) {
				e.isSkinnedMesh && e.bind(r, Oo);
			});
			for (let e = 0, r = n.length; e < r; e++) t.add(n[e]);
			return t;
		});
	}
	_loadNodeShallow(e) {
		let t = this.json, n = this.extensions, r = this;
		if (this.nodeCache[e] !== void 0) return this.nodeCache[e];
		let i = t.nodes[e], a = i.name ? r.createUniqueName(i.name) : "", o = [], s = r._invokeOne(function(t) {
			return t.createNodeMesh && t.createNodeMesh(e);
		});
		return s && o.push(s), i.camera !== void 0 && o.push(r.getDependency("camera", i.camera).then(function(e) {
			return r._getNodeRef(r.cameraCache, i.camera, e);
		})), r._invokeAll(function(t) {
			return t.createNodeAttachment && t.createNodeAttachment(e);
		}).forEach(function(e) {
			o.push(e);
		}), this.nodeCache[e] = Promise.all(o).then(function(t) {
			let o;
			if (o = i.isBone === !0 ? new pt() : t.length > 1 ? new b() : t.length === 1 ? t[0] : new w(), o !== t[0]) for (let e = 0, n = t.length; e < n; e++) o.add(t[e]);
			if (i.name && (o.userData.name = i.name, o.name = a), So(o, i), i.extensions && xo(n, o, i), i.matrix !== void 0) {
				let e = new ae();
				e.fromArray(i.matrix), o.applyMatrix4(e);
			} else i.translation !== void 0 && o.position.fromArray(i.translation), i.rotation !== void 0 && o.quaternion.fromArray(i.rotation), i.scale !== void 0 && o.scale.fromArray(i.scale);
			return r.associations.has(o) || r.associations.set(o, {}), r.associations.get(o).nodes = e, o;
		}), this.nodeCache[e];
	}
	loadScene(e) {
		let t = this.extensions, n = this.json.scenes[e], r = this, i = new b();
		n.name && (i.name = r.createUniqueName(n.name)), So(i, n), n.extensions && xo(t, i, n);
		let a = n.nodes || [], o = [];
		for (let e = 0, t = a.length; e < t; e++) o.push(r.getDependency("node", a[e]));
		return Promise.all(o).then(function(e) {
			for (let t = 0, n = e.length; t < n; t++) i.add(e[t]);
			return r.associations = ((e) => {
				let t = /* @__PURE__ */ new Map();
				for (let [e, n] of r.associations) (e instanceof Ce || e instanceof st) && t.set(e, n);
				return e.traverse((e) => {
					let n = r.associations.get(e);
					n != null && t.set(e, n);
				}), t;
			})(i), i;
		});
	}
	_createAnimationTracks(e, t, n, r, i) {
		let a = [], o = e.name ? e.name : e.uuid, s = [];
		_o[i.path] === _o.weights ? e.traverse(function(e) {
			e.morphTargetInfluences && s.push(e.name ? e.name : e.uuid);
		}) : s.push(o);
		let c;
		switch (_o[i.path]) {
			case _o.weights:
				c = Re;
				break;
			case _o.rotation:
				c = de;
				break;
			case _o.position:
			case _o.scale:
				c = Ee;
				break;
			default: switch (n.itemSize) {
				case 1:
					c = Re;
					break;
				default: c = Ee;
			}
		}
		let l = r.interpolation === void 0 ? Xe : vo[r.interpolation], u = this._getArrayFromAccessor(n);
		for (let e = 0, n = s.length; e < n; e++) {
			let n = new c(s[e] + "." + _o[i.path], t.array, u, l);
			r.interpolation === "CUBICSPLINE" && this._createCubicSplineTrackInterpolant(n), a.push(n);
		}
		return a;
	}
	_getArrayFromAccessor(e) {
		let t = e.array;
		if (e.normalized) {
			let e = Eo(t.constructor), n = new Float32Array(t.length);
			for (let r = 0, i = t.length; r < i; r++) n[r] = t[r] * e;
			t = n;
		}
		return t;
	}
	_createCubicSplineTrackInterpolant(e) {
		e.createInterpolant = function(e) {
			return new (this instanceof de ? lo : so)(this.times, this.values, this.getValueSize() / 3, e);
		}, e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0;
	}
};
function Ao(e, t, n) {
	let r = t.attributes, i = new oe();
	if (r.POSITION !== void 0) {
		let e = n.json.accessors[r.POSITION], t = e.min, a = e.max;
		if (t !== void 0 && a !== void 0) {
			if (i.set(new He(t[0], t[1], t[2]), new He(a[0], a[1], a[2])), e.normalized) {
				let t = Eo(fo[e.componentType]);
				i.min.multiplyScalar(t), i.max.multiplyScalar(t);
			}
		} else {
			console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
			return;
		}
	} else return;
	let a = t.targets;
	if (a !== void 0) {
		let e = new He(), t = new He();
		for (let r = 0, i = a.length; r < i; r++) {
			let i = a[r];
			if (i.POSITION !== void 0) {
				let r = n.json.accessors[i.POSITION], a = r.min, o = r.max;
				if (a !== void 0 && o !== void 0) {
					if (t.setX(Math.max(Math.abs(a[0]), Math.abs(o[0]))), t.setY(Math.max(Math.abs(a[1]), Math.abs(o[1]))), t.setZ(Math.max(Math.abs(a[2]), Math.abs(o[2]))), r.normalized) {
						let e = Eo(fo[r.componentType]);
						t.multiplyScalar(e);
					}
					e.max(t);
				} else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
			}
		}
		i.expandByVector(e);
	}
	e.boundingBox = i;
	let o = new re();
	i.getCenter(o.center), o.radius = i.min.distanceTo(i.max) / 2, e.boundingSphere = o;
}
function jo(e, t, n) {
	let r = t.attributes, i = [];
	function a(t, r) {
		return n.getDependency("accessor", t).then(function(t) {
			e.setAttribute(r, t);
		});
	}
	for (let t in r) {
		let n = go[t] || t.toLowerCase();
		n in e.attributes || i.push(a(r[t], n));
	}
	if (t.indices !== void 0 && !e.index) {
		let r = n.getDependency("accessor", t.indices).then(function(t) {
			e.setIndex(t);
		});
		i.push(r);
	}
	return So(e, t), Ao(e, t, n), Promise.all(i).then(function() {
		return t.targets === void 0 ? e : B(e, t.targets, n);
	});
}
//#endregion
//#region node_modules/three-stdlib/loaders/RGBELoader.js
var Mo = class extends ue {
	constructor(e) {
		super(e), this.type = he;
	}
	parse(e) {
		let t = function(e, t) {
			switch (e) {
				case 1: throw Error("THREE.RGBELoader: Read Error: " + (t || ""));
				case 2: throw Error("THREE.RGBELoader: Write Error: " + (t || ""));
				case 3: throw Error("THREE.RGBELoader: Bad File Format: " + (t || ""));
				default:
				case 4: throw Error("THREE.RGBELoader: Memory Error: " + (t || ""));
			}
		}, n = function(e, t, n) {
			t ||= 1024;
			let r = e.pos, i = -1, a = 0, o = "", s = String.fromCharCode.apply(null, new Uint16Array(e.subarray(r, r + 128)));
			for (; 0 > (i = s.indexOf("\n")) && a < t && r < e.byteLength;) o += s, a += s.length, r += 128, s += String.fromCharCode.apply(null, new Uint16Array(e.subarray(r, r + 128)));
			return -1 < i && (!1 !== n && (e.pos += a + i + 1), o + s.slice(0, i));
		}, r = function(e) {
			let r = /^#\?(\S+)/, i = /^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/, a = /^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/, o = /^\s*FORMAT=(\S+)\s*$/, s = /^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/, c = {
				valid: 0,
				string: "",
				comments: "",
				programtype: "RGBE",
				format: "",
				gamma: 1,
				exposure: 1,
				width: 0,
				height: 0
			}, l, u;
			for ((e.pos >= e.byteLength || !(l = n(e))) && t(1, "no header found"), (u = l.match(r)) || t(3, "bad initial token"), c.valid |= 1, c.programtype = u[1], c.string += l + "\n"; l = n(e), !1 !== l;) if (c.string += l + "\n", l.charAt(0) === "#") c.comments += l + "\n";
			else if ((u = l.match(i)) && (c.gamma = parseFloat(u[1])), (u = l.match(a)) && (c.exposure = parseFloat(u[1])), (u = l.match(o)) && (c.valid |= 2, c.format = u[1]), (u = l.match(s)) && (c.valid |= 4, c.height = parseInt(u[1], 10), c.width = parseInt(u[2], 10)), c.valid & 2 && c.valid & 4) break;
			return c.valid & 2 || t(3, "missing format specifier"), c.valid & 4 || t(3, "missing image size specifier"), c;
		}, i = function(e, n, r) {
			let i = n;
			if (i < 8 || i > 32767 || e[0] !== 2 || e[1] !== 2 || e[2] & 128) return new Uint8Array(e);
			i !== (e[2] << 8 | e[3]) && t(3, "wrong scanline width");
			let a = new Uint8Array(4 * n * r);
			a.length || t(4, "unable to allocate buffer space");
			let o = 0, s = 0, c = 4 * i, l = /* @__PURE__ */ new Uint8Array(4), u = new Uint8Array(c), d = r;
			for (; d > 0 && s < e.byteLength;) {
				s + 4 > e.byteLength && t(1), l[0] = e[s++], l[1] = e[s++], l[2] = e[s++], l[3] = e[s++], (l[0] != 2 || l[1] != 2 || (l[2] << 8 | l[3]) != i) && t(3, "bad rgbe scanline format");
				let n = 0, r;
				for (; n < c && s < e.byteLength;) {
					r = e[s++];
					let i = r > 128;
					if (i && (r -= 128), (r === 0 || n + r > c) && t(3, "bad scanline data"), i) {
						let t = e[s++];
						for (let e = 0; e < r; e++) u[n++] = t;
					} else u.set(e.subarray(s, s + r), n), n += r, s += r;
				}
				let f = i;
				for (let e = 0; e < f; e++) {
					let t = 0;
					a[o] = u[e + t], t += i, a[o + 1] = u[e + t], t += i, a[o + 2] = u[e + t], t += i, a[o + 3] = u[e + t], o += 4;
				}
				d--;
			}
			return a;
		}, a = function(e, t, n, r) {
			let i = 2 ** (e[t + 3] - 128) / 255;
			n[r + 0] = e[t + 0] * i, n[r + 1] = e[t + 1] * i, n[r + 2] = e[t + 2] * i, n[r + 3] = 1;
		}, o = function(e, t, n, r) {
			let i = 2 ** (e[t + 3] - 128) / 255;
			n[r + 0] = g.toHalfFloat(Math.min(e[t + 0] * i, 65504)), n[r + 1] = g.toHalfFloat(Math.min(e[t + 1] * i, 65504)), n[r + 2] = g.toHalfFloat(Math.min(e[t + 2] * i, 65504)), n[r + 3] = g.toHalfFloat(1);
		}, s = new Uint8Array(e);
		s.pos = 0;
		let c = r(s), l = c.width, u = c.height, d = i(s.subarray(s.pos), l, u), f, p, m;
		switch (this.type) {
			case $e:
				m = d.length / 4;
				let e = new Float32Array(m * 4);
				for (let t = 0; t < m; t++) a(d, t * 4, e, t * 4);
				f = e, p = $e;
				break;
			case he:
				m = d.length / 4;
				let t = new Uint16Array(m * 4);
				for (let e = 0; e < m; e++) o(d, e * 4, t, e * 4);
				f = t, p = he;
				break;
			default: throw Error("THREE.RGBELoader: Unsupported type: " + this.type);
		}
		return {
			width: l,
			height: u,
			data: f,
			header: c.string,
			gamma: c.gamma,
			exposure: c.exposure,
			type: p
		};
	}
	setDataType(e) {
		return this.type = e, this;
	}
	load(e, t, n, r) {
		function i(e, n) {
			switch (e.type) {
				case $e:
				case he: "colorSpace" in e ? e.colorSpace = "srgb-linear" : e.encoding = 3e3, e.minFilter = je, e.magFilter = je, e.generateMipmaps = !1, e.flipY = !0;
			}
			t && t(e, n);
		}
		return super.load(e, i, n, r);
	}
}, No = Zi >= 152, Po = class extends ue {
	constructor(e) {
		super(e), this.type = he;
	}
	parse(e) {
		let t = 65536, n = 8192, r = 65537, i = 16384, a = 16383, o = 65535, s = 2.7182818 ** 2.2;
		function c(e, n) {
			for (var r = 0, i = 0; i < t; ++i) (i == 0 || e[i >> 3] & 1 << (i & 7)) && (n[r++] = i);
			for (var a = r - 1; r < t;) n[r++] = 0;
			return a;
		}
		function l(e) {
			for (var t = 0; t < i; t++) e[t] = {}, e[t].len = 0, e[t].lit = 0, e[t].p = null;
		}
		let u = {
			l: 0,
			c: 0,
			lc: 0
		};
		function d(e, t, n, r, i) {
			for (; n < e;) t = t << 8 | we(r, i), n += 8;
			n -= e, u.l = t >> n & (1 << e) - 1, u.c = t, u.lc = n;
		}
		let f = Array(59);
		function p(e) {
			for (var t = 0; t <= 58; ++t) f[t] = 0;
			for (var t = 0; t < r; ++t) f[e[t]] += 1;
			for (var n = 0, t = 58; t > 0; --t) {
				var i = n + f[t] >> 1;
				f[t] = n, n = i;
			}
			for (var t = 0; t < r; ++t) {
				var a = e[t];
				a > 0 && (e[t] = a | f[a]++ << 6);
			}
		}
		function m(e, t, n, r, i, a, o) {
			for (var s = n, c = 0, l = 0; i <= a; i++) {
				if (s.value - n.value > r) return !1;
				d(6, c, l, e, s);
				var f = u.l;
				if (c = u.c, l = u.lc, o[i] = f, f == 63) {
					if (s.value - n.value > r) throw "Something wrong with hufUnpackEncTable";
					d(8, c, l, e, s);
					var m = u.l + 6;
					if (c = u.c, l = u.lc, i + m > a + 1) throw "Something wrong with hufUnpackEncTable";
					for (; m--;) o[i++] = 0;
					i--;
				} else if (f >= 59) {
					var m = f - 59 + 2;
					if (i + m > a + 1) throw "Something wrong with hufUnpackEncTable";
					for (; m--;) o[i++] = 0;
					i--;
				}
			}
			p(o);
		}
		function h(e) {
			return e & 63;
		}
		function v(e) {
			return e >> 6;
		}
		function y(e, t, n, r) {
			for (; t <= n; t++) {
				var i = v(e[t]), a = h(e[t]);
				if (i >> a) throw "Invalid table entry";
				if (a > 14) {
					var o = r[i >> a - 14];
					if (o.len) throw "Invalid table entry";
					if (o.lit++, o.p) {
						var s = o.p;
						o.p = Array(o.lit);
						for (var c = 0; c < o.lit - 1; ++c) o.p[c] = s[c];
					} else o.p = [,];
					o.p[o.lit - 1] = t;
				} else if (a) for (var l = 0, c = 1 << 14 - a; c > 0; c--) {
					var o = r[(i << 14 - a) + l];
					if (o.len || o.p) throw "Invalid table entry";
					o.len = a, o.lit = t, l++;
				}
			}
			return !0;
		}
		let b = {
			c: 0,
			lc: 0
		};
		function x(e, t, n, r) {
			e = e << 8 | we(n, r), t += 8, b.c = e, b.lc = t;
		}
		let S = {
			c: 0,
			lc: 0
		};
		function C(e, t, n, r, i, a, o, s, c, l) {
			if (e == t) {
				r < 8 && (x(n, r, i, o), n = b.c, r = b.lc), r -= 8;
				var u = n >> r, u = new Uint8Array([u])[0];
				if (c.value + u > l) return !1;
				for (var d = s[c.value - 1]; u-- > 0;) s[c.value++] = d;
			} else if (c.value < l) s[c.value++] = e;
			else return !1;
			S.c = n, S.lc = r;
		}
		function w(e) {
			return e & 65535;
		}
		function T(e) {
			var t = w(e);
			return t > 32767 ? t - 65536 : t;
		}
		let E = {
			a: 0,
			b: 0
		};
		function D(e, t) {
			var n = T(e), r = T(t), i = n + (r & 1) + (r >> 1), a = i, o = i - r;
			E.a = a, E.b = o;
		}
		function ee(e, t) {
			var n = w(e), r = w(t), i = n - (r >> 1) & o, a = r + i - 32768 & o;
			E.a = a, E.b = i;
		}
		function te(e, t, n, r, i, a, o) {
			for (var s = o < 16384, c = n > i ? i : n, l = 1, u; l <= c;) l <<= 1;
			for (l >>= 1, u = l, l >>= 1; l >= 1;) {
				for (var d = 0, f = d + a * (i - u), p = a * l, m = a * u, h = r * l, g = r * u, _, v, y, b; d <= f; d += m) {
					for (var x = d, S = d + r * (n - u); x <= S; x += g) {
						var C = x + h, w = x + p, T = w + h;
						s ? (D(e[x + t], e[w + t]), _ = E.a, y = E.b, D(e[C + t], e[T + t]), v = E.a, b = E.b, D(_, v), e[x + t] = E.a, e[C + t] = E.b, D(y, b), e[w + t] = E.a, e[T + t] = E.b) : (ee(e[x + t], e[w + t]), _ = E.a, y = E.b, ee(e[C + t], e[T + t]), v = E.a, b = E.b, ee(_, v), e[x + t] = E.a, e[C + t] = E.b, ee(y, b), e[w + t] = E.a, e[T + t] = E.b);
					}
					if (n & l) {
						var w = x + p;
						s ? D(e[x + t], e[w + t]) : ee(e[x + t], e[w + t]), _ = E.a, e[w + t] = E.b, e[x + t] = _;
					}
				}
				if (i & l) for (var x = d, S = d + r * (n - u); x <= S; x += g) {
					var C = x + h;
					s ? D(e[x + t], e[C + t]) : ee(e[x + t], e[C + t]), _ = E.a, e[C + t] = E.b, e[x + t] = _;
				}
				u = l, l >>= 1;
			}
			return d;
		}
		function ne(e, t, n, r, i, o, s, c, l, u) {
			for (var d = 0, f = 0, p = c, m = Math.trunc(i.value + (o + 7) / 8); i.value < m;) for (x(d, f, n, i), d = b.c, f = b.lc; f >= 14;) {
				var g = t[d >> f - 14 & a];
				if (g.len) f -= g.len, C(g.lit, s, d, f, n, r, i, l, u, p), d = S.c, f = S.lc;
				else {
					if (!g.p) throw "hufDecode issues";
					for (var _ = 0; _ < g.lit; _++) {
						for (var y = h(e[g.p[_]]); f < y && i.value < m;) x(d, f, n, i), d = b.c, f = b.lc;
						if (f >= y && v(e[g.p[_]]) == (d >> f - y & (1 << y) - 1)) {
							f -= y, C(g.p[_], s, d, f, n, r, i, l, u, p), d = S.c, f = S.lc;
							break;
						}
					}
					if (_ == g.lit) throw "hufDecode issues";
				}
			}
			var w = 8 - o & 7;
			for (d >>= w, f -= w; f > 0;) {
				var g = t[d << 14 - f & a];
				if (g.len) f -= g.len, C(g.lit, s, d, f, n, r, i, l, u, p), d = S.c, f = S.lc;
				else throw "hufDecode issues";
			}
			return !0;
		}
		function re(e, t, n, a, o, s) {
			var c = { value: 0 }, u = n.value, d = M(t, n), f = M(t, n);
			n.value += 4;
			var p = M(t, n);
			if (n.value += 4, d < 0 || d >= r || f < 0 || f >= r) throw "Something wrong with HUF_ENCSIZE";
			var h = Array(r), g = Array(i);
			if (l(g), m(e, t, n, a - (n.value - u), d, f, h), p > 8 * (a - (n.value - u))) throw "Something wrong with hufUncompress";
			y(h, d, f, g), ne(h, g, e, t, n, p, f, s, o, c);
		}
		function O(e, t, n) {
			for (var r = 0; r < n; ++r) t[r] = e[t[r]];
		}
		function k(e) {
			for (var t = 1; t < e.length; t++) {
				var n = e[t - 1] + e[t] - 128;
				e[t] = n;
			}
		}
		function ie(e, t) {
			for (var n = 0, r = Math.floor((e.length + 1) / 2), i = 0, a = e.length - 1; !(i > a || (t[i++] = e[n++], i > a));) t[i++] = e[r++];
		}
		function ae(e) {
			for (var t = e.byteLength, n = [], r = 0, i = new DataView(e); t > 0;) {
				var a = i.getInt8(r++);
				if (a < 0) {
					var o = -a;
					t -= o + 1;
					for (var s = 0; s < o; s++) n.push(i.getUint8(r++));
				} else {
					var o = a;
					t -= 2;
					for (var c = i.getUint8(r++), s = 0; s < o + 1; s++) n.push(c);
				}
			}
			return n;
		}
		function oe(e, t, n, r, i, a) {
			var o = new DataView(a.buffer), s = n[e.idx[0]].width, c = n[e.idx[0]].height, l = 3, u = Math.floor(s / 8), d = Math.ceil(s / 8), f = Math.ceil(c / 8), p = s - (d - 1) * 8, m = c - (f - 1) * 8, h = { value: 0 }, g = Array(l), _ = Array(l), v = Array(l), y = Array(l), b = Array(l);
			for (let n = 0; n < l; ++n) b[n] = t[e.idx[n]], g[n] = n < 1 ? 0 : g[n - 1] + d * f, _[n] = /* @__PURE__ */ new Float32Array(64), v[n] = /* @__PURE__ */ new Uint16Array(64), y[n] = new Uint16Array(d * 64);
			for (let t = 0; t < f; ++t) {
				var x = 8;
				t == f - 1 && (x = m);
				var S = 8;
				for (let e = 0; e < d; ++e) {
					e == d - 1 && (S = p);
					for (let e = 0; e < l; ++e) v[e].fill(0), v[e][0] = i[g[e]++], se(h, r, v[e]), ce(v[e], _[e]), le(_[e]);
					ue(_);
					for (let t = 0; t < l; ++t) de(_[t], y[t], e * 64);
				}
				let a = 0;
				for (let r = 0; r < l; ++r) {
					let i = n[e.idx[r]].type;
					for (let e = 8 * t; e < 8 * t + x; ++e) {
						a = b[r][e];
						for (let t = 0; t < u; ++t) {
							let n = t * 64 + (e & 7) * 8;
							o.setUint16(a + 0 * i, y[r][n + 0], !0), o.setUint16(a + 2 * i, y[r][n + 1], !0), o.setUint16(a + 4 * i, y[r][n + 2], !0), o.setUint16(a + 6 * i, y[r][n + 3], !0), o.setUint16(a + 8 * i, y[r][n + 4], !0), o.setUint16(a + 10 * i, y[r][n + 5], !0), o.setUint16(a + 12 * i, y[r][n + 6], !0), o.setUint16(a + 14 * i, y[r][n + 7], !0), a += 16 * i;
						}
					}
					if (u != d) for (let e = 8 * t; e < 8 * t + x; ++e) {
						let t = b[r][e] + 8 * u * 2 * i, n = u * 64 + (e & 7) * 8;
						for (let e = 0; e < S; ++e) o.setUint16(t + e * 2 * i, y[r][n + e], !0);
					}
				}
			}
			for (var C = new Uint16Array(s), o = new DataView(a.buffer), w = 0; w < l; ++w) {
				n[e.idx[w]].decoded = !0;
				var T = n[e.idx[w]].type;
				if (n[w].type == 2) for (var E = 0; E < c; ++E) {
					let e = b[w][E];
					for (var D = 0; D < s; ++D) C[D] = o.getUint16(e + D * 2 * T, !0);
					for (var D = 0; D < s; ++D) o.setFloat32(e + D * 2 * T, N(C[D]), !0);
				}
			}
		}
		function se(e, t, n) {
			for (var r, i = 1; i < 64;) r = t[e.value], r == 65280 ? i = 64 : r >> 8 == 255 ? i += r & 255 : (n[i] = r, i++), e.value++;
		}
		function ce(e, t) {
			t[0] = N(e[0]), t[1] = N(e[1]), t[2] = N(e[5]), t[3] = N(e[6]), t[4] = N(e[14]), t[5] = N(e[15]), t[6] = N(e[27]), t[7] = N(e[28]), t[8] = N(e[2]), t[9] = N(e[4]), t[10] = N(e[7]), t[11] = N(e[13]), t[12] = N(e[16]), t[13] = N(e[26]), t[14] = N(e[29]), t[15] = N(e[42]), t[16] = N(e[3]), t[17] = N(e[8]), t[18] = N(e[12]), t[19] = N(e[17]), t[20] = N(e[25]), t[21] = N(e[30]), t[22] = N(e[41]), t[23] = N(e[43]), t[24] = N(e[9]), t[25] = N(e[11]), t[26] = N(e[18]), t[27] = N(e[24]), t[28] = N(e[31]), t[29] = N(e[40]), t[30] = N(e[44]), t[31] = N(e[53]), t[32] = N(e[10]), t[33] = N(e[19]), t[34] = N(e[23]), t[35] = N(e[32]), t[36] = N(e[39]), t[37] = N(e[45]), t[38] = N(e[52]), t[39] = N(e[54]), t[40] = N(e[20]), t[41] = N(e[22]), t[42] = N(e[33]), t[43] = N(e[38]), t[44] = N(e[46]), t[45] = N(e[51]), t[46] = N(e[55]), t[47] = N(e[60]), t[48] = N(e[21]), t[49] = N(e[34]), t[50] = N(e[37]), t[51] = N(e[47]), t[52] = N(e[50]), t[53] = N(e[56]), t[54] = N(e[59]), t[55] = N(e[61]), t[56] = N(e[35]), t[57] = N(e[36]), t[58] = N(e[48]), t[59] = N(e[49]), t[60] = N(e[57]), t[61] = N(e[58]), t[62] = N(e[62]), t[63] = N(e[63]);
		}
		function le(e) {
			let t = .5 * Math.cos(3.14159 / 4), n = .5 * Math.cos(3.14159 / 16), r = .5 * Math.cos(3.14159 / 8), i = .5 * Math.cos(3 * 3.14159 / 16), a = .5 * Math.cos(15.70795 / 16), o = .5 * Math.cos(3 * 3.14159 / 8), s = .5 * Math.cos(21.99113 / 16);
			for (var c = [
				,
				,
				,
				,
			], l = [
				,
				,
				,
				,
			], u = [
				,
				,
				,
				,
			], d = [
				,
				,
				,
				,
			], f = 0; f < 8; ++f) {
				var p = f * 8;
				c[0] = r * e[p + 2], c[1] = o * e[p + 2], c[2] = r * e[p + 6], c[3] = o * e[p + 6], l[0] = n * e[p + 1] + i * e[p + 3] + a * e[p + 5] + s * e[p + 7], l[1] = i * e[p + 1] - s * e[p + 3] - n * e[p + 5] - a * e[p + 7], l[2] = a * e[p + 1] - n * e[p + 3] + s * e[p + 5] + i * e[p + 7], l[3] = s * e[p + 1] - a * e[p + 3] + i * e[p + 5] - n * e[p + 7], u[0] = t * (e[p + 0] + e[p + 4]), u[3] = t * (e[p + 0] - e[p + 4]), u[1] = c[0] + c[3], u[2] = c[1] - c[2], d[0] = u[0] + u[1], d[1] = u[3] + u[2], d[2] = u[3] - u[2], d[3] = u[0] - u[1], e[p + 0] = d[0] + l[0], e[p + 1] = d[1] + l[1], e[p + 2] = d[2] + l[2], e[p + 3] = d[3] + l[3], e[p + 4] = d[3] - l[3], e[p + 5] = d[2] - l[2], e[p + 6] = d[1] - l[1], e[p + 7] = d[0] - l[0];
			}
			for (var m = 0; m < 8; ++m) c[0] = r * e[16 + m], c[1] = o * e[16 + m], c[2] = r * e[48 + m], c[3] = o * e[48 + m], l[0] = n * e[8 + m] + i * e[24 + m] + a * e[40 + m] + s * e[56 + m], l[1] = i * e[8 + m] - s * e[24 + m] - n * e[40 + m] - a * e[56 + m], l[2] = a * e[8 + m] - n * e[24 + m] + s * e[40 + m] + i * e[56 + m], l[3] = s * e[8 + m] - a * e[24 + m] + i * e[40 + m] - n * e[56 + m], u[0] = t * (e[m] + e[32 + m]), u[3] = t * (e[m] - e[32 + m]), u[1] = c[0] + c[3], u[2] = c[1] - c[2], d[0] = u[0] + u[1], d[1] = u[3] + u[2], d[2] = u[3] - u[2], d[3] = u[0] - u[1], e[0 + m] = d[0] + l[0], e[8 + m] = d[1] + l[1], e[16 + m] = d[2] + l[2], e[24 + m] = d[3] + l[3], e[32 + m] = d[3] - l[3], e[40 + m] = d[2] - l[2], e[48 + m] = d[1] - l[1], e[56 + m] = d[0] - l[0];
		}
		function ue(e) {
			for (var t = 0; t < 64; ++t) {
				var n = e[0][t], r = e[1][t], i = e[2][t];
				e[0][t] = n + 1.5747 * i, e[1][t] = n - .1873 * r - .4682 * i, e[2][t] = n + 1.8556 * r;
			}
		}
		function de(e, t, n) {
			for (var r = 0; r < 64; ++r) t[n + r] = g.toHalfFloat(pe(e[r]));
		}
		function pe(e) {
			return e <= 1 ? Math.sign(e) * Math.abs(e) ** 2.2 : Math.sign(e) * s ** (Math.abs(e) - 1);
		}
		function me(e) {
			return new DataView(e.array.buffer, e.offset.value, e.size);
		}
		function ge(e) {
			var t = e.viewer.buffer.slice(e.offset.value, e.offset.value + e.size), n = new Uint8Array(ae(t)), r = new Uint8Array(n.length);
			return k(n), ie(n, r), new DataView(r.buffer);
		}
		function _e(e) {
			var t = Ea(e.array.slice(e.offset.value, e.offset.value + e.size)), n = new Uint8Array(t.length);
			return k(t), ie(t, n), new DataView(n.buffer);
		}
		function A(e) {
			for (var r = e.viewer, i = { value: e.offset.value }, a = new Uint16Array(e.width * e.scanlineBlockSize * (e.channels * e.type)), o = new Uint8Array(n), s = 0, l = Array(e.channels), u = 0; u < e.channels; u++) l[u] = {}, l[u].start = s, l[u].end = l[u].start, l[u].nx = e.width, l[u].ny = e.lines, l[u].size = e.type, s += l[u].nx * l[u].ny * l[u].size;
			var d = ke(r, i), f = ke(r, i);
			if (f >= n) throw "Something is wrong with PIZ_COMPRESSION BITMAP_SIZE";
			if (d <= f) for (var u = 0; u < f - d + 1; u++) o[u + d] = Te(r, i);
			var p = new Uint16Array(t), m = c(o, p), h = M(r, i);
			re(e.array, r, i, h, a, s);
			for (var u = 0; u < e.channels; ++u) for (var g = l[u], _ = 0; _ < l[u].size; ++_) te(a, g.start + _, g.nx, g.size, g.ny, g.nx * g.size, m);
			O(p, a, s);
			for (var v = 0, y = new Uint8Array(a.buffer.byteLength), b = 0; b < e.lines; b++) for (var x = 0; x < e.channels; x++) {
				var g = l[x], S = g.nx * g.size, C = new Uint8Array(a.buffer, g.end * 2, S * 2);
				y.set(C, v), v += S * 2, g.end += S;
			}
			return new DataView(y.buffer);
		}
		function ve(e) {
			var t = Ea(e.array.slice(e.offset.value, e.offset.value + e.size));
			let n = e.lines * e.channels * e.width, r = e.type == 1 ? new Uint16Array(n) : new Uint32Array(n), i = 0, a = 0, o = [
				,
				,
				,
				,
			];
			for (let n = 0; n < e.lines; n++) for (let n = 0; n < e.channels; n++) {
				let n = 0;
				switch (e.type) {
					case 1:
						o[0] = i, o[1] = o[0] + e.width, i = o[1] + e.width;
						for (let i = 0; i < e.width; ++i) {
							let e = t[o[0]++] << 8 | t[o[1]++];
							n += e, r[a] = n, a++;
						}
						break;
					case 2:
						o[0] = i, o[1] = o[0] + e.width, o[2] = o[1] + e.width, i = o[2] + e.width;
						for (let i = 0; i < e.width; ++i) {
							let e = t[o[0]++] << 24 | t[o[1]++] << 16 | t[o[2]++] << 8;
							n += e, r[a] = n, a++;
						}
				}
			}
			return new DataView(r.buffer);
		}
		function ye(e) {
			var t = e.viewer, n = { value: e.offset.value }, r = new Uint8Array(e.width * e.lines * (e.channels * e.type * 2)), i = {
				version: Ee(t, n),
				unknownUncompressedSize: Ee(t, n),
				unknownCompressedSize: Ee(t, n),
				acCompressedSize: Ee(t, n),
				dcCompressedSize: Ee(t, n),
				rleCompressedSize: Ee(t, n),
				rleUncompressedSize: Ee(t, n),
				rleRawSize: Ee(t, n),
				totalAcUncompressedCount: Ee(t, n),
				totalDcUncompressedCount: Ee(t, n),
				acCompression: Ee(t, n)
			};
			if (i.version < 2) throw "EXRLoader.parse: " + We.compression + " version " + i.version + " is unsupported";
			for (var a = [], o = ke(t, n) - 2; o > 0;) {
				var s = be(t.buffer, n), c = Te(t, n), l = c >> 2 & 3, u = (c >> 4) - 1, d = new Int8Array([u])[0], f = Te(t, n);
				a.push({
					name: s,
					index: d,
					type: f,
					compression: l
				}), o -= s.length + 3;
			}
			for (var p = We.channels, m = Array(e.channels), h = 0; h < e.channels; ++h) {
				var g = m[h] = {}, _ = p[h];
				g.name = _.name, g.compression = 0, g.decoded = !1, g.type = _.pixelType, g.pLinear = _.pLinear, g.width = e.width, g.height = e.lines;
			}
			for (var v = { idx: [
				,
				,
				,
			] }, y = 0; y < e.channels; ++y) for (var g = m[y], h = 0; h < a.length; ++h) {
				var b = a[h];
				g.name == b.name && (g.compression = b.compression, b.index >= 0 && (v.idx[b.index] = y), g.offset = y);
			}
			if (i.acCompressedSize > 0) switch (i.acCompression) {
				case 0:
					var x = new Uint16Array(i.totalAcUncompressedCount);
					re(e.array, t, n, i.acCompressedSize, x, i.totalAcUncompressedCount);
					break;
				case 1:
					var S = e.array.slice(n.value, n.value + i.totalAcUncompressedCount), C = Ea(S), x = new Uint16Array(C.buffer);
					n.value += i.totalAcUncompressedCount;
			}
			if (i.dcCompressedSize > 0) {
				var w = {
					array: e.array,
					offset: n,
					size: i.dcCompressedSize
				}, T = new Uint16Array(_e(w).buffer);
				n.value += i.dcCompressedSize;
			}
			if (i.rleRawSize > 0) {
				var S = e.array.slice(n.value, n.value + i.rleCompressedSize), C = Ea(S), E = ae(C.buffer);
				n.value += i.rleCompressedSize;
			}
			for (var D = 0, ee = Array(m.length), h = 0; h < ee.length; ++h) ee[h] = [];
			for (var te = 0; te < e.lines; ++te) for (var ne = 0; ne < m.length; ++ne) ee[ne].push(D), D += m[ne].width * e.type * 2;
			oe(v, ee, m, x, T, r);
			for (var h = 0; h < m.length; ++h) {
				var g = m[h];
				if (!g.decoded) switch (g.compression) {
					case 2:
						for (var O = 0, k = 0, te = 0; te < e.lines; ++te) {
							for (var ie = ee[h][O], se = 0; se < g.width; ++se) {
								for (var ce = 0; ce < 2 * g.type; ++ce) r[ie++] = E[k + ce * g.width * g.height];
								k++;
							}
							O++;
						}
						break;
					default: throw "EXRLoader.parse: unsupported channel compression";
				}
			}
			return new DataView(r.buffer);
		}
		function be(e, t) {
			for (var n = new Uint8Array(e), r = 0; n[t.value + r] != 0;) r += 1;
			var i = new TextDecoder().decode(n.slice(t.value, t.value + r));
			return t.value = t.value + r + 1, i;
		}
		function xe(e, t, n) {
			var r = new TextDecoder().decode(new Uint8Array(e).slice(t.value, t.value + n));
			return t.value += n, r;
		}
		function Se(e, t) {
			return [j(e, t), M(e, t)];
		}
		function Ce(e, t) {
			return [M(e, t), M(e, t)];
		}
		function j(e, t) {
			var n = e.getInt32(t.value, !0);
			return t.value += 4, n;
		}
		function M(e, t) {
			var n = e.getUint32(t.value, !0);
			return t.value += 4, n;
		}
		function we(e, t) {
			var n = e[t.value];
			return t.value += 1, n;
		}
		function Te(e, t) {
			var n = e.getUint8(t.value);
			return t.value += 1, n;
		}
		let Ee = function(e, t) {
			let n;
			return n = "getBigInt64" in DataView.prototype ? Number(e.getBigInt64(t.value, !0)) : e.getUint32(t.value + 4, !0) + Number(e.getUint32(t.value, !0) << 32), t.value += 8, n;
		};
		function De(e, t) {
			var n = e.getFloat32(t.value, !0);
			return t.value += 4, n;
		}
		function Oe(e, t) {
			return g.toHalfFloat(De(e, t));
		}
		function N(e) {
			var t = (e & 31744) >> 10, n = e & 1023;
			return (e >> 15 ? -1 : 1) * (t ? t === 31 ? n ? NaN : Infinity : 2 ** (t - 15) * (1 + n / 1024) : n / 1024 * 6103515625e-14);
		}
		function ke(e, t) {
			var n = e.getUint16(t.value, !0);
			return t.value += 2, n;
		}
		function Ae(e, t) {
			return N(ke(e, t));
		}
		function je(e, t, n, r) {
			for (var i = n.value, a = []; n.value < i + r - 1;) {
				var o = be(t, n), s = j(e, n), c = Te(e, n);
				n.value += 3;
				var l = j(e, n), u = j(e, n);
				a.push({
					name: o,
					pixelType: s,
					pLinear: c,
					xSampling: l,
					ySampling: u
				});
			}
			return n.value += 1, a;
		}
		function Me(e, t) {
			return {
				redX: De(e, t),
				redY: De(e, t),
				greenX: De(e, t),
				greenY: De(e, t),
				blueX: De(e, t),
				blueY: De(e, t),
				whiteX: De(e, t),
				whiteY: De(e, t)
			};
		}
		function Ne(e, t) {
			return [
				"NO_COMPRESSION",
				"RLE_COMPRESSION",
				"ZIPS_COMPRESSION",
				"ZIP_COMPRESSION",
				"PIZ_COMPRESSION",
				"PXR24_COMPRESSION",
				"B44_COMPRESSION",
				"B44A_COMPRESSION",
				"DWAA_COMPRESSION",
				"DWAB_COMPRESSION"
			][Te(e, t)];
		}
		function Pe(e, t) {
			return {
				xMin: M(e, t),
				yMin: M(e, t),
				xMax: M(e, t),
				yMax: M(e, t)
			};
		}
		function Fe(e, t) {
			return ["INCREASING_Y"][Te(e, t)];
		}
		function Ie(e, t) {
			return [De(e, t), De(e, t)];
		}
		function Le(e, t) {
			return [
				De(e, t),
				De(e, t),
				De(e, t)
			];
		}
		function Re(e, t, n, r, i) {
			if (r === "string" || r === "stringvector" || r === "iccProfile") return xe(t, n, i);
			if (r === "chlist") return je(e, t, n, i);
			if (r === "chromaticities") return Me(e, n);
			if (r === "compression") return Ne(e, n);
			if (r === "box2i") return Pe(e, n);
			if (r === "lineOrder") return Fe(e, n);
			if (r === "float") return De(e, n);
			if (r === "v2f") return Ie(e, n);
			if (r === "v3f") return Le(e, n);
			if (r === "int") return j(e, n);
			if (r === "rational") return Se(e, n);
			if (r === "timecode") return Ce(e, n);
			if (r === "preview") return n.value += i, "skipped";
			n.value += i;
		}
		function ze(e, t, n) {
			let r = {};
			if (e.getUint32(0, !0) != 20000630) throw "THREE.EXRLoader: provided file doesn't appear to be in OpenEXR format.";
			r.version = e.getUint8(4);
			let i = e.getUint8(5);
			r.spec = {
				singleTile: !!(i & 2),
				longName: !!(i & 4),
				deepFormat: !!(i & 8),
				multiPart: !!(i & 16)
			}, n.value = 8;
			for (var a = !0; a;) {
				var o = be(t, n);
				if (o == 0) a = !1;
				else {
					var s = be(t, n), c = Re(e, t, n, s, M(e, n));
					c === void 0 ? console.warn(`EXRLoader.parse: skipped unknown header attribute type '${s}'.`) : r[o] = c;
				}
			}
			if (i & -5) throw console.error("EXRHeader:", r), "THREE.EXRLoader: provided file is currently unsupported.";
			return r;
		}
		function Be(e, t, n, r, i) {
			let a = {
				size: 0,
				viewer: t,
				array: n,
				offset: r,
				width: e.dataWindow.xMax - e.dataWindow.xMin + 1,
				height: e.dataWindow.yMax - e.dataWindow.yMin + 1,
				channels: e.channels.length,
				bytesPerLine: null,
				lines: null,
				inputSize: null,
				type: e.channels[0].pixelType,
				uncompress: null,
				getter: null,
				format: null,
				[No ? "colorSpace" : "encoding"]: null
			};
			switch (e.compression) {
				case "NO_COMPRESSION":
					a.lines = 1, a.uncompress = me;
					break;
				case "RLE_COMPRESSION":
					a.lines = 1, a.uncompress = ge;
					break;
				case "ZIPS_COMPRESSION":
					a.lines = 1, a.uncompress = _e;
					break;
				case "ZIP_COMPRESSION":
					a.lines = 16, a.uncompress = _e;
					break;
				case "PIZ_COMPRESSION":
					a.lines = 32, a.uncompress = A;
					break;
				case "PXR24_COMPRESSION":
					a.lines = 16, a.uncompress = ve;
					break;
				case "DWAA_COMPRESSION":
					a.lines = 32, a.uncompress = ye;
					break;
				case "DWAB_COMPRESSION":
					a.lines = 256, a.uncompress = ye;
					break;
				default: throw "EXRLoader.parse: " + e.compression + " is unsupported";
			}
			if (a.scanlineBlockSize = a.lines, a.type == 1) switch (i) {
				case $e:
					a.getter = Ae, a.inputSize = 2;
					break;
				case he: a.getter = ke, a.inputSize = 2;
			}
			else if (a.type == 2) switch (i) {
				case $e:
					a.getter = De, a.inputSize = 4;
					break;
				case he: a.getter = Oe, a.inputSize = 4;
			}
			else throw "EXRLoader.parse: unsupported pixelType " + a.type + " for " + e.compression + ".";
			a.blockCount = (e.dataWindow.yMax + 1) / a.scanlineBlockSize;
			for (var o = 0; o < a.blockCount; o++) Ee(t, r);
			a.outputChannels = a.channels == 3 ? 4 : a.channels;
			let s = a.width * a.height * a.outputChannels;
			switch (i) {
				case $e:
					a.byteArray = new Float32Array(s), a.channels < a.outputChannels && a.byteArray.fill(1, 0, s);
					break;
				case he:
					a.byteArray = new Uint16Array(s), a.channels < a.outputChannels && a.byteArray.fill(15360, 0, s);
					break;
				default: console.error("THREE.EXRLoader: unsupported type: ", i);
			}
			return a.bytesPerLine = a.width * a.inputSize * a.channels, a.format = a.outputChannels == 4 ? _ : fe, No ? a.colorSpace = "srgb-linear" : a.encoding = 3e3, a;
		}
		let Ve = new DataView(e), He = new Uint8Array(e), Ue = { value: 0 }, We = ze(Ve, e, Ue), P = Be(We, Ve, He, Ue, this.type), Ge = { value: 0 }, Ke = {
			R: 0,
			G: 1,
			B: 2,
			A: 3,
			Y: 0
		};
		for (let e = 0; e < P.height / P.scanlineBlockSize; e++) {
			let t = M(Ve, Ue);
			P.size = M(Ve, Ue), P.lines = t + P.scanlineBlockSize > P.height ? P.height - t : P.scanlineBlockSize;
			let n = P.size < P.lines * P.bytesPerLine ? P.uncompress(P) : me(P);
			Ue.value += P.size;
			for (let t = 0; t < P.scanlineBlockSize; t++) {
				let r = t + e * P.scanlineBlockSize;
				if (r >= P.height) break;
				for (let e = 0; e < P.channels; e++) {
					let i = Ke[We.channels[e].name];
					for (let a = 0; a < P.width; a++) {
						Ge.value = (t * (P.channels * P.width) + e * P.width + a) * P.inputSize;
						let o = (P.height - 1 - r) * (P.width * P.outputChannels) + a * P.outputChannels + i;
						P.byteArray[o] = P.getter(n, Ge);
					}
				}
			}
		}
		return {
			header: We,
			width: P.width,
			height: P.height,
			data: P.byteArray,
			format: P.format,
			[No ? "colorSpace" : "encoding"]: P[No ? "colorSpace" : "encoding"],
			type: this.type
		};
	}
	setDataType(e) {
		return this.type = e, this;
	}
	load(e, t, n, r) {
		function i(e, n) {
			No ? e.colorSpace = n.colorSpace : e.encoding = n.encoding, e.minFilter = je, e.magFilter = je, e.generateMipmaps = !1, e.flipY = !1, t && t(e, n);
		}
		return super.load(e, i, n, r);
	}
}, Fo = /* @__PURE__ */ new WeakMap(), Io = class extends ye {
	constructor(e) {
		super(e), this.decoderPath = "", this.decoderConfig = {}, this.decoderBinary = null, this.decoderPending = null, this.workerLimit = 4, this.workerPool = [], this.workerNextTaskID = 1, this.workerSourceURL = "", this.defaultAttributeIDs = {
			position: "POSITION",
			normal: "NORMAL",
			color: "COLOR",
			uv: "TEX_COORD"
		}, this.defaultAttributeTypes = {
			position: "Float32Array",
			normal: "Float32Array",
			color: "Float32Array",
			uv: "Float32Array"
		};
	}
	setDecoderPath(e) {
		return this.decoderPath = e, this;
	}
	setDecoderConfig(e) {
		return this.decoderConfig = e, this;
	}
	setWorkerLimit(e) {
		return this.workerLimit = e, this;
	}
	load(e, t, n, r) {
		let i = new m(this.manager);
		i.setPath(this.path), i.setResponseType("arraybuffer"), i.setRequestHeader(this.requestHeader), i.setWithCredentials(this.withCredentials), i.load(e, (e) => {
			let n = {
				attributeIDs: this.defaultAttributeIDs,
				attributeTypes: this.defaultAttributeTypes,
				useUniqueIDs: !1
			};
			this.decodeGeometry(e, n).then(t).catch(r);
		}, n, r);
	}
	decodeDracoFile(e, t, n, r) {
		let i = {
			attributeIDs: n || this.defaultAttributeIDs,
			attributeTypes: r || this.defaultAttributeTypes,
			useUniqueIDs: !!n
		};
		this.decodeGeometry(e, i).then(t);
	}
	decodeGeometry(e, t) {
		for (let e in t.attributeTypes) {
			let n = t.attributeTypes[e];
			n.BYTES_PER_ELEMENT !== void 0 && (t.attributeTypes[e] = n.name);
		}
		let n = JSON.stringify(t);
		if (Fo.has(e)) {
			let t = Fo.get(e);
			if (t.key === n) return t.promise;
			if (e.byteLength === 0) throw Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.");
		}
		let r, i = this.workerNextTaskID++, a = e.byteLength, o = this._getWorker(i, a).then((n) => (r = n, new Promise((n, a) => {
			r._callbacks[i] = {
				resolve: n,
				reject: a
			}, r.postMessage({
				type: "decode",
				id: i,
				taskConfig: t,
				buffer: e
			}, [e]);
		}))).then((e) => this._createGeometry(e.geometry));
		return o.catch(() => !0).then(() => {
			r && i && this._releaseTask(r, i);
		}), Fo.set(e, {
			key: n,
			promise: o
		}), o;
	}
	_createGeometry(e) {
		let t = new D();
		e.index && t.setIndex(new l(e.index.array, 1));
		for (let n = 0; n < e.attributes.length; n++) {
			let r = e.attributes[n], i = r.name, a = r.array, o = r.itemSize;
			t.setAttribute(i, new l(a, o));
		}
		return t;
	}
	_loadLibrary(e, t) {
		let n = new m(this.manager);
		return n.setPath(this.decoderPath), n.setResponseType(t), n.setWithCredentials(this.withCredentials), new Promise((t, r) => {
			n.load(e, t, void 0, r);
		});
	}
	preload() {
		return this._initDecoder(), this;
	}
	_initDecoder() {
		if (this.decoderPending) return this.decoderPending;
		let e = typeof WebAssembly != "object" || this.decoderConfig.type === "js", t = [];
		return e ? t.push(this._loadLibrary("draco_decoder.js", "text")) : (t.push(this._loadLibrary("draco_wasm_wrapper.js", "text")), t.push(this._loadLibrary("draco_decoder.wasm", "arraybuffer"))), this.decoderPending = Promise.all(t).then((t) => {
			let n = t[0];
			e || (this.decoderConfig.wasmBinary = t[1]);
			let r = Lo.toString(), i = [
				"/* draco decoder */",
				n,
				"",
				"/* worker */",
				r.substring(r.indexOf("{") + 1, r.lastIndexOf("}"))
			].join("\n");
			this.workerSourceURL = URL.createObjectURL(new Blob([i]));
		}), this.decoderPending;
	}
	_getWorker(e, t) {
		return this._initDecoder().then(() => {
			if (this.workerPool.length < this.workerLimit) {
				let e = new Worker(this.workerSourceURL);
				e._callbacks = {}, e._taskCosts = {}, e._taskLoad = 0, e.postMessage({
					type: "init",
					decoderConfig: this.decoderConfig
				}), e.onmessage = function(t) {
					let n = t.data;
					switch (n.type) {
						case "decode":
							e._callbacks[n.id].resolve(n);
							break;
						case "error":
							e._callbacks[n.id].reject(n);
							break;
						default: console.error("THREE.DRACOLoader: Unexpected message, \"" + n.type + "\"");
					}
				}, this.workerPool.push(e);
			} else this.workerPool.sort(function(e, t) {
				return e._taskLoad > t._taskLoad ? -1 : 1;
			});
			let n = this.workerPool[this.workerPool.length - 1];
			return n._taskCosts[e] = t, n._taskLoad += t, n;
		});
	}
	_releaseTask(e, t) {
		e._taskLoad -= e._taskCosts[t], delete e._callbacks[t], delete e._taskCosts[t];
	}
	debug() {
		console.log("Task load: ", this.workerPool.map((e) => e._taskLoad));
	}
	dispose() {
		for (let e = 0; e < this.workerPool.length; ++e) this.workerPool[e].terminate();
		return this.workerPool.length = 0, this;
	}
};
function Lo() {
	let e, t;
	onmessage = function(r) {
		let i = r.data;
		switch (i.type) {
			case "init":
				e = i.decoderConfig, t = new Promise(function(t) {
					e.onModuleLoaded = function(e) {
						t({ draco: e });
					}, DracoDecoderModule(e);
				});
				break;
			case "decode":
				let r = i.buffer, a = i.taskConfig;
				t.then((e) => {
					let t = e.draco, o = new t.Decoder(), s = new t.DecoderBuffer();
					s.Init(new Int8Array(r), r.byteLength);
					try {
						let e = n(t, o, s, a), r = e.attributes.map((e) => e.array.buffer);
						e.index && r.push(e.index.array.buffer), self.postMessage({
							type: "decode",
							id: i.id,
							geometry: e
						}, r);
					} catch (e) {
						console.error(e), self.postMessage({
							type: "error",
							id: i.id,
							error: e.message
						});
					} finally {
						t.destroy(s), t.destroy(o);
					}
				});
		}
	};
	function n(e, t, n, a) {
		let o = a.attributeIDs, s = a.attributeTypes, c, l, u = t.GetEncodedGeometryType(n);
		if (u === e.TRIANGULAR_MESH) c = new e.Mesh(), l = t.DecodeBufferToMesh(n, c);
		else if (u === e.POINT_CLOUD) c = new e.PointCloud(), l = t.DecodeBufferToPointCloud(n, c);
		else throw Error("THREE.DRACOLoader: Unexpected geometry type.");
		if (!l.ok() || c.ptr === 0) throw Error("THREE.DRACOLoader: Decoding failed: " + l.error_msg());
		let d = {
			index: null,
			attributes: []
		};
		for (let n in o) {
			let r = self[s[n]], l, u;
			if (a.useUniqueIDs) u = o[n], l = t.GetAttributeByUniqueId(c, u);
			else {
				if (u = t.GetAttributeId(c, e[o[n]]), u === -1) continue;
				l = t.GetAttribute(c, u);
			}
			d.attributes.push(i(e, t, c, n, r, l));
		}
		return u === e.TRIANGULAR_MESH && (d.index = r(e, t, c)), e.destroy(c), d;
	}
	function r(e, t, n) {
		let r = n.num_faces() * 3, i = r * 4, a = e._malloc(i);
		t.GetTrianglesUInt32Array(n, i, a);
		let o = new Uint32Array(e.HEAPF32.buffer, a, r).slice();
		return e._free(a), {
			array: o,
			itemSize: 1
		};
	}
	function i(e, t, n, r, i, o) {
		let s = o.num_components(), c = n.num_points() * s, l = c * i.BYTES_PER_ELEMENT, u = a(e, i), d = e._malloc(l);
		t.GetAttributeDataArrayForAllPoints(n, o, u, l, d);
		let f = new i(e.HEAPF32.buffer, d, c).slice();
		return e._free(d), {
			name: r,
			array: f,
			itemSize: s
		};
	}
	function a(e, t) {
		switch (t) {
			case Float32Array: return e.DT_FLOAT32;
			case Int8Array: return e.DT_INT8;
			case Int16Array: return e.DT_INT16;
			case Int32Array: return e.DT_INT32;
			case Uint8Array: return e.DT_UINT8;
			case Uint16Array: return e.DT_UINT16;
			case Uint32Array: return e.DT_UINT32;
		}
	}
}
//#endregion
//#region node_modules/three-stdlib/libs/MeshoptDecoder.js
var Ro, zo = () => {
	if (Ro) return Ro;
	let e = new Uint8Array([
		0,
		97,
		115,
		109,
		1,
		0,
		0,
		0,
		1,
		4,
		1,
		96,
		0,
		0,
		3,
		3,
		2,
		0,
		0,
		5,
		3,
		1,
		0,
		1,
		12,
		1,
		0,
		10,
		22,
		2,
		12,
		0,
		65,
		0,
		65,
		0,
		65,
		0,
		252,
		10,
		0,
		0,
		11,
		7,
		0,
		65,
		0,
		253,
		15,
		26,
		11
	]), t = new Uint8Array([
		32,
		0,
		65,
		253,
		3,
		1,
		2,
		34,
		4,
		106,
		6,
		5,
		11,
		8,
		7,
		20,
		13,
		33,
		12,
		16,
		128,
		9,
		116,
		64,
		19,
		113,
		127,
		15,
		10,
		21,
		22,
		14,
		255,
		66,
		24,
		54,
		136,
		107,
		18,
		23,
		192,
		26,
		114,
		118,
		132,
		17,
		77,
		101,
		130,
		144,
		27,
		87,
		131,
		44,
		45,
		74,
		156,
		154,
		70,
		167
	]);
	if (typeof WebAssembly != "object") return { supported: !1 };
	let n = "B9h9z9tFBBBF8fL9gBB9gLaaaaaFa9gEaaaB9gFaFa9gEaaaFaEMcBFFFGGGEIIILF9wFFFLEFBFKNFaFCx/IFMO/LFVK9tv9t9vq95GBt9f9f939h9z9t9f9j9h9s9s9f9jW9vq9zBBp9tv9z9o9v9wW9f9kv9j9v9kv9WvqWv94h919m9mvqBF8Z9tv9z9o9v9wW9f9kv9j9v9kv9J9u9kv94h919m9mvqBGy9tv9z9o9v9wW9f9kv9j9v9kv9J9u9kv949TvZ91v9u9jvBEn9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9P9jWBIi9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9R919hWBLn9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9F949wBKI9z9iqlBOc+x8ycGBM/qQFTa8jUUUUBCU/EBlHL8kUUUUBC9+RKGXAGCFJAI9LQBCaRKAE2BBC+gF9HQBALAEAIJHOAGlAGTkUUUBRNCUoBAG9uC/wgBZHKCUGAKCUG9JyRVAECFJRICBRcGXEXAcAF9PQFAVAFAclAcAVJAF9JyRMGXGXAG9FQBAMCbJHKC9wZRSAKCIrCEJCGrRQANCUGJRfCBRbAIRTEXGXAOATlAQ9PQBCBRISEMATAQJRIGXAS9FQBCBRtCBREEXGXAOAIlCi9PQBCBRISLMANCU/CBJAEJRKGXGXGXGXGXATAECKrJ2BBAtCKZrCEZfIBFGEBMAKhB83EBAKCNJhB83EBSEMAKAI2BIAI2BBHmCKrHYAYCE6HYy86BBAKCFJAICIJAYJHY2BBAmCIrCEZHPAPCE6HPy86BBAKCGJAYAPJHY2BBAmCGrCEZHPAPCE6HPy86BBAKCEJAYAPJHY2BBAmCEZHmAmCE6Hmy86BBAKCIJAYAmJHY2BBAI2BFHmCKrHPAPCE6HPy86BBAKCLJAYAPJHY2BBAmCIrCEZHPAPCE6HPy86BBAKCKJAYAPJHY2BBAmCGrCEZHPAPCE6HPy86BBAKCOJAYAPJHY2BBAmCEZHmAmCE6Hmy86BBAKCNJAYAmJHY2BBAI2BGHmCKrHPAPCE6HPy86BBAKCVJAYAPJHY2BBAmCIrCEZHPAPCE6HPy86BBAKCcJAYAPJHY2BBAmCGrCEZHPAPCE6HPy86BBAKCMJAYAPJHY2BBAmCEZHmAmCE6Hmy86BBAKCSJAYAmJHm2BBAI2BEHICKrHYAYCE6HYy86BBAKCQJAmAYJHm2BBAICIrCEZHYAYCE6HYy86BBAKCfJAmAYJHm2BBAICGrCEZHYAYCE6HYy86BBAKCbJAmAYJHK2BBAICEZHIAICE6HIy86BBAKAIJRISGMAKAI2BNAI2BBHmCIrHYAYCb6HYy86BBAKCFJAICNJAYJHY2BBAmCbZHmAmCb6Hmy86BBAKCGJAYAmJHm2BBAI2BFHYCIrHPAPCb6HPy86BBAKCEJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCIJAmAYJHm2BBAI2BGHYCIrHPAPCb6HPy86BBAKCLJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCKJAmAYJHm2BBAI2BEHYCIrHPAPCb6HPy86BBAKCOJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCNJAmAYJHm2BBAI2BIHYCIrHPAPCb6HPy86BBAKCVJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCcJAmAYJHm2BBAI2BLHYCIrHPAPCb6HPy86BBAKCMJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCSJAmAYJHm2BBAI2BKHYCIrHPAPCb6HPy86BBAKCQJAmAPJHm2BBAYCbZHYAYCb6HYy86BBAKCfJAmAYJHm2BBAI2BOHICIrHYAYCb6HYy86BBAKCbJAmAYJHK2BBAICbZHIAICb6HIy86BBAKAIJRISFMAKAI8pBB83BBAKCNJAICNJ8pBB83BBAICTJRIMAtCGJRtAECTJHEAS9JQBMMGXAIQBCBRISEMGXAM9FQBANAbJ2BBRtCBRKAfREEXAEANCU/CBJAKJ2BBHTCFrCBATCFZl9zAtJHt86BBAEAGJREAKCFJHKAM9HQBMMAfCFJRfAIRTAbCFJHbAG9HQBMMABAcAG9sJANCUGJAMAG9sTkUUUBpANANCUGJAMCaJAG9sJAGTkUUUBpMAMCBAIyAcJRcAIQBMC9+RKSFMCBC99AOAIlAGCAAGCA9Ly6yRKMALCU/EBJ8kUUUUBAKM+OmFTa8jUUUUBCoFlHL8kUUUUBC9+RKGXAFCE9uHOCtJAI9LQBCaRKAE2BBHNC/wFZC/gF9HQBANCbZHVCF9LQBALCoBJCgFCUFT+JUUUBpALC84Jha83EBALC8wJha83EBALC8oJha83EBALCAJha83EBALCiJha83EBALCTJha83EBALha83ENALha83EBAEAIJC9wJRcAECFJHNAOJRMGXAF9FQBCQCbAVCF6yRSABRECBRVCBRQCBRfCBRICBRKEXGXAMAcuQBC9+RKSEMGXGXAN2BBHOC/vF9LQBALCoBJAOCIrCa9zAKJCbZCEWJHb8oGIRTAb8oGBRtGXAOCbZHbAS9PQBALAOCa9zAIJCbZCGWJ8oGBAVAbyROAb9FRbGXGXAGCG9HQBABAt87FBABCIJAO87FBABCGJAT87FBSFMAEAtjGBAECNJAOjGBAECIJATjGBMAVAbJRVALCoBJAKCEWJHmAOjGBAmATjGIALAICGWJAOjGBALCoBJAKCFJCbZHKCEWJHTAtjGBATAOjGIAIAbJRIAKCFJRKSGMGXGXAbCb6QBAQAbJAbC989zJCFJRQSFMAM1BBHbCgFZROGXGXAbCa9MQBAMCFJRMSFMAM1BFHbCgBZCOWAOCgBZqROGXAbCa9MQBAMCGJRMSFMAM1BGHbCgBZCfWAOqROGXAbCa9MQBAMCEJRMSFMAM1BEHbCgBZCdWAOqROGXAbCa9MQBAMCIJRMSFMAM2BIC8cWAOqROAMCLJRMMAOCFrCBAOCFZl9zAQJRQMGXGXAGCG9HQBABAt87FBABCIJAQ87FBABCGJAT87FBSFMAEAtjGBAECNJAQjGBAECIJATjGBMALCoBJAKCEWJHOAQjGBAOATjGIALAICGWJAQjGBALCoBJAKCFJCbZHKCEWJHOAtjGBAOAQjGIAICFJRIAKCFJRKSFMGXAOCDF9LQBALAIAcAOCbZJ2BBHbCIrHTlCbZCGWJ8oGBAVCFJHtATyROALAIAblCbZCGWJ8oGBAtAT9FHmJHtAbCbZHTyRbAT9FRTGXGXAGCG9HQBABAV87FBABCIJAb87FBABCGJAO87FBSFMAEAVjGBAECNJAbjGBAECIJAOjGBMALAICGWJAVjGBALCoBJAKCEWJHYAOjGBAYAVjGIALAICFJHICbZCGWJAOjGBALCoBJAKCFJCbZCEWJHYAbjGBAYAOjGIALAIAmJCbZHICGWJAbjGBALCoBJAKCGJCbZHKCEWJHOAVjGBAOAbjGIAKCFJRKAIATJRIAtATJRVSFMAVCBAM2BBHYyHTAOC/+F6HPJROAYCbZRtGXGXAYCIrHmQBAOCFJRbSFMAORbALAIAmlCbZCGWJ8oGBROMGXGXAtQBAbCFJRVSFMAbRVALAIAYlCbZCGWJ8oGBRbMGXGXAP9FQBAMCFJRYSFMAM1BFHYCgFZRTGXGXAYCa9MQBAMCGJRYSFMAM1BGHYCgBZCOWATCgBZqRTGXAYCa9MQBAMCEJRYSFMAM1BEHYCgBZCfWATqRTGXAYCa9MQBAMCIJRYSFMAM1BIHYCgBZCdWATqRTGXAYCa9MQBAMCLJRYSFMAMCKJRYAM2BLC8cWATqRTMATCFrCBATCFZl9zAQJHQRTMGXGXAmCb6QBAYRPSFMAY1BBHMCgFZROGXGXAMCa9MQBAYCFJRPSFMAY1BFHMCgBZCOWAOCgBZqROGXAMCa9MQBAYCGJRPSFMAY1BGHMCgBZCfWAOqROGXAMCa9MQBAYCEJRPSFMAY1BEHMCgBZCdWAOqROGXAMCa9MQBAYCIJRPSFMAYCLJRPAY2BIC8cWAOqROMAOCFrCBAOCFZl9zAQJHQROMGXGXAtCb6QBAPRMSFMAP1BBHMCgFZRbGXGXAMCa9MQBAPCFJRMSFMAP1BFHMCgBZCOWAbCgBZqRbGXAMCa9MQBAPCGJRMSFMAP1BGHMCgBZCfWAbqRbGXAMCa9MQBAPCEJRMSFMAP1BEHMCgBZCdWAbqRbGXAMCa9MQBAPCIJRMSFMAPCLJRMAP2BIC8cWAbqRbMAbCFrCBAbCFZl9zAQJHQRbMGXGXAGCG9HQBABAT87FBABCIJAb87FBABCGJAO87FBSFMAEATjGBAECNJAbjGBAECIJAOjGBMALCoBJAKCEWJHYAOjGBAYATjGIALAICGWJATjGBALCoBJAKCFJCbZCEWJHYAbjGBAYAOjGIALAICFJHICbZCGWJAOjGBALCoBJAKCGJCbZCEWJHOATjGBAOAbjGIALAIAm9FAmCb6qJHICbZCGWJAbjGBAIAt9FAtCb6qJRIAKCEJRKMANCFJRNABCKJRBAECSJREAKCbZRKAICbZRIAfCEJHfAF9JQBMMCBC99AMAc6yRKMALCoFJ8kUUUUBAKM/tIFGa8jUUUUBCTlRLC9+RKGXAFCLJAI9LQBCaRKAE2BBC/+FZC/QF9HQBALhB83ENAECFJRKAEAIJC98JREGXAF9FQBGXAGCG6QBEXGXAKAE9JQBC9+bMAK1BBHGCgFZRIGXGXAGCa9MQBAKCFJRKSFMAK1BFHGCgBZCOWAICgBZqRIGXAGCa9MQBAKCGJRKSFMAK1BGHGCgBZCfWAIqRIGXAGCa9MQBAKCEJRKSFMAK1BEHGCgBZCdWAIqRIGXAGCa9MQBAKCIJRKSFMAK2BIC8cWAIqRIAKCLJRKMALCNJAICFZCGWqHGAICGrCBAICFrCFZl9zAG8oGBJHIjGBABAIjGBABCIJRBAFCaJHFQBSGMMEXGXAKAE9JQBC9+bMAK1BBHGCgFZRIGXGXAGCa9MQBAKCFJRKSFMAK1BFHGCgBZCOWAICgBZqRIGXAGCa9MQBAKCGJRKSFMAK1BGHGCgBZCfWAIqRIGXAGCa9MQBAKCEJRKSFMAK1BEHGCgBZCdWAIqRIGXAGCa9MQBAKCIJRKSFMAK2BIC8cWAIqRIAKCLJRKMABAICGrCBAICFrCFZl9zALCNJAICFZCGWqHI8oGBJHG87FBAIAGjGBABCGJRBAFCaJHFQBMMCBC99AKAE6yRKMAKM+lLKFaF99GaG99FaG99GXGXAGCI9HQBAF9FQFEXGXGX9DBBB8/9DBBB+/ABCGJHG1BB+yAB1BBHE+yHI+L+TABCFJHL1BBHK+yHO+L+THN9DBBBB9gHVyAN9DBB/+hANAN+U9DBBBBANAVyHcAc+MHMAECa3yAI+SHIAI+UAcAMAKCa3yAO+SHcAc+U+S+S+R+VHO+U+SHN+L9DBBB9P9d9FQBAN+oRESFMCUUUU94REMAGAE86BBGXGX9DBBB8/9DBBB+/Ac9DBBBB9gyAcAO+U+SHN+L9DBBB9P9d9FQBAN+oRGSFMCUUUU94RGMALAG86BBGXGX9DBBB8/9DBBB+/AI9DBBBB9gyAIAO+U+SHN+L9DBBB9P9d9FQBAN+oRGSFMCUUUU94RGMABAG86BBABCIJRBAFCaJHFQBSGMMAF9FQBEXGXGX9DBBB8/9DBBB+/ABCIJHG8uFB+yAB8uFBHE+yHI+L+TABCGJHL8uFBHK+yHO+L+THN9DBBBB9gHVyAN9DB/+g6ANAN+U9DBBBBANAVyHcAc+MHMAECa3yAI+SHIAI+UAcAMAKCa3yAO+SHcAc+U+S+S+R+VHO+U+SHN+L9DBBB9P9d9FQBAN+oRESFMCUUUU94REMAGAE87FBGXGX9DBBB8/9DBBB+/Ac9DBBBB9gyAcAO+U+SHN+L9DBBB9P9d9FQBAN+oRGSFMCUUUU94RGMALAG87FBGXGX9DBBB8/9DBBB+/AI9DBBBB9gyAIAO+U+SHN+L9DBBB9P9d9FQBAN+oRGSFMCUUUU94RGMABAG87FBABCNJRBAFCaJHFQBMMM/SEIEaE99EaF99GXAF9FQBCBREABRIEXGXGX9D/zI818/AICKJ8uFBHLCEq+y+VHKAI8uFB+y+UHO9DB/+g6+U9DBBB8/9DBBB+/AO9DBBBB9gy+SHN+L9DBBB9P9d9FQBAN+oRVSFMCUUUU94RVMAICIJ8uFBRcAICGJ8uFBRMABALCFJCEZAEqCFWJAV87FBGXGXAKAM+y+UHN9DB/+g6+U9DBBB8/9DBBB+/AN9DBBBB9gy+SHS+L9DBBB9P9d9FQBAS+oRMSFMCUUUU94RMMABALCGJCEZAEqCFWJAM87FBGXGXAKAc+y+UHK9DB/+g6+U9DBBB8/9DBBB+/AK9DBBBB9gy+SHS+L9DBBB9P9d9FQBAS+oRcSFMCUUUU94RcMABALCaJCEZAEqCFWJAc87FBGXGX9DBBU8/AOAO+U+TANAN+U+TAKAK+U+THO9DBBBBAO9DBBBB9gy+R9DB/+g6+U9DBBB8/+SHO+L9DBBB9P9d9FQBAO+oRcSFMCUUUU94RcMABALCEZAEqCFWJAc87FBAICNJRIAECIJREAFCaJHFQBMMM9JBGXAGCGrAF9sHF9FQBEXABAB8oGBHGCNWCN91+yAGCi91CnWCUUU/8EJ+++U84GBABCIJRBAFCaJHFQBMMM9TFEaCBCB8oGUkUUBHFABCEJC98ZJHBjGUkUUBGXGXAB8/BCTWHGuQBCaREABAGlCggEJCTrXBCa6QFMAFREMAEM/lFFFaGXGXAFABqCEZ9FQBABRESFMGXGXAGCT9PQBABRESFMABREEXAEAF8oGBjGBAECIJAFCIJ8oGBjGBAECNJAFCNJ8oGBjGBAECSJAFCSJ8oGBjGBAECTJREAFCTJRFAGC9wJHGCb9LQBMMAGCI9JQBEXAEAF8oGBjGBAFCIJRFAECIJREAGC98JHGCE9LQBMMGXAG9FQBEXAEAF2BB86BBAECFJREAFCFJRFAGCaJHGQBMMABMoFFGaGXGXABCEZ9FQBABRESFMAFCgFZC+BwsN9sRIGXGXAGCT9PQBABRESFMABREEXAEAIjGBAECSJAIjGBAECNJAIjGBAECIJAIjGBAECTJREAGC9wJHGCb9LQBMMAGCI9JQBEXAEAIjGBAECIJREAGC98JHGCE9LQBMMGXAG9FQBEXAEAF86BBAECFJREAGCaJHGQBMMABMMMFBCUNMIT9kBB";
	WebAssembly.validate(e) && (n = "B9h9z9tFBBBFiI9gBB9gLaaaaaFa9gEaaaB9gFaFaEMcBBFBFFGGGEILF9wFFFLEFBFKNFaFCx/aFMO/LFVK9tv9t9vq95GBt9f9f939h9z9t9f9j9h9s9s9f9jW9vq9zBBp9tv9z9o9v9wW9f9kv9j9v9kv9WvqWv94h919m9mvqBG8Z9tv9z9o9v9wW9f9kv9j9v9kv9J9u9kv94h919m9mvqBIy9tv9z9o9v9wW9f9kv9j9v9kv9J9u9kv949TvZ91v9u9jvBLn9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9P9jWBKi9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9R919hWBOn9tv9z9o9v9wW9f9kv9j9v9kv69p9sWvq9F949wBNI9z9iqlBVc+N9IcIBTEM9+FLa8jUUUUBCTlRBCBRFEXCBRGCBREEXABCNJAGJAECUaAFAGrCFZHIy86BBAEAIJREAGCFJHGCN9HQBMAFCx+YUUBJAE86BBAFCEWCxkUUBJAB8pEN83EBAFCFJHFCUG9HQBMMk8lLbaE97F9+FaL978jUUUUBCU/KBlHL8kUUUUBC9+RKGXAGCFJAI9LQBCaRKAE2BBC+gF9HQBALAEAIJHOAGlAG/8cBBCUoBAG9uC/wgBZHKCUGAKCUG9JyRNAECFJRKCBRVGXEXAVAF9PQFANAFAVlAVANJAF9JyRcGXGXAG9FQBAcCbJHIC9wZHMCE9sRSAMCFWRQAICIrCEJCGrRfCBRbEXAKRTCBRtGXEXGXAOATlAf9PQBCBRKSLMALCU/CBJAtAM9sJRmATAfJRKCBREGXAMCoB9JQBAOAKlC/gB9JQBCBRIEXAmAIJREGXGXGXGXGXATAICKrJ2BBHYCEZfIBFGEBMAECBDtDMIBSEMAEAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIBAKCIJAeDeBJAiCx+YUUBJ2BBJRKSGMAEAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIBAKCNJAeDeBJAiCx+YUUBJ2BBJRKSFMAEAKDBBBDMIBAKCTJRKMGXGXGXGXGXAYCGrCEZfIBFGEBMAECBDtDMITSEMAEAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMITAKCIJAeDeBJAiCx+YUUBJ2BBJRKSGMAEAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMITAKCNJAeDeBJAiCx+YUUBJ2BBJRKSFMAEAKDBBBDMITAKCTJRKMGXGXGXGXGXAYCIrCEZfIBFGEBMAECBDtDMIASEMAEAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIAAKCIJAeDeBJAiCx+YUUBJ2BBJRKSGMAEAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIAAKCNJAeDeBJAiCx+YUUBJ2BBJRKSFMAEAKDBBBDMIAAKCTJRKMGXGXGXGXGXAYCKrfIBFGEBMAECBDtDMI8wSEMAEAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHYCEWCxkUUBJDBEBAYCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHYCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMI8wAKCIJAeDeBJAYCx+YUUBJ2BBJRKSGMAEAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHYCEWCxkUUBJDBEBAYCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHYCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMI8wAKCNJAeDeBJAYCx+YUUBJ2BBJRKSFMAEAKDBBBDMI8wAKCTJRKMAICoBJREAICUFJAM9LQFAERIAOAKlC/fB9LQBMMGXAEAM9PQBAECErRIEXGXAOAKlCi9PQBCBRKSOMAmAEJRYGXGXGXGXGXATAECKrJ2BBAICKZrCEZfIBFGEBMAYCBDtDMIBSEMAYAKDBBIAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnHPCGD+MFAPDQBTFtGmEYIPLdKeOnC0+G+MiDtD9OHdCEDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIBAKCIJAeDeBJAiCx+YUUBJ2BBJRKSGMAYAKDBBNAKDBBBHPCID+MFAPDQBTFtGmEYIPLdKeOnC+P+e+8/4BDtD9OHdCbDbD8jHPAPDQBFGENVcMILKOSQfbHeD8dBh+BsxoxoUwN0AeD8dFhxoUwkwk+gUa0sHnhTkAnsHnhNkAnsHn7CgFZHiCEWCxkUUBJDBEBAiCx+YUUBJDBBBHeAeDQBBBBBBBBBBBBBBBBAnhAk7CgFZHiCEWCxkUUBJDBEBD9uDQBFGEILKOTtmYPdenDfAdAPD9SDMIBAKCNJAeDeBJAiCx+YUUBJ2BBJRKSFMAYAKDBBBDMIBAKCTJRKMAICGJRIAECTJHEAM9JQBMMGXAK9FQBAKRTAtCFJHtCI6QGSFMMCBRKSEMGXAM9FQBALCUGJAbJREALAbJDBGBReCBRYEXAEALCU/CBJAYJHIDBIBHdCFD9tAdCFDbHPD9OD9hD9RHdAIAMJDBIBH8ZCFD9tA8ZAPD9OD9hD9RH8ZDQBTFtGmEYIPLdKeOnHpAIAQJDBIBHyCFD9tAyAPD9OD9hD9RHyAIASJDBIBH8cCFD9tA8cAPD9OD9hD9RH8cDQBTFtGmEYIPLdKeOnH8dDQBFTtGEmYILPdKOenHPAPDQBFGEBFGEBFGEBFGEAeD9uHeDyBjGBAEAGJHIAeAPAPDQILKOILKOILKOILKOD9uHeDyBjGBAIAGJHIAeAPAPDQNVcMNVcMNVcMNVcMD9uHeDyBjGBAIAGJHIAeAPAPDQSQfbSQfbSQfbSQfbD9uHeDyBjGBAIAGJHIAeApA8dDQNVi8ZcMpySQ8c8dfb8e8fHPAPDQBFGEBFGEBFGEBFGED9uHeDyBjGBAIAGJHIAeAPAPDQILKOILKOILKOILKOD9uHeDyBjGBAIAGJHIAeAPAPDQNVcMNVcMNVcMNVcMD9uHeDyBjGBAIAGJHIAeAPAPDQSQfbSQfbSQfbSQfbD9uHeDyBjGBAIAGJHIAeAdA8ZDQNiV8ZcpMyS8cQ8df8eb8fHdAyA8cDQNiV8ZcpMyS8cQ8df8eb8fH8ZDQBFTtGEmYILPdKOenHPAPDQBFGEBFGEBFGEBFGED9uHeDyBjGBAIAGJHIAeAPAPDQILKOILKOILKOILKOD9uHeDyBjGBAIAGJHIAeAPAPDQNVcMNVcMNVcMNVcMD9uHeDyBjGBAIAGJHIAeAPAPDQSQfbSQfbSQfbSQfbD9uHeDyBjGBAIAGJHIAeAdA8ZDQNVi8ZcMpySQ8c8dfb8e8fHPAPDQBFGEBFGEBFGEBFGED9uHeDyBjGBAIAGJHIAeAPAPDQILKOILKOILKOILKOD9uHeDyBjGBAIAGJHIAeAPAPDQNVcMNVcMNVcMNVcMD9uHeDyBjGBAIAGJHIAeAPAPDQSQfbSQfbSQfbSQfbD9uHeDyBjGBAIAGJREAYCTJHYAM9JQBMMAbCIJHbAG9JQBMMABAVAG9sJALCUGJAcAG9s/8cBBALALCUGJAcCaJAG9sJAG/8cBBMAcCBAKyAVJRVAKQBMC9+RKSFMCBC99AOAKlAGCAAGCA9Ly6yRKMALCU/KBJ8kUUUUBAKMNBT+BUUUBM+KmFTa8jUUUUBCoFlHL8kUUUUBC9+RKGXAFCE9uHOCtJAI9LQBCaRKAE2BBHNC/wFZC/gF9HQBANCbZHVCF9LQBALCoBJCgFCUF/8MBALC84Jha83EBALC8wJha83EBALC8oJha83EBALCAJha83EBALCiJha83EBALCTJha83EBALha83ENALha83EBAEAIJC9wJRcAECFJHNAOJRMGXAF9FQBCQCbAVCF6yRSABRECBRVCBRQCBRfCBRICBRKEXGXAMAcuQBC9+RKSEMGXGXAN2BBHOC/vF9LQBALCoBJAOCIrCa9zAKJCbZCEWJHb8oGIRTAb8oGBRtGXAOCbZHbAS9PQBALAOCa9zAIJCbZCGWJ8oGBAVAbyROAb9FRbGXGXAGCG9HQBABAt87FBABCIJAO87FBABCGJAT87FBSFMAEAtjGBAECNJAOjGBAECIJATjGBMAVAbJRVALCoBJAKCEWJHmAOjGBAmATjGIALAICGWJAOjGBALCoBJAKCFJCbZHKCEWJHTAtjGBATAOjGIAIAbJRIAKCFJRKSGMGXGXAbCb6QBAQAbJAbC989zJCFJRQSFMAM1BBHbCgFZROGXGXAbCa9MQBAMCFJRMSFMAM1BFHbCgBZCOWAOCgBZqROGXAbCa9MQBAMCGJRMSFMAM1BGHbCgBZCfWAOqROGXAbCa9MQBAMCEJRMSFMAM1BEHbCgBZCdWAOqROGXAbCa9MQBAMCIJRMSFMAM2BIC8cWAOqROAMCLJRMMAOCFrCBAOCFZl9zAQJRQMGXGXAGCG9HQBABAt87FBABCIJAQ87FBABCGJAT87FBSFMAEAtjGBAECNJAQjGBAECIJATjGBMALCoBJAKCEWJHOAQjGBAOATjGIALAICGWJAQjGBALCoBJAKCFJCbZHKCEWJHOAtjGBAOAQjGIAICFJRIAKCFJRKSFMGXAOCDF9LQBALAIAcAOCbZJ2BBHbCIrHTlCbZCGWJ8oGBAVCFJHtATyROALAIAblCbZCGWJ8oGBAtAT9FHmJHtAbCbZHTyRbAT9FRTGXGXAGCG9HQBABAV87FBABCIJAb87FBABCGJAO87FBSFMAEAVjGBAECNJAbjGBAECIJAOjGBMALAICGWJAVjGBALCoBJAKCEWJHYAOjGBAYAVjGIALAICFJHICbZCGWJAOjGBALCoBJAKCFJCbZCEWJHYAbjGBAYAOjGIALAIAmJCbZHICGWJAbjGBALCoBJAKCGJCbZHKCEWJHOAVjGBAOAbjGIAKCFJRKAIATJRIAtATJRVSFMAVCBAM2BBHYyHTAOC/+F6HPJROAYCbZRtGXGXAYCIrHmQBAOCFJRbSFMAORbALAIAmlCbZCGWJ8oGBROMGXGXAtQBAbCFJRVSFMAbRVALAIAYlCbZCGWJ8oGBRbMGXGXAP9FQBAMCFJRYSFMAM1BFHYCgFZRTGXGXAYCa9MQBAMCGJRYSFMAM1BGHYCgBZCOWATCgBZqRTGXAYCa9MQBAMCEJRYSFMAM1BEHYCgBZCfWATqRTGXAYCa9MQBAMCIJRYSFMAM1BIHYCgBZCdWATqRTGXAYCa9MQBAMCLJRYSFMAMCKJRYAM2BLC8cWATqRTMATCFrCBATCFZl9zAQJHQRTMGXGXAmCb6QBAYRPSFMAY1BBHMCgFZROGXGXAMCa9MQBAYCFJRPSFMAY1BFHMCgBZCOWAOCgBZqROGXAMCa9MQBAYCGJRPSFMAY1BGHMCgBZCfWAOqROGXAMCa9MQBAYCEJRPSFMAY1BEHMCgBZCdWAOqROGXAMCa9MQBAYCIJRPSFMAYCLJRPAY2BIC8cWAOqROMAOCFrCBAOCFZl9zAQJHQROMGXGXAtCb6QBAPRMSFMAP1BBHMCgFZRbGXGXAMCa9MQBAPCFJRMSFMAP1BFHMCgBZCOWAbCgBZqRbGXAMCa9MQBAPCGJRMSFMAP1BGHMCgBZCfWAbqRbGXAMCa9MQBAPCEJRMSFMAP1BEHMCgBZCdWAbqRbGXAMCa9MQBAPCIJRMSFMAPCLJRMAP2BIC8cWAbqRbMAbCFrCBAbCFZl9zAQJHQRbMGXGXAGCG9HQBABAT87FBABCIJAb87FBABCGJAO87FBSFMAEATjGBAECNJAbjGBAECIJAOjGBMALCoBJAKCEWJHYAOjGBAYATjGIALAICGWJATjGBALCoBJAKCFJCbZCEWJHYAbjGBAYAOjGIALAICFJHICbZCGWJAOjGBALCoBJAKCGJCbZCEWJHOATjGBAOAbjGIALAIAm9FAmCb6qJHICbZCGWJAbjGBAIAt9FAtCb6qJRIAKCEJRKMANCFJRNABCKJRBAECSJREAKCbZRKAICbZRIAfCEJHfAF9JQBMMCBC99AMAc6yRKMALCoFJ8kUUUUBAKM/tIFGa8jUUUUBCTlRLC9+RKGXAFCLJAI9LQBCaRKAE2BBC/+FZC/QF9HQBALhB83ENAECFJRKAEAIJC98JREGXAF9FQBGXAGCG6QBEXGXAKAE9JQBC9+bMAK1BBHGCgFZRIGXGXAGCa9MQBAKCFJRKSFMAK1BFHGCgBZCOWAICgBZqRIGXAGCa9MQBAKCGJRKSFMAK1BGHGCgBZCfWAIqRIGXAGCa9MQBAKCEJRKSFMAK1BEHGCgBZCdWAIqRIGXAGCa9MQBAKCIJRKSFMAK2BIC8cWAIqRIAKCLJRKMALCNJAICFZCGWqHGAICGrCBAICFrCFZl9zAG8oGBJHIjGBABAIjGBABCIJRBAFCaJHFQBSGMMEXGXAKAE9JQBC9+bMAK1BBHGCgFZRIGXGXAGCa9MQBAKCFJRKSFMAK1BFHGCgBZCOWAICgBZqRIGXAGCa9MQBAKCGJRKSFMAK1BGHGCgBZCfWAIqRIGXAGCa9MQBAKCEJRKSFMAK1BEHGCgBZCdWAIqRIGXAGCa9MQBAKCIJRKSFMAK2BIC8cWAIqRIAKCLJRKMABAICGrCBAICFrCFZl9zALCNJAICFZCGWqHI8oGBJHG87FBAIAGjGBABCGJRBAFCaJHFQBMMCBC99AKAE6yRKMAKM/dLEK97FaF97GXGXAGCI9HQBAF9FQFCBRGEXABABDBBBHECiD+rFCiD+sFD/6FHIAECND+rFCiD+sFD/6FAID/gFAECTD+rFCiD+sFD/6FHLD/gFD/kFD/lFHKCBDtD+2FHOAICUUUU94DtHND9OD9RD/kFHI9DBB/+hDYAIAID/mFAKAKD/mFALAOALAND9OD9RD/kFHIAID/mFD/kFD/kFD/jFD/nFHLD/mF9DBBX9LDYHOD/kFCgFDtD9OAECUUU94DtD9OD9QAIALD/mFAOD/kFCND+rFCU/+EDtD9OD9QAKALD/mFAOD/kFCTD+rFCUU/8ODtD9OD9QDMBBABCTJRBAGCIJHGAF9JQBSGMMAF9FQBCBRGEXABCTJHVAVDBBBHECBDtHOCUU98D8cFCUU98D8cEHND9OABDBBBHKAEDQILKOSQfbPden8c8d8e8fCggFDtD9OD/6FAKAEDQBFGENVcMTtmYi8ZpyHECTD+sFD/6FHID/gFAECTD+rFCTD+sFD/6FHLD/gFD/kFD/lFHE9DB/+g6DYALAEAOD+2FHOALCUUUU94DtHcD9OD9RD/kFHLALD/mFAEAED/mFAIAOAIAcD9OD9RD/kFHEAED/mFD/kFD/kFD/jFD/nFHID/mF9DBBX9LDYHOD/kFCTD+rFALAID/mFAOD/kFCggEDtD9OD9QHLAEAID/mFAOD/kFCaDbCBDnGCBDnECBDnKCBDnOCBDncCBDnMCBDnfCBDnbD9OHEDQNVi8ZcMpySQ8c8dfb8e8fD9QDMBBABAKAND9OALAEDQBFTtGEmYILPdKOenD9QDMBBABCAJRBAGCIJHGAF9JQBMMM/hEIGaF97FaL978jUUUUBCTlREGXAF9FQBCBRIEXAEABDBBBHLABCTJHKDBBBHODQILKOSQfbPden8c8d8e8fHNCTD+sFHVCID+rFDMIBAB9DBBU8/DY9D/zI818/DYAVCEDtD9QD/6FD/nFHVALAODQBFGENVcMTtmYi8ZpyHLCTD+rFCTD+sFD/6FD/mFHOAOD/mFAVALCTD+sFD/6FD/mFHcAcD/mFAVANCTD+rFCTD+sFD/6FD/mFHNAND/mFD/kFD/kFD/lFCBDtD+4FD/jF9DB/+g6DYHVD/mF9DBBX9LDYHLD/kFCggEDtHMD9OAcAVD/mFALD/kFCTD+rFD9QHcANAVD/mFALD/kFCTD+rFAOAVD/mFALD/kFAMD9OD9QHVDQBFTtGEmYILPdKOenHLD8dBAEDBIBDyB+t+J83EBABCNJALD8dFAEDBIBDyF+t+J83EBAKAcAVDQNVi8ZcMpySQ8c8dfb8e8fHVD8dBAEDBIBDyG+t+J83EBABCiJAVD8dFAEDBIBDyE+t+J83EBABCAJRBAICIJHIAF9JQBMMM9jFF97GXAGCGrAF9sHG9FQBCBRFEXABABDBBBHECND+rFCND+sFD/6FAECiD+sFCnD+rFCUUU/8EDtD+uFD/mFDMBBABCTJRBAFCIJHFAG9JQBMMM9TFEaCBCB8oGUkUUBHFABCEJC98ZJHBjGUkUUBGXGXAB8/BCTWHGuQBCaREABAGlCggEJCTrXBCa6QFMAFREMAEMMMFBCUNMIT9tBB");
	let r, i = WebAssembly.instantiate(a(n), {}).then((e) => {
		r = e.instance, r.exports.__wasm_call_ctors();
	});
	function a(e) {
		let n = new Uint8Array(e.length);
		for (let t = 0; t < e.length; ++t) {
			let r = e.charCodeAt(t);
			n[t] = r > 96 ? r - 71 : r > 64 ? r - 65 : r > 47 ? r + 4 : r > 46 ? 63 : 62;
		}
		let r = 0;
		for (let i = 0; i < e.length; ++i) n[r++] = n[i] < 60 ? t[n[i]] : (n[i] - 60) * 64 + n[++i];
		return n.buffer.slice(0, r);
	}
	function o(e, t, n, i, a, o) {
		let s = r.exports.sbrk, c = n + 3 & -4, l = s(c * i), u = s(a.length), d = new Uint8Array(r.exports.memory.buffer);
		d.set(a, u);
		let f = e(l, n, i, u, a.length);
		if (f === 0 && o && o(l, c, i), t.set(d.subarray(l, l + n * i)), s(l - s(0)), f !== 0) throw Error(`Malformed buffer data: ${f}`);
	}
	let s = {
		0: "",
		1: "meshopt_decodeFilterOct",
		2: "meshopt_decodeFilterQuat",
		3: "meshopt_decodeFilterExp",
		NONE: "",
		OCTAHEDRAL: "meshopt_decodeFilterOct",
		QUATERNION: "meshopt_decodeFilterQuat",
		EXPONENTIAL: "meshopt_decodeFilterExp"
	}, c = {
		0: "meshopt_decodeVertexBuffer",
		1: "meshopt_decodeIndexBuffer",
		2: "meshopt_decodeIndexSequence",
		ATTRIBUTES: "meshopt_decodeVertexBuffer",
		TRIANGLES: "meshopt_decodeIndexBuffer",
		INDICES: "meshopt_decodeIndexSequence"
	};
	return Ro = {
		ready: i,
		supported: !0,
		decodeVertexBuffer(e, t, n, i, a) {
			o(r.exports.meshopt_decodeVertexBuffer, e, t, n, i, r.exports[s[a]]);
		},
		decodeIndexBuffer(e, t, n, i) {
			o(r.exports.meshopt_decodeIndexBuffer, e, t, n, i);
		},
		decodeIndexSequence(e, t, n, i) {
			o(r.exports.meshopt_decodeIndexSequence, e, t, n, i);
		},
		decodeGltfBuffer(e, t, n, i, a, l) {
			o(r.exports[c[a]], e, t, n, i, r.exports[s[l]]);
		}
	}, Ro;
}, Bo = null, Vo = "https://www.gstatic.com/draco/versioned/decoders/1.5.5/";
function Ho(e = !0, t = !0, n) {
	return (r) => {
		n && n(r), e && (Bo ||= new Io(), Bo.setDecoderPath(typeof e == "string" ? e : Vo), r.setDRACOLoader(Bo)), t && r.setMeshoptDecoder(typeof zo == "function" ? zo() : zo);
	};
}
var V = (e, t, n, r) => fr(Fa, e, Ho(t, n, r));
V.preload = (e, t, n, r) => fr.preload(Fa, e, Ho(t, n, r)), V.clear = (e) => fr.clear(Fa, e), V.setDecoderPath = (e) => {
	Vo = e;
};
//#endregion
//#region node_modules/camera-controls/dist/camera-controls.module.js
var H = {
	LEFT: 1,
	RIGHT: 2,
	MIDDLE: 4
}, U = Object.freeze({
	NONE: 0,
	ROTATE: 1,
	TRUCK: 2,
	SCREEN_PAN: 4,
	OFFSET: 8,
	DOLLY: 16,
	ZOOM: 32,
	TOUCH_ROTATE: 64,
	TOUCH_TRUCK: 128,
	TOUCH_SCREEN_PAN: 256,
	TOUCH_OFFSET: 512,
	TOUCH_DOLLY: 1024,
	TOUCH_ZOOM: 2048,
	TOUCH_DOLLY_TRUCK: 4096,
	TOUCH_DOLLY_SCREEN_PAN: 8192,
	TOUCH_DOLLY_OFFSET: 16384,
	TOUCH_DOLLY_ROTATE: 32768,
	TOUCH_ZOOM_TRUCK: 65536,
	TOUCH_ZOOM_OFFSET: 131072,
	TOUCH_ZOOM_SCREEN_PAN: 262144,
	TOUCH_ZOOM_ROTATE: 524288
}), Uo = {
	NONE: 0,
	IN: 1,
	OUT: -1
};
function Wo(e) {
	return e.isPerspectiveCamera;
}
function W(e) {
	return e.isOrthographicCamera;
}
var Go = Math.PI * 2, Ko = Math.PI / 2, qo = 1e-5, Jo = Math.PI / 180;
function Yo(e, t, n) {
	return Math.max(t, Math.min(n, e));
}
function Xo(e, t = qo) {
	return Math.abs(e) < t;
}
function Zo(e, t, n = qo) {
	return Xo(e - t, n);
}
function Qo(e, t) {
	return Math.round(e / t) * t;
}
function $o(e) {
	return isFinite(e) ? e : e < 0 ? -Number.MAX_VALUE : Number.MAX_VALUE;
}
function es(e) {
	return Math.abs(e) < Number.MAX_VALUE ? e : e * Infinity;
}
function ts(e, t, n, r, i = Infinity, a) {
	r = Math.max(1e-4, r);
	let o = 2 / r, s = o * a, c = 1 / (1 + s + .48 * s * s + .235 * s * s * s), l = e - t, u = t, d = i * r;
	l = Yo(l, -d, d), t = e - l;
	let f = (n.value + o * l) * a;
	n.value = (n.value - o * f) * c;
	let p = t + (l + f) * c;
	return u - e > 0 == p > u && (p = u, n.value = (p - u) / a), p;
}
function ns(e, t, n, r, i = Infinity, a, o) {
	r = Math.max(1e-4, r);
	let s = 2 / r, c = s * a, l = 1 / (1 + c + .48 * c * c + .235 * c * c * c), u = t.x, d = t.y, f = t.z, p = e.x - u, m = e.y - d, h = e.z - f, g = u, _ = d, v = f, y = i * r, b = y * y, x = p * p + m * m + h * h;
	if (x > b) {
		let e = Math.sqrt(x);
		p = p / e * y, m = m / e * y, h = h / e * y;
	}
	u = e.x - p, d = e.y - m, f = e.z - h;
	let S = (n.x + s * p) * a, C = (n.y + s * m) * a, w = (n.z + s * h) * a;
	n.x = (n.x - s * S) * l, n.y = (n.y - s * C) * l, n.z = (n.z - s * w) * l, o.x = u + (p + S) * l, o.y = d + (m + C) * l, o.z = f + (h + w) * l;
	let T = g - e.x, E = _ - e.y, D = v - e.z, ee = o.x - g, te = o.y - _, ne = o.z - v;
	return T * ee + E * te + D * ne > 0 && (o.x = g, o.y = _, o.z = v, n.x = (o.x - g) / a, n.y = (o.y - _) / a, n.z = (o.z - v) / a), o;
}
function rs(e, t) {
	t.set(0, 0), e.forEach((e) => {
		t.x += e.clientX, t.y += e.clientY;
	}), t.x /= e.length, t.y /= e.length;
}
function is(e, t) {
	return W(e) ? (console.warn(`${t} is not supported in OrthographicCamera`), !0) : !1;
}
var as = class {
	_listeners = {};
	addEventListener(e, t) {
		let n = this._listeners;
		n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
	}
	hasEventListener(e, t) {
		let n = this._listeners;
		return n[e] !== void 0 && n[e].indexOf(t) !== -1;
	}
	removeEventListener(e, t) {
		let n = this._listeners[e];
		if (n !== void 0) {
			let e = n.indexOf(t);
			e !== -1 && n.splice(e, 1);
		}
	}
	removeAllEventListeners(e) {
		e ? Array.isArray(this._listeners[e]) && (this._listeners[e].length = 0) : this._listeners = {};
	}
	dispatchEvent(e) {
		let t = this._listeners[e.type];
		if (t !== void 0) {
			e.target = this;
			let n = t.slice(0);
			for (let t = 0, r = n.length; t < r; t++) n[t].call(this, e);
		}
	}
}, os = "3.1.2", ss = 1 / 8, cs = /Mac/.test(globalThis?.navigator?.platform), G, ls, us, ds, fs, K, ps, ms, hs, gs, _s, vs, ys, bs, xs, Ss, Cs, ws, Ts, Es, Ds, Os, ks, As = class e extends as {
	static install(e) {
		G = e.THREE, ls = Object.freeze(new G.Vector3(0, 0, 0)), us = Object.freeze(new G.Vector3(0, 1, 0)), ds = Object.freeze(new G.Vector3(0, 0, 1)), fs = new G.Vector2(), K = new G.Vector3(), ps = new G.Vector3(), ms = new G.Vector3(), hs = new G.Vector3(), gs = new G.Vector3(), _s = new G.Vector3(), vs = new G.Vector3(), ys = new G.Vector3(), bs = new G.Vector3(), xs = new G.Spherical(), Ss = new G.Spherical(), Cs = new G.Box3(), ws = new G.Box3(), Ts = new G.Sphere(), Es = new G.Quaternion(), Ds = new G.Quaternion(), Os = new G.Matrix4(), ks = new G.Raycaster();
	}
	static get ACTION() {
		return U;
	}
	minPolarAngle = 0;
	maxPolarAngle = Math.PI;
	minAzimuthAngle = -Infinity;
	maxAzimuthAngle = Infinity;
	minDistance = 2 ** -52;
	maxDistance = Infinity;
	infinityDolly = !1;
	minZoom = .01;
	maxZoom = Infinity;
	smoothTime = .25;
	draggingSmoothTime = .125;
	maxSpeed = Infinity;
	azimuthRotateSpeed = 1;
	polarRotateSpeed = 1;
	dollySpeed = 1;
	dollyDragInverted = !1;
	truckSpeed = 2;
	dollyToCursor = !1;
	dragToOffset = !1;
	boundaryFriction = 0;
	restThreshold = .01;
	colliderMeshes = [];
	mouseButtons;
	touches;
	cancel = () => {};
	lockPointer;
	unlockPointer;
	_enabled = !0;
	_camera;
	_yAxisUpSpace;
	_yAxisUpSpaceInverse;
	_state = U.NONE;
	_domElement;
	_viewport = null;
	_target;
	_targetEnd;
	_focalOffset;
	_focalOffsetEnd;
	_spherical;
	_sphericalEnd;
	_lastDistance;
	_zoom;
	_zoomEnd;
	_lastZoom;
	_cameraUp0;
	_target0;
	_position0;
	_zoom0;
	_focalOffset0;
	_dollyControlCoord;
	_changedDolly = 0;
	_changedZoom = 0;
	_nearPlaneCorners;
	_hasRested = !0;
	_boundary;
	_boundaryEnclosesCamera = !1;
	_needsUpdate = !0;
	_updatedLastTime = !1;
	_elementRect = new DOMRect();
	_isDragging = !1;
	_dragNeedsUpdate = !0;
	_activePointers = [];
	_lockedPointer = null;
	_interactiveArea = new DOMRect(0, 0, 1, 1);
	_isUserControllingRotate = !1;
	_isUserControllingDolly = !1;
	_isUserControllingTruck = !1;
	_isUserControllingOffset = !1;
	_isUserControllingZoom = !1;
	_lastDollyDirection = Uo.NONE;
	_thetaVelocity = { value: 0 };
	_phiVelocity = { value: 0 };
	_radiusVelocity = { value: 0 };
	_targetVelocity = new G.Vector3();
	_focalOffsetVelocity = new G.Vector3();
	_zoomVelocity = { value: 0 };
	set verticalDragToForward(e) {
		console.warn("camera-controls: `verticalDragToForward` was removed. Use `mouseButtons.left = CameraControls.ACTION.SCREEN_PAN` instead.");
	}
	constructor(t, n) {
		super(), G === void 0 && console.error("camera-controls: `THREE` is undefined. You must first run `CameraControls.install( { THREE: THREE } )`. Check the docs for further information."), this._camera = t, this._yAxisUpSpace = new G.Quaternion().setFromUnitVectors(this._camera.up, us), this._yAxisUpSpaceInverse = this._yAxisUpSpace.clone().invert(), this._state = U.NONE, this._target = new G.Vector3(), this._targetEnd = this._target.clone(), this._focalOffset = new G.Vector3(), this._focalOffsetEnd = this._focalOffset.clone(), this._spherical = new G.Spherical().setFromVector3(K.copy(this._camera.position).applyQuaternion(this._yAxisUpSpace)), this._sphericalEnd = this._spherical.clone(), this._lastDistance = this._spherical.radius, this._zoom = this._camera.zoom, this._zoomEnd = this._zoom, this._lastZoom = this._zoom, this._nearPlaneCorners = [
			new G.Vector3(),
			new G.Vector3(),
			new G.Vector3(),
			new G.Vector3()
		], this._updateNearPlaneCorners(), this._boundary = new G.Box3(new G.Vector3(-Infinity, -Infinity, -Infinity), new G.Vector3(Infinity, Infinity, Infinity)), this._cameraUp0 = this._camera.up.clone(), this._target0 = this._target.clone(), this._position0 = this._camera.position.clone(), this._zoom0 = this._zoom, this._focalOffset0 = this._focalOffset.clone(), this._dollyControlCoord = new G.Vector2(), this.mouseButtons = {
			left: U.ROTATE,
			middle: U.DOLLY,
			right: U.TRUCK,
			wheel: Wo(this._camera) ? U.DOLLY : W(this._camera) ? U.ZOOM : U.NONE
		}, this.touches = {
			one: U.TOUCH_ROTATE,
			two: Wo(this._camera) ? U.TOUCH_DOLLY_TRUCK : W(this._camera) ? U.TOUCH_ZOOM_TRUCK : U.NONE,
			three: U.TOUCH_TRUCK
		};
		let r = new G.Vector2(), i = new G.Vector2(), a = new G.Vector2(), o = (e) => {
			if (!this._enabled || !this._domElement) return;
			if (this._interactiveArea.left !== 0 || this._interactiveArea.top !== 0 || this._interactiveArea.width !== 1 || this._interactiveArea.height !== 1) {
				let t = this._domElement.getBoundingClientRect(), n = e.clientX / t.width, r = e.clientY / t.height;
				if (n < this._interactiveArea.left || n > this._interactiveArea.right || r < this._interactiveArea.top || r > this._interactiveArea.bottom) return;
			}
			let t = e.pointerType === "mouse" ? (e.buttons & H.LEFT) === H.LEFT ? H.LEFT : (e.buttons & H.MIDDLE) === H.MIDDLE ? H.MIDDLE : (e.buttons & H.RIGHT) === H.RIGHT ? H.RIGHT : null : null;
			if (t !== null) {
				let e = this._findPointerByMouseButton(t);
				e && this._disposePointer(e);
			}
			if ((e.buttons & H.LEFT) === H.LEFT && this._lockedPointer) return;
			let n = {
				pointerId: e.pointerId,
				clientX: e.clientX,
				clientY: e.clientY,
				deltaX: 0,
				deltaY: 0,
				mouseButton: t
			};
			this._activePointers.push(n), this._domElement.ownerDocument.removeEventListener("pointermove", s, { passive: !1 }), this._domElement.ownerDocument.removeEventListener("pointerup", c), this._domElement.ownerDocument.addEventListener("pointermove", s, { passive: !1 }), this._domElement.ownerDocument.addEventListener("pointerup", c), this._isDragging = !0, f(e);
		}, s = (e) => {
			e.cancelable && e.preventDefault();
			let t = e.pointerId, n = this._lockedPointer || this._findPointerById(t);
			if (n) {
				if (n.clientX = e.clientX, n.clientY = e.clientY, n.deltaX = e.movementX, n.deltaY = e.movementY, this._state = 0, e.pointerType === "touch") switch (this._activePointers.length) {
					case 1:
						this._state = this.touches.one;
						break;
					case 2:
						this._state = this.touches.two;
						break;
					case 3: this._state = this.touches.three;
				}
				else (!this._isDragging && this._lockedPointer || this._isDragging && (e.buttons & H.LEFT) === H.LEFT) && (this._state |= this.mouseButtons.left), this._isDragging && (e.buttons & H.MIDDLE) === H.MIDDLE && (this._state |= this.mouseButtons.middle), this._isDragging && (e.buttons & H.RIGHT) === H.RIGHT && (this._state |= this.mouseButtons.right);
				p();
			}
		}, c = (e) => {
			let t = this._findPointerById(e.pointerId);
			if (!(t && t === this._lockedPointer)) {
				if (t && this._disposePointer(t), e.pointerType === "touch") switch (this._activePointers.length) {
					case 0:
						this._state = U.NONE;
						break;
					case 1:
						this._state = this.touches.one;
						break;
					case 2:
						this._state = this.touches.two;
						break;
					case 3: this._state = this.touches.three;
				}
				else this._state = U.NONE;
				m();
			}
		}, l = -1, u = (e) => {
			if (!this._domElement || !this._enabled || this.mouseButtons.wheel === U.NONE) return;
			if (this._interactiveArea.left !== 0 || this._interactiveArea.top !== 0 || this._interactiveArea.width !== 1 || this._interactiveArea.height !== 1) {
				let t = this._domElement.getBoundingClientRect(), n = e.clientX / t.width, r = e.clientY / t.height;
				if (n < this._interactiveArea.left || n > this._interactiveArea.right || r < this._interactiveArea.top || r > this._interactiveArea.bottom) return;
			}
			if (e.preventDefault(), this.dollyToCursor || this.mouseButtons.wheel === U.ROTATE || this.mouseButtons.wheel === U.TRUCK) {
				let e = performance.now();
				l - e < 1e3 && this._getClientRect(this._elementRect), l = e;
			}
			let t = cs ? -1 : -3, n = e.deltaMode === 1 && !e.ctrlKey ? e.deltaY / t : e.deltaY / (t * 10), r = this.dollyToCursor ? (e.clientX - this._elementRect.x) / this._elementRect.width * 2 - 1 : 0, i = this.dollyToCursor ? (e.clientY - this._elementRect.y) / this._elementRect.height * -2 + 1 : 0;
			switch (e.ctrlKey ? U.ZOOM : this.mouseButtons.wheel) {
				case U.ROTATE:
					this._rotateInternal(e.deltaX, e.deltaY), this._isUserControllingRotate = !0;
					break;
				case U.TRUCK:
					this._truckInternal(e.deltaX, e.deltaY, !1, !1), this._isUserControllingTruck = !0;
					break;
				case U.SCREEN_PAN:
					this._truckInternal(e.deltaX, e.deltaY, !1, !0), this._isUserControllingTruck = !0;
					break;
				case U.OFFSET:
					this._truckInternal(e.deltaX, e.deltaY, !0, !1), this._isUserControllingOffset = !0;
					break;
				case U.DOLLY:
					this._dollyInternal(-n, r, i), this._isUserControllingDolly = !0;
					break;
				case U.ZOOM: this._zoomInternal(-n, r, i), this._isUserControllingZoom = !0;
			}
			this.dispatchEvent({ type: "control" });
		}, d = (t) => {
			if (this._domElement && this._enabled) {
				if (this.mouseButtons.right === e.ACTION.NONE) {
					let e = t instanceof PointerEvent ? t.pointerId : 0, n = this._findPointerById(e);
					n && this._disposePointer(n), this._domElement.ownerDocument.removeEventListener("pointermove", s, { passive: !1 }), this._domElement.ownerDocument.removeEventListener("pointerup", c);
				} else t.preventDefault();
			}
		}, f = (e) => {
			if (this._enabled) {
				if (rs(this._activePointers, fs), this._getClientRect(this._elementRect), r.copy(fs), i.copy(fs), this._activePointers.length >= 2) {
					let e = fs.x - this._activePointers[1].clientX, t = fs.y - this._activePointers[1].clientY, n = Math.sqrt(e * e + t * t);
					a.set(0, n);
					let r = (this._activePointers[0].clientX + this._activePointers[1].clientX) * .5, o = (this._activePointers[0].clientY + this._activePointers[1].clientY) * .5;
					i.set(r, o);
				}
				if (this._state = 0, !e) this._lockedPointer && (this._state |= this.mouseButtons.left);
				else if ("pointerType" in e && e.pointerType === "touch") switch (this._activePointers.length) {
					case 1:
						this._state = this.touches.one;
						break;
					case 2:
						this._state = this.touches.two;
						break;
					case 3: this._state = this.touches.three;
				}
				else !this._lockedPointer && (e.buttons & H.LEFT) === H.LEFT && (this._state |= this.mouseButtons.left), (e.buttons & H.MIDDLE) === H.MIDDLE && (this._state |= this.mouseButtons.middle), (e.buttons & H.RIGHT) === H.RIGHT && (this._state |= this.mouseButtons.right);
				((this._state & U.ROTATE) === U.ROTATE || (this._state & U.TOUCH_ROTATE) === U.TOUCH_ROTATE || (this._state & U.TOUCH_DOLLY_ROTATE) === U.TOUCH_DOLLY_ROTATE || (this._state & U.TOUCH_ZOOM_ROTATE) === U.TOUCH_ZOOM_ROTATE) && (this._sphericalEnd.theta = this._spherical.theta, this._sphericalEnd.phi = this._spherical.phi, this._thetaVelocity.value = 0, this._phiVelocity.value = 0), ((this._state & U.TRUCK) === U.TRUCK || (this._state & U.SCREEN_PAN) === U.SCREEN_PAN || (this._state & U.TOUCH_TRUCK) === U.TOUCH_TRUCK || (this._state & U.TOUCH_SCREEN_PAN) === U.TOUCH_SCREEN_PAN || (this._state & U.TOUCH_DOLLY_TRUCK) === U.TOUCH_DOLLY_TRUCK || (this._state & U.TOUCH_DOLLY_SCREEN_PAN) === U.TOUCH_DOLLY_SCREEN_PAN || (this._state & U.TOUCH_ZOOM_TRUCK) === U.TOUCH_ZOOM_TRUCK || (this._state & U.TOUCH_ZOOM_SCREEN_PAN) === U.TOUCH_DOLLY_SCREEN_PAN) && (this._targetEnd.copy(this._target), this._targetVelocity.set(0, 0, 0)), ((this._state & U.DOLLY) === U.DOLLY || (this._state & U.TOUCH_DOLLY) === U.TOUCH_DOLLY || (this._state & U.TOUCH_DOLLY_TRUCK) === U.TOUCH_DOLLY_TRUCK || (this._state & U.TOUCH_DOLLY_SCREEN_PAN) === U.TOUCH_DOLLY_SCREEN_PAN || (this._state & U.TOUCH_DOLLY_OFFSET) === U.TOUCH_DOLLY_OFFSET || (this._state & U.TOUCH_DOLLY_ROTATE) === U.TOUCH_DOLLY_ROTATE) && (this._sphericalEnd.radius = this._spherical.radius, this._radiusVelocity.value = 0), ((this._state & U.ZOOM) === U.ZOOM || (this._state & U.TOUCH_ZOOM) === U.TOUCH_ZOOM || (this._state & U.TOUCH_ZOOM_TRUCK) === U.TOUCH_ZOOM_TRUCK || (this._state & U.TOUCH_ZOOM_SCREEN_PAN) === U.TOUCH_ZOOM_SCREEN_PAN || (this._state & U.TOUCH_ZOOM_OFFSET) === U.TOUCH_ZOOM_OFFSET || (this._state & U.TOUCH_ZOOM_ROTATE) === U.TOUCH_ZOOM_ROTATE) && (this._zoomEnd = this._zoom, this._zoomVelocity.value = 0), ((this._state & U.OFFSET) === U.OFFSET || (this._state & U.TOUCH_OFFSET) === U.TOUCH_OFFSET || (this._state & U.TOUCH_DOLLY_OFFSET) === U.TOUCH_DOLLY_OFFSET || (this._state & U.TOUCH_ZOOM_OFFSET) === U.TOUCH_ZOOM_OFFSET) && (this._focalOffsetEnd.copy(this._focalOffset), this._focalOffsetVelocity.set(0, 0, 0)), this.dispatchEvent({ type: "controlstart" });
			}
		}, p = () => {
			if (!this._enabled || !this._dragNeedsUpdate) return;
			this._dragNeedsUpdate = !1, rs(this._activePointers, fs);
			let e = this._domElement && this._domElement.ownerDocument.pointerLockElement === this._domElement ? this._lockedPointer || this._activePointers[0] : null, t = e ? -e.deltaX : i.x - fs.x, n = e ? -e.deltaY : i.y - fs.y;
			if (i.copy(fs), ((this._state & U.ROTATE) === U.ROTATE || (this._state & U.TOUCH_ROTATE) === U.TOUCH_ROTATE || (this._state & U.TOUCH_DOLLY_ROTATE) === U.TOUCH_DOLLY_ROTATE || (this._state & U.TOUCH_ZOOM_ROTATE) === U.TOUCH_ZOOM_ROTATE) && (this._rotateInternal(t, n), this._isUserControllingRotate = !0), (this._state & U.DOLLY) === U.DOLLY || (this._state & U.ZOOM) === U.ZOOM) {
				let e = this.dollyToCursor ? (r.x - this._elementRect.x) / this._elementRect.width * 2 - 1 : 0, t = this.dollyToCursor ? (r.y - this._elementRect.y) / this._elementRect.height * -2 + 1 : 0, i = this.dollyDragInverted ? -1 : 1;
				(this._state & U.DOLLY) === U.DOLLY ? (this._dollyInternal(i * n * ss, e, t), this._isUserControllingDolly = !0) : (this._zoomInternal(i * n * ss, e, t), this._isUserControllingZoom = !0);
			}
			if ((this._state & U.TOUCH_DOLLY) === U.TOUCH_DOLLY || (this._state & U.TOUCH_ZOOM) === U.TOUCH_ZOOM || (this._state & U.TOUCH_DOLLY_TRUCK) === U.TOUCH_DOLLY_TRUCK || (this._state & U.TOUCH_ZOOM_TRUCK) === U.TOUCH_ZOOM_TRUCK || (this._state & U.TOUCH_DOLLY_SCREEN_PAN) === U.TOUCH_DOLLY_SCREEN_PAN || (this._state & U.TOUCH_ZOOM_SCREEN_PAN) === U.TOUCH_ZOOM_SCREEN_PAN || (this._state & U.TOUCH_DOLLY_OFFSET) === U.TOUCH_DOLLY_OFFSET || (this._state & U.TOUCH_ZOOM_OFFSET) === U.TOUCH_ZOOM_OFFSET || (this._state & U.TOUCH_DOLLY_ROTATE) === U.TOUCH_DOLLY_ROTATE || (this._state & U.TOUCH_ZOOM_ROTATE) === U.TOUCH_ZOOM_ROTATE) {
				let e = fs.x - this._activePointers[1].clientX, t = fs.y - this._activePointers[1].clientY, n = Math.sqrt(e * e + t * t), r = a.y - n;
				a.set(0, n);
				let o = this.dollyToCursor ? (i.x - this._elementRect.x) / this._elementRect.width * 2 - 1 : 0, s = this.dollyToCursor ? (i.y - this._elementRect.y) / this._elementRect.height * -2 + 1 : 0;
				(this._state & U.TOUCH_DOLLY) === U.TOUCH_DOLLY || (this._state & U.TOUCH_DOLLY_ROTATE) === U.TOUCH_DOLLY_ROTATE || (this._state & U.TOUCH_DOLLY_TRUCK) === U.TOUCH_DOLLY_TRUCK || (this._state & U.TOUCH_DOLLY_SCREEN_PAN) === U.TOUCH_DOLLY_SCREEN_PAN || (this._state & U.TOUCH_DOLLY_OFFSET) === U.TOUCH_DOLLY_OFFSET ? (this._dollyInternal(r * ss, o, s), this._isUserControllingDolly = !0) : (this._zoomInternal(r * ss, o, s), this._isUserControllingZoom = !0);
			}
			((this._state & U.TRUCK) === U.TRUCK || (this._state & U.TOUCH_TRUCK) === U.TOUCH_TRUCK || (this._state & U.TOUCH_DOLLY_TRUCK) === U.TOUCH_DOLLY_TRUCK || (this._state & U.TOUCH_ZOOM_TRUCK) === U.TOUCH_ZOOM_TRUCK) && (this._truckInternal(t, n, !1, !1), this._isUserControllingTruck = !0), ((this._state & U.SCREEN_PAN) === U.SCREEN_PAN || (this._state & U.TOUCH_SCREEN_PAN) === U.TOUCH_SCREEN_PAN || (this._state & U.TOUCH_DOLLY_SCREEN_PAN) === U.TOUCH_DOLLY_SCREEN_PAN || (this._state & U.TOUCH_ZOOM_SCREEN_PAN) === U.TOUCH_ZOOM_SCREEN_PAN) && (this._truckInternal(t, n, !1, !0), this._isUserControllingTruck = !0), ((this._state & U.OFFSET) === U.OFFSET || (this._state & U.TOUCH_OFFSET) === U.TOUCH_OFFSET || (this._state & U.TOUCH_DOLLY_OFFSET) === U.TOUCH_DOLLY_OFFSET || (this._state & U.TOUCH_ZOOM_OFFSET) === U.TOUCH_ZOOM_OFFSET) && (this._truckInternal(t, n, !0, !1), this._isUserControllingOffset = !0), this.dispatchEvent({ type: "control" });
		}, m = () => {
			rs(this._activePointers, fs), i.copy(fs), this._dragNeedsUpdate = !1, (this._activePointers.length === 0 || this._activePointers.length === 1 && this._activePointers[0] === this._lockedPointer) && (this._isDragging = !1), this._activePointers.length === 0 && this._domElement && (this._domElement.ownerDocument.removeEventListener("pointermove", s, { passive: !1 }), this._domElement.ownerDocument.removeEventListener("pointerup", c), this.dispatchEvent({ type: "controlend" }));
		};
		this.lockPointer = () => {
			this._enabled && this._domElement && (this.cancel(), this._lockedPointer = {
				pointerId: -1,
				clientX: 0,
				clientY: 0,
				deltaX: 0,
				deltaY: 0,
				mouseButton: null
			}, this._activePointers.push(this._lockedPointer), this._domElement.ownerDocument.removeEventListener("pointermove", s, { passive: !1 }), this._domElement.ownerDocument.removeEventListener("pointerup", c), this._domElement.requestPointerLock(), this._domElement.ownerDocument.addEventListener("pointerlockchange", h), this._domElement.ownerDocument.addEventListener("pointerlockerror", g), this._domElement.ownerDocument.addEventListener("pointermove", s, { passive: !1 }), this._domElement.ownerDocument.addEventListener("pointerup", c), f());
		}, this.unlockPointer = () => {
			this._lockedPointer !== null && (this._disposePointer(this._lockedPointer), this._lockedPointer = null), this._domElement?.ownerDocument.exitPointerLock(), this._domElement?.ownerDocument.removeEventListener("pointerlockchange", h), this._domElement?.ownerDocument.removeEventListener("pointerlockerror", g), this.cancel();
		};
		let h = () => {
			this._domElement && this._domElement.ownerDocument.pointerLockElement === this._domElement || this.unlockPointer();
		}, g = () => {
			this.unlockPointer();
		};
		this._addAllEventListeners = (e) => {
			this._domElement = e, this._domElement.style.touchAction = "none", this._domElement.style.userSelect = "none", this._domElement.style.webkitUserSelect = "none", this._domElement.addEventListener("pointerdown", o), this._domElement.addEventListener("pointercancel", c), this._domElement.addEventListener("wheel", u, { passive: !1 }), this._domElement.addEventListener("contextmenu", d);
		}, this._removeAllEventListeners = () => {
			this._domElement && (this._domElement.style.touchAction = "", this._domElement.style.userSelect = "", this._domElement.style.webkitUserSelect = "", this._domElement.removeEventListener("pointerdown", o), this._domElement.removeEventListener("pointercancel", c), this._domElement.removeEventListener("wheel", u, { passive: !1 }), this._domElement.removeEventListener("contextmenu", d), this._domElement.ownerDocument.removeEventListener("pointermove", s, { passive: !1 }), this._domElement.ownerDocument.removeEventListener("pointerup", c), this._domElement.ownerDocument.removeEventListener("pointerlockchange", h), this._domElement.ownerDocument.removeEventListener("pointerlockerror", g));
		}, this.cancel = () => {
			this._state !== U.NONE && (this._state = U.NONE, this._activePointers.length = 0, m());
		}, n && this.connect(n), this.update(0);
	}
	get camera() {
		return this._camera;
	}
	set camera(e) {
		this._camera = e, this.updateCameraUp(), this._camera.updateProjectionMatrix(), this._updateNearPlaneCorners(), this._needsUpdate = !0;
	}
	get enabled() {
		return this._enabled;
	}
	set enabled(e) {
		this._enabled = e, this._domElement && (e ? (this._domElement.style.touchAction = "none", this._domElement.style.userSelect = "none", this._domElement.style.webkitUserSelect = "none") : (this.cancel(), this._domElement.style.touchAction = "", this._domElement.style.userSelect = "", this._domElement.style.webkitUserSelect = ""));
	}
	get active() {
		return !this._hasRested;
	}
	get currentAction() {
		return this._state;
	}
	get distance() {
		return this._spherical.radius;
	}
	set distance(e) {
		(this._spherical.radius !== e || this._sphericalEnd.radius !== e) && (this._spherical.radius = e, this._sphericalEnd.radius = e, this._needsUpdate = !0);
	}
	get azimuthAngle() {
		return this._spherical.theta;
	}
	set azimuthAngle(e) {
		(this._spherical.theta !== e || this._sphericalEnd.theta !== e) && (this._spherical.theta = e, this._sphericalEnd.theta = e, this._needsUpdate = !0);
	}
	get polarAngle() {
		return this._spherical.phi;
	}
	set polarAngle(e) {
		(this._spherical.phi !== e || this._sphericalEnd.phi !== e) && (this._spherical.phi = e, this._sphericalEnd.phi = e, this._needsUpdate = !0);
	}
	get boundaryEnclosesCamera() {
		return this._boundaryEnclosesCamera;
	}
	set boundaryEnclosesCamera(e) {
		this._boundaryEnclosesCamera = e, this._needsUpdate = !0;
	}
	set interactiveArea(e) {
		this._interactiveArea.width = Yo(e.width, 0, 1), this._interactiveArea.height = Yo(e.height, 0, 1), this._interactiveArea.x = Yo(e.x, 0, 1 - this._interactiveArea.width), this._interactiveArea.y = Yo(e.y, 0, 1 - this._interactiveArea.height);
	}
	addEventListener(e, t) {
		super.addEventListener(e, t);
	}
	removeEventListener(e, t) {
		super.removeEventListener(e, t);
	}
	rotate(e, t, n = !1) {
		return this.rotateTo(this._sphericalEnd.theta + e, this._sphericalEnd.phi + t, n);
	}
	rotateAzimuthTo(e, t = !1) {
		return this.rotateTo(e, this._sphericalEnd.phi, t);
	}
	rotatePolarTo(e, t = !1) {
		return this.rotateTo(this._sphericalEnd.theta, e, t);
	}
	rotateTo(e, t, n = !1) {
		this._isUserControllingRotate = !1;
		let r = Yo(e, this.minAzimuthAngle, this.maxAzimuthAngle), i = Yo(t, this.minPolarAngle, this.maxPolarAngle);
		this._sphericalEnd.theta = r, this._sphericalEnd.phi = i, this._sphericalEnd.makeSafe(), this._needsUpdate = !0, n || (this._spherical.theta = this._sphericalEnd.theta, this._spherical.phi = this._sphericalEnd.phi);
		let a = !n || Zo(this._spherical.theta, this._sphericalEnd.theta, this.restThreshold) && Zo(this._spherical.phi, this._sphericalEnd.phi, this.restThreshold);
		return this._createOnRestPromise(a);
	}
	dolly(e, t = !1) {
		return this.dollyTo(this._sphericalEnd.radius - e, t);
	}
	dollyTo(e, t = !1) {
		return this._isUserControllingDolly = !1, this._lastDollyDirection = Uo.NONE, this._changedDolly = 0, this._dollyToNoClamp(Yo(e, this.minDistance, this.maxDistance), t);
	}
	_dollyToNoClamp(e, t = !1) {
		let n = this._sphericalEnd.radius;
		if (this.colliderMeshes.length >= 1) {
			let t = this._collisionTest(), r = Zo(t, this._spherical.radius);
			if (!(n > e) && r) return Promise.resolve();
			this._sphericalEnd.radius = Math.min(e, t);
		} else this._sphericalEnd.radius = e;
		this._needsUpdate = !0, t || (this._spherical.radius = this._sphericalEnd.radius);
		let r = !t || Zo(this._spherical.radius, this._sphericalEnd.radius, this.restThreshold);
		return this._createOnRestPromise(r);
	}
	dollyInFixed(e, t = !1) {
		this._targetEnd.add(this._getCameraDirection(hs).multiplyScalar(e)), t || this._target.copy(this._targetEnd);
		let n = !t || Zo(this._target.x, this._targetEnd.x, this.restThreshold) && Zo(this._target.y, this._targetEnd.y, this.restThreshold) && Zo(this._target.z, this._targetEnd.z, this.restThreshold);
		return this._createOnRestPromise(n);
	}
	zoom(e, t = !1) {
		return this.zoomTo(this._zoomEnd + e, t);
	}
	zoomTo(e, t = !1) {
		this._isUserControllingZoom = !1, this._zoomEnd = Yo(e, this.minZoom, this.maxZoom), this._needsUpdate = !0, t || (this._zoom = this._zoomEnd);
		let n = !t || Zo(this._zoom, this._zoomEnd, this.restThreshold);
		return this._changedZoom = 0, this._createOnRestPromise(n);
	}
	pan(e, t, n = !1) {
		return console.warn("`pan` has been renamed to `truck`"), this.truck(e, t, n);
	}
	truck(e, t, n = !1) {
		this._camera.updateMatrix(), gs.setFromMatrixColumn(this._camera.matrix, 0), _s.setFromMatrixColumn(this._camera.matrix, 1), gs.multiplyScalar(e), _s.multiplyScalar(-t);
		let r = K.copy(gs).add(_s), i = ps.copy(this._targetEnd).add(r);
		return this.moveTo(i.x, i.y, i.z, n);
	}
	forward(e, t = !1) {
		K.setFromMatrixColumn(this._camera.matrix, 0), K.crossVectors(this._camera.up, K), K.multiplyScalar(e);
		let n = ps.copy(this._targetEnd).add(K);
		return this.moveTo(n.x, n.y, n.z, t);
	}
	elevate(e, t = !1) {
		return K.copy(this._camera.up).multiplyScalar(e), this.moveTo(this._targetEnd.x + K.x, this._targetEnd.y + K.y, this._targetEnd.z + K.z, t);
	}
	moveTo(e, t, n, r = !1) {
		this._isUserControllingTruck = !1;
		let i = K.set(e, t, n).sub(this._targetEnd);
		this._encloseToBoundary(this._targetEnd, i, this.boundaryFriction), this._needsUpdate = !0, r || this._target.copy(this._targetEnd);
		let a = !r || Zo(this._target.x, this._targetEnd.x, this.restThreshold) && Zo(this._target.y, this._targetEnd.y, this.restThreshold) && Zo(this._target.z, this._targetEnd.z, this.restThreshold);
		return this._createOnRestPromise(a);
	}
	lookInDirectionOf(e, t, n, r = !1) {
		let i = K.set(e, t, n).sub(this._targetEnd).normalize().multiplyScalar(-this._sphericalEnd.radius).add(this._targetEnd);
		return this.setPosition(i.x, i.y, i.z, r);
	}
	fitToBox(e, t, { cover: n = !1, paddingLeft: r = 0, paddingRight: i = 0, paddingBottom: a = 0, paddingTop: o = 0 } = {}) {
		let s = [], c = e.isBox3 ? Cs.copy(e) : Cs.setFromObject(e);
		c.isEmpty() && (console.warn("camera-controls: fitTo() cannot be used with an empty box. Aborting"), Promise.resolve());
		let l = Qo(this._sphericalEnd.theta, Ko), u = Qo(this._sphericalEnd.phi, Ko);
		s.push(this.rotateTo(l, u, t));
		let d = K.setFromSpherical(this._sphericalEnd).normalize(), f = Es.setFromUnitVectors(d, ds), p = Zo(Math.abs(d.y), 1);
		p && f.multiply(Ds.setFromAxisAngle(us, l)), f.multiply(this._yAxisUpSpaceInverse);
		let m = ws.makeEmpty();
		ps.copy(c.min).applyQuaternion(f), m.expandByPoint(ps), ps.copy(c.min).setX(c.max.x).applyQuaternion(f), m.expandByPoint(ps), ps.copy(c.min).setY(c.max.y).applyQuaternion(f), m.expandByPoint(ps), ps.copy(c.max).setZ(c.min.z).applyQuaternion(f), m.expandByPoint(ps), ps.copy(c.min).setZ(c.max.z).applyQuaternion(f), m.expandByPoint(ps), ps.copy(c.max).setY(c.min.y).applyQuaternion(f), m.expandByPoint(ps), ps.copy(c.max).setX(c.min.x).applyQuaternion(f), m.expandByPoint(ps), ps.copy(c.max).applyQuaternion(f), m.expandByPoint(ps), m.min.x -= r, m.min.y -= a, m.max.x += i, m.max.y += o, f.setFromUnitVectors(ds, d), p && f.premultiply(Ds.invert()), f.premultiply(this._yAxisUpSpace);
		let h = m.getSize(K), g = m.getCenter(ps).applyQuaternion(f);
		if (Wo(this._camera)) {
			let e = this.getDistanceToFitBox(h.x, h.y, h.z, n);
			s.push(this.moveTo(g.x, g.y, g.z, t)), s.push(this.dollyTo(e, t)), s.push(this.setFocalOffset(0, 0, 0, t));
		} else if (W(this._camera)) {
			let e = this._camera, r = e.right - e.left, i = e.top - e.bottom, a = n ? Math.max(r / h.x, i / h.y) : Math.min(r / h.x, i / h.y);
			s.push(this.moveTo(g.x, g.y, g.z, t)), s.push(this.zoomTo(a, t)), s.push(this.setFocalOffset(0, 0, 0, t));
		}
		return Promise.all(s);
	}
	fitToSphere(t, n) {
		let r = [], i = "isObject3D" in t ? e.createBoundingSphere(t, Ts) : Ts.copy(t);
		if (r.push(this.moveTo(i.center.x, i.center.y, i.center.z, n)), Wo(this._camera)) {
			let e = this.getDistanceToFitSphere(i.radius);
			r.push(this.dollyTo(e, n));
		} else if (W(this._camera)) {
			let e = this._camera.right - this._camera.left, t = this._camera.top - this._camera.bottom, a = 2 * i.radius, o = Math.min(e / a, t / a);
			r.push(this.zoomTo(o, n));
		}
		return r.push(this.setFocalOffset(0, 0, 0, n)), Promise.all(r);
	}
	setLookAt(e, t, n, r, i, a, o = !1) {
		this._isUserControllingRotate = !1, this._isUserControllingDolly = !1, this._isUserControllingTruck = !1, this._lastDollyDirection = Uo.NONE, this._changedDolly = 0;
		let s = ps.set(r, i, a), c = K.set(e, t, n);
		this._targetEnd.copy(s), this._sphericalEnd.setFromVector3(c.sub(s).applyQuaternion(this._yAxisUpSpace)), this._needsUpdate = !0, o || (this._target.copy(this._targetEnd), this._spherical.copy(this._sphericalEnd));
		let l = !o || Zo(this._target.x, this._targetEnd.x, this.restThreshold) && Zo(this._target.y, this._targetEnd.y, this.restThreshold) && Zo(this._target.z, this._targetEnd.z, this.restThreshold) && Zo(this._spherical.theta, this._sphericalEnd.theta, this.restThreshold) && Zo(this._spherical.phi, this._sphericalEnd.phi, this.restThreshold) && Zo(this._spherical.radius, this._sphericalEnd.radius, this.restThreshold);
		return this._createOnRestPromise(l);
	}
	lerp(e, t, n, r = !1) {
		this._isUserControllingRotate = !1, this._isUserControllingDolly = !1, this._isUserControllingTruck = !1, this._lastDollyDirection = Uo.NONE, this._changedDolly = 0;
		let i = K.set(...e.target);
		if ("spherical" in e) xs.set(...e.spherical);
		else {
			let t = ps.set(...e.position);
			xs.setFromVector3(t.sub(i).applyQuaternion(this._yAxisUpSpace));
		}
		let a = ms.set(...t.target);
		if ("spherical" in t) Ss.set(...t.spherical);
		else {
			let e = ps.set(...t.position);
			Ss.setFromVector3(e.sub(a).applyQuaternion(this._yAxisUpSpace));
		}
		this._targetEnd.copy(i.lerp(a, n));
		let o = Ss.theta - xs.theta, s = Ss.phi - xs.phi, c = Ss.radius - xs.radius;
		this._sphericalEnd.set(xs.radius + c * n, xs.phi + s * n, xs.theta + o * n), this._needsUpdate = !0, r || (this._target.copy(this._targetEnd), this._spherical.copy(this._sphericalEnd));
		let l = !r || Zo(this._target.x, this._targetEnd.x, this.restThreshold) && Zo(this._target.y, this._targetEnd.y, this.restThreshold) && Zo(this._target.z, this._targetEnd.z, this.restThreshold) && Zo(this._spherical.theta, this._sphericalEnd.theta, this.restThreshold) && Zo(this._spherical.phi, this._sphericalEnd.phi, this.restThreshold) && Zo(this._spherical.radius, this._sphericalEnd.radius, this.restThreshold);
		return this._createOnRestPromise(l);
	}
	lerpLookAt(e, t, n, r, i, a, o, s, c, l, u, d, f, p = !1) {
		return this.lerp({
			position: [
				e,
				t,
				n
			],
			target: [
				r,
				i,
				a
			]
		}, {
			position: [
				o,
				s,
				c
			],
			target: [
				l,
				u,
				d
			]
		}, f, p);
	}
	setPosition(e, t, n, r = !1) {
		return this.setLookAt(e, t, n, this._targetEnd.x, this._targetEnd.y, this._targetEnd.z, r);
	}
	setTarget(e, t, n, r = !1) {
		let i = this.getPosition(K), a = this.setLookAt(i.x, i.y, i.z, e, t, n, r);
		return this._sphericalEnd.phi = Yo(this._sphericalEnd.phi, this.minPolarAngle, this.maxPolarAngle), a;
	}
	setFocalOffset(e, t, n, r = !1) {
		this._isUserControllingOffset = !1, this._focalOffsetEnd.set(e, t, n), this._needsUpdate = !0, r || this._focalOffset.copy(this._focalOffsetEnd);
		let i = !r || Zo(this._focalOffset.x, this._focalOffsetEnd.x, this.restThreshold) && Zo(this._focalOffset.y, this._focalOffsetEnd.y, this.restThreshold) && Zo(this._focalOffset.z, this._focalOffsetEnd.z, this.restThreshold);
		return this._createOnRestPromise(i);
	}
	setOrbitPoint(e, t, n) {
		this._camera.updateMatrixWorld(), gs.setFromMatrixColumn(this._camera.matrixWorldInverse, 0), _s.setFromMatrixColumn(this._camera.matrixWorldInverse, 1), vs.setFromMatrixColumn(this._camera.matrixWorldInverse, 2);
		let r = K.set(e, t, n), i = r.distanceTo(this._camera.position), a = r.sub(this._camera.position);
		gs.multiplyScalar(a.x), _s.multiplyScalar(a.y), vs.multiplyScalar(a.z), K.copy(gs).add(_s).add(vs), K.z += i, this.dollyTo(i, !1), this.setFocalOffset(-K.x, K.y, -K.z, !1), this.moveTo(e, t, n, !1);
	}
	setBoundary(e) {
		e ? (this._boundary.copy(e), this._boundary.clampPoint(this._targetEnd, this._targetEnd), this._needsUpdate = !0) : (this._boundary.min.set(-Infinity, -Infinity, -Infinity), this._boundary.max.set(Infinity, Infinity, Infinity), this._needsUpdate = !0);
	}
	setViewport(e, t, n, r) {
		e === null ? this._viewport = null : (this._viewport = this._viewport || new G.Vector4(), typeof e == "number" ? this._viewport.set(e, t, n, r) : this._viewport.copy(e));
	}
	getDistanceToFitBox(e, t, n, r = !1) {
		if (is(this._camera, "getDistanceToFitBox")) return this._spherical.radius;
		let i = e / t, a = this._camera.getEffectiveFOV() * Jo, o = this._camera.aspect;
		return ((r ? i > o : i < o) ? t : e / o) * .5 / Math.tan(a * .5) + n * .5;
	}
	getDistanceToFitSphere(e) {
		if (is(this._camera, "getDistanceToFitSphere")) return this._spherical.radius;
		let t = this._camera.getEffectiveFOV() * Jo, n = Math.atan(Math.tan(t * .5) * this._camera.aspect) * 2, r = 1 < this._camera.aspect ? t : n;
		return e / Math.sin(r * .5);
	}
	getTarget(e, t = !0) {
		return (e && e.isVector3 ? e : new G.Vector3()).copy(t ? this._targetEnd : this._target);
	}
	getPosition(e, t = !0) {
		return (e && e.isVector3 ? e : new G.Vector3()).setFromSpherical(t ? this._sphericalEnd : this._spherical).applyQuaternion(this._yAxisUpSpaceInverse).add(t ? this._targetEnd : this._target);
	}
	getSpherical(e, t = !0) {
		return (e || new G.Spherical()).copy(t ? this._sphericalEnd : this._spherical);
	}
	getFocalOffset(e, t = !0) {
		return (e && e.isVector3 ? e : new G.Vector3()).copy(t ? this._focalOffsetEnd : this._focalOffset);
	}
	normalizeRotations() {
		return this._sphericalEnd.theta = (this._sphericalEnd.theta % Go + Go) % Go, this._sphericalEnd.theta > Math.PI && (this._sphericalEnd.theta -= Go), this._spherical.theta += Go * Math.round((this._sphericalEnd.theta - this._spherical.theta) / Go), this;
	}
	stop() {
		this._focalOffset.copy(this._focalOffsetEnd), this._target.copy(this._targetEnd), this._spherical.copy(this._sphericalEnd), this._zoom = this._zoomEnd;
	}
	reset(e = !1) {
		if (!Zo(this._camera.up.x, this._cameraUp0.x) || !Zo(this._camera.up.y, this._cameraUp0.y) || !Zo(this._camera.up.z, this._cameraUp0.z)) {
			this._camera.up.copy(this._cameraUp0);
			let e = this.getPosition(K);
			this.updateCameraUp(), this.setPosition(e.x, e.y, e.z);
		}
		let t = [
			this.setLookAt(this._position0.x, this._position0.y, this._position0.z, this._target0.x, this._target0.y, this._target0.z, e),
			this.setFocalOffset(this._focalOffset0.x, this._focalOffset0.y, this._focalOffset0.z, e),
			this.zoomTo(this._zoom0, e)
		];
		return Promise.all(t);
	}
	saveState() {
		this._cameraUp0.copy(this._camera.up), this.getTarget(this._target0), this.getPosition(this._position0), this._zoom0 = this._zoom, this._focalOffset0.copy(this._focalOffset);
	}
	updateCameraUp() {
		this._yAxisUpSpace.setFromUnitVectors(this._camera.up, us), this._yAxisUpSpaceInverse.copy(this._yAxisUpSpace).invert();
	}
	applyCameraUp() {
		let e = K.subVectors(this._target, this._camera.position).normalize(), t = ps.crossVectors(e, this._camera.up);
		this._camera.up.crossVectors(t, e).normalize(), this._camera.updateMatrixWorld();
		let n = this.getPosition(K);
		this.updateCameraUp(), this.setPosition(n.x, n.y, n.z);
	}
	update(e) {
		let t = this._sphericalEnd.theta - this._spherical.theta, n = this._sphericalEnd.phi - this._spherical.phi, r = this._sphericalEnd.radius - this._spherical.radius, i = ys.subVectors(this._targetEnd, this._target), a = bs.subVectors(this._focalOffsetEnd, this._focalOffset), o = this._zoomEnd - this._zoom;
		if (Xo(t)) this._thetaVelocity.value = 0, this._spherical.theta = this._sphericalEnd.theta;
		else {
			let t = this._isUserControllingRotate ? this.draggingSmoothTime : this.smoothTime;
			this._spherical.theta = ts(this._spherical.theta, this._sphericalEnd.theta, this._thetaVelocity, t, Infinity, e), this._needsUpdate = !0;
		}
		if (Xo(n)) this._phiVelocity.value = 0, this._spherical.phi = this._sphericalEnd.phi;
		else {
			let t = this._isUserControllingRotate ? this.draggingSmoothTime : this.smoothTime;
			this._spherical.phi = ts(this._spherical.phi, this._sphericalEnd.phi, this._phiVelocity, t, Infinity, e), this._needsUpdate = !0;
		}
		if (Xo(r)) this._radiusVelocity.value = 0, this._spherical.radius = this._sphericalEnd.radius;
		else {
			let t = this._isUserControllingDolly ? this.draggingSmoothTime : this.smoothTime;
			this._spherical.radius = ts(this._spherical.radius, this._sphericalEnd.radius, this._radiusVelocity, t, this.maxSpeed, e), this._needsUpdate = !0;
		}
		if (Xo(i.x) && Xo(i.y) && Xo(i.z)) this._targetVelocity.set(0, 0, 0), this._target.copy(this._targetEnd);
		else {
			let t = this._isUserControllingTruck ? this.draggingSmoothTime : this.smoothTime;
			ns(this._target, this._targetEnd, this._targetVelocity, t, this.maxSpeed, e, this._target), this._needsUpdate = !0;
		}
		if (Xo(a.x) && Xo(a.y) && Xo(a.z)) this._focalOffsetVelocity.set(0, 0, 0), this._focalOffset.copy(this._focalOffsetEnd);
		else {
			let t = this._isUserControllingOffset ? this.draggingSmoothTime : this.smoothTime;
			ns(this._focalOffset, this._focalOffsetEnd, this._focalOffsetVelocity, t, this.maxSpeed, e, this._focalOffset), this._needsUpdate = !0;
		}
		if (Xo(o)) this._zoomVelocity.value = 0, this._zoom = this._zoomEnd;
		else {
			let t = this._isUserControllingZoom ? this.draggingSmoothTime : this.smoothTime;
			this._zoom = ts(this._zoom, this._zoomEnd, this._zoomVelocity, t, Infinity, e);
		}
		if (this.dollyToCursor) {
			if (Wo(this._camera) && this._changedDolly !== 0) {
				let e = this._spherical.radius - this._lastDistance, t = this._camera, n = this._getCameraDirection(hs), r = K.copy(n).cross(t.up).normalize();
				r.lengthSq() === 0 && (r.x = 1);
				let i = ps.crossVectors(r, n), a = this._sphericalEnd.radius * Math.tan(t.getEffectiveFOV() * Jo * .5), o = (this._sphericalEnd.radius - e - this._sphericalEnd.radius) / this._sphericalEnd.radius, s = ms.copy(this._targetEnd).add(r.multiplyScalar(this._dollyControlCoord.x * a * t.aspect)).add(i.multiplyScalar(this._dollyControlCoord.y * a)), c = K.copy(this._targetEnd).lerp(s, o), l = this._lastDollyDirection === Uo.IN && this._spherical.radius <= this.minDistance, u = this._lastDollyDirection === Uo.OUT && this.maxDistance <= this._spherical.radius;
				if (this.infinityDolly && (l || u)) {
					this._sphericalEnd.radius -= e, this._spherical.radius -= e;
					let t = ps.copy(n).multiplyScalar(-e);
					c.add(t);
				}
				this._boundary.clampPoint(c, c);
				let d = ps.subVectors(c, this._targetEnd);
				this._targetEnd.copy(c), this._target.add(d), this._changedDolly -= e, Xo(this._changedDolly) && (this._changedDolly = 0);
			} else if (W(this._camera) && this._changedZoom !== 0) {
				let e = this._zoom - this._lastZoom, t = this._camera, n = K.set(this._dollyControlCoord.x, this._dollyControlCoord.y, (t.near + t.far) / (t.near - t.far)).unproject(t), r = ps.set(0, 0, -1).applyQuaternion(t.quaternion), i = ms.copy(n).add(r.multiplyScalar(-n.dot(t.up))), a = -(this._zoom - e - this._zoom) / this._zoom, o = this._getCameraDirection(hs), s = this._targetEnd.dot(o), c = K.copy(this._targetEnd).lerp(i, a), l = c.dot(o), u = o.multiplyScalar(l - s);
				c.sub(u), this._boundary.clampPoint(c, c);
				let d = ps.subVectors(c, this._targetEnd);
				this._targetEnd.copy(c), this._target.add(d), this._changedZoom -= e, Xo(this._changedZoom) && (this._changedZoom = 0);
			}
		}
		this._camera.zoom !== this._zoom && (this._camera.zoom = this._zoom, this._camera.updateProjectionMatrix(), this._updateNearPlaneCorners(), this._needsUpdate = !0), this._dragNeedsUpdate = !0;
		let s = this._collisionTest();
		this._spherical.radius = Math.min(this._spherical.radius, s), this._spherical.makeSafe(), this._camera.position.setFromSpherical(this._spherical).applyQuaternion(this._yAxisUpSpaceInverse).add(this._target), this._camera.lookAt(this._target), (!Xo(this._focalOffset.x) || !Xo(this._focalOffset.y) || !Xo(this._focalOffset.z)) && (this._camera.matrix.compose(this._camera.position, this._camera.quaternion, this._camera.scale), gs.setFromMatrixColumn(this._camera.matrix, 0), _s.setFromMatrixColumn(this._camera.matrix, 1), vs.setFromMatrixColumn(this._camera.matrix, 2), gs.multiplyScalar(this._focalOffset.x), _s.multiplyScalar(-this._focalOffset.y), vs.multiplyScalar(this._focalOffset.z), K.copy(gs).add(_s).add(vs), this._camera.position.add(K), this._camera.updateMatrixWorld()), this._boundaryEnclosesCamera && this._encloseToBoundary(this._camera.position.copy(this._target), K.setFromSpherical(this._spherical).applyQuaternion(this._yAxisUpSpaceInverse), 1);
		let c = this._needsUpdate;
		return c && !this._updatedLastTime ? (this._hasRested = !1, this.dispatchEvent({ type: "wake" }), this.dispatchEvent({ type: "update" })) : c ? (this.dispatchEvent({ type: "update" }), Xo(t, this.restThreshold) && Xo(n, this.restThreshold) && Xo(r, this.restThreshold) && Xo(i.x, this.restThreshold) && Xo(i.y, this.restThreshold) && Xo(i.z, this.restThreshold) && Xo(a.x, this.restThreshold) && Xo(a.y, this.restThreshold) && Xo(a.z, this.restThreshold) && Xo(o, this.restThreshold) && !this._hasRested && (this._hasRested = !0, this.dispatchEvent({ type: "rest" }))) : !c && this._updatedLastTime && this.dispatchEvent({ type: "sleep" }), this._lastDistance = this._spherical.radius, this._lastZoom = this._zoom, this._updatedLastTime = c, this._needsUpdate = !1, c;
	}
	toJSON() {
		return JSON.stringify({
			enabled: this._enabled,
			minDistance: this.minDistance,
			maxDistance: $o(this.maxDistance),
			minZoom: this.minZoom,
			maxZoom: $o(this.maxZoom),
			minPolarAngle: this.minPolarAngle,
			maxPolarAngle: $o(this.maxPolarAngle),
			minAzimuthAngle: $o(this.minAzimuthAngle),
			maxAzimuthAngle: $o(this.maxAzimuthAngle),
			smoothTime: this.smoothTime,
			draggingSmoothTime: this.draggingSmoothTime,
			dollySpeed: this.dollySpeed,
			truckSpeed: this.truckSpeed,
			dollyToCursor: this.dollyToCursor,
			target: this._targetEnd.toArray(),
			position: K.setFromSpherical(this._sphericalEnd).add(this._targetEnd).toArray(),
			zoom: this._zoomEnd,
			focalOffset: this._focalOffsetEnd.toArray(),
			target0: this._target0.toArray(),
			position0: this._position0.toArray(),
			zoom0: this._zoom0,
			focalOffset0: this._focalOffset0.toArray()
		});
	}
	fromJSON(e, t = !1) {
		let n = JSON.parse(e);
		this.enabled = n.enabled, this.minDistance = n.minDistance, this.maxDistance = es(n.maxDistance), this.minZoom = n.minZoom, this.maxZoom = es(n.maxZoom), this.minPolarAngle = n.minPolarAngle, this.maxPolarAngle = es(n.maxPolarAngle), this.minAzimuthAngle = es(n.minAzimuthAngle), this.maxAzimuthAngle = es(n.maxAzimuthAngle), this.smoothTime = n.smoothTime, this.draggingSmoothTime = n.draggingSmoothTime, this.dollySpeed = n.dollySpeed, this.truckSpeed = n.truckSpeed, this.dollyToCursor = n.dollyToCursor, this._target0.fromArray(n.target0), this._position0.fromArray(n.position0), this._zoom0 = n.zoom0, this._focalOffset0.fromArray(n.focalOffset0), this.moveTo(n.target[0], n.target[1], n.target[2], t), xs.setFromVector3(K.fromArray(n.position).sub(this._targetEnd).applyQuaternion(this._yAxisUpSpace)), this.rotateTo(xs.theta, xs.phi, t), this.dollyTo(xs.radius, t), this.zoomTo(n.zoom, t), this.setFocalOffset(n.focalOffset[0], n.focalOffset[1], n.focalOffset[2], t), this._needsUpdate = !0;
	}
	connect(e) {
		this._domElement ? console.warn("camera-controls is already connected.") : (e.setAttribute("data-camera-controls-version", os), this._addAllEventListeners(e), this._getClientRect(this._elementRect));
	}
	disconnect() {
		this.cancel(), this._removeAllEventListeners(), this._domElement &&= (this._domElement.removeAttribute("data-camera-controls-version"), void 0);
	}
	dispose() {
		this.removeAllEventListeners(), this.disconnect();
	}
	_getTargetDirection(e) {
		return e.setFromSpherical(this._spherical).divideScalar(this._spherical.radius).applyQuaternion(this._yAxisUpSpaceInverse);
	}
	_getCameraDirection(e) {
		return this._getTargetDirection(e).negate();
	}
	_findPointerById(e) {
		return this._activePointers.find((t) => t.pointerId === e);
	}
	_findPointerByMouseButton(e) {
		return this._activePointers.find((t) => t.mouseButton === e);
	}
	_disposePointer(e) {
		this._activePointers.splice(this._activePointers.indexOf(e), 1);
	}
	_encloseToBoundary(e, t, n) {
		let r = t.lengthSq();
		if (r === 0) return e;
		let i = ps.copy(t).add(e), a = this._boundary.clampPoint(i, ms).sub(i), o = a.lengthSq();
		if (o === 0) return e.add(t);
		if (o === r) return e;
		if (n === 0) return e.add(t).add(a);
		{
			let r = 1 + n * o / t.dot(a);
			return e.add(ps.copy(t).multiplyScalar(r)).add(a.multiplyScalar(1 - n));
		}
	}
	_updateNearPlaneCorners() {
		if (Wo(this._camera)) {
			let e = this._camera, t = e.near, n = e.getEffectiveFOV() * Jo, r = Math.tan(n * .5) * t, i = r * e.aspect;
			this._nearPlaneCorners[0].set(-i, -r, 0), this._nearPlaneCorners[1].set(i, -r, 0), this._nearPlaneCorners[2].set(i, r, 0), this._nearPlaneCorners[3].set(-i, r, 0);
		} else if (W(this._camera)) {
			let e = this._camera, t = 1 / e.zoom, n = e.left * t, r = e.right * t, i = e.top * t, a = e.bottom * t;
			this._nearPlaneCorners[0].set(n, i, 0), this._nearPlaneCorners[1].set(r, i, 0), this._nearPlaneCorners[2].set(r, a, 0), this._nearPlaneCorners[3].set(n, a, 0);
		}
	}
	_truckInternal = (e, t, n, r) => {
		let i, a;
		if (Wo(this._camera)) {
			let n = K.copy(this._camera.position).sub(this._target), r = this._camera.getEffectiveFOV() * Jo, o = n.length() * Math.tan(r * .5);
			i = this.truckSpeed * e * o / this._elementRect.height, a = this.truckSpeed * t * o / this._elementRect.height;
		} else if (W(this._camera)) {
			let n = this._camera;
			i = this.truckSpeed * e * (n.right - n.left) / n.zoom / this._elementRect.width, a = this.truckSpeed * t * (n.top - n.bottom) / n.zoom / this._elementRect.height;
		} else return;
		r ? (n ? this.setFocalOffset(this._focalOffsetEnd.x + i, this._focalOffsetEnd.y, this._focalOffsetEnd.z, !0) : this.truck(i, 0, !0), this.forward(-a, !0)) : n ? this.setFocalOffset(this._focalOffsetEnd.x + i, this._focalOffsetEnd.y + a, this._focalOffsetEnd.z, !0) : this.truck(i, a, !0);
	};
	_rotateInternal = (e, t) => {
		let n = Go * this.azimuthRotateSpeed * e / this._elementRect.height, r = Go * this.polarRotateSpeed * t / this._elementRect.height;
		this.rotate(n, r, !0);
	};
	_dollyInternal = (e, t, n) => {
		let r = .95 ** (-e * this.dollySpeed), i = this._sphericalEnd.radius, a = this._sphericalEnd.radius * r, o = Yo(a, this.minDistance, this.maxDistance), s = o - a;
		this.infinityDolly && this.dollyToCursor ? this._dollyToNoClamp(a, !0) : (this.infinityDolly && !this.dollyToCursor && this.dollyInFixed(s, !0), this._dollyToNoClamp(o, !0)), this.dollyToCursor && (this._changedDolly += (this.infinityDolly ? a : o) - i, this._dollyControlCoord.set(t, n)), this._lastDollyDirection = Math.sign(-e);
	};
	_zoomInternal = (e, t, n) => {
		let r = .95 ** (e * this.dollySpeed), i = this._zoom, a = this._zoom * r;
		this.zoomTo(a, !0), this.dollyToCursor && (this._changedZoom += a - i, this._dollyControlCoord.set(t, n));
	};
	_collisionTest() {
		let e = Infinity;
		if (!(this.colliderMeshes.length >= 1) || is(this._camera, "_collisionTest")) return e;
		let t = this._getTargetDirection(hs);
		Os.lookAt(ls, t, this._camera.up);
		for (let n = 0; n < 4; n++) {
			let r = ps.copy(this._nearPlaneCorners[n]);
			r.applyMatrix4(Os);
			let i = ms.addVectors(this._target, r);
			ks.set(i, t), ks.far = this._spherical.radius + 1;
			let a = ks.intersectObjects(this.colliderMeshes);
			a.length !== 0 && a[0].distance < e && (e = a[0].distance);
		}
		return e;
	}
	_getClientRect(e) {
		if (!this._domElement) return;
		let t = this._domElement.getBoundingClientRect();
		return e.x = t.left, e.y = t.top, this._viewport ? (e.x += this._viewport.x, e.y += t.height - this._viewport.w - this._viewport.y, e.width = this._viewport.z, e.height = this._viewport.w) : (e.width = t.width, e.height = t.height), e;
	}
	_createOnRestPromise(e) {
		return e ? Promise.resolve() : (this._hasRested = !1, this.dispatchEvent({ type: "transitionstart" }), new Promise((e) => {
			let t = () => {
				this.removeEventListener("rest", t), e();
			};
			this.addEventListener("rest", t);
		}));
	}
	_addAllEventListeners(e) {}
	_removeAllEventListeners() {}
	get dampingFactor() {
		return console.warn(".dampingFactor has been deprecated. use smoothTime (in seconds) instead."), 0;
	}
	set dampingFactor(e) {
		console.warn(".dampingFactor has been deprecated. use smoothTime (in seconds) instead.");
	}
	get draggingDampingFactor() {
		return console.warn(".draggingDampingFactor has been deprecated. use draggingSmoothTime (in seconds) instead."), 0;
	}
	set draggingDampingFactor(e) {
		console.warn(".draggingDampingFactor has been deprecated. use draggingSmoothTime (in seconds) instead.");
	}
	static createBoundingSphere(e, t = new G.Sphere()) {
		let n = t, r = n.center;
		Cs.makeEmpty(), e.traverseVisible((e) => {
			e.isMesh && Cs.expandByObject(e);
		}), Cs.getCenter(r);
		let i = 0;
		return e.traverseVisible((e) => {
			if (!e.isMesh) return;
			let t = e;
			if (!t.geometry) return;
			let n = t.geometry.clone();
			n.applyMatrix4(t.matrixWorld);
			let a = n.attributes.position;
			for (let e = 0, t = a.count; e < t; e++) K.fromBufferAttribute(a, e), i = Math.max(i, r.distanceToSquared(K));
		}), n.radius = Math.sqrt(i), n;
	}
}, js = /* @__PURE__ */ (0, F.forwardRef)((e, t) => {
	let { impl: n, camera: i, domElement: a, makeDefault: s, onControlStart: c, onControl: l, onControlEnd: u, onTransitionStart: d, onUpdate: f, onWake: p, onRest: m, onSleep: h, onStart: g, onEnd: _, onChange: v, regress: y, ...b } = e, x = n ?? As;
	(0, F.useMemo)(() => {
		let e = {
			Box3: oe,
			MathUtils: { clamp: gt.clamp },
			Matrix4: ae,
			Quaternion: o,
			Raycaster: le,
			Sphere: re,
			Spherical: r,
			Vector2: M,
			Vector3: He,
			Vector4: ut
		};
		x.install({ THREE: e }), Ir({ CameraControlsImpl: x });
	}, [x]);
	let S = sr((e) => e.camera), C = sr((e) => e.gl), w = sr((e) => e.invalidate), T = sr((e) => e.events), E = sr((e) => e.setEvents), D = sr((e) => e.set), ee = sr((e) => e.get), te = sr((e) => e.performance), ne = i || S, O = a || T.connected || C.domElement, k = (0, F.useMemo)(() => new x(ne), [x, ne]);
	return cr((e, t) => {
		k.update(t);
	}, -1), (0, F.useEffect)(() => (k.connect(O), () => void k.disconnect()), [O, k]), (0, F.useEffect)(() => {
		function e() {
			w(), y && te.regress();
		}
		let t = (t) => {
			e(), c?.(t), g?.(t);
		}, n = (t) => {
			e(), l?.(t), v?.(t);
		}, r = (e) => {
			u?.(e), _?.(e);
		}, i = (t) => {
			e(), d?.(t), v?.(t);
		}, a = (t) => {
			e(), f?.(t), v?.(t);
		}, o = (t) => {
			e(), p?.(t), v?.(t);
		}, s = (e) => {
			m?.(e);
		}, b = (e) => {
			h?.(e);
		};
		return k.addEventListener("controlstart", t), k.addEventListener("control", n), k.addEventListener("controlend", r), k.addEventListener("transitionstart", i), k.addEventListener("update", a), k.addEventListener("wake", o), k.addEventListener("rest", s), k.addEventListener("sleep", b), () => {
			k.removeEventListener("controlstart", t), k.removeEventListener("control", n), k.removeEventListener("controlend", r), k.removeEventListener("transitionstart", i), k.removeEventListener("update", a), k.removeEventListener("wake", o), k.removeEventListener("rest", s), k.removeEventListener("sleep", b);
		};
	}, [
		k,
		w,
		E,
		y,
		te,
		c,
		l,
		u,
		d,
		f,
		p,
		m,
		h,
		v,
		g,
		_
	]), (0, F.useEffect)(() => {
		if (s) {
			let e = ee().controls;
			return D({ controls: k }), () => D({ controls: e });
		}
	}, [s, k]), /*#__PURE__*/ F.createElement("primitive", Mt({
		ref: t,
		object: k
	}, b));
}), Ms = (e, t, n) => {
	let r;
	switch (e) {
		case Ye:
			r = new Uint8ClampedArray(t * n * 4);
			break;
		case he:
			r = new Uint16Array(t * n * 4);
			break;
		case it:
			r = new Uint32Array(t * n * 4);
			break;
		case ze:
			r = new Int8Array(t * n * 4);
			break;
		case ge:
			r = new Int16Array(t * n * 4);
			break;
		case ct:
			r = new Int32Array(t * n * 4);
			break;
		case $e:
			r = new Float32Array(t * n * 4);
			break;
		default: throw Error("Unsupported data type");
	}
	return r;
}, Ns, Ps = (e, t, n, r) => {
	if (Ns !== void 0) return Ns;
	let i = new Ae(1, 1, r);
	t.setRenderTarget(i);
	let a = new c(new p(), new mt({ color: 16777215 }));
	t.render(a, n), t.setRenderTarget(null);
	let o = Ms(e, i.width, i.height);
	return t.readRenderTargetPixels(i, 0, 0, i.width, i.height, o), i.dispose(), a.geometry.dispose(), a.material.dispose(), Ns = o[0] !== 0, Ns;
}, Fs = class e {
	_renderer;
	_rendererIsDisposable = !1;
	_material;
	_scene;
	_camera;
	_quad;
	_renderTarget;
	_width;
	_height;
	_type;
	_colorSpace;
	_supportsReadPixels = !0;
	constructor(t) {
		this._width = t.width, this._height = t.height, this._type = t.type, this._colorSpace = t.colorSpace;
		let n = {
			format: _,
			depthBuffer: !1,
			stencilBuffer: !1,
			type: this._type,
			colorSpace: this._colorSpace,
			anisotropy: t.renderTargetOptions?.anisotropy === void 0 ? 1 : t.renderTargetOptions?.anisotropy,
			generateMipmaps: t.renderTargetOptions?.generateMipmaps !== void 0 && t.renderTargetOptions?.generateMipmaps,
			magFilter: t.renderTargetOptions?.magFilter === void 0 ? je : t.renderTargetOptions?.magFilter,
			minFilter: t.renderTargetOptions?.minFilter === void 0 ? je : t.renderTargetOptions?.minFilter,
			samples: t.renderTargetOptions?.samples === void 0 ? void 0 : t.renderTargetOptions?.samples,
			wrapS: t.renderTargetOptions?.wrapS === void 0 ? T : t.renderTargetOptions?.wrapS,
			wrapT: t.renderTargetOptions?.wrapT === void 0 ? T : t.renderTargetOptions?.wrapT
		};
		if (this._material = t.material, t.renderer ? this._renderer = t.renderer : (this._renderer = e.instantiateRenderer(), this._rendererIsDisposable = !0), this._scene = new et(), this._camera = new E(), this._camera.position.set(0, 0, 10), this._camera.left = -.5, this._camera.right = .5, this._camera.top = .5, this._camera.bottom = -.5, this._camera.updateProjectionMatrix(), !Ps(this._type, this._renderer, this._camera, n)) {
			let e;
			switch (this._type) {
				case he: e = this._renderer.extensions.has("EXT_color_buffer_float") ? $e : void 0;
			}
			e === void 0 ? (this._supportsReadPixels = !1, console.warn("This browser dos not support toArray or toDataTexture, calls to those methods will result in an error thrown")) : (console.warn(`This browser does not support reading pixels from ${this._type} RenderTargets, switching to ${$e}`), this._type = e);
		}
		this._quad = new c(new p(), this._material), this._quad.geometry.computeBoundingBox(), this._scene.add(this._quad), this._renderTarget = new Ae(this.width, this.height, n), this._renderTarget.texture.mapping = t.renderTargetOptions?.mapping === void 0 ? 300 : t.renderTargetOptions?.mapping;
	}
	static instantiateRenderer() {
		let e = new ht();
		return e.setSize(128, 128), e;
	}
	render = () => {
		this._renderer.setRenderTarget(this._renderTarget);
		try {
			this._renderer.render(this._scene, this._camera);
		} catch (e) {
			throw this._renderer.setRenderTarget(null), e;
		}
		this._renderer.setRenderTarget(null);
	};
	toArray() {
		if (!this._supportsReadPixels) throw Error("Can't read pixels in this browser");
		let e = Ms(this._type, this._width, this._height);
		return this._renderer.readRenderTargetPixels(this._renderTarget, 0, 0, this._width, this._height, e), e;
	}
	toDataTexture(e) {
		let t = new a(this.toArray(), this.width, this.height, _, this._type, e?.mapping || 300, e?.wrapS || 1001, e?.wrapT || 1001, e?.magFilter || 1006, e?.minFilter || 1006, e?.anisotropy || 1, Ne);
		return t.generateMipmaps = e?.generateMipmaps !== void 0 && e?.generateMipmaps, t;
	}
	disposeOnDemandRenderer() {
		this._renderer.setRenderTarget(null), this._rendererIsDisposable && (this._renderer.dispose(), this._renderer.forceContextLoss());
	}
	dispose(e) {
		this.disposeOnDemandRenderer(), e && this.renderTarget.dispose(), this.material instanceof x && Object.values(this.material.uniforms).forEach((e) => {
			e.value instanceof st && e.value.dispose();
		}), Object.values(this.material).forEach((e) => {
			e instanceof st && e.dispose();
		}), this.material.dispose(), this._quad.geometry.dispose();
	}
	get width() {
		return this._width;
	}
	set width(e) {
		this._width = e, this._renderTarget.setSize(this._width, this._height);
	}
	get height() {
		return this._height;
	}
	set height(e) {
		this._height = e, this._renderTarget.setSize(this._width, this._height);
	}
	get renderer() {
		return this._renderer;
	}
	get renderTarget() {
		return this._renderTarget;
	}
	set renderTarget(e) {
		this._renderTarget = e, this._width = e.width, this._height = e.height;
	}
	get material() {
		return this._material;
	}
	get type() {
		return this._type;
	}
	get colorSpace() {
		return this._colorSpace;
	}
}, Is = class extends Error {}, Ls = class extends Error {}, Rs = (e, t, n) => {
	let r = RegExp(`${t}="([^"]*)"`, "i").exec(e);
	if (r) return r[1];
	let i = RegExp(`<${t}[^>]*>([\\s\\S]*?)</${t}>`, "i").exec(e);
	if (i) {
		let e = i[1].match(/<rdf:li>([^<]*)<\/rdf:li>/g);
		return e && e.length === 3 ? e.map((e) => e.replace(/<\/?rdf:li>/g, "")) : i[1].trim();
	}
	if (n !== void 0) return n;
	throw Error(`Can't find ${t} in gainmap metadata`);
}, zs = (e) => {
	let t;
	t = typeof TextDecoder < "u" ? new TextDecoder().decode(e) : e.toString();
	let n = t.indexOf("<x:xmpmeta");
	for (; n !== -1;) {
		let e = t.indexOf("x:xmpmeta>", n), r = t.slice(n, e + 10);
		try {
			let e = Rs(r, "hdrgm:GainMapMin", "0"), t = Rs(r, "hdrgm:GainMapMax"), n = Rs(r, "hdrgm:Gamma", "1"), i = Rs(r, "hdrgm:OffsetSDR", "0.015625"), a = Rs(r, "hdrgm:OffsetHDR", "0.015625"), o = /hdrgm:HDRCapacityMin="([^"]*)"/.exec(r), s = o ? o[1] : "0", c = /hdrgm:HDRCapacityMax="([^"]*)"/.exec(r);
			if (!c) throw Error("Incomplete gainmap metadata");
			let l = c[1];
			return {
				gainMapMin: Array.isArray(e) ? e.map((e) => parseFloat(e)) : [
					parseFloat(e),
					parseFloat(e),
					parseFloat(e)
				],
				gainMapMax: Array.isArray(t) ? t.map((e) => parseFloat(e)) : [
					parseFloat(t),
					parseFloat(t),
					parseFloat(t)
				],
				gamma: Array.isArray(n) ? n.map((e) => parseFloat(e)) : [
					parseFloat(n),
					parseFloat(n),
					parseFloat(n)
				],
				offsetSdr: Array.isArray(i) ? i.map((e) => parseFloat(e)) : [
					parseFloat(i),
					parseFloat(i),
					parseFloat(i)
				],
				offsetHdr: Array.isArray(a) ? a.map((e) => parseFloat(e)) : [
					parseFloat(a),
					parseFloat(a),
					parseFloat(a)
				],
				hdrCapacityMin: parseFloat(s),
				hdrCapacityMax: parseFloat(l)
			};
		} catch {}
		n = t.indexOf("<x:xmpmeta", e);
	}
}, Bs = class {
	options;
	constructor(e) {
		this.options = {
			debug: e && e.debug !== void 0 ? e.debug : !1,
			extractFII: e && e.extractFII !== void 0 ? e.extractFII : !0,
			extractNonFII: e && e.extractNonFII !== void 0 ? e.extractNonFII : !0
		};
	}
	extract(e) {
		return new Promise((t, n) => {
			let r = this.options.debug, i = new DataView(e.buffer);
			if (i.getUint16(0) !== 65496) {
				n(/* @__PURE__ */ Error("Not a valid jpeg"));
				return;
			}
			let a = i.byteLength, o = 2, s = 0, c;
			for (; o < a;) {
				if (++s > 250) {
					n(/* @__PURE__ */ Error(`Found no marker after ${s} loops 😵`));
					return;
				}
				if (i.getUint8(o) !== 255) {
					n(/* @__PURE__ */ Error(`Not a valid marker at offset 0x${o.toString(16)}, found: 0x${i.getUint8(o).toString(16)}`));
					return;
				}
				if (c = i.getUint8(o + 1), r && console.log(`Marker: ${c.toString(16)}`), c === 226) {
					r && console.log("Found APP2 marker (0xffe2)");
					let e = o + 4;
					if (i.getUint32(e) === 1297106432) {
						let r = e + 4, a;
						if (i.getUint16(r) === 18761) a = !1;
						else if (i.getUint16(r) === 19789) a = !0;
						else {
							n(/* @__PURE__ */ Error("No valid endianness marker found in TIFF header"));
							return;
						}
						if (i.getUint16(r + 2, !a) !== 42) {
							n(/* @__PURE__ */ Error("Not valid TIFF data! (no 0x002A marker)"));
							return;
						}
						let o = i.getUint32(r + 4, !a);
						if (o < 8) {
							n(/* @__PURE__ */ Error("Not valid TIFF data! (First offset less than 8)"));
							return;
						}
						let s = r + o, c = i.getUint16(s, !a), l = s + 2, u = 0;
						for (let e = l; e < l + 12 * c; e += 12) i.getUint16(e, !a) === 45057 && (u = i.getUint32(e + 8, !a));
						let d = s + 2 + c * 12 + 4, f = [];
						for (let e = d; e < d + u * 16; e += 16) {
							let t = {
								MPType: i.getUint32(e, !a),
								size: i.getUint32(e + 4, !a),
								dataOffset: i.getUint32(e + 8, !a),
								dependantImages: i.getUint32(e + 12, !a),
								start: -1,
								end: -1,
								isFII: !1
							};
							t.dataOffset ? (t.start = r + t.dataOffset, t.isFII = !1) : (t.start = 0, t.isFII = !0), t.end = t.start + t.size, f.push(t);
						}
						if (this.options.extractNonFII && f.length) {
							let e = new Blob([i]), n = [];
							for (let t of f) {
								if (t.isFII && !this.options.extractFII) continue;
								let r = e.slice(t.start, t.end + 1, "image/jpeg");
								n.push(r);
							}
							t(n);
						}
					}
				}
				o += 2 + i.getUint16(o + 2);
			}
		});
	}
}, Vs = async (e) => {
	let t = zs(e);
	if (!t) throw new Ls("Gain map XMP metadata not found");
	let n = await new Bs({
		extractFII: !0,
		extractNonFII: !0
	}).extract(e);
	if (n.length !== 2) throw new Is("Gain map recovery image not found");
	return {
		sdr: new Uint8Array(await n[0].arrayBuffer()),
		gainMap: new Uint8Array(await n[1].arrayBuffer()),
		metadata: t
	};
}, Hs = (e) => new Promise((t, n) => {
	let r = document.createElement("img");
	r.onload = () => {
		t(r);
	}, r.onerror = (e) => {
		n(e);
	}, r.src = URL.createObjectURL(e);
}), Us = class extends ye {
	_renderer;
	_renderTargetOptions;
	_internalLoadingManager;
	_config;
	constructor(e, t) {
		super(t), this._config = e, e.renderer && (this._renderer = e.renderer), this._internalLoadingManager = new vt();
	}
	setRenderer(e) {
		return this._renderer = e, this;
	}
	setRenderTargetOptions(e) {
		return this._renderTargetOptions = e, this;
	}
	prepareQuadRenderer() {
		this._renderer || console.warn("WARNING: A Renderer was not passed to this Loader constructor or in setRenderer, the result of this Loader will need to be converted to a Data Texture with toDataTexture() before you can use it in your renderer.");
		let e = this._config.createMaterial({
			gainMapMax: [
				1,
				1,
				1
			],
			gainMapMin: [
				0,
				0,
				0
			],
			gamma: [
				1,
				1,
				1
			],
			offsetHdr: [
				1,
				1,
				1
			],
			offsetSdr: [
				1,
				1,
				1
			],
			hdrCapacityMax: 1,
			hdrCapacityMin: 0,
			maxDisplayBoost: 1,
			gainMap: new st(),
			sdr: new st()
		});
		return this._config.createQuadRenderer({
			width: 16,
			height: 16,
			type: he,
			colorSpace: Ne,
			material: e,
			renderer: this._renderer,
			renderTargetOptions: this._renderTargetOptions
		});
	}
	async processImages(e, t, n) {
		let r = t ? new Blob([t], { type: "image/jpeg" }) : void 0, i = new Blob([e], { type: "image/jpeg" }), a, o, s = !1;
		if (typeof createImageBitmap > "u") {
			let e = await Promise.all([r ? Hs(r) : Promise.resolve(void 0), Hs(i)]);
			o = e[0], a = e[1], s = n === "flipY";
		} else {
			let e = await Promise.all([r ? createImageBitmap(r, { imageOrientation: n || "flipY" }) : Promise.resolve(void 0), createImageBitmap(i, { imageOrientation: n || "flipY" })]);
			o = e[0], a = e[1];
		}
		return {
			sdrImage: a,
			gainMapImage: o,
			needsFlip: s
		};
	}
	createTextures(e, t, n) {
		let r = new st(t || new ImageData(2, 2), 300, T, T, je, Qe, _, Ye, 1, Ne);
		r.flipY = n, r.needsUpdate = !0;
		let i = new st(e, 300, T, T, je, Qe, _, Ye, 1, S);
		return i.flipY = n, i.needsUpdate = !0, {
			gainMap: r,
			sdr: i
		};
	}
	updateQuadRenderer(e, t, n, r, i) {
		e.width = t.width, e.height = t.height, e.material.gainMap = n, e.material.sdr = r, e.material.gainMapMin = i.gainMapMin, e.material.gainMapMax = i.gainMapMax, e.material.offsetHdr = i.offsetHdr, e.material.offsetSdr = i.offsetSdr, e.material.gamma = i.gamma, e.material.hdrCapacityMin = i.hdrCapacityMin, e.material.hdrCapacityMax = i.hdrCapacityMax, e.material.maxDisplayBoost = 2 ** i.hdrCapacityMax, e.material.needsUpdate = !0;
	}
}, Ws = "\nvarying vec2 vUv;\n\nvoid main() {\n  vUv = uv;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}\n", Gs = "\n// min half float value\n#define HALF_FLOAT_MIN vec3( -65504, -65504, -65504 )\n// max half float value\n#define HALF_FLOAT_MAX vec3( 65504, 65504, 65504 )\n\nuniform sampler2D sdr;\nuniform sampler2D gainMap;\nuniform vec3 gamma;\nuniform vec3 offsetHdr;\nuniform vec3 offsetSdr;\nuniform vec3 gainMapMin;\nuniform vec3 gainMapMax;\nuniform float weightFactor;\n\nvarying vec2 vUv;\n\nvoid main() {\n  vec3 rgb = texture2D( sdr, vUv ).rgb;\n  vec3 recovery = texture2D( gainMap, vUv ).rgb;\n  vec3 logRecovery = pow( recovery, gamma );\n  vec3 logBoost = gainMapMin * ( 1.0 - logRecovery ) + gainMapMax * logRecovery;\n  vec3 hdrColor = (rgb + offsetSdr) * exp2( logBoost * weightFactor ) - offsetHdr;\n  vec3 clampedHdrColor = max( HALF_FLOAT_MIN, min( HALF_FLOAT_MAX, hdrColor ));\n  gl_FragColor = vec4( clampedHdrColor , 1.0 );\n}\n", Ks = class extends x {
	_maxDisplayBoost;
	_hdrCapacityMin;
	_hdrCapacityMax;
	constructor({ gamma: e, offsetHdr: t, offsetSdr: n, gainMapMin: r, gainMapMax: i, maxDisplayBoost: a, hdrCapacityMin: o, hdrCapacityMax: s, sdr: c, gainMap: l }) {
		super({
			name: "GainMapDecoderMaterial",
			vertexShader: Ws,
			fragmentShader: Gs,
			uniforms: {
				sdr: { value: c },
				gainMap: { value: l },
				gamma: { value: new He(1 / e[0], 1 / e[1], 1 / e[2]) },
				offsetHdr: { value: new He().fromArray(t) },
				offsetSdr: { value: new He().fromArray(n) },
				gainMapMin: { value: new He().fromArray(r) },
				gainMapMax: { value: new He().fromArray(i) },
				weightFactor: { value: (Math.log2(a) - o) / (s - o) }
			},
			blending: 0,
			depthTest: !1,
			depthWrite: !1
		}), this._maxDisplayBoost = a, this._hdrCapacityMin = o, this._hdrCapacityMax = s, this.needsUpdate = !0, this.uniformsNeedUpdate = !0;
	}
	get sdr() {
		return this.uniforms.sdr.value;
	}
	set sdr(e) {
		this.uniforms.sdr.value = e;
	}
	get gainMap() {
		return this.uniforms.gainMap.value;
	}
	set gainMap(e) {
		this.uniforms.gainMap.value = e;
	}
	get offsetHdr() {
		return this.uniforms.offsetHdr.value.toArray();
	}
	set offsetHdr(e) {
		this.uniforms.offsetHdr.value.fromArray(e);
	}
	get offsetSdr() {
		return this.uniforms.offsetSdr.value.toArray();
	}
	set offsetSdr(e) {
		this.uniforms.offsetSdr.value.fromArray(e);
	}
	get gainMapMin() {
		return this.uniforms.gainMapMin.value.toArray();
	}
	set gainMapMin(e) {
		this.uniforms.gainMapMin.value.fromArray(e);
	}
	get gainMapMax() {
		return this.uniforms.gainMapMax.value.toArray();
	}
	set gainMapMax(e) {
		this.uniforms.gainMapMax.value.fromArray(e);
	}
	get gamma() {
		let e = this.uniforms.gamma.value;
		return [
			1 / e.x,
			1 / e.y,
			1 / e.z
		];
	}
	set gamma(e) {
		let t = this.uniforms.gamma.value;
		t.x = 1 / e[0], t.y = 1 / e[1], t.z = 1 / e[2];
	}
	get hdrCapacityMin() {
		return this._hdrCapacityMin;
	}
	set hdrCapacityMin(e) {
		this._hdrCapacityMin = e, this.calculateWeight();
	}
	get hdrCapacityMax() {
		return this._hdrCapacityMax;
	}
	set hdrCapacityMax(e) {
		this._hdrCapacityMax = e, this.calculateWeight();
	}
	get maxDisplayBoost() {
		return this._maxDisplayBoost;
	}
	set maxDisplayBoost(e) {
		this._maxDisplayBoost = Math.max(1, Math.min(65504, e)), this.calculateWeight();
	}
	calculateWeight() {
		let e = (Math.log2(this._maxDisplayBoost) - this._hdrCapacityMin) / (this._hdrCapacityMax - this._hdrCapacityMin);
		this.uniforms.weightFactor.value = Math.max(0, Math.min(1, e));
	}
}, qs = class extends Us {
	constructor(e, t) {
		super({
			renderer: e,
			createMaterial: (e) => new Ks(e),
			createQuadRenderer: (e) => new Fs(e)
		}, t);
	}
	async render(e, t, n, r) {
		let { sdrImage: i, gainMapImage: a, needsFlip: o } = await this.processImages(n, r, "flipY"), { gainMap: s, sdr: c } = this.createTextures(i, a, o);
		this.updateQuadRenderer(e, i, s, c, t), e.render();
	}
}, Js = class extends qs {
	load([e, t, n], r, i, a) {
		let o = this.prepareQuadRenderer(), s, c, l, u = async () => {
			if (s && c && l) {
				try {
					await this.render(o, l, s, c);
				} catch (r) {
					this.manager.itemError(e), this.manager.itemError(t), this.manager.itemError(n), typeof a == "function" && a(r), o.disposeOnDemandRenderer();
					return;
				}
				typeof r == "function" && r(o), this.manager.itemEnd(e), this.manager.itemEnd(t), this.manager.itemEnd(n), o.disposeOnDemandRenderer();
			}
		}, d = !0, f = 0, p = 0, h = !0, g = 0, _ = 0, v = !0, y = 0, b = 0, x = () => {
			if (typeof i == "function") {
				let e = f + g + y, t = p + _ + b;
				i(new ProgressEvent("progress", {
					lengthComputable: d && h && v,
					loaded: t,
					total: e
				}));
			}
		};
		this.manager.itemStart(e), this.manager.itemStart(t), this.manager.itemStart(n);
		let S = new m(this._internalLoadingManager);
		S.setResponseType("arraybuffer"), S.setRequestHeader(this.requestHeader), S.setPath(this.path), S.setWithCredentials(this.withCredentials), S.load(e, async (e) => {
			/* istanbul ignore if
			this condition exists only because of three.js types + strict mode
			*/
			if (typeof e == "string") throw Error("Invalid sdr buffer");
			s = e, await u();
		}, (e) => {
			d = e.lengthComputable, p = e.loaded, f = e.total, x();
		}, (t) => {
			this.manager.itemError(e), typeof a == "function" && a(t);
		});
		let C = new m(this._internalLoadingManager);
		C.setResponseType("arraybuffer"), C.setRequestHeader(this.requestHeader), C.setPath(this.path), C.setWithCredentials(this.withCredentials), C.load(t, async (e) => {
			/* istanbul ignore if
			this condition exists only because of three.js types + strict mode
			*/
			if (typeof e == "string") throw Error("Invalid gainmap buffer");
			c = e, await u();
		}, (e) => {
			h = e.lengthComputable, _ = e.loaded, g = e.total, x();
		}, (e) => {
			this.manager.itemError(t), typeof a == "function" && a(e);
		});
		let w = new m(this._internalLoadingManager);
		return w.setRequestHeader(this.requestHeader), w.setPath(this.path), w.setWithCredentials(this.withCredentials), w.load(n, async (e) => {
			/* istanbul ignore if
			this condition exists only because of three.js types + strict mode
			*/
			if (typeof e != "string") throw Error("Invalid metadata string");
			l = JSON.parse(e), await u();
		}, (e) => {
			v = e.lengthComputable, b = e.loaded, y = e.total, x();
		}, (e) => {
			this.manager.itemError(n), typeof a == "function" && a(e);
		}), o;
	}
}, Ys = class extends qs {
	load(e, t, n, r) {
		let i = this.prepareQuadRenderer(), a = new m(this._internalLoadingManager);
		return a.setResponseType("arraybuffer"), a.setRequestHeader(this.requestHeader), a.setPath(this.path), a.setWithCredentials(this.withCredentials), this.manager.itemStart(e), a.load(e, async (n) => {
			/* istanbul ignore if
			this condition exists only because of three.js types + strict mode
			*/
			if (typeof n == "string") throw Error("Invalid buffer, received [string], was expecting [ArrayBuffer]");
			let a = new Uint8Array(n), o, s, c;
			try {
				let e = await Vs(a);
				o = e.sdr, s = e.gainMap, c = e.metadata;
			} catch (t) {
				if (t instanceof Ls || t instanceof Is) console.warn(`Failure to reconstruct an HDR image from ${e}: Gain map metadata not found in the file, HDRJPGLoader will render the SDR jpeg`), c = {
					gainMapMin: [
						0,
						0,
						0
					],
					gainMapMax: [
						1,
						1,
						1
					],
					gamma: [
						1,
						1,
						1
					],
					hdrCapacityMin: 0,
					hdrCapacityMax: 1,
					offsetHdr: [
						0,
						0,
						0
					],
					offsetSdr: [
						0,
						0,
						0
					]
				}, o = a;
				else throw t;
			}
			try {
				await this.render(i, c, o.buffer, s?.buffer);
			} catch (t) {
				this.manager.itemError(e), typeof r == "function" && r(t), i.disposeOnDemandRenderer();
				return;
			}
			typeof t == "function" && t(i), this.manager.itemEnd(e), i.disposeOnDemandRenderer();
		}, n, (t) => {
			this.manager.itemError(e), typeof r == "function" && r(t);
		}), i;
	}
}, Xs = {
	apartment: "lebombo_1k.hdr",
	city: "potsdamer_platz_1k.hdr",
	dawn: "kiara_1_dawn_1k.hdr",
	forest: "forest_slope_1k.hdr",
	lobby: "st_fagans_interior_1k.hdr",
	night: "dikhololo_night_1k.hdr",
	park: "rooitou_park_1k.hdr",
	studio: "studio_small_03_1k.hdr",
	sunset: "venice_sunset_1k.hdr",
	warehouse: "empty_warehouse_01_1k.hdr"
}, Zs = "https://raw.githack.com/pmndrs/drei-assets/456060a26bbeb8fdf79326f224b6d99b8bcce736/hdri/", Qs = (e) => Array.isArray(e), $s = [
	"/px.png",
	"/nx.png",
	"/py.png",
	"/ny.png",
	"/pz.png",
	"/nz.png"
];
function ec({ files: e = $s, path: t = "", preset: n = void 0, colorSpace: r = void 0, extensions: i } = {}) {
	n && (rc(n), e = Xs[n], t = Zs);
	let a = Qs(e), { extension: o, isCubemap: s } = ic(e), c = ac(o);
	if (!c) throw Error("useEnvironment: Unrecognized file extension: " + e);
	let l = sr((e) => e.gl);
	(0, F.useLayoutEffect)(() => {
		if (o !== "webp" && o !== "jpg" && o !== "jpeg") return;
		function t() {
			fr.clear(c, a ? [e] : e);
		}
		l.domElement.addEventListener("webglcontextlost", t, { once: !0 });
	}, [e, l.domElement]);
	let u = fr(c, a ? [e] : e, (e) => {
		(o === "webp" || o === "jpg" || o === "jpeg") && e.setRenderer(l), e.setPath == null || e.setPath(t), i && i(e);
	}), d = a ? u[0] : u;
	return (o === "jpg" || o === "jpeg" || o === "webp") && (d = d.renderTarget?.texture), d.mapping = s ? 301 : 303, d.colorSpace = r ?? (s ? "srgb" : "srgb-linear"), d;
}
var tc = {
	files: $s,
	path: "",
	preset: void 0,
	extensions: void 0
};
ec.preload = (e) => {
	let t = {
		...tc,
		...e
	}, { files: n, path: r = "" } = t, { preset: i, extensions: a } = t;
	i && (rc(i), n = Xs[i], r = Zs);
	let { extension: o } = ic(n);
	if (o === "webp" || o === "jpg" || o === "jpeg") throw Error("useEnvironment: Preloading gainmaps is not supported");
	let s = ac(o);
	if (!s) throw Error("useEnvironment: Unrecognized file extension: " + n);
	fr.preload(s, Qs(n) ? [n] : n, (e) => {
		e.setPath == null || e.setPath(r), a && a(e);
	});
};
var nc = {
	files: $s,
	preset: void 0
};
ec.clear = (e) => {
	let t = {
		...nc,
		...e
	}, { files: n } = t, { preset: r } = t;
	r && (rc(r), n = Xs[r]);
	let { extension: i } = ic(n), a = ac(i);
	if (!a) throw Error("useEnvironment: Unrecognized file extension: " + n);
	fr.clear(a, Qs(n) ? [n] : n);
};
function rc(e) {
	if (!(e in Xs)) throw Error("Preset must be one of: " + Object.keys(Xs).join(", "));
}
function ic(e) {
	var t;
	let n = Qs(e) && e.length === 6, r = Qs(e) && e.length === 3 && e.some((e) => e.endsWith("json")), i = Qs(e) ? e[0] : e;
	return {
		extension: n ? "cube" : r ? "webp" : i.startsWith("data:application/exr") ? "exr" : i.startsWith("data:application/hdr") ? "hdr" : i.startsWith("data:image/jpeg") ? "jpg" : (t = i.split(".").pop()) == null || (t = t.split("?")) == null || (t = t.shift()) == null ? void 0 : t.toLowerCase(),
		isCubemap: n,
		isGainmap: r
	};
}
function ac(e) {
	return e === "cube" ? O : e === "hdr" ? Mo : e === "exr" ? Po : e === "jpg" || e === "jpeg" ? Ys : e === "webp" ? Js : null;
}
//#endregion
//#region node_modules/@react-three/drei/core/Environment.js
var oc = (e) => e.current && e.current.isScene, sc = (e) => oc(e) ? e.current : e;
function cc(e, t, n, r, i = {}) {
	var a, o;
	i = {
		backgroundBlurriness: 0,
		backgroundIntensity: 1,
		backgroundRotation: [
			0,
			0,
			0
		],
		environmentIntensity: 1,
		environmentRotation: [
			0,
			0,
			0
		],
		...i
	};
	let s = sc(t || n), c = s.background, l = s.environment, u = {
		backgroundBlurriness: s.backgroundBlurriness,
		backgroundIntensity: s.backgroundIntensity,
		backgroundRotation: ((a = s.backgroundRotation) == null || a.clone == null ? void 0 : a.clone()) ?? [
			0,
			0,
			0
		],
		environmentIntensity: s.environmentIntensity,
		environmentRotation: ((o = s.environmentRotation) == null || o.clone == null ? void 0 : o.clone()) ?? [
			0,
			0,
			0
		]
	};
	return e !== "only" && (s.environment = r), e && (s.background = r), Bn(s, i), () => {
		e !== "only" && (s.environment = l), e && (s.background = c), Bn(s, u);
	};
}
function lc({ scene: e, background: t = !1, map: n, ...r }) {
	let i = sr((e) => e.scene);
	return F.useLayoutEffect(() => {
		if (n) return cc(t, e, i, n, r);
	}), null;
}
function uc({ background: e = !1, scene: t, blur: n, backgroundBlurriness: r, backgroundIntensity: i, backgroundRotation: a, environmentIntensity: o, environmentRotation: s, ...c }) {
	let l = ec(c), u = sr((e) => e.scene);
	return F.useLayoutEffect(() => cc(e, t, u, l, {
		backgroundBlurriness: n ?? r,
		backgroundIntensity: i,
		backgroundRotation: a,
		environmentIntensity: o,
		environmentRotation: s
	})), F.useEffect(() => () => {
		l.dispose();
	}, [l]), null;
}
function dc({ children: e, near: t = .1, far: n = 1e3, resolution: r = 256, frames: i = 1, map: a, background: o = !1, blur: s, backgroundBlurriness: c, backgroundIntensity: l, backgroundRotation: u, environmentIntensity: d, environmentRotation: f, scene: p, files: m, path: h, preset: g = void 0, extensions: _ }) {
	let v = sr((e) => e.gl), y = sr((e) => e.scene), b = F.useRef(null), [x] = F.useState(() => new et()), S = F.useMemo(() => {
		let e = new Se(r);
		return e.texture.type = he, e;
	}, [r]);
	F.useEffect(() => () => {
		S.dispose();
	}, [S]), F.useLayoutEffect(() => {
		if (i === 1) {
			let e = v.autoClear;
			v.autoClear = !0, b.current.update(v, x), v.autoClear = e;
		}
		return cc(o, p, y, S.texture, {
			backgroundBlurriness: s ?? c,
			backgroundIntensity: l,
			backgroundRotation: u,
			environmentIntensity: d,
			environmentRotation: f
		});
	}, [
		e,
		x,
		S.texture,
		p,
		y,
		o,
		i,
		v
	]);
	let C = 1;
	return cr(() => {
		if (i === Infinity || C < i) {
			let e = v.autoClear;
			v.autoClear = !0, b.current.update(v, x), v.autoClear = e, C++;
		}
	}), /*#__PURE__*/ F.createElement(F.Fragment, null, Di(/*#__PURE__*/ F.createElement(F.Fragment, null, e, /*#__PURE__*/ F.createElement("cubeCamera", {
		ref: b,
		args: [
			t,
			n,
			S
		]
	}), m || g ? /*#__PURE__*/ F.createElement(uc, {
		background: !0,
		files: m,
		preset: g,
		path: h,
		extensions: _
	}) : a ? /*#__PURE__*/ F.createElement(lc, {
		background: !0,
		map: a,
		extensions: _
	}) : null), x));
}
function fc(e) {
	let t = ec(e), n = e.map || t;
	F.useMemo(() => Ir({ GroundProjectedEnvImpl: ka }), []), F.useEffect(() => () => {
		t.dispose();
	}, [t]);
	let r = F.useMemo(() => [n], [n]), i = e.ground?.height, a = e.ground?.radius, o = e.ground?.scale ?? 1e3;
	return /*#__PURE__*/ F.createElement(F.Fragment, null, /*#__PURE__*/ F.createElement(lc, Mt({}, e, { map: n })), /*#__PURE__*/ F.createElement("groundProjectedEnvImpl", {
		args: r,
		scale: o,
		height: i,
		radius: a
	}));
}
function pc(e) {
	return e.ground ? /*#__PURE__*/ F.createElement(fc, e) : e.map ? /*#__PURE__*/ F.createElement(lc, e) : e.children ? /*#__PURE__*/ F.createElement(dc, e) : /*#__PURE__*/ F.createElement(uc, e);
}
//#endregion
//#region node_modules/@react-three/drei/core/Lightformer.js
var mc = /* @__PURE__ */ F.forwardRef(({ light: e, args: t, map: n, toneMapped: r = !1, color: i = "white", form: a = "rect", intensity: o = 1, scale: s = 1, target: c = [
	0,
	0,
	0
], children: l, ...u }, d) => {
	let f = F.useRef(null);
	return F.useImperativeHandle(d, () => f.current, []), F.useLayoutEffect(() => {
		!l && !u.material && (Bn(f.current.material, { color: i }), f.current.material.color.multiplyScalar(o));
	}, [
		i,
		o,
		l,
		u.material
	]), F.useLayoutEffect(() => {
		u.rotation || f.current.quaternion.identity(), c && !u.rotation && (typeof c == "boolean" ? f.current.lookAt(0, 0, 0) : f.current.lookAt(Array.isArray(c) ? new He(...c) : c));
	}, [c, u.rotation]), s = Array.isArray(s) && s.length === 2 ? [
		s[0],
		s[1],
		1
	] : s, /*#__PURE__*/ F.createElement("mesh", Mt({
		ref: f,
		scale: s
	}, u), a === "circle" ? /*#__PURE__*/ F.createElement("ringGeometry", { args: t || [
		0,
		.5,
		64
	] }) : a === "ring" ? /*#__PURE__*/ F.createElement("ringGeometry", { args: t || [
		.25,
		.5,
		64
	] }) : a === "rect" || a === "plane" ? /*#__PURE__*/ F.createElement("planeGeometry", { args: t || [1, 1] }) : a === "box" ? /*#__PURE__*/ F.createElement("boxGeometry", { args: t || [
		1,
		1,
		1
	] }) : /*#__PURE__*/ F.createElement(a, { args: t }), l || /*#__PURE__*/ F.createElement("meshBasicMaterial", {
		toneMapped: r,
		map: n,
		side: 2
	}), e && /*#__PURE__*/ F.createElement("pointLight", Mt({ castShadow: !0 }, e)));
}), hc = /* @__PURE__ */ (0, F.createContext)(null);
function gc({ iterations: e = 10, ms: t = 250, threshold: n = .75, step: r = .1, factor: i = .5, flipflops: a = Infinity, bounds: o = (e) => e > 100 ? [60, 100] : [40, 60], onIncline: s, onDecline: c, onChange: l, onFallback: u, children: d }) {
	let [f, p] = (0, F.useState)(() => ({
		fps: 0,
		index: 0,
		factor: i,
		flipped: 0,
		refreshrate: 0,
		fallback: !1,
		frames: [],
		averages: [],
		subscriptions: /* @__PURE__ */ new Map(),
		subscribe: (e) => {
			let t = Symbol();
			return f.subscriptions.set(t, e.current), () => void f.subscriptions.delete(t);
		}
	})), m = 0;
	return cr(() => {
		let { frames: i, averages: d } = f;
		if (!f.fallback && d.length < e) {
			i.push(performance.now());
			let p = i[i.length - 1] - i[0];
			if (p >= t) {
				if (f.fps = Math.round(i.length / p * 1e3 * 1) / 1, f.refreshrate = Math.max(f.refreshrate, f.fps), d[f.index++ % e] = f.fps, d.length === e) {
					let [t, i] = o(f.refreshrate), p = d.filter((e) => e >= i), h = d.filter((e) => e < t);
					p.length > e * n && (f.factor = Math.min(1, f.factor + r), f.flipped++, s && s(f), f.subscriptions.forEach((e) => e.onIncline && e.onIncline(f))), h.length > e * n && (f.factor = Math.max(0, f.factor - r), f.flipped++, c && c(f), f.subscriptions.forEach((e) => e.onDecline && e.onDecline(f))), m !== f.factor && (m = f.factor, l && l(f), f.subscriptions.forEach((e) => e.onChange && e.onChange(f))), f.flipped > a && !f.fallback && (f.fallback = !0, u && u(f), f.subscriptions.forEach((e) => e.onFallback && e.onFallback(f))), f.averages = [];
				}
				f.frames = [];
			}
		}
	}), /*#__PURE__*/ F.createElement(hc.Provider, { value: f }, d);
}
//#endregion
//#region node_modules/@react-three/postprocessing/dist/index.js
var _c = /* @__PURE__ */ (0, F.createContext)(null), vc = /* @__PURE__ */ (0, F.createContext)(null), yc = /* @__PURE__ */ new WeakMap(), bc = /* @__PURE__ */ new WeakSet();
function xc(e, t) {
	for (let n of e) yc.set(n, (yc.get(n) ?? 0) + t);
}
function Sc({ children: e, enabled: t = !0 }) {
	let [n, r] = (0, F.useState)([]), i = (0, F.useMemo)(() => ({
		selected: n,
		select: r,
		enabled: t
	}), [
		n,
		r,
		t
	]);
	return /* @__PURE__ */ (0, I.jsx)(_c.Provider, {
		value: i,
		children: e
	});
}
function Cc(e) {
	let t = e;
	return !!(t.isMesh || t.isLine || t.isPoints);
}
function wc(e, t) {
	if (!bc.has(e)) {
		Cc(e) && t.push(e);
		for (let n of e.children) wc(n, t);
	}
}
function Tc({ enabled: e = !1, exclude: t = !1, children: n, ...r }) {
	let i = (0, F.useRef)(null), a = (0, F.use)(_c)?.select, o = (0, F.use)(vc), s = (0, F.useRef)([]), [c, l] = (0, F.useReducer)((e) => e + 1, 0), u = (0, F.useCallback)(() => {
		l(), o?.();
	}, [o]);
	return (0, F.useLayoutEffect)(() => {
		if (!t) return;
		let e = i.current;
		return bc.add(e), o?.(), () => {
			bc.delete(e), o?.();
		};
	}, [t, o]), (0, F.useEffect)(() => {
		if (!a) return;
		let n = [];
		if (e && !t) for (let e of i.current.children) wc(e, n);
		let r = s.current;
		s.current = n, xc(r, -1), xc(n, 1), a((e) => {
			let t = new Set(e), i = n.filter((e) => !t.has(e)), a = r.filter((e) => t.has(e) && !yc.get(e));
			if (!i.length && !a.length) return e;
			let o = a.length ? new Set(a) : null, s = o ? e.filter((e) => !o.has(e)) : e;
			return i.length ? [...s, ...i] : s;
		});
	}, [
		e,
		t,
		n,
		a,
		c
	]), (0, F.useEffect)(() => () => {
		if (!a || !s.current.length) return;
		let e = new Set(s.current);
		xc(s.current, -1), s.current = [], a((t) => {
			let n = t.filter((t) => !e.has(t) || yc.get(t));
			return n.length === t.length ? t : n;
		});
	}, [a]), /* @__PURE__ */ (0, I.jsx)(vc.Provider, {
		value: u,
		children: /* @__PURE__ */ (0, I.jsx)("group", {
			ref: i,
			...r,
			children: n
		})
	});
}
var Ec = [], Dc = (e) => typeof e == "object" && e && "current" in e ? e.current : e;
function Oc(e, t) {
	return (0, F.useCallback)((n) => {
		if (e.current = n, typeof t != "function") {
			t && (t.current = n);
			return;
		}
		let r = t(n);
		if (typeof r == "function") return () => {
			e.current = null, r();
		};
	}, [e, t]);
}
function kc(e, t) {
	let n = e.__r3f;
	return n ? n.children.map((e) => e.object).filter(t) : [];
}
function Ac(e, t) {
	let n = e.current;
	return t.length === n.length && t.every((e, t) => e === n[t]) ? !1 : (e.current = t, !0);
}
function jc(e, t, n) {
	let r = sr((e) => e.invalidate), i = (0, F.use)(_c);
	(0, F.useEffect)(() => {
		e.selection.layer = n, r();
	}, [
		e,
		r,
		n
	]), (0, F.useEffect)(() => {
		if (i) return;
		let n = (Array.isArray(t) ? t.map((e) => Dc(e)) : [Dc(t)]).filter((e) => e != null);
		if (n.length) return e.selection.set(n), r(), () => {
			e.selection.clear(), r();
		};
	}, [
		e,
		t,
		i,
		r
	]), (0, F.useEffect)(() => {
		if (i && i.enabled && i.selected?.length) return e.selection.set(i.selected), r(), () => {
			e.selection.clear(), r();
		};
	}, [
		i,
		e.selection,
		r
	]);
}
var Mc = (e) => {
	(0, F.useEffect)(() => () => {
		e?.dispose?.();
	}, [e]);
};
function Nc(e, t) {
	let n = e;
	for (let e of t.split("-")) {
		if (n == null) return;
		n = n[e];
	}
	return n;
}
function Pc(e, t, n) {
	let r = t.split("-"), i = e;
	for (let e = 0; e < r.length - 1; e++) {
		if (i == null) return;
		i = i[r[e]];
	}
	i != null && (i[r[r.length - 1]] = n);
}
function Fc(e, t, n, r = Nc, i = Pc) {
	let a = (0, F.useRef)(null), o = sr((e) => e.invalidate);
	(0, F.useLayoutEffect)(() => {
		let s = Dc(e);
		if (!s) return;
		a.current?.instance !== s && (a.current = {
			instance: s,
			defaults: /* @__PURE__ */ new Map(),
			applied: /* @__PURE__ */ new Map()
		});
		let { defaults: c, applied: l } = a.current, u = !1;
		for (let e of n) {
			if (!c.has(e)) {
				let t = r(s, e);
				c.set(e, t), l.set(e, t);
			}
			let n = t[e] === void 0 ? c.get(e) : t[e];
			Object.is(l.get(e), n) || (i(s, e, n), l.set(e, n), u = !0);
		}
		u && o();
	});
}
var Ic = /* @__PURE__ */ new WeakMap(), Lc = 0, Rc = ["blendMode-blendFunction", "blendMode-opacity-value"];
function zc(e) {
	return function({ blendFunction: t, opacity: n, ref: r, ...i }) {
		let a = Ic.get(e);
		if (!a) {
			let t = `@react-three/postprocessing/${e.name}-${Lc++}`;
			Ir({ [t]: e }), Ic.set(e, a = t);
		}
		let o = sr((e) => e.camera), s = (0, F.useRef)(null), c = Oc(s, r);
		return Fc(s, {
			"blendMode-blendFunction": t,
			"blendMode-opacity-value": n
		}, Rc), /* @__PURE__ */ (0, I.jsx)(a, {
			ref: c,
			camera: o,
			...i
		});
	};
}
var Bc = /* @__PURE__ */ (0, F.createContext)(null), Vc = (e) => (e.getAttributes() & 2) == 2, Hc = (e) => /mainUv/.test(e.getFragmentShader() ?? "");
function Uc(e) {
	let t = /* @__PURE__ */ new WeakMap();
	return {
		acquire(n, r) {
			let i = t.get(n);
			i ? (i.count++, i.forcedValue = r) : t.set(n, {
				count: 1,
				original: n[e],
				forcedValue: r
			});
		},
		release(n) {
			let r = t.get(n);
			r && --r.count <= 0 && (n[e] === r.forcedValue && (n[e] = r.original), t.delete(n));
		}
	};
}
var Wc = /* @__PURE__ */ Uc("autoClear"), Gc = /* @__PURE__ */ Uc("toneMapping"), Kc = /* @__PURE__ */ new M(), qc = (e, t) => new Pe(e, t), Jc = /* @__PURE__ */ new WeakSet(), Yc = /* @__PURE__ */ new WeakSet();
function Xc(e) {
	e instanceof Ve && e.setEffects([]), We.prototype.dispose.call(e);
}
function Zc(e) {
	Jc.has(e) && Xc(e);
}
function Qc(e, t, n) {
	let r = [];
	for (let i = 0; i < e.length; i++) {
		let a = e[i];
		if (a instanceof rt) {
			let o = [a], s = Vc(a), c = Hc(a);
			if (n !== "none") {
				let t;
				for (; (t = e[i + 1]) instanceof rt;) {
					let e = Vc(t), r = Hc(t);
					if (n === "auto" && (s && e || s && r || c && e)) break;
					o.push(t), s ||= e, c ||= r, i++;
				}
			}
			let l = new Ve(t, ...o);
			Jc.add(l), r.push(l);
		} else a instanceof We && r.push(a);
	}
	return r;
}
var $c = /* @__PURE__ */ (0, F.memo)(function({ children: e, camera: t, scene: n, resolutionScale: r, enabled: i = !0, renderPriority: a = 1, autoClear: o = !0, autoRenderToScreen: s = !0, depthBuffer: c, enableNormalPass: l, stencilBuffer: u, multisampling: d = 4, frameBufferType: f = he, renderPass: p = qc, mergeMode: m = "auto", ref: h }) {
	let { gl: g, scene: _, camera: v } = sr(), y = n || _, b = t || v;
	g.getSize(Kc);
	let [x, S] = (0, F.useState)(null), [, C] = (0, F.useReducer)((e) => e + 1, 0);
	(0, F.useEffect)(() => {
		Wc.acquire(g, !1);
		let e = new j(g, {
			depthBuffer: c,
			stencilBuffer: u,
			multisampling: d,
			frameBufferType: f
		});
		e.autoRenderToScreen = s, e.addPass(p(y, b));
		let t = null, n = null;
		return l && (t = new ke(y, b), t.enabled = !1, e.addPass(t), r !== void 0 && (n = new be({
			normalBuffer: t.texture,
			resolutionScale: r
		}), n.enabled = !1, e.addPass(n))), e.setSize(Kc.width, Kc.height), S({
			composer: e,
			normalPass: t,
			downSamplingPass: n
		}), () => {
			for (let t of e.passes) Zc(t);
			e.dispose(), Wc.release(g);
		};
	}, [
		b,
		g,
		c,
		u,
		d,
		f,
		s,
		p,
		y,
		l,
		r
	]);
	let w = (0, F.useRef)({
		width: -1,
		height: -1,
		pixelRatio: -1
	});
	cr((e, t) => {
		if (!i || !x) return;
		let { composer: n } = x;
		g.getSize(Kc);
		let r = g.getPixelRatio(), a = w.current;
		(Kc.width !== a.width || Kc.height !== a.height || r !== a.pixelRatio) && (n.setSize(Kc.width, Kc.height), a.width = Kc.width, a.height = Kc.height, a.pixelRatio = r);
		let s = g.autoClear;
		g.autoClear = o, u && !o && g.clearStencil(), n.render(t), g.autoClear = s;
	}, i ? a : 0);
	let T = (0, F.useRef)(null), E = (0, F.useRef)([]), [D, ee] = (0, F.useState)(0);
	(0, F.useLayoutEffect)(() => {
		if (!x) return;
		let e = kc(T.current, (e) => e instanceof rt || e instanceof We);
		Ac(E, e) && ee((e) => e + 1);
	}), (0, F.useLayoutEffect)(() => {
		if (!x) return;
		let { composer: e, normalPass: t, downSamplingPass: n } = x, r = Qc(E.current, b, m);
		if (r.some((e) => Yc.has(e))) {
			let e = new Ie();
			Jc.add(e), r.push(e);
		}
		for (let t of r) e.addPass(t);
		return r.length && (t && (t.enabled = !0), n && (n.enabled = !0)), () => {
			for (let t of r) e.removePass(t), Zc(t);
			t && (t.enabled = !1), n && (n.enabled = !1);
		};
	}, [
		x,
		D,
		b,
		m
	]), (0, F.useEffect)(() => (Gc.acquire(g, 0), g.toneMapping = 0, () => {
		Gc.release(g);
	}), [g]);
	let te = (0, F.useMemo)(() => x ? {
		composer: x.composer,
		normalPass: x.normalPass,
		downSamplingPass: x.downSamplingPass,
		resolutionScale: r,
		camera: b,
		scene: y,
		requestRebuild: C,
		autoClear: o
	} : null, [
		x,
		r,
		b,
		y,
		C,
		o
	]);
	return (0, F.useImperativeHandle)(h, () => x?.composer, [x]), te ? /* @__PURE__ */ (0, I.jsx)(Bc.Provider, {
		value: te,
		children: /* @__PURE__ */ (0, I.jsx)("group", {
			ref: T,
			children: e
		})
	}) : null;
}), el = [
	"blendMode-blendFunction",
	"blendMode-opacity-value",
	"bokehScale",
	"cocMaterial-focusDistance",
	"cocMaterial-focusRange",
	"depthTexture"
];
function tl(e, t) {
	if (t !== "depthTexture") return Nc(e, t);
	let n = e.cocMaterial.uniforms.depthBuffer.value;
	return n ? { texture: n } : void 0;
}
function nl(e, t, n) {
	if (t === "depthTexture") {
		let t = n;
		e.setDepthTexture(t?.texture, t?.packing);
	} else Pc(e, t, n);
}
function rl({ ref: e, blendFunction: t, opacity: n, worldFocusDistance: r, worldFocusRange: i, focusDistance: a, focusRange: o, focalLength: s, bokehScale: c, resolutionScale: l, resolutionX: u, resolutionY: d, width: f, height: p, target: m, depthTexture: h, ...g }) {
	let { camera: _ } = (0, F.use)(Bc), v = m != null, y = (0, F.useMemo)(() => {
		let e = new Je(_, {
			worldFocusDistance: r,
			worldFocusRange: i,
			focalLength: s,
			resolutionScale: l,
			resolutionX: u,
			resolutionY: d,
			width: f,
			height: p
		});
		return v && (e.target = new He()), e.maskFunction = Te.MULTIPLY_RGB_SET_ALPHA, e;
	}, [
		_,
		r,
		i,
		s,
		l,
		u,
		d,
		f,
		p,
		v
	]);
	return Fc(y, {
		"blendMode-blendFunction": t,
		"blendMode-opacity-value": n,
		bokehScale: c,
		"cocMaterial-focusDistance": a,
		"cocMaterial-focusRange": o,
		depthTexture: h
	}, el, tl, nl), Mc(y), /* @__PURE__ */ (0, I.jsx)("primitive", {
		...g,
		object: y,
		ref: e,
		target: m
	});
}
var il = /* @__PURE__ */ zc(Ge);
function al({ blendFunction: e = 0, luminanceThreshold: t, luminanceSmoothing: n, mipmapBlur: r, radius: i, levels: a, resolutionScale: o, resolutionX: s, resolutionY: c, ...l }) {
	let u = (0, F.useMemo)(() => [{
		luminanceThreshold: t,
		luminanceSmoothing: n,
		mipmapBlur: r,
		radius: i,
		levels: a,
		resolutionScale: o,
		resolutionX: s,
		resolutionY: c
	}], [
		t,
		n,
		r,
		i,
		a,
		o,
		s,
		c
	]);
	return /* @__PURE__ */ (0, I.jsx)(il, {
		blendFunction: e,
		args: u,
		...l
	});
}
var ol = /* @__PURE__ */ zc(tt), sl = /* @__PURE__ */ zc(lt), cl = [
	"patternTexture",
	"patternScale",
	"edgeStrength",
	"pulseSpeed",
	"visibleEdgeColor",
	"hiddenEdgeColor",
	"multisampling",
	"width",
	"height",
	"kernelSize",
	"blur",
	"xRay",
	"dithering",
	"blendMode-blendFunction",
	"blendMode-opacity-value"
];
function ll(e, t, n) {
	t === "visibleEdgeColor" || t === "hiddenEdgeColor" ? Pc(e, t, new f(n)) : Pc(e, t, n);
}
function ul({ selection: e = Ec, selectionLayer: t = 10, blendFunction: n, opacity: r, resolutionScale: i, resolutionX: a, resolutionY: o, ref: s, ...c }) {
	let { scene: l, camera: u, autoClear: d } = (0, F.use)(Bc), f = (0, F.useMemo)(() => new Ze(l, u, {
		resolutionScale: i,
		resolutionX: a,
		resolutionY: o
	}), [
		l,
		u,
		i,
		a,
		o
	]);
	return (0, F.useEffect)(() => {
		d !== !1 && console.warn("Outline requires <EffectComposer autoClear={false}> to render correctly.");
	}, [d]), Fc(f, {
		...c,
		"blendMode-blendFunction": n,
		"blendMode-opacity-value": r
	}, cl, Nc, ll), jc(f, e, t), Mc(f), /* @__PURE__ */ (0, I.jsx)("primitive", {
		ref: s,
		object: f
	});
}
var dl = /* @__PURE__ */ zc(Me);
function fl({ preset: e, edgeDetectionMode: t, predicationMode: n, ...r }) {
	let i = (0, F.useMemo)(() => [{
		preset: e,
		edgeDetectionMode: t,
		predicationMode: n
	}], [
		e,
		t,
		n
	]);
	return /* @__PURE__ */ (0, I.jsx)(dl, {
		args: i,
		...r
	});
}
var pl = /* @__PURE__ */ zc(ve);
function ml({ minLuminance: e, maxLuminance: t, ...n }) {
	let r = (0, F.useMemo)(() => [{
		minLuminance: e,
		maxLuminance: t
	}], [e, t]);
	return /* @__PURE__ */ (0, I.jsx)(pl, {
		args: r,
		...n
	});
}
var hl = /* @__PURE__ */ zc(_t);
function gl({ enabled: e = !0, halfRes: t, screenSpaceRadius: n, quality: r, depthAwareUpsampling: i = !0, aoRadius: a = 5, aoSamples: o = 16, denoiseSamples: s = 4, denoiseRadius: c = 12, distanceFalloff: l = 1, intensity: u = 1, color: d, renderMode: f = 0, ref: p }) {
	let { camera: m, scene: h, invalidate: g } = sr(), _ = (0, F.useMemo)(() => {
		let e = new ot(h, m);
		return Yc.add(e), e;
	}, [m, h]);
	return Mc(_), (0, F.useLayoutEffect)(() => {
		_.enabled = e, g();
	}, [
		_,
		e,
		g
	]), (0, F.useLayoutEffect)(() => {
		Bn(_.configuration, {
			color: d,
			aoRadius: a,
			distanceFalloff: l,
			intensity: u,
			aoSamples: o,
			denoiseSamples: s,
			denoiseRadius: c,
			screenSpaceRadius: n,
			renderMode: f,
			halfRes: t,
			depthAwareUpsampling: i
		}), g();
	}, [
		n,
		d,
		a,
		l,
		u,
		o,
		s,
		c,
		f,
		t,
		i,
		_,
		g
	]), (0, F.useLayoutEffect)(() => {
		r && (_.setQualityMode(r.charAt(0).toUpperCase() + r.slice(1)), g());
	}, [
		_,
		r,
		g
	]), /* @__PURE__ */ (0, I.jsx)("primitive", {
		ref: p,
		object: _
	});
}
//#endregion
export { Dt as C, kt as S, V as _, sl as a, sr as b, fl as c, ml as d, hl as f, js as g, pc as h, $c as i, Tc as l, mc as m, ol as n, gl as o, gc as p, rl as r, ul as s, al as t, Sc as u, Vi as v, xt as w, jt as x, cr as y };
