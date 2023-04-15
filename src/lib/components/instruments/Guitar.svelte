<script lang="ts">
	import type { ScaleInfo } from '$lib/types';
	import Neck from './commons/Neck.svelte';
	import StringScale from './commons/StringScale.svelte';

	interface String {
		name: string;
		offset: number;
	}

	export let strings: String[];
	export let scale: ScaleInfo;
	export let scaleOffset = 0;
</script>

<div class="container">
	<Neck nbStrings={strings.length} />
	<div class="scale">
		{#each strings as string}
			<span class="string-scale">
				<StringScale scale={scale.scale} {scaleOffset} stringOffset={string.offset} />
			</span>
		{/each}
	</div>
</div>

<style>
	.container {
		display: inline-flex;
		flex-direction: column;
		position: relative;

		--neck-indicators-size: 0.25em;
		--fret-size: 2em;
	}

	.scale {
		position: absolute;
		top: 0;
		display: flex;
		flex-direction: column;
	}

	.string-scale {
		margin-top: 1em;
	}

    .string-scale:first-child {
		margin-top: -0.5em;
	}
</style>
