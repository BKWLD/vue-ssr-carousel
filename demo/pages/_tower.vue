<!-- Standard Block renderer -->

<template lang='pug'>

.tower: blocks-list(:blocks='page.blocks')

</template>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<script lang='coffee'>
import pageMixin from '@bkwld/cloak/mixins/page'

export default
	name: 'Tower'

	mixins: [ pageMixin ]

	# Get Tower data
	asyncData: ({ app, params, $content }) ->

		# Don't query for these paths
		return app.$notFound() if params.tower in [ '__webpack_hmr' ]

		# Get data
		page = await $content(params.tower || 'home').fetch()
		console.log 'here', page
		return app.$notFound() unless page

		# Set data
		return { page }

</script>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<style lang='stylus' scoped>

</style>
