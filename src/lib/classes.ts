/**
 * Format classes.
 * @param classes The classes you wish to be displayed.  
 * If an Array is given it will do the following:
 * 1. Check the boolean of the first index. - Required.
 * 2. If first index is true, display 2nd index. - Required
 * 3. If first index is false, display 3rd index. Optional.
 * 
 * @example
 * ```js
 *	import {classes} from 'sveadlessui';
 *
 *	let active = false;
 *	let selected = true;
 *	let classList = classes(
 *		'text-sm font-medium',
 *		[active, 'text-teal-500', 'text-gray-500']
 *		[selected, 'bg-teal-500/10']
 *	);
 * console.log(classList); // 'text-sm font-medium text-gray-500 bg-teal-500/10'
 * ```
 */
export default (...classes: any): string => {
	return classes.map(klass => {
		if (Array.isArray(klass)) {
			if (klass[0]) return klass[1].trim();
			if (klass[2] && !klass[0]) return klass[2].trim();
			else return '';
		}
		return klass;
	}).join(' ').trim();
}