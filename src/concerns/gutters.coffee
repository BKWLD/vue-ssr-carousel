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
			notLastSlide = if @isDisabledAtBreakpoint breakpoint
			then ':not(:last-child)' else ''

			# Render styles
			"""
			#{@scopeSelector} .ssr-carousel-slide#{notLastSlide} {
				margin-right: #{@autoUnit(gutter)};
			}
			"""
