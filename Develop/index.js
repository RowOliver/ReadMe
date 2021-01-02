//create consts for things that are required 
const inquirer = require("inquirer");
const fs = require("fs");

inquirer
    .prompt([{
        type: "input",
        name: "username",
        message: "What is your GitHub Username?",
    },
    {
        type: "input",
        name: "title",
        message:" What is the title of your project?",
    },
    {
        type: "input",
        name: "description",
        message:"Please enter a short description of your project",

    },
    {
        type: "input",
        name: "license",
        message: "What type of license doeyour project require?",

    },
    {
        type: "input",
        name: "installation",
        message: "Are they any commands that should be run to install any dependencies?",

    },
    {
        type: "input",
        name: "test",
        message:"Please provide any testing information if there is any",
        
    },
    {
        type: "input",
        name: "contribution",
        message: "Please define any contributions made by the user or other developers",
    }])

    .then(response => {
        

    })


