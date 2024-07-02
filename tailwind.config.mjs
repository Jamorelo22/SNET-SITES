/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}','./node_modules/flowbite/**/*.js'],
	theme: {
		extend: {
			backgroundImage:{
				"close-menu":"url('src/images/icon-close.svg')",
				"open-menu":"url('src/images/icon-hamburger.svg')",
			}
		},
	},
	plugins: [
		require('flowbite/plugin')
	],
}
