###
Code related to the gutters between slides
###
export default

	props:

		# The gutters between slides
		gutter:
			type: Number | String
			default: 20

	methods:

		# Apply gutters between slides via margins
		makeBreakpointSlideGutterStyle: (breakpoint) ->
			gutter = @getResponsiveValue 'gutter', breakpoint

			# If carousel would be disabled for not having enough slides, then remove
			# gutter from last slide.
			slidesPerPage = @getResponsiveValue 'slidesPerPage', breakpoint
			console.log @slidesCount, slidesPerPage
			notLastSlide = if @slidesCount > slidesPerPage
			then '' else ':not(:last-child)'

			# Render styles
			"""
			#{@scopeSelector} .ssr-carousel-slide#{notLastSlide} {
				margin-right: #{@autoUnit(gutter)};
			}
			"""
