const { defineConfig } = require("cypress");

module.exports = defineConfig({
	e2e: {

		// Assume local testing
		baseUrl: 'http://localhost:3000',

		// Support coffeescript
		specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx,coffee}',

	},
});
