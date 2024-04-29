<template>
  <ssr-carousel data-cy="variable-width" :slides-per-page="null" show-arrows show-dots>
    <slide :index="1" :style="{ width: '65%', height: '30vw' }"></slide>
    <slide :index="2" :style="{ width: '50%', height: '30vw' }"></slide>
    <slide :index="3" :style="{ width: '30%', height: '30vw' }"></slide>
    <slide :index="4" :style="{ width: '65%', height: '30vw' }"></slide>
    <slide :index="5" :style="{ width: '30%', height: '30vw' }"></slide>
    <slide :index="6" :style="{ width: '50%', height: '30vw' }"></slide>
    <slide :index="7" :style="{ width: '50%', height: '30vw' }"></slide>
    <slide :index="8" :style="{ width: '65%', height: '30vw' }"></slide>
    <slide :index="9" :style="{ width: '30%', height: '30vw' }"></slide>
  </ssr-carousel>
</template>
