###
Code related to focus and hover state
###
export default

	# Some simple data about our component and window its mounted on
	data: ->
		hovered: false
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
		return unless @watchesHover
		document.addEventListener 'visibilitychange', @updateVisibility

	beforeDestroy: ->
		document.removeEventListener 'visibilitychange', @updateVisibility
