<!-- Standard Block renderer -->

<template lang='pug'>

article

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
import Visual from 'vue-visual'
import 'vue-visual/index.css'

# Include the slide in this chunk so it doens't require client side JS to inject
# styles. Since there aren't any other references to this component besides
# within the content *.md files, I think Nuxt can only client side mount this
# using nuxt/components but I want the demo site fully SSG everything, including
# extracting CSS.
import Slide from '~/components/slide'

export default
	name: 'Page'
	mixins: [ pageMixin ]

	components: { SsrCarousel, Visual }

	# Get Tower data
	asyncData: ({ app, params, $content }) ->

		# Get data
		page = await $content(params.page || 'index').fetch()
		return app.$notFound() unless page

		# Set data
		return { page }

</script>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<style lang='stylus' scoped>

article
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
	fluid-space margin-top, 'l'
	style-h2()

// Syntax highlighting
>>> pre
	background darken(primary-background, 15%)
	border 1px solid darken(primary-background, 30%)
	basic-border-radius()
	fluid-space margin-bottom, 's'
>>> code
	font-size 14px
	line-height 1.2

// Style body text, like notes
p
	line-height 1.5
	color lighten(primary-background, 50%)

	// Underline links
	a
		text-decoration underline

	// Style inline code
	code
		border 1px solid lighten(primary-background, 15%)
		border-radius 2px
		padding-h .3em
		background darken(primary-background, 10%)

// Add constant margins around demos
.ssr-carousel
	fluid-space margin-v, 's'

// Clear the effect of the page gutters
.clear-page-gutters
	fluid(margin-h,
		gutter * -1,
		gutter-mobile * -1,
		max-break: desktop,
		min-break: mobile)

</style>
