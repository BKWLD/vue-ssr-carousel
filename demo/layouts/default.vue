<!-- General layout -->

<template lang='pug'>

.default-layout: .columns

	layout-sidebar
	main: nuxt


</template>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<script lang='coffee'>
export default
	name: 'DefaultLayout'

</script>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<style lang='stylus' scoped>

// Create columns
.columns
	display flex
	align-items flex-start
	max-width 1440px
	margin-h auto
.layout-sidebar
	flex-shrink 0
main
	flex-grow 1
	fluid padding-h, gutter, gutter-mobile

</style>
