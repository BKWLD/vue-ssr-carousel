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
		slide.data = {} unless slide.data
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

	// Force the slides to not shrink below their basis
	flex-shrink 0

// Set the visibility to hidden so intersection observer isn't triggered
.ssr-carousel-hidden
	visibility hidden

</style>
