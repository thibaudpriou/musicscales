/**
 * Shift array elements so that the first element be at the index specified
 *
 * @param elements an array
 * @param startIndex the new position of 1st element
 * @returns
 */
export const transpose = <T>(elements: T[], startIndex: number): T[] => {
	if (startIndex % elements.length === 0) {
		return elements;
	}

	if (startIndex > 0) {
		const offset = startIndex % elements.length;

		return [...elements.slice(-offset), ...elements.slice(0, elements.length - offset)];
	}

	const offset = -startIndex % elements.length;
	return [...elements.slice(offset), ...elements.slice(0, offset)];
};
