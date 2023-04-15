/**
 * transpose an array
 *
 * @param start the new position of 1st element
 * @param notes an array of elements
 * @returns
 */
export const transpose = <T>(start: number, notes: T[]): T[] => {
	if (start % notes.length === 0) {
		return notes;
	}

	if (start > 0) {
		const offset = start % notes.length;

		return [...notes.slice(-offset), ...notes.slice(0, notes.length - offset)];
	}

	const offset = -start % notes.length;
	return [...notes.slice(offset), ...notes.slice(0, offset)];
};
