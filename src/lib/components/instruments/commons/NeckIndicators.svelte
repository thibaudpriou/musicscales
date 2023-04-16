<script lang="ts">
	import { computeFretRatio } from '$lib/utils';

	const getNutDistanceRatio = (fretPos: number, fromFret = 0) => {
		const frets = Array.from(Array(fretPos - fromFret)).map((_v, idx) => idx + fromFret);

		const distanceFromFret = frets.map(computeFretRatio).reduce((s, v) => s + v, 0);

		return distanceFromFret;
	};
</script>

<div class="indicators">
	<span
		class="indicator indicator-3"
		style:--prev-distance-ratio={getNutDistanceRatio(3)}
		style:--fret-distance-ratio={computeFretRatio(3)}
	/>
	<span
		class="indicator indicator-5"
		style:--prev-distance-ratio={getNutDistanceRatio(5, 3)}
		style:--fret-distance-ratio={computeFretRatio(5)}
	/>
	<span
		class="indicator indicator-7"
		style:--prev-distance-ratio={getNutDistanceRatio(7, 5)}
		style:--fret-distance-ratio={computeFretRatio(7)}
	/>
	<span
		class="indicator indicator-9"
		style:--prev-distance-ratio={getNutDistanceRatio(9, 7)}
		style:--fret-distance-ratio={computeFretRatio(9)}
	/>
	<span
		class="indicator indicator-12 indicator-12-1"
		style:--prev-distance-ratio={getNutDistanceRatio(12, 9)}
		style:--fret-distance-ratio={computeFretRatio(12)}
	/>
	<span class="indicator indicator-12-2" style:--fret-distance-ratio={computeFretRatio(12)} />
</div>

<style>
	.indicators {
		display: flex;
		align-items: center;
		height: 2em;
	}

	.indicator {
		width: 0;
		height: 0;
		display: inline;
		position: relative;
		margin-left: calc(var(--fret-size) * var(--prev-distance-ratio));
	}

	.indicator::after {
		content: '';
		position: absolute;
		width: var(--neck-indicators-size);
		height: var(--neck-indicators-size);
		display: inline-block;
		border-radius: 50%;
		clip-path: circle(var(--neck-indicators-size));
		background-color: black;
		left: calc(var(--fret-size) * var(--fret-distance-ratio) * -1 / 2);
	}

	.indicator-12-1::after {
		/* shift to the left */
		left: calc(
			var(--fret-size) * var(--fret-distance-ratio) * -1 / 2 - var(--neck-indicators-size)
		);
	}
	.indicator-12-2::after {
		/* shift to the right */
		left: calc(
			var(--fret-size) * var(--fret-distance-ratio) * -1 / 2 + var(--neck-indicators-size)
		);
	}
</style>
