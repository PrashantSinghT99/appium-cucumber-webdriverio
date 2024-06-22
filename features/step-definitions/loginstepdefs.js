const { Given, When, Then } = require('@wdio/cucumber-framework');
const loginPage = require('../pageobjects/login.page');

// Step definition for launching the application
Given(/^I launch the application$/, async function () {
    await loginPage.open();
});
// Step definition for entering the username
When(/^I enter the username (.*)$/, async function (username) {
    await loginPage.enterUsername(username);
});
// Step definition for entering the password
When(/^I enter the password (.*)$/, async function (password) {
    await loginPage.enterPassword(password);
});
// Step definition for clicking the login button
When(/^I click the login button$/, async function () {
    await loginPage.clickLoginButton();
});
// Step definition for validating that the product screen is visible
Then(/^I validate product screen visible$/, async function () {
    const isVisible = await loginPage.isProductScreenVisible();
    await expect(isVisible).toBe(true);
});
// Step definition for verifying the error message
Then(/^I should see the error message (.*)$/, async function (message) {
    const errorMessageText = await loginPage.getErrorMessage(message);
    console.log('Error message:', errorMessageText);
    expect(errorMessageText).toBe(message);
});
