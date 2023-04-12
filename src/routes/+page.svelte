<script lang="ts">
	import Strings from '$lib/components/Strings.svelte';
	import type { Instrument } from '$/lib/types';
	import { notes } from '$lib/constants/notes';
	import { intruments } from '$lib/constants/instruments';
	import { shiftOrder, sortByFifths, sortByPitch } from '$lib/utils';
	import type { InstrumentInfo, Note, ScaleInfo } from '$lib/types';
	import { SCALES } from '$lib/constants/scales';
	import Title from '$lib/components/Title.svelte';
	import Piano from '$lib/components/Piano.svelte';
	import ScaleRadio from '$lib/components/forms/ScaleRadio.svelte';

	interface SortInfo {
		name: string;
		apply: (notes: Note[]) => Note[];
	}

	const sortMethods: SortInfo[] = [
		{ name: 'by pitch', apply: sortByPitch },
		{ name: 'by fifths', apply: sortByFifths }
	];

	const harmonicNotes = notes.filter((n) => !n.enharmonic);

	const getNoteIdxForPitch = (array: Note[], pitchOffset: number) =>
		array.findIndex((n) => n.pitchOffset === pitchOffset);

	let selectedScale = SCALES[0];
	let selectedInstru: InstrumentInfo = intruments[0];
	let selectedSort: SortInfo = sortMethods[0];
	let displayEnharmonic: boolean = false;
	let displayRelativeScale: boolean = false;

	const getSortedNotes = (instru: InstrumentInfo, sort: SortInfo) =>
		shiftOrder(instru.pitchStart, sort.apply(harmonicNotes));

	let selectedNote = getSortedNotes(selectedInstru, selectedSort)[0];
	$: sortedNotes = getSortedNotes(selectedInstru, selectedSort);
	$: scaleHasRelative = ['major', 'natural-minor'].includes(selectedScale.type);

	const selectInstruCallback = (value: Instrument) => () => {
		selectedInstru = value;
	};
	const onSelectScale = (e: CustomEvent<ScaleInfo>) => {
		selectedScale = e.detail;
	};

	const toggleEnharmonic = () => {
		displayEnharmonic = !displayEnharmonic;
	};
	const toggleRelativeScale = () => {
		displayRelativeScale = !displayRelativeScale;
	};

	// * key selection
	const selectSortMethod = (value: SortInfo) => () => {
		selectedSort = value;
	};
	const upNote = () => {
		const selectedNoteIdx = getNoteIdxForPitch(sortedNotes, selectedNote.pitchOffset);
		if (selectedNoteIdx + 1 === 12) {
			selectedNote = sortedNotes[0];
			return;
		}
		selectedNote = sortedNotes[selectedNoteIdx + 1];
	};
	const downNote = () => {
		const selectedNoteIdx = getNoteIdxForPitch(sortedNotes, selectedNote.pitchOffset);
		if (selectedNoteIdx - 1 === -1) {
			selectedNote = sortedNotes[11];
			return;
		}
		selectedNote = sortedNotes[selectedNoteIdx - 1];
	};
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
	<ScaleRadio scales={SCALES} on:select={onSelectScale}/>
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
	{#if scaleHasRelative}
		<button on:click={toggleRelativeScale} class:active={displayRelativeScale}>with relative</button
		>
	{/if}
</div>
<h1>
	<Title
		{notes}
		{selectedNote}
		{selectedScale}
		scales={SCALES}
		{displayEnharmonic}
		{displayRelativeScale}
	/>
</h1>
<div class="instrument">
	{#if selectedInstru.value === 'guitar' || selectedInstru.value === 'bass'}
		<Strings
			scale={selectedScale.scale}
			scaleOffset={12 - selectedNote.pitchOffset + selectedInstru.pitchStart}
			instrument={selectedInstru.value}
		/>
	{/if}
	{#if selectedInstru.value === 'keyboard'}
		<Piano scale={selectedScale.scale} offset={selectedNote.pitchOffset} />
	{/if}
</div>

<style>
	button {
		margin: 0.5em;
		padding: 0.2em 0.5em;
		border-radius: 0.25em;
	}

	.instrument {
		margin: 0 1em;
		font-size: 2vw;
		display: inline-flex;
		flex-direction: column;

		--empty-color: none;
		--full-color: blue;
		--tonic-color: red;
	}

	button.active {
		background-color: lightgreen;
		/* color: white; */
	}
</style>
