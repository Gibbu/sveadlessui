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
		<section class="h-[31.25rem] flex flex-col justify-center items-start mt-20">
			<h1 class="text-5xl font-bold text-white leading-[1.3]">A scuffed version of the HeadlessUI component library, for Svelte.</h1>
			<small class="block mt-2 text-xs font-medium text-gray-700">There's most likely a better way of doing this. But, it works-ish.</small>
			<div class="mt-16 flex gap-4">
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
		<section class="grid grid-cols-3 gap-4">
			{#each pages as {href, text, description}}
				<Button style="secondary" href="/docs/{href}" class="flex-col !items-start">
					<p class="text-lg text-gray-100">{text}</p>
					<small class="block text-xs mt-1 opacity-75">{description}</small>
				</Button>
			{/each}
		</section>
	</main>
</template>