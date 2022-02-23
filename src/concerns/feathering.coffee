###
Code related to implementing feathering effect.
###
export default

	props:

		# Shorthand for enabling boolean and setting it's width
		feather:
			type: Boolean | String | Number
			default: false

		# Explicit feather width prop
		featherWidth:
			type: String | Number
			default: -> @feather || 20

	computed:

		# Enable feathering as long as feather is not falsey
		feathering: -> @feather not in [false, null] and @featherWidth

		# Toggle feathering on
		maskClasses: -> feather: @feathering

		# Make feathering styles
		maskStyles: ->
			return unless @feathering
			'--feather-width': @autoUnit @featherWidth
