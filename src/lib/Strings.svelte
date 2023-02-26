<script>
	import ScaleOverlay from '$lib/ScaleOverlay.svelte';
	import Frets from '$lib/Frets.svelte';

	export let scaleOffset = 0; // relative to E
</script>

<div class="strings">
	<div class="string">
		<!-- G -->
		<Frets />
		<span class="scale">
			<ScaleOverlay scale="major" offset={15 + scaleOffset} />
		</span>
	</div>
	<div class="string">
		<!-- D -->
		<Frets />
		<span class="scale">
			<ScaleOverlay scale="major" offset={10 + scaleOffset} />
		</span>
	</div>
	<div class="string">
		<!-- A -->
		<Frets />
		<span class="scale">
			<ScaleOverlay scale="major" offset={5 + scaleOffset} />
		</span>
	</div>
	<div class="string">
		<!-- E -->
		<Frets />
		<span class="scale">
			<ScaleOverlay scale="major" offset={0 + scaleOffset} />
		</span>
	</div>
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
