import {onMount} from 'svelte';
import {writable, get} from 'svelte/store';
import type {Writable} from 'svelte/store';

let id: number = 0;
const generateId = (): number => ++id;

/**
 * Generates a unique ID.
 */
export const useId = (): Writable<number> => {
	const id = writable(typeof window !== 'undefined' ? generateId() : null);

	onMount(() => {
		if (get(id) === null) id.set(generateId());
	})

	return id;
}