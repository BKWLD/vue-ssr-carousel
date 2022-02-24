<!-- The navigation menu -->

<template lang='pug'>

ul.layout-nav
</template>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<script lang='coffee'>
export default {}

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
