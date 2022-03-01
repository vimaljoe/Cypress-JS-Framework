# Capitol on tap - Senior QA Engineer - Technical assessment

This is a technical task to complete an automation framework for a new mobile
responsive commerce site - http://automationpractice.com/index.php.
I have used Cypress, JavaScript, Cucumber to automate the test cases.

#Installation
This project required npm install of cypress. 

Please refer to https://docs.cypress.io/guides/getting-started/installing-cypress#npm-install for detailed instructions.

Steps:
```shell
npm install cypress --save-dev
```

# Dependencies
Dependencies are given in the devDependencies in package.json. Please do install them before executing the tests. 

-----------------------------------------------
#Arroach
- We are using Page Object model for testing
- Fixture are used to identify the client
- Hooks are used for before and after setup 
--------------------
#To run test using cypress test runner
```shell
npm run cypress:open
```
----------------------
#Run results
```shell
cypress run
```
User will be able to find the reports in \cypress\reports\ folder as "report.html"

Once user added more than one scenario files, user should be able to generate a merged test results using
```shell
npm run test-report
```
and it will generate a file like 
\capitalontap\mergedreport.html
- Please remember to turn off overwrite of reports when you have more than one feature files by setting "overwrite": true in cypress.json 
-----------------------------------
#Scripts
Various scripts are added to package.json for executing the commands.

User should be able to use them to execute them in various browsers.

User should be able to use them in CI environment to execute the scripts in parallel.

For example, in order to run the test in chrome, user can run the below command
```shell
npm run cypress:run:chrome
```
-------------------------

#CI 
Jenkins files are added in the jenkinsFiles folder

`Jenkinsfile` is used to when user is running on a selected environment and selected browser

`JenkinsFileParallel` is used to run the tests in parallel in CI environment with multiple machines. Test are running in parallel against multiple browsers.

