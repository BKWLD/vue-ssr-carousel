###
Code related to focus and hover state
###
export default

	# Some simple data about our component and window its mounted on
	data: ->
		hovered: false
		buttonFocused: false
		windowVisible: true

	computed:
		isFocused: -> @windowVisible and @hovered
		windowHidden: -> !@windowVisible

	methods:
		onEnter: -> @hovered = true
		onLeave: -> @hovered = false

		# Updates @windowVisible based on our document
		updateVisibility: -> @windowVisible = !document.hidden

	# Watch the visibility updates of our document
	mounted: ->
		document.addEventListener 'visibilitychange', @updateVisibility

	beforeUnmount: ->
		document.removeEventListener 'visibilitychange', @updateVisibility
