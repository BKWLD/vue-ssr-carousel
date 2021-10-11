<!-- Standard Block renderer -->

<template lang='pug'>

.example.max-w
	h1 {{ page.title }}
	ssr-carousel(v-bind='page.carousel')

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

</style>
