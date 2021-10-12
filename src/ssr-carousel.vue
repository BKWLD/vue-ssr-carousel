<!-- Vue SSR Carousel -->

<template lang='pug'>

.ssr-carousel

	//- The overflow mask and the drag target of the slides
	.ssr-carousel-mask: .ssr-carousel-track(
		ref='track'
		:style='trackStyles'
		:class='trackClasses'
		@mousedown='onPointerDown'
		@touchstart='onPointerDown')

		//- Each slotted slide is wrapped by the ssr-carousel-slide functional
		//- component.
		ssr-carousel-slide(
			v-for='vnode, index in $slots.default'
			:key='index'
			:slide='vnode')

</template>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<script lang='coffee'>
import debounce from 'lodash/debounce'
import SsrCarouselSlide from './ssr-carousel-slide'
import dragging from './concerns/dragging'
import tweening from './concerns/tweening'
export default

	# Load concerns
	mixins: [
		dragging
		tweening
	]

	components: { SsrCarouselSlide }

	props:

		# How many slides are visible at once in the viewport
		slidesPerPage: Number

	data: ->
		pageWidth: null # The width of a page (and the carousel container)

		# General posisition
		currentX: 0 # The actual left offset of the slides container
		targetX: 0 # Where we may be tweening the slide to

	# Default listeners
	mounted: ->
		@onResize()
		window.addEventListener 'resize', @onResize

	# Cleanup listeners
	beforeDestroy: ->
		window.removeEventListener 'resize', @onResize

	computed:

		# Styles that are used to position the track
		trackStyles: -> transform: "translateX(#{@currentX}px)"
		trackClasses: -> { @pressing, @dragging }

		# Shorthand for the number of slides
		slidesCount: -> @$slots.default.length

		# Calculate the current slides shown per viewport page
		# TODO: Support responsive props
		currentSlidesPerPage: -> @slidesPerPage

		# Calculate the width of a slide
		slideWidth: -> @pageWidth / @currentSlidesPerPage

		# The current number of pages
		pages: -> Math.round @slidesCount / @currentSlidesPerPage

		# Calculate the width of the track
		trackWidth: -> @pageWidth * (@pages - 1)

		# The ending x value
		endX: -> @trackWidth * -1

	methods:

		# Measure the component width for various calculations. Using
		# getBoundingClientRect so we can get fractional values
		onResize: debounce ->
			@pageWidth = @$el.getBoundingClientRect().width
		, 300


</script>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<style lang='stylus'>

// Mask overflow
.ssr-carousel-mask
	overflow hidden

// Setup slides for horizontal layout
.ssr-carousel-track
	display flex

	// Don't allow text selection
	user-select none

	// When pressing, show drag cursor
	cursor grab
	&.pressing
		cursor grabbing

	// When dragging, disable pointer events. This clears a tick after the mouse
	// is released so links aren't followed on mouse up.
	&.dragging
		pointer-events none

</style>
