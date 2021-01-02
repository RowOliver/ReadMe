const fs = require('fs');
const axios = require("axios");
const inquirer = require("inquirer");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile)

function InputQuestions()
    return inquirer.prompt ([
        {
            type:"input",
            name:"username",
            message:"What is your GitHub Username?",
        },
        {   type:"input",
            name:"title",
            message:"Please enter the name of your prject",

        },
        {
            type:"input",
            name:"description",
            message:"Please enter a short description of your project",
        },
        {
            type:"input",
            name:"license",
            message:"What type of license does your project require?",
        },
        {
            type:"input",
            name:"installation",
            message:"Are there any commands that should be run to install dependecies?",
        
        },
        {
            type:"input",
            name:"test",
            message:"Please provide command for any test to be run",
        
        },
        {   type:"input",
             name:"contributing",
            message:"Does the user need to contrubte to the repo?",

        },


    
//console.log everything 

 
//how to use the data that the user input
var getInput = (data) => {

}




// function to generate markdown for README// from the starter code:figure out what they do
function generateMarkdown(data) {
    return `# ${data.title}
    ##Description
    ${data.description}
    ## Tabel of Contents
    - [Questions](#questions)
    -[License](#license)
    - []
  
  `;
  }
  
  module.exports = generateMarkdown;



