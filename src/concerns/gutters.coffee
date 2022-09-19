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

			# If carousel would be disabled for not having enough slides, then
			# effectively remove the gutter from the last slide.  Using a negative
			# margin on the track so that we don't increase the specifity on the
			# slide style, like would be the case if adding :not(:last-child) to the
			# slide.
			gutterClear = if @isDisabledAtBreakpoint breakpoint
			then "calc(#{@autoUnit(gutter)} * -1)" else "0px"

			# Render styles
			"""
			#{@scopeSelector} .ssr-carousel-track {
				margin-right: #{gutterClear};
			}
			#{@scopeSelector} .ssr-carousel-slide {
				margin-right: #{@autoUnit(gutter)};
			}
			"""
