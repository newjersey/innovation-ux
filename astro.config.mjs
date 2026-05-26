// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://newjersey.github.io',
	base: "/innovation-ux",
	integrations: [
		starlight({
			title: 'NJIA UX',
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
							{ label: 'Share findings', link: 'how-we-work/research/share-findings/' },
							{
								label: 'Resources',
								items: [
									{ label: 'Resources overview', link: 'how-we-work/research/resources/' },
									{ label: '30-minute guide', link: 'how-we-work/research/resources/30-minute-conversation-guide/' },
									{ label: '60-minute guide', link: 'how-we-work/research/resources/60-minute-conversation-guide/' },
									{ label: 'Remote research plan', link: 'how-we-work/research/resources/remote-research-plan/' },
									{ label: 'In-person research plan', link: 'how-we-work/research/resources/in-person-research-plan/' },
								],
							},
							],
						},
					],
				},
			],
		}),
	],
});
