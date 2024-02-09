import * as assert from 'uvu/assert';

import type { Scale } from '../..';
import { findScaleOffetForMode } from '../../utils';
import { suite } from 'uvu';

const FindScaleOffetForMode = suite('findScaleOffetForMode()');

FindScaleOffetForMode("return given degree's index", () => {
	const degree = 1; // 2nd degree
	const scale: Scale = [
		true,
		false,
		true, // here
		false,
		false,
		false,
		true,
		false,
		false,
		false,
		false,
		false
	];

	const result = findScaleOffetForMode(scale, degree);

	assert.equal(result, 2);
});

FindScaleOffetForMode('return -1 when degree > number of notes in', () => {
	const degree = 3;
	const scale: Scale = [
		true,
		false,
		true,
		false,
		false,
		false,
		true,
		false,
		false,
		false,
		false,
		false
	]; // 3 notes in, max degree = 2

	const result = findScaleOffetForMode(scale, degree);

	assert.equal(result, -1);
});

FindScaleOffetForMode('return -1 when degree < 0', () => {
	const degree = -1;
	const scale: Scale = [
		true,
		false,
		true,
		false,
		false,
		false,
		true,
		false,
		false,
		false,
		false,
		false
	];

	const result = findScaleOffetForMode(scale, degree);

	assert.equal(result, -1);
});

FindScaleOffetForMode.run();
