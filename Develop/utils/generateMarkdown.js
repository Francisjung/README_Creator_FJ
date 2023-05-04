// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license){
    case 'MIT':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      break;
    case 'ISC':
      return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
      break;
    case 'Apache 2.0':
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
      break;
    default:
      return "";
      break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license){
    case 'MIT':
      return `[MIT license](https://opensource.org/license/mit/)`;
      break;
    case 'ISC':
      return `[ISC license](https://opensource.org/license/isc-license-txt/)`;
      break;
    case 'Apache 2.0':
      return `[Apache 2.0 license](https://opensource.org/license/apache-2-0/)`;
      break;
    default:
      return "";
      break;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch(license){
    case 'MIT':
      return `MIT`;
      break;
    case 'ISC':
      return `ISC`;
      break;
    case 'Apache 2.0':
      return `Apache 2.0`;
      break;
    default:
      return "";
      break;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
}

module.exports = generateMarkdown;
