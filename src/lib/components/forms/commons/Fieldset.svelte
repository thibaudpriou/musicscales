<script lang="ts">
	export let legend: string;
</script>

<fieldset>
	<legend>{legend}</legend>
	<slot />
</fieldset>

<style>
	fieldset {
		display: flex;
		flex-direction: row;
		border: none;
	}
</style>
