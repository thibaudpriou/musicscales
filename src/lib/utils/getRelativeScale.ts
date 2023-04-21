import type { Note } from '$lib/types';

/**
 * Return the relative minor scales given a major scale offset
 *
 * @param notes
 * @param offset
 * @returns
 */
export const getRelativeMinorScales = (notes: Note[], offset: number) => {
	return notes.filter((n) => n.pitchOffset === (offset + 9) % 12);
};

/**
 * Return the relative major scales given a minor scale offset
 *
 * @param notes
 * @param offset
 * @returns
 */
export const getRelativeMajorScales = (notes: Note[], offset: number) => {
	return notes.filter((n) => n.pitchOffset === (offset + 3) % 12);
};
