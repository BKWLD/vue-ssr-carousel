###
Code related to auotplay features of the carousel
###
export default
	props:
		# A delay provided in seconds for the autoplay. 0 is disabled
		autoplayDelay:
			type: Number
			default: 0

	computed:
		# Stop animation if window is hidden or if carousel is focused
		paused: -> @windowHidden or @isFocused


	mounted: ->
		if @autoplayDelay then @autoPlayInterval = setInterval (() =>
			@next() if not @paused
			), @autoplayDelay * 1000

	beforeUnmount: -> clearInterval @autoPlayInterval
