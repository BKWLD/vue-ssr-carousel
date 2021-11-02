---
title: 'Miscellaneous'
---

## Carousel is disabled when less slides than viewport

<ssr-carousel
  show-arrows
  show-dots
  :slides-per-page='3'
  :responsive='[
    {
      maxWidth: 767,
      slidesPerPage: 1
    }
  ]'>
  <slide :index='1'></slide>
  <slide :index='2'></slide>
</ssr-carousel>

```vue
<ssr-carousel
  show-arrows
  show-dots
  :slides-per-page='3'
  :responsive='[
    {
      maxWidth: 767,
      slidesPerPage: 1
    }
  ]'>
  <slide :index='1'></slide>
  <slide :index='2'></slide>
</ssr-carousel>
```

## Slide images and anchors can be dragged

<ssr-carousel :slides-per-page='2'>
  <slide :index='1'>
    <img src='/imgs/gradient.png'>
    <p><a href="https://www.bukwild.com">Example link</a></p>
  </slide>
  <slide :index='2'>
    <img src='/imgs/gradient.png'>
    <p><a href="https://www.bukwild.com">Example link</a></p>
  </slide>
  <slide :index='3'>
    <img src='/imgs/gradient.png'>
    <p><a href="https://www.bukwild.com">Example link</a></p>
  </slide>
</ssr-carousel>

```vue
<ssr-carousel :slides-per-page='2'>
  <slide :index='1'>
    <img src='/imgs/gradient.png'>
    <p><a href="https://www.bukwild.com">Example link</a></p>
  </slide>
  <slide :index='2'>
    <img src='/imgs/gradient.png'>
    <p><a href="https://www.bukwild.com">Example link</a></p>
  </slide>
  <slide :index='3'>
    <img src='/imgs/gradient.png'>
    <p><a href="https://www.bukwild.com">Example link</a></p>
  </slide>
</ssr-carousel>
```

## Demo of emitted events

<events-demo></events-demo>
