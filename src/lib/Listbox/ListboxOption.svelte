<script lang="ts">
	import {getContext, onMount} from 'svelte';
	import {useId} from '../utils/ids';
	import type {Writable} from 'svelte/store';
	
	const ID = useId();
	let visible: Writable<boolean> = getContext('visible');
	let activeItem: Writable<number> = getContext('activeItem');
	let selected: Writable<number> = getContext('selected');
	let selectedValue: Writable<number> = getContext('selectedValue');
	let values: Writable<any[]> = getContext('values');
	
	let self: Element;

	let className: string | null = null;
	export {className as class}

	/**
	 * The value of the option.
	 */
	export let value: any;

	/**
	 * Whether or not the item is the disabled for keyboard navigation and ARIA purposes.
	 */
	export let disabled: boolean = false;

	let active: boolean = $activeItem === $ID;
	const setActive = (): void => {
		$activeItem = $ID;
		active = true;
	}
	const removeActive = (): void => {
		$activeItem = 0;
		active = false;
	}

	const select = (): void => {
		$selected = $ID;
		$selectedValue = value;
		$visible = false;
	}

	onMount(() => {
		if (!disabled) {
			if (!$values.includes(value)) $values = [...$values, value];
			
			self.addEventListener('click', select);
			self.addEventListener('mouseenter', setActive);
			self.addEventListener('mouseleave', removeActive);
		}
	})
</script>

<template>
	<li
		bind:this={self}
		id={!disabled ? `listbox-option-${$ID}` : undefined}
		class={className}
		role={!disabled ? 'role' : undefined}
		tabindex={!disabled ? -1 : undefined}
		aria-selected={!disabled ? $selectedValue === value : undefined}
	>
		<slot selected={$selectedValue === value} active={$activeItem === $ID || active} />
	</li>
</template>