<template>

<ssr-carousel
  :slides-per-page='2'
  paginate-by-slide
  loop
  peek='10%'
  feather
  :responsive='[
    {
      maxWidth: 767,
      gutter: 10,
      peek: 20,
    }
  ]'>
  <slide :index='1'></slide>
  <slide :index='2'></slide>
  <slide :index='3'></slide>
</ssr-carousel>

</template>
