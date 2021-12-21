<script lang="ts">
	import {writable} from 'svelte/store';
	import {setContext} from 'svelte';
	import {useId} from '../utils/ids';
	
	const ID = useId();
	let visible = writable(false);

	setContext('visible', visible);
	setContext('ID', ID);

	let className: string | null = null;
	export {className as class}
</script>

<template>
	<div class={className}>
		<slot open={$visible} />
	</div>
</template>