import type { InstrumentInfo } from '$lib/types';

export const GUITAR_PITCH_OFFSET = 4; // lowest pitch is E, which is C + 4 semitones

export const intruments: InstrumentInfo[] = [
	{ name: 'Bass', value: 'bass', pitchStart: GUITAR_PITCH_OFFSET },
	{ name: 'Guitar', value: 'guitar', pitchStart: GUITAR_PITCH_OFFSET }
];
