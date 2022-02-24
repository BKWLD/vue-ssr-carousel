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

	data: ->

		# Store clones of the slides used for peeking
		clones: []

		# Store computed peek values
		peekLeftPx: 0
		peekRightPx: 0

	# Clone all of the slides for use in peeking
	created: -> @clones = @slides.map @cloneVnode if @hasPeekClones

	computed:

		# Determine if clones should be created
		hasPeekClones: -> @hasLeftPeekClone or @hasRightPeekClone
		hasPeekPrerequisites: -> @loop and @slidesCount > 1
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

		# Clone a vnode, based on
		# https://github.com/vuejs/vue/blob/23760b5c7a350484ef1eee18f8c615027a8a8ad9/src/core/vdom/vnode.js#L89
		cloneVnode: (vnode) ->
			cloned = new vnode.constructor(
				vnode.tag,
				vnode.data,
				vnode.children && vnode.children.slice(),
				vnode.text,
				vnode.elm,
				vnode.context,
				vnode.componentOptions,
				vnode.asyncFactory
			)
			cloned.ns = vnode.ns
			cloned.isStatic = vnode.isStatic
			cloned.key = vnode.key
			cloned.isComment = vnode.isComment
			cloned.fnContext = vnode.fnContext
			cloned.fnOptions = vnode.fnOptions
			cloned.fnScopeId = vnode.fnScopeId
			cloned.asyncMeta = vnode.asyncMeta
			cloned.isCloned = true
			return cloned
