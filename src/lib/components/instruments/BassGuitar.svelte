<script lang="ts">
	import type { ScaleInfo } from '$lib/types';
	import Guitar from './Guitar.svelte';

	export let scale: ScaleInfo;
	export let scaleOffset = 4;

	const strings = [
		{ name: 'G', offset: 19 },
		{ name: 'D', offset: 14 },
		{ name: 'A', offset: 9 },
		{ name: 'E', offset: 4 }
	];
</script>

<Guitar {scale} {scaleOffset} {strings} />
