# Set default testing theme id on every visit to shopify theme. This required
# "chromeWebSecurity" to be enabled in cypress.json.  Not really sure why.
Cypress.Commands.overwrite 'visit', (visit, path, options = {}) ->

	# Clean up old $nuxt references, like when doing secondary visit()s
	cy.window().then (window) -> delete window.$nuxt

	# Do a normal visit
	visit path, options

	# Wait for Nuxt to be ready
	# https://docs.cypress.io/api/commands/window.html#Start-tests-when-app-is-ready
	cy.window(timeout: 10000).should('have.property', '$nuxt')

	# Don't return promise
	return
