//#region src/three/views.ts
var e = {
	global: {
		pos: [
			-2.9,
			1.75,
			2.5
		],
		target: [
			0,
			.6,
			.15
		]
	},
	driver: {
		pos: [
			-.4,
			1.12,
			.2
		],
		target: [
			-.38,
			.84,
			-.7
		]
	},
	passenger: {
		pos: [
			.4,
			1.12,
			.2
		],
		target: [
			-.3,
			.78,
			-.5
		]
	},
	rear: {
		pos: [
			-1.9,
			1.15,
			1.7
		],
		target: [
			0,
			.55,
			.92
		]
	},
	seats: {
		pos: [
			-1.75,
			1,
			.7
		],
		target: [
			-.2,
			.55,
			.05
		]
	},
	wheel: {
		pos: [
			-.62,
			1.06,
			.15
		],
		target: [
			-.38,
			.82,
			-.42
		]
	},
	roof: {
		pos: [
			0,
			.62,
			.55
		],
		target: [
			0,
			1.15,
			-.05
		]
	},
	door: {
		pos: [
			-1.45,
			.95,
			.3
		],
		target: [
			-.74,
			.72,
			.12
		]
	},
	belts: {
		pos: [
			.05,
			1.05,
			-.5
		],
		target: [
			-.4,
			.8,
			.2
		]
	}
}, t = {
	global: "Vue globale",
	driver: "Conducteur",
	passenger: "Passager",
	rear: "Arrière",
	seats: "Sièges",
	wheel: "Volant",
	roof: "Ciel de toit",
	door: "Portes",
	belts: "Ceintures"
}, n = [
	"global",
	"driver",
	"passenger",
	"rear"
], r = { current: null };
//#endregion
export { t as i, n, e as r, r as t };
