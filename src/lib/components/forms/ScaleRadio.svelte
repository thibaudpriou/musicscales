<script lang="ts">
	import type { ScaleInfo } from '$lib/types';
	import { createEventDispatcher } from 'svelte';

	export let scales: ScaleInfo[];

	let selected: ScaleInfo = scales[0];

	const dispatch = createEventDispatcher();

	const selectScale = (scale: ScaleInfo) => {
		selected = scale;
		console.log(selected);
		dispatch('select', scale);
	};
</script>

<fieldset>
	<legend>Scale type:</legend>
	{#each scales as scale}
		<button on:click={() => selectScale(scale)} class="scale" class:active={scale === selected}>
			{scale.label}
		</button>
	{/each}
</fieldset>

<style>
    fieldset {
        display: flex;
        flex-direction: row;
        border: none
    }

    .scale {
        margin: 0.5em;
		padding: 0.2em 0.5em;
		border-radius: 0.25em;
    }

	.scale.active {
		background-color: lightgreen;
	}
</style>
