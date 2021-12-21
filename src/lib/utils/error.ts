export const ERROR = (message: string) => {
	throw new Error(`[SveadlessUI] ${message}.`);
}