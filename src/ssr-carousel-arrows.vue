<!-- Arrow navigation for back and next -->

<template lang='pug'>

.ssr-carousel-arrows

	//- Left arrow
	button.ssr-carousel-left-button(
		:aria-label='rtl ? nextLabel : backLabel'
		:aria-disabled='leftDisabled'
		:class='rtl ? "ssr-carousel-next-button" : "ssr-carousel-back-button"'
		@click='$emit("back")')
			slot(
				:name='rtl ? "next" : "back"'
				:disabled='leftDisabled')
				span.ssr-carousel-left-icon

	//- Right arrow
	button.ssr-carousel-right-button(
		:aria-label='rtl ? backLabel : nextLabel'
		:aria-disabled='rightDisabled'
		:class='rtl ? "ssr-carousel-back-button" : "ssr-carousel-next-button"'
		@click='$emit("next")')
			slot(
				:name='rtl ? "back" : "next"'
				:disabled='rightDisabled')
				span.ssr-carousel-right-icon

</template>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<script lang='coffee'>
export default

	props:
		index: Number
		pages: Number
		shouldLoop: Boolean
		pageLabel: String
		rtl: Boolean

	computed:

		# Make the labels
		backLabel: -> "Previous #{@pageLabel}"
		nextLabel: -> "Next #{@pageLabel}"

		# Determine if button should be disabled because we're at the limits
		leftDisabled: -> @index == 0 unless @shouldLoop
		rightDisabled: -> @index == @pages - 1 unless @shouldLoop


</script>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<style lang='stylus'>
@import '~bukwild-stylus-library'
@import './utils'

// Vertically center buttons
.ssr-carousel-left-button
.ssr-carousel-right-button
	v-center()
	resetButton()

// Align buttons near the edges
.ssr-carousel-left-button
	left 2%
.ssr-carousel-right-button
	right 2%

// Make a default icon
.ssr-carousel-left-icon
.ssr-carousel-right-icon

	// Make a circle shape
	display inline-block
	circle 42px, rgba(black, 0.5)
	flex-center()

	// Show disabled state
	[aria-disabled] > &
		opacity 0.1
		cursor default

	// Make a simple hover
	transition opacity 0.2s
	:not([aria-disabled]) > &
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
.ssr-carousel-left-icon
	&:before
		triangle 12px, 18px, white, 'left'
		left -2px // Massage center

.ssr-carousel-right-icon
	&:before
		triangle 12px, 18px, white, 'right'
		left 2px // Massage center

</style>
