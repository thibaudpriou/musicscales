import type { Note, Scale } from './types';
import { filterNotesInScale, modulate, transpose } from './utils';

import { NOTES } from './constants';

/**
 * Return notes of given scale, for given mode, ordered by pitch with tonic as the first element
 *
 * @param scale the scale type to apply
 * @param tonic the tonic position: 0 being C, 1 is C#, and so on
 * @param mode the scale degree: 0 being Ionian, 1 is Diorian, and so on
 */
export const getNotesInScale = (scale: Scale, tonic = 0, mode = 0): Note[] => {
	const transposedScale = transpose(scale, tonic);

	const notes = filterNotesInScale(NOTES, transposedScale as Scale);

	return modulate(notes, mode);
};
