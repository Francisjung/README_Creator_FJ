// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const gm = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    'What is the name of the project?',
    'Write a short description of the project.',
    'Describe how to install the project.',
    'Describe usage information for this project.',
    'Are there any contributors you would like to credit?',
    'If any, which license do you need for this project?',
    'Are there any tests for this project?',
    'Enter your Github Account: ',
    'Enter your email: '
];

// TODO: Create a function to write README file
function writeToFile(data) {
    let string = gm.generateMarkdown(data);
fs.writeFile('README.md', string, (err) =>
  err ? console.error(err) : console.log('Success!')
);
}

// TODO: Create a function to initialize app

function init() {

    // inquirer prompts answers
    inquirer.prompt([
        {
        //Title
          type: 'input',
          message: questions[0],
          name: 'title',
        },
        {
        //Description
          type: 'input',
          message: questions[1],
          name: 'description',
        },
        {
            //Installation
          type: 'input',
          message: questions[2],
          name: 'installInst',
        },
        {
            //Usage
        type: 'input',
        message: questions[3],
        name: 'usageInfo',
    
        },
        {
            //Contributing
        type: 'input',
        message: questions[4],
        name: 'contriGuide',
        
        },
        {
            //License checkbox
        type: 'checkbox',
        message: questions[5],
        name: 'license',
        choices:['MIT', 'ISC', 'Apache 2.0']
            
        },
        {
            //Tests
        type: 'input',
        message: questions[6],
        name: 'testInstr',
                
        },
        {
            //Github
        type: 'input',
        message: questions[7],
        name: 'github',
                    
        },
        {
            //Email
        type: 'input',
        message: questions[8],
        name: 'email',
            
        },
      ]).then((response) =>{
    const fileName = "README.md"; 
    
    //console.log(writeREADME(response));
    console.log("File Made!")
    // writes the README file with the provided responses via the inquirer
    writeToFile(response);
    
    });
    
    }

// Function call to initialize app
init();
