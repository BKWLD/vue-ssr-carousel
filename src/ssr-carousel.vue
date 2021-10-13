<!-- Vue SSR Carousel -->

<template lang='pug'>

.ssr-carousel(:data-ssrc-id='scopeId')

	//- Render generated styles
	component(is='style' v-html='instanceStyles')

	//- The overflow mask and the drag target of the slides
	.ssr-carousel-mask: .ssr-carousel-track(
		ref='track'
		:style='trackStyles'
		:class='trackClasses'
		@mousedown='onPointerDown'
		@touchstart='onPointerDown')

		//- Each slotted slide is wrapped by the ssr-carousel-slide functional
		//- component.
		ssr-carousel-slide(
			v-for='vnode, index in $slots.default'
			:key='index'
			:slide='vnode')

</template>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<script lang='coffee'>
import SsrCarouselSlide from './ssr-carousel-slide'
import dragging from './concerns/dragging'
import responsive from './concerns/responsive'
import tweening from './concerns/tweening'
export default

	# Load concerns
	mixins: [
		dragging
		responsive
		tweening
	]

	components: { SsrCarouselSlide }

	data: ->

		# General posisition
		currentX: 0 # The actual left offset of the slides container
		targetX: 0 # Where we may be tweening the slide to

	computed:

		# Styles that are used to position the track
		trackStyles: -> transform: "translateX(#{@currentX}px)"
		trackClasses: -> { @pressing, @dragging }

		# Shorthand for the number of slides
		slidesCount: -> @$slots.default.length

		# Calculate the width of a slide
		slideWidth: -> @pageWidth / @currentSlidesPerPage

		# The current number of pages
		pages: -> Math.round @slidesCount / @currentSlidesPerPage

		# Calculate the width of the track
		trackWidth: -> @slideWidth * @slidesCount

		# The ending x value
		endX: -> @pageWidth - @trackWidth

	methods:

		# Add px unit to a value if numeric
		autoUnit: (val) -> if String(val).match /^\d+$/ then "#{val}px" else val

</script>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<style lang='stylus'>

// Mask overflow
.ssr-carousel-mask
	overflow hidden

// Setup slides for horizontal layout
.ssr-carousel-track
	display flex

	// Don't allow text selection
	user-select none

	// When pressing, show drag cursor
	cursor grab
	&.pressing
		cursor grabbing

	// When dragging, disable pointer events. This clears a tick after the mouse
	// is released so links aren't followed on mouse up.
	&.dragging
		pointer-events none

</style>
