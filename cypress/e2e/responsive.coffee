context 'responsive', ->

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
				.percySnapshot 'Responsive 1281px', widths: [1281]

			cy.viewport 1280, 660
				.slideVisible 1
				.slideVisible 2
				.slideVisible 3
				.slideHidden 4
				.pages 4
				.percySnapshot 'Responsive 1280px', widths: [1280]

			cy.viewport 1024, 660
				.slideVisible 1
				.slideVisible 2
				.slideHidden 3
				.slideHidden 4
				.pages 5
				.percySnapshot 'Responsive 1024px', widths: [1024]

			cy.viewport 767, 660
				.slideVisible 1
				.slideHidden 2
				.slideHidden 3
				.slideHidden 4
				.pages 10
				.percySnapshot 'Responsive 767px', widths: [767]

	it 'responds to min-width', ->
		cy.get '[data-cy=min-width]'
		.within ->

			cy.viewport 1280, 660
				.slideVisible 1
				.slideVisible 2
				.slideVisible 3
				.pages 2

			cy.viewport 768, 660
				.slideVisible 1
				.slideVisible 2
				.slideHidden 3
				.pages 3
				.percySnapshot 'Responsive 768px', widths: [768]

			cy.viewport 767, 660
				.slideVisible 1
				.slideHidden 2
				.slideHidden 3
				.pages 6

	context 'variable width', ->

		it 'can be dragged', ->
			cy.get('[data-cy=variable-width]').within ->
				cy.dragLeft().slideVisible 3

		it "can't be dragged past last slide", ->
			cy.get('[data-cy=variable-width]').within ->
				cy.dragLeft().dragLeft()
				cy.root().trackAtEnd()

		it 'can be disabled', ->
			cy.get('[data-cy=variable-width-disabled]').within ->
				cy.get '.ssr-carousel-mask'
					.should 'have.class', 'disabled'
