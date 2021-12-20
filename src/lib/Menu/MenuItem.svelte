<script lang="ts">
	import {getContext, onMount} from 'svelte';
	import {useId} from '../utils/ids';

	import type {Writable} from 'svelte/store';

	const ID = useId();
	let activeItem: Writable<number> = getContext('activeItem');
	let visible: Writable<boolean> = getContext('visible');

	/**
	 * Whether or not the item is the disabled for keyboard navigation and ARIA purposes.
	 */
	export let disabled: boolean = false;

	let active: boolean = $activeItem === $ID;

	let self: Element;
	let child: Element;

	const setActive = (): void => {
		$activeItem = $ID;
		active = true;
	}
	const removeActive = (): void => {
		$activeItem = 0;
		active = false;
	}

	onMount(() => {
		child = self?.children[0];
		if (!child) {
			console.error('[Svelte HeadlessUI] MenuItem must have 1 child element.');
			return;
		}

		if (disabled) {
			child.setAttribute('disabled', 'true');
		} else {
			child.setAttribute('id', `menu-item-${$ID}`);
			child.setAttribute('role', 'menuitem');
			child.setAttribute('tabindex', '-1');
			child.addEventListener('mouseenter', setActive);
			child.addEventListener('mouseleave', removeActive);
			child.addEventListener('click', () => $visible = false);
		}
	})
</script>

<template>
	<div bind:this={self}>
		<slot
			active={$activeItem === $ID || active}
			{disabled}
		/>
	</div>
</template>