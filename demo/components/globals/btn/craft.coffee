###
Render a btn instance given a Craft button object
###
import Btn from './btn'
export default
	name: 'CraftBtn'
	functional: true

	props: button: Object

	render: (create, { data, props: { button } }) ->
		create Btn, {
			...data
			props: button
		}, button.label
