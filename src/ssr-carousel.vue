<!-- Vue SSR Carousel -->

<template lang='pug'>

.ssr-carousel(
	v-if='$slots.default && $slots.default.length'
	:key='$slots.default.length'
	:data-ssrc-id='scopeId'
	@keyup.tab='onTab')

	//- Render generated styles
	component(is='style' v-html='instanceStyles')

	//- Container so that arrows can be centered relative to slides but not be
	//- within the mask's overflow:hidden (which prevents overriding styles from
	//- positioning outside of carousel).
	.ssr-carousel-slides

		//- Render peeking styles to an element so their computed px values can be
		//- measured
		.ssr-peek-values(ref='peekValues' :style='peekStyles')

		//- The overflow mask and drag target
		.ssr-carousel-mask(
			ref='mask'
			:class='{ pressing, disabled }'
			v-on='maskListeners')

			//- The container of the slides that animates
			ssr-carousel-track(
				ref='track'
				v-bind=`{
					dragging,
					trackTranslateX,
					slideOrder,
					activeSlides,
					leftPeekingSlideIndex,
					rightPeekingSlideIndex,
				}`)

				//- Render the slotted slides
				template(#default): slot

				//- Make clones if peeking
				template(v-if='hasPeekClones' #clones): slot

		//- Back / Next navigation
		ssr-carousel-arrows(
			v-if='showArrows'
			v-bind='{ index, pages, loop }'
			@back='back'
			@next='next')
			template(#back='props'): slot(name='back-arrow' v-bind='props')
			template(#next='props'): slot(name='next-arrow' v-bind='props')

	//- Dots navigation
	ssr-carousel-dots(
		v-if='showDots'
		v-bind='{ boundedIndex, pages }'
		@goto='gotoDot')
		template(#dot='props'): slot(name='dot' v-bind='props')

	//- Live region, for announcing the current slide position
	.ssr-carousel-visually-hidden(aria-live='polite' aria-atomic='true')
		| {{ currentSlideMessage }}

</template>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<script lang='coffee'>

# Child components
import SsrCarouselArrows from './ssr-carousel-arrows'
import SsrCarouselDots from './ssr-carousel-dots'
import SsrCarouselTrack from './ssr-carousel-track'

# Concerns
import accessibility from './concerns/accessibility'
import autoplay from './concerns/autoplay'
import dimensions from './concerns/dimensions'
import dragging from './concerns/dragging'
import feathering from './concerns/feathering'
import focus from './concerns/focus'
import gutters from './concerns/gutters'
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
		accessibility
		autoplay
		dimensions
		dragging
		feathering
		focus
		gutters
		looping
		pagination
		responsive
		peeking # After `responsive` so prop can access `gutter` prop
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
		# transfrom of the track.  We don't return a value until the carousel
		# width is measured since the calculation depends on that.
		trackTranslateX: ->
			return unless @carouselWidth and not @disabled
			@currentX + # The value from tweening or dragging
			@trackLoopOffset + # Offset from re-ordering slides for looping
			@peekLeftPx # Offset slides for the left peek

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

// Used to capture computed values
.ssr-peek-values
	position: absolute

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

// Hide content only intended for screen readers
// From https://www.w3.org/WAI/tutorials/carousels/working-example/
.ssr-carousel-visually-hidden
	border: 0
	clip rect(0 0 0 0)
	clip-path inset(50%)
	height: 1px
	margin: -1px
	overflow hidden
	padding 0
	position absolute
	width 1px
	white-space nowrap

</style>
