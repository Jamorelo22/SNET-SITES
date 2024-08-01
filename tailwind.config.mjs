/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}','./node_modules/flowbite/**/*.js'],
	theme: {
		extend: {
			backgroundImage:{
				"close-menu":"url('/Img/icon-close.svg')",
				"open-menu":"url('/Img/icon-hamburger.svg')",
				"fondo":"url('/Img/fondo.svg')",
			}
		},
	},
	plugins: [
		require('flowbite/plugin')
	],
}
