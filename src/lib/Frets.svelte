<div class="string">
	{#each Array(12) as _i}
		<span class="position" />
	{/each}
</div>

<style>
	.string {
		display: flex;
	}

	.position {
		width: 2em;
		height: 2em;
		display: inline-block;
		border-left: 1px solid black;
		border-right: none;
		box-sizing: border-box;
	}
	.position:first-child::before {
		display: block;
		content: '';
		width: 4px;
		background-color: black;
		margin-left: -2px;
		height: calc(100% + 2px); /* for borders */
		margin-top: -1px; /* for borders */
	}
</style>
