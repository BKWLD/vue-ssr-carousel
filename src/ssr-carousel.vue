<!-- Vue SSR Carousel -->

<template lang='pug'>

.ssr-carousel(:data-ssrc-id='scopeId')

	//- Render generated styles
	component(is='style' v-html='instanceStyles')

	//- The overflow mask and drag target
	.ssr-carousel-mask(
		:class='{ pressing, disabled }'
		v-on=`disabled ? {} : {
			mousedown: onPointerDown,
			touchstart: onPointerDown,
		}`)

		//- The container of the slides that animates
		ssr-carousel-track(
			ref='track'
			v-bind='{ dragging, currentX }')

			//- Slides are injected here
			slot

		//- Back / Next navigation
		ssr-carousel-arrows(
			v-if='showArrows'
			v-bind='{ index, pages }'
			@back='back'
			@next='next')
			template(#back): slot(name='back-arrow')
			template(#next): slot(name='next-arrow')

	//- Dots navigation
	ssr-carousel-dots(
		v-if='showDots'
		v-bind='{ index, pages }'
		@goto='goto')
		template(#dot): slot(name='dot')

</template>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<script lang='coffee'>

# Child components
import SsrCarouselArrows from './ssr-carousel-arrows'
import SsrCarouselDots from './ssr-carousel-dots'
import SsrCarouselTrack from './ssr-carousel-track'

# Concerns
import dragging from './concerns/dragging'
import pagination from './concerns/pagination'
import responsive from './concerns/responsive'
import tweening from './concerns/tweening'

# Component definition
export default
	name: 'SsrCarousel'

	# Load concerns
	mixins: [
		dragging
		pagination
		responsive
		tweening
	]

	components: {
		SsrCarouselArrows
		SsrCarouselDots
		SsrCarouselTrack
	}

	props:

		# UI enabling controls
		showArrows: Boolean
		showDots: Boolean

</script>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<style lang='stylus'>

// Prevent webkit from doing elastic dragging horizontally on drag
.ssr-carousel
	touch-action pan-y

// Mask around slides
.ssr-carousel-mask
	overflow hidden

	// Support absolute positioning of arrows
	position relative

	// When pressing, show drag cursor
	&:not(.disabled)
		cursor grab
		&.pressing
			cursor grabbing

</style>
