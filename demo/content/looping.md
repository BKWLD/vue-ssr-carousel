---
title: 'Looping / Inifinte Scroll'
---

## Basic looping

<ssr-carousel :slides-per-page='1' :gutter='40' looping show-dots>
  <slide :index='1'>
    <visual image='https://via.placeholder.com/150' :aspect='16/9'></visual>
  </slide>
  <slide :index='2'>
   <visual image=https://via.placeholder.com/300' :aspect='16/9'></visual>
  </slide>
  <slide :index='3'>
    <visual image=https://via.placeholder.com/400' :aspect='16/9'></visual>
  </slide>
</ssr-carousel>

```vue
<ssr-carousel :slides-per-page='1' :gutter='40' looping show-dots>
  <slide :index='1'></slide>
  <slide :index='2'></slide>
  <slide :index='3'></slide>
</ssr-carousel>
```
