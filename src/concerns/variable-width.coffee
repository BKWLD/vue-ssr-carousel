###
Functionality related to supporting variable width slides
###
export default

	data: ->
		measuredTrackWidth: 0
		measuredSlidesWidths: []

	computed:

		# Is the carousel in variable width mode
		isVariableWidth: -> @slidesPerPage == null

	methods:
		# Capture all dimensions of carousel
		captureCarouselDims: ->
			@captureTrackWidth()
			@captureSlideWidths()

		# Measure the width of the track
		captureTrackWidth: ->
			return unless @$refs.track
			@measuredTrackWidth = @$refs.track.$el.scrollWidth

		# Capture slide dims and place them into an array of data
		captureSlideWidths: ->
			return unless @$refs.track
			@measuredSlidesWidths = @$refs?.track?.$children.reduce((acc, child, idx, arr) =>
				return [
					...acc
					{
						width: child.$el.clientWidth
						targetXScroll: (acc[idx - 1]?.targetXScroll || 0) + (acc[idx - 1]?.width || 0) + @gutter * (idx > 0)
					}
				]
			, [] )

