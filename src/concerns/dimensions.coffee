###
Code related to measuring the size of the carousel after mounting
###
import throttle from 'lodash/throttle'
export default

	data: ->
		viewportWidth: null # Width of the viewport, for media query calculation
		carouselWidth: null # Width of a page of the carousel
		gutterWidth: 0 # Computed width of gutters, since they support css vars

	# Add resize listening
	mounted: ->
		@onResize()
		@onResizeThrottled = throttle @onResize, 200
		window.addEventListener 'resize', @onResizeThrottled

	# Cleanup listeners
	beforeDestroy: -> window.removeEventListener 'resize', @onResizeThrottled

	computed:

		# The width of a page of slides, which may be less than the carouselWidth
		# if there is peeking. This includes the affect of gutters.
		pageWidth: -> @carouselWidth - @combinedPeek

		# Calculate the width of a slide based on client side measured pageWidth
		# rather than measuring it explicitly in the DOM. This value includes the
		# gutter.
		slideWidth: -> @pageWidth / @currentSlidesPerPage

		# Calculate the width of the whole track from the slideWidth.
		trackWidth: -> @slideWidth * @slidesCount

		# Figure out the width of the last page, which may not have enough slides
		# to fill it.
		lastPageWidth: ->

			# Determine how many slides are on the final page of pagination. If the
			# remainder was 0, that means the page is flush with slides, so swap
			# the 0 for the max amount.
			slidesPerPage = @currentSlidesPerPage
			slidesOnLastPage = @slidesCount % slidesPerPage
			if slidesOnLastPage == 0
			then slidesOnLastPage = slidesPerPage

			# Turn the slide count into a width value
			width = slidesOnLastPage * @slideWidth
			return width

		# The ending x value, only used when not looping
		endX: ->
			if @disabled then 0
			else @pageWidth - @trackWidth + @peekRightPx

		# Check if the drag is currently out bounds
		isOutOfBounds: -> @currentX > 0 or @currentX < @endX

	methods:

		# Measure the component width for various calculations. Using
		# getBoundingClientRect so we can get fractional values.  We also need
		# the width of the gutter since that's effectively part of the page.
		onResize: ->
			return unless @$el?.nodeType == Node.ELEMENT_NODE
			return unless firstSlide = @$refs.track.$el.firstElementChild
			@gutterWidth = parseInt getComputedStyle(firstSlide).marginRight
			@carouselWidth = @$el.getBoundingClientRect().width + @gutterWidth
			@viewportWidth = window.innerWidth
			@capturePeekingMeasurements()

		# Make the width style that gives a slide it's width given
		# slidesPerPage. Reduce this width by the gutter if present
		makeBreakpointWidthStyle: (breakpoint) ->
			"""
			#{@scopeSelector} .ssr-carousel-slide {
				width: #{@makeSlideWidthCalc(breakpoint)};
			}
			"""

		# Build the calc string which makes a percentage width for a slide and
		# reduces it by combined peeking and gutter influence. The computed
		# style this produces should have an equal value to the `slideWidth`
		# computed property which is client side JS dependent.
		makeSlideWidthCalc: (breakpoint) ->
			slidesPerPage = @getResponsiveValue 'slidesPerPage', breakpoint
			gutter = @getResponsiveValue 'gutter', breakpoint
			peekLeft = @getResponsiveValue 'peekLeft', breakpoint
			peekRight = @getResponsiveValue 'peekRight', breakpoint
			"calc(
				#{100 / slidesPerPage}% -
				(#{@autoUnit(peekLeft)} + #{@autoUnit(peekRight)}) / #{slidesPerPage} -
				(#{@autoUnit(gutter)} * #{slidesPerPage - 1}) / #{slidesPerPage}
			)"
