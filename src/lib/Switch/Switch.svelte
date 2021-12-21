<script lang="ts">
	import {getContext} from 'svelte';
	import {useId} from '../utils/ids';
	import type {Writable} from 'svelte/store';

	const ID = useId();
	let groupID: Writable<number | null> = getContext('groupID');

	let className: string | null = null;
	export {className as class}
	export let enabled: boolean = false;

	const toggle = (): void => {
		enabled = !enabled;
	}
</script>

<template>
	<button
		id="switch-{$groupID || $ID}"
		type="button"
		class={className}
		role="switch"
		aria-checked={enabled}
		tabindex="0"
		on:click={toggle}
	>
		<slot />
	</button>
</template>