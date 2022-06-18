const { defineConfig } = require("cypress");

module.exports = defineConfig({
	e2e: {

		// Assume local testing
		baseUrl: 'http://localhost:3000',

		// Output mocha files for GitLab CI/CD as well as to console
		// reporter: 'cypress-multi-reporters',
		// reporterOptions: { configFile: 'cypress/reporter-config.json' },

		// Support coffeescript
		specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx,coffee}',

		// The videos haven't been that useful and take time and space
		video: false,

	},
});
