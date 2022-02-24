<!-- An empty container that the clone will be mounted in -->

<template lang='pug'>

div

</template>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<script lang='coffee'>
export default
	name: 'SsrCarouselPeekingSlide'

	# The DOM element of the cloned slide
	props: [ 'clone' ]

	# Append the clone inside
	mounted: -> @$el.replaceWith @clone
	watch: clone: -> @$el.replaceWith @clone


</script>
