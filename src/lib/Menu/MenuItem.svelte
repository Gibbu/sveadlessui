<script lang="ts">
	import {getContext, onMount} from 'svelte';
	import {useId} from '../utils/ids';
	import {ERROR} from '../utils/error';

	import type {Writable} from 'svelte/store';

	const ID = useId();
	let menuGroup: boolean | null = getContext('menuGroup');
	let menuItemsGroup: boolean | null = getContext('menuItemsGroup');
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

		if (!menuGroup) ERROR('<MenuItem /> must a grandchild of <Menu />');
		if (!menuItemsGroup) ERROR('<MenuItem /> must a child of <MenuItems />')
		if (!child) ERROR('<MenuItem /> component must have 1 child element');

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