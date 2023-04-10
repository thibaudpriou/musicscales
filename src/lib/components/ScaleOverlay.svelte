<script lang="ts">
	import { shiftOrder } from '$lib/utils';
	import { IN_SCALE, NOT_IN_SCALE, type Scale } from '../types';

	export let scaleOffset: number = 0;
	export let stringOffset: number = 4;
	export let scale: Scale;

	$: offset = scaleOffset % 12 - stringOffset % 12
	$: semitones = shiftOrder(offset % 12, scale);
	$: firstSemitone = semitones[0];
</script>

<div class="scale-overlay">
	{#each semitones as semitone, idx}
		<span
			class="semitone"
			class:full={semitone === IN_SCALE}
			class:empty={semitone === NOT_IN_SCALE}
			class:tonic={idx === offset % 12}
		/>
	{/each}
	<span
		class="semitone"
		class:full={firstSemitone === IN_SCALE}
		class:empty={firstSemitone === NOT_IN_SCALE}
		class:tonic={offset % 12 === 0}
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

	.semitone.full {
		background-color: var(--full-color);
	}

	.semitone.full.tonic {
		background-color: var(--tonic-color);
	}

	.semitone.empty {
		background-color: var(--empty-color);
	}
</style>
