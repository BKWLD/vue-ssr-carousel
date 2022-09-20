describe 'events', ->

	beforeEach -> cy.visit '/events'

	it 'can be manipulated via v-model', ->

		cy.get '[data-cy=v-model]'
		.within ->

			# Should start on page 2
			cy.get('.now').should 'contain', 'Current Page: 2'
				.slideVisible 2
				.slideHidden 1

			# Clicking the back button (the first one), should go back to page 1
			cy.contains('Back').click()
				.slideVisible 1
				.slideHidden 2
