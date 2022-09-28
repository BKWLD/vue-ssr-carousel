<template>

<ssr-carousel
	data-cy='variable-width'
	:slides-per-page='null'>
  <slide :index='1' :style='{ width: "65%", height: "30vw"}'></slide>
  <slide :index='2' :style='{ width: "50%", height: "30vw"}'></slide>
  <slide :index='3' :style='{ width: "30%", height: "30vw"}'></slide>
</ssr-carousel>

</template>
