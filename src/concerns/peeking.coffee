###
Code related to allowing edge slides to peek in from the side, including empty
gutter space.
###
export default

	data: ->
		leftPeekingSlide: null
		rightPeekingSlide: null

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
		peekLeftPx: 0
		peekRightPx: 0

	computed:

		# Combine the peeking values, which is needed commonly
		combinedPeek: -> @peekLeftPx + @peekRightPx

		# Make the styles object for reading computed styles
		peekStyles: ->
			breakpoint = @currentResponsiveBreakpoint
			left: @autoUnit @getResponsiveValue 'peekLeft', breakpoint
			right: @autoUnit @getResponsiveValue 'peekRight', breakpoint

	watch:

		# Clone the edge slides for merging into the slides array
		slideOrder:
			immediate: true
			handler: ->
				return unless @loop and @slidesCount > 1
				if @peekLeft
					firstSlide = @slottedSlides[@slideOrder[@slidesCount - 1]]
					@leftPeekingSlide = @cloneVnode firstSlide
				if @peekRight
					lastSlide = @slottedSlides[@slideOrder[0]]
					@rightPeekingSlide = @cloneVnode lastSlide

	methods:

		# Capture measurements of peeking values
		capturePeekingMeasurements: ->
			return unless @$refs.peekValues
			@$nextTick -> # Wait for getResponsiveValue on @peekStyles
				styles = getComputedStyle @$refs.peekValues
				@peekLeftPx = parseInt styles.left
				@peekRightPx = parseInt styles.right

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
