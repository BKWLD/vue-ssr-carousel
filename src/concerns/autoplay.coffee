###
Code related to auotplay features of the carousel
###
export default
	props:
		# A delay provided in seconds for the autoplay. 0 is disabled
		autoplayDelay:
			type: Number
			default: 0

		pauseOnFocus:
			type: Boolean
			default: true

	computed:
		# Stop animation if window is hidden or if carousel is focused
		autoplayPaused: -> (@windowHidden or @isFocused) if @pauseOnFocus

	watch:
		autoplayPaused: (paused) ->
			if paused then @autoplayStop() else @autoplayStart()

	mounted: -> @autoplayStart()

	beforeDestroy: -> @autoplayStop()

	methods:
		autoplayStart: ->
			if @autoplayDelay then @autoPlayInterval = setInterval (() =>
				@next() if not @autoplayPaused
				), @autoplayDelay * 1000

		autoplayStop: -> clearInterval @autoPlayInterval
