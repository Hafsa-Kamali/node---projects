//ATM - PROJECT 
import inquirer from 'inquirer';
let user = await inquirer.prompt([
    //parameter 1: card holder name
    {
        type: "string",
        name: "Card holder name ",
        message: "WELCOME HAFSA KAMALI",
    },
    //PARAMETER 2: CREATING PIN CODE :
    { type: "number", name: "pincode", message: "Enter your 4-digit code" },
    //PARAMETER 3 : CREATING LISTING AND WITH DRAWL METHOD :
    {
        type: "list",
        name: "Account type",
        message: "Select your account type",
        choices: ["Current", "Saving"],
    },
    //PARAMETER 4: CREATING TRANSITION TYPE
    {
        type: "list",
        name: "transitionType",
        message: "Select your transition type",
        choices: ["Cash", "Withdraw"],
    },
    //PARAMETER 5: SELECTED AMOUNT
    {
        type: "list",
        name: "Amount",
        message: "Enter your Amount",
        choices: [10000, 20000, 30000, 50000, 100000],
        when: (user) => {
            return user.transitionType === "Cash";
        },
    },
    {
        type: "number",
        name: "Amount",
        message: "Enter an amount",
        when: (user) => {
            return user.transitionType === "Withdraw";
        },
    },
    //PARAMETER 6 : FINAL SLIP :
    function () {
        if (user.pincode) {
            const balance = Math.floor(Math.random() * 30000 + 1);
            console.log(balance);
            const enteramount = user.Amount;
            if (enteramount <= balance) {
                const remaining = balance - enteramount;
                console.log(`You have withdrawn rupees ${enteramount} and you have remaining balance ${remaining}`);
            }
        }
    },
]);
