<template>

<ssr-carousel
  :slides-per-page='5'
	center
  :responsive='[
    {
      maxWidth: 1280,
      slidesPerPage: 3,
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
</ssr-carousel>

</template>
