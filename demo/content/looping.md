---
title: 'Looping'
---

## Basic looping

Looping is also known as `wrapAround` or `infinite` in other carousels.

<demos-looping-basic></demos-looping-basic>

```vue
<ssr-carousel loop show-dots show-arrows>
  <slide :index='1'></slide>
  <slide :index='2'></slide>
  <slide :index='3'></slide>
</ssr-carousel>
```

## Looping with multiple slides per page

Note how the incomplete 2nd page is handled.  The 3rd and 1st slide are shown simulataneously. On the next advance forward, the track advances a half width so that the *new* first page contains the 1st and 2nd slide.

<demos-looping-multiple></demos-looping-multiple>

```vue
<ssr-carousel :slides-per-page='2' loop show-dots show-arrows>
  <slide :index='1'></slide>
  <slide :index='2'></slide>
  <slide :index='3'></slide>
</ssr-carousel>
```

## Cloned slides can contain components

In this case, we're using [vue-visual](https://github.com/BKWLD/vue-visual) components to render image assets.  Note how lazy loading prevents the loading of the second image until you advance forward.

<demos-looping-visual></demos-looping-visual>

```vue
<ssr-carousel loop>
  <slide>
    <visual
      image='https://via.placeholder.com/1920x1080?text=Slide+1'
      lazyload
      :aspect='16/9'>
    </visual>
  </slide>
  <slide>
    <visual
      image='https://via.placeholder.com/1920x1080?text=Slide+2'
      lazyload
      :aspect='16/9'>
    </visual>
  </slide>
</ssr-carousel>
```
