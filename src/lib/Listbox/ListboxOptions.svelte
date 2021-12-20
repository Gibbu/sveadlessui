<script lang="ts">
	import {getContext, tick} from 'svelte';
	import clickoutside from '../utils/clickoutside';
	import type {Writable} from 'svelte/store';

	let visible: Writable<boolean> = getContext('visible');
	let listboxBtn: Writable<HTMLButtonElement> = getContext('listboxBtn');
	let ID: Writable<number> = getContext('ID');
	let values: Writable<any[]> = getContext('values');
	let selectedValue: Writable<any> = getContext('selectedValue');
	let activeItem: Writable<number> = getContext('activeItem');

	let className: string | null = null;
	export {className as class}

	let isMounted: boolean = false;
	let options: NodeListOf<Element>;
	let index: number = -1;

	const keyActions = (e: KeyboardEvent): void => {
		if (e.key === 'Escape') $visible = false;
		if (e.key === 'Enter') {
			$selectedValue = $values[index];
			$visible = false;
			$listboxBtn.focus();
		}
		if (e.key === 'ArrowUp' && index !== 0) {
			if (index === -1) index = options.length - 1;
			else if (index >= 0) index--;
			$activeItem = parseInt(options[index].id.replace('listbox-option-', ''))
		}
		if (e.key === 'ArrowDown' && index !== options.length - 1) {
			index++;
			$activeItem = parseInt(options[index].id.replace('listbox-option-', ''));
		}
	}

	const preventActions = (e: KeyboardEvent): void => {
		if (e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === 'Enter') e.preventDefault();
	}

	const mount = async(): Promise<void> => {
		isMounted = true;
		window.addEventListener('keyup', keyActions);
		await tick();
		options = document.querySelector(`#listbox-options-${$ID}`)?.querySelectorAll('[id^="listbox-option-"]');
	}
	const destroy = async(): Promise<void> => {
		window.removeEventListener('keyup', keyActions);
		options = null;
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
	{#if $visible}
		<ul
			id="listbox-options-{$ID}"
			class={className}
			aria-labelledby="listbox-button-{$ID}"
			aria-orientation="vertical"
			aria-activedescendant={$activeItem ? `listbox-option-${$activeItem}` : null}
			role="listbox"
			tabindex="0"
			use:clickoutside={{
				exclude: $listboxBtn,
				outside: () => $visible = false
			}}
		>
			<slot open={$visible} />
		</ul>
	{/if}
</template>