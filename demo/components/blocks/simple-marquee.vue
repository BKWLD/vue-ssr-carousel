<!-- Simple text over a white background -->

<template lang='pug'>

section.simple-marquee.max-w-full: .max-w

	//- The title
	h1.style-h1 {{ block.title }}

	//- Optional list of buttons
	.buttons(v-if='block.buttons.length'): btn-craft(
		v-for='button in block.buttons' :key='button.id'
		:button='button')

</template>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<script lang='coffee'>
export default

	props: block: Object

</script>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<style lang='stylus' scoped>

.simple-marquee

	// Put text on a dark background
	background lighten(primary-color, 10%)
	color white

	// Make it look centered _after_ the header
	&:before
		content ''
		display block
		+tablet-up()
			height header-h
		+tablet-down()
			height mobile-header-h

	// Add internal spacing
	fluid-space padding-v, 'l'

	// Center text
	text-align center

// Optional buttons
.buttons

	// Push away from copy
	&:not(:first-child)
		fluid-space margin-top, 's'

</style>
