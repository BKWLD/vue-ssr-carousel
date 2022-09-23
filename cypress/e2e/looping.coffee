context 'looping', ->

	beforeEach -> cy.visit '/looping'

	it 'navigates backwards from initial slide', ->
		cy.get('[data-cy=basic]').within ->

			# Capture a snapshot of the page while we're here
			cy.percySnapshot 'Looping demo'

			cy.dragRight()
				.slideVisible 3
				.slideHidden 1

