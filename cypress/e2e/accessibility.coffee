context 'accessibility', ->

	beforeEach -> cy.visit '/accessibility'

	# Simply capture a snapshot
	it 'renders', -> cy.percySnapshot 'Accessibility demo'
