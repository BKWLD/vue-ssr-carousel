context 'peeking', ->

	beforeEach -> cy.visit '/peeking'

	# Simply capture a snapshot
	it 'renders', -> cy.percySnapshot 'Peeing demo'
