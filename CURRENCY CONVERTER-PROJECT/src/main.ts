// Currency Converter
// The TypeScript console app is used to convert currencies: the users enter a certain amount of money in one currency and set the currency they want to check the monetary value of.

// While developing the app, the beginners can master variables, algorithms, loops, if statements, and other TypeScript concepts.

//step:01 currency convertor rates

import chalk from 'chalk';
import inquirer from 'inquirer';

// Conversion rates
const conversion = {
    PKR: {
        USD: 0.0036,
        GBP: 0.0037,
        PKR: 1,
    },
    GBP: {
        USD: 1.21,
        PKR: 350,
        GBP: 1,
    },
    USD: {
        PKR: 277.58,
        GBP: 0.83,
        USD: 1,
    },
};

// Prompt user for input
inquirer
    .prompt([
        {
            type: 'input',
            name: 'amount',
            message: 'Enter the amount you want to convert:',
        },
        {
            type: 'list',
            name: 'from',
            message: 'Select the currency you want to convert from:',
            choices: ['PKR', 'GBP', 'USD'],
        },
        {
            type: 'list',
            name: 'to',
            message: 'Select the currency you want to convert to:',
            choices: ['PKR', 'GBP', 'USD'],
        },
    ])
    .then((answers) => {
        const from = answers.from;
        const to = answers.to;
        const amount = parseFloat(answers.amount);
        const rate = conversion[from as keyof typeof conversion][to as keyof typeof conversion];
        const result = amount * rate;

        // Colorful output
        console.log(chalk.bold(`Conversion Result:`));
        console.log(`${chalk.yellow(amount)} ${chalk.cyan(from)} = ${chalk.green(result.toFixed(2))} ${chalk.cyan(to)}`);
    });
