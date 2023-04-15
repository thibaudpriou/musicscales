<script lang="ts">
	import { notes } from '$lib/constants/notes';
	import { intruments } from '$lib/constants/instruments';
	import type { InstrumentInfo, Note, ScaleInfo } from '$lib/types';
	import { SCALES } from '$lib/constants/scales';
	import Title from '$lib/components/Title.svelte';
	import Piano from '$lib/components/instruments/Piano.svelte';
	import ScaleRadio from '$lib/components/forms/ScaleRadio.svelte';
	import NoteStepper from '$lib/components/forms/NoteStepper.svelte';
	import AcousticGuitar from '$lib/components/instruments/AcousticGuitar.svelte';
	import BassGuitar from '$lib/components/instruments/BassGuitar.svelte';

	let selectedScale = SCALES[0];
	let selectedInstru = intruments[0];
	let displayEnharmonic = false;
	let displayRelativeScale = false;

	$: scaleHasRelative = ['major', 'natural-minor'].includes(selectedScale.type);

	const enharmonicNotes = notes.filter((n) => !n.enharmonic);
	let selectedNote = enharmonicNotes.find((n) => n.pitchOffset === 4); // E by default, because bass is default instru

	const selectInstruCallback = (value: InstrumentInfo) => () => {
		selectedInstru = value;
	};
	const onSelectScale = (e: CustomEvent<ScaleInfo>) => {
		selectedScale = e.detail;
	};

	const onChangeNote = (e: CustomEvent<Note>) => {
		selectedNote = e.detail;
	};

	const toggleEnharmonic = () => {
		displayEnharmonic = !displayEnharmonic;
	};
	const toggleRelativeScale = () => {
		displayRelativeScale = !displayRelativeScale;
	};
</script>

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

<hr />

<div>
	<ScaleRadio scales={SCALES} on:select={onSelectScale} />
</div>

<div>
	<NoteStepper notes={enharmonicNotes} on:change={onChangeNote} />
</div>
<div>
	<button on:click={toggleEnharmonic} class:active={displayEnharmonic}>with enharmonics</button>
	{#if scaleHasRelative}
		<button on:click={toggleRelativeScale} class:active={displayRelativeScale}>with relative</button
		>
	{/if}
</div>

<hr />
<div>
	{#each intruments as instru}
		<button
			on:click={selectInstruCallback(instru)}
			class:active={instru.type === selectedInstru.type}>{instru.name}</button
		>
	{/each}
</div>

<div class="instrument">
	{#if selectedInstru.type === 'guitar'}
		<AcousticGuitar scale={selectedScale} scaleOffset={selectedNote.pitchOffset} />
	{/if}
	{#if selectedInstru.type === 'bass'}
		<BassGuitar scale={selectedScale} scaleOffset={selectedNote.pitchOffset} />
	{/if}
	{#if selectedInstru.type === 'keyboard'}
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
		margin: 1em 1em 0 1em;
		font-size: 2vw;
		display: inline-flex;
		flex-direction: column;

		--empty-color: none;
		--full-color: blue;
		--tonic-color: red;
	}

	button.active {
		background-color: lightgreen;
	}
</style>
