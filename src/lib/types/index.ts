export const NOT_IN_SCALE = 0 as const;
export const IN_SCALE = 1 as const;

export type Scale = Array<typeof NOT_IN_SCALE | typeof IN_SCALE>;

export type ScaleType =
	| 'major'
	| 'natural-minor'
	| 'harmonic-minor'
	| 'melodic-minor'
	| 'pentatonic-major'
	| 'pentatonic-minor';

export interface ScaleInfo {
	label: string;
	type: ScaleType;
	scale: Scale; // TODO change ambiguous naming
}

export type InstrumentType = 'bass' | 'guitar' | 'keyboard';

export interface InstrumentInfo {
	name: string;
	type: InstrumentType;
}

export type Note = {
	label: string;
	pitchOffset: number;
	enharmonic?: boolean;
};
