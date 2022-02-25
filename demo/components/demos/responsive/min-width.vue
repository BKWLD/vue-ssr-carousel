<template>

<ssr-carousel
  :slides-per-page='1'
  :responsive='[
    {
      minWidth: 768,
      slidesPerPage: 2,
    },
    {
      minWidth: 1024,
      slidesPerPage: 3,
    }
  ]'>
  <slide :index='1'></slide>
  <slide :index='2'></slide>
  <slide :index='3'></slide>
  <slide :index='4'></slide>
  <slide :index='5'></slide>
  <slide :index='6'></slide>
</ssr-carousel>

</template>
