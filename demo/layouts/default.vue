<!-- General layout -->

<template lang='pug'>

main.default-layout.max-w: nuxt

</template>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<script lang='coffee'>
export default
	name: 'DefaultLayout'

</script>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<style lang='stylus' scoped>

.default-layout
	fluid-space padding-bottom, 'l'

</style>

<style lang='stylus'>

// Prevent horizontal scrolling when using overflow-visible
#__layout
	overflow: hidden

</style>
