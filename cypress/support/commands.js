import 'cypress-xpath';
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
Cypress.Commands.add('confirmMessage', (element, message) => {
  const confirm = cy.stub().as('confirmStub');
  cy.on('window:confirm', confirm);
  cy.get(element)
    .should('be.visible')
    .click()
    .then(() => {
      cy.get('@confirmStub').should('be.calledWith', message);
    });
});

Cypress.Commands.add('alertMessage', (element, message) => {
  const alert = cy.stub().as('alertMessage');
  cy.on('window:alert', alert);
  cy.get(element)
    .should('be.visible')
    .click()
    .then(() => {
      cy.get('@alertMessage').should('be.calledWith', message);
    });
});

Cypress.Commands.add('switchToframe', (xpath) => {
  return cy
    .xpath(xpath)
    .scrollIntoView()
    .its('0.contentDocument.body')
    .then(cy.wrap);
});

////iframe[@name='iframe-name']
