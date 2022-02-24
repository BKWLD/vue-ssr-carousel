---
title: 'Peeking'
---

## Basic peeking

This is an example of implementing peeking on the right side only, which is useful for teasing the presence of other cards.

<peeking-demos-basic></peeking-demos-basic>

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

<peeking-demos-loop></peeking-demos-loop>

```vue
<ssr-carousel loop peek-left='40' peek-right='40'>
  <slide :index='1'></slide>
  <slide :index='2'></slide>
  <slide :index='3'></slide>
</ssr-carousel>
```

## Slides are cloned as needed

Note how there is only one more slide than the amount we're showing per page. The last slide gets cloned so it peeks in on both the left and right sides.  This example also uses the `peek` shorthand that sets both `peek-left` and `peek-right` to the same value.

<peeking-demos-cloning></peeking-demos-cloning>

```vue
<ssr-carousel loop :slides-per-page='3' :peek='40' show-arrows>
  <slide :index='1'></slide>
  <slide :index='2'></slide>
  <slide :index='3'></slide>
  <slide :index='4'></slide>
</ssr-carousel>
```

## Peeking values are responsive and support CSS units

This example also uses the `feather` prop with a boolean value.

<peeking-demos-responsive></peeking-demos-responsive>

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

<peeking-demos-gutters></peeking-demos-gutters>

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
