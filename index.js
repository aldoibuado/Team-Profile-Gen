const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");
const path = require("path");
const fs = require("fs");
const output = path.resolve(__dirname, "dist");
const outputPath = path.join(output, "workTeam.html");
const createTeam = require("./src/template.js");

// function to help ask questions to build team
workTeam = [];
function start() {
  console.log("working");
  function makeTeam() {
    inquirer
      .prompt([
        {
          type: "list",
          message: "What employee would you like to choose?",
          name: "addEmployee",
          choices: ["Engineer", "Intern", "Manager", "No more needed"],
        },
      ])
      .then(function (input) {
        switch (input.addEmployee) {
          case "Manager":
            makeManager();
            break;
          case "Engineer":
            makeEngineer();
            break;
          case "Intern":
            makeIntern();
            break;
          default:
            generateHTML();
        }
      });
  }
  function makeManager() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "managerName",
          message: "what is the manager's Name?",
        },
        {
          type: "input",
          name: "managerId",
          message: "what is the manager's Id?",
        },
        {
          type: "input",
          name: "managerEmail",
          message: "what is the manager's Email?",
        },
        {
          type: "input",
          name: "managerOfficeNumber",
          message: "what is the manager's Office Number?",
        },
      ])
      .then(function (response) {
        const manager = new Manager(
          response.managerName,
          response.managerId,
          response.managerEmail,
          response.managerOfficeNumber
        );
        console.log(manager);
        workTeam.push(manager);
        makeTeam();
      });
  }

  function makeEngineer() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "engineerName",
          message: "what is the engineer's Name?",
        },
        {
          type: "input",
          name: "engineerId",
          message: "what is the engineer's Id?",
        },
        {
          type: "input",
          name: "engineerEmail",
          message: "what is the engineer's Email?",
        },
        {
          type: "input",
          name: "engineerGithub",
          message: "what is the engineer's Github?",
        },
      ])
      .then(function (response) {
        const engineer = new Engineer(
          response.engineerName,
          response.engineerId,
          response.engineerEmail,
          response.engineerGithub
        );
        console.log(engineer);
        workTeam.push(engineer);
        makeTeam();
      });
  }

  function makeIntern() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "internName",
          message: "what is the intern's Name?",
        },
        {
          type: "input",
          name: "internId",
          message: "what is the intern's Id?",
        },
        {
          type: "input",
          name: "internEmail",
          message: "what is the intern's Email?",
        },
        {
          type: "input",
          name: "internSchool",
          message: "what is the intern's School?",
        },
      ])
      .then(function (response) {
        const intern = new Intern(
          response.internName,
          response.internId,
          response.internEmail,
          response.internSchool
        );
        console.log(intern);
        workTeam.push(intern);
        makeTeam();
      });
  }
  function generateHTML() {
    console.log("generated");
    fs.writeFileSync(outputPath, createTeam(workTeam), "UTF-8");
  }
  makeTeam();
}

start();
