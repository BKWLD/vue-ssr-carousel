---
title: 'Peeking'
---


## Slides are cloned as needed

Note how there is only one more slide than the amount we're showing per page. The last slide gets cloned so it peeks in on both the left and right sides.  This example also uses the `peek` shorthand that sets both `peek-left` and `peek-right` to the same value.

<ssr-carousel loop :slides-per-page='3' paginate-by-slide :peek='40' show-arrows show-dots>
  <slide :index='1' tint='red'></slide>
  <slide :index='2' tint='orange'></slide>
  <slide :index='3' tint='yellow'></slide>
  <slide :index='4' tint='green'></slide>
</ssr-carousel>

```vue
<ssr-carousel loop :slides-per-page='3' :peek='40' show-arrows>
  <slide :index='1'></slide>
  <slide :index='2'></slide>
  <slide :index='3'></slide>
  <slide :index='4'></slide>
</ssr-carousel>
```
