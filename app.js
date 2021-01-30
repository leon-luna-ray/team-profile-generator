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
        [ {
            type: 'input',
            name: 'name',
            message: 'Please enter employee name.'
        }, 
        {
            type: 'input',
            name: 'id',
            message: 'Please enter employee id.'
        },         
        {
            type: 'input',
            name: 'email',
            message: 'What is the employee\'s e-mail address?'
        }, 
        {
            type: 'input',
            name: 'github',
            message: 'What is the employee\'s Github username?'
        }]
    ).then(data => {
        let engineer = new Engineer(data.name, data.id, data.email, data.github)
        team.push(engineer)
    })
};

