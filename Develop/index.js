const fs = require('fs');
const axios = require("axios");
const inquirer = require("inquirer");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile)

function Questions(){
    return inquirer.prompt ([
        {
            type:"input",
            name:"username",
            message:"What is your GitHub Username?"
        },
        {   type:"input",
            name:"title",
            message:"Please enter the name of your prject"

        },
        {
            type:"input",
            name:"description",
            message:"Please enter a short description of your project"
        },
        {
            type:"input",
            name:"license",
            message:"What type of license does your project require?"
        },
        {
            type:"input",
            name:"installation",
            message:"Are there any commands that should be run to install dependecies?"
        
        },
        {
            type:"input",
            name:"test",
            message:"Please provide command for any test to be run"
        
        },
        {   type:"input",
             name:"contributing",
            message:"Does the user need to contrubte to the repo?"

        },


    ])
};


