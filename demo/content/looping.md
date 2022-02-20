---
title: 'Looping / Inifinte Scroll'
---

## Basic looping

<ssr-carousel :slides-per-page='1' :gutter='40' loop show-dots>
  <slide :index='1'></slide>
  <slide :index='2'></slide>
  <slide :index='3'></slide>
</ssr-carousel>

```vue
<ssr-carousel :slides-per-page='1' :gutter='40' loop show-dots>
  <slide :index='1'></slide>
  <slide :index='2'></slide>
  <slide :index='3'></slide>
</ssr-carousel>
```

## Cloned slides can contain components

<ssr-carousel :slides-per-page='1' :gutter='40' loop show-dots>
  <slide>
    <visual
      image='https://via.placeholder.com/1920x1080?text=Slide+1'
      :aspect='16/9'>
    </visual>
  </slide>
  <slide>
    <visual
      image='https://via.placeholder.com/1920x1080?text=Slide+2'
      :aspect='16/9'>
    </visual>
  </slide>
  <slide>
    <visual
      image='https://via.placeholder.com/1920x1080?text=Slide+3'
      :aspect='16/9'>
    </visual>
  </slide>
</ssr-carousel>

```vue
<ssr-carousel :slides-per-page='1' :gutter='40' loop show-dots>
  <slide>
    <visual
      image='https://via.placeholder.com/1920x1080?text=Slide+1'
      :aspect='16/9'>
    </visual>
  </slide>
  <slide>
    <visual
      image='https://via.placeholder.com/1920x1080?text=Slide+2'
      :aspect='16/9'>
    </visual>
  </slide>
  <slide>
    <visual
      image='https://via.placeholder.com/1920x1080?text=Slide+3'
      :aspect='16/9'>
    </visual>
  </slide>
</ssr-carousel>
```
