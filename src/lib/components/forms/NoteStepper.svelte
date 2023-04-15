<script lang="ts">
	import type { Note } from '$lib/types';
	import { sortByFifths, sortByPitch } from '$lib/utils';
	import { createEventDispatcher } from 'svelte';
	import Fieldset from './commons/Fieldset.svelte';

	export let notes: Note[];
	const dispatchChange = createEventDispatcher().bind(null, 'change');

	let byFifths = false;
	$: sort = byFifths ? sortByFifths : sortByPitch;
	$: sortedNotes = sort(notes);

	let selectedNote = notes[0];

	const getNoteIdxForPitch = (array: Note[], pitchOffset: number) =>
		array.findIndex((n) => n.pitchOffset === pitchOffset);

	const toggleByFifths = () => {
		byFifths = !byFifths;
	};

	const selectNote = (idx: number) => {
		selectedNote = sortedNotes[idx];
		dispatchChange(selectedNote);
	};

	const upNote = () => {
		const selectedNoteIdx = getNoteIdxForPitch(sortedNotes, selectedNote.pitchOffset);
		if (selectedNoteIdx >= sortedNotes.length - 1) {
			selectNote(0);
			return;
		}
		selectNote(selectedNoteIdx + 1);
	};

	const downNote = () => {
		const selectedNoteIdx = getNoteIdxForPitch(sortedNotes, selectedNote.pitchOffset);
		if (selectedNoteIdx - 1 < 0) {
			selectNote(sortedNotes.length - 1);
			return;
		}
		selectNote(selectedNoteIdx - 1);
	};
</script>

<Fieldset legend="Change note:">
	<button on:click={toggleByFifths} class="sort" class:active={byFifths}>5ths</button>
	<button on:click={downNote} class="step">-</button>
	<button on:click={upNote} class="step">+</button>
</Fieldset>

<style>
	.step {
		margin: 0.5em;
		padding: 0.2em 0.5em;
	}

	.sort {
		margin: 0.5em;
		padding: 0.2em 0.5em;
		border-radius: 0.25em;
	}

	.sort.active {
		background-color: lightgreen;
	}
</style>
