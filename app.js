// Import inquirer and fs
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const generateMarkup = require('./src/template');

// Import classes from lib
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js');
const Manager = require('./lib/manager.js');

// Team members will be stored in this empty array. Need to find out how to get this into the helper functions to store. May need to write to file.
let team = [];

function startApp() {
    inquirer.prompt(
        {
            type: 'list',
            name: 'action',
            message: 'Hello boss. What would you lke to do?', 
            choices: ['New Team', 'Exit']
        }
    ).then(data => {
        switch(data.action) {
            case 'New Team': buildManager();
            break;

            case 'Exit': process.exit();
        };
    });
}; //startApp

// Employee type 
function newEmployee(){
    inquirer.prompt(
        {
            type: 'list',
            name: 'employeeType',
            message: 'Select another employee role to add or build team to finish', 
            choices: ['Engineer', 'Intern', 'Manager', 'Build Team']
        }
    ).then(data => {
        switch(data.employeeType) {
            case 'Engineer': buildEngineer();
            break;

            case 'Intern': buildIntern();
            break;

            case 'Manager': buildManager();
            break;

            case 'Build Team': buildTeam();
            break;

            case 'Exit': process.exit();
        }
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
        let engineer = new Engineer(data.name, data.id, data.email, data.github);

        team.push(engineer);
        newEmployee();
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
        team.push(intern);
        newEmployee();
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
        newEmployee();
    }) // .then
}; // buildManager

function buildTeam () {

        fs.writeFileSync(path.join('output', 'team.html'), generateMarkup(team));

}; // buildTeam



startApp();