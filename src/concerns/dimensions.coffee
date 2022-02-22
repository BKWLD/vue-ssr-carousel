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
		slideWidth: -> @pageWidth  / @currentSlidesPerPage

		# Calculate the width of the whole track from the slideWidth.
		trackWidth: -> @slideWidth * @slidesCount - @peekRightPx

		# The ending x value
		endX: -> if @disabled then 0 else @pageWidth - @trackWidth

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
