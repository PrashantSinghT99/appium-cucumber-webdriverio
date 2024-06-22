// login.page.js
const { $ } = require('@wdio/globals');

class LoginPage {
    get usernameField() { return $('~test-Username'); }
    get passwordField() { return $('~test-Password'); }
    get loginButton() { return $('~test-LOGIN'); }
    get productScreen() { return $("//android.widget.TextView[@text='PRODUCTS']"); }

    async open() {
        console.log('Application launched');
    }

    async enterUsername(username) {
        await this.usernameField.setValue(username);
    }

    async enterPassword(password) {
        await this.passwordField.setValue(password);
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }

    async isProductScreenVisible() {
        return await this.productScreen.isExisting();
    }

    async getErrorMessage(message) {
        const errorMessageElement = await $(`//android.widget.TextView[@text="${message}"]`);
        return await errorMessageElement.getText();
    }
}

module.exports = new LoginPage();
