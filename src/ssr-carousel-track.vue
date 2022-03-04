<!-- The track that hosts the slides -->

<script lang='coffee'>
export default

	props:
		dragging: Boolean
		trackTranslateX: Number
		slideOrder: Array
		leftPeekingSlideIndex: Number
		rightPeekingSlideIndex: Number

	computed:

		# Styles that are used to position the track
		styles: ->
			transform: "translateX(#{@trackTranslateX}px)" if @trackTranslateX

	methods:

		# Make the slide of slides to render into the track
		makeSlides: -> @getSlideComponents().map (vnode, index) =>
			vnode = @makeReactiveVnode vnode

			# This is a peeking clone if it's index is greater than the slide count
			slideCount = @slideOrder.length
			isPeekingClone = index >= slideCount
			peekingIndex = index - slideCount

			# Add the slide class
			vnode.data.class.push 'ssr-carousel-slide'

			# Order the slide, like for looping
			unless isPeekingClone
			then vnode.data.style.order = @slideOrder[index] || 0

			# Or put at the beginning / end if peeking
			else vnode.data.style.order = switch
				when peekingIndex == @leftPeekingSlideIndex then '-1'
				when peekingIndex == @rightPeekingSlideIndex then @slideOrder.length

			# Hide cloned slides that aren't involved in peeking
			if isPeekingClone and peekingIndex not in [
					@leftPeekingSlideIndex
					@rightPeekingSlideIndex
				]
			then vnode.data.style.display = 'none'

			# Return modified vnode
			return vnode

		# Get the list of non-text slides, including peeking clones
		getSlideComponents: ->
			[...@$slots.default, ...(@$slots.clones || [])]
			.filter (vnode) -> !vnode.text

		# Makes a clone of the vnode properties we'll be updating so the changes
		# get rendered. Based on:
		# https://github.com/vuejs/vue/issues/6052#issuecomment-313705168
		makeReactiveVnode: (vnode) ->

			# Make the new vnode and data
			newVnode = { ...vnode }
			newVnode.data = { ...vnode.data}

			# Clone style property. String styles will be on staticStyle so we can
			# ignore them.
			newVnode.data.style = { ...vnode.data.style }

			# Clone the class property, which may be an array or object. String
			# classes will be stored on staticClass and can be ignored. Converting
			# object instances to an array for convenience
			if vnode.data.class and typeof vnode.data.class == 'object'
			then newVnode.data.class = [ { ...vnode.data.class } ]
			else newVnode.data.class = [ ...(vnode.data.class || []) ]

			# Return the clone
			return newVnode

	# Render the track and slotted slides
	render: (create) ->
		create 'div',
			class: [ 'ssr-carousel-track', { @dragging } ]
			style: @styles
		, @makeSlides()

</script>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<style lang='stylus'>

// Setup slides for horizontal layout
.ssr-carousel-track
	display flex

	// Don't allow text selection
	user-select none

	// When dragging, disable pointer events. This clears a tick after the mouse
	// is released so links aren't followed on mouse up.
	&.dragging
		pointer-events none

// Force the slides to not shrink below their basis
.ssr-carousel-slide
	flex-shrink 0

</style>
