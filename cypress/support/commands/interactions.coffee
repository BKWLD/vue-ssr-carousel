
Cypress.Commands.add 'dragLeft', ->
	cy.get '.ssr-carousel-mask'
		.trigger 'mousedown', 'center'
		.trigger 'mousemove', 'left'
		.trigger 'mouseup'
		.wait 1000

Cypress.Commands.add 'dragRight', ->
	cy.get '.ssr-carousel-mask'
		.trigger 'mousedown', 'center'
		.trigger 'mousemove', 'right'
		.trigger 'mouseup'
		.wait 1000
