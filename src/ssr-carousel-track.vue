<!-- The track that hosts the slides -->

<script lang='coffee'>
import SsrCarouselSlide from './ssr-carousel-slide'
export default

	components: { SsrCarouselSlide }

	props:
		dragging: Boolean
		trackTranslateX: Number
		slides: Array
		slideOrder: Array
		clones: Array
		leftPeekingSlideIndex: Number
		rightPeekingSlideIndex: Number

	computed:

		# Styles that are used to position the track
		styles: ->
			transform: "translateX(#{@trackTranslateX}px)" if @trackTranslateX

	# Render the track and slotted slides
	render: (create) ->

		# Wrap the slides in ssr-carousel-slide components. When I passed the order
		# in as a prop and tried to set the style from within the component, it
		# never updated. Thus, I'm setting the style here as part of the create().
		children = @slides.map (child, index) =>
			create SsrCarouselSlide, {
				parent: this
				style: order: @slideOrder[index]
			}, [ child ]

		# Append all clones and set their styles.  See above comment for why this
		# is done here rather than in SsrCarouselSlide.
		children = children.concat @clones.map (child, index) =>
			create SsrCarouselSlide, {
				parent: this
				style:

					# Put left and right peeking slides at the end of the list
					order: switch
						when index == @leftPeekingSlideIndex then '-1'
						when index == @rightPeekingSlideIndex then @slides.length

					# Hide all clones that aren't peeking
					display: 'none' unless index in [
						@leftPeekingSlideIndex
						@rightPeekingSlideIndex
					]
			}, [ child ]

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
