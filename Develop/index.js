//create consts for things that are required 
const inquirer = require("inquirer");
const fs = require("fs");

inquirer
    .prompt([{
        type:"input",
        name:"projectTitle",
        message:"What is the title of your project?",
    },
    {
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
    {   type: "input",
        name:"email",
        message:"What is your email?",
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
        console.log(response.projectTitle);
        console.log(response.username);
        console.log(response.title);
        console.log(response.description);
        console.log(response.license);
        console.log(response.installation);
        console.log(response.test);
        console.log(response.contribution);  
        

    

    
    let page = `# **${response.projectName}**
        # ${response.title}
        ![Github license](https://img.shields.io/badge/license-MIT-blue.svg)
        ## Description
          ${response.description}
         ## Table of Contents
          *[Installation](#installation)
          *[Usage](#usage)
          *[License](#license)
          *[Contributing](#contributing)
          *[Tests](#tests)
          *[Questions](#questions)
          
        ## Installation
        To install necessary dependencies, run the following command:
            ${response.installation}
        ## Usage
        ${response.usage}
        ## License
        This project is licensed under the ${response.usage} license.
        ## Contributing
        ${response.contributing}
        ## Tests
        To run tests, run the following command:
            ${response.tests}
        ## Questions
    
        If you have any questions about the repo, open an issue or contact@
        [${response.username}]${response.email}
          `
          fs.writeFile('readme.md', page, (err) => {
              if(err) console.log("failed to write file");
              else console.log("wrote file");

          })
});




        
        
        
        
        
     
    




