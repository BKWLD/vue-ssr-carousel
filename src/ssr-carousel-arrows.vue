<!-- Arrow navigation for back and next -->

<template lang='pug'>

.ssr-carousel-arrows

	//- Back arrow
	button.ssr-carousel-back-button(
		aria-label='Back'
		:disabled='backDisabled'
		@click='$emit("back")')
			slot(v-if='$slots.back' name='back')
			span.ssr-carousel-back-icon(v-else)

	//- Next arrow
	button.ssr-carousel-next-button(
		aria-label='Next'
		:disabled='nextDisabled'
		@click='$emit("next")')
			slot(v-if='$slots.next' name='next')
			span.ssr-carousel-next-icon(v-else)

</template>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<script lang='coffee'>
export default

	props:
		index: Number
		pages: Number

	computed:

		# Determine if button should be disabled because we're at the limits
		backDisabled: -> @index == 0
		nextDisabled: -> @index == @pages - 1

</script>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<style lang='stylus'>
@import '~bukwild-stylus-library'

// Vertically center buttons
.ssr-carousel-back-button
.ssr-carousel-next-button
	v-center()

// Align buttons near the edges
.ssr-carousel-back-button
	left 2%
.ssr-carousel-next-button
	right 2%

// Make a default icon
.ssr-carousel-back-icon
.ssr-carousel-next-icon

	// Make a circle shape
	display inline-block
	circle 42px, rgba(black, 0.5)
	color white
	flex-center()

	// Show disabled state
	[disabled] > &
		opacity 0.1
		cursor default

	// Make a simple hover
	transition opacity 0.2s
	:not([disabled]) > &
		opacity 0.5
		+hover()
			opacity 0.85
		+active()
			opacity 1

	// Massage the icon centering
	&:before
		display inline-block
		position relative
		top 2px

// Make triangle icons in the buttons
.ssr-carousel-back-icon
	&:before
		content '◀'
		left -2px
.ssr-carousel-next-icon
	&:before
		content '▶'
		left 2px

</style>
