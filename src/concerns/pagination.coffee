###
Code related to dealing with advancing between pages
###
export default

	props:

		# If true, advance whole pages when navigating
		paginateBySlide: Boolean

	data: ->
		index: 0 # The current page
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

		# Shorthand for the number of slides
		slidesCount: -> @slides.length

	methods:

		# Advance methods
		next: -> @goto @index + 1
		back: -> @goto @index - 1

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
			Math.max 0, Math.min @pages - 1, index
