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

	data: ->
		pressing: false # The user pressing pointer down
		dragging: false # The user has translated while pointer was down
		isTouchDrag: false # Is the browser firing touch events
		lastPointerX: null # Where was the mouse when the drag started
		dragVelocity: null # The px/tick while dragging, negative is rightward
		dragStartX: null # The page index when the drag was started

	# Cleanup listeners
	beforeDestroy: ->
		window.removeEventListener 'mousemove', @onPointerMove
		window.removeEventListener 'mouseup', @onPointerUp
		window.removeEventListener 'touchmove', @onPointerMove
		window.removeEventListener 'touchend', @onPointerUp

	computed:

		# The current slide or page index. It rounds differently depedning on the
		# direction of the velocity.  So that it eases to a stop in the direction
		# the user was dragging
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
		endX: -> @pageWidth - @trackWidth

		# Check if the drag is currently out bounds
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
				@dragStartX = @lastPointerX # Capture starting x
				@preventContentDrag()
				@stopTweening()

			# The pointer is up, clear drag listeners and cleanup
			else
				window.removeEventListener moveEvent, @onPointerMove
				window.removeEventListener upEvent, @onPointerUp
				@dragging = false

				# Tween so the track is in bounds if it was out
				if @isOutOfBounds
					@targetX = @applyXBoundaries @currentX
					@startTweening()

				# Handle normal swiping
				else @goto @dragIndex

	methods:

		# Keep track of whether user is dragging
		onPointerDown: (pointerEvent) ->
			@isTouchDrag = pointerEvent instanceof TouchEvent
			@lastPointerX = @getPointerX pointerEvent
			@pressing = true
			pointerEvent.preventDefault() # If browser fires touch and mouse events
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
			else @applyXBoundaries x

		# Constraint the x value to the min and max values
		applyXBoundaries: (x) -> Math.max @endX, Math.min 0, x

		# Prevent the anchors and images from being draggable (like via their
		# ghost outlines). Using this approach because the draggable html attribute
		# didn't work in FF.  This only needs to be run once.
		preventContentDrag: ->
			return if @contentDragPrevented
			@$refs.track.querySelectorAll 'a, img'
			.forEach (el) -> el.addEventListener 'dragstart', (e) ->
				e.preventDefault()
			@contentDragPrevented = true
