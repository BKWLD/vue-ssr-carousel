###
Code related to looping / infinite scroll
###
export default

	# Add prop to enable looping
	props:
		looping: Boolean

	# Store cloned slides
	data: ->
		prependedSlides: []
		appendedSlides: []

	# Testing cloneVnode
	created: ->
		clone = @cloneVnode @$slots.default[1]
		@prependedSlides.push clone

	computed:

		# Combine slotted slides and clones
		slides: -> [...@prependedSlides, ...@$slots.default, ...@appendedSlides]

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
