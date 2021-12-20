<script lang="ts">
	import {writable} from 'svelte/store';
	import {setContext} from 'svelte';
	import {useId} from '../utils/ids';
	
	let visible = writable(false);
	let listboxBtn = writable<HTMLButtonElement|null>(null);
	let selected = writable<number|null>(null);
	let selectedValue = writable<any>(null);
	let values = writable<any[]>([]);
	let activeItem = writable<number|null>(null);
	let ID = useId();
	
	setContext('visible', visible);
	setContext('listboxBtn', listboxBtn);
	setContext('selected', selected);
	setContext('selectedValue', selectedValue);
	setContext('values', values);
	setContext('activeItem', activeItem);
	setContext('ID', ID);
	
	let className: string | null = null;
	export {className as class}

	export let value: any = null;
	$: {
		value = $selectedValue;
	}
</script>

<template>
	<div class={className}>
		<slot open={$visible} />
	</div>
</template>