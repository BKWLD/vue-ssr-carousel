<!-- An image or ambient video that may launch a video player  -->

<template lang='pug'>

section.media-asset(:class='classes')

	//- The asset
	cloak-visual(
		sizes='100vw'
		:image='block.image'
		:video='block.video')

</template>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<script lang='coffee'>
export default

	props: block: Object

	computed:

		# Apply max-width choice
		classes: -> @block.maxWidth

</script>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<style lang='stylus' scoped>

</style>
