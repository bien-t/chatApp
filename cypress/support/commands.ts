/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
declare namespace Cypress {
    interface Chainable {
      login(): Chainable<void>
    }
  }
Cypress.Commands.add('login', ()=>{
  cy.visit('http://localhost:3000/signin');
  cy.get('input[type="email"]').type('kkk@kkk.pl');
  cy.get('input[type="password"]').type('123');
  cy.get('form').find('button').contains('sign in', { matchCase: false }).click();
});
