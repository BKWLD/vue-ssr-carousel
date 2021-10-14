<!-- Arrow navigation for back and next -->

<template lang='pug'>

.ssr-carousel-arrows

	button(@click='$emit("back")') Back
	button(@click='$emit("next")') Next

</template>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<script lang='coffee'>
export default

	props:
		index: Number
		pages: Number

</script>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<style lang='stylus' scoped>



</style>
