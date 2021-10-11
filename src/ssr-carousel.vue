<!-- Vue SSR Carousel -->

<template lang='pug'>

.ssr-carousel

	//- The overflow mask and the drag target of the slides
	.ssr-carousel-mask: .ssr-carousel-track(
		:style='trackStyles'
		:class='trackClasses'
		@mousedown='onStartDrag')

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
export default

	components: { SsrCarouselSlide }

	props:

		# How many slides are visible at once in the viewport
		slidesPerViewport: Number

	data: ->
		dragging: false # The user is currently dragging
		currentX: 0 # The actual left offset of the slides container
		targetX: 0 # Where we may be tweening the slide to
		lastDragX: null # Where was the mouse with the drag started

	# Cleanup listeners
	beforeDestroy: ->
		document.body.removeEventListener 'mousemove', @onDrag
		document.body.removeEventListener 'mouseup', @onStopDrag

	computed:

		# Styles that are used to position the track
		trackStyles: -> transform: "translateX(#{@currentX}px)"
		trackClasses: -> { @dragging }

	watch:

		# Watch for mouse move changes when the user starts dragging
		dragging: ->
			if @dragging
				document.body.addEventListener 'mousemove', @onDrag
				document.body.addEventListener 'mouseup', @onStopDrag
			else
				document.body.removeEventListener 'mousemove', @onDrag
				document.body.removeEventListener 'mouseup', @onStopDrag

	methods:

		# Keep track of whether user is dragging
		onStartDrag: (e) ->
			@lastDragX = e.pageX
			@dragging = true
		onStopDrag: -> @dragging = false

		# Keep x values up to date while dragging
		onDrag: (e) ->
			@currentX += e.pageX - @lastDragX
			@lastDragX = e.pageX

</script>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<style lang='stylus'>

// Mask overflow
.ssr-carousel-mask
	overflow hidden

// Setup slides for horizontal layout
.ssr-carousel-track
	display flex

	// When dragging, show drag cursor
	cursor grab
	&.dragging
		cursor grabbing

</style>
