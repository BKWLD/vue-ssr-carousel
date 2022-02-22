###
Code related to measuring the size of the carousel after mounting
###
import throttle from 'lodash/throttle'
export default

	data: ->
		viewportWidth: null # Width of the viewport, for media query calculation
		pageWidth: null # Width of a page of slides (aka the carousel container)
		gutterWidth: 0 # Computed width of gutters, since they support css vars

	# Add resize listening
	mounted: ->
		@onResize()
		@onResizeThrottled = throttle @onResize, 200
		window.addEventListener 'resize', @onResizeThrottled

	# Cleanup listeners
	beforeDestroy: -> window.removeEventListener 'resize', @onResizeThrottled

	computed:

		# Calculate the width of a slide
		slideWidth: -> @pageWidth / @currentSlidesPerPage

		# Calculate the width of the track
		trackWidth: -> @slideWidth * @slidesCount

		# The ending x value
		endX: ->
			return 0 if @disabled
			@pageWidth - @trackWidth

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
			@pageWidth = @$el.getBoundingClientRect().width + @gutterWidth
			@viewportWidth = window.innerWidth
