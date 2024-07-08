import 'cypress-file-upload';
export class PracticePage {
  private dropDown = '#dropdown-class-example';
  private uploadContainer = '.image-upload-wrapper';
  private uploadImage = 'input[name="img"]';
  private openTabButton = '#opentab';
  private invokeAlertInput = '#name';
  private alertButton = '#alertbtn';
  private confirmButton = '#confirmbtn';
  private hideTextBoxButton = '#hide-textbox';
  private showTextBoxButton = '#show-textbox';
  private displaytextBox = 'input[name="show-hide"]';
  private iframe = "//iframe[@name='iframe-name']";

  public setDropDownValue(option) {
    cy.get(this.dropDown).should('be.visible').select(option);
  }
  public getDropDownValue() {
    return cy.get(this.dropDown).should('be.visible');
  }

  public upLoadFile(filePath) {
    cy.get(this.uploadImage)
      .should('be.visible')
      .attachFile(filePath)
      .then(() => {});
  }
  public getImageInfo() {
    return cy.get('uploadContainer').find('img');
  }

  public clickOnOpenTab() {
    cy.get(this.openTabButton).should('be.visible').click();
  }

  public setAlertName(alertText) {
    cy.get(this.invokeAlertInput).should('be.visible').type(alertText);
  }
  public checkAlertMessage(message) {
    return cy.alertMessage(this.alertButton, message);
  }

  public checkConfirmMessage(message) {
    cy.confirmMessage(this.confirmButton, message);
  }

  public clickOnHideTextBox() {
    cy.get(this.hideTextBoxButton).should('be.visible').click();
  }
  public clickOnShowTextBox() {
    cy.get(this.showTextBoxButton).should('be.visible').click();
  }
  public setDisplayTextBoxValue(textBoxValue) {
    cy.get(this.invokeAlertInput).should('be.visible').type(textBoxValue);
  }
  public getDisplayTextBoxValue() {
    return cy.get(this.displaytextBox).scrollIntoView();
  }

  public getiframe() {
    return cy.switchToframe(this.iframe);
  }
}
