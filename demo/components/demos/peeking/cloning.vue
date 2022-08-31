<template>

<ssr-carousel loop :slides-per-page='3' :peek='40' show-arrows>
  <slide
    v-for="color, index in ['red', 'orange', 'yellow', 'green']"
    :key='color'
    :index='index + 1'
    :tint='color'>
  </slide>
</ssr-carousel>

</template>
