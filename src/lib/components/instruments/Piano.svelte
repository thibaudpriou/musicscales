<script lang="ts">
	import { transpose } from '$lib/utils';
	import { IN_SCALE, NOT_IN_SCALE, type Scale } from '../../types';

	export let offset: number = 0;
	export let scale: Scale;

	$: semitones = transpose(offset, scale);
</script>

<div class="container">
	<div class="keys">
		{#each Array(12) as _i}
			<span class="key" />
		{/each}
	</div>

	<div class="scale-overlay">
		{#each semitones as semitone, idx}
			<span
				class="semitone"
				class:full={semitone === IN_SCALE}
				class:empty={semitone === NOT_IN_SCALE}
				class:tonic={idx === offset}
			/>
		{/each}
	</div>
</div>

<style>
    .container {
        --width: 3em;
        --height: 6em;
        position: relative;
    }

	.keys, .scale-overlay {
		display: flex;
	}

    .scale-overlay {
        position: absolute;
        left: 0;
        top: 0;
    }

	/* keys */
	.key {
		width: var(--width);
		height: var(--height);
		display: inline-block;
		background-color: white;
		border-radius: 0.25em;
		border: 1px solid black;
		box-sizing: border-box;
	}

	.key:nth-child(12n + 2),
	.key:nth-child(12n + 4),
	.key:nth-child(12n + 7),
	.key:nth-child(12n + 9),
	.key:nth-child(12n + 11) {
		position: relative;
		width: 0;
		border: none;
	}

	.key:nth-child(12n + 2)::before,
	.key:nth-child(12n + 4)::before,
	.key:nth-child(12n + 7)::before,
	.key:nth-child(12n + 9)::before,
	.key:nth-child(12n + 11)::before {
		background-color: black;
		height: calc(var(--height) * 3 / 4 );
		content: '';
		position: absolute;
		top: 0;
		left: calc(var(--width) * -1 / 4);
		width: calc(var(--width) / 2);
		border-radius: 0.25em;
		border: 1px solid black;
	}

	/* semitones */
	.semitone {
		position: relative;		
		height: var(--height);
		width: var(--width);
	}

	.semitone::before {
		content: '';
		position: absolute;
		width: 1em;
		height: 1em;
		border-radius: 50%;
        clip-path: circle(1em);
		bottom: 0.5em;
		left: calc(50% - 0.5em);
	}

	.semitone.full::before {
		background-color: var(--full-color);
	}
	.semitone.empty::before {
		background-color: var(--empty-color);
	}
	.semitone.full.tonic::before {
		background-color: var(--tonic-color);
	}

    .semitone:nth-child(12n + 2),
	.semitone:nth-child(12n + 4),
	.semitone:nth-child(12n + 7),
	.semitone:nth-child(12n + 9),
	.semitone:nth-child(12n + 11) {
		width: 0;
		border: none;
        background: none;
		height: calc(var(--height) * 3 / 4 );
	}

    .semitone:nth-child(12n + 2)::before,
	.semitone:nth-child(12n + 4)::before,
	.semitone:nth-child(12n + 7)::before,
	.semitone:nth-child(12n + 9)::before,
	.semitone:nth-child(12n + 11)::before {
		height: 1em; /* DEL */
    }
</style>
