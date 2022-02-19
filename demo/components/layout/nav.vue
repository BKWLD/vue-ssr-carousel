<!-- The navigation menu -->

<template lang='pug'>

ul.layout-nav
	li(v-for='link in links' :key='link.path')
		nuxt-link(:to='link.path') {{ link.title }}

</template>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<script lang='coffee'>
export default

	data: -> links: [
		{ title: 'Introduction', path: '/' }
		{ title: 'Events', path: '/events' }
		{ title: 'Responsive', path: '/responsive' }
		{ title: 'Gutters', path: '/gutters' }
		{ title: 'UI', path: '/ui' }
		{ title: 'Looping', path: '/looping' }
		{ title: 'Miscellaneous', path: '/misc' }
	]

</script>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<style lang='stylus' scoped>

li
	display inline-block
	margin-v 2px
	&:not(:last-child)
		margin-right 1em

a
	opacity 0.4
	transition opacity 0.3s
	font-size 14px
	&.nuxt-link-exact-active
		opacity 1
		font-weight 600
	+hover()
		&:not(.nuxt-link-exact-active)
			transition-duration .1s
			opacity 0.8

</style>
