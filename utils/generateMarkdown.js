// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  switch(license) {
    case 'MIT':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
      break; 
    case 'Apache':
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)` 
      break;
    default:
      return``
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case 'MIT':
      return `MIT License`
      break; 
    case 'Apache License':
      return `` 
      break;
    default:
      return``
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

//
function printUsageList(array) {
// var string for  usage string
let string = "List of Technolgy\n\t"

  // for(var i = 0; i < array.length; i++){
  //   string +=`--${array[i]}\n\t`
  // }
  array.forEach(element => { 
    string +=`--${element}\n\t`
  });

  return string
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data)





  return  `# ${data.title}

  ## Description
  
  ${data.description}
  - 
  
  ## Table of Contents
  
  If your README is long, add a table of contents to make it easy for users to find what they need.
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  ${printUsageList(data.usage)}


  
 
  ## Credits
  
  ${data.contributors}
  
  ## License


  
  🏆 
  
  ## Badges

  ${renderLicenseBadge(data.license)}
  

  
  ## How to Contribute
  
  If you would like to contribute to the development of this project Please use the my repo to add to the project ${data.github}.  https://github.com/${data.github} The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.
  

  ## Questions
  If you have any questions please contact via my email at
  ${data.email}
  ## Tests
  
  ${data.tests}
  
`
}



module.exports = generateMarkdown;
