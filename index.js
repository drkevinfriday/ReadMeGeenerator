// TODO: Include packages needed for this application
    // this import the fs module but will be changed to the write file function later
const fs = require('fs');
    // this imports the inquierer 
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')




// TODO: Create an array of questions for user input

// this creates 
const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'what is your name of your project',
        //  validates that name was entered
        validate: titleInput => {
          if(titleInput){
          return true;
        } else {
          console.log("Please enter the name of your project")
          return false;
          }
        }
    },
    {
      type: 'input',
      name: 'github',
      message: 'Please enter your githib user name',
      //  validates that name was entered
      validate: titleInput => {
        if(titleInput){
        return true;
      } else {
        console.log("Please enter your githib username")
        return false;
        }
      }
  },
  {
    type: 'input',
    name: 'email',
    message: 'Please enter your email address',
    //  validates that name was entered
    validate: titleInput => {
      if(titleInput){
      return true;
    } else {
      console.log("Please enter your email address")
      return false;
      }
    }
},

      {
        type: 'input',
        name: 'description',
        message: 'Please provide a description for your README markdown file. (Required) ',
        validate: descriptionInput =>{
          if(descriptionInput){
            return true
          } else{
            console.log('Please provide a description for your README markdown file')
            return false
          }
        }
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Please provide installion directions for your README markdown file. (Required) ',
        validate: descriptionInput =>{
          if(descriptionInput){
            return true
          } else{
            console.log('Please provide installion directions for your README markdown file.')
            return false
          }
        }
      },
      {
        type: 'checkbox',
        name: 'usage',
        message: 'What did you build this project with? (Check all that apply)',
        choices: ['Javascript', 'HTML','CSS', 'ES6','jQuery', 'Bootstrap', 'Node']
    
      },
      {
        type: 'input',
        name: 'contributors',
        message: 'Please provide information about contributors that you worked with your project your README markdown file. (Required) ',
        validate: descriptionInput =>{
          if(descriptionInput){
            return true
          } else{
            console.log('Please provide information about contributors that you worked with your project your README markdown file')
            return false
          }
        }
      
      },
      {
        type: 'list',
        name: 'license',
        message: 'Please select a type of License for your project ',
        choices: ['MIT', 'Apache'],
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Go the extra mile and write tests for your application. Provide examples on how to run them here. (Required) ',
        validate: descriptionInput =>{
          if(descriptionInput){
            return true
          } else{
            console.log('Go the extra mile and write tests for your application. Provide examples on how to run them here.')
            return false
          }
        }
      }

      
    ])
      
    }

// TODO: Create a function to write README file
function writeToFile(fileName) {
  fs.writeFile('./dist/README.md', fileName, err =>{
    if (err) {
        reject(err);
        // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
        return;
      }
      // if everything went well, resolve the Promise and send the successful data to the `.then()` method
  //   resolve({
  //   ok: true,
  //   message: 'File created!'
  // });
})
}

// TODO: Create a function to initialize app
function init() {
    console.log('this works')
    
    

}

// Function call to initialize app
init()
// this prints he markdown file to the terminal
// console.log(generateMarkdown())
// this calls the function calls prompt user to return data to the next .then
promptUser()
// take answers in and makes a object fro user repsonses
.then(UserAnswerData =>{
   return(generateMarkdown(UserAnswerData))
})
.then(writeToFile)




//  this call prompts the user to enter data for the markdown 




