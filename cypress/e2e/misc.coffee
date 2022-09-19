context 'misc', ->

	beforeEach -> cy.visit '/misc'

	it 'respects responsive gutters when carousel would be disabled at other breakpoint', ->

		cy.get '[data-cy=disabling]'
		.within ($carousel) ->

			cy.viewport 768, 660
			expectSlideWidthToMatch
				slidesPerPage: 3
				gutterSize: 20

			cy.viewport 767, 660
			expectSlideWidthToMatch
				slidesPerPage: 2
				gutterSize: 10

expectSlideWidthToMatch = ({ slidesPerPage, gutterSize }) ->

	# Get the width of the carousel
	cy.root().invoke('width').then (carouselWidth) ->

		# Get the width of a slide
		cy.get('.ssr-carousel-slide').invoke('outerWidth').then (slideWidth) ->

			# Round and compare them
			cy.wrap Math.round (carouselWidth - gutterSize) / slidesPerPage
			.should 'equal', Math.round slideWidth
