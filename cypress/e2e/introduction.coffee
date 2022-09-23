describe 'introduction', ->

	beforeEach -> cy.visit '/'

	it 'can be dragged left until last slide reached', ->
		cy.viewport 1280, 660
			.percySnapshot 'Pagination: initial slide'

		# Drag left to advance
		cy.dragLeft()
			.slideHidden 1
			.slideVisible 2
			.slideHidden 3

		# Drag left again to advance to final slide
		cy.dragLeft()
			.slideHidden 1
			.slideHidden 2
			.slideVisible 3

		# Now on final slide, drag again but get rejected
		cy.dragLeft()
			.slideHidden 1
			.slideHidden 2
			.slideVisible 3

		# Wait for animation to finish and then capture
		cy.get '.ssr-carousel-track'
			.should 'have.attr', 'style'
			.should 'include', 'translateX(-2453px)'
			.percySnapshot 'Pagination: still on final slide'

	it "can't be dragged right", ->

		# Drag right attempt is rejected
		cy.dragRight()
			.slideVisible 1
			.slideHidden 2
			.slideHidden 3
			.percySnapshot 'Pagination: drag right denied'

	it 'can be dragged left and then right', ->

		cy.dragLeft()
			.slideHidden 1
			.slideVisible 2
			.slideHidden 3

		cy.dragRight()
			.slideVisible 1
			.slideHidden 2
			.slideHidden 3
