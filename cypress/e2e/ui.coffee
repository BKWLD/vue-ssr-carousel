context 'ui', ->

	beforeEach -> cy.visit '/ui'

	# Test arrows
	it 'navigates by stock arrows', ->
		cy.get('[data-cy=arrows]').within ->

			# Capture a snapshot of the page while we're here
			cy.percySnapshot 'UI demo'

			cy.get('.ssr-carousel-next-button').click()
				.slideHidden 1
				.slideVisible 2

			cy.get('.ssr-carousel-back-button').click()
				.slideHidden 2
				.slideVisible 1

	it 'navigates by dot', ->
		cy.get('[data-cy=dots]').within ->

			# Click on page 2 dot
			cy.get('.ssr-carousel-dot-button[aria-label="Go to Page 2"]').click()
				.slideHidden 1
				.slideVisible 2

	it 'can disable dragging', ->
		cy.get('[data-cy=no-drag]').within ->

			# Try to drag but have it not take effect
			cy.dragLeft()
				.slideVisible 1
				.slideHidden 2
				.slideHidden 3

			# But clicking next does still advance
			cy.get('.ssr-carousel-next-button').click()
				.slideHidden 1
				.slideVisible 2
