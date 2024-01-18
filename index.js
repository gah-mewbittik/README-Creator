// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type:'input',
        name:'title',
        message: 'What is the title of your project?'
    },
    {
        type:'input',
        name:'description',
        message: 'What is the description of your project?'
    },
    {
        type:'input',
        name:'installation',
        message: 'What are the installation instructions'
    },
    {
        type:'input',
        name:'usage',
        message: 'What is the usage information of your project?'
    },
    {
        type:'input',
        name:'contribution',
        message: 'What are the contribution guidelines of your project?'
    },
    {
        type:'input',
        name:'test',
        message: 'What are the test instructions of your project?'
    },
    {
        type:'list',
        name:'license',
        choices: ['MIT', 'ISC', 'Apache license 2.0', 'The Unlicense']
    },
    {
        type:'input',
        name:'username',
        message: 'Enter your github username: '
    },{
        type:'input',
        name:'email',
        message: 'Enter your email: '
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

        console.log(data);
        fileName = `${data.name.toLowerCase().split(' ').join('')}.json`;
    
        fs.writeFile(fileName, JSON.stringify(data, null, '\t'), (err) =>
        err ? console.log(err) : console.log('Success!')
        );
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();