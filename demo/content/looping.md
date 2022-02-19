---
title: 'Looping / Inifinte Scroll'
---

## Basic looping

<ssr-carousel :slides-per-page='1' :gutter='40' looping show-dots>
  <slide :index='1'></slide>
  <slide :index='2'></slide>
  <slide :index='3'></slide>
</ssr-carousel>

```vue
<ssr-carousel :slides-per-page='1' :gutter='40' looping show-dots>
  <slide :index='1'></slide>
  <slide :index='2'></slide>
  <slide :index='3'></slide>
</ssr-carousel>
