/*
Author: Francis Jung
Date: 5/4/2023
*/

//Imports necessary files
const fs = require('fs');
const inquirer = require('inquirer');
const gm = require('./utils/generateMarkdown');

//An array which holds the questions we will use to parse user input.
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

//Takes the user input and writes it to a file
function writeToFile(fileName, data) {
fs.writeFile(fileName, data, (err) =>
  err ? console.error(err) : console.log('Success!')
);
}


//This code is run at the start of the program
function init() {

    // Uses the inquirer package to read user input.
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
          name: 'install',
        },
        {
            //Usage
        type: 'input',
        message: questions[3],
        name: 'usage',
    
        },
        {
            //Contributing
        type: 'input',
        message: questions[4],
        name: 'contributors',
        
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
        name: 'tests',
                
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
        //Once all user input is collected, the data is passed into the writeToFile function.
    const fileName = "README.md"; 
    
    console.log("File Created Successfully");

    writeToFile(fileName, gm(response));
    
    });
    
    }

// Function call to initialize app
init();
