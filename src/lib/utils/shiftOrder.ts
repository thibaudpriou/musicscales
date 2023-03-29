/**
 * Shift notes order
 *
 * @param start
 * @param notes
 * @returns
 */
export const shiftOrder = <T>(start: number, notes: T[]): T[] => {
	if (start === notes.length) {
		return notes;
	}

	return [...notes.slice(start), ...notes.slice(0, start - notes.length)];
};
