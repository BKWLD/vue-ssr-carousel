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

		# Boundary drag dampening modifier, the greater the slower
		boundaryDampening:
			type: Number
			default: 0.5

		# How quickly the carousel slides to a stop
		tweenRate:
			type: Number
			default: 0.15

	data: ->
		carouselWidth: null # The width of the carousel container
		dragging: false # The user is currently dragging
		currentX: 0 # The actual left offset of the slides container
		targetX: 0 # Where we may be tweening the slide to
		lastDragX: null # Where was the mouse with the drag started
		tweening: false # If there is a current RAF based tween running

	# Default listeners
	mounted: ->
		@onResize()
		window.addEventListener 'resize', @onResize

	# Cleanup listeners
	beforeDestroy: ->
		window.removeEventListener 'resize', @onResize
		window.removeEventListener 'mousemove', @onDrag
		window.removeEventListener 'mouseup', @onStopDrag
		window.cancelAnimationFrame @rafId

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

		# The ending x value
		endX: -> @trackWidth * -1

		# Check if currently out bounds
		isOutOfBounds: -> @currentX > 0 or @currentX < @endX * -1

	watch:

		# Watch for mouse move changes when the user starts dragging
		dragging: ->
			if @dragging # Start dragging
				window.addEventListener 'mousemove', @onDrag
				window.addEventListener 'mouseup', @onStopDrag
			else # End dragging
				window.removeEventListener 'mousemove', @onDrag
				window.removeEventListener 'mouseup', @onStopDrag

				# Tween in if out of bounds
				if @isOutOfBounds
					@targetX = @applyBoundaries @currentX
					@startTweening()

		# Start RAF based tweener
		tweening: ->
			if @tweening
			then @tweenToTarget()
			else window.cancelAnimationFrame @rafId

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
			@currentX = @applyBoundaryDampening @targetX
			@lastDragX = e.pageX

		# Prevent dragging from exceeding the min/max edges
		applyBoundaryDampening: (x) -> switch
			when x > 0 then Math.pow x, @boundaryDampening
			when x < @endX then @endX - Math.pow @endX - x, @boundaryDampening
			else @applyBoundaries x

		# Constraint the x value to the min and max values
		applyBoundaries: (x) -> Math.max @endX, Math.min 0, x

		# Start tweening to target location if necessary and if not already
		# tweening
		startTweening: ->
			return if @tweening
			return if @currentX == @targetX
			@tweening = true

		# Tween the currentX to the targetX
		tweenToTarget: ->
			@currentX = @currentX + (@targetX - @currentX) * @tweenRate
			if Math.abs(@targetX - @currentX) < 1 # Stops tweening
				@currentX = @targetX
				@tweening = false
			else @rafId = window.requestAnimationFrame @tweenToTarget

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
