<!-- Vue SSR Carousel -->

<template lang='pug'>

.ssr-carousel

	//- This is the track that contains all of the initial slides. Each slotted
	//- slide is wrapped by the ssr-carousel-slide functional component.
	.ssr-carousel-slides: ssr-carousel-slide(
		v-for='vnode, index in $slots.default'
		:key='index'
		:slide='vnode'
		:hidden='index > 0')


</template>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<script lang='coffee'>
import SsrCarouselSlide from './ssr-carousel-slide'
export default

	components: { SsrCarouselSlide }

	props:

		# How many slides are visible at once in the viewport
		slidesPerViewport: Number

</script>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<style lang='stylus'>

.ssr-carousel-slides

	// Setup slides for horizontal layout
	display flex

	// Mask overflow
	overflow hidden

</style>
