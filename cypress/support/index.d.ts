declare namespace Cypress {
  interface Chainable<Subject> {
    /**
     * Custom command to enter text into an input field
     * @example cy.enterText('#name', 'John Doe')
     */
    confirmMessage(element: string, message: string): Chainable<Element>;
    alertMessage(element: string, message: string): Chainable;
    switchToframe(xpath: string): Chainable;
  }
}
