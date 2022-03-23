###
Code related to auotplay features of the carousel
###
export default
	props:

		# A delay provided in seconds for the autoplay. 0 is disabled
		autoplayDelay:
			type: Number
			default: 0

		# Should we pause on hover
		pauseOnFocus:
			type: Boolean
			default: true

	# Start autolaying on mount
	mounted: -> @autoplayStart()
	beforeDestroy: -> @autoplayStop()

	computed:

		# Conditions that result in pausing autoplay
		autoplayPaused: -> switch

			# Always pause when using keyboard navigation
			when @usingKeyboard then true

			# Stop animation if window is hidden or if carousel is focused
			when @pauseOnFocus then @windowHidden or @isFocused

	watch:

		# Respond to conditions that may automatically pause autoplaying
		autoplayPaused: (paused) ->
			if paused then @autoplayStop()
			else @autoplayStart()

	methods:

		autoplayStart: ->

			# Require a delay amount
			return unless @autoplayDelay

			# Don't loop if we only have one page
			return unless @pages

			# Start autoplaying
			@autoPlayInterval = setInterval =>
				@autoplayNext() unless @autoplayPaused
			, @autoplayDelay * 1000

		autoplayStop: -> clearInterval @autoPlayInterval

		# Advance to the next slide
		autoplayNext: ->
			if @shouldLoop or @index < @pages - 1
			then @next()
			else @goto 0 # Reset because loop wasn't enabled
