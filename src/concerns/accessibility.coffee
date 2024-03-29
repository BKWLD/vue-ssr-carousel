###
Code related to supporting keyboard interaction and screen readers
###
export default

	# The label to use for pagination
	props: paginationLabel: String

	# Store whether the user appears to be using keyboard to navigate
	data: -> usingKeyboard: false

	computed:

		# Determine the descriptor to use in aria messages
		pageLabel: -> switch
			when @paginationLabel then @paginationLabel
			when @paginateBySlide then "Slide"
			else "Page"

		# Make the current slide message
		# https://www.w3.org/WAI/tutorials/carousels/functionality/#announce-the-current-item
		currentSlideMessage: -> "#{@pageLabel} #{@boundedIndex + 1} of #{@pages}"

	watch:

		# When switching to keyboard navigation, I could never reproduce a scenario
		# where the focused elements wasn't the first slide, so I'm resetting the
		# active page to the first slide
		usingKeyboard: -> @goto 0 if @usingKeyboard

	methods:

		# Once a user uses tab on the carousel, mark them as using their keyboard.
		# This is cleared by the onPointerDown method.
		onTab: -> @usingKeyboard = true
