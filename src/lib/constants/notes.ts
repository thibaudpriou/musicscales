import type { Note } from '../types';

export const notes: Note[] = [
	{ label: 'B#', pitchOffset: 0, enharmonic: true },
	{ label: 'C', pitchOffset: 0 },
	{ label: 'C#', pitchOffset: 1 },
	{ label: 'Db', pitchOffset: 1, enharmonic: true },
	{ label: 'D', pitchOffset: 2 },
	{ label: 'D#', pitchOffset: 3 },
	{ label: 'Eb', pitchOffset: 3, enharmonic: true },
	{ label: 'E', pitchOffset: 4 },
	{ label: 'Fb', pitchOffset: 4, enharmonic: true },
	{ label: 'E#', pitchOffset: 5, enharmonic: true },
	{ label: 'F', pitchOffset: 5 },
	{ label: 'F#', pitchOffset: 6 },
	{ label: 'Gb', pitchOffset: 6, enharmonic: true },
	{ label: 'G', pitchOffset: 7 },
	{ label: 'G#', pitchOffset: 8 },
	{ label: 'Ab', pitchOffset: 8, enharmonic: true },
	{ label: 'A', pitchOffset: 9 },
	{ label: 'A#', pitchOffset: 10 },
	{ label: 'Bb', pitchOffset: 10, enharmonic: true },
	{ label: 'B', pitchOffset: 11 },
	{ label: 'Cb', pitchOffset: 11, enharmonic: true }
];

const naturals = notes.filter((n) => n.label.indexOf('#') === -1 && n.label.indexOf('b') === -1);

export const NB_NATURALS = naturals.length; // 7

// * accidentals
export const NB_FLATS = NB_NATURALS; // 7
export const NB_SHARPS = NB_NATURALS; // 7
