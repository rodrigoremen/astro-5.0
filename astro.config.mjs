// @ts-check
import { defineConfig, envField } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	output: 'server',
	integrations: [tailwind()],
	env: {
		schema: {
			SHOW_BUY_BOTTON: envField.boolean({
				context: 'server',
				access: 'public',
			}),
			SCOPE_API_ENDPOINT: envField.string({
				context: 'server',
				access: 'public',
			}),
		},
	},
});
