const fretRelativeRatio = Math.pow(2, 1 / 12); // frequency is halved every 12 semitones

/**
 * Returns the fret distance ratio for a given position
 *
 * Example: computeFretRatio(3) returns the ratio between the 2nd and 3rd frets.
 * When "2em" is the distance between the 1st fret and the nut,
 * - computeFretRatio(3) * 2 is the distance between the 2nd and 3rd frets
 *
 * @param pos
 * @returns
 */
export const computeFretRatio = (pos: number) => {
	return 1 / Math.pow(fretRelativeRatio, pos);
};
