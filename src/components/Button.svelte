<script lang="ts">
	import {classes} from '$lib';

	export let style: 'brand' | 'secondary';
	export let href: string | null = null;

	let className: string = '';
	export {className as class}
	
	const classList = classes(
		'inline-flex items-center px-4 py-2',
		'text-sm font-medium',
		'rounded cursor-pointer select-none',
		[style === 'brand', 'bg-brand text-black border border-brand hover:bg-brand-light focus:bg-brand-dark focus:outline outline-1 outline-brand outline-offset-[3px]'],
		[style === 'secondary', 'bg-gray-800 border border-gray-700 hover:bg-gray-700 hover:border-gray-500 hover:text-gray-50 focus:border-gray-300 focus:outline focus:outline-1 focus:outline-gray-300'],
		className
	);
</script>

<template>
	{#if href}
		<a {href} class={classList}>
			<slot />
		</a>
	{:else}
		<button type="button" class={classList} on:click>
			<slot />
		</button>
	{/if}
</template>