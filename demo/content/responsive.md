---
title: 'Responsive Options'
---

## Change settings at different breakpoints

<demos-responsive-max-width></demos-responsive-max-width>

```vue
<ssr-carousel
  :slides-per-page='4'
  :responsive='[
    {
      maxWidth: 1280,
      slidesPerPage: 3,
    },
    {
      maxWidth: 1024,
      slidesPerPage: 2,
    },
    {
      maxWidth: 767,
      slidesPerPage: 1
    }
  ]'>
  <slide :index='1'></slide>
  <slide :index='2'></slide>
  <slide :index='3'></slide>
  <slide :index='4'></slide>
  <slide :index='5'></slide>
  <slide :index='6'></slide>
  <slide :index='7'></slide>
  <slide :index='8'></slide>
  <slide :index='9'></slide>
  <slide :index='10'></slide>
</ssr-carousel>
```

## Min-width queries are also supported

<demos-responsive-min-width></demos-responsive-min-width>

```vue
<ssr-carousel
  :slides-per-page='1'
  :responsive='[
    {
      minWidth: 768,
      slidesPerPage: 2,
    },
    {
      minWidth: 1024,
      slidesPerPage: 3,
    }
  ]'>
  <slide :index='1'></slide>
  <slide :index='2'></slide>
  <slide :index='3'></slide>
  <slide :index='4'></slide>
  <slide :index='5'></slide>
  <slide :index='6'></slide>
</ssr-carousel>
```

## First slide can be centered

This option should only be used with odd-numbers of `slides-per-page`.

<demos-responsive-center></demos-responsive-center>

```vue
<ssr-carousel
  :slides-per-page='4'
  center
  :responsive='[
    {
      maxWidth: 1280,
      slidesPerPage: 3,
    },
    {
      maxWidth: 767,
      slidesPerPage: 1
    }
  ]'>
  <slide :index='1'></slide>
  <slide :index='2'></slide>
  <slide :index='3'></slide>
  <slide :index='4'></slide>
  <slide :index='5'></slide>
  <slide :index='6'></slide>
  <slide :index='7'></slide>
</ssr-carousel>
```
