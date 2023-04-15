<div class="indicators">
	<span class="indicator indicator-3" />
	<span class="indicator indicator-5" />
	<span class="indicator indicator-7" />
	<span class="indicator indicator-9" />
	<span class="indicator indicator-12" />
	<span class="indicator" />
</div>

<style>
	.indicators {
		margin-left: var(--first-margin-left); /* ! REMOVE */
	}

	.indicator {
		width: var(--neck-indicators-size);
		height: var(--neck-indicators-size);
		display: inline-block;
		border-radius: 50%;
		clip-path: circle(1em);
		background-color: black;
	}

	.indicator-3 {
		margin-left: calc(var(--fret-size) * 2.5);
	}
	.indicator-5 {
		margin-left: calc(var(--fret-size) * 2 - var(--neck-indicators-size));
	}
	.indicator-7 {
		margin-left: calc(var(--fret-size) * 2 - var(--neck-indicators-size) * 2);
	}
	.indicator-9 {
		margin-left: calc(var(--fret-size) * 2 - var(--neck-indicators-size) * 3);
	}
	.indicator-12 {
		margin-left: calc(var(--fret-size) * 3 - var(--neck-indicators-size) * 3);
	}
</style>
