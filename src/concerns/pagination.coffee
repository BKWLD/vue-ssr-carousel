###
Code related to dealing with advancing between pages
###
export default

	props:

		# If true, advance whole pages when navigating
		paginateBySlide: Boolean

		# Syncs to the `index` value via v-model
		value:
			type: Number
			default: 0

	data: ->
		index: @value # The current page; when looping may exceed slideCount
		currentX: 0 # The actual left offset of the slides container
		targetX: 0 # Where we may be tweening the slide to

	computed:

		# The current number of pages
		pages: -> switch

			# When looping and paginating per slide, make a dot per slide
			when @paginateBySlide and @shouldLoop then @slidesCount

			# Else, restrict pages so you the last slide is flush with right edge
			when @paginateBySlide then @slidesCount - @currentSlidesPerPage + 1

			# When not paginating by slide, the amount of pages is related to the
			# current number of slides shown per page.
			else Math.ceil @slidesCount / @currentSlidesPerPage

		# Disable carousel-ness when there aren't enough slides
		disabled: ->
			if @isVariableWidth
			then Math.round(@trackWidth) <= Math.round(@carouselWidth)
			else @slidesCount <= @currentSlidesPerPage

		# Get just the slotted slides that are components, ignoring text nodes
		# which may exist as a result of whitespace
		slides: -> (@$slots.default || []).filter (vnode) -> !vnode.text

		# Get the total number of slides
		slidesCount: -> @slides.length

		# Apply boundaries to the index, which will exceed them when looping
		boundedIndex: ->
			boundedIndex = @index % @pages
			if boundedIndex < 0
			then @pages + boundedIndex
			else boundedIndex

		# The current incomplete page offset
		currentIncompletePageOffset: -> @makeIncompletePageOffset @index

		# Get an array of slide offsets of the slides that are 100% in the
		# viewport. Aka, the count will be equal the currentSlidesPerPage per page.
		activeSlides: ->

			# If variable width, we're not currently measuring the width of the slides
			# in JS so we can't know which are active, so treat all of them as active.
			return [0...@slidesCount] if @isVariableWidth

			# Get the offset of the leftmost slide in the current viewport
			start = if @paginateBySlide then @boundedIndex
			else @boundedIndex * @currentSlidesPerPage

			# Adjust the start if not looping and on the last page of slides and there
			# aren't enough slides to make a full page
			if not @shouldLoop then start -= @boundedIndex % @currentSlidesPerPage

			# Make an array of the offsets of the slide between the start and the
			# slides per page
			[start...(start + @currentSlidesPerPage)].reduce (slides, offset) =>

				# When looping, use modulo to loop back around
				if @shouldLoop then slides.push offset % @slidesCount

				# Else, cap the offset to the last slide
				else if offset < @slidesCount then slides.push offset

				# Return updated slides
				return slides
			, []

	watch:

		# Treat v-model input as a "goto" request
		value: ->

			# If the value exceeds the bounds, immediately emit a new input event
			# with the corrected value
			if @value != @applyIndexBoundaries @value
			then @$emit 'input', @boundedIndex

			# Else if the incoming value is different than the current value
			# then tween to it
			else if @value != @boundedIndex then @goto @value

		# Emit events on index change
		boundedIndex: ->
			@$emit 'change', index: @boundedIndex
			@$emit 'input', @boundedIndex # For v-model

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

		# Go to the beginning of track
		gotoStart: ->
			if @isVariableWidth
			then @tweenToX 0
			else @goto 0

		# Go to the end of the track
		gotoEnd: ->
			if @isVariableWidth
			then @tweenToX @endX
			else @goto @pages - 1

		# Tween to a specific index
		tweenToIndex: (index) ->
			@targetX = @getXForIndex index
			@startTweening()

		# Jump to an index with no tween
		jumpToIndex: (index) ->
			@currentX = @targetX = @getXForIndex index

		# Calculate the X value given an index
		getXForIndex: (index) ->

			# Figure out the new x position
			x = if @paginateBySlide
			then index * @slideWidth * -1
			else index * @pageWidth * -1

			# Apply adjustments to x value and persist
			x += @makeIncompletePageOffset index
			return Math.round @applyXBoundaries x

		# Creates a px value to represent adjustments that should be made to
		# account for incommplete pages of slides when looping is enabled. Like
		# when there is 3 slotted slides and 2 slides per page and you have looped
		# over to the 2nd page index of 0. The track needs to be shifted to the
		# left by one slideWidth in this case.
		makeIncompletePageOffset: (index) ->
			return 0 unless @shouldLoop and not @paginateBySlide
			incompleteWidth = @pageWidth - @lastPageWidth
			Math.floor(index / @pages) * incompleteWidth

		# Apply boundaries to the index
		applyIndexBoundaries: (index) ->
			if @shouldLoop then index
			else Math.max 0, Math.min @pages - 1, index
