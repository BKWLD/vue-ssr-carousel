<!-- Vue SSR Carousel -->

<template lang='pug'>

.ssr-carousel

	//- The overflow mask and the drag target of the slides
	.ssr-carousel-mask: .ssr-carousel-track(
		:style='trackStyles'
		:class='trackClasses'
		@mousedown='onStartDrag')

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
export default

	components: { SsrCarouselSlide }

	props:

		# How many slides are visible at once in the viewport
		slidesPerViewport: Number

	data: ->
		carouselWidth: null # The width of the carousel container
		dragging: false # The user is currently dragging
		currentX: 0 # The actual left offset of the slides container
		targetX: 0 # Where we may be tweening the slide to
		lastDragX: null # Where was the mouse with the drag started

	# Default listeners
	mounted: ->
		@onResize()
		window.addEventListener 'resize', @onResize

	# Cleanup listeners
	beforeDestroy: ->
		window.removeEventListener 'resize', @onResize
		window.removeEventListener 'mousemove', @onDrag
		window.removeEventListener 'mouseup', @onStopDrag

	computed:

		# Styles that are used to position the track
		trackStyles: -> transform: "translateX(#{@currentX}px)"
		trackClasses: -> { @dragging }

		# Shorthand for the number of slides
		slidesCount: -> @$slots.default.length

		# Calculate the current slides shown per viewport
		# TODO: Support responsive props
		currentSlidesPerViewport: -> @slidesPerViewport

		# The current number of pages
		pages: -> Math.round @slidesCount / @currentSlidesPerViewport

		# Calculate the width of the track
		trackWidth: -> @carouselWidth * (@pages - 1)

	watch:

		# Watch for mouse move changes when the user starts dragging
		dragging: ->
			if @dragging
				window.addEventListener 'mousemove', @onDrag
				window.addEventListener 'mouseup', @onStopDrag
			else
				window.removeEventListener 'mousemove', @onDrag
				window.removeEventListener 'mouseup', @onStopDrag

	methods:

		# Measure the component width for various calculations
		onResize: debounce ->
			@carouselWidth = @$el.clientWidth
		, 300

		# Keep track of whether user is dragging
		onStartDrag: (e) ->
			@lastDragX = e.pageX
			@dragging = true
		onStopDrag: -> @dragging = false

		# Keep x values up to date while dragging
		onDrag: (e) ->
			@targetX += e.pageX - @lastDragX
			@currentX = @applyDragBounds @targetX
			@lastDragX = e.pageX

		# Prevent dragging from exceeding the min/max edges
		# TODO Add elastic effect
		applyDragBounds: (x) ->
			start = 0
			end = @trackWidth * -1
			dampening = 0.5 # Increase for less
			switch
				when x > start then Math.pow x, dampening
				when x < end then end - Math.pow end - x, dampening
				else Math.max end, Math.min start, x

</script>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<style lang='stylus'>

// Mask overflow
.ssr-carousel-mask
	overflow hidden

// Setup slides for horizontal layout
.ssr-carousel-track
	display flex

	// When dragging, show drag cursor
	cursor grab
	&.dragging
		cursor grabbing

</style>
