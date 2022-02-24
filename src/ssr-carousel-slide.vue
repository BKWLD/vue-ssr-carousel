<!-- Wraps a slotted slide to control things like style attributes -->

<script lang='coffee'>
export default
	name: 'SsrCarouselSlide'

	render: (create) ->

		# Get at the slide vnode
		slide = @$slots.default[0]

		# If the slide is a component, the data may need to be set in asyncMeta.
		# Otherwise, it's set on the slide itself
		if slide.asyncMeta
		then addStaticClass slide.asyncMeta, 'ssr-carousel-slide'
		else addStaticClass slide, 'ssr-carousel-slide'

		# Return the slotted slide
		return slide

# Add a static class to an object, mutating it
addStaticClass = (obj, klass) ->
	obj.data = {} unless obj.data
	obj.data.staticClass = '' unless obj.data.staticClass
	if obj.data.staticClass.indexOf(klass) == -1
		obj.data.staticClass += ' ' + klass
		obj.data.staticClass = obj.data.staticClass.trim()

</script>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<style lang='stylus'>

.ssr-carousel-slide

	// Force the slides to not shrink below their basis
	flex-shrink 0

</style>
