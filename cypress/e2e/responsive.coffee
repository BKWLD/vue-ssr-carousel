describe 'introduction', ->

	beforeEach -> cy.visit '/responsive'

	it 'responds to max-width', ->
		cy.get '[data-cy=max-width]'
		.within ->

			cy.viewport 1281, 660
				.slideVisible 1
				.slideVisible 2
				.slideVisible 3
				.slideVisible 4
				.pages 3
				.percySnapshot '3 pages'

			cy.viewport 1280, 660
				.slideVisible 1
				.slideVisible 2
				.slideVisible 3
				.slideHidden 4
				.pages 4
				.percySnapshot '4 pages'

			cy.viewport 1024, 660
				.slideVisible 1
				.slideVisible 2
				.slideHidden 3
				.slideHidden 4
				.pages 5
				.percySnapshot '5 pages'

			cy.viewport 767, 660
				.slideVisible 1
				.slideHidden 2
				.slideHidden 3
				.slideHidden 4
				.pages 10
				.percySnapshot '10 pages'

	it 'responds to min-width', ->
		cy.get '[data-cy=min-width]'
		.within ->

			cy.viewport 1280, 660
				.slideVisible 1
				.slideVisible 2
				.slideVisible 3
				.pages 2
				.percySnapshot '2 pages'

			cy.viewport 768, 660
				.slideVisible 1
				.slideVisible 2
				.slideHidden 3
				.pages 3
				.percySnapshot '3 pages'

			cy.viewport 767, 660
				.slideVisible 1
				.slideHidden 2
				.slideHidden 3
				.pages 6
				.percySnapshot '6 pages'
