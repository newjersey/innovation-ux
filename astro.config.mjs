// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://newjersey.github.io',
	base: "/innovation-design",
	integrations: [
		starlight({
			title: 'NJIA UX',
			customCss: [
				"./src/styles/custom.css",
			],
			lastUpdated: true,
			editLink: {
				baseUrl: 'https://github.com/newjersey/innovation-design/edit/main/',
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/newjersey/innovation-design' }],
			sidebar: [
				{ label: 'Home', link: '/' },
				{
					label: 'Research',
					items: [
						{ label: 'Overview', link: '/research/overview/' },
						{ label: 'Plan research', link: '/research/plan/' },
						{ label: 'Conduct research', link: '/research/conduct/' },
						{ label: 'Share findings', link: '/research/share-findings/' },
						{
							label: 'Resources',
							items: [
								{ label: 'Research resources', link: '/research/resources/' },
								{ label: '30-minute guide', link: '/research/30-minute-conversation-guide/' },
								{ label: '60-minute guide', link: '/research/60-minute-conversation-guide/' },
								{ label: 'Remote research plan', link: '/research/remote-research-plan/' },
								{ label: 'In-person research plan', link: '/research/in-person-research-plan/' },
							],
						},
					],
				},
				{
					label: 'How we work',
					items: [
						{ label: 'Overview', link: '/how-we-work/overview/' },
						{ label: 'Content Design & Language Access', link: '/how-we-work/content-design-language-access/' },
						{ label: 'Design', link: '/how-we-work/design/' },
						{ label: 'Grove', link: '/how-we-work/grove/' },
						{ label: 'Enablement', link: '/how-we-work/enablement/' },
						{ label: 'Leadership', link: '/how-we-work/leadership/' },
					],
				},
			],
		}),
	],
});
