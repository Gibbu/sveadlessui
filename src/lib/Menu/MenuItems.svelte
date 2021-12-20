<script lang="ts">
	import clickOutside from '../utils/clickoutside';
	import {getContext, tick} from 'svelte';
	import type {Writable} from 'svelte/store';

	let className: string | null = null;
	export {className as class}

	let visible: Writable<boolean> = getContext('visible');
	let menuBtn: Writable<HTMLElement|null> = getContext('menuBtn');
	let ID: Writable<number> = getContext('ID');
	let activeItem: Writable<number> = getContext('activeItem');

	let isMounted: boolean = false;
	let items: NodeListOf<Element>;
	let index: number = -1;

	const keyActions = async(e: KeyboardEvent): Promise<void> => {
		if (e.key === 'Escape') $visible = false;
		if (e.key === 'Enter') {
			const btn = items[index] as HTMLButtonElement;
			btn.click();
			$visible = false;
		}
		if (e.key === 'ArrowUp' && index !== 0) {
			if (index === -1) index = items.length - 1;
			else if (index >= 0) index--;
			$activeItem = parseInt(items[index].id.replace('menu-item-', ''))
		}
		if (e.key === 'ArrowDown' && index !== items.length - 1) {
			index++;
			$activeItem = parseInt(items[index].id.replace('menu-item-', ''));
		}
	}

	const preventActions = (e: KeyboardEvent): void => {
		if (e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === 'Enter') e.preventDefault();
	}
	const mount = async(): Promise<void> => {
		isMounted = true;
		window.addEventListener('keyup', keyActions);
		await tick();
		items = document.querySelector(`#menu-items-${$ID}`).querySelectorAll('[id^="menu-item-"]');
	}
	const destroy = async(): Promise<void> => {
		window.removeEventListener('keyup', keyActions);
		items = null;
		index = -1;
		$activeItem = null
	}

	$: if ($visible) {
		mount();
	} else if (!$visible && isMounted) {
		destroy();
	}
</script>

<svelte:window on:keydown={preventActions} />

<template>
	{#if $menuBtn && $visible}
		<div
			id="menu-items-{$ID}"
			role="menu"
			class={className}
			aria-labelledby="menu-button-{$ID}"
			aria-activedescendant={$activeItem ? `menu-item-${$activeItem}` : null}
			tabindex="0"
			use:clickOutside={{
				exclude: $menuBtn,
				outside: () => $visible = false
			}}
		>
			<slot />
		</div>
	{/if}
</template>