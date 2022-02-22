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

## Peeking with multiple slides per page

Note how there is only one more slide than the amount we're showing per page. The last slide gets cloned so it peeks in on both the left and right sides.

<ssr-carousel loop :slides-per-page='2' peek-left='40' peek-right='40'>
  <slide :index='1'></slide>
  <slide :index='2'></slide>
  <slide :index='3'></slide>
</ssr-carousel>

```vue
<ssr-carousel loop :slides-per-page='2' peek-left='40' peek-right='40'>
  <slide :index='1'></slide>
  <slide :index='2'></slide>
  <slide :index='3'></slide>
</ssr-carousel>
```
