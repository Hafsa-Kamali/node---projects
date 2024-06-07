// Word Counter -Project

// // The user will enter a english paragraph and all that
// is needed is to just to implement counting characters and words without whitespaces.

//inquirer
import chalk from 'chalk';
import inquirer from 'inquirer';

const ans : {
    sent :string;
} =await inquirer.prompt ([{
    name :"sent",
    type :"input",
     message :(chalk.bgCyanBright.white.bold.italic("Enter your sentence to count the given words"))
}])

//output defined
const magentaBackground = chalk.bgMagentaBright.whiteBright.bold

const done =  magentaBackground(ans.sent.trim ().split(" ").join(" "));
console.log(done);

console.log((chalk.bgWhite.black.bold(`your given sentence word count is ${done.length} words`)))