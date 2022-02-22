###
Code related to allowing edge slides to peek in from the side, including empty
gutter space.
###
export default

	props:

		# Distinct left/right peeking values
		peekLeft:
			type: Number | String
			default: -> 0
		peekRight:
			type: Number | String
			default: -> 0

	data: ->
		peekLeftPx: Number @peekLeft
		peekRightPx: Number @peekRight

	computed:

		# Combine the peeking values, which is needed commonly
		combinedPeek: -> @peekLeftPx + @peekRightPx
