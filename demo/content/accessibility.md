---
title: 'Accessibility'
---

## Tab capture

When tabbing through the carousel, the focus moves from slide 1 to slide 2, then to the arrows, and finally to the dots.  It never reaches slide 3 unless the user interacts with one of the navigation UI elements.

<demos-accessibility-tab-capture></demos-accessibility-tab-capture>

```vue
<ssr-carousel :slides-per-page='2' show-dots show-arrows>
  <slide :index='1' to='#1'></slide>
  <slide :index='2' to='#2'></slide>
  <slide :index='3' to='#3'></slide>
</ssr-carousel>
```

## Automatic loop disabling

The `loop` feature isn't friendly to keyboard navigation and is disabled once the user starts interacting with the carousel using the tab key.  Clicking on the carousel restores looping.

<demos-accessibility-loop-disabling></demos-accessibility-loop-disabling>

```vue
<ssr-carousel :slides-per-page='2' show-arrows show-dots loop peek='80'>
  <slide :index='1' to='#1'></slide>
  <slide :index='2' to='#2'></slide>
  <slide :index='3' to='#3'></slide>
</ssr-carousel>
```
