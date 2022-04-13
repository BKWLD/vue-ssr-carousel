<template>

<div>
	<ssr-carousel show-dots :key='slides.length'>
		<slide
			v-for='slide in slides'
			:key='slide'
			:index='slide'
		></slide>
	</ssr-carousel>
	<button @click='addSlide'>Add a slide</button>
</div>

</template>

<script>
export default {
  data() {
    return {
      slides: [],
    };
  },
  methods: {
    addSlide() {
      this.slides.push(this.slides.length + 1);
    },
  },
};
</script>

<style lang="stylus" scoped>
button
	border 1px solid currentColor
	padding .5em
	border-radius .5em
	margin-bottom 1em
</style>
