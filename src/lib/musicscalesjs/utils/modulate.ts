import type { Note } from '../types';

/**
 * Sort an array of notes in order to have the mode-th element in first position
 *
 * @param notes
 * @param mode the scale degree: 0 being Ionian, 1 is Diorian, and so on
 */
export const modulate = <T extends Pick<Note, 'pitchIndex'>>(notes: T[], mode: number): T[] => {
	// for i=mode, we want i'=0
	const shiftIndex = (i: number) => (i + (12 - mode)) % 12;

	const sorted = notes.sort((n1, n2) => {
		return shiftIndex(n1.pitchIndex) - shiftIndex(n2.pitchIndex);
	});

	return sorted;
};
