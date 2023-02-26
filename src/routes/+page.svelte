<script lang="ts">
	import Strings from '$lib/Strings.svelte';
	import type { Scale } from '../types';

	interface ScaleInfo {
		name: string;
		value: Scale;
	}

	const scales: ScaleInfo[] = [
		{ name: 'Major', value: 'major' },
		{ name: 'Natural Minor', value: 'natural-minor' },
		{ name: 'Harmonic Minor', value: 'harmonic-minor' },
		{ name: 'Melodic Minor', value: 'melodic-minor' },
		{ name: 'Pentatonic Major', value: 'pentatonic-major' },
		{ name: 'Pentatonic Minor', value: 'pentatonic-minor' }
	];

	let selectedScale: ScaleInfo = scales[0];

	function selectedScaleCallback(value: ScaleInfo) {
		return () => {
			selectedScale = value;
		};
	}
</script>

{#each scales as scale}
	<button on:click={selectedScaleCallback(scale)}>{scale.name}</button>
{/each}

<h1>
	{selectedScale.name}
</h1>
<Strings scale={selectedScale.value} />
