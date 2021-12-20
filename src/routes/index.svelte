<script lang="ts">
	import Button from '$components/Button.svelte';

	let copiedText: boolean = false;
	const copy = async(): Promise<void> => {
		await navigator.clipboard.writeText('npm install sveadlessui -D');
		copiedText = true;
		setTimeout(() => copiedText = false, 3000);
	}
</script>

<template>
	<main class="max-w-screen-xl mx-auto px-5">
		<section class="h-96 flex flex-col justify-center items-start mt-20">
			<h1 class="text-3xl font-bold text-white">The scuffed version of the HeadlessUI component library,<br>but for Svelte.</h1>
			<small class="text-xs font-medium text-gray-700">There's most likely a better way of doing this.</small>
			<div class="mt-10 flex gap-4">
				<Button style="brand" href="/docs/menu">Get Started</Button>
				<Button style="secondary" on:click={copy}>
					npm install sveadlessui -D
					{#if copiedText}
						<small class="ml-1 text-xs font-medium text-gray-500">(copied)</small>
					{/if}
				</Button>
			</div>
		</section>

		<h2 class="text-lg mb-4 text-gray-100">Available Components</h2>
		<section class="grid grid-cols-3 gap-4">
			<a href="/docs/menu" class="bg-gray-800 shadow-md px-6 py-4 rounded transition hover:shadow-lg hover:-translate-y-1 hover:text-gray-50">Menu (Dropdown)</a>
		</section>
	</main>
</template>