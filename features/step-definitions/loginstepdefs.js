const { Given, When, Then } = require('@wdio/cucumber-framework');
const loginPage = require('../pageobjects/login.page');

Given(/^I am on the login page$/, async function () {
    await loginPage.open();
});

When(/^I enter the username (.*)$/, async function (username) {
    await loginPage.enterUsername(username);
});

When(/^I enter the password (.*)$/, async function (password) {
    await loginPage.enterPassword(password);
});

When(/^I click the login button$/, async function () {
    await loginPage.clickLoginButton();
});

Then(/^I validate product screen visible$/, async function () {
    const isVisible = await loginPage.isProductScreenVisible();
    await expect(isVisible).toBe(true);
});

Then(/^I should see the error message (.*)$/, async function (message) {
    const errorMessageText = await loginPage.getErrorMessage(message);
    console.log('Error message:', errorMessageText);
    expect(errorMessageText).toBe(message);
});
