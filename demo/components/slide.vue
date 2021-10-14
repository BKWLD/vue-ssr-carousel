<!-- A slide used in demo examples -->

<template lang='pug'>

.slide: div
	h2 Slide {{ index }}
	template(v-if='includeDraggableElements')
		img(src='/imgs/gradient.png')
		p <a href="https://www.bukwild.com">Example link</a>

</template>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<script lang='coffee'>
export default
	props:
		index: Number
		includeDraggableElements: Boolean

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
	basic-border-radius()

	// Center contents
	flex-center()
	text-align center
	fluid-space padding 's'

// Increase slide text size
h2
	fluid font-size, 36, 20
	font-weight 200

img
	circle 50px
	fluid margin-v, 20px

p
	margin-v 0

a
	text-decoration underline

</style>
