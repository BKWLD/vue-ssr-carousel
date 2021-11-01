###
Code related to changing the slides per page at different viewport widths
###
import throttle from 'lodash/throttle'
export default

	props:

		# How many slides are visible at once in the viewport if no responsive
		# rules apply
		slidesPerPage:
			type: Number
			default: 1

		# The gutters between slides
		gutter:
			type: Number | String
			default: 20

		# Provide different slides per page at different viewport widths
		responsive:
			type: Array
			default: -> []

	data: ->
		viewportWidth: null # Width of the viewport, for media query calculation
		pageWidth: null # Width of a page of slides (and the carousel container)
		gutterWidth: 0 # Computed width of gutters, since they support css vars
		scopeId: null # CSS class uses to scope styles to the instance

	# Generate the scoping class during SSR
	fetch: -> @scopeId = @makeScopeId()

	mounted: ->

		# If no scopeId found (like because not running in Nuxt environment),
		# generate the scopeId
		@scopeId = @makeScopeId() unless @scopeId

		# Add resize listening
		@onResize()
		@onResizeThrottled = throttle @onResize, 200
		window.addEventListener 'resize', @onResizeThrottled

	# Cleanup listeners
	beforeDestroy: -> window.removeEventListener 'resize', @onResizeThrottled

	computed:

		# Massage media queries into the responsive prop
		responsiveRules: -> @responsive.map (breakpoint) => {
			...breakpoint
			mediaQuery: @makeMediaQuery breakpoint
			active: @isBreakpointActive breakpoint
		}

		# Get current responsive values
		currentSlidesPerPage: ->
			@getResponsiveValue 'slidesPerPage', @currentResponsiveBreakpoint

		# Get the current responsive rule by looping backwards through the
		# responsiveRules to return the last matching rule.
		currentResponsiveBreakpoint: ->
			if match = [...@responsiveRules].reverse().find ({ active }) -> active
			then match # Return the matching rule
			else { @slidesPerPage, @gutter } # Else return defaults

		# Make the scoping selecotr
		scopeSelector: -> "[data-ssrc-id='#{@scopeId}']"

		# Assemble all the dynamic instance styles
		instanceStyles: ->
			@makeBreakpointStyles(@$props) +
			@responsiveRules.map (breakpoint) =>
				"@media #{breakpoint.mediaQuery} {
					#{@makeBreakpointStyles(breakpoint)}
				}"
			.join(' ')

	watch:

		# Fix alignment of slides while resizing
		pageWidth: -> @tweenToIndex @index

		# If resizing the browser leads to disabling, reset the slide to the first
		# page.  Like if a user had switched to the 2nd page on mobile and then
		# resized to desktop
		disabled: -> @goto(0) if @disabled

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

		# Take an item form the responsive array and make a media query from it
		makeMediaQuery: (breakpoint) ->
			rules = []
			if breakpoint.maxWidth
			then rules.push "(max-width: #{breakpoint.maxWidth}px)"
			if breakpoint.minWidth
			then rules.push "(min-width: #{breakpoint.minWidth}px)"
			return rules.join ' and '

		# Make the block of styles for a breakpoint
		makeBreakpointStyles: (breakpoint) -> """
			#{@makeBreakpointDisablingRules(breakpoint)}
			#{@scopeSelector} .ssr-carousel-slide {
				#{@makeBreakpointWidthStyle(breakpoint)}
			}
			#{@scopeSelector} .ssr-carousel-slide:not(:last-child) {
				#{@makeBreakpointMarginStyle(breakpoint) || ''}
			}
		"""

		# Apply disabling styles via breakpoint when there are not enough slides
		# for the slidesPerPage
		makeBreakpointDisablingRules: (breakpoint) ->
			slidesPerPage = @getResponsiveValue 'slidesPerPage', breakpoint

			# Disabled, center slides and hide carousel UI
			if @slidesCount <= slidesPerPage
				"""
				#{@scopeSelector} .ssr-carousel-track { justify-content: center; }
				#{@scopeSelector} .ssr-carousel-arrows,
				#{@scopeSelector} .ssr-carousel-dots { display: none; }
				"""

			# Enabled, restore default styles
			else
				"""
				#{@scopeSelector} .ssr-carousel-track { justify-content: start; }
				#{@scopeSelector} .ssr-carousel-arrows { display: block; }
				#{@scopeSelector} .ssr-carousel-dots { display: flex; }
				"""

		# Make the flex-basis style that gives a slide it's width given
		# slidesPerPage. Reduce this width by the gutter if present
		makeBreakpointWidthStyle: (breakpoint) ->

			# Collect responsive values
			slidesPerPage = @getResponsiveValue 'slidesPerPage', breakpoint
			gutter = @getResponsiveValue 'gutter', breakpoint

			# If there is no gutter, then width is simply a percentage
			widthPercentage = 100 / slidesPerPage
			unless gutter then "flex-basis: #{widthPercentage}%;"

			# Otherwise use a calc to adjust to accomodate gutter
			else "flex-basis: calc( #{widthPercentage}% -
				#{@autoUnit(gutter)} *
				#{slidesPerPage - 1} / #{slidesPerPage});"

		# Apply gutters between slides via margins
		makeBreakpointMarginStyle: (breakpoint) ->
			gutter = @getResponsiveValue 'gutter', breakpoint
			"margin-right: #{@autoUnit(gutter)};"

		# Check if a breakpoint would apply currently. Not using window.matchQuery
		# so I can consume via a compued property
		isBreakpointActive: (breakpoint) -> switch
			when !@viewportWidth then false
			when (val = breakpoint.maxWidth) and @viewportWidth > val then false
			when (val = breakpoint.minWidth) and @viewportWidth < val then false
			else true

		# Find the first breakpoint with a property set
		getResponsiveValue: (property, breakpoint) ->

			# If this breakpoint has a value, use it
			return val if val = breakpoint[property]

			# If no responsive rules, use default
			return @[property] unless @responsiveRules.length

			# Otherwise, look up this breakpoint in the list...
			breakpointIndex = @responsiveRules.findIndex ({ maxWidth }) ->
				maxWidth == breakpoint.maxWidth
			unless breakpointIndex >= 0
			then throw "Breakpoint missing: #{JSON.stringify(breakpoint)}"

			# ... if it _wasn't_ the first entry, check if any preceeding breakpoints
			# have this value set
			if breakpointIndex > 0
				if match = @responsiveRules
				.slice(0, breakpointIndex).reverse()
				.find (breakpoint) -> breakpoint[property]
				then return match[property]

			# ... else, return the defaults
			return @[property]

		# Make a short random string
		# https://stackoverflow.com/a/8084248/59160
		makeScopeId: -> (Math.random() + 1).toString(36).substring(7)

		# Add px unit to a value if numeric
		autoUnit: (val) -> if String(val).match /^\d+$/ then "#{val}px" else val
