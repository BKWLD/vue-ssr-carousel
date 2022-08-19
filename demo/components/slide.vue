<!-- A slide used in demo examples -->

<template lang='pug'>

//- Optionally render the slide as a link, common with cards
.slide(
	:is='to ? "a" : "div"'
	:href='to || undefined')

	//- Slide contents
	.contents
		.tint(v-if='tint' :style='{ background: tint }')
		.title(v-if='index') Slide {{ index }}
		slot

</template>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<script lang='coffee'>
export default
	props:
		index: Number
		tint: String
		to: String # Optional wrapping link

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

	// Capture tint
	position relative
	overflow hidden

	// Customize the focus effect
	transition box-shadow .1s
	a&
		outline none
		&:hover
			box-shadow inset 0 0 3px 3px secondary-color,
				inset 0 0 30px 5px lighten(secondary-color, 15%)
		&:focus-visible
			box-shadow inset 0 0 3px 3px primary-color,
				inset 0 0 30px 5px primary-color

// Optional tint layer, for easier tracking of cloning
.tint
	expand()
	opacity 0.4

// Increase slide text size
.title
	fluid font-size, 36, 20
	font-weight 200
	text-shadow 0 0 5px rgba(primary-color, .2),
		0 0 20px primary-color
	text-decoration none !important

img
	circle 50px
	fluid margin-v, 20px

p
	margin-v 0

.contents :deep(a)
	text-decoration underline

</style>
