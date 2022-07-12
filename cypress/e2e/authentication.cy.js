import {Homepage} from "../fixtures/elementSelectors";

describe("Authentication",function(){
    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })
})

it("Launch phptravels Website",()=>{
    cy.visit ("/");
    cy.url().should('include','/login');
    cy.get(Homepage.headerMenu).contains('Home').should('be.visible');
    cy.get(Homepage.topbarHeader).contains('info@travelagency.com').should('be.visible');
});

it("Login with empty credentials",()=>{
    cy.get(Homepage.loginBtn).click({force: true});
    cy.url().should('not.include','/account/dashboard');
});

it("Login with invalid Email",()=>{
    cy.get(Homepage.emailField).click({force: true}).type(Cypress.env('invalidEmail'));
    cy.get(Homepage.passwordField).click({force: true}).type(Cypress.env('password'));
    cy.get(Homepage.loginBtn).click({force: true});
    cy.get(Homepage.errorMessage).contains('Wrong credentials. try again!').should('be.visible');
    cy.url().should('not.include','/account/dashboard');
});

it("Login with invalid Password",()=>{
    cy.get(Homepage.emailField).click({force: true}).type(Cypress.env('email'));
    cy.get(Homepage.passwordField).click({force: true}).type(Cypress.env('invalidPassword'));
    cy.get(Homepage.loginBtn).click({force: true});
    cy.get(Homepage.errorMessage).contains('Wrong credentials. try again!').should('be.visible');
    cy.url().should('not.include','/account/dashboard');
});

it("Login with valid credentials",()=>{
    cy.get(Homepage.emailField).click({force: true}).type(Cypress.env('email'));
    cy.get(Homepage.passwordField).click({force: true}).type(Cypress.env('password'));
    cy.get(Homepage.loginBtn).click({force: true});
    cy.url().should('include','/account/dashboard');
    cy.get(Homepage.welcomeMessage).contains('Welcome Back').should('be.visible');
    cy.get(Homepage.walletBalance).contains('Wallet Balance').should('be.visible');
});
})