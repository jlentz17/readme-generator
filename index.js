// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const promptUser = () => {
  //   console.log(userData)
  //   console.log(`
  // =================
  // Generate Your README
  // =================
  // `);
  
  //   // If there's no 'projects' array property, create one
  //   if (!userData.projects) {
  //     userData.projects = [];
  //   }
return inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "What is the title of your app? (Required)",
        validate: (appInput) => {
          if (appInput) {
            return true;
          } else {
            console.log("You need to enter the name of your app!");
            return false;
          }
        }
      },  
      {
        type: "input",
        name: "description",
        message: "Provide a description of the app. (Required)",
        validate: (descriptionInput) => {
          if (descriptionInput) {
            return true;
          } else {
            console.log("You need to enter an app description!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "installation",
        message: "What are the installation instructions? (Required)",
        validate: (installInput) => {
          if (installInput) {
            return true;
          } else {
            console.log("You need to enter installation instructions!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "usage",
        message: "Provide a examples and instructions for your apps use (Required)",
        validate: (usageInput) => {
          if (usageInput) {
            return true;
          } else {
            console.log("You need to enter info on the usage of this app!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "tests",
        message: "What tests should be ran for this app? (Required)",
        validate: (testsInput) => {
          if (testsInput) {
            return true;
          } else {
            console.log("You need to enter info on the tests needed to be performed for this app!");
            return false;
          }
        },
      },
      {
        type: "confirm",
        name: "shareGithub",
        message: "Share the Github profiles of the contributers? (Required)",
        validate: (gitHubInput) => {
          if (gitHubInput) {
            return true;
          } else {
            console.log("Yes or No?!");
            return false;
          }
        },
      },
      {
          type: "input",
          name: "gitHub",
          message: "Github profile: (Required)",
          when: function (answer) {
              validate: (gitPortfolioInput) => {
                  if (gitPortfolioInput) {
                      return answer.shareGithub;
                    //   return true;
            } else {
                    console.log("You need to enter a GitHub link!");
                    return false;
            }
        }
      },
    },
      {
        type: "confirm",
        name: "shareEmail",
        message: "Share your email address? (Required)",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Yes or No?!");
            return false;
          }
        },
      },
      {
          type: "input",
          name: "email",
          message: "Email: (Required)",
          when: function (answer) {
              validate: (gitPortfolioInput) => {
                  if (gitPortfolioInput) {
                      return answer.shareEmail;
                    //   return true;
                } else {
                    console.log("You need to enter an email address!");
                    return false;
                }
        }
      },
    },
      {
        type: "confirm",
        name: "shareWebsite",
        message: "Share your website? (Required)",
        validate: (websiteInput) => {
          if (websiteInput) {
            return true;
          } else {
            console.log("Yes or No?!");
            return false;
          }
        },
      },
      {
          type: "input",
          name: "website",
          message: "Website: (Required)",
          when: function (answer) {
              validate: (websiteInput) => {
                  if (websiteInput) {
                      return answer.shareWebsite;
                    //   return true;
                } else {
                    console.log("You need to enter an email address!");
                    return false;
                }
        }
    },
  },
      {
          type: "list",
          name: "badges",
          message: "What license do have? (Required)",
          choices: ["GPL 3.0", "MIT", "BSD 3", "APACHE 2.0", "None"],
          validate: (badgeInput) => {
              if (badgeInput) {
                  return true;
                } else {
                    console.log("You need to enter a license!");
                    return false;
                }
            },
        },
        {
          type: "checkbox",
          name: "languages",
          message: "What did you this project with? (Check all that apply)",
          choices: [
            "JavaScript",
            "HTML",
            "CSS",
            "ES6",
            "jQuery",
            "Bootstrap",
            "Node",
          ],
        },
      ]
    )
    .then(readMe => {
       return generateMarkdown(readMe);
    })
  }
    // inquirer
    // .then((projectData) => {
    //   portfolioData.projects.push(projectData);
    //   if (projectData.confirmAddProject) {
    //     return promptProject(portfolioData);
    //   } else {
    //     return portfolioData;
    //   }
    // });

    // fs.writeFile("./utils/generateMarkdown", , err => {
    //         if (err) {
    //           return console.log(err);
    //         }
        
    //         console.log("Success!");
    //       });

// TODO: Create a function to initialize app
// function init(questions) {
//     inquirer.prompt(questions)
//     .then((userData) => {
//       // pass data into renderLicenseBadge
//       renderLicenseBadge(userData);
//       // call writeToFile function with file name and calling generateMarkdown function
//       writeToFile("./READMEtest.md", generateMarkdown(userData));
//     });
//   }

// Function call to initialize app
// init()
promptUser();
