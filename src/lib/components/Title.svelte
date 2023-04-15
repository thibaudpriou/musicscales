<script lang="ts">
	import type { Note, ScaleInfo } from '$lib/types';

	export let notes: Note[];
	export let selectedNote: Note;
	export let scales: ScaleInfo[];
	export let selectedScale: ScaleInfo;

	export let displayEnharmonic = false;
	export let displayRelativeScale = false;

	const findEnharmonic = (note: Note) =>
		notes.find((n) => !!n.enharmonic && n.pitchOffset === note.pitchOffset);

	const findRelative = (note: Note, scale: (typeof scales)[0]) => {
		if (scale.type === 'major') {
			return {
				note: notes.find((n) => !n.enharmonic && n.pitchOffset === (note.pitchOffset + 9) % 12),
				scale: scales.find((s) => s.type === 'natural-minor')
			};
		} else if (scale.type === 'natural-minor') {
			return {
				note: notes.find((n) => !n.enharmonic && n.pitchOffset === (note.pitchOffset + 3) % 12),
				scale: scales.find((s) => s.type === 'major')
			};
		}

		return undefined;
	};

	$: enharmonic = displayEnharmonic ? findEnharmonic(selectedNote) : undefined;
	$: relativeScale = displayRelativeScale ? findRelative(selectedNote, selectedScale) : undefined;
	$: relativeEnharmonic =
		relativeScale?.note && displayEnharmonic ? findEnharmonic(relativeScale?.note) : undefined;
</script>

<span>
	{selectedNote.label}
	{#if enharmonic}
		<span>/ {enharmonic?.label}</span>
	{/if}
</span>
<span>{selectedScale.label}</span>

{#if relativeScale?.note}
	<span class="relative">
		<span>
			{relativeScale.note.label}
			{#if relativeEnharmonic}
				{#if relativeEnharmonic}
					<span>/ {relativeEnharmonic.label}</span>
				{/if}
			{/if}
		</span>
		<span>{relativeScale.scale?.label}</span>
	</span>
{/if}

<style>
	.relative {
		font-size: 0.5em;
	}
</style>
