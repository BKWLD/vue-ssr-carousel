<template>

<ssr-carousel show-arrows>

	<template>
		<slide :index='1'></slide>
		<slide :index='2'></slide>
		<slide :index='3'></slide>
	</template>

  <template #back-arrow='{ disabled }'>
    Back {{ disabled ? "(Disabled)" : '' }}
  </template>

  <template #next-arrow='{ disabled }'>
    Next {{ disabled ? "(Disabled)" : '' }}
  </template>
</ssr-carousel>

</template>
