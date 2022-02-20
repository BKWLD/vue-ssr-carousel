<!-- The track that hosts the slides -->

<script lang='coffee'>
import SsrCarouselSlide from './ssr-carousel-slide'
export default

	components: { SsrCarouselSlide }

	props:
		dragging: Boolean
		currentX: Number
		slides: Array

	computed:

		# Styles that are used to position the track
		styles: -> transform: "translateX(#{@currentX}px)"

	# Render the track and slotted slides
	render: (create) ->

		# Wrap the slides in ssr-carousel-slide functional components
		children = @slides.map (child) ->
			create SsrCarouselSlide, { parent: this }, [ child ]

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
