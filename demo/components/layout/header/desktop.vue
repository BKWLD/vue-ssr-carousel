<!-- Desktop header -->

<template lang='pug'>

detachable-header.layout-header-desktop(:height='height')
	header.max-w-full: .columns.max-w-medium
		.left
			//- Left aligned links

		.center
			nuxt-link(to='/') demo

		.right
			//- Right aligned links

</template>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<script lang='coffee'>
import DetachableHeader from 'vue-detachable-header'
import 'vue-detachable-header/index.css'
import dimensions from '~/assets/vars/dimensions'
export default

	components: { DetachableHeader }

	data: -> height: parseInt dimensions['header-h']

</script>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<style src='./header.styl' lang='stylus' scoped></style>
<style lang='stylus' scoped>

.layout-header-desktop
	+tablet-down()
		display none

</style>
