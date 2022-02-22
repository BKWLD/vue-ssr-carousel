###
Code related to looping / infinite scroll
###
export default

	# Add prop to enable looping
	props: loop: Boolean

	computed:

		# Put slides in order, applying rules related to looping
		slides: ->
			slides = @slottedSlides
			count = slides.length

			# If not looping, don't show other slides during boundary dampening
			return slides unless @loop

			# Breakup the slides into arrays using the modulo of the current
			# side index.  I came up with this by figuring out how the arrays should
			# look and working back from there.
			prepended = slides.slice @currentSlideIndex % count
			remainder = slides.slice 0, count - prepended.length
			slides = [ ...prepended, ...remainder ]

			# Add cloned, peeking slides to the periphery
			if @leftPeekingSlide and @rightPeekingSlide
			then slides = [ @leftPeekingSlide, ...slides, @rightPeekingSlide]

			# Return adjusted list of slides
			slides

		# This represents the current (as in while scrolling / animating) left most
		# slide index. This is used in looping calculation so that the reordering
		# of slides isn't affected by paginatePerSlide setting.
		currentSlideIndex: -> Math.floor @currentX / @slideWidth * -1

		# When looping, slides get re-ordered. This value is added to the
		# track transform so that the slides don't feel like they were re-ordered.
		trackLoopOffset: ->
			return 0 unless @loop
			offsetSlideCount = @currentSlideIndex
			offsetSlideCount -= 1 if @leftPeekingSlide
			return offsetSlideCount * @slideWidth
