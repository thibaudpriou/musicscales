import { SCALE_IN, type ScaleNote } from '../types';

/**
 * Return tonic note index of a specific mode degree, for a given scale.
 * Return -1 on error
 *
 * @param scale
 * @param degree (starts at 0)
 */
export const findScaleOffetForMode = (scale: ScaleNote[], degree = 0) => {
	return scale
		.map((note, i, arr) => ({
			in: note === SCALE_IN,
			count: arr.slice(0, i).filter((n) => n == SCALE_IN).length
		}))
		.findIndex((v) => v.in && v.count === degree);
};
