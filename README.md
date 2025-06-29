# Kha Nguyen

## DELIVER

1. **Test Case Suite**

- A thorough collection of test cases for Login and Search modules: Please refer to the TestSuite.xlsx file in the project root for test coverage details.

2. **Automation Framework & Demo Automation Scripts**

- A functioning test framework
- Scripts that cover the Login and Search use cases

## PROJECT STRUCTURE

```
/acceptance
│── login
| └── loginSpec.ts ← test file
│── search
│ └── searchSpec.ts
│── steps/ ← reusable test steps or flows
│ └── loginSteps.ts
│ └── searchSteps.ts
│── pages/ ← Page Object Model (POM) classes
│ └── loginPage.ts
│ └── searchPage.ts
│── constants/ ← shared test constants
│ └── errorMessages.ts
│ └── menuItems.ts
│── utils/ ← helper functions (e.g. EnvUtils)
│── reports/ ← HTML generated report after test execution
└── allure-results/ ← allure report generated after test execution
/.env.stag ← env file for staging environment
/playwright.config.ts ← test runner config
/playwright.setup.ts ← load environment variable
/package.json ← defines dependencies, scripts, metadata
/Jenkinsfile ← defines pipeline execution
/TestSuite.xlsx ← A thorough collection of test cases for Login and Search modules
```

## RATIONALE

/acceptance

- Root directory for all automated acceptance (end-to-end) tests.
- Organized by feature-based subfolder (login/, search/) for better test isolation and clarity.

loginSpec.ts, searchSpec.ts

- These are the main test files, each targeting a specific feature or module.
- Using feature-based spec file naming improves discoverability and maintainability.
- Tag is used in order to run specific tests

steps/

- Contains high-level test flows (e.g. loginSteps.ts) to abstract repetitive test actions.
- Keeps spec files clean and focused on test logic, not UI interaction details.

pages/

- Implements the Page Object Model (POM) pattern.
- Each class represents a page or component, encapsulating selectors and page-specific methods.
- Promotes resilience to UI changes and encourages reuse.

constants/

- Stores all static values such as error messages and menu names.
- Prevents duplication and hardcoding across specs.

utils/

- Contains utility functions used across the test framework.
- Includes envUtils.ts, which safely retrieves environment variables using methods like getEnvOrThrow().

playwright.config.ts

- Defines global test settings: timeouts, base URL, reporters, parallelization, test match patterns, etc.
- Central configuration for consistent behavior across environments.
- 2 workers are used when running concurrently

playwright.setup.ts

- Sets up global hooks or environment initialization, like loading .env files or custom setup logic before tests run.

package.json

- Manages dependencies, test scripts, and tooling.

.env file

- Stores environment-specific configuration values

Jenkinsfile

- Allure report is prefer when running on pipeline

## STEPS TO EXECUTE THE DEMO SCRIPTS

1. **Install dependencies**

   > npm install

2. **Install browser dependencies (first-time only)**

   > npx playwright install

3. **Run demo tests**
   Run all tests (in 3 browsers FF, Chrome & Webkit)

   > npm run test

4. **Run in a specific browser**
   Runs tests in Chromium

   > npm run test:chromium

   Runs tests in Firefox

   > npm run test:firefox

   Runs tests in WebKit (Safari engine)

   > npm run test:webkit

   Debug test with @debug tag

   > npm run test:debug

   Runs test with headed mode

   > npm run test:headed

5. **View test reports**

   Open Playwright HTML report

   > npm run test:report

   Open detailed Allure report (recommended)

   > view:allure-report
