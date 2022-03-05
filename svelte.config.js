import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

import mdsvexConfig from './mdsvex.config.mjs';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [preprocess(), mdsvex(mdsvexConfig)],
	extensions: ['.svelte', '.md'],

	kit: {
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html

		vite: {
			server: {
				fs: {
					allow: ['.', '..']
				}
			}
		}
	}
};

export default config;
