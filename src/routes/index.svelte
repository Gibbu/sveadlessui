<script lang="ts">
	import Button from '$components/Button.svelte';

	let copiedText: boolean = false;
	const copy = async(): Promise<void> => {
		await navigator.clipboard.writeText('npm install sveadlessui -D');
		copiedText = true;
		setTimeout(() => copiedText = false, 3000);
	}

	const pages = [
		{
			href: 'menu',
			text: 'Menu',
			description: `Context menus, overflow actions or dropdowns.`
		},
		{
			href: 'listbox',
			text: 'Listbox',
			description: `Select dropdowns`
		}
	]
</script>

<template>
	<main class="max-w-screen-xl mx-auto px-5">
		<section class="h-[35rem] flex flex-col justify-center items-start mt-20 md:h-[31.25rem]">
			<h1 class="text-3xl text-center font-bold text-white leading-[1.3] md:text-5xl md:text-left md:leading-[1.3]">A scuffed version of the HeadlessUI component library, for Svelte.</h1>
			<small class="block w-full mt-2 text-xs text-center font-medium text-gray-700 md:text-left">There's most likely a better way of doing this. But, it works-ish.</small>
			<div class="mt-16 w-full flex flex-col gap-4 md:flex-row">
				<Button style="brand" href="/docs">Get Started</Button>
				<Button style="secondary" on:click={copy}>
					npm install sveadlessui -D
					{#if copiedText}
						<small class="ml-1 text-xs font-medium text-gray-500">(copied)</small>
					{/if}
				</Button>
			</div>
		</section>

		<h2 class="text-sm font-semibold mb-4 text-gray-500">Available Components</h2>
		<section class="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
			{#each pages as {href, text, description}}
				<Button style="secondary" href="/docs/{href}" class="flex-col !items-start">
					<p class="text-lg text-gray-100">{text}</p>
					<small class="block text-xs mt-1 opacity-75">{description}</small>
				</Button>
			{/each}
		</section>
	</main>
</template>