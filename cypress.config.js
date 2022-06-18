const { defineConfig } = require("cypress");

module.exports = defineConfig({
	e2e: {

		// Assume local testing
		baseUrl: 'http://localhost:3000',

		// Support coffeescript
		specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx,coffee}',

		// Configuration for code coverage
		// https://docs.cypress.io/guides/tooling/code-coverage
		setupNodeEvents(on, config) {
			require('@cypress/code-coverage/task')(on, config)
			return config
		}

	},
});
