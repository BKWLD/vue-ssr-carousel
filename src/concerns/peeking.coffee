###
Code related to allowing edge slides to peek in from the side, including empty
gutter space.
###
export default

	data: -> leftPeekingSlide: null

	props:

		# Distinct left/right peeking values
		peekLeft:
			type: Number | String
			default: -> 0
		peekRight:
			type: Number | String
			default: -> 0

	data: ->
		peekLeftPx: Number @peekLeft
		peekRightPx: Number @peekRight

	computed:

		# Combine the peeking values, which is needed commonly
		combinedPeek: -> @peekLeftPx + @peekRightPx

		# Determine whether a clone of the last slide should be made
		shouldCreateLeftPeekingSlide: -> not @disabled and @loop and @peekLeft

	watch:

		# Clone the last slide for prepending to slides list. Watching this
		# property because it updates as user drags.
		currentSlideIndex:
			immediate: true
			handler: (index) ->
				return unless @shouldCreateLeftPeekingSlide
				lastSlideVnode = @slottedSlides[@slidesCount - 1]
				@leftPeekingSlide = @cloneVnode lastSlideVnode

	methods:

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
