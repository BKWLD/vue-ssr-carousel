###
Code related to implementing feathering effect.
###
export default

	props:

		# Shorthand for enabling boolean and setting it's width
		feather:
			type: Boolean | String | Number
			default: false

	methods:

		# Add feathering styles via breakpoint
		makeBreakpointFeatheringStyle: (breakpoint) ->

			# Get feathering amount
			feather = @getResponsiveValue 'feather', breakpoint
			return if feather in [false, null]
			feather = 20 unless feather
			feather = @autoUnit feather

			# Make the rule value
			cssValue = """
			linear-gradient(to right,
				transparent, black #{feather},
				black calc(100% - #{feather}),
				transparent)
			"""

			# Write the style, with browser prefixes
			"""
			-webkit-mask-image: #{cssValue};
			mask-image: #{cssValue};
			"""