import { NB_FLATS, NB_SHARPS } from '$lib/constants/notes';

import type { Note } from '$lib/types';
import { getRelativeMinorScales } from '$lib/utils/getRelativeScale';
import { sortByFifths } from '$lib/utils/sortByFifths';
import { transpose } from '$lib/musicscalesjs/utils/transpose';

/**
 * Return the nb first accidentals.
 * When nb > accidentals.length, none are returned.
 *
 * @param accidentalPitchs sorted list of accidentals pitchs
 * @param nb of accidentals
 * @returns
 */
const sliceAccidentals = (accidentalPitchs: number[], nb: number) => {
	if (nb <= 0 || nb > accidentalPitchs.length) {
		return [];
	}

	return accidentalPitchs.slice(0, nb);
};

/**
 * Return every notes sorted by fifths with enharmonics
 *
 * @param notes
 * @return
 */
export const everyFifths = (notes: Note[]) => {
	const harmonics = notes.filter((n) => !n.enharmonic);
	const sortedPitchs = sortByFifths(harmonics).map((n) => n.pitchOffset);

	const firstMajorIdx = sortedPitchs.findIndex((p) => p === 0); // C
	const majorFifths = transpose(firstMajorIdx, sortedPitchs); // to be extra-safe

	const fifths = majorFifths.map((pitch) => ({
		pitchOffset: pitch,
		major: notes.filter((n) => n.pitchOffset === pitch),
		minor: getRelativeMinorScales(notes, pitch)
	}));

	const sortedSharps = majorFifths.map((p) => (p + 11) % harmonics.length).slice(1, 1 + NB_SHARPS);
	const getSharpsPitchs = (idx: number) => sliceAccidentals(sortedSharps, idx);

	const sortedFlats = [...majorFifths].reverse().slice(1, 1 + NB_FLATS);
	const getFlatsPitchs = (idx: number) => sliceAccidentals(sortedFlats, harmonics.length - idx);

	return fifths.map((f, idx) => ({
		...f,
		sharps: getSharpsPitchs(idx).map(
			(p) => notes.find((n) => p === n.pitchOffset && n.label.indexOf('#') > 0) ?? p
		),
		flats: getFlatsPitchs(idx).map(
			(p) => notes.find((n) => p === n.pitchOffset && n.label.indexOf('b') > 0) ?? p
		)
	}));
};
