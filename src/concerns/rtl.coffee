###
Code related to supporting RTL layout
###
export default

	# Add RTL prop
	props: rtl: Boolean

	# As an easy way to support rtl, update the index to the final value
	# when RTL is enabled. This is change is combined with reversing the order
	# of the slides in `ssr-carousel-track`. We're testing for the
	# dimensionsKnown value as way to ensure that the final pages count is known
	# since it depends on knowing the width of the carousel.
	mounted: ->
		return unless @rtl
		if @dimensionsKnown
		then @setInitialRtlIndex()
		else unwatch = @$watch 'dimensionsKnown', =>
			@setInitialRtlIndex()
			unwatch()

	methods:

		# This should only be called once.  Wait a tick so we're sure that the
		# pages value has been calculated
		setInitialRtlIndex: ->
			setTimeout =>
				@index = @pages - @value - 1
				@jumpToIndex @index
			, 0
