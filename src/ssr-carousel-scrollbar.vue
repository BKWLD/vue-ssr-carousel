<!-- Scroll bar navigation for carousel -->

<template lang="pug">

.ssr-carousel-scrollbar
	.ssr-carousel-bar-container(
		role='scrollbar'
		ref='container'
		@click='onScrollbarClick'
	)
		.ssr-carousel-bar(:style='barStyle')

</template>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<script lang="coffee">
export default
	name: 'SsrCarouselScrollbar'

	props:
		trackTranslateX: Number
		measuredTrackWidth: Number
		carouselWidth: Number

	computed:
		percentage: -> (-1 * @trackTranslateX) / (@measuredTrackWidth - @carouselWidth) * 100

		barStyle: ->
			"--left-offset": "#{@percentage}" if @percentage

	methods:
		onScrollbarClick: (e) ->
			containerWidth = @$refs.container.getBoundingClientRect().width
			clickLocation = e.offsetX
			percentage = Math.floor(clickLocation / containerWidth * 100)

			@$emit("gotoPercentage", percentage)
</script>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<style lang="stylus">

.ssr-carousel-scrollbar
	margin-top 10px
	display block
	height 12px
	width 100%
	background red

.ssr-carousel-bar-container
	background black
	position relative
	width 100%
	height 100%

.ssr-carousel-bar
	background orange
	position absolute
	circle(12px)
	left "calc((100% - %s) *(var(--left-offset)/100))" % @width
</style>
