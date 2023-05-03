// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const gm = require('generateMarkdown')

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
function writeToFile(fileName, data) {
    const template = 
`# ${data[0]}

## Description

- ${data[1]}
- ${data[0]}

## Table of Contents (Optional)

- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Features](#features)

## License

${data[7]}

## Features

- ${data[3]}.
- ${data[4]}.
- ${data[5]}.
- ${data[6]}`;
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
