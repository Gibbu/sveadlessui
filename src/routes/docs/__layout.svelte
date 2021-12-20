<script lang="ts">
	import {page} from '$app/stores';

	const pages = [
		{
			links: [
				{
					href: '',
					text: 'Home'
				},
				{
					href: 'helpers',
					text: 'Helpers'
				},
				{
					href: 'changelog',
					text: 'Changelog'
				}
			]
		},
		{
			title: 'Components',
			links: [
				{
					href: 'menu',
					text: 'Menu'
				},
				{
					href: 'listbox',
					text: 'Listbox'
				}
			]
		}
	]

	$: active = (href: string): boolean => {
		const path = $page.path.split('/')[2];
		return path === href || !href && !path;
	}
</script>

<template>
	<div class="max-w-screen-xl w-full mx-auto py-10 px-5 gap-16 md:grid md:grid-cols-[15.625rem,1fr] md:items-start">
		<aside class="top-24 mb-10 md:mb-0 md:sticky">
			{#each pages as {title, links}}
				{#if title}
					<h4 class="text-xs uppercase text-gray-500 font-black mb-2 mt-8 pointer-events-none select-none">{title}</h4>
				{/if}
				<ul>
					{#each links as {href, text}}
						<li class="mb-1 last:mb-0">
							<a href="/docs/{href}" class="px-3 py-2 rounded block -mx-3 text-sm font-medium select-none hover:bg-gray-800 {active(href) ? 'text-brand bg-brand/10 hover:bg-brand/10' : ''}">
								{text}
							</a>
						</li>
					{/each}
				</ul>
			{/each}
			<small class="text-xs font-medium mt-2 block text-gray-600">More coming soon...</small>
		</aside>
		<main class="max-w-full prose prose-invert prose-a:text-brand hover:prose-a:text-brand-dark prose-tr:flex prose-th:flex-1 prose-td:flex-1 prose-blockquote:text-sm prose-blockquote:text-gray-500 prose-blockquote:border-gray-700">
			<slot />
		</main>
	</div>
</template>