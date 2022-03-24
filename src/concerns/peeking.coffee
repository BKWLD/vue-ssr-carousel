###
Code related to allowing edge slides to peek in from the side, including empty
gutter space.
###
export default

	props:

		# Use gutter's as the peeking value
		peekGutter: Boolean

		# Set both peeking values at once
		peek:
			type: Number | String
			default: ->

				# Prevent subpixel rounding issues from causing a sliver of offscreen
				# slide from peaking in.
				unless @peekGutter then 0
				else "calc(#{@gutter} - 1px)"

		# Distinct left/right peeking values
		peekLeft:
			type: Number | String
			default: -> @peek
		peekRight:
			type: Number | String
			default: -> @peek

		# When true, the peekLeft is used for the peekRight if the carousel is
		# disabled.  This behavior is expecting that there may be a different
		# peekRight (to hint at additional slides) but when there aren't more slide
		# to peek in, the peek value should functional like padding.
		matchPeekWhenDisabled:
			type: Boolean
			default: true

	data: ->

		# Store clones of the slides used for peeking
		clones: []

		# Store computed peek values
		peekLeftPx: 0
		peekRightPx: 0

	computed:

		# Determine if clones should be created
		hasPeekClones: -> @hasLeftPeekClone or @hasRightPeekClone
		hasPeekPrerequisites: -> @shouldLoop and @slidesCount > 1
		hasLeftPeekClone: -> @hasPeekPrerequisites and @peekLeft
		hasRightPeekClone: -> @hasPeekPrerequisites and @peekRight

		# Figure out which slide indexes to show in the left and right peek slots
		leftPeekingSlideIndex: -> @rightMostSlideIndex if @hasLeftPeekClone
		rightPeekingSlideIndex: -> @leftMostSlideIndex if @hasRightPeekClone

		# Combine the peeking values, which is needed commonly
		combinedPeek: -> @peekLeftPx + @peekRightPx

		# Make the styles object for reading computed styles
		peekStyles: ->
			breakpoint = @currentResponsiveBreakpoint
			left: @autoUnit @getResponsiveValue 'peekLeft', breakpoint
			right: @autoUnit @getResponsiveValue 'peekRight', breakpoint

	methods:

		# Capture measurements of peeking values
		capturePeekingMeasurements: ->
			return unless @$refs.peekValues
			@$nextTick -> # Wait for getResponsiveValue on @peekStyles
				styles = getComputedStyle @$refs.peekValues
				@peekLeftPx = parseInt styles.left
				@peekRightPx = parseInt styles.right

		# Calculate the offset that gets added to the current position to account
		# for prepended slides from peeking. This replicates the JS required to
		# make `trackLoopOffset` using CSS only so there is now reflow when JS
		# hydrates.  This gets overridden by the track's inline translateX style.
		makeBreakpointTrackTransformStyle: (breakpoint) ->
			return if @isDisabledAtBreakpoint breakpoint
			peekLeft = @getResponsiveValue 'peekLeft', breakpoint

			# If no peeking slide, just add the offset
			rule = unless @hasLeftPeekClone
			then "transform: translateX(#{@autoUnit(peekLeft)});"

			# Otherwise, offset by one slide width (including it's gutter)
			else
				gutter = @getResponsiveValue 'gutter', breakpoint
				"transform: translateX(calc(
					#{@autoUnit(peekLeft)} -
					(#{@makeSlideWidthCalc(breakpoint)} + #{@autoUnit(gutter)})
				));"

			# Wrap rule in selector
			"#{@scopeSelector} .ssr-carousel-track { #{rule} }"
