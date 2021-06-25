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



function generateMarkdown(readMe) {
  const title = readMe.name;
  const description = readMe.description;
  const installationInstructions = readMe.installation;
  const usage = readMe.usage;
  const tests = readMe.tests
  console.log(readMe)
  // Make template!!!
  return `
  
  # ${title}


  ## Description

  ${description}



  ## Table of Contents

  - [Installation Instructions](#installation-instructions)
  - [Usage](#usage)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation Instructions

  ${installationInstructions}

  ## Usage

  ${usage}

  ## Tests

  ${tests}

  ## Questions
  Do you have any thing you'd like to contribute? Or have any questions for me?
  Contact Me:

  ${github}

  ${email}

  ${website}
`

};

module.exports = generateMarkdown;
