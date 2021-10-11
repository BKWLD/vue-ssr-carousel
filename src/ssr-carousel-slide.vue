<!-- Wrapps a slotted slide to control things like style attributes -->

<script lang='coffee'>
export default
	name: 'SsrCarouselSlide'
	functional: true

	props:
		slide: Object # A Vue Vnode
		hidden: Boolean # Whether the slide is currently in viewport or not

	render: (create, { props: { slide, hidden } }) ->

		# Add own class to slide
		slide.data.class = [
			'ssr-carousel-slide'
			'ssr-carousel-hidden': hidden
		]

		# Return the slotted slide
		return slide

</script>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<style lang='stylus'>

.ssr-carousel-slide

	// Defaultt to full width
	flex-basis 100%

	// Force the slides to the basis
	flex-shrink 0

// Set the visibility to hidden so intersection observer isn't triggered
.ssr-carousel-hidden
	visibility hidden

</style>
