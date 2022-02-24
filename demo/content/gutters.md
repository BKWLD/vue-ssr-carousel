---
title: 'Gutter Options'
---

## Numbers values are treated as pixels

<demos-gutters-numbers></demos-gutters-numbers>

```vue
<ssr-carousel :slides-per-page='2' :gutter='40'>
  <slide :index='1'></slide>
  <slide :index='2'></slide>
  <slide :index='3'></slide>
</ssr-carousel>
```

## Any CSS value is valid

<demos-gutters-css></demos-gutters-css>

```vue
<ssr-carousel :slides-per-page='2' gutter='3%'>
  <slide :index='1'></slide>
  <slide :index='2'></slide>
  <slide :index='3'></slide>
</ssr-carousel>
```

## You can even use CSS custom properties

<demos-gutters-css-vars></demos-gutters-css-vars>

```vue
<template>
  <ssr-carousel :slides-per-page='2' gutter='var(--fluid-gutter)'>
    <slide :index='1'></slide>
    <slide :index='2'></slide>
    <slide :index='3'></slide>
  </ssr-carousel>
</template>
<style lang="stylus">
body
  fluid --fluid-gutter, 40, 20
</style>
```

## Gutters are responsive

<demos-gutters-responsive></demos-gutters-responsive>

```vue
<ssr-carousel
  :slides-per-page='3'
  :gutter='40'
  :responsive='[
    {
      maxWidth: 1024,
      slidesPerPage: 2,
      gutter: 20,
    }
  ]'>
  <slide :index='1'></slide>
  <slide :index='2'></slide>
  <slide :index='3'></slide>
  <slide :index='4'></slide>
  <slide :index='5'></slide>
</ssr-carousel>
```
