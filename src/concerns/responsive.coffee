###
Code related to changing the slides per page at different viewport widths
###
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

	computed:

		# Make the css scopeId from things that can influence the styles, like the
		# slides count and props.
		scopeId: -> @hashString @slidesCount + '|' + JSON.stringify @$props

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
			else { # Defaults
				@slidesPerPage
				@gutter
				@peekLeft
				@peekRight
				@feather
			}

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

		# Take an item form the responsive array and make a media query from it
		makeMediaQuery: (breakpoint) ->
			rules = []
			if breakpoint.maxWidth
			then rules.push "(max-width: #{breakpoint.maxWidth}px)"
			if breakpoint.minWidth
			then rules.push "(min-width: #{breakpoint.minWidth}px)"
			return rules.join ' and '

		# Make the block of styles for a breakpoint
		makeBreakpointStyles: (breakpoint) -> [
			@makeBreakpointDisablingRules(breakpoint)
			@makeBreakpointFeatheringStyle(breakpoint)
			@makeBreakpointTrackTransformStyle(breakpoint)
			@makeBreakpointSlideWidthStyle(breakpoint)
			@makeBreakpointSlideGutterStyle(breakpoint)
			@makeBreakpointSlideOrderStyle(breakpoint)
		].join ' '

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

		# Check if carousel disabled at the breakpoint
		isDisabledAtBreakpoint: (breakpoint) ->
			slidesPerPage = @getResponsiveValue 'slidesPerPage', breakpoint
			return @slidesCount <= slidesPerPage

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
			return val if (val = breakpoint[property])?

			# If no responsive rules, use default
			return @[property] unless @responsiveRules.length

			# Check responsive rules to see if any of them contain a value for the
			# property
			ruleMatch = @responsiveRules.find (rule) ->

				# Rule must contain this property
				return unless rule[property]

				# Match if rule's min-width is less than the target max-width
				return true if breakpoint.maxWidth && rule.minWidth &&
				rule.minWidth < breakpoint.maxWidth

				# Match if rule's max-width is less than the target max-width
				return true if breakpoint.maxWidth && rule.maxWidth &&
				rule.maxWidth < breakpoint.maxWidth

				# Match if rule's min-width is greater than the target min-width
				return true if breakpoint.minWidth && rule.minWidth &&
				rule.minWidth > breakpoint.minWidth

				# Match if rule's max-width is greater than the target min-width
				return true if breakpoint.minWidth && rule.maxWidth &&
				rule.minWidth > breakpoint.minWidth

			# Return matching property or fallback to the main component prop
			return if ruleMatch then ruleMatch[property] else @[property]

		# Make a hash from a string, adapted from:
		# https://stackoverflow.com/a/33647870/59160
		hashString: (str) ->
			hash = 0
			i = 0
			len = str.length
			while i < len
			then hash = ((hash << 5) - hash + str.charCodeAt(i++)) << 0
			return hash.toString 36

		# Add px unit to a value if numeric
		autoUnit: (val) ->
			return '0px' unless val
			if String(val).match /^[\d\-\.]+$/ then "#{val}px" else val
