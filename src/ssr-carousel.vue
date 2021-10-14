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
		.ssr-carousel-track(
			ref='track'
			:style='trackStyles'
			:class='{ dragging }')

			//- Each slotted slide is wrapped by the ssr-carousel-slide functional
			//- component.
			ssr-carousel-slide(
				v-for='vnode, index in slides' :key='index'
				:slide='vnode')

		//- Back / Next navigation
		ssr-carousel-arrows(
			v-if='showArrows'
			:index='index'
			:pages='pages'
			@back='back'
			@next='next')
			template(#back): slot(name='back-arrow')
			template(#next): slot(name='next-arrow')

	//- Dots navigation
	ssr-carousel-dots(
		v-if='showDots'
		:index='index'
		:pages='pages'
		@goto='goto')
		template(#dot): slot(name='dot')

</template>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<script lang='coffee'>

# Child components
import SsrCarouselArrows from './ssr-carousel-arrows'
import SsrCarouselDots from './ssr-carousel-dots'
import SsrCarouselSlide from './ssr-carousel-slide'

# Concerns
import dragging from './concerns/dragging'
import pagination from './concerns/pagination'
import responsive from './concerns/responsive'
import tweening from './concerns/tweening'

# Component definition
export default

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
		SsrCarouselSlide
	}

	props:

		# UI enabling controls
		showArrows: Boolean
		showDots: Boolean

	computed:

		# Filter out non-element nodes from the slides
		slides: -> (@$slots.default || []).filter (vnode) -> vnode?.tag

	methods:

		# Add px unit to a value if numeric
		autoUnit: (val) -> if String(val).match /^\d+$/ then "#{val}px" else val

</script>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<style lang='stylus'>

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

// Setup slides for horizontal layout
.ssr-carousel-track
	display flex

	// Center cards when not enough to render
	.ssr-carousel-mask.disabled &
		justify-content center

	// Don't allow text selection
	user-select none

	// When dragging, disable pointer events. This clears a tick after the mouse
	// is released so links aren't followed on mouse up.
	&.dragging
		pointer-events none

</style>
