---
title: 'Responsive Options'
---

## Change settings at different breakpoints

You can use `max-width` rules:

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

... or `min-width` rules:

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

## Variable width slides (beta)

While it's not the primary use case of this package, you if you set `slidesPerPage` to `null`, the carousel will not touch the width of individual slides.  Some notes:

- If there are not enough slides to fill the viewport, slides will be left aligned rather than center aligned.
- This hasn't been tested with responsive props or looping. Peeking doesn't make sense for this use case but care hasn't been taken to disabling it.

<demos-responsive-variable-width></demos-responsive-variable-width>

```vue
<ssr-carousel :slides-per-page='null'>
  <slide :index='1' :style='{ width: "60vw", height: "400px"}'></slide>
  <slide :index='2' :style='{ width: "40vw", height: "400px"}'></slide>
  <slide :index='3' :style='{ width: "20vw", height: "400px"}'></slide>
</ssr-carousel>
```

Here's an example where there aren't enough slides to fill the viewport:

<demos-responsive-variable-width-disabled></demos-responsive-variable-width-disabled>

```vue
<ssr-carousel :slides-per-page='null'>
  <slide :index='1' :style='{ width: "30vw", height: "300px"}'></slide>
  <slide :index='2' :style='{ width: "50vw", height: "300px"}'></slide>
</ssr-carousel>
```
