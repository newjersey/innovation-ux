// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://newjersey.github.io',
	base: "/innovation-design",
	integrations: [
		starlight({
			title: 'NJIA Design',
			customCss: [
				"./src/styles/custom.css",
			],
			lastUpdated: true,
			editLink: {
				baseUrl: 'https://github.com/newjersey/innovation-design/edit/main/',
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/newjersey/innovation-design' }],
			sidebar: [
				{
					label: 'Guides',
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
				{
					label: 'Research',
					autogenerate: { directory: 'research' },
				},
			],
		}),
	],
});
