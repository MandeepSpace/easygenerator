import { PracticePage } from '../pageObject/practicePage';
import 'cypress-xpath';

describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });
  const practicePage = new PracticePage();

  it('Verify drop down element', async () => {
    await practicePage.setDropDownValue('option2');
    practicePage.getDropDownValue().should('have.value', 'option2');

    await practicePage.setDropDownValue('option3');
    practicePage.getDropDownValue().should('have.value', 'option3');
  });

  it('Verify new Tab window is getting called', () => {
    cy.window().then((win) => {
      cy.stub(win, 'open').as('windowOpenStub');
    });
    practicePage.clickOnOpenTab();
    cy.get('@windowOpenStub').should(
      'be.calledWith',
      'https://easygenerator.com',
      '_blank',
    );
  });

  it('Verify File upload feature', async () => {
    cy.window().then((win) => {
      cy.stub(win.URL, 'createObjectURL').returns('cypress/fixtures/test.png');
    });
    cy.get('input[type="file"]').attachFile('test.png');
  });

  it('should handle windows alert', () => {
    let defaulAlerttMesaage =
      'Hello , share this practice page and share your knowledge';
    practicePage.checkAlertMessage(defaulAlerttMesaage);
  });

  it('should handle window confirm', () => {
    let defaulConfirmtMesaage = 'Hello , Are you sure you want to confirm?';
    practicePage.checkConfirmMessage(defaulConfirmtMesaage);
  });

  it('Verfy when user enter name and click on alert button', () => {
    let alertName = 'TestName';
    let alerttMesaage = `Hello ${alertName}, share this practice page and share your knowledge`;
    practicePage.setAlertName(alertName);
    practicePage.checkAlertMessage(alerttMesaage);
  });

  it('Verfy when user enter name and click on confirm button', () => {
    let alertName = 'TestName';
    let alerttMesaage = `Hello ${alertName}, Are you sure you want to confirm?`;
    practicePage.setAlertName(alertName);
    practicePage.checkConfirmMessage(alerttMesaage);
  });

  it('Verify when user click on hide and show button', () => {
    practicePage.getDisplayTextBoxValue().scrollIntoView().should('be.visible');
    practicePage.clickOnHideTextBox();
    practicePage
      .getDisplayTextBoxValue()
      .scrollIntoView()
      .should('not.be.visible');
    practicePage.clickOnShowTextBox();
    practicePage.getDisplayTextBoxValue().scrollIntoView().should('be.visible');
  });

  it('Verify mouse over and click on Top', () => {
    cy.get('.hover-btn').trigger('mouseover');
    cy.get('.hover-content').find('a').contains('Top').click();
    cy.url().should('include', '/#top');
  });
  it('Verify mouse over and click on Reload', () => {
    cy.get('.hover-btn').trigger('mouseover');
    cy.get('.hover-content').find('a').contains('Reload').click();
    cy.url().should('include', 'localhost:3000');
  });

  it('Verify iframe data in the page', () => {
    const frame = practicePage.getiframe();
    frame
      .xpath('//input[@placeholder="Enter your business email"]')
      .should('be.visible');
  });
  it('should read the alert text file and display an alert with its contents', () => {
    cy.task('readFile', { filename: 'cypress/fixtures/alert-text.txt' }).then(
      (alertText) => {
        cy.visit('http://localhost:3000/'); // Adjust this to the path of your HTML page

        cy.window().then((win) => {
          win.alert(alertText);
        });
      },
    );
  });
});
