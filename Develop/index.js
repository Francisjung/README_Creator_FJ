// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    'What is the name of the project?',
    'Write a short description of the project.',
    'Describe how to use this project.',
    'Is there anyone else you would like to credit for this project?',
    'If any, which license do you need for this project?',
    'Describe some features of this project.'
];
let answers=[];

function inquire(){
    inquirer.prompt([
        {
            type: 'input',
            message: questions[0],
            name: 'question 1'
        },
        {
            type: 'input',
            message: questions[1],
            name: 'question 2'
        },
        {
            type: 'input',
            message: questions[2],
            name: 'question 3'
        },
        {
            type: 'input',
            message: questions[3],
            name: 'question 4'
        },
        {
            type: 'input',
            message: questions[4],
            name: 'question 5'
        },
        {
            type: 'input',
            message: questions[5],
            name: 'question 6'
        }

    ]).then((response)=>{
        answers.push(response);
    })
}

// TODO: Create a function to write README file
function writeToFile(data) {
    
fs.writeFile('README.MD', generateMarkdown.generateMarkdown(data), (err) =>
  err ? console.error(err) : console.log('Success!')
);
}

// TODO: Create a function to initialize app
function init() {
    inquire();
    writeToFile(answers);
}

// Function call to initialize app
init();
