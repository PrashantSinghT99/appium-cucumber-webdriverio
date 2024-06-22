const { Given, When, Then } = require('@wdio/cucumber-framework');
const { $, expect } = require('@wdio/globals');

Given(/^I am on the login page$/, async function () {
    console.log('Application launched');
});

When(/^I enter the username (.*)$/, async function (username) {
    const usernameField = await $('~test-Username');
    await usernameField.setValue(username);
});


Then(/^I enter the password (.*)$/, async function (password) {
    const passwordField = await $('~test-Password');
    await passwordField.setValue(password);
});

Then(/^I click the login button$/, async function () {
    const loginButton = await $('~test-LOGIN');
    await loginButton.click();
});


Then(/^I validate product screen visible$/, async function () {
    const actual = await $("//android.widget.TextView[@text='PRODUCTS']");
    await expect(actual).toBeExisting();
});


Then(/^I should see the error message (.*)$/, async function (message) {
    // Locate the error message element using XPath
    //const errorMessageElement = await $('//android.widget.TextView[@text="Username and password do not match any user in this service."]');
    const errorMessageElement = await $(`//android.widget.TextView[@text="${message}"]`);

    // Get the text content of the error message element
    const errorMessageText = await errorMessageElement.getText();
    console.log('Error message:', errorMessageText);

    // Assert that the error message text is as expected
    expect(errorMessageText).toBe(message);
});
