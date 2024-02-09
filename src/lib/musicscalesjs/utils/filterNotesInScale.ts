import { SCALE_IN, type Scale } from '../types';

/**
 * Return the notes present in scale
 *
 * @param notes
 * @param scale
 * @returns
 */
export const filterNotesInScale = <T extends { pitchIndex: number }>(
	notes: T[],
	scale: Scale
): T[] => {
	return notes.filter((n) => scale[n.pitchIndex] === SCALE_IN);
};
