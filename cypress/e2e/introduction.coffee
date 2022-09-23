describe 'introduction', ->

	beforeEach -> cy.visit '/'

	it 'can be dragged left until last slide reached', ->

		# Capture a snapshot of the page while we're here
		cy.percySnapshot 'Introduction demo'

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

	it "can't be dragged right", ->

		# Drag right attempt is rejected
		cy.dragRight()
			.slideVisible 1
			.slideHidden 2
			.slideHidden 3

	it 'can be dragged left and then right', ->

		cy.dragLeft()
			.slideHidden 1
			.slideVisible 2
			.slideHidden 3

		cy.dragRight()
			.slideVisible 1
			.slideHidden 2
			.slideHidden 3
