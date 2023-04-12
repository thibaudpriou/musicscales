<script lang="ts">
	import type { Note } from '$lib/types';
	import { sortByFifths, sortByPitch } from '$lib/utils';
	import { createEventDispatcher } from 'svelte';
	import Fieldset from './commons/Fieldset.svelte';

	export let notes: Note[];
	const dispatchChange = createEventDispatcher().bind(null, 'change');

	interface SortInfo {
		label: string;
		apply: (notes: Note[]) => Note[];
	}

	const sortMethods: SortInfo[] = [
		{ label: 'by pitch', apply: sortByPitch },
		{ label: 'by fifths', apply: sortByFifths }
	];

	let selectedSort: SortInfo = sortMethods[0];
	$: sortedNotes = selectedSort.apply(notes);

	let selectedNote = notes[0];

	const getNoteIdxForPitch = (array: Note[], pitchOffset: number) =>
		array.findIndex((n) => n.pitchOffset === pitchOffset);

	const selectSortMethod = (value: SortInfo) => {
		selectedSort = value;
	};

	const upNote = () => {
		const selectedNoteIdx = getNoteIdxForPitch(sortedNotes, selectedNote.pitchOffset);
		if (selectedNoteIdx + 1 === 12) {
			selectedNote = sortedNotes[0];
			return;
		}
		selectedNote = sortedNotes[selectedNoteIdx + 1];
		dispatchChange(selectedNote);
	};

	const downNote = () => {
		const selectedNoteIdx = getNoteIdxForPitch(sortedNotes, selectedNote.pitchOffset);
		if (selectedNoteIdx - 1 === -1) {
			selectedNote = sortedNotes[11];
			return;
		}
		selectedNote = sortedNotes[selectedNoteIdx - 1];
		dispatchChange(selectedNote);
	};
</script>

<Fieldset legend="Change note:">
	{#each sortMethods as sortMethod}
		<button
			on:click={() => selectSortMethod(sortMethod)}
			class="sort"
			class:active={sortMethod === selectedSort}>{sortMethod.label}</button
		>
	{/each}
	<button on:click={downNote}>-</button>
	<button on:click={upNote}>+</button>
</Fieldset>

<style>
	.sort {
		margin: 0.5em;
		padding: 0.2em 0.5em;
		border-radius: 0.25em;
	}

	.sort.active {
		background-color: lightgreen;
	}
</style>
