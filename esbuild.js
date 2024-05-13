const esbuild = require("esbuild");
const postCssPlugin = require('esbuild-style-plugin')

esbuild
	.build({
		entryPoints: ["client/App.tsx", "client/global.css"],
		outdir: "public/assets",
		bundle: true,
		// watch: true,
		minify: true,
		plugins: [
			postCssPlugin({
				postcss: {
					plugins: [require('tailwindcss'), require('autoprefixer')],
				},
			}),
		],
	})
	.then(() => console.log("⚡ Build complete! ⚡"))
	.catch(() => process.exit(1));