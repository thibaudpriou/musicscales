import type { Note } from '$lib/types';

/**
 * Sorts an array of notes by their pitch
 *
 * @param notes
 * @returns
 */
export const sortByPitch = (notes: Note[]): Note[] => {
	return [...notes].sort((n1, n2) => n1.pitchOffset - n2.pitchOffset);
};
