const { Given, When, Then } = require('@wdio/cucumber-framework');
const { $, expect } = require('@wdio/globals');

Given(/^I am on the login page$/, async function () {
    console.log('Application launched');
});

When(/^I login with (.*) and (.*)$/, async function (username, password) {
    // Code to enter username and password and click login button
    // console.log(`${username} ${password}`);

    const usernameField = await $('~test-Username');
    await usernameField.setValue(username);

    const passwordField = await $('~test-Password');
    await passwordField.setValue(password);

    const loginButton = await $('~test-LOGIN');
    await loginButton.click();
});

Then(/^I validate product screen visible$/, async function () {
    // Code to validate product screen visibility
    // console.log('Validate product visible on screen stepdef');
    const actual = await $("//android.widget.TextView[@text='PRODUCTS']");
    await expect(actual).toBeExisting();
});
