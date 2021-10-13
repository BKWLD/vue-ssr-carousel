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

		# Provide different slides per page at different viewport widths
		responsive:
			type: Array
			default: -> []

	data: ->
		viewportWidth: null # Width of the viewport, for media query calculation
		pageWidth: null # Width of a page of slides (and the carousel container)

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

		# Get the current responsive rule by looping backwards through the
		# responsiveRules to return the last matching rule.
		currentResponsiveRule: ->
			if match = [...@responsiveRules].reverse().find ({ active }) -> active
			then match # Return the matching rule
			else { @slidesPerPage } # If match, return defaults

		# Calculate the current slides shown per viewport page, defaulting to
		# the default one
		currentSlidesPerPage: -> @currentResponsiveRule.slidesPerPage

		# Make the responsive styles content
		instanceStyles: -> """
			.ssr-carousel-slide {
				flex-basis: #{100 / @slidesPerPage}%;
			}
			#{@responsiveStyles.join("\n")}
		"""

		# Make style rules from the responsive rules
		responsiveStyles: -> @responsiveRules.map (breakpoint) =>
			"""
			@media #{breakpoint.mediaQuery} {
				.ssr-carousel-slide {
					flex-basis: #{100 / breakpoint.slidesPerPage}%;
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

		# Check if a breakpoint would apply currently. Not using window.matchQuery
		# so I can consume via a compued property
		isBreakpointActive: (breakpoint) -> switch
			when !@viewportWidth then false
			when (val = breakpoint.maxWidth) and @viewportWidth > val then false
			when (val = breakpoint.minWidth) and @viewportWidth < val then false
			else true
