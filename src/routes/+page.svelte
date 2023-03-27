<script lang="ts">
	import Strings from '$lib/components/Strings.svelte';
	import type { Instrument, Scale } from '$/lib/types';
	import { notes } from '$lib/constants/notes';
	import { intruments } from '$lib/constants/instruments';
	import { shiftOrder, sortByFifths, sortByPitch } from '$lib/utils';
	import type { InstrumentInfo, Note } from '$lib/types';

	interface ScaleInfo {
		name: string;
		value: Scale;
	}

	interface SortInfo {
		name: string;
		apply: (notes: Note[]) => Note[];
	}

	const scales: ScaleInfo[] = [
		{ name: 'Major', value: 'major' },
		{ name: 'Natural Minor', value: 'natural-minor' },
		{ name: 'Harmonic Minor', value: 'harmonic-minor' },
		{ name: 'Melodic Minor', value: 'melodic-minor' },
		{ name: 'Pentatonic Major', value: 'pentatonic-major' },
		{ name: 'Pentatonic Minor', value: 'pentatonic-minor' }
	];

	const sortMethods: SortInfo[] = [
		{ name: 'by pitch', apply: sortByPitch },
		{ name: 'by fifths', apply: sortByFifths }
	];

	const harmonicNotes = notes.filter((n) => !n.enharmonic);

	const getNoteIdxForPitch = (array: Note[], pitchOffset: number) =>
		array.findIndex((n) => n.pitchOffset === pitchOffset);

	let selectedScale: ScaleInfo = scales[0];
	let selectedInstru: InstrumentInfo = intruments[0];
	let selectedSort: SortInfo = sortMethods[0];
	let displayEnharmonic: boolean = false;

	const getSortedNotes = (instru: InstrumentInfo, sort: SortInfo) =>
		shiftOrder(instru.pitchStart, sort.apply(harmonicNotes));

	const findEnharmonic = (note: Note) =>
		notes.find((n) => !!n.enharmonic && n.pitchOffset === note.pitchOffset);

	let selectedNote = getSortedNotes(selectedInstru, selectedSort)[0];
	$: sortedNotes = getSortedNotes(selectedInstru, selectedSort);

	function selectInstruCallback(value: Instrument) {
		return () => {
			selectedInstru = value;
		};
	}

	function selectScaleCallback(value: ScaleInfo) {
		return () => {
			selectedScale = value;
		};
	}

	function selectSortMethod(value: SortInfo) {
		return () => {
			selectedSort = value;
		};
	}

	function toggleEnharmonic() {
		displayEnharmonic = !displayEnharmonic;
	}

	function upNote() {
		const selectedNoteIdx = getNoteIdxForPitch(sortedNotes, selectedNote.pitchOffset);
		if (selectedNoteIdx + 1 === 12) {
			selectedNote = sortedNotes[0];
			return;
		}
		selectedNote = sortedNotes[selectedNoteIdx + 1];
	}

	function downNote() {
		const selectedNoteIdx = getNoteIdxForPitch(sortedNotes, selectedNote.pitchOffset);
		if (selectedNoteIdx - 1 === -1) {
			selectedNote = sortedNotes[11];
			return;
		}
		selectedNote = sortedNotes[selectedNoteIdx - 1];
	}
</script>

<div>
	{#each intruments as instru}
		<button
			on:click={selectInstruCallback(instru)}
			class:active={instru.value === selectedInstru.value}>{instru.name}</button
		>
	{/each}
</div>

<div>
	Scale type:
	{#each scales as scale}
		<button on:click={selectScaleCallback(scale)} class:active={scale === selectedScale}
			>{scale.name}</button
		>
	{/each}
</div>

<div>
	Change note:
	{#each sortMethods as sortMethod}
		<button on:click={selectSortMethod(sortMethod)} class:active={sortMethod === selectedSort}
			>{sortMethod.name}</button
		>
	{/each}
	<button on:click={downNote}>-</button>
	<button on:click={upNote}>+</button>
</div>
<div>
	<button on:click={toggleEnharmonic} class:active={displayEnharmonic}>with enharmonics</button>
</div>
<h1>
	<span>
		{selectedNote.label}
		{#if displayEnharmonic}
			{@const enharmonic = findEnharmonic(selectedNote)}
			{#if enharmonic}
				<span>/ {enharmonic?.label}</span>
			{/if}
		{/if}
	</span>
	<span>{selectedScale.name}</span>
</h1>
<div class="neck">
	<Strings
		scale={selectedScale.value}
		scaleOffset={12 - selectedNote.pitchOffset + selectedInstru.pitchStart}
		instrument={selectedInstru.value}
	/>
</div>

<style>
	button {
		margin: 0.5em;
		padding: 0.2em 0.5em;
		border-radius: 0.25em;
	}

	.neck {
		margin: 0 1em;
		font-size: 2vw;
	}

	button.active {
		background-color: lightgreen;
		/* color: white; */
	}
</style>
