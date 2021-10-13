###
Code related to changing the slides per page at different viewport widths
###
import debounce from 'lodash/debounce'
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
			default: 0

		# Provide different slides per page at different viewport widths
		responsive:
			type: Array
			default: -> []

	data: ->
		viewportWidth: null # Width of the viewport, for media query calculation
		pageWidth: null # Width of a page of slides (and the carousel container)
		scopeId: null # CSS class uses to scope styles to the instance

	# Generate the scoping class during SSR
	fetch: -> @scopeId = @makeScopeId()

	# Default listeners
	mounted: ->
		@onResize()
		window.addEventListener 'resize', @onResize

	# Cleanup listeners
	beforeDestroy: -> window.removeEventListener 'resize', @onResize

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

		# Assemble the dynamic styles from:
		# - Default styles for when a media query doesn't apply
		# - Responsive styles, if specified
		instanceStyles: -> """
			#{@scopeSelector} .ssr-carousel-slide {
				#{@makeBreakpointWidthStyle(@$props) || ''}
				#{@makeBreakpointMarginStyle(@$props) || ''}
			}
			#{@responsiveStyles.join(' ')}
		"""

		# Make style rules from the responsive rules
		responsiveStyles: -> @responsiveRules.map (breakpoint) =>
			"""
			@media #{breakpoint.mediaQuery} {
				#{@scopeSelector} .ssr-carousel-slide {
					#{@makeBreakpointWidthStyle(breakpoint) || ''}
					#{@makeBreakpointMarginStyle(breakpoint) || ''}
				}
			}
			"""

	methods:

		# Measure the component width for various calculations. Using
		# getBoundingClientRect so we can get fractional values
		onResize: debounce ->
			return unless @$el?.nodeType == Node.ELEMENT_NODE
			@pageWidth = @$el.getBoundingClientRect().width
			@viewportWidth = window.innerWidth
		, 300

		# Take an item form the responsive array and make a media query from it
		makeMediaQuery: (breakpoint) ->
			rules = []
			if breakpoint.maxWidth
			then rules.push "(max-width: #{breakpoint.maxWidth}px)"
			if breakpoint.minWidth
			then rules.push "(min-width: #{breakpoint.minWidth}px)"
			return rules.join ' and '

		# Make the flex-basis style that gives a slide it's width given
		# slidesPerPage. Reduce this width by the gutter if present
		makeBreakpointWidthStyle: (breakpoint) ->

			# Collect responsive values
			slidesPerPage = @getResponsiveValue 'slidesPerPage', breakpoint
			return unless slidesPerPage
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
			return unless gutter = @getResponsiveValue 'gutter', breakpoint
			"margin-left: #{@autoUnit(gutter)};"

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
