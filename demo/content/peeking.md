---
title: 'Peeking'
---

## Basic peeking

This is an example of implementing peeking on the right side only, which is useful for teasing the presence of other cards.

<demos-peeking-basic></demos-peeking-basic>

```vue
<ssr-carousel :slides-per-page='2' :peek-right='40'>
  <slide :index='1'></slide>
  <slide :index='2'></slide>
  <slide :index='3'></slide>
  <slide :index='4'></slide>
  <slide :index='5'></slide>
</ssr-carousel>
```

## Peeking with loop

You should add `loop` when using a left peek so that space is filled on the first page.

<demos-peeking-loop></demos-peeking-loop>

```vue
<ssr-carousel loop peek-left='40' peek-right='40'>
  <slide :index='1'></slide>
  <slide :index='2'></slide>
  <slide :index='3'></slide>
</ssr-carousel>
```

## Peeking slides may be cloned

Note how there is only one more slide than the amount we're showing per page. The last slide gets cloned so it peeks in on both the left and right sides.  This example also uses the `peek` shorthand that sets both `peek-left` and `peek-right` to the same value. This works with stateful components like [vue-visual](https://github.com/BKWLD/vue-visual).

<demos-peeking-cloning></demos-peeking-cloning>
<demos-peeking-visual></demos-peeking-visual>

```vue
<ssr-carousel loop :slides-per-page='3' :peek='40' show-arrows>
  <slide :index='1' tint='red'></slide>
  <slide :index='2' tint='orange'></slide>
  <slide :index='3' tint='yellow'></slide>
  <slide :index='4' tint='green'></slide>
</ssr-carousel>

<ssr-carousel loop :slides-per-page='2' :peek='80' paginate-by-slide show-arrows>
  <visual
    image='https://via.placeholder.com/1920x1080/91169C/FFFFFF?text=Slide+1'
    lazyload
    :aspect='16/9'>
  </visual>
  <visual
    image='https://via.placeholder.com/1920x1080/681596/FFFFFF?text=Slide+2'
    lazyload
    :aspect='16/9'>
  </visual>
  <visual
    image='https://via.placeholder.com/1920x1080/3E1880/FFFFFF?text=Slide+3'
    lazyload
    :aspect='16/9'>
  </visual>
</ssr-carousel>
```

## Peeking values are responsive and support CSS units

This example also uses the `feather` prop with a boolean value.

<demos-peeking-responsive></demos-peeking-responsive>

```vue
<ssr-carousel
  :slides-per-page='2'
  paginate-by-slide
  loop
  peek='10%'
  feather
  :responsive='[
    {
      maxWidth: 767,
      gutter: 10,
      peek: 20,
    }
  ]'>
  <slide :index='1'></slide>
  <slide :index='2'></slide>
  <slide :index='3'></slide>
</ssr-carousel>
```

## Sync with gutter setting

The `peek-gutter` prop uses your gutter value for the prop.  This is useful setting when your `vue-ssr-carousel` instance is flush with the edges of your browser and you use your site gutter value; the slides will transition out the edge of the page.  Then, use the `feather` with `responsive` to automatically add a light feathering mask when the viewport is wider than the carousel width.

<demos-peeking-gutters></demos-peeking-gutters>

```vue
<ssr-carousel
  :slides-per-page='3'
  paginate-by-slide
  loop
  peek-gutter
  gutter='var(--fluid-gutter)'
  :responsive='[
    {
      minWidth: 1440,
      feather: "calc(var(--fluid-gutter) * 0.5)",
    },
    {
      maxWidth: 768,
      slidesPerPage: 2,
    },
    {
      maxWidth: 500,
      slidesPerPage: 1,
    },
  ]'>
  <slide :index='1'></slide>
  <slide :index='2'></slide>
  <slide :index='3'></slide>
  <slide :index='4'></slide>
  <slide :index='5'></slide>
</ssr-carousel>
<style lang="stylus">
body
  fluid --fluid-gutter, 40, 20
</style>
```

This also works well without looping. Note how the peeking card switches to the left edge on the final page but the gutter on the right edge is perseved.

<demos-peeking-loopless-gutter></demos-peeking-loopless-gutter>

```vue
<ssr-carousel
  :slides-per-page='3'
  paginate-by-slide
  peek-left='var(--fluid-gutter)'
  peek-right='calc(var(--fluid-gutter) + 30px)'
  gutter='var(--fluid-gutter)'
  :responsive='[
    {
      minWidth: 1440,
      feather: "calc(var(--fluid-gutter) * 0.5)",
    },
    {
      maxWidth: 768,
      slidesPerPage: 2,
    },
    {
      maxWidth: 500,
      slidesPerPage: 1,
    },
  ]'>
  <slide :index='1'></slide>
  <slide :index='2'></slide>
  <slide :index='3'></slide>
  <slide :index='4'></slide>
  <slide :index='5'></slide>
</ssr-carousel>
```

## Supply your own overflow:hidden

Add the `overflow-visible` prop to supply your own `overflow: hidden`, for cases where you want to prevent the width of the carousel from expanding but do want the carousel to extend to the edges of the page.  It makes the most sense with a big `peek-right` that hints at other slides.

<demos-peeking-overflow-visible></demos-peeking-overflow-visible>

```vue
<div style="overflow: hidden">
  <ssr-carousel
    :slides-per-page='2'
    paginate-by-slide
    gutter='20'
    peek-left='var(--fluid-gutter)'
    peek-right='20%'
    overflow-visible
    :responsive='[
      {
        maxWidth: 768,
        slidesPerPage: 1,
        gutter: 10,
      }
    ]'>
    <slide :index='1'></slide>
    <slide :index='2'></slide>
    <slide :index='3'></slide>
    <slide :index='4'></slide>
    <slide :index='5'></slide>
  </ssr-carousel>
</div>
```
