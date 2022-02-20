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
		pages: ->
			if @paginateBySlide
			then Math.max 1, @slidesCount - @currentSlidesPerPage
			else Math.ceil @slidesCount / @currentSlidesPerPage

		# Disable carousel-ness when there aren't enough slides
		disabled: -> @slidesCount <= @currentSlidesPerPage

		# Get the total number of slides
		slidesCount: -> @slottedSlides.length

		# Apply boundaries to the index, which will exceed them when looping
		boundedIndex: ->
			if @index < 0 then @pages + @index
			else if @index >= @pages then @index - @pages
			else @index

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
			x = if @paginateBySlide
			then index * @slideWidth
			else index * @pageWidth
			@targetX = @applyXBoundaries -1 * x
			@startTweening()

		# Apply boundaries to the index
		applyIndexBoundaries: (index) ->
			if @loop then index
			else Math.max 0, Math.min @pages - 1, index
