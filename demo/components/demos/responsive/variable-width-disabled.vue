<template>

<ssr-carousel
	data-cy='variable-width-disabled'
	:slides-per-page='null'>
  <slide :index='1' :style='{ width: "40%", height: "20vw"}'></slide>
  <slide :index='2' :style='{ width: "calc(60% - 20px)", height: "20vw"}'></slide>
</ssr-carousel>

</template>
