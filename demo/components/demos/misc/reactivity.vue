<template>

<div>
	<ssr-carousel :slides-per-page='2' paginate-by-slide loop peek='40px'>
		<slide :index='1' :class='{ invert }'>
			<button @click='invert = !invert'>Invert the slide</button>
		</slide>
		<slide :index='2'></slide>
		<slide :index='3'></slide>
	</ssr-carousel>
</div>

</template>

<script>
export default {
  data() {
    return { invert: false };
  },
};
</script>

<style scoped>
.invert {
  filter: invert(100%);
}
</style>
