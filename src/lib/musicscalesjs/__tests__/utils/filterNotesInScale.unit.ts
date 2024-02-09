import * as assert from 'uvu/assert';

import type { Scale } from '../..';
import { filterNotesInScale } from '../../utils';
import { suite } from 'uvu';

const FilterNotesInScale = suite('filterNotesInScale()');

const myScale: Scale = [
	true,
	true,
	false,
	false,
	false,
	true,
	true,
	false,
	false,
	false,
	true,
	true
];

FilterNotesInScale('only returns notes in scales', () => {
	const notes = [
		{ name: 'C', pitchIndex: 0 },
		{ name: 'C#', pitchIndex: 1 },
		{ name: 'D', pitchIndex: 2 },
		{ name: 'D#', pitchIndex: 3 },
		{ name: 'E', pitchIndex: 4 },
		{ name: 'F', pitchIndex: 5 }
	];

	const result = filterNotesInScale(notes, myScale);

	assert.equal(result, [
		{ name: 'C', pitchIndex: 0 },
		{ name: 'C#', pitchIndex: 1 },
		{ name: 'F', pitchIndex: 5 }
	]);
});

FilterNotesInScale("doesn't return notes of pitch lt 0 or gt 11", () => {
	const notes = [
		{ name: 'NOPE', pitchIndex: -1 },
		{ name: 'C', pitchIndex: 0 },
		{ name: 'C#', pitchIndex: 1 },
		{ name: 'D', pitchIndex: 2 },
		{ name: 'NOPE', pitchIndex: 12 }
	];
	const scale: Scale = [true, true, true, true, true, true, true, true, true, true, true, true];

	const result = filterNotesInScale(notes, scale);

	assert.equal(result, [
		{ name: 'C', pitchIndex: 0 },
		{ name: 'C#', pitchIndex: 1 },
		{ name: 'D', pitchIndex: 2 }
	]);
});

FilterNotesInScale('return empty array when no notes in scale', () => {
	const notes = [
		{ name: 'C', pitchIndex: 0 },
		{ name: 'C#', pitchIndex: 1 },
		{ name: 'D', pitchIndex: 2 },
		{ name: 'D', pitchIndex: 11 }
	];
	const scale: Scale = [
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false
	];

	const result = filterNotesInScale(notes, scale);

	assert.equal(result, []);
});

FilterNotesInScale.run();
