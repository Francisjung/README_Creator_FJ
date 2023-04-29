// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    'What is the name of the project?',
    'Write a short description of the project.',
    'What are some challenges you encountered while working on this project?',
    'Feature #1',
    'Feature #2',
    'Feature #3',
    'Feature #4',
];
let answers=[];
for(let i=0;i<7;i++){
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const template = `# ${data[0]}

## Description

- ${data[1]}
- ${data[0]}

## Table of Contents (Optional)

- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Features](#features)

## License

MIT License

Copyright (c) [2023] [Francis Jung]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Features

- ${data[3]}.
- ${data[4]}.
- ${data[5]}.
- ${data[6]}`;
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
