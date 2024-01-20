###
Code related to supporting RTL layout
###
export default

	# Add RTL prop
	props: rtl: Boolean

	# As an easy way to support rtl, update the index to the final value
	# when RTL is enabled. This is change is combined with reversing the order
	# of the slides in `ssr-carousel-track`
	created: -> @index = @pages - @value - 1 if @rtl
