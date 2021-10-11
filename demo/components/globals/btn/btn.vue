<!-- Standard pill button -->

<script lang='coffee'>
export default

	props:

		# URL to link to
		to: String

		# Size of the button
		size:
			type: String
			validator: (val) -> val in ['small']

		# If a <button>, what type is it
		type:
			type: String
			default: 'button'
			validator: (val) -> val in ['button', 'submit', 'reset']

		# States
		loading: Boolean
		disabled: Boolean

	computed:

		# Root classes
		classes: -> [
			"size-#{@size}" if @size
			loading: @loading
		]

		# States that should supress clicks
		nonInteractive: -> @disabled or @loading

	methods:

		# Prevent clicking if non-interactive
		onClick: (e) ->
			if @nonInteractive
			then e.preventDefault()
			else @$emit 'click'

	# Conditionally change the root button type
	render: (create) ->

		# Make the shared data object
		data =
			class: ['btn', ...@classes]
			domProps: disabled: @nonInteractive
			on: click: @onClick

		# The contents of the button
		children = [
			create 'span', class: 'shape'
			create 'span', class: 'slot', @$nonEmpty [
				@$slots.default
				if @loading then create 'span', class: 'icon-spinner'
			]
		]

		# Render a smart-link
		if @to
			create 'smart-link', {
				...data
				attrs: {
					...data.attrs
					role: 'button'
				}
				props: { @to }
			}, children

		# Render an html button
		else
			create 'button', {
				...data
				domProps: {
					...data.domProps
					@type
				}
			}, children

</script>

<!-- ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– -->

<style lang='stylus' scoped>

.btn

	// Set height
	position relative
	+tablet-up()
		height btn-desktop-h
	+tablet-down()
		height btn-mobile-h
		&.size-small
			height btn-small-h

	// Center contents
	display inline-flex
	align-items center
	justify-content center

	// Clear possibly inheritted underline
	text-decoration none

	// Disable cursor when disabled
	&[disabled]
		cursor default

	// Add hover/active effects
	&:not([disabled])
		+hover(true)
			.shape
				background primary-color-dark
				transition-duration .2s
		+active()
			.shape
				transform scaleX(0.925)

		// Add custom focus state
		.js-focus-visible &.focus-visible:focus
			outline none
			.shape
				box-shadow inset 0 0 0 2px lighten(primary-color, 10%)
				transition-duration .1s

	// Prevent content from spilling out
	overflow hidden

	// Typography
	color white
	fluid font-size, body-font-size, body-font-size-min

// Make backgound state
.shape
	expand()
	background-color primary-color
	transition background .4s, transform .1s, box-shadow .2s
	+tablet-up()
		border-radius btn-desktop-h * 0.5
	+tablet-down()
		border-radius btn-mobile-h * 0.5
		&.size-small
			height btn-small-h * 0.5

	// Disabled state
	[disabled] &
		background-color grey-bkgd

.slot

	// Align slotted stuff
	flex-center()

	// Overlap the shape
	position relative

	// Push edges away
	fluid padding-h, btn-pad-h, btn-pad-h-min
	.size-small &
		fluid padding-h, btn-pad-h, btn-pad-h-small

.icon-spinner
	margin-left 7px
	font-size 0.8em
	animation spin 0.5s linear infinite

	// Transition effects
	&.v-enter-active, &.v-leave-active
		transition opacity 0.1s
	&.v-enter, &.v-leave-to
		opacity 0


</style>
