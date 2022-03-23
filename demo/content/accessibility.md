---
title: 'Accesibility'
---

## Interactive Slides

When tabbing through the carousel, the focus moves from slide 1 to slide 2, then to the arrows, and finally to the dots.  It never reaches slide 3 unless the user interacts with one of the navigation UI elements.

<demos-accessibility-interactive-slides></demos-accessibility-interactive-slides>

```vue
<ssr-carousel :slides-per-page='2' show-dots show-arrows loop peek='80'>
  <slide :index='1' to='#1'></slide>
  <slide :index='2' to='#2'></slide>
  <slide :index='3' to='#3'></slide>
</ssr-carousel>
```
