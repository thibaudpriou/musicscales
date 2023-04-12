<script lang="ts">
	import Strings from '$lib/components/Strings.svelte';
	import type { Instrument } from '$/lib/types';
	import { notes } from '$lib/constants/notes';
	import { intruments } from '$lib/constants/instruments';
	import type { InstrumentInfo, Note, ScaleInfo } from '$lib/types';
	import { SCALES } from '$lib/constants/scales';
	import Title from '$lib/components/Title.svelte';
	import Piano from '$lib/components/Piano.svelte';
	import ScaleRadio from '$lib/components/forms/ScaleRadio.svelte';
	import NoteStepper from '$lib/components/forms/NoteStepper.svelte';

	let selectedScale = SCALES[0];
	let selectedInstru: InstrumentInfo = intruments[0];
	let displayEnharmonic: boolean = false;
	let displayRelativeScale: boolean = false;

	$: scaleHasRelative = ['major', 'natural-minor'].includes(selectedScale.type);

	const enharmonicNotes = notes.filter((n) => !n.enharmonic);
	let selectedNote = enharmonicNotes[0];

	const selectInstruCallback = (value: Instrument) => () => {
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

<div>
	{#each intruments as instru}
		<button
			on:click={selectInstruCallback(instru)}
			class:active={instru.value === selectedInstru.value}>{instru.name}</button
		>
	{/each}
</div>

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
