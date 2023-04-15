<script lang="ts">
	import { IN_SCALE, NOT_IN_SCALE, type Scale } from '$lib/types';
	import { transpose } from '$lib/utils';

	export let scaleOffset: number = 0;
	export let stringOffset: number = 4;
	export let scale: Scale;

	$: offset = scaleOffset - stringOffset;
	$: isTonic = (idx: number) => {
		const shiftOrder = Math.abs(offset) % scale.length
		const order = idx % scale.length
		if (offset >= 0 || shiftOrder === 0) {
			return order === shiftOrder
		}
		return order === scale.length - shiftOrder;
	};
	$: semitones = transpose(offset, scale);
	$: firstSemitone = semitones[0];
</script>

<div class="string-scale">
	{#each semitones as semitone, idx}
		<span
			class="semitone"
			class:full={semitone === IN_SCALE}
			class:empty={semitone === NOT_IN_SCALE}
			class:tonic={isTonic(idx)}
		/>
	{/each}
	<span
		class="semitone"
		class:full={firstSemitone === IN_SCALE}
		class:empty={firstSemitone === NOT_IN_SCALE}
		class:tonic={isTonic(0)}
	/>
</div>

<style>
	.string-scale {
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
