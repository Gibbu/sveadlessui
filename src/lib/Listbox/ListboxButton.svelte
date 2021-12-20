<script lang="ts">
	import {getContext} from 'svelte';
	import type {Writable} from 'svelte/store';
	
	let visible: Writable<boolean> = getContext('visible');
	let listboxBtn: Writable<Element> = getContext('listboxBtn');
	let ID: Writable<number> = getContext('ID');

	let className: string | null = null;
	export {className as class}
</script>

<template>
	<button
		bind:this={$listboxBtn}
		id="listbox-button-{$ID}"
		type="button"
		aria-haspopup="true"
		aria-expanded={$visible}
		aria-controls={$visible ? `listbox-options-${$ID}` : undefined}
		class={className}
		on:click={() => $visible = !$visible}
	>
		<slot />
	</button>
</template>