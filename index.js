const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');
const path = require('path');
const fs = require('fs');
const output = path.resolve(__dirname, 'dist');
const outputPath = path.join(output, 'workTeam.html');
const createTeam = require('./src/template.js');

workTeam = [];
function start () {
    console.log('working');
    function makeTeam() {
        inquirer.prompt([
            {
                type: 'list',
                message: 'What employee would you like to choose?',
                name: 'addEmployee',
                choices: ['Engineer', 'Intern', 'Manager', 'No more needed']
            }
        ]).then(function(input){
            switch (input.addEmployee) {
                case 'Manager':
                    makeManager()
                    break;
                case 'Engineer':
                    makeEngineer()
                    break;
                case 'Intern':
                    makeIntern() 
                    break;
                default:
                    generateHTML()       
            };
        })
    }
    function makeManager() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'managerName',
                message: "what is the manager's name?"
            },
            {
                type: 'input',
                name: 'managerId',
                message: "what is the manager's Id?"
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: "what is the manager's Email?"
            },
            {
                type: 'input',
                name: 'managerOfficeNumber',
                message: "what is the manager's Office Number?"
            },
        ]).then(function(response){
            const manager = new Manager(response.managerName, response.managerId, response.managerEmail, response.managerOfficeNumber);
            console.log(manager);
            workTeam.push(manager)
            makeTeam();
        })
    }
    function generateHTML() {
        console.log('generated')
        fs.writeFileSync(outputPath, createTeam(workTeam), 'UTF-8')
    }
    makeTeam();
}

start();