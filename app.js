// Imported inquirer
const inquirer = require('inquirer');
const engineer = require('./lib/engineer.js');

// Team members will be stored in this empty array. Need to find out how to get this into the helper functions to store. May need to write to file.
let team = [];

// Employee type 
function newEmployee(){
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
        } // Finish the if/else statement invoking the build employee functions.
    }) 
}; // newEmployee

// Build new employee profile based on role.
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
        // Create new instance of Engineer with the inquirer response.
        let engineer = new Engineer(data.name, data.id, data.email, data.github)

        //Push to the team array.
        team.push(engineer)
    }) // then
}; // buildEngineer

console.log(team)
//Invoke newEmployee function.
newEmployee();