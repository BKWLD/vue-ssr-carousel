<template>

<div class="clear-page-gutters">
  <ssr-carousel
    :slides-per-page='2'
    paginate-by-slide
    gutter='20'
    peek-left='var(--fluid-gutter)'
    peek-right='20%'
    overflow-visible
    :responsive='[
      {
        maxWidth: 768,
        slidesPerPage: 1,
        gutter: 10,
      }
    ]'>
    <slide :index='1'></slide>
    <slide :index='2'></slide>
    <slide :index='3'></slide>
    <slide :index='4'></slide>
    <slide :index='5'></slide>
  </ssr-carousel>
</div>

</template>
