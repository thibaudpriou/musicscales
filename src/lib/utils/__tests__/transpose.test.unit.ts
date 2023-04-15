import * as assert from 'uvu/assert';

import { suite } from 'uvu';
import { transpose } from '../transpose';

const Transpose = suite('transpose()');

Transpose('transpose to same (0)', () => {
	const notes = ['A', 'B', 'C', 'D', 'E'];
	const start = 0;

	const result = transpose(start, notes);

	assert.equal(result, ['A', 'B', 'C', 'D', 'E']);
});

Transpose('transpose when start > 0', () => {
	const notes = ['A', 'B', 'C', 'D', 'E'];
	const start = 2;

	const result = transpose(start, notes);

	assert.equal(result, ['D', 'E', 'A', 'B', 'C']);
});

Transpose('transpose when start < 0', () => {
	const notes = ['A', 'B', 'C', 'D', 'E'];
	const start = -2;

	const result = transpose(start, notes);

	assert.equal(result, ['C', 'D', 'E', 'A', 'B']);
});



Transpose('transpose to same when start is array.length', () => {
	const notes = ['A', 'B', 'C', 'D', 'E'];
	const start = 5;

	const result = transpose(start, notes);

	assert.equal(result, ['A', 'B', 'C', 'D', 'E']);
});

Transpose('transpose correctly when start gt array.length', () => {
	const notes = ['A', 'B', 'C', 'D', 'E'];
	const start = 7;

	const result = transpose(start, notes);

	assert.equal(result, ['D', 'E', 'A', 'B', 'C']);
});


Transpose('transpose to same when start is - array.length (<0)', () => {
	const notes = ['A', 'B', 'C', 'D', 'E'];
	const start = -5;

	const result = transpose(start, notes);

	assert.equal(result, ['A', 'B', 'C', 'D', 'E']);
});

Transpose('transpose to same when start is - array.length (<0)', () => {
	const notes = ['A', 'B', 'C', 'D', 'E'];
	const start = -7;

	const result = transpose(start, notes);

	assert.equal(result, ['C', 'D', 'E', 'A', 'B']);
});

Transpose.run();
