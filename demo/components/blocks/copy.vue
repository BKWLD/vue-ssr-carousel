<!-- Copy block -->

<template lang='pug'>

section.copy.max-w-small(:class='classes')

	wysiwyg(
		:html='block.body'
		:balance-text='block.balanceText'
		:unorphan='block.unorphan')

</template>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<script lang='coffee'>
export default

	props: block: Object

	computed:

		# Root classes
		classes: ->
			'text-' + @block.textAlignment.toLowerCase() if @block.textAlignment

</script>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<style lang='stylus' scoped>

// Center contents
.text-center
	text-align center
	>>> .vv-visual
		margin-h auto

// Right align contents
.text-right
	text-align right
	>>> .vv-visual
		margin-left auto

</style>
