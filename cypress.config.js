const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: '2eb3sy',
  env: {
    RETRIES: 2,
    allureResultsPath: 'allure-results',
    allure: true,
  },
  viewportWidth: 1920,
  viewportHeight: 1080,
  chromeWebSecurity: false,
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    excludeSpecPattern: '*.js',
    specPattern: 'cypress/e2e/**/*.{feature,features}',
    baseUrl: 'https://herb-uat.herokuapp.com',
  },
})
