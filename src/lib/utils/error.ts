/**
 * Simple wrapper for throwing errors.
 * @param message The message to be logged to the console.
 */
export const ERROR = (message: string) => {
	throw new Error(`[SveadlessUI] ${message}.`);
}