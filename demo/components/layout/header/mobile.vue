<!-- Mobile header -->

<template lang='pug'>

detachable-header.layout-header-mobile(:height='height')
	header.max-w-full: .columns.max-w-medium

		.left
			nuxt-link(to='/') demo

		.right
			//- Probably a hamburger

</template>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<script lang='coffee'>
import DetachableHeader from 'vue-detachable-header'
import 'vue-detachable-header/index.css'
import dimensions from '~/assets/vars/dimensions'
export default

	components: { DetachableHeader }

	data: -> height: parseInt dimensions['header-h-mobile']

</script>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<style src='./header.styl' lang='stylus' scoped></style>
<style lang='stylus' scoped>

.layout-header-mobile
	+tablet-up()
		display none


</style>
