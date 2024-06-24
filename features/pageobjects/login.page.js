const { $ } = require('@wdio/globals');

class LoginPage {
    // Getter for the username input field
    get usernameField() { return $('~test-Username'); }
    // Getter for the password input field
    get passwordField() { return $('~test-Password'); }
    // Getter for the login button
    get loginButton() { return $('~test-LOGIN'); }

    // Method to simulate opening the application
    async open() {
        console.log('Application launched');
    }
    // Method to enter the username into the username field
    async enterUsername(username) {
        await this.usernameField.clearValue();
        await this.usernameField.setValue(username);
    }
    // Method to enter the password into the password field
    async enterPassword(password) {
        await this.passwordField.clearValue();
        await this.passwordField.setValue(password);
    }
    // Method to click the login button
    async clickLoginButton() {
        await this.loginButton.click();
    }
    // Method to check if the product screen is visible
    async isProductScreenText() {
        const productScreen=await $("//android.widget.TextView[@text='PRODUCTS']");
        const productTxt=await productScreen.getText();
        console.log("pom text",productTxt);
        return productTxt;
    }
    // Method to get the error message text based on the provided message
    async getErrorMessage(message) {
        // Locate the error message element based on the provided message text
      
        const errorMessageElement = await $(`//android.widget.TextView[@text="${message}"]`);
        // Return the text of the error message element
        return await errorMessageElement.getText();
    }
    // async pause(ms) {
    //     return new Promise(resolve => setTimeout(resolve, ms));
    // }
}// Exporting an instance of the LoginPage class

module.exports = new LoginPage();
