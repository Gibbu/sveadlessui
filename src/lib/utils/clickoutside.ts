/**
 * @param node Element to hide when clicking outside.  
 * This element is parsed automatically.
 * @param options Object of options.
 * @param options.outside The function called when clicking outside of the element.
 * @param options.exlude The element to be excluded when calling the `options.outside` handler.
 */
export default (node: Element, options: {outside: () => void, exclude?: Element}): { destroy: () => void } => {
	const onClick = (event: MouseEvent & {target: Element}): void => {
		if (!options.exclude.contains(event.target) && !node.contains(event.target) && !event.defaultPrevented) {
			options.outside();
		}
	}

	document.addEventListener('click', onClick, true);

	return {
		destroy() {
			document.removeEventListener('click', onClick, true);
		}
	};
}