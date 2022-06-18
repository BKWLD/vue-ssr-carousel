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
		'~/plugins/register-self'
	],

	// Enable crawler to find dynamic pages
	generate: {
		crawler: true,
		routes: () => ['/'],
	},

	// Cloak Boilerplate settings
	cloak: {
		boilerplate: {
			siteName: 'vue-ssr-carousel demo',
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
