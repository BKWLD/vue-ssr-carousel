<!-- Report events from the slotted component -->

<template lang='pug'>

.events-demo

	//- The carousel
	ssr-carousel(
		show-arrows
		show-dots
		@change='logEvent("change", $event )'
		@press='logEvent("press", $event )'
		@release='logEvent("release", $event )'
		@drag:start='logEvent("drag:start", $event )'
		@drag:input='logEvent("drag:input", $event )'
		@drag:end='logEvent("drag:end", $event )'
		@tween:start='logEvent("tween:start", $event )'
		@tween:end='logEvent("tween:end", $event )')
		slide(v-for='i in 3' :index='i' :key='i')

	//- Events readout
	pre.events(v-if='events.length'): code.event(v-for='event in events')
		span.name <strong>Event:</strong> "{{ event.name }}"
		span.payload(v-if='event.payload')
			| <strong>Payload:</strong> {{ JSON.stringify(event.payload) }}


</template>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<script lang='coffee'>
export default

	data: -> events: []

	# Push events onto the stack
	methods: logEvent: (name, payload) -> @events.unshift { name, payload }

</script>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<style lang='stylus' scoped>

.events
	padding 1em

.event
	display block
	:deep(strong)
		opacity 0.5

.name
	margin-right 0.5em

</style>
