const { Given, When, Then } = require('@wdio/cucumber-framework');
// const {$} =require('@wdio/globals')

Given(/^I am on the login page$/, function () {
    // Code to navigate to the login page
    console.log('Login page step def')
});

When(/^I login with (.*) and (.*)$/, function (username, password) {
    // Code to enter username and password and click login button
    console.log('Enter username password stepdef')
});

Then(/^I validate product screen visible$/, function () {
    // Code to validate product screen visibility
    console.log('Validate product visible on screen stepdef')
});
