// const generateMarkdown = require('./utils/generateMarkdown');
const fs = require("fs");
const inquirer = require("inquirer")

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Please write a brief description of your project"
    },
    {
        type: "checkbox",
        name: "Choose a license.",
        message: "license",
        choices: [
            "MIT License",
            "GPL License",
            "Apache License",
        ]
    },
    {
        type: "input",
        name: "Github Username",
        message: "What is your Github Username?"
    },
    {
        type: "input",
        name: "email address",
        message: "What is your email address?"
    },
]
console.clear();

// function to write README file
// function writeToFile(fileName, data) {
//     generateMarkdown(data);
// }

// function to initialize program
// function init() {

// }

// function call to initialize program
// init();
