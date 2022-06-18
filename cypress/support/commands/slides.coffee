
# Check that a slide is visible
Cypress.Commands.add 'slideVisible', (num) ->
	cy.get '.ssr-carousel-slide'
		.contains "Slide #{num}"
		.should 'be.visible'

# Check that a slide is hidden
Cypress.Commands.add 'slideHidden', (num) ->
	cy.get '.ssr-carousel-slide'
		.contains "Slide #{num}"
		.should 'not.be.visible'
