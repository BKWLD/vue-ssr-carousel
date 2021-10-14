<!-- Standard Block renderer -->

<template lang='pug'>

.example

	//- Layout stuff
	header
		h1 {{ page.title }}
		nav
			layout-logo
			layout-nav

	//- The article
	nuxt-content(:document='page')

</template>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<script lang='coffee'>
import pageMixin from '@bkwld/cloak/mixins/page'
import SsrCarousel from '../../src/ssr-carousel'

export default
	name: 'Page'
	mixins: [ pageMixin ]

	components: { SsrCarousel }

	# Get Tower data
	asyncData: ({ app, params, $content }) ->

		# Don't query for these paths
		return app.$notFound() if params.example in [ '__webpack_hmr' ]

		# Get data
		page = await $content(params.example || 'basic').fetch()
		return app.$notFound() unless page

		# Set data
		return { page }

</script>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<style lang='stylus' scoped>

.example
	+tablet-up()
		padding-top header-h
	+tablet-down()
		padding-top header-h-mobile

	// Used in the gutters example
	fluid --fluid-gutter, 40, 20

header
	fluid-space margin-bottom, 'm'

	// On desktop, put nav on right side
	+tablet-up()
		display flex
		align-items center
		> :last-child
			flex-grow 1
			text-align right

// Page title
h1
	style-h1()
	color secondary-color

.layout-logo
	+tablet-down()
		display none

.layout-nav
	margin-top 5px

// Seperate regions on a page
h2
	fluid-space margin-top, 'm'
	fluid-space margin-bottom, 's'
	style-h2()

// Syntax highlighting
>>> pre
	background darken(primary-background, 15%)
	border 1px solid darken(primary-background, 30%)
	basic-border-radius()
	fluid-space margin-v, 's'
>>> code
	font-size 14px
	line-height 1.2

</style>
