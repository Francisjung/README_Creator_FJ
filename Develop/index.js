// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const gm = require('generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    'What is the name of the project?',
    'Write a short description of the project.',
    'What are some challenges you encountered while working on this project?',
    'Feature #1',
    'Feature #2',
    'Feature #3',
    'Feature #4',
    'Which License do you need for this project?'
];
let answers=[];

function inquire(){
    for(let i=0;i<8;i++){
        inquirer.prompt(
            {
            type: 'input',
            message: questions[i],
            name:'question'+[i]
            }
    ).then((response) =>{
        answers.push(response);
    });
    }
}

// TODO: Create a function to write README file
function writeToFile(fileName, template) {
    
fs.writeFile('README.MD', template, (err) =>
  err ? console.error(err) : console.log('Success!')
);
}

// TODO: Create a function to initialize app
function init() {
    inquire();

}

// Function call to initialize app
init();
