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

		# Get just the slotted slides that are components, ignoring text nodes
		# which may exist as a result of whitespace
		slottedSlides: -> @$slots.default.filter (vnode) -> !!vnode.tag

		# Get the total number of slides
		slidesCount: -> @slottedSlides.length

		# Apply boundaries to the index, which will exceed them when looping
		boundedIndex: -> Math.abs(@index) % @pages

		# The current incomplete page offset
		currentIncompletePageOffset: -> @makeIncompletePageOffset @index

		# Combine the different factors that come together to determine the x
		# transfrom of the track
		trackTranslateX: ->
			@currentX + @trackLoopOffset

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
		# account for incommplete pages of slides when looping is enbaled. Like
		# when there is 3 slotted slides and 2 slides per page.
		makeIncompletePageOffset: (index) ->
			return 0 unless @loop and not @paginateBySlide
			Math.floor(index / @pages) *
			(@slidesCount % @currentSlidesPerPage) *
			@slideWidth

		# Apply boundaries to the index
		applyIndexBoundaries: (index) ->
			if @loop then index
			else Math.max 0, Math.min @pages - 1, index
