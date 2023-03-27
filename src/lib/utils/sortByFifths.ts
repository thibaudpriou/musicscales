import type { Note } from '$lib/types';

const FIFTH_PITCH_OFFSET = 7; // the dominant offset is 7 semitones relative to the tonic

/**
 * Sorts an array of notes by fifths
 *
 * @param notes 
 * @returns
 */
export const sortByFifths = (notes: Note[]): Note[] => {
	return notes
		.map((n) => ({
			...n,
			order: (n.offset * FIFTH_PITCH_OFFSET) % 12
		}))
		.sort((n1, n2) => n1.order - n2.order);
};
