<!-- Vue SSR Carousel -->

<template lang='pug'>

.ssr-carousel(:data-ssrc-id='scopeId')

	//- Render generated styles
	component(is='style' v-html='instanceStyles')

	//- The overflow mask and drag target
	.ssr-carousel-mask(
		:class='{ pressing, disabled }'
		v-on='maskListeners')

		//- The container of the slides that animates
		ssr-carousel-track(
			ref='track'
			:slides='slides'
			v-bind='{ dragging, currentX }')

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
import autoplay from './concerns/autoplay'
import dragging from './concerns/dragging'
import focus from './concerns/focus'
import looping from './concerns/looping'
import pagination from './concerns/pagination'
import responsive from './concerns/responsive'
import tweening from './concerns/tweening'

# Component definition
export default
	name: 'SsrCarousel'

	# Load concerns
	mixins: [
		autoplay
		dragging
		focus
		looping
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

	computed:
		watchesHover: -> @autoplayDelay > 0

		maskListeners: ->
			return {} if @disabled
			{
				mousedown: @onPointerDown
				touchstart: @onPointerDown
				...(unless @watchesHover then {} else {
					mouseenter: @onEnter
					mouseleave: @onLeave
				})
			}

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
