**FOLDER STRUCTURE HIERARCHY**

```
.
└── appium-webdriverio-cucumber/
    ├── allure-reports(contains report after test execution)/
    │   └── index.html(open with browser)
    ├── app/
    │   └── andriod/
    │       └── application.apk(android apk used)
    ├── features/
    │   ├── pageObjects(Page specific pom classes)
    │   ├── stepDefinitions(Step definitions of feature file to page Objects)
    │   └── login.feature(Gherkin BDD cucumber)
    ├── testdata/
    │   └── testdata.js(Separated dynamic testdata logic)
    ├── .gitignore
    ├── LICENSE
    ├── README.md
    ├── package-lock.json
    └── package.json


```


**TECH STACK USED(latest versions)**

APPIUM 2.10.3  \
WEBDRIVER IO 8.39.0  \
NODE 20.10.0  \
JAVASCRIPT  \
CUCUMBER 8.39.0  \
ANDRIOD STUDIO 2023  \
APPIUM INSPECTOR 2023 \
DEVICE: PIXEL XL GOOGLE  \
VERSION: ANDRIOD 13 TIRAMISU  \
APPLICATION: Android.SauceLabs.Mobile.Sample.app.2.7.1.apk 



**PREREQUISITES**

Node.js and npm                                 
Java Development Kit (JDK)     \
Android SDK (for Android automation)  \
Appium  \
WebdriverIO CLI  \
Drivers (e.g., UI Automator 2)  \
Git   \
An IDE (e.g., Visual Studio Code)


**COMMAND TO RUN**

```
npm install
```

**Run all testcases**

```
npx wdio wdio.conf.js
```
**Run individually**

```
npx wdio --spec .\features\login.feature
```

**Run from tags directly from CLI**

```
npx wdio wdio.conf.js --cucumberOpts.tagExpression='@yourTag'
```

Note:  

1)Device/Emulator running  

2)Port 4723 is not occupied by any other process or service 

Command to check which process running on port and stop it. 

```
netstat -ano | findstr :4723 
taskkill /PID <PID> /F
```


**RUN VIA TAGS**

By setting cucumberOpts as tagExpression: '@validUser' in file wdio.config.js

```

tagExpression: '@validUser',

```

**SPECS in wdio.config.js**

```
specs: [
'./features/**/*.feature'
],
```

**CAPABILITIES**

```
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
```

**SERVICES AND LOGGING**

```
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
```

**STEP DEFINITION**

wdio.conf.js in cucumberOpts add below:

```
require: ['./features/step-definitions/*.js'],

```

**REPORTER: ALLURE**

docs:https://webdriver.io/docs/allure-reporter/

npm install @wdio/allure-reporter --save-dev

npm i allure-commandline

Add below configurations:


```
reporters: ['spec', ['allure', {
outputDir: 'allure-results',
disableWebdriverStepsReporting: true,
disableWebdriverScreenshotsReporting: true,
}]],

onComplete: function () {
const reportError = new Error('Could not generate Allure report')
const generation = allure(['generate', 'allure-results', '--clean'])
return new Promise((resolve, reject) => {
const generationTimeout = setTimeout(
() => reject(reportError), 5000)

            generation.on('exit', function (exitCode) {
                clearTimeout(generationTimeout)

                if (exitCode !== 0) {
                    return reject(reportError)
                }

                console.log('Allure report successfully generated')
                resolve()
            })
        })
    }
```

**EXECUTION**

https://github.com/PrashantSinghT99/appium-webdriverio-cucumber/assets/52065013/8970cdef-7ce0-49fc-a5d9-f311da55ef81

**TAGS EXECUTION**

https://github.com/PrashantSinghT99/appium-webdriverio-cucumber/assets/52065013/afd22b93-474b-49c5-a265-409e983a7bb4

**REPORTS**

https://github.com/PrashantSinghT99/appium-webdriverio-cucumber/assets/52065013/d2ee6df5-36b5-4a2f-a296-714172d414b9





