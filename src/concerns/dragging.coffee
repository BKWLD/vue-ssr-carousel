###
Code related to handling dragging of the track
###
export default

	props:

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

		# A multiplier applied to the dragVelocity that a flick ease to a stop.
		# Increase to make flicking travel further.
		flickGrease:
			type: Number
			default: 9

	data: ->
		pressing: false # The user pressing pointer down
		dragging: false # The user has translated while pointer was down
		isTouchDrag: false # Is the browser firing touch events
		lastPointerX: null # Where was the mouse when the drag started
		dragVelocity: null # The px/tick while dragging

	# Cleanup listeners
	beforeDestroy: ->
		window.removeEventListener 'mousemove', @onPointerMove
		window.removeEventListener 'mouseup', @onPointerUp
		window.removeEventListener 'touchmove', @onPointerMove
		window.removeEventListener 'touchend', @onPointerUp

	computed:

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

	methods:

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
