###
Code related to handling dragging of the track
###
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
		window.removeEventListener 'mousemove', @onPointerMove, passive: true
		window.removeEventListener 'mouseup', @onPointerUp, passive: true
		window.removeEventListener 'touchmove', @onPointerMove, passive: true
		window.removeEventListener 'touchend', @onPointerUp, passive: true

	computed:

		# The current slide or page index. It rounds differently depending on the
		# direction of the velocity.  So that it eases to a stop in the direction
		# the user was dragging.
		dragIndex: ->
			fractionalIndex = Math.abs if @paginateBySlide
			then @currentX / @slideWidth
			else @currentX / @pageWidth
			switch

				# If there is very little velocity, go to the closet page
				when Math.abs(@dragVelocity) <= 2 then Math.round fractionalIndex

				# User was moving forward
				when @dragVelocity < 0 then Math.ceil fractionalIndex

				# User was moving backward
				else Math.floor fractionalIndex

		# Calculate the width of a slide
		slideWidth: -> @pageWidth / @currentSlidesPerPage

		# Calculate the width of the track
		trackWidth: -> @slideWidth * @slidesCount

		# The ending x value
		endX: -> if @disabled then 0 else @pageWidth - @trackWidth

		# Check if the drag is currently out bounds
		isOutOfBounds: -> @currentX > 0 or @currentX < @endX

		# Determine if the user is dragging vertically
		isVerticalDrag: ->
			return unless @dragDirectionRatio
			@dragDirectionRatio < @verticalDragTreshold

	watch:

		# Watch for mouse move changes when the user starts dragging
		pressing: ->

			# Determine the type of event
			[ moveEvent, upEvent ] = if @isTouchDrag
			then [ 'touchmove', 'touchend' ]
			else [ 'mousemove', 'mouseup' ]

			# Pointer is down, start watching for drags
			if @pressing
				window.addEventListener moveEvent, @onPointerMove, passive: true
				window.addEventListener upEvent, @onPointerUp, passive: true
				@dragVelocity = 0 # Reset any previous velocity
				@preventContentDrag()
				@stopTweening()

			# The pointer is up, so tween to final position
			else

				# Tween so the track is in bounds if it was out
				if @isOutOfBounds
					@targetX = @applyXBoundaries @currentX
					@startTweening()

				# If user was vertically dragging, reset the index
				else if @isVerticalDrag then @goto @index

				# Handle normal swiping
				else @goto @dragIndex

				# Cleanup vars and listeners
				window.removeEventListener moveEvent, @onPointerMove, passive: true
				window.removeEventListener upEvent, @onPointerUp, passive: true
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

	methods:

		# Keep track of whether user is dragging
		onPointerDown: (pointerEvent) ->
			@isTouchDrag = TouchEvent? and pointerEvent instanceof TouchEvent
			@startPointer = @lastPointer = @getPointerCoords pointerEvent
			@pressing = true

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
			when x > 0 then Math.pow x, @boundaryDampening
			when x < @endX then @endX - Math.pow @endX - x, @boundaryDampening
			else @applyXBoundaries x

		# Constraint the x value to the min and max values
		applyXBoundaries: (x) -> Math.max @endX, Math.min 0, x

		# Prevent the anchors and images from being draggable (like via their
		# ghost outlines). Using this approach because the draggable html attribute
		# didn't work in FF.  This only needs to be run once.
		preventContentDrag: ->
			return if @contentDragPrevented
			@$refs.track.$el.querySelectorAll 'a, img'
			.forEach (el) -> el.addEventListener 'dragstart', (e) ->
				e.preventDefault()
			@contentDragPrevented = true
