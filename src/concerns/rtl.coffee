###
Code related to supporting RTL layout
###
export default

	# Add RTL prop
	props: rtl: Boolean

	# As an easy way to support rtl, update the index to the final value
	# when RTL is enabled. This is change is combined with reversing the order
	# of the slides in `ssr-carousel-track`.  The downside of this appraoch is
	# that it's not SSR friendly; the x position of the track can't be calcualted
	# until the component mounts and it's internal width can be measured.
	created: -> @index = @pages - @value - 1 if @rtl
