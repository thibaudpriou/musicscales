<script lang="ts">
	import NeckIndicators from './NeckIndicators.svelte';

	export let nbStrings = 4;
</script>

<div>
	{#each Array(nbStrings - 1) as rows}
		<span class="row">
			{#each Array(13) as _i}
				<span class="fret" />
			{/each}
		</span>
	{/each}
</div>
<NeckIndicators />

<style>
	.row {
		position: relative;
		display: flex;
		border-top: solid 1px black;
		height: 2em;
	}

	.row:last-child {
		border-bottom: solid 1px black;
	}

	.row::before {
		display: block;
		content: '';
		width: 4px;
		background-color: black;
		margin-left: -2px;
		height: calc(100% + 2px); /* for borders */
		margin-top: -1px; /* for borders */
	}

	.fret {
		width: var(--fret-size);
		height: 2em;
		display: inline-block;
		border-left: 1px solid black;
		border-right: none;
		box-sizing: border-box;
	}
</style>
