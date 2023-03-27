<script lang="ts">
	import ScaleOverlay from '$lib/components/ScaleOverlay.svelte';
	import type { Instrument, Scale } from '../types';

	export let scaleOffset = 0; // relative to E
	export let scale: Scale = 'major';
	export let instrument: Instrument = 'bass';

	const bassStrings = [
		{ name: 'G', offset: 15 },
		{ name: 'D', offset: 10 },
		{ name: 'A', offset: 5 },
		{ name: 'E', offset: 0 }
	];
	const guitarStrings = [
		{ name: 'E', offset: 24 },
		{ name: 'B', offset: 19 },
		{ name: 'G', offset: 15 },
		{ name: 'D', offset: 10 },
		{ name: 'A', offset: 5 },
		{ name: 'E', offset: 0 }
	];
	$: strings = instrument === 'bass' ? bassStrings : guitarStrings;
</script>

<div class="container">
	<div class="strings">
		{#each strings as string}
			<div class="string" data-name={string.name}>
				{#each Array(13) as _i}
					<span class="fret" />
				{/each}
				<span class="scale">
					<ScaleOverlay {scale} offset={string.offset + scaleOffset} />
				</span>
				<span class="label">{string.name}</span>
			</div>
		{/each}
	</div>
	<div class="indicators">
		<span class="indicator indicator-3" />
		<span class="indicator indicator-5" />
		<span class="indicator indicator-7" />
		<span class="indicator indicator-9" />
		<span class="indicator indicator-12" />
		<span class="indicator" />
	</div>
</div>

<style>
	.container {
		display: inline-flex;
		flex-direction: column;
	}
	.strings {
		display: inline-flex;
		flex-direction: column;
		margin-left: 2em;
	}

	.string {
		position: relative;
		display: flex;
		border-top: solid 1px black;
	}

	.string .label {
		font-size: 70%;
		position: absolute;
		top: -0.5em;
		left: -2em;
	}

	.scale {
		display: block;
		position: absolute;
		top: -0.5em;
	}

	.fret {
		width: 2em;
		height: 2em;
		display: inline-block;
		border-left: 1px solid black;
		border-right: none;
		box-sizing: border-box;
	}

	.string:last-child .fret {
		border: none;
	}

	.fret:first-child::before {
		display: block;
		content: '';
		width: 4px;
		background-color: black;
		margin-left: -2px;
		height: calc(100% + 2px); /* for borders */
		margin-top: -1px; /* for borders */
	}

	.string:last-child .fret:first-child::before {
		content: none;
	}

	.indicators {
		--size: 0.25em;
		--fret-size: 2em;
		--first-margin-left: calc(1.5em + var(--size) * 1.5);
		margin-left: var(--first-margin-left);
		margin-top: -1.5em;
	}

	.indicator {
		width: var(--size);
		height: var(--size);
		display: inline-block;
		border-radius: 50%;
		clip-path: circle(1em);
		background-color: black;
	}

	.indicator-3 {
		margin-left: calc(var(--fret-size) * 2.5);
	}
	.indicator-5 {
		margin-left: calc(var(--fret-size) * 2 - var(--size));
	}
	.indicator-7 {
		margin-left: calc(var(--fret-size) * 2 - var(--size) * 2);
	}
	.indicator-9 {
		margin-left: calc(var(--fret-size) * 2 - var(--size) * 3);
	}
	.indicator-12 {
		margin-left: calc(var(--fret-size) * 3 - var(--size) * 3);
	}
</style>
