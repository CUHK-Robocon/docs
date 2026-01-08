// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: "https://cuhk-robocon.github.io",
	base: "/docs",
	integrations: [
		starlight({
			title: 'CUHK Robocon Team Docs',
			logo: {
				light: './src/assets/logo-black.svg',
				dark: './src/assets/logo-white.svg',
			},
			sidebar: [
				{ label: 'Getting started', slug: 'index' },
				{
					label: 'VESC 6',
					items: [
						'vesc-6/introduction',
					],
				},
				{
					label: 'Did I ask?',
					items: [
						'did-i-ask/welcome',
					],
				},
			],
		}),
	],
});
