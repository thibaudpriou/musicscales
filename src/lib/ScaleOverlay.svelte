<script lang="ts">
	type Scale =
		| 'major'
		| 'natural-minor'
		| 'harmonic-minor'
		| 'melodic-minor'
		| 'major-pentatonic'
		| 'minor-pentatonic';

	export let offset: number = 0; // relative to E
	export let scale: Scale = 'major';

	const classes = `scale-overlay ${scale}`
</script>

<div class={classes}>
	{#each Array(offset) as _i}
		<span class="note hidden" />
	{/each}
	{#each Array(12) as _i}
		<span class="note" />
	{/each}
</div>

<style>
	.scale-overlay {
		display: flex;
		--empty-color: none;
		--full-color: blue;
	}

	.note {
		margin-left: 1em;
		width: 1em;
		height: 1em;
		display: inline-block;
		border-radius: 50%;
		clip-path: circle(1em);
		background-color: white;
	}

	.note:first-child {
		margin-left: -0.5em;
	}

	.note.hidden {
		display: none;
		margin-left: 0;
	}

	.note.hidden:first-child {
		margin-left: -1.5em;
		display: inline-block;
		width: 0%;
	}

	/* major scale */
	.major .note:nth-child(12n + 1) {
		background-color: var(--full-color);
	}
	.major .note:nth-child(12n + 2) {
		background-color: var(--empty-color);
	}
	.major .note:nth-child(12n + 3) {
		background-color: var(--full-color);
	}
	.major .note:nth-child(12n + 4) {
		background-color: var(--empty-color);
	}
	.major .note:nth-child(12n + 5) {
		background-color: var(--full-color);
	}
	.major .note:nth-child(12n + 6) {
		background-color: var(--full-color);
	}
	.major .note:nth-child(12n + 7) {
		background-color: var(--empty-color);
	}
	.major .note:nth-child(12n + 8) {
		background-color: var(--full-color);
	}
	.major .note:nth-child(12n + 9) {
		background-color: var(--empty-color);
	}
	.major .note:nth-child(12n + 10) {
		background-color: var(--full-color);
	}
	.major .note:nth-child(12n + 11) {
		background-color: var(--empty-color);
	}
	.major .note:nth-child(12n + 12) {
		background-color: var(--full-color);
	}

	/* natural minor scale */
	.natural-minor .note:nth-child(12n + 1) {
		background-color: var(--full-color);
	}
	.natural-minor .note:nth-child(12n + 2) {
		background-color: var(--empty-color);
	}
	.natural-minor .note:nth-child(12n + 3) {
		background-color: var(--full-color);
	}
	.natural-minor .note:nth-child(12n + 4) {
		background-color: var(--full-color);
	}
	.natural-minor .note:nth-child(12n + 5) {
		background-color: var(--empty-color);
	}
	.natural-minor .note:nth-child(12n + 6) {
		background-color: var(--full-color);
	}
	.natural-minor .note:nth-child(12n + 7) {
		background-color: var(--empty-color);
	}
	.natural-minor .note:nth-child(12n + 8) {
		background-color: var(--full-color);
	}
	.natural-minor .note:nth-child(12n + 9) {
		background-color: var(--full-color);
	}
	.natural-minor .note:nth-child(12n + 10) {
		background-color: var(--empty-color);
	}
	.natural-minor .note:nth-child(12n + 11) {
		background-color: var(--full-color);
	}
	.natural-minor .note:nth-child(12n + 12) {
		background-color: var(--empty-color);
	}

	/* harmonic minor scale */
	.harmonic-minor .note:nth-child(12n + 1) {
		background-color: var(--full-color);
	}
	.harmonic-minor .note:nth-child(12n + 2) {
		background-color: var(--empty-color);
	}
	.harmonic-minor .note:nth-child(12n + 3) {
		background-color: var(--full-color);
	}
	.harmonic-minor .note:nth-child(12n + 4) {
		background-color: var(--full-color);
	}
	.harmonic-minor .note:nth-child(12n + 5) {
		background-color: var(--empty-color);
	}
	.harmonic-minor .note:nth-child(12n + 6) {
		background-color: var(--full-color);
	}
	.harmonic-minor .note:nth-child(12n + 7) {
		background-color: var(--empty-color);
	}
	.harmonic-minor .note:nth-child(12n + 8) {
		background-color: var(--full-color);
	}
	.harmonic-minor .note:nth-child(12n + 9) {
		background-color: var(--full-color);
	}
	.harmonic-minor .note:nth-child(12n + 10) {
		background-color: var(--empty-color);
	}
	.harmonic-minor .note:nth-child(12n + 11) {
		background-color: var(--empty-color);
	}
	.harmonic-minor .note:nth-child(12n + 12) {
		background-color: var(--full-color);
	}

	/* melodic minor scale */
	.melodic-minor .note:nth-child(12n + 1) {
		background-color: var(--full-color);
	}
	.melodic-minor .note:nth-child(12n + 2) {
		background-color: var(--empty-color);
	}
	.melodic-minor .note:nth-child(12n + 3) {
		background-color: var(--full-color);
	}
	.melodic-minor .note:nth-child(12n + 4) {
		background-color: var(--full-color);
	}
	.melodic-minor .note:nth-child(12n + 5) {
		background-color: var(--empty-color);
	}
	.melodic-minor .note:nth-child(12n + 6) {
		background-color: var(--full-color);
	}
	.melodic-minor .note:nth-child(12n + 7) {
		background-color: var(--empty-color);
	}
	.melodic-minor .note:nth-child(12n + 8) {
		background-color: var(--full-color);
	}
	.melodic-minor .note:nth-child(12n + 9) {
		background-color: var(--empty-color);
	}
	.melodic-minor .note:nth-child(12n + 10) {
		background-color: var(--full-color);
	}
	.melodic-minor .note:nth-child(12n + 11) {
		background-color: var(--empty-color);
	}
	.melodic-minor .note:nth-child(12n + 12) {
		background-color: var(--full-color);
	}

	/* major pentatonic scale */
	.major-pentatonic .note:nth-child(12n + 1) {
		background-color: var(--full-color);
	}
	.major-pentatonic .note:nth-child(12n + 2) {
		background-color: var(--empty-color);
	}
	.major-pentatonic .note:nth-child(12n + 3) {
		background-color: var(--full-color);
	}
	.major-pentatonic .note:nth-child(12n + 4) {
		background-color: var(--empty-color);
	}
	.major-pentatonic .note:nth-child(12n + 5) {
		background-color: var(--full-color);
	}
	.major-pentatonic .note:nth-child(12n + 6) {
		background-color: var(--empty-color);
	}
	.major-pentatonic .note:nth-child(12n + 7) {
		background-color: var(--empty-color);
	}
	.major-pentatonic .note:nth-child(12n + 8) {
		background-color: var(--full-color);
	}
	.major-pentatonic .note:nth-child(12n + 9) {
		background-color: var(--empty-color);
	}
	.major-pentatonic .note:nth-child(12n + 10) {
		background-color: var(--full-color);
	}
	.major-pentatonic .note:nth-child(12n + 11) {
		background-color: var(--empty-color);
	}
	.major-pentatonic .note:nth-child(12n + 12) {
		background-color: var(--empty-color);
	}

	/* minor pentatonic scale */
	.minor-pentatonic .note:nth-child(12n + 1) {
		background-color: var(--full-color);
	}
	.minor-pentatonic .note:nth-child(12n + 2) {
		background-color: var(--empty-color);
	}
	.minor-pentatonic .note:nth-child(12n + 3) {
		background-color: var(--empty-color);
	}
	.minor-pentatonic .note:nth-child(12n + 4) {
		background-color: var(--full-color);
	}
	.minor-pentatonic .note:nth-child(12n + 5) {
		background-color: var(--empty-color);
	}
	.minor-pentatonic .note:nth-child(12n + 6) {
		background-color: var(--full-color);
	}
	.minor-pentatonic .note:nth-child(12n + 7) {
		background-color: var(--empty-color);
	}
	.minor-pentatonic .note:nth-child(12n + 8) {
		background-color: var(--full-color);
	}
	.minor-pentatonic .note:nth-child(12n + 9) {
		background-color: var(--empty-color);
	}
	.minor-pentatonic .note:nth-child(12n + 10) {
		background-color: var(--empty-color);
	}
	.minor-pentatonic .note:nth-child(12n + 11) {
		background-color: var(--full-color);
	}
	.minor-pentatonic .note:nth-child(12n + 12) {
		background-color: var(--empty-color);
	}
</style>
