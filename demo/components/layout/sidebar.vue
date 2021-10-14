<!-- The navigation sidebar -->

<template lang='pug'>

.layout-sidebar

	//- Link to the repo
	.title: a(href='https://github.com/BKWLD/vue-ssr-carousel')
		| vue-ssr-carousel

	//- The nav link
	ul: li(v-for='link in links' :key='link.path')
		nuxt-link(:to='link.path') {{ link.title }}

</template>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<script lang='coffee'>
export default

	data: -> links: [
		{ title: 'Introduction', path: '/intro' }
		{ title: 'Responsive', path: '/responsive' }
		{ title: 'Gutters', path: '/gutters' }
		{ title: 'Miscellaneous', path: '/misc' }
	]

</script>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<style lang='stylus' scoped>

.layout-sidebar
	padding-h gutter-mobile
	border-right 1px solid darken(primary-background, 30%)

	// Push down from top
	+tablet-up()
		padding-v header-h + 15px // Eyeballed
	+tablet-down()
		padding-v header-h-mobile + 12px // Eyeballed

.title
	fluid-space margin-bottom, 's'
	font-weight 600
	text-shadow 0 0 7px primary-color,
		0 0 10px primary-color,
		0 0 20px rgba(primary-color, 0.5)

li:not(:first-child)
	fluid-space margin-top, 'xs'

li a
	opacity 0.4

	font-size 14px
	&.nuxt-link-active
		opacity 1
		font-weight 600
	+hover()
		&:not(.nuxt-link-active)
			opacity 0.8

</style>
