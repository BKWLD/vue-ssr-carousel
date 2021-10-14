---
title: 'Gutter Options'
---

## Numbers values are treated as pixels

<ssr-carousel :slides-per-page='2' :gutter='40'>
  <slide :index='1'></slide>
  <slide :index='2'></slide>
  <slide :index='3'></slide>
</ssr-carousel>

```vue
<ssr-carousel :slides-per-page='2' :gutter='40'>
  <slide :index='1'></slide>
  <slide :index='2'></slide>
  <slide :index='3'></slide>
</ssr-carousel>
```

## Any CSS value is valid

<ssr-carousel :slides-per-page='2' gutter='3%'>
  <slide :index='1'></slide>
  <slide :index='2'></slide>
  <slide :index='3'></slide>
</ssr-carousel>

```vue
<ssr-carousel :slides-per-page='2' gutter='3%'>
  <slide :index='1'></slide>
  <slide :index='2'></slide>
  <slide :index='3'></slide>
</ssr-carousel>
```

## You can even use CSS custom properties

<ssr-carousel :slides-per-page='2' gutter='var(--fluid-gutter)'>
  <slide :index='1'></slide>
  <slide :index='2'></slide>
  <slide :index='3'></slide>
</ssr-carousel>

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
