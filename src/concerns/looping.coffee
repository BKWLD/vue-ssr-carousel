###
Code related to looping / infinite scroll
###
export default

	props:

		# Add prop to enable looping
		loop: Boolean

		# Place the first slide in the center of the layout
		center: Boolean

	# Store the slide order indexes
	data: -> slideOrder: []

	computed:

		# Disable looping when the user is using keyboard navigation
		shouldLoop: -> @loop and not @usingKeyboard

		# This represents the current (as in while scrolling / animating) left most
		# slide index. This is used in looping calculation so that the reordering
		# of slides isn't affected by paginatePerSlide setting.
		currentSlideIndex: -> Math.floor @currentX / @slideWidth * -1

		# When looping, slides get re-ordered. This value is added to the
		# track transform so that the slides don't feel like they were re-ordered.
		trackLoopOffset: ->
			return 0 unless @shouldLoop
			offsetSlideCount = @currentSlideIndex
			offsetSlideCount -= 1 if @hasLeftPeekClone
			return offsetSlideCount * @slideWidth

		# Get slideIndex of the right most and left most slides indexes
		leftMostSlideIndex: -> @slideOrder.findIndex (index) => index == 0
		rightMostSlideIndex: -> @slideOrder.findIndex (index) =>
			index == @slideOrder.length - 1

	watch:

		# This represents the current (as in while scrolling / animating) left most
		# slide index. This is used in looping calculation so that the reordering
		# of slides isn't affected by paginatePerSlide setting.
		currentSlideIndex:
			immediate: true
			handler: -> @setSlideOrder()

		# Also update the slide order when the slides per page changes
		currentSlidesPerPage: -> @setSlideOrder()

	methods:

		# Calculating via watcher to prevent unnecesary recalculations (I noticed a
		# bunch of calls when this was done via a computed property)
		setSlideOrder: ->

			# Make an array as long as the slides count with incrementing values
			indices = [...Array(@slidesCount).keys()]
			count = indices.length

			# Shift the order to applying centering effect
			if @center
				split = Math.floor @currentSlidesPerPage / 2
				indices = [
					...indices.slice split
					...indices.slice 0, split
				]

			# Re-order while looping
			if @shouldLoop
				split = (count - @currentSlideIndex) % count
				indices = [
					...indices.slice split
					...indices.slice 0, split
				]

			# Set the new index order
			@slideOrder = indices

		# Reorder the initial slide state using CSS because the order is dependent
		# on the slides per page which isn't known via JS until hydrating
		makeBreakpointSlideOrderStyle: (breakpoint) ->
			return unless @center
			slidesPerPage = @getResponsiveValue 'slidesPerPage', breakpoint
			split = Math.floor slidesPerPage / 2
			rules = for i in [0..@slidesCount]
				"""
				#{@scopeSelector} .ssr-carousel-slide:nth-child(#{i + 1}) {
					order: #{(i + split) % @slidesCount};
				}
				"""
			return rules.join ''
