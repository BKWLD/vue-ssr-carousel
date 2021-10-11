###
Provide common stuff to all blocks
###
export default

	props: index: Number

	# Send the block index down to blocks
	provide: -> blockIndex: @index

	# Passthrough the slot
	render: (create) -> @$slots.default
