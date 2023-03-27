export type Scale =
	| 'major'
	| 'natural-minor'
	| 'harmonic-minor'
	| 'melodic-minor'
	| 'pentatonic-major'
	| 'pentatonic-minor';

export type Instrument = 'guitar' | 'bass';

export type Note = { label: string; offset: number };
