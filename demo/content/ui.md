---
title: 'UI Options'
---

## Built-in arrow nav

<ssr-carousel show-arrows>
  <slide :index='1'></slide>
  <slide :index='2'></slide>
  <slide :index='3'></slide>
</ssr-carousel>

```vue
<ssr-carousel show-arrows>
  <slide :index='1'></slide>
  <slide :index='2'></slide>
  <slide :index='3'></slide>
</ssr-carousel>
```

## Replace the icons through slots

<ssr-carousel show-arrows>
  <slide :index='1'></slide>
  <slide :index='2'></slide>
  <slide :index='3'></slide>

  <template v-slot:back-arrow>
    Back
  </template>

  <template v-slot:next-arrow>
    Next
  </template>
</ssr-carousel>

```vue
<ssr-carousel show-arrows>
  <slide :index='1'></slide>
  <slide :index='2'></slide>
  <slide :index='3'></slide>

  <template v-slot:back-arrow>
    Back
  </template>
  <template v-slot:next-arrow>
    Next
  </template>
</ssr-carousel>
```

## Built-in dot pagination nav

<ssr-carousel show-dots>
  <slide :index='1'></slide>
  <slide :index='2'></slide>
  <slide :index='3'></slide>
</ssr-carousel>

```vue
<ssr-carousel show-dots>
  <slide :index='1'></slide>
  <slide :index='2'></slide>
  <slide :index='3'></slide>
</ssr-carousel>
```

## Per-slide pagination

<ssr-carousel
  show-arrows
  show-dots
  paginate-by-slide
  :slides-per-page='2'>
  <slide :index='1'></slide>
  <slide :index='2'></slide>
  <slide :index='3'></slide>
  <slide :index='4'></slide>
  <slide :index='5'></slide>
  <slide :index='6'></slide>
</ssr-carousel>

```vue
<ssr-carousel
  show-arrows
  show-dots
  paginate-by-slide
  :slides-per-page='2'
  :gutter='20'>
  <slide :index='1'></slide>
  <slide :index='2'></slide>
  <slide :index='3'></slide>
  <slide :index='4'></slide>
  <slide :index='5'></slide>
  <slide :index='6'></slide>
</ssr-carousel>
```
