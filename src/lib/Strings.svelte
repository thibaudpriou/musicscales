<script lang="ts">
	import ScaleOverlay from '$lib/ScaleOverlay.svelte';
	import type { Scale } from '../types';

	export let scaleOffset = 0; // relative to E
	export let scale: Scale = 'major';

	const strings = [
		{ name: 'G', offset: 15 },
		{ name: 'D', offset: 10 },
		{ name: 'A', offset: 5 },
		{ name: 'E', offset: 0 }
	];
</script>

<div class="strings">
	{#each strings as string}
		<div class="string" data-name={string.name}>
			{#each Array(12) as _i}
				<span class="fret" />
			{/each}
			<span class="scale">
				<ScaleOverlay {scale} offset={string.offset + scaleOffset} />
			</span>
		</div>
	{/each}
</div>

<style>
	.strings {
		display: inline-flex;
		flex-direction: column;
	}

	.string {
		position: relative;
		display: flex;
		border-top: solid 1px black;
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
		border: none
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
</style>
