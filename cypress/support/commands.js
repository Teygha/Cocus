// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })

import { Homepage} from "../fixtures/elementSelectors";
Cypress.Commands.add('login', () => {  
    cy.visit("/"),
    cy.get(Homepage.emailField).click({force: true}).type(Cypress.env('email'));
    cy.get(Homepage.passwordField).click({force: true}).type(Cypress.env('password'));
    cy.get(Homepage.loginBtn).click({force: true});
})
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

// cypress/support/command.js

// const addExtensionCommands = require('cypress-browser-extension-plugin/commands');
// addExtensionCommands(Cypress);

import 'cypress-file-upload';

const KEYS_IGNORED = [
    'access-token'
  ]
  
  Cypress.LocalStorage.clear = (keys) => {
    // Specific clear
    if (keys !== undefined && Array.isArray(keys) && keys.length > 0) {
      keys.forEach(key => window.localStorage.removeItem(key))
    } else {
      // Full clear
      if (window.localStorage.length > 0) {
        Object.keys(window.localStorage)
          .filter(key => !KEYS_IGNORED.includes(key))
          .forEach(key => window.localStorage.removeItem(key))
      }
    }
  }
