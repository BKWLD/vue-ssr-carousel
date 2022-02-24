<template>

<ssr-carousel
  :slides-per-page='3'
  :gutter='40'
  :responsive='[
    {
      maxWidth: 1024,
      slidesPerPage: 2,
      gutter: 20,
    }
  ]'>
  <slide :index='1'></slide>
  <slide :index='2'></slide>
  <slide :index='3'></slide>
  <slide :index='4'></slide>
  <slide :index='5'></slide>
</ssr-carousel>

</template>
