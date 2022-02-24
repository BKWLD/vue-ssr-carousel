<template>

<div class="clear-page-gutters">
  <ssr-carousel
    :slides-per-page='3'
    paginate-by-slide
    loop
    peek-gutter
    gutter='var(--fluid-gutter)'
    :responsive='[
      {
        minWidth: 1440,
        feather: "calc(var(--fluid-gutter) * 0.5)",
      },
      {
        maxWidth: 768,
        slidesPerPage: 2,
      },
      {
        maxWidth: 500,
        slidesPerPage: 1,
      },
    ]'>
    <slide :index='1'></slide>
    <slide :index='2'></slide>
    <slide :index='3'></slide>
    <slide :index='4'></slide>
    <slide :index='5'></slide>
  </ssr-carousel>
</div>

</template>
