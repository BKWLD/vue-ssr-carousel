---
title: 'Looping / Inifinte Scroll'
---

## Basic looping

<ssr-carousel :slides-per-page='1' loop show-dots show-arrows>
  <slide :index='1'></slide>
  <slide :index='2'></slide>
  <slide :index='3'></slide>
</ssr-carousel>

```vue
<ssr-carousel :slides-per-page='1' loop show-dots show-arrows>
  <slide :index='1'></slide>
  <slide :index='2'></slide>
  <slide :index='3'></slide>
</ssr-carousel>
```

## Looping with multiple slides per page

<ssr-carousel :slides-per-page='2' loop show-dots show-arrows>
  <slide :index='1'></slide>
  <slide :index='2'></slide>
  <slide :index='3'></slide>
  <slide :index='4'></slide>
</ssr-carousel>

```vue
<ssr-carousel :slides-per-page='2' loop show-dots show-arrows>
  <slide :index='1'></slide>
  <slide :index='2'></slide>
  <slide :index='3'></slide>
  <slide :index='4'></slide>
</ssr-carousel>
```

## Cloned slides can contain components

<ssr-carousel :slides-per-page='1' loop>
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
<ssr-carousel :slides-per-page='1' loop>
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
