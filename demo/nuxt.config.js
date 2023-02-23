// Nuxt config
export default {

	// @nuxt/content can't be loaded from module
	modules: ['@nuxt/content'],

	// Load boilerplate and this package's module
	buildModules: [
		'@cloak-app/boilerplate',
	],

	// Plugins
	plugins: [
		process.env.NODE_ENV == 'test' ?
			'~/plugins/register-instrumented' :
			'~/plugins/register-src',
	],

	// Enable crawler to find dynamic pages
	generate: {
		routes: () => ['/'],
	},

	// Cloak Boilerplate settings
	cloak: {
		boilerplate: {
			siteName: 'vue-ssr-carousel demo',
			excludedModules: [
				'fontagon',
				'generate', // Excluded because it disables the crawler
			],
		},
	},

	// @nuxt/content
	content: {
		liveEdit: false,
		markdown: {
			prism: {
				theme: 'prism-themes/themes/prism-atom-dark.css'
			}
		}
	},

}
