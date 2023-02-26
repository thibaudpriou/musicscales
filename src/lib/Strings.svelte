<script>
	import ScaleOverlay from '$lib/ScaleOverlay.svelte';
	import Frets from '$lib/Frets.svelte';

	export let scaleOffset = 0; // relative to E

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
			<Frets />
			<span class="scale">
				<ScaleOverlay scale="natural-minor" offset={string.offset + scaleOffset} />
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
		display: block;
		border-top: solid 1px black;
	}

	.strings .string:last-child {
		border-bottom: solid 1px black;
	}

	.scale {
		display: block;
		position: absolute;
		top: 0.5em;
	}
</style>
