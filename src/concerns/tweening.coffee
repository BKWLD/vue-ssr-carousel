###
Code related to tweening the position of the track
###
export default

	props:

		# How quickly the carousel slides to a stop. Increase to tween to as stop
		# quicker.
		tweenDampening:
			type: Number
			default: 0.12

	data: ->
		currentX: 0 # The actual left offset of the slides container
		targetX: 0 # Where we may be tweening the slide to
		tweening: false # If there is a current RAF based tween running
		firstTween: true # Has the first tween been triggered

	# Stop any animations that are in flight
	beforeDestroy: -> window.cancelAnimationFrame @rafId

	watch:

		# Start RAF based tweener
		tweening: ->
			if @tweening
				@$emit 'tween:start', { @index }
				@tweenToTarget()
				@firstTween = false
			else
				window.cancelAnimationFrame @rafId
				@$emit 'tween:end', { @index }

	methods:

		# Convenience method to tween to a targetX
		tweenToX: (@targetX)-> @startTweening()

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

			# If on the first tween and the first page was set to something other
			# than 0 by v-model, then instantly jump to the final destination
			dampening = if @firstTween and @value != 0 then 1 else @tweenDampening

			# Apply tween math
			@currentX = @currentX + (@targetX - @currentX) * dampening
			if Math.abs(@targetX - @currentX) < 1 # Stops tweening
				@currentX = @targetX
				@tweening = false
			else @rafId = window.requestAnimationFrame @tweenToTarget

		# Tween to stop based on inertia
		tweenToStop: -> console.log 'tweenToStop'
