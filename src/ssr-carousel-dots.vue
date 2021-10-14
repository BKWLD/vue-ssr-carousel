<!-- Dot navigation for carousel -->

<template lang='pug'>

.ssr-carousel-dots
	button.ssr-carousel-dot-button(
		v-for='i in pages' :key='i'
		:aria-label='`Page ${i}`'
		:disabled='index == i - 1'
		@click='$emit("goto", i - 1)')
			slot(v-if='$slots.dot' name='dot')
			span.ssr-carousel-dot-icon(v-else)

</template>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<script lang='coffee'>
export default

	props:
		index: Number
		pages: Number

</script>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<style lang='stylus'>
@import '~bukwild-stylus-library'

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
	[disabled] > &
		opacity 1
		background rgba(black, 0.7)
		cursor default

	// Make a simple hover
	transition opacity 0.2s
	:not([disabled]) > &
		opacity 0.5
		+hover()
			opacity 0.85
		+active()
			opacity 1

</style>
