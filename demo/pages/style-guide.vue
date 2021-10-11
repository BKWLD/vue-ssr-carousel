<!-- Render all the typography styles -->

<template lang='pug'>

.style-guide.wysiwyg

	h1.header Typography
	.style-h1 <strong>h1</strong> Cras justo odio, dapibus ac facilisis in, egestas eget quam.
	.style-h2 <strong>h2</strong> Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
	.style-h3 <strong>h3</strong> Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
	.style-h4 <strong>h4</strong> Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
	.style-h5 <strong>h5</strong> Donec ullamcorper nulla non metus auctor fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
	p <strong>p</strong> Etiam porta sem malesuada magna mollis euismod. Maecenas faucibus mollis interdum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla.

	h1.header Spacing
	.spacers
		.xl XL
		.l L
		.m M
		.s S
		.xs XS

</template>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<script lang='coffee'>
export default
	layout: 'none'

	# Disable indexing
	head: -> meta: [
		@$metaTag 'robots', 'noindex, nocache'
	]

</script>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<style lang='stylus' scoped>

.style-guide
	fluid-space padding, 'l'

.header
	border-bottom 1px solid black

.spacers > *

	// Invert
	background black
	color white

	// Typgraphy
	flex-center()
	font-size 10px
	font-weight bold

	// Seperate from one another
	&:not(:first-child)
		fluid-space margin-top, 'xs'

	// Add sizing
	for size in 'xl' 'l' 'm' 's' 'xs'
		&.{size}
			fluid-space height, size

</style>
