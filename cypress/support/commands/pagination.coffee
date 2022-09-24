
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

# Confirm that track is at the end position by inspecting the CSS
Cypress.Commands.add 'trackAtEnd', { prevSubject: true }, (subject) ->

	# Get the carousel width
	cy.wrap subject
	.its '0.offsetWidth'
	.then (carouselWidth) ->

		# Get the track width
		cy.wrap subject
		.get '.ssr-carousel-track'
		.its '0.scrollWidth'
		.then (trackWidth) ->

			# Calculate what we expect the transform to be
			expectedTranslateX = Math.round carouselWidth - trackWidth + 1

			# Asset that the transform value should match math related to those two
			cy.wrap subject
			.get '.ssr-carousel-track'
			.should 'have.attr', 'style'
			.should 'include', "translateX(#{expectedTranslateX}px)"
