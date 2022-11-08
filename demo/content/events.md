---
title: 'Events Demo'
---

## Supports v-model

You can set the initial index with `:value`. Or use `v-model` to track the current index from your component.  With `v-model`, adjusting the value will change the current page.  However, if you use a non-0 starting index, `vue-ssr-carousel` will jump to your selected page when it has a chance to measure the size of your slides.  If you want to prevent this flicker, you may want to prevent showing `vue-ssr-carousel` until the `tween:start` event fires.

<demos-events-v-model></demos-events-v-model>

```vue
<template>
  <div>

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
```

This also works with looping:

<demos-events-v-model loop></demos-events-v-model>

```vue
<template>
  <div>

    <ssr-carousel v-model='page' loop>
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
```

## All Events

Interact with demo to view events

<demos-events-all></demos-events-all>
