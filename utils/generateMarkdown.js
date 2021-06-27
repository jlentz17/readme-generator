// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `![MIT Badge]()`;
  } else if (license === "Apache License 2.0") {
    return `![Apache License 2.0]()`;
  } else if (license === "GNU General Public License 3.0") {
    return `![GNU General Public License 3.0]()`;
  } else if (license === "BSD 3-Clause License") {
    return `![BSD 3-Clause License]()`;
  } else {
    return " ";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return `[MIT License]()`;
  } else if (license === "Apache License 2.0") {
    return `[Apache License 2.0]()`;
  } else if (license === "GNU General Public License 3.0") {
    return `[GNU Gdeneral Public License 3.0]()`;
  } else if (license === "BSD 3-Clause License") {
    return `[BSD 3-Clause License]()`;
  } else {
    return " ";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "MIT") {
    return `Copyright (c) 2021`;
  } else if (license === "Apache 2.0") {
    return `Apache License 
    Version 2.0 January 2004
    http;//www.apache.org/licenses/`
  } else if (license === "GNU General Public License 3.0") {
    rerturn `GNU General Public License 3.0
    Version 3, 29 June 2007`
  } else if (license === "BSD 3-Clause License") {
    return `BSD 3-Clause License
    Copyright (c) 2021`
  } else {
    return " "
  }
}

// TODO: Create a function to generate markdown for README



function generateMarkdown(readMe) {
let github = (readMe.github) ? `github.com/${readMe.github}` : "";
let email = (readMe.email) ? readMe.email : "";
let website = (readMe.website) ? readMe.website : "";


  const title = readMe.title;
  const description = readMe.description;
  const technologies = readMe.technologies
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

  - [Technologies](#technologies)
  - [Installation Instructions](#installation-instructions)
  - [Usage](#usage)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Technologies 

  ${technologies}

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
