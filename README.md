# easygenerator

Folder Structure
cypress/                  # Cypress root directory
  ├── fixtures/           # Fixture files for mocking data
  ├── e2e/                # Test files (specify your test files structure if different)         
  ├── support/            # Support files (commands, utilities, etc.)
  └── ...
tsconfig.json 
.prettierrc
cypress.config.ts
package-lock.json
package.json
server.js 
task.html
README.md                 # Project README file

Installation
Clone the repository:
git clone https://github.com/your/repository.git
cd repository
npm install

Dependencies
Cypress   
Cypress XPath   #used for working with iframe, when i trying with default locator it was not able to loacte iframe
start-server-and-test  #used this for triggering the server before test runs 
cypress-file-upload  # used to uploade the file 
prettier  #for code formatting 

Run npm install:
Execute the following command to install all dependencies listed in your package.json file, including Cypress and any other packages needed for your project:
npm install



Starting the Server
Start the Node.js server:
npm start


Opening Cypress Test Runner
Open Cypress in interactive mode:
npm run cy:open

Running Cypress Tests
Run Cypress tests in headless mode:
npm run cy:run

Running Tests with Server Start
Start the server and run Cypress tests:
npm test


