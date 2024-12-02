const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  env: {
    baseUrl: "https://magento.softwaretestingboard.com/",
  },
  defaultCommandTimeout: 8000,
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: true,
  },

  e2e: {
    specPattern: "**/e2e/BDD/**/*.feature",
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
      require('cypress-mochawesome-reporter/plugin')(on);

    },
  },
}); 
