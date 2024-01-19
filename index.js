// packages needed for this application
const genMarkDown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');

// an array of questions for user input
const questions = [
    {
        type:'input',
        name:'title',
        message: 'What is the title of your project?',
        validate: (input) =>{ //checks if you entered a title
            if(!input.trim()){
                return 'Please enter a title';
            }
            return true;
        }
    },
    {
        type:'input',
        name:'description',
        message: 'What is the description of your project?',
        validate: (input) =>{ //checks if you entered a description
            if(!input.trim()){
                return 'You need to add a description';
            }
            return true;
        }
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
        choices: ['MIT','ISC','Apache','Unlicensed']
    },
    {
        type:'input',
        name:'username',
        message: 'Enter your github username: ',
        validate: (input) =>{  //checks if you entered a username
            if(!input.trim()){
                return 'Please enter your Github username';
            }
            return true;
        }
    },{
        type:'input',
        name:'email',
        message: 'Enter your email: ',
        validate: (input) =>{  //checks if you entered an email
            if(!input.trim()){
                return 'Please provide an email';
            }
            return true;
        }
    }
];

// function to write README file
function writeToFile(fileName, data) {
        
        fileName = `${data.title.toLowerCase().split(' ').join('')}.md`;
    
        fs.writeFile(fileName, genMarkDown(data), (err) => {
        err ? console.log(err) : console.log('Success!')
        });
}

// function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
    
        writeToFile('README.md', data);
    })
    .catch((error) => {
        console.error(error.message);

    });
}

// Function call to initialize app
init();