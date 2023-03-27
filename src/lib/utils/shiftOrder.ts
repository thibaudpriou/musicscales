import type { Note } from '$lib/types';

/**
 * Shift notes order
 *
 * @param start
 * @param notes
 * @returns
 */
export const shiftOrder = (start: number, notes: Note[]): Note[] => {
	return [
        ...notes.slice(start),
        ...notes.slice(0, start - notes.length)
    ]
};
