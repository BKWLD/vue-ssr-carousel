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
export default

	components: { SsrCarouselSlide }

	props:

		# How many slides are visible at once in the viewport
		slidesPerPage: Number

		# Snap to either page, slide, or none
		dragSnap:
			type: String
			default: 'page'
			validator: (val) -> val in ['page', 'slide', 'none']

		# Boundary drag dampening modifier. Increase to allow greater travel outside
		# the boundaries.
		boundaryDampening:
			type: Number
			default: 0.6

		# How quickly the carousel slides to a stop. Increase to tween to as stop
		# quicker.
		tweenDampening:
			type: Number
			default: 0.12

		# A multiplier applied to the dragVelocity that a flick ease to a stop.
		# Increase to make flicking travel further.
		flickGrease:
			type: Number
			default: 9

	data: ->
		pageWidth: null # The width of a page (and the carousel container)

		# General motion
		currentX: 0 # The actual left offset of the slides container
		targetX: 0 # Where we may be tweening the slide to
		tweening: false # If there is a current RAF based tween running

		# Dragging related
		pressing: false # The user pressing pointer down
		dragging: false # The user has translated while pointer was down
		isTouchDrag: false # Is the browser firing touch events
		lastPointerX: null # Where was the mouse when the drag started
		dragVelocity: null # The px/tick while dragging

	# Default listeners
	mounted: ->
		@onResize()
		window.addEventListener 'resize', @onResize

	# Cleanup listeners
	beforeDestroy: ->
		window.removeEventListener 'resize', @onResize
		window.removeEventListener 'mousemove', @onPointerMove
		window.removeEventListener 'mouseup', @onPointerUp
		window.removeEventListener 'touchmove', @onPointerMove
		window.removeEventListener 'touchend', @onPointerUp
		window.cancelAnimationFrame @rafId

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

		# Check if currently out bounds
		isOutOfBounds: -> @currentX > 0 or @currentX < @endX

	watch:

		# Watch for mouse move changes when the user starts dragging
		pressing: ->

			# Determine the type of event
			[ moveEvent, upEvent ] = if @isTouchDrag
			then [ 'touchmove', 'touchend' ]
			else [ 'mousemove', 'mouseup' ]

			# Pointer is down, start watching for drags
			if @pressing
				window.addEventListener moveEvent, @onPointerMove
				window.addEventListener upEvent, @onPointerUp
				@dragVelocity = 0 # Reset any previous velocity
				@preventContentDrag()
				@stopTweening()

			# The pointer is up, clear drag listeners and cleanup
			else
				window.removeEventListener moveEvent, @onPointerMove
				window.removeEventListener upEvent, @onPointerUp
				@dragging = false

				# Tween so the track is in bounds if it was out
				if @isOutOfBounds
					@targetX = @applyBoundaries @currentX
					@startTweening()

				# Ease to a stop
				else
					@targetX = @currentX + @dragVelocity * @flickGrease
					@targetX = @applyDragSnap @targetX
					@startTweening()

		# Start RAF based tweener
		tweening: ->
			if @tweening
			then @tweenToTarget()
			else window.cancelAnimationFrame @rafId

	methods:

		# Measure the component width for various calculations. Using
		# getBoundingClientRect so we can get fractional values
		onResize: debounce ->
			@pageWidth = @$el.getBoundingClientRect().width
		, 300

		# Keep track of whether user is dragging
		onPointerDown: (pointerEvent) ->
			@isTouchDrag = pointerEvent instanceof TouchEvent
			@lastPointerX = @getPointerX pointerEvent
			@pressing = true
			pointerEvent.preventDefault() # IF browser fires touch and mouse events
		onPointerUp: -> @pressing = false

		# Keep x values up to date while dragging
		onPointerMove: (pointerEvent) ->

			# Mark the carousel as dragging, which is used to disable clicks
			@dragging = true unless @dragging

			# Calculated how much drag has happened since the list move
			pointerX = @getPointerX pointerEvent
			@dragVelocity = pointerX - @lastPointerX
			@targetX += @dragVelocity
			@lastPointerX = pointerX

			# Update the track position
			@currentX = @applyBoundaryDampening @targetX

		# Helper to get the x position of either a touch or mouse event
		getPointerX: (pointerEvent) ->
			pointerEvent.touches?[0]?.pageX || pointerEvent.pageX

		# Prevent dragging from exceeding the min/max edges
		applyBoundaryDampening: (x) -> switch
			when x > 0 then Math.pow x, @boundaryDampening
			when x < @endX then @endX - Math.pow @endX - x, @boundaryDampening
			else @applyBoundaries x

		# Apply snapping to the provided x value based on the snapping choice
		applyDragSnap: (x) ->
			x = @applyBoundaries x # First make sure the x is in bounds
			switch @dragSnap
				when 'page' then @pageWidth * Math.round x / @pageWidth
				when 'slide' then @slideWidth * Math.round x / @slideWidth
				else return x

		# Constraint the x value to the min and max values
		applyBoundaries: (x) -> Math.max @endX, Math.min 0, x

		# Prevent the anchors and images from being draggable (like via their
		# ghost outlines). Using this approach because the draggable html attribute
		# didn't work in FF.  This only needs to be run once.
		preventContentDrag: ->
			return if @contentDragPrevented
			@$refs.track.querySelectorAll 'a, img'
			.forEach (el) -> el.addEventListener 'dragstart', (e) ->
				e.preventDefault()
			@contentDragPrevented = true

		# Start tweening to target location if necessary and if not already
		# tweening
		startTweening: ->
			return if @tweening
			return if @currentX == @targetX
			@tweening = true

		# The watcher on this will kill active tweens
		stopTweening: -> @tweening = false

		# Tween the currentX to the targetX
		tweenToTarget: ->
			@currentX = @currentX + (@targetX - @currentX) * @tweenDampening
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
