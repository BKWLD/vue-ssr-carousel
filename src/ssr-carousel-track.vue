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

		# Make the slides to render into the track
		makeSlides: -> @getSlideComponents().map (vnode, index) =>
			vnode = @makeReactiveVnode vnode

			# This is a peeking clone if it's index is greater than the slide count
			slideCount = @slideOrder.length
			isPeekingClone = index >= slideCount
			peekingIndex = index - slideCount

			# Add the slide class using staticClass since it isn't reactive to data
			cssClass = 'ssr-carousel-slide'
			if vnode.data.staticClass
			then vnode.data.staticClass += " #{cssClass}"
			else vnode.data.staticClass = cssClass

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

			# Make peeking clones all aria-hidden
			if isPeekingClone then vnode.data.attrs['aria-hidden'] = 'true'

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

			# Clone attrs property
			newVnode.data.attrs = { ...vnode.data.attrs }

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
