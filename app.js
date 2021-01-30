// Import inquirer
const inquirer = require('inquirer');

// Import classes from lib
const Employee = require('./lib/employee.js');
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js');
const Manager = require('./lib/manager.js');

// Team members will be stored in this empty array. Need to find out how to get this into the helper functions to store. May need to write to file.
let team = [];

// Employee type 
function newEmployee(){
    inquirer.prompt(
        {
            type: 'list',
            name: 'employeeType',
            message: 'What type of employee would you like to create?', 
            choices: ['Engineer', 'Intern', 'Manager', 'Build Team']
        }
    ).then(data => {
        if(data.employeeType === 'Engineer') {
            buildEngineer();
        } else if (data.employeeType === 'Intern') {
            buildIntern();
        } else if (data.employeeType === 'Manager') {
            buildManager();
        } 
    }) // .then
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
        team.push(engineer);
        console.log(team);
    }) // .then
}; // buildEngineer

function buildIntern(){
    inquirer.prompt(
        [ {
            type: 'input',
            name: 'name',
            message: 'Please enter intern name.'
        }, 
        {
            type: 'input',
            name: 'id',
            message: 'Please enter intern id.'
        },         
        {
            type: 'input',
            name: 'email',
            message: 'What is the intern\'s e-mail address?'
        }, 
        {
            type: 'input',
            name: 'school',
            message: 'What is the intern\'s school?'
        }]
    ).then(data => {
        // Create new instance of Intern with the inquirer response.
        let intern = new Intern(data.name, data.id, data.email, data.school);

        //Push to the team array.
        team.push(Intern);
        console.log(team);
    }) // .then
}; // buildIntern

function buildManager(){
    inquirer.prompt(
        [ {
            type: 'input',
            name: 'name',
            message: 'Please enter manager name.'
        }, 
        {
            type: 'input',
            name: 'id',
            message: 'Please enter manager id.'
        },         
        {
            type: 'input',
            name: 'email',
            message: 'What is the manager\'s e-mail address?'
        }, 
        {
            type: 'input',
            name: 'number',
            message: 'What is the manager\'s office number?'
        }]
    ).then(data => {
        // Create new instance of Manager with the inquirer response.
        let manager = new Manager(data.name, data.id, data.email, data.number)

        //Push to the team array.
        team.push(manager);
        console.log(team);
    }) // .then
}; // buildManager



// This data is passed into an object and pushed to the team array. From there it will be used with the helper functions in the src folder to build the HTML.

//Invoke newmanager function.
newEmployee();