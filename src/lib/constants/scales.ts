import { IN_SCALE, NOT_IN_SCALE, type Scale, type ScaleInfo } from '$lib/types';

const SCALE_MAJOR: Scale = [
	IN_SCALE,
	NOT_IN_SCALE,
	IN_SCALE,
	NOT_IN_SCALE,
	IN_SCALE,
	IN_SCALE,
	NOT_IN_SCALE,
	IN_SCALE,
	NOT_IN_SCALE,
	IN_SCALE,
	NOT_IN_SCALE,
	IN_SCALE
];

const SCALE_MINOR: Scale = [
	IN_SCALE,
	NOT_IN_SCALE,
	IN_SCALE,
	IN_SCALE,
	NOT_IN_SCALE,
	IN_SCALE,
	NOT_IN_SCALE,
	IN_SCALE,
	IN_SCALE,
	NOT_IN_SCALE,
	IN_SCALE,
	NOT_IN_SCALE
];

const SCALE_HARMONIC_MINOR: Scale = [
	IN_SCALE,
	NOT_IN_SCALE,
	IN_SCALE,
	IN_SCALE,
	NOT_IN_SCALE,
	IN_SCALE,
	NOT_IN_SCALE,
	IN_SCALE,
	IN_SCALE,
	NOT_IN_SCALE,
	NOT_IN_SCALE,
	IN_SCALE
];

const SCALE_MELODIC_MINOR: Scale = [
	IN_SCALE,
	NOT_IN_SCALE,
	IN_SCALE,
	IN_SCALE,
	NOT_IN_SCALE,
	IN_SCALE,
	NOT_IN_SCALE,
	IN_SCALE,
	NOT_IN_SCALE,
	IN_SCALE,
	NOT_IN_SCALE,
	IN_SCALE
];

const SCALE_PENTATONIC_MAJOR: Scale = [
	IN_SCALE,
	NOT_IN_SCALE,
	IN_SCALE,
	NOT_IN_SCALE,
	IN_SCALE,
	NOT_IN_SCALE,
	NOT_IN_SCALE,
	IN_SCALE,
	NOT_IN_SCALE,
	IN_SCALE,
	NOT_IN_SCALE,
	NOT_IN_SCALE
];

const SCALE_PENTATONIC_MINOR: Scale = [
	IN_SCALE,
	NOT_IN_SCALE,
	NOT_IN_SCALE,
	IN_SCALE,
	NOT_IN_SCALE,
	IN_SCALE,
	NOT_IN_SCALE,
	IN_SCALE,
	NOT_IN_SCALE,
	NOT_IN_SCALE,
	IN_SCALE,
	NOT_IN_SCALE
];

export const SCALES: ScaleInfo[] = [
	{ label: 'Major', type: 'major', scale: SCALE_MAJOR },
	{ label: 'Natural Minor', type: 'natural-minor', scale: SCALE_MINOR },
	{ label: 'Harmonic Minor', type: 'harmonic-minor', scale: SCALE_HARMONIC_MINOR },
	{ label: 'Melodic Minor', type: 'melodic-minor', scale: SCALE_MELODIC_MINOR },
	{ label: 'Pentatonic Major', type: 'pentatonic-major', scale: SCALE_PENTATONIC_MINOR },
	{ label: 'Pentatonic Minor', type: 'pentatonic-minor', scale: SCALE_PENTATONIC_MAJOR }
];
