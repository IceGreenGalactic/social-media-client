# Workflow CA


## Description
This project aims to elevate the development process and maintain code quality in an existing web application through the implementation of efficient workflows and comprehensive testing strategies. Key updates and enhancements include:
- package.json Updates
- Testing Integration: jest and Cypress
- ESlint configuration
- Hooks: prettier and ESlint
- Testing: end-to-end testing covering  functionalities such as login/logout processes with valid and invalid credentials. 


 # Github Actions
 These workflows are automatically triggered on pushes to the `master` or `workflow` branches and on pull requests targeting those branches.


- **Deploy static content to Github Pages**: This workflow deploys static content to Github Pages automatically.
- **Automated unit testing**: This workflow runs automated unit tests automatically.
- **Automated end-to-end testing**: This workflow runs automated end-to-end tests automatically.

##### Status
##### Status
[![Deploy static content to Pages](https://github.com/IceGreenGalactic/social-media-client/actions/workflows/pages.yml/badge.svg)](https://github.com/IceGreenGalactic/social-media-client/actions/workflows/pages.yml) [![Run unit-tests](https://github.com/IceGreenGalactic/social-media-client/actions/workflows/unit_tests.yml/badge.svg)](https://github.com/IceGreenGalactic/social-media-client/actions/workflows/unit_tests.yml) [![Run e2e-tests](https://github.com/IceGreenGalactic/social-media-client/actions/workflows/e2e_tests.yml/badge.svg)](https://github.com/IceGreenGalactic/social-media-client/actions/workflows/e2e_tests.yml)


## Getting Started

### Prerequisites
    Make sure you have Node.js and npm installed on your machine.
    The project uses dotenv for environment variable configuration. Make sure to set up your .env file with necessary variables. If running tests on GitHub Actions, set up secrets for sensitive data like passwords.

### Installation

Clone the repository and install dependencies:

```bash
git clone
```
```bash
npm install
```
#### build 
```bash
npm run build
```
This will compile Sass files to CSS.

#### Development

This will launch a live server for development:

```bash
npm  start
```


# Testing
#### To run Jest and Cypress tests, use the following command:
```bash
npm run test
```

#### to run only unit test using Jest, use the following command:
```bash
npm run test:unit
```

#### to run only end-to-end tests using Cypress, use the following command:
```bash
npm run test-e2e
```


