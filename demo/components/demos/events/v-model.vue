<template>

<div data-cy='v-model'>

  <ssr-carousel v-model='page'>
    <slide :index='1'></slide>
    <slide :index='2'></slide>
    <slide :index='3'></slide>
  </ssr-carousel>

  <span class="now">Current Page: {{ page + 1 }}</span>
  <button @click='page--'>Back</button>
  <button @click='page++'>Next</button>

</div>

</template>

<script>
export default {
  data() {
    return {
      page: 1,
    };
  },
};
</script>

<style lang="stylus" scoped>

.now
  margin-right 1em

button
  border 1px solid currentColor
  padding .5em
  border-radius .5em

</style>
