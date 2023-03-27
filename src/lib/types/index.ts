export type Scale =
	| 'major'
	| 'natural-minor'
	| 'harmonic-minor'
	| 'melodic-minor'
	| 'pentatonic-major'
	| 'pentatonic-minor';

export type Instrument = 'guitar' | 'bass';

export interface InstrumentInfo {
	name: string;
	value: Instrument;
	pitchStart: number;
}

export type Note = {
	label: string;
	pitchOffset: number;
	enharmonic?: boolean
};
