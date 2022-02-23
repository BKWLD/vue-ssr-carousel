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
		makeBreakpointMarginStyle: (breakpoint) ->
			gutter = @getResponsiveValue 'gutter', breakpoint
			"margin-right: #{@autoUnit(gutter)};"
