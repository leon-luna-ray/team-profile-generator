const inquirer = require('inquirer');
let team = [];

function questions(){
    inquirer.prompt(
        {
            type: 'list',
            name: 'employeeType',
            message: 'What type of employee would you like to create?', 
            choices: ['Engineer', 'Intern', 'Manger', 'Build Team']
        }
    ).then(data => {
        if(data.employeeType === 'Engineer') {
            buildEngineer();
        }
    }) 
};

function buildEngineer(){
    inquirer.prompt(
        [
            //questions
        ]
    ).then(data => {
        let engineer = new Engineer(data.name, data.id, data.email, data.github)
        team.push(engineer)
    })
};