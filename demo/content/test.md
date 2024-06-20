---
title: 'Test'
---

## Tab capture

When tabbing through the carousel, the focus moves from slide 1 to slide 2, then to the arrows, and finally to the dots.  It never reaches slide 3 unless the user interacts with one of the navigation UI elements.

<demos-test-null-page></demos-test-null-page>

```vue
<ssr-carousel :slides-per-page="null" show-dots>
  <slide :index="1" to="#1"></slide>
  <slide :index="2" to="#2"></slide>
  <slide :index="3" to="#3"></slide>
</ssr-carousel>
```
