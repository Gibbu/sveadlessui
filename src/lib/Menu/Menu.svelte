<script lang="ts">
	import {writable} from 'svelte/store';
	import {setContext} from 'svelte';
	import {useId} from '../utils/ids';

	let className: string | null = null;
	export {className as class}

	let visible = writable(false);
	let menuBtn = writable<Element|null>(null);
	let activeItem = writable<number|null>(null);
	let ID = useId();

	setContext('visible', visible);
	setContext('menuBtn', menuBtn);
	setContext('activeItem', activeItem);
	setContext('ID', ID);

	setContext('menuGroup', true) // Used to check if child components are inside the correct positions.
</script>

<template>
	<div class={className}>
		<slot open={$visible} />
	</div>
</template>