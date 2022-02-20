<!-- A slide used in demo examples -->

<template lang='pug'>

.slide: div
	.title Slide {{ index }}
	slot

</template>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<script lang='coffee'>
export default
	props:
		index: Number

</script>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<style lang='stylus' scoped>

.slide

	// Make a box
	aspect-ratio(16/9)
	background linear-gradient(
		lighten(primary-background, 10%),
		secondary-background)
	box-shadow inset 0 0 3px 3px secondary-color,
		inset 0 0 30px 5px secondary-color
	basic-border-radius()

	// Center contents
	flex-center()
	text-align center
	fluid-space padding 's'
	> div
		width 100%

// Increase slide text size
.title
	fluid font-size, 36, 20
	font-weight 200
	text-shadow 0 0 5px rgba(primary-color, .2),
		0 0 20px primary-color

img
	circle 50px
	fluid margin-v, 20px

p
	margin-v 0

a
	text-decoration underline

</style>
