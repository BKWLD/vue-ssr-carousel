<!-- Dot navigation for carousel -->

<template lang='pug'>

.ssr-carousel-dots
	button.ssr-carousel-dot-button(
		v-for='i in pages' :key='i'
		:aria-label='makeLabel(i)'
		:aria-disabled='isDisabled(i)'
		@click='$emit("goto", i - 1)')

		//- Custom dot
		slot(
			name='dot'
			:index='i'
			:disabled='isDisabled(i)')

			//- Fallback
			span.ssr-carousel-dot-icon

</template>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<script lang='coffee'>
export default

	props:
		boundedIndex: Number
		pages: Number
		pageLabel: String
		rtl: Boolean

	methods:

		# Make the label for the dot
		makeLabel: (index) ->
			pageNumber = if @rtl then @pages - index + 1 else index
			"Go to #{@pageLabel} #{pageNumber}"

		# Check if dot index shuold be disabled
		isDisabled: (index) -> @boundedIndex == index - 1

</script>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<style lang='stylus'>
@import '~bukwild-stylus-library'
@import './utils'

// Clear butotn styles
.ssr-carousel-dot-button
	resetButton()

// Push dots below the track
.ssr-carousel-dots
	margin-top 10px

	// Arrange in a row
	display flex
	justify-content center

// A dot icon
.ssr-carousel-dot-icon

	// Make a circle
	display inline-block
	circle 12px
	border 2px solid rgba(black, 0.7)
	margin-h 4px

	// Show disabled state (aka, the active state)
	[aria-disabled] > &
		opacity 1
		background rgba(black, 0.7)
		cursor default

	// Make a simple hover
	transition opacity 0.2s
	:not([aria-disabled]) > &
		opacity 0.5
		+hover()
			opacity 0.85
		+active()
			opacity 1

</style>
