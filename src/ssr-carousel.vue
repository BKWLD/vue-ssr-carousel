<!-- Vue SSR Carousel -->

<template lang='pug'>

.ssr-carousel(:data-ssrc-id='scopeId')

	//- Render generated styles
	component(is='style' v-html='instanceStyles')

	//- The overflow mask and drag target
	.ssr-carousel-mask(
		:class='{ pressing }'
		@mousedown='onPointerDown'
		@touchstart='onPointerDown')

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
			:index='index'
			:pages='pages'
			@back='back'
			@next='next')

	//- Dots navigation
		ssr-carousel-dots(
			:index='index'
			:pages='pages')

</template>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<script lang='coffee'>
import SsrCarouselArrows from './ssr-carousel-arrows'
import SsrCarouselDots from './ssr-carousel-dots'
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

	components: {
		SsrCarouselArrows
		SsrCarouselDots
		SsrCarouselSlide
	}

	props:

		# If true, advance whole pages when navigating
		paginateBySlide: Boolean

	data: ->
		currentX: 0 # The actual left offset of the slides container
		targetX: 0 # Where we may be tweening the slide to
		index: 0 # The current page

	computed:

		# The current number of pages
		pages: ->
			if @paginateBySlide
			then Math.max 1, @slidesCount - @currentSlidesPerPage
			else Math.ceil @slidesCount / @currentSlidesPerPage

		# Styles that are used to position the track
		trackStyles: -> transform: "translateX(#{@currentX}px)"

		# Shorthand for the number of slides
		slidesCount: -> @slides.length

		# Calculate the width of a slide
		slideWidth: -> @pageWidth / @currentSlidesPerPage

		# Calculate the width of the track
		trackWidth: -> @slideWidth * @slidesCount

		# The ending x value
		endX: -> @pageWidth - @trackWidth

		# Filter out non-element nodes from the slides
		slides: -> (@$slots.default || []).filter (vnode) -> vnode?.tag

	methods:

		# Add px unit to a value if numeric
		autoUnit: (val) -> if String(val).match /^\d+$/ then "#{val}px" else val

		# Advance methods
		next: -> @goto @index + 1
		back: -> @goto @index - 1

		# Go to a specific index
		goto: (index) ->
			@index = @applyIndexBoundaries index
			@tweenToIndex @index

		# Tween to a specific index
		tweenToIndex: (index) ->
			x = if @paginateBySlide
			then index * @slideWidth
			else index * @pageWidth
			@targetX = @applyXBoundaries -1 * x
			@startTweening()

		# Apply boundaries to the index
		applyIndexBoundaries: (index) ->
			Math.max 0, Math.min @pages - 1, index

		# Constraint the x value to the min and max values
		applyXBoundaries: (x) -> Math.max @endX, Math.min 0, x

</script>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<style lang='stylus'>

// Mask overflow
.ssr-carousel-mask
	overflow hidden

	// When pressing, show drag cursor
	cursor grab
	&.pressing
		cursor grabbing

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
