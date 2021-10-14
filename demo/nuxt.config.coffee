# Use Cloak to make boilerplate
{ mergeConfig, makeBoilerplate, isDev, isGenerating } = require '@bkwld/cloak'
boilerplate = makeBoilerplate
	siteName: 'vue-ssr-carousel demo'
	cms: '@nuxt/content'

# Nuxt config
module.exports = mergeConfig boilerplate,

	modules: [
		'@nuxt/content'
		'vue-unorphan/nuxt/module'
		'vue-balance-text/nuxt/module'
	]

	# Enable crawler to find dynamic pages
	generate: crawler: true

	# Add production internal URL
	anchorParser: internalUrls: [
		# /^https?:\/\/(www\.)?domain\.com/
	]

	# @nuxt/content
	content:
		liveEdit: false
		markdown: prism: theme: 'prism-themes/themes/prism-atom-dark.css'
