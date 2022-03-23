###
Code related to supporting keyboard interaction and screen readers
###
export default

	# Store whether the user appears to be using keyboard to navigate
	data: -> usingKeyboard: false

	computed:

		# Make the current slide message
		# https://www.w3.org/WAI/tutorials/carousels/functionality/#announce-the-current-item
		currentSlideMessage: -> "Item #{@boundedIndex + 1} of #{@pages}"

	watch:

		# When switching to keyboard navigation, I could never reproduce a scenario
		# where the focused elements wasn't the first slide, so I'm resetting the
		# active page to the first slide
		usingKeyboard: -> @goto 0 if @usingKeyboard

	methods:

		# Once a user uses tab on the carousel, mark them as using their keyboard.
		# This is cleared by the onPointerDown method.
		onTab: -> @usingKeyboard = true
