###
Code related to looping / infinite scroll
###
export default

	# Add prop to enable looping
	props: loop: Boolean

	computed:

		# Put slides in order, applying rules related to looping
		slides: ->

			# If not looping, don't show other slides during boundary dampening
			return @slottedSlides unless @loop

			# Breakup the slides into arrays using the modulo of the current
			# side index.  I came up with this by figuring out how the arrays should
			# look and working back from there.
			prepended = @slottedSlides.slice @currentSlideIndex % @slidesCount
			remainder = @slottedSlides.slice 0, @slidesCount - prepended.length
			return [ ...prepended, ...remainder ]

		# This represents the current (as in while scrolling / animating) left most
		# slide index. This is used in looping calculation so that the reordering
		# of slides isn't affected by paginatePerSlide setting.
		currentSlideIndex: -> Math.floor @currentX / @slideWidth * -1

		# When looping, slides get re-ordered. This value is added to the
		# track transform so that the slides don't feel like they were re-ordered.
		trackOffset: ->
			unless @loop then 0
			else @currentSlideIndex * @slideWidth
