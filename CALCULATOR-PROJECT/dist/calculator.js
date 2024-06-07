"use strict";
//calculator in typescript using terminal input
Object.defineProperty(exports, "__esModule", { value: true });
var prompt = require("prompt-sync")();
let n1 = parseInt(prompt("Enter your first number:"));
let n2 = parseInt(prompt("Enter your second number:"));
let operator = (prompt("Enter operator (+,-,*,/)"));
if (operator = "+") {
    console.log(`The answer of ${n1} ${operator} ${n2} = ${n1 + n2}`);
}
if (operator = "-") {
    console.log(`The answer of ${n1} ${operator} ${n2} = ${n1 - n2}`);
}
if (operator = "*") {
    console.log(`The answer of ${n1} ${operator} ${n2} = ${n1 * n2}`);
}
if (operator = "/") {
    console.log(`The answer of ${n1} ${operator} ${n2} = ${n1 / n2}`);
}
else {
    console.log("Invalid operator");
}
