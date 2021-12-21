<script lang="ts">
	import {setContext} from 'svelte';
	import {useId} from '../utils/ids';
	
	let ID = useId();

	setContext('groupID', ID);

	let className: string | null = null;
	export {className as class}
</script>

<template>
	<div class={className}>
		<slot />
	</div>
</template>