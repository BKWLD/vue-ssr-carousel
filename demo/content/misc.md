---
title: 'Miscellaneous'
---

## Carousel is disabled when less slides than viewport

<demos-misc-disabling></demos-misc-disabling>

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

<demos-misc-drag-children></demos-misc-drag-children>

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

## Autoplay features

<demos-misc-autoplay></demos-misc-autoplay>

```vue
<ssr-carousel
  :slides-per-page='1'
  :autoplay-delay='5'>
  <slide :index='1'></slide>
  <slide :index='2'></slide>
  <slide :index='3'></slide>
  <slide :index='4'></slide>
  <slide :index='5'></slide>
  <slide :index='6'></slide>
</ssr-carousel>
```
