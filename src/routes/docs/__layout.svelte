<script lang="ts">
	import {page} from '$app/stores';

	$: active = (href: string): boolean => {
		return $page.path.split('/').pop() === href;
	}
</script>

<template>
	<div class="max-w-screen-xl mx-auto py-10 px-5 grid grid-cols-[15.625rem,1fr] items-start gap-16">
		<aside class="sticky top-24">
			<ul>
				<li>
					<a href="/docs/menu" class="px-4 py-3 rounded block -mx-4 text-sm font-medium {active('menu') ? 'text-brand bg-brand/10' : ''}">
						Menu (Dropdown)
					</a>
				</li>
			</ul>
			<small class="text-xs font-medium mt-4 block text-gray-600">More coming soon...</small>
		</aside>
		<main class="max-w-full prose prose-invert prose-tr:flex prose-th:flex-1 prose-td:flex-1 prose-blockquote:text-sm prose-blockquote:text-gray-500 prose-blockquote:border-gray-700">
			<slot />
		</main>
	</div>
</template>