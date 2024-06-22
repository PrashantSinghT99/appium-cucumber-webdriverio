TECH STACK USED(latest versions)

APPIUM 2.10.3
WEBDRIVER IO 8.39.0
NODE 20.10.0
JAVASCRIPT
CUCUMBER 8.39.0
ANDRIOD STUDIO 2023
APPIUM INSPECTOR 2023

DEVICE: PIXEL XL GOOGLE
VERSION: ANDRIOD 13 TIRAMISU
APPLICATION: Android.SauceLabs.Mobile.Sample.app.2.7.1.apk


COMMAND TO RUN FEATURE FILE

npx wdio --spec .\features\login.feature


RUN VIA TAGS

By setting  cucumberOpts as tagExpression: '@validUser' in file wdio.config.js 
![alt text](image-7.png)


SPECS in wdio.config.js

![alt text](image-6.png)

 specs: [
        './features/**/*.feature'
    ],


CAPABILITIES


![alt text](image-5.png)

 capabilities: [{
        // capabilities for local Appium web tests on an Android Emulator
        platformName: 'Android',
        'appium:deviceName': 'Demo',
        'appium:platformVersion': '13.0',
        'appium:automationName': 'UiAutomator2',
        'appium:app': path.join(process.cwd(), './app/andriod/Android.SauceLabs.Mobile.Sample.app.2.7.1.apk'),
        "appium:appActivity": "com.swaglabsmobileapp.MainActivity",
        "appium:appPackage": "com.swaglabsmobileapp",
        'appium:noReset': false,
        'appium:newCommandTimeout': 7200,
        'appium:fullReset': true,
    }],


SERVICES AND LOGGING

![alt text](image-4.png)

  services: [
        ['appium', {
            args: {
                address: '127.0.0.1',
                port: 4723
            },
            command: 'appium',
            logPath: './'
        }]
    ],


STEP DEFINITION 

wdio.conf.js in cucumberOpts add below:

require: ['./features/step-definitions/*.js'],

![alt text](image-1.png)


REPORTER: ALLURE

docs:https://webdriver.io/docs/allure-reporter/

npm install @wdio/allure-reporter --save-dev

npm i allure-commandline

![alt text](image-2.png)

![alt text](image-3.png)
