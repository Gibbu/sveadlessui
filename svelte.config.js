import path from 'path';
import adapter from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';
import {mdsvex} from 'mdsvex';
import slug from 'rehype-slug';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.svx'],
	preprocess: [
		preprocess(),
		mdsvex({
			rehypePlugins: [slug]
		})
	],
	kit: {
		adapter: adapter(),
		target: '#svelte',
		package: {
			exports: (file) => file === 'index.js'
		},
		vite: {
			resolve: {
				alias: {
					'$components': path.resolve('./src/components')
				}
			},
			server: {
				fs: {
					allow: ['.']
				}
			}
		}
	}
};

export default config;
