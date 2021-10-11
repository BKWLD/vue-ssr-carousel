<!-- Wrapper block that allows setting background colors -->

<template lang='pug'>

section.wrapper(
	:style='{ background: backgroundColor }'
	:class='classes')

	//- The list of blocks
	blocks-list(:blocks='block.blocks' :index-offset='blockIndex')

</template>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<script lang='coffee'>
import { isDark } from '@bkwld/light-or-dark'
export default

	props: block: Object

	# Get the index of the block
	inject: blockIndex: default: 0

	computed:

		# Make the backgroundColor, which may not contain a leading '#'
		# https://github.com/presseddigital/colorit/pull/35
		backgroundColor: ->
			return unless color = @block.backgroundColor

		# Is it a dark background color
		isDark: -> isDark @backgroundColor if @backgroundColor

		# Root classes
		classes: -> 'dark-wrapper': @isDark

</script>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<style lang='stylus' scoped>

// Can be used by child blocks to toggle light/dark as well
.dark-wrapper
	color white

</style>
