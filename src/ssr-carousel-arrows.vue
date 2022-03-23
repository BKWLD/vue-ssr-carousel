<!-- Arrow navigation for back and next -->

<template lang='pug'>

.ssr-carousel-arrows

	//- Back arrow
	button.ssr-carousel-back-button(
		aria-label='Back'
		:disabled='backDisabled'
		@click='$emit("back")')
			slot(name='back' :disabled='backDisabled')
				span.ssr-carousel-back-icon

	//- Next arrow
	button.ssr-carousel-next-button(
		aria-label='Next'
		:disabled='nextDisabled'
		@click='$emit("next")')
			slot(name='next' :disabled='nextDisabled')
				span.ssr-carousel-next-icon

</template>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<script lang='coffee'>
export default

	props:
		index: Number
		pages: Number
		loop: Boolean

	computed:

		# Determine if button should be disabled because we're at the limits
		backDisabled: -> @index == 0 unless @shouldLoop
		nextDisabled: -> @index == @pages - 1 unless @shouldLoop

</script>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<style lang='stylus'>
@import '~bukwild-stylus-library'
@import './utils'

// Vertically center buttons
.ssr-carousel-back-button
.ssr-carousel-next-button
	v-center()
	resetButton()

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

	// Shared icon styles
	&:before
		content ''
		position relative

// Make triangle icons in the buttons
.ssr-carousel-back-icon
	&:before
		triangle 12px, 18px, white, 'left'
		left -2px // Massage center

.ssr-carousel-next-icon
	&:before
		triangle 12px, 18px, white, 'right'
		left 2px // Massage center

</style>
