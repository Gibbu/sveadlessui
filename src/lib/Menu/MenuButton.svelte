<script lang="ts">
	import {onMount, onDestroy, getContext} from 'svelte';
	import type {Writable} from 'svelte/store';
	
	let visible: Writable<boolean> = getContext('visible');
	let menuBtn: Writable<Element> = getContext('menuBtn');
	let ID: Writable<number> = getContext('ID');

	let self: Element;
	let child: Element;

	const toggle = () => {
		$visible = !$visible;
	}

	$: if ($visible) {
		child?.setAttribute('aria-controls', `menu-items-${$ID}`);
		child?.setAttribute('aria-expanded', 'true');
	} else {
		child?.removeAttribute('aria-controls');
		child?.setAttribute('aria-expanded', 'false');
	}


	onMount(() => {
		child = self.children[0];
		$menuBtn = child;
		
		if (!child) {
			console.error('[Svelte HeadlessUI] MenuButton must have 1 child element.');
			return;
		}

		child.setAttribute('id', `menu-button-${$ID}`);
		child.setAttribute('aria-haspopup', 'true');
		child.setAttribute('aria-expanded', $visible ? 'true' : 'false');
		child.setAttribute('tabindex', '-1');
		child.addEventListener('click', toggle);
	});
	onDestroy(() => {
		child?.removeEventListener('click', toggle);
	})
</script>

<template>
	<div bind:this={self}>
		<slot active={$visible} />
	</div>
</template>