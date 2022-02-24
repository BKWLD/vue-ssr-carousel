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
			console.log 'loop', index, @slideOrder[index]
			create SsrCarouselSlide, {
				parent: this
				style: order: @slideOrder[index]
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
