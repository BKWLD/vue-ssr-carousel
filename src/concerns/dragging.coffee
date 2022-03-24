###
Code related to handling dragging of the track
###
passive = passive: true
notPassive = passive: false
export default

	props:

		# Boundary drag dampening modifier. Increase to allow greater travel outside
		# the boundaries.
		boundaryDampening:
			type: Number
			default: 0.6

		# The percentage of a pageWidth that was dragged before we advance to
		# another page on slide
		dragAdvanceRatio:
			type: Number
			default: .33

		# The ratio of X:Y mouse travel. Decrease this number to allow for greater
		# y dragging before the drag is cancelled.
		verticalDragTreshold:
			type: Number
			default: 1

	data: ->
		pressing: false # The user pressing pointer down
		dragging: false # The user has translated while pointer was down
		isTouchDrag: false # Is the browser firing touch events
		startPointer: null # Where was the mouse when the drag started
		lastPointer: null # Where was the mouse on the last move event
		dragVelocity: null # The px/tick while dragging, negative is rightward
		dragDirectionRatio: null # The ratio of horizontal vs vertical dragging

	# Cleanup listeners
	beforeDestroy: ->
		window.removeEventListener 'mousemove', @onPointerMove, passive
		window.removeEventListener 'mouseup', @onPointerUp, passive
		window.removeEventListener 'touchmove', @onPointerMove, passive
		window.removeEventListener 'touchend', @onPointerUp, passive
		window.removeEventListener 'touchmove', @onWinMove, notPassive

	computed:

		# The current slide or page index. It rounds differently depending on the
		# direction of the velocity.  So that it eases to a stop in the direction
		# the user was dragging.
		dragIndex: -> switch

			# If there is very little velocity, go to the closet page
			when Math.abs(@dragVelocity) <= 2 then Math.round @fractionalIndex

			# User was moving forward
			when @dragVelocity < 0 then Math.ceil @fractionalIndex

			# User was moving backward
			else Math.floor @fractionalIndex

		# Determine the current index given the currentX as a fraction. For
		# instance, when dragging forward, it will be like 0.1 and when you've
		# dragged almost a full page, forward it would be 0.9.  This got
		# complicated because the final page may not have a full compliment of
		# slides like if we have 2 per page and 3 slides.  When you have tweened
		# to the 2nd page, the fractionalIndex should be 2 even though you
		# haven't traveled the same width as it took to get from 1 to 2.
		fractionalIndex: ->
			return 0 unless @trackWidth

			# Work in positive numbers
			x = @currentX * -1

			# Figure out what set we're in, like if, through looping, we've gone
			# through all the pages multiple times.
			setIndex = Math.floor x / @trackWidth

			# Figure out the index of last page of the set that has been fully
			# scrolled into. Not using modulo for this because I got rounding errors.
			widthDivisor = if @paginateBySlide then @slideWidth else @pageWidth
			pageIndex = Math.floor (x - setIndex * @trackWidth) / widthDivisor

			# Figure out the progress into the current page
			distanceIntoPage = x - setIndex * @trackWidth - pageIndex * widthDivisor

			# Determine if we're on the last page. If we're not looping, an extra
			# "page" of slides is treated as part of the last page because of how we
			# end with the slides flush with the right edge.
			slidesPerPage = @currentSlidesPerPage
			remainingSlides = switch
				when @shouldLoop then @slidesCount - pageIndex * slidesPerPage
				else @slidesCount - (pageIndex + 1) * slidesPerPage
			isLastPage = remainingSlides <= slidesPerPage

			# Make a percentage of travel into the page
			pageWidth = if isLastPage then @lastPageWidth else widthDivisor
			pageProgressPercent = distanceIntoPage / pageWidth

			# Return the final value by adding all the passed index values
			return pageProgressPercent + setIndex * @pages + pageIndex

		# Determine if the user is dragging vertically
		isVerticalDrag: ->
			return unless @dragDirectionRatio
			@dragDirectionRatio < @verticalDragTreshold

		# If we're horiztonally swiping on a touch device, prevent vertical scroll
		preventVerticalScroll: ->
			@pressing and @isTouchDrag and not @isVerticalDrag

	watch:

		# Watch for mouse move changes when the user starts dragging
		pressing: ->

			# Determine the type of event
			[ moveEvent, upEvent ] = if @isTouchDrag
			then [ 'touchmove', 'touchend' ]
			else [ 'mousemove', 'mouseup' ]

			# Pointer is down, start watching for drags
			if @pressing
				window.addEventListener moveEvent, @onPointerMove, passive
				window.addEventListener upEvent, @onPointerUp, passive
				window.addEventListener 'contextmenu', @onPointerUp, passive
				@dragVelocity = 0 # Reset any previous velocity
				@preventContentDrag()
				@stopTweening()

			# The pointer is up, so tween to final position
			else

				# Tween so the track is in bounds if it was out
				if @isOutOfBounds and not @shouldLoop
					if @currentX >= 0 then @goto 0
					else @goto @pages - 1

				# If user was vertically dragging, reset the index
				else if @isVerticalDrag then @goto @index

				# Handle normal swiping
				else @goto @dragIndex

				# Cleanup vars and listeners
				window.removeEventListener moveEvent, @onPointerMove, passive
				window.removeEventListener upEvent, @onPointerUp, passive
				window.removeEventListener 'contextmenu', @onPointerUp, passive
				@dragging = false
				@startPointer = @lastPointer = @dragDirectionRatio = null

			# Fire events
			if @pressing
			then @$emit 'press'
			else @$emit 'release'

		# Fire events related to dragging
		dragging: ->
			if @dragging
			then @$emit 'drag:start'
			else @$emit 'drag:end'

		# If the user is dragging vertically, end the drag based on the assumption
		# that the user is attempting to scroll the page via touch rather than
		# pan the carousel.
		isVerticalDrag: ->
			return unless @isVerticalDrag and @isTouchDrag
			@pressing = false

		# Stop vertical scrolling by listening for touchmove events on the body
		# and cancel them. Need to explicitly set pasive because some mobile
		# browsers set to true by default.
		preventVerticalScroll: (shouldPrevent) ->
			if shouldPrevent
			then window.addEventListener 'touchmove', @stopEvent, notPassive
			else window.removeEventListener 'touchmove', @stopEvent, notPassive

	methods:

		# Cancel an Event
		stopEvent: (e) -> e.preventDefault()

		# Keep track of whether user is dragging
		onPointerDown: (pointerEvent) ->
			@isTouchDrag = TouchEvent? and pointerEvent instanceof TouchEvent
			@startPointer = @lastPointer = @getPointerCoords pointerEvent
			@pressing = true
			@usingKeyboard = false

		# Keep track of release of press
		onPointerUp: -> @pressing = false

		# Keep x values up to date while dragging
		onPointerMove: (pointerEvent) ->

			# Mark the carousel as dragging, which is used to disable clicks
			@dragging = true unless @dragging

			# Calculated how much drag has happened since the list move
			pointer = @getPointerCoords pointerEvent
			@dragVelocity = pointer.x - @lastPointer.x
			@targetX += @dragVelocity
			@lastPointer = pointer

			# Caculate the drag direction ratio
			@dragDirectionRatio = Math.abs(
				(pointer.x - @startPointer.x) /
				(pointer.y - @startPointer.y)
			)

			# Update the track position
			@currentX = @applyBoundaryDampening @targetX

		# Helper to get the x position of either a touch or mouse event
		getPointerCoords: (pointerEvent) ->
			x: pointerEvent.touches?[0]?.pageX || pointerEvent.pageX
			y: pointerEvent.touches?[0]?.pageY || pointerEvent.pageY

		# Prevent dragging from exceeding the min/max edges
		applyBoundaryDampening: (x) -> switch
			when @shouldLoop then x # Don't apply dampening
			when x > 0 then Math.pow x, @boundaryDampening
			when x < @endX then @endX - Math.pow @endX - x, @boundaryDampening
			else @applyXBoundaries x

		# Constraint the x value to the min and max values
		applyXBoundaries: (x) ->
			if @shouldLoop then x # Don't apply boundaries
			else Math.max @endX, Math.min 0, x

		# Prevent the anchors and images from being draggable (like via their
		# ghost outlines). Using this approach because the draggable html attribute
		# didn't work in FF.  This only needs to be run once.
		preventContentDrag: ->
			return if @contentDragPrevented
			@$refs.track.$el.querySelectorAll 'a, img'
			.forEach (el) -> el.addEventListener 'dragstart', (e) ->
				e.preventDefault()
			@contentDragPrevented = true
