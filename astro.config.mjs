// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLinksValidator from 'starlight-links-validator';

// https://astro.build/config
export default defineConfig({
	site: 'https://newjersey.github.io',
	base: "/innovation-ux",
	integrations: [
		starlight({
			title: 'NJ Innovation Authority UX',
			head: [
				{ tag: 'meta', attrs: { property: 'og:image', content: 'https://newjersey.github.io/innovation-ux/og-image.png' } },
				{ tag: 'meta', attrs: { property: 'og:image:width', content: '1200' } },
				{ tag: 'meta', attrs: { property: 'og:image:height', content: '630' } },
				{ tag: 'meta', attrs: { property: 'og:image:alt', content: 'New Jersey Innovation Authority UX Practice Wiki: how we research, design, and write for New Jersey\'s public services' } },
				{ tag: 'meta', attrs: { name: 'twitter:image', content: 'https://newjersey.github.io/innovation-ux/og-image.png' } },
			],
			plugins: [starlightLinksValidator({ errorOnRelativeLinks: false })],
			customCss: [
				"./src/styles/custom.css",
			],
			lastUpdated: true,
			editLink: {
				baseUrl: 'https://github.com/newjersey/innovation-ux/edit/main/',
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/newjersey/innovation-ux' }],
			sidebar: [
				{ label: 'Home', link: '/' },
				{
					label: 'How we work',
					items: [
						{ label: 'Overview', link: 'how-we-work/' },
						{ label: 'Content Design', link: 'how-we-work/content-design/' },
						{ label: 'Design', link: 'how-we-work/design/' },
						{ label: 'Grove', link: 'how-we-work/grove/' },
						{ label: 'Enablement', link: 'how-we-work/enablement/' },
						{ label: 'Leadership', link: 'how-we-work/leadership/' },
						{
							label: 'Research',
							items: [
							{ label: 'Overview', link: 'how-we-work/research/' },
							{ label: 'Plan research', link: 'how-we-work/research/plan/' },
							{ label: 'Conduct research', link: 'how-we-work/research/conduct/' },
							{ label: 'Can we pay this participant?', link: 'how-we-work/research/can-we-pay/' },
							{ label: 'Share findings', link: 'how-we-work/research/share-findings/' },
							{ label: 'Resources', link: 'how-we-work/research/resources/' },
							],
						},
					],
				},
			],
		}),
	],
});
