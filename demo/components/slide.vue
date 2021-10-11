<!-- A slide used in demo examples -->

<template lang='pug'>

.slide: span Slide {{ index }}

</template>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<script lang='coffee'>
export default
	props: index: Number

</script>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<style lang='stylus' scoped>

.slide
	aspect-ratio(16/9)
	flex-center()
	background linear-gradient(
		lighten(primary-background, 10%),
		secondary-background)
	box-shadow inset 0 0 20px 4px secondary-color

	// Increase slide text size
	> *
		fluid font-size, 36, 20
		font-weight 200

</style>
