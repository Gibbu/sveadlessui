<script lang="ts">
	import {getContext, onMount} from 'svelte';
	import {ERROR} from '../utils/error';
	import type {Writable} from 'svelte/store';

	let groupID: Writable<number | null> = getContext('groupID');

	let className: string | null = null;
	export {className as class}
	
	/**
	 * Clicking the label won't toggle the Switch.
	 */
	export let passive: boolean = false;

	onMount(() => {
		if (!$groupID) ERROR('<SwitchLabel /> must a child component of <SwitchGroup />');
	})
</script>

<template>
	<label
		for={!passive ? `switch-${$groupID}` : undefined}
		class={className}
	>
		<slot />
	</label>
</template>