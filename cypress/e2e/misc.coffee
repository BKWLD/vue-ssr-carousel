context 'misc', ->

	beforeEach -> cy.visit '/misc'

	it 'respects responsive gutters when carousel would be disabled at other breakpoint', ->

		cy.get '[data-cy=disabling]'
		.within ->

			cy.viewport 1024, 660
				.get '.ssr-carousel-slide'
				.first()
				.should 'have.css', 'margin-right', '20px'
				.percySnapshot()

			cy.viewport 767, 660
				.get '.ssr-carousel-slide'
				.first()
				.should 'have.css', 'margin-right', '10px'

	it 'supports dynamically adding slides', ->

		cy.get '[data-cy=await-slides]'
		.within ->

			# Add 2 slides
			cy.get('button').click().click().percySnapshot()

			# Verify there are two slides that can be navigated to
			cy.pages 2
				.slideVisible 1
				.slideHidden 2
				.dragLeft()
				.slideVisible 2
				.slideHidden 1
