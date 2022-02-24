<!-- The track that hosts the slides -->

<script lang='coffee'>
import SsrCarouselSlide from './ssr-carousel-slide'
import SsrCarouselPeekingSlide from './ssr-carousel-peeking-slide'
import Vue from 'vue'
export default

	components: { SsrCarouselSlide }

	props:
		dragging: Boolean
		trackTranslateX: Number
		slides: Array
		leftPeekingSlide: null # DOM Element
		rightPeekingSlide: null # DOM Element

	computed:

		# Styles that are used to position the track
		styles: ->
			transform: "translateX(#{@trackTranslateX}px)" if @trackTranslateX

	# Render the track and slotted slides
	render: (create) ->

		# Wrap the slides in ssr-carousel-slide functional components
		children = @slides.map (child) ->
			create SsrCarouselSlide, { parent: this }, [ child ]

		# Add the peeking slides
		if @leftPeekingSlide
		then children.unshift create SsrCarouselPeekingSlide,
			props: clone: @leftPeekingSlide
		if @rightPeekingSlide
		then children.push create SsrCarouselPeekingSlide,
			props: clone: @rightPeekingSlide

		# Create the track div
		create 'div',
			class: [ 'ssr-carousel-track', { @dragging } ]
			style: @styles
		, children

</script>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<style lang='stylus' scoped>

// Setup slides for horizontal layout
.ssr-carousel-track
	display flex

	// Don't allow text selection
	user-select none

	// When dragging, disable pointer events. This clears a tick after the mouse
	// is released so links aren't followed on mouse up.
	&.dragging
		pointer-events none

</style>
