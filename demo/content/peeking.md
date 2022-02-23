---
title: 'Peeking'
---

## Basic peeking

This is an example of implementing peeking on the right side only, which is useful for teasing the presence of other cards.

<ssr-carousel :slides-per-page='2' peek-right='40'>
  <slide :index='1'></slide>
  <slide :index='2'></slide>
  <slide :index='3'></slide>
  <slide :index='4'></slide>
  <slide :index='5'></slide>
</ssr-carousel>

```vue
<ssr-carousel peek-right='40'>
  <slide :index='1'></slide>
  <slide :index='2'></slide>
  <slide :index='3'></slide>
  <slide :index='4'></slide>
  <slide :index='5'></slide>
</ssr-carousel>
```

## Peeking with loop

You should add `loop` when using a left peek so that space is filled on the first page.

<ssr-carousel loop peek-left='40' peek-right='40'>
  <slide :index='1'></slide>
  <slide :index='2'></slide>
  <slide :index='3'></slide>
</ssr-carousel>

```vue
<ssr-carousel loop peek-left='40' peek-right='40'>
  <slide :index='1'></slide>
  <slide :index='2'></slide>
  <slide :index='3'></slide>
</ssr-carousel>
```

## Slides are cloned as needed

Note how there is only one more slide than the amount we're showing per page. The last slide gets cloned so it peeks in on both the left and right sides.  This example also uses the `peek` shorthand that sets both `peek-left` and `peek-right` to the same value.

<ssr-carousel loop :slides-per-page='3' peek-left='40' peek-right='40' show-arrows show-dots>
  <slide :index='1' tint='red'></slide>
  <slide :index='2' tint='orange'></slide>
  <slide :index='3' tint='yellow'></slide>
  <slide :index='4' tint='green'></slide>
</ssr-carousel>

```vue
<ssr-carousel loop :slides-per-page='3' peek-left='40' peek-right='40' show-arrows>
  <slide :index='1'></slide>
  <slide :index='2'></slide>
  <slide :index='3'></slide>
  <slide :index='4'></slide>
</ssr-carousel>
```

## Peeking values are responsive and support CSS units

This example uses the `peek-gutters` sugar that automatically sets the peek values to the same value as the `gutter`.

<ssr-carousel
  :slides-per-page='2'
  paginate-by-slide
  loop
  peek-left='10%'
  peek-right='10%'
  :responsive='[
    {
      maxWidth: 767,
      gutter: 10,
      peekLeft: 20,
      peekRight: 20,
    }
  ]'>
  <slide :index='1'></slide>
  <slide :index='2'></slide>
  <slide :index='3'></slide>
</ssr-carousel>

```vue
<ssr-carousel
  :slides-per-page='2'
  paginate-by-slide
  loop
  peek-left='10%'
  peek-right='10%'
  :responsive='[
    {
      maxWidth: 767,
      gutter: 10,
      peekLeft: 20,
      peekRight: 20,
    }
  ]'>
  <slide :index='1'></slide>
  <slide :index='2'></slide>
  <slide :index='3'></slide>
</ssr-carousel>
```
