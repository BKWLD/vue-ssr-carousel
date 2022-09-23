context 'gutters', ->

	beforeEach -> cy.visit '/gutters'

	# Simply capture a snapshot
	it 'renders', -> cy.percySnapshot 'Gutters demo'
