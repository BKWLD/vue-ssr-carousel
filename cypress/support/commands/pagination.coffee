
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

# Confirm the current page using the aria live region
Cypress.Commands.add 'page', (num) ->
	cy.get '[aria-live]'
	.should 'contain', "#{num} of "

# Confirm the total pages using the aria live region
Cypress.Commands.add 'pages', (num) ->
	cy.get '[aria-live]'
	.should 'contain', " of #{num}"
