context 'misc', ->

	beforeEach -> cy.visit '/misc'

	it 'respects responsive gutters when carousel would be disabled at other breakpoint', ->

		cy.get '[data-cy=disabling]'
		.within ->

			cy.viewport 1024, 660
				.get '.ssr-carousel-slide'
				.first()
				.should 'have.css', 'margin-right', '20px'

			cy.viewport 767, 660
				.get '.ssr-carousel-slide'
				.first()
				.should 'have.css', 'margin-right', '10px'
