# E2E Testing with Cypress and Drupal

![Data seeding through JSON:API approach](demo-evidence/dataseeding.gif)

## Setup
1. For quick installation of drupal 8 site and lando, please refer this [axl-template repo](https://github.com/axelerant/axl-template) 
2. Setup the project with standard install profile and also configure [JSON:API Module](https://www.drupal.org/project/jsonapi) module to handle all the basic operations('GET', 'POST', 'DELETE' etc) to be performed.

## Notes

  * - [x] Setup Cypress in your project's root and we implemented Page Object Design Pattern as below:
       + All test framework details under in web/themes/custom/cypress directory
       + Test files(cypress/integration): create_article_via_json_api.spec.spec.js; create_article_via_ui.spec;login.spec.js
       + Page specific files(cypress/page-objects): create_article.js, login.js
       + Test data(cypress/fixtures): article_testdata.js, login_testdata.js
       + Supported/Common re-usable functions(cypress/support): commands.js, index.js
       + Plugin/Add-on components(cypress/plugins): index.js
       + Config file: cypress.json
       + Screenshots(cypress/screenshots): cypress captures screenshots of all the failure tests while execute in CLI
       + Videos folder(cypress/videos): cypress captures vidoes of all the tests while execute them in CLI

  * - [x] Create and Delete various user roles using the drush commands

  * - [x] Verify Login through http request calls with cy.request()
  
  * - [x] Create and Verify an article with Taxonomy Term using both UI as well as JSON:API


## NPM Scripts for test execution

Clone/import this project in your drupal project and change the "baseUrl" field in cypress.json file as per your site. Next, run below commands from the project root:
   + **npm i** - install dependencies
   + **npm run test:headless** - spin up the test execution in headless mode in chrome browser
   + **npm run test:head** - spin up the test execution in head mode in chrome browser
   + **npm run open** - opens the cypress test runner and helps to execute the scripts in an interactive mode
                                                                                                                            
     **_Notes:_**
     + Cypress automatically detects available browsers on your OS and launch that up, so this may take some seconds to begin the execution at first run.
     + If Chrome browser is not installed in your system, please install it first and proceed this script.
     + Also with the below command, we can launch any supported browser by specifying a path to the binary:cypress run --browser /usr/bin/chromium
     + Please refer this [Cypress documentation](https://docs.cypress.io/guides/guides/launching-browsers.html) for more detail




