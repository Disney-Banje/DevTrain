/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		theme: {
			screen: {
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1536px',
			},
			colors: {
				'black': '#252422',
				'orange': '#eb5e28',
				'simon': '#403d39',
				'liveston': '#ccc5b9',
				'white': '#fffcf2'
			}
		},
		extend: {
			borderRadius: {
				md: '0.8rem',
				lg: '1.2rem',
				xl: '1.6rem',
				'2xl': '2rem',
				'4xl': '2rem',
			},
		},
	},
	plugins: [],
}
