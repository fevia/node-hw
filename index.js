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
        name: "username",
        message: "What is your Github Username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
]
console.clear();

// function to write README file

inquirer
    .prompt(questions).then(response => {

    fs.appendFileSync("README.md", ("##" + response.title) + '\n', function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("Success!");
    });

    fs.appendFileSync("README.md", ("## Description" + '\n' + response.description) + '\n', function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("Success!");
    });

    fs.appendFileSync("README.md", ("## License" + '\n' + response.license) + '\n', function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("Success!");
    });

    fs.appendFileSync("README.md", ("## GitHub Username"  + '\n' + response.username) + '\n', function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("Success!");
    });

    fs.appendFileSync("README.md", ("## Email Address"  + '\n' + response.email) + '\n', function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("Success!");
    });

});



// function writeToFile(fileName, data) {
//     generateMarkdown(data);
// }

// function to initialize program
// function init() {

// }

// function call to initialize program
// init();
