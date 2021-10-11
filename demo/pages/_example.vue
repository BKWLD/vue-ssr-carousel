<!-- Standard Block renderer -->

<template lang='pug'>

.example.max-w
	h1 {{ page.title }}

	//- Make the carousel with a
	ssr-carousel(v-bind='page.carousel')
		slide(v-for='i in page.slides' :key='i' :index='i')

</template>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<script lang='coffee'>
import pageMixin from '@bkwld/cloak/mixins/page'
import SsrCarousel from '../../index'

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
		padding-top header-h-min

h1
	fluid-space margin-bottom, 'm'

</style>
