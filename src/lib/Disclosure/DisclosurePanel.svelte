<script lang="ts">
	import {getContext} from 'svelte';
	import type {Writable} from 'svelte/store';

	let visible: Writable<boolean> = getContext('visible');
	let ID: Writable<number> = getContext('ID');

	let className: string | null = null;
	export {className as class}
	
	/**
	 * Always renders the component.
	 */
	export let constant: boolean = false;
</script>

<template>
	{#if constant || (!constant && $visible)}
		<div
			id="disclosure-panel-{$ID}"
			class={className}
		>
			<slot />
		</div>
	{/if}
</template>