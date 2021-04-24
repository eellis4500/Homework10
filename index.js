const inquirer = require("inquirer");
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/Intern');
const path = require('path');
const teamMembers = [];
const idArray = [];
const generateHtml = require("./utils/generateHtml");


function createManager() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is your managers name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is your managers ID number?',
            name: 'id',
        },
        {
            type: 'input',
            message: 'What is your managers email?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is your managers office number?',
            name: 'officeNumber',
        },
    ]).then(answers => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        teamMembers.push(manager);
        idArray.push(manager.id);
        createTeam();
    });
}

function createTeam() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'What is their employees role?',
            name: 'role',
            choices: ["Engineer", "Intern", "No Additional Employees"]
        },
    ]).then(answers => {
        switch (answers.role) {
            case "Engineer":
                addEngineer();
                break;
            case "Intern":
                addIntern();
                break;
            default:
                buildTeam();
        }
    });
}

function addEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is your engineers name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is your engineers ID number?',
            name: 'id',
        },
        {
            type: 'input',
            message: 'What is your engineers email?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is your engineers github name?',
            name: 'github',
        },
    ]).then(answers => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        teamMembers.push(engineer);
        idArray.push(engineer.id);
        createTeam();
    });
}

function addIntern() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is your interns name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is your interns ID number?',
            name: 'id',
        },
        {
            type: 'input',
            message: 'What is your interns email?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is your interns school?',
            name: 'school',
        },
    ]).then(answers => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        teamMembers.push(intern);
        idArray.push(intern.id);
        createTeam();
    });
}

function buildTeam() {
    const folder = path.resolve(__dirname, "output");
    const output = path.join(folder, "team.html");
    fs.writeFileSync(output, generateHtml(teamMembers), "utf-8");
}

createManager();