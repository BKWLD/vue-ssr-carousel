<!-- The track that hosts the slides -->

<script lang='coffee'>
interactiveSelector = 'a, button, input, textarea, select'
export default

	props:
		dragging: Boolean
		trackTranslateX: Number
		slideOrder: Array
		activeSlides: Array
		leftPeekingSlideIndex: Number
		rightPeekingSlideIndex: Number
		rtl: Boolean
		dimensionsKnown: Number

	data: ->

		# Should the track element be an ul
		renderAsList: false

		# Should the track element be a tablist
		renderAsTablist: false

	# Set tabindex of inactive slides on mount
	mounted: ->
		@denyTabindex @inactiveSlides
		@denyTabindex @clonedSlides

	computed:

		# The HTML element of the track
		trackHTMLElement: -> if @renderAsList then 'ul' else 'div'

		# Get the count of non-cloned slides
		uniqueSlidesCount: -> @slideOrder.length

		# Get the total slides count, including clones
		allSlidesCount: -> @getSlideComponents().length

		# Check if there are cloned slides
		hasClonedSlides: -> @allSlidesCount > @uniqueSlidesCount

		# Make an array of inactive slide indices
		inactiveSlides: ->
			[0...@uniqueSlidesCount]
			.filter (index) => index not in @activeSlides

		# An array of the cloned slides indices
		clonedSlides: -> [@uniqueSlidesCount...@allSlidesCount]

		# Styles that are used to position the track
		styles: ->
			transform: "translateX(#{@trackTranslateX}px)" if @trackTranslateX

	# Update the tabindex of interactive elements when slides change
	watch: activeSlides: ->
		@allowTabindex @activeSlides
		@denyTabindex @inactiveSlides

	methods:

		# Make the slides to render into the track
		makeSlides: -> @getSlideComponents().map (vnode, index) =>
			vnode = @makeReactiveVnode vnode

			# Check if we are rendering a list of elements
			@renderAsList = true if index == 0 and vnode.tag == 'li'

			# Check if we are rendering a tablist
			@renderAsTablist = true if index == 0 and vnode?.data?.attrs?.role == 'tab'

			# This is a peeking clone if it's index is greater than the slide count
			slideCount = @uniqueSlidesCount
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

			# Make peeking clones and slides not in viewport as aria-hidden
			if isPeekingClone or index not in @activeSlides
			then vnode.data.attrs['aria-hidden'] = 'true'

			# Prevent duplicate keys on clones
			if isPeekingClone and vnode.key?
			then vnode.key += '-clone-' + index

			# Return modified vnode
			return vnode

		# Get the list of non-text slides, including peeking clones. This doesn't
		# work as a computed function
		getSlideComponents: ->
			slides = [...(@$slots.default || []), ...(@$slots.clones || [])]
			.filter (vnode) -> !vnode.text

			# Reverses the slide if rtl and if the dimensions are known. This
			# second condition exists to prevent the reversal from happening on SSR.
			# Which is important because this logic is paired with setting the
			# intial index to the last page which can't be known until the slide
			# width is known.
			if @rtl and @dimensionsKnown then slides = slides.reverse()
			return slides

		# Makes a clone of the vnode properties we'll be updating so the changes
		# get rendered. Based on:
		# https://github.com/vuejs/vue/issues/6052#issuecomment-313705168
		makeReactiveVnode: (vnode) ->

			# Expect a data object.  When it doesn't exist, it's a sign this this
			# vnode can't be manipulated vue-ssr-carousel.
			console.error "vnode has no data", vnode unless vnode.data

			# Make the new vnode and data
			newVnode = { ...vnode }
			newVnode.data = { ...vnode.data }

			# Clone style property. String styles will be on staticStyle so we can
			# ignore them.
			newVnode.data.style = { ...vnode.data.style }

			# Clone attrs property
			newVnode.data.attrs = { ...vnode.data.attrs }

			# Return the clone
			return newVnode

		# Prevent tabbing to interactive elements in slides with the passed in
		# index values
		denyTabindex: (indices) -> @setTabindex indices, -1

		# Allow tabindex on interactive elements in slides with the passed in
		# index values
		allowTabindex: (indices) -> @setTabindex indices, 0

		# Set tabindex value on interactive elements in slides
		setTabindex: (slideIndices, tabindexValue) ->
			for el in @getSlideElementsByIndices slideIndices

				# Set tabindex value on the slide, like in the case that the slide is
				# an <a>
				if el.matches interactiveSelector then el.tabIndex = tabindexValue

				# Set tabindex values on all interactive children
				el.querySelectorAll(interactiveSelector).forEach (el) ->
					el.tabIndex = tabindexValue

		# Get the slide elements that match the array of indices
		getSlideElementsByIndices: (slideIndices) ->
			Array.from(@$el.children).filter (el, i) -> i in slideIndices

	# Render the track and slotted slides
	render: (create) ->
		create @trackHTMLElement,
			attrs: {role: "tablist" if @renderAsTablist}
			style: @styles
			class: [ 'ssr-carousel-track', {
				@dragging
				"ssr-carousel-rtl": @rtl
			}]
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

	// Apply direction property which was reset in .ssr-carousel
	.ssr-carousel-rtl &
		direction rtl

// When the carousel is disabled (not enough slides to fill width), hide any
// clones that have created for other breakpoints (those with aria-hidden=true).
.ssr-carousel-mask.disabled .ssr-carousel-slide[aria-hidden='true']
	display none

</style>
