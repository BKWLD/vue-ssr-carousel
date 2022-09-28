###
Functionality related to supporting variable width slides
###
export default

	data: -> measuredTrackWidth: 0

	computed:

		# Is the carousel in variable width mode
		isVariableWidth: -> @slidesPerPage == null

	methods:

		# Measure the width of the track
		captureTrackWidth: ->
			return unless @$refs.track
			@measuredTrackWidth = @$refs.track.$el.scrollWidth
