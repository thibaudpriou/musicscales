<script lang="ts">
	import Strings from '$lib/Strings.svelte';
	import type { Scale } from '../types';

	interface ScaleInfo {
		name: string;
		value: Scale;
	}

	const scales: ScaleInfo[] = [
		{ name: 'Major', value: 'major' },
		{ name: 'Natural Minor', value: 'natural-minor' },
		{ name: 'Harmonic Minor', value: 'harmonic-minor' },
		{ name: 'Melodic Minor', value: 'melodic-minor' },
		{ name: 'Pentatonic Major', value: 'pentatonic-major' },
		{ name: 'Pentatonic Minor', value: 'pentatonic-minor' }
	];
	const notes = ['E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#'];

	let selectedScale: ScaleInfo = scales[0];
	let selectedNoteOffset = 0;

	function selectedScaleCallback(value: ScaleInfo) {
		return () => {
			selectedScale = value;
		};
	}

	function upNote() {
		if (selectedNoteOffset + 1 === 12) {
			selectedNoteOffset = 0;
			return;
		}
		selectedNoteOffset = selectedNoteOffset + 1;
	}

	function downNote() {
		if (selectedNoteOffset - 1 === -1) {
			selectedNoteOffset = 11;
			return;
		}
		selectedNoteOffset = selectedNoteOffset - 1;
	}
</script>

<div>
	Scale type:
	{#each scales as scale}
		<button on:click={selectedScaleCallback(scale)}>{scale.name}</button>
	{/each}
</div>

<div>
	Note:
	<button on:click={downNote}>-</button>
	<button on:click={upNote}>+</button>
</div>

<h1>
	{notes[selectedNoteOffset]}
	{selectedScale.name}
</h1>
<div class="neck">
	<Strings scale={selectedScale.value} scaleOffset={12 - selectedNoteOffset} />
</div>

<style>
	button {
		margin: 0.5em;
		padding: 0.2em 0.5em;
	}

	.neck {
		margin: 0 1em;
		font-size: 2vw;
	}
</style>
