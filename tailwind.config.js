/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
	],
	prefix: "",
	theme: {

	},
	plugins: [require('@tailwindcss/typography')],

}