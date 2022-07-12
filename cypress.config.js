module.exports = {
  "chromeWebSecurity": false,
  "viewportHeight": 800,
  "viewportWidth": 1280,
  "fixturesFolder": "fixtures",
  "screenshotsFolder": "screenshots",
  "videosFolder": "videos",
  "downloadsFolder": "downloads",
  "reporter": "mochawesome",
  "reporterOptions": {
    "reportdir": "cypress/report/mochawesome-report",
    "overwrite": false,
    "html": true,
    "json": false,
    "timestamp": "mmddyyyy_HHMMss"
  },
  "env": {
    "email": "user@phptravels.com",
    "password": "demouser",
    "invalidEmail": "php@flight.com",
    "invalidPassword": "123456"
  },
  "e2e": {
    "baseUrl": "https://www.phptravels.net/login",
    "specPattern": "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    "supportFile": "cypress/support/index.js"
  }
//   "baseUrl": "https://www.phptravels.net/login",
   //"specPattern": "integration/**/*.cy.{js,jsx,ts,tsx}",
//   "supportFile": "cypress/support"
}
