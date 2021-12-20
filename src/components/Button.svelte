<script lang="ts">

	export let style: 'brand' | 'secondary';
	export let href: string | null = null;

	let className: string = '';
	export {className as class}
	
	const classes = `
		cursor-pointer inline-flex items-center px-4 py-2 rounded text-sm font-medium
		${style === 'brand' ? 'bg-brand text-black border border-brand hover:bg-brand-light focus:bg-brand-dark focus:outline outline-1 outline-brand outline-offset-[3px]' : null}
		${style === 'secondary' ? 'bg-gray-800 border border-gray-700 hover:bg-gray-700 hover:border-gray-500 hover:text-gray-50 focus:border-gray-300 focus:outline-none' : null}
		${className}
	`;
</script>

<template>
	{#if href}
		<a {href} class={classes}>
			<slot />
		</a>
	{:else}
		<button type="button" class={classes} on:click>
			<slot />
		</button>
	{/if}
</template>