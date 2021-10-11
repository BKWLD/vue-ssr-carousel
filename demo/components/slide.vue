<!-- A slide used in demo examples -->

<template lang='pug'>

.slide: div
	h2 Slide {{ index }}
	p <a href="https://www.bukwild.com">Example link</a>

</template>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<script lang='coffee'>
export default
	props: index: Number

</script>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<style lang='stylus' scoped>

.slide

	// Make a box
	aspect-ratio(16/9)
	background linear-gradient(
		lighten(primary-background, 10%),
		secondary-background)
	box-shadow inset 0 0 20px 4px secondary-color
	border-radius 10px

	// Center contents
	flex-center()
	text-align center

// Increase slide text size
h2
	fluid font-size, 36, 20
	font-weight 200

a
	text-decoration underline

</style>
