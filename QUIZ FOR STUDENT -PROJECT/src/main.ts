// Quiz System - Project 

// The app will show the students multiple choice questions and prompt the user to reply. 
// In the end it will show the students the result of the quiz.
import inquirer from 'inquirer';
import chalk from 'chalk';

console.log(chalk.bgMagentaBright.whiteBright.bold.italic("Welcome to my Adventure game quiz."));
console.log(chalk.bgWhiteBright.yellowBright.underline.bold.italic("You are required to gain a maximum of 12 points."));

let points = 0;

const questions = [
  {
    name: "one",
    message: "Which of the following is NOT a primitive data type in JavaScript?",
    type: "list",
    choices: ["string", "object", "number", "boolean"],
    answer: "object"
  },
  {
    name: "two",
    message: "What is the correct syntax to start a `for` loop in JavaScript?",
    type: "list",
    choices: [
      "for (let i = 0; i < length; i++) {}",
      "for i = 0 to length {}",
      "for (i in array) {}",
      "for each (item in array) {}"
    ],
    answer: "for (let i = 0; i < length; i++) {}"
  },
  {
    name: "three",
    message: "How do you define a function in JavaScript that takes two arguments and returns their sum?",
    type: "list",
    choices: [
      "function add(x, y) { return x + y; }",
      "function add(a, b) { return a + b; }",
      "function sum(x, y) { return x + y; }",
      "function addNumbers(x, y) { return x + y; }"
    ],
    answer: "function add(x, y) { return x + y; }"
  },
  {
    name: "four",
    message: "How do you access the second element of an array named `myArray`?",
    type: "list",
    choices: ["myArray(1)", "myArray[0]", "myArray.second", "myArray[1]"],
    answer: "myArray[1]"
  },
  {
    name: "five",
    message: "How do you select an element with the ID of `main` in JavaScript?",
    type: "list",
    choices: ["document.getElementById('main')", "document.querySelector('#main')", "document.getElementByClass('main')", "document.select('#main')"],
    answer: "document.getElementById('main')"
  },
  {
    name: "six",
    message: "How do you add a click event listener to a button element with the ID of `myButton` in JavaScript?",
    type: "list",
    choices: [
      "document.getElementById('myButton').addEventListener('click', functionName);",
      "document.querySelector('#myButton').addEventListener('click', functionName);",
      "document.getElementById('myButton').onclick = functionName;",
      "document.getElementById('myButton').on('click', functionName);"
    ],
    answer: "document.getElementById('myButton').addEventListener('click', functionName);"
  },
  {
    name: "seven",
    message: "What keyword is used to define an asynchronous function in JavaScript?",
    type: "list",
    choices: ["async", "defer", "wait", "promise"],
    answer: "async"
  },
  {
    name: "eight",
    message: "How do you catch and handle errors in a `try...catch` block?",
    type: "list",
    choices: [
      "try { ... } catch (error) { console.error(error); }",
      "try { ... } handle (error) { console.error(error); }",
      "try { ... } catch (e) { console.log(e); }",
      "try { ... } catch (err) { console.log(err); }"
    ],
    answer: "try { ... } catch (error) { console.error(error); }"
  },
  {
    name: "nine",
    message: "How do you export a function named `greet` from a module in JavaScript using ES modules?",
    type: "list",
    choices: [
      "export function greet(name) { ... }",
      "module.exports = greet;",
      "export default greet;",
      "exports.greet = function(name) { ... };"
    ],
    answer: "export function greet(name) { ... }"
  },
  {
    name: "ten",
    message: "Which regular expression would match an email address that contains an '@' symbol?",
    type: "list",
    choices: [
      "/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/",
      "/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/",
      "/^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$/",
      "/^[\\w.-]+@[\\w.-]+\\.\\w{2,}$/"
    ],
    answer: "/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/"
  },
  {
    name: "eleven",
    message: "What is the purpose of a higher-order function in JavaScript?",
    type: "list",
    choices: [
      "To perform calculations on numbers",
      "To manipulate strings",
      "To accept functions as arguments and/or return functions",
      "To access DOM elements"
    ],
    answer: "To accept functions as arguments and/or return functions"
  },
  {
    name: "twelve",
    message: "How does JavaScript implement inheritance through prototypes?",
    type: "list",
    choices: [
      "Objects inherit properties and methods from their prototype objects.",
      "Objects inherit properties and methods directly from other objects.",
      "Classes inherit properties and methods from their parent classes.",
      "Functions inherit properties and methods from their prototype functions."
    ],
    answer: "Objects inherit properties and methods from their prototype objects."
  },
  {
    name: "thirteen",
    message: "What is the role of a web server in a web application?",
    type: "list",
    choices: [
      "To render HTML content in the browser",
      "To store and manage user data",
      "To handle network requests and responses",
      "To style web pages with CSS"
    ],
    answer: "To handle network requests and responses"
  },
  {
    name: "fourteen",
    message: "Which of the following keywords has the most restricted scope in JavaScript?",
    type: "list",
    choices: ["var", "let", "const", "function"],
    answer: "let"
  }
];

async function startQuiz() {
  for (const question of questions) {
    const answer = await inquirer.prompt([
      {
        name: "answer",
        message: question.message,
        type: question.type,
        choices: question.choices
      }
    ]);

    if (answer.answer === question.answer) {
      console.log(chalk.bgBlueBright.greenBright.bold.italic("Congratulations! Your answer is correct."));
      points++;
    } else {
      console.log(chalk.redBright.bold.italic("Incorrect answer!"));
    }
  }

  if (points === questions.length) {
    console.log(chalk.bgMagentaBright.whiteBright.bold.italic("You won the quiz! Congratulations!"));
  } else {
    console.log(chalk.redBright.bold.italic("You lost the game. Try again next time!"));
  }
}

startQuiz();

