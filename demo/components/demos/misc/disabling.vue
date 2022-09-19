<template>

<ssr-carousel
	data-cy='disabling'
  show-arrows
  show-dots
  :slides-per-page='3'
  :responsive='[
    {
      maxWidth: 767,
      gutter: 10,
      slidesPerPage: 1
    }
  ]'>
  <slide :index='1'></slide>
  <slide :index='2'></slide>
</ssr-carousel>

</template>
