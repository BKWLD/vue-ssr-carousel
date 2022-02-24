<template>

<ssr-carousel loop :slides-per-page='2' :peek='80' paginate-by-slide  show-arrows>
	<visual
		image='https://via.placeholder.com/1920x1080/BA3298/FFFFFF?text=Slide+1'
		lazyload
		:aspect='16/9'>
	</visual>
	<visual
		image='https://via.placeholder.com/1920x1080/5E339E/FFFFFF?text=Slide+2'
		lazyload
		:aspect='16/9'>
	</visual>
	<visual
		image='https://via.placeholder.com/1920x1080/315AAD/FFFFFF?text=Slide+3'
		lazyload
		:aspect='16/9'>
	</visual>
</ssr-carousel>

</template>
