<script lang="ts">
	import { shiftOrder } from '$lib/utils';
	import { IN_SCALE, NOT_IN_SCALE, type Scale } from '../types';

	export let offset: number = 0; // relative to E
	export let scale: Scale;

	$: semitones = shiftOrder(offset % 12, scale);
	$: firstSemitone = semitones[0];
</script>

<div class="scale-overlay">
	{#each Array(offset) as _i}
		<span class="semitone hidden" />
	{/each}
	{#each semitones as semitone}
		<span
			class="semitone"
			class:full={semitone === IN_SCALE}
			class:empty={semitone === NOT_IN_SCALE}
		/>
	{/each}
	<span
		class="semitone"
		class:full={firstSemitone === IN_SCALE}
		class:empty={firstSemitone === NOT_IN_SCALE}
	/>
</div>

<style>
	.scale-overlay {
		display: flex;
	}

	.semitone {
		margin-left: 1em;
		width: 1em;
		height: 1em;
		display: inline-block;
		border-radius: 50%;
		clip-path: circle(1em);
		background-color: white;
	}

	.semitone:first-child {
		margin-left: -0.5em;
	}

	.semitone:nth-child(12n + 1) {
		background-color: var(--tonic-color) !important;
	}

	.semitone.hidden {
		display: none;
		margin-left: 0;
	}

	.semitone.hidden:first-child {
		margin-left: -1.5em;
		display: inline-block;
		width: 0%;
	}

	.semitone.full {
		background-color: var(--full-color);
	}

	.semitone.empty {
		background-color: var(--empty-color);
	}
</style>
