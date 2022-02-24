<template>

<ssr-carousel
  :slides-per-page='4'
  :responsive='[
    {
      maxWidth: 1280,
      slidesPerPage: 3,
    },
    {
      maxWidth: 1024,
      slidesPerPage: 2,
    },
    {
      maxWidth: 767,
      slidesPerPage: 1
    }
  ]'>
  <slide :index='1'></slide>
  <slide :index='2'></slide>
  <slide :index='3'></slide>
  <slide :index='4'></slide>
  <slide :index='5'></slide>
  <slide :index='6'></slide>
  <slide :index='7'></slide>
  <slide :index='8'></slide>
  <slide :index='9'></slide>
  <slide :index='10'></slide>
</ssr-carousel>

</template>
