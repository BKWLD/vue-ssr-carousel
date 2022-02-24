###
Code related to looping / infinite scroll
###
export default

	# Add prop to enable looping
	props: loop: Boolean

	# Store the slide order indexes
	data: -> slideOrder: []

	computed:

		# Put slides in order, applying rules related to looping
		slides: ->

			return @slottedSlides

			# If not looping, don't show other slides during boundary dampening
			return @slottedSlides unless @loop

			# Build array of slides according to slideOrder
			slides = @slideOrder.map (index) => @slottedSlides[index]

			# Add cloned, peeking slides to the periphery
			slides = [ @leftPeekingSlide, ...slides, @rightPeekingSlide]
			.filter (val) -> !!val # Remove empty peeking slides

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

	watch:

		# This represents the current (as in while scrolling / animating) left most
		# slide index. This is used in looping calculation so that the reordering
		# of slides isn't affected by paginatePerSlide setting. Calculating via
		# watcher to prevent unnecesary recalculations (I noticed a bunch of calls
		# when this was done via a computed property)
		currentSlideIndex:
			immediate: true
			handler: ->
				indexes = [...Array(@slidesCount).keys()]
				insertion = indexes.length - @currentSlideIndex % indexes.length
				@slideOrder = [
					...indexes.slice insertion
					...indexes.slice 0, insertion
				]
