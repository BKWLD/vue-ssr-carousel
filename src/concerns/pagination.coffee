###
Code related to dealing with advancing between pages
###
export default

	props:

		# If true, advance whole pages when navigating
		paginateBySlide: Boolean

	data: ->
		index: 0 # The current page; when looping may exceed slideCount
		currentX: 0 # The actual left offset of the slides container
		targetX: 0 # Where we may be tweening the slide to

	computed:

		# The current number of pages
		pages: -> switch

			# When looping and paginating per slide, make a dot per slide
			when @paginateBySlide and @loop then @slidesCount

			# Else, restrict pages so you the last slide is flush with right edge
			when @paginateBySlide then @slidesCount - @currentSlidesPerPage + 1

			# When not paginating by slide, the amount of pages is related to the
			# current number of slides shown per page.
			else Math.ceil @slidesCount / @currentSlidesPerPage

		# Disable carousel-ness when there aren't enough slides
		disabled: -> @slidesCount <= @currentSlidesPerPage

		# Get just the slotted slides that are components, ignoring text nodes
		# which may exist as a result of whitespace
		slottedSlides: -> @$slots.default.filter (vnode) -> !!vnode.tag

		# Get the total number of slides
		slidesCount: -> @slottedSlides.length

		# Apply boundaries to the index, which will exceed them when looping
		boundedIndex: -> Math.abs(@index) % @pages

		# The current incomplete page offset
		currentIncompletePageOffset: -> @makeIncompletePageOffset @index

	watch:

		# Emit events on index change
		boundedIndex: -> @$emit 'change', { @boundedIndex }

	methods:

		# Advance methods
		next: -> @goto @index + 1
		back: -> @goto @index - 1

		# The dots are ignorant of looping, so convert their bounded index to the
		# true index so we don't animate through a ton of pages going to the
		# clicked dot.
		gotoDot: (dotIndex) -> @goto dotIndex - @boundedIndex + @index

		# Go to a specific index
		goto: (index) ->
			@index = @applyIndexBoundaries index
			@tweenToIndex @index

		# Tween to a specific index
		tweenToIndex: (index) ->

			# Figure out the new x position
			x = if @paginateBySlide
			then index * @slideWidth * -1
			else index * @pageWidth * -1

			# Apply adjustments to x value and persist
			x += @makeIncompletePageOffset index
			@targetX = @applyXBoundaries x

			# Start tweening
			@startTweening()

		# Creates a px value to represent adjustments that should be made to
		# account for incommplete pages of slides when looping is enabled. Like
		# when there is 3 slotted slides and 2 slides per page and you have looped
		# over to the 2nd page index of 0. The track needs to be shifted to the
		# left by one slideWidth in this case.
		makeIncompletePageOffset: (index) ->
			return 0 unless @loop and not @paginateBySlide
			incompleteWidth = @pageWidth - @lastPageWidth
			Math.floor(index / @pages) * incompleteWidth

		# Apply boundaries to the index
		applyIndexBoundaries: (index) ->
			if @loop then index
			else Math.max 0, Math.min @pages - 1, index
