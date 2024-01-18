// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Description
  ${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation
  ${data.installation}

## Usage
  ${data.usage}

## Contribution
  ${data.contribution}

## Tests
  ${data.test}

## License
  ${data.license}

## Questions
You can visit my Github profile at: https://github.com/${data.username}
If you have any question you can email me at ${data.email}

`;
}

module.exports = generateMarkdown;