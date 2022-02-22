<!-- Vue SSR Carousel -->

<template lang='pug'>

.ssr-carousel(:data-ssrc-id='scopeId')

	//- Render generated styles
	component(is='style' v-html='instanceStyles')

	//- Container so that arrows can be centered relative to slides but not be
	//- within the mask's overflow:hidden (which prevents overriding styles from
	//- positioning outside of carousel).
	.ssr-carousel-slides

		//- The overflow mask and drag target
		.ssr-carousel-mask(
			:class='{ pressing, disabled }'
			v-on='maskListeners')

			//- The container of the slides that animates
			ssr-carousel-track(
				ref='track'
				:slides='slides'
				v-bind='{ dragging, trackTranslateX }')

		//- Back / Next navigation
		ssr-carousel-arrows(
			v-if='showArrows'
			v-bind='{ index, pages }'
			:loop='loop'
			@back='back'
			@next='next')
			template(#back): slot(name='back-arrow')
			template(#next): slot(name='next-arrow')

	//- Dots navigation
	ssr-carousel-dots(
		v-if='showDots'
		v-bind='{ boundedIndex, pages }'
		@goto='gotoDot')
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
import dimensions from './concerns/dimensions'
import dragging from './concerns/dragging'
import focus from './concerns/focus'
import looping from './concerns/looping'
import pagination from './concerns/pagination'
import peeking from './concerns/peeking'
import responsive from './concerns/responsive'
import tweening from './concerns/tweening'

# Component definition
export default
	name: 'SsrCarousel'

	# Load concerns
	mixins: [
		autoplay
		dimensions
		dragging
		focus
		looping
		pagination
		peeking
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

		# Combine the different factors that come together to determine the x
		# transfrom of the track
		trackTranslateX: ->
			@currentX + # The value from tweening or dragging
			@trackLoopOffset + # Offset from re-ordering slides for looping
			(if @disabled then 0 else @peekLeftPx) # Offset slides for the left peek

		# Determine whether to create hover event bindings
		watchesHover: -> @autoplayDelay > 0

		# Create event bindings
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

// Posiition arrows relative to this
.ssr-carousel-slides
	position relative

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
