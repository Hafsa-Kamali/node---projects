// Student Management System

// This project is a simple console based Student Management System.
//  In this project you will be learning how to add new students, how to generate a 5 digit unique studentID for each student, how to enroll students in the given courses. Also, you will be implementing the following operations enroll, view balance, pay tuition fees, show status, etc. The status will show all the details of the student including name, id, courses enrolled and balance.
// This is one of the best projects to implement the Object Oriented Programming concepts.

import chalk from 'chalk';
import inquirer from 'inquirer';

// Student database (you can replace this with a database or file storage)
const students: Record<string, { name: string; rollNumber: string }> = {};

// Add a new student
function addStudent() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Enter student name:',
            },
            {
                type: 'input',
                name: 'rollNumber',
                message: 'Enter student roll number:',
            },
        ])
        .then((answers) => {
            const { name, rollNumber } = answers;
            students[rollNumber] = { name, rollNumber };
            console.log(chalk.green(`Student ${name} (Roll Number: ${rollNumber}) added successfully!`));
        });
}

// View student details
function viewStudentDetails() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'rollNumber',
                message: 'Enter student roll number:',
            },
        ])
        .then((answers) => {
            const { rollNumber } = answers;
            const student = students[rollNumber];
            if (student) {
                console.log(chalk.blue(`Student Details:`));
                console.log(`Name: ${student.name}`);
                console.log(`Roll Number: ${student.rollNumber}`);
            } else {
                console.log(chalk.red(`Student with Roll Number ${rollNumber} not found.`));
            }
        });
}

// Main menu
function mainMenu() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'choice',
                message: 'Select an option:',
                choices: ['Add Student', 'View Student Details', 'Exit'],
            },
        ])
        .then((answers) => {
            switch (answers.choice) {
                case 'Add Student':
                    addStudent();
                    break;
                case 'View Student Details':
                    viewStudentDetails();
                    break;
                case 'Exit':
                    console.log(chalk.yellow('Goodbye!'));
                    process.exit(0);
            }
        });
}

// Start the application
console.log(chalk.bold.green('Welcome to Student Management System!'));
mainMenu();
