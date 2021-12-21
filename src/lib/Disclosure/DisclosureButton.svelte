<script lang="ts">
	import {getContext} from 'svelte';
	import type {Writable} from 'svelte/store';

	let visible: Writable<boolean> = getContext('visible');
	let ID: Writable<number> = getContext('ID');

	let className: string | null = null;
	export {className as class}
</script>

<template>
	<button
		id="disclosure-button-{$ID}"
		type="button"
		class={className}
		aria-expanded={$visible}
		aria-controls={$visible ? `disclosure-panel-${$ID}` : null}
		on:click={() => $visible = !$visible}
	>
		<slot />
	</button>
</template>