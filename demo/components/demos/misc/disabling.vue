<template>

<ssr-carousel
  show-arrows
  show-dots
  :slides-per-page='3'
  :responsive='[
    {
      maxWidth: 767,
      slidesPerPage: 1
    }
  ]'>
  <slide :index='1'></slide>
  <slide :index='2'></slide>
</ssr-carousel>

</template>
