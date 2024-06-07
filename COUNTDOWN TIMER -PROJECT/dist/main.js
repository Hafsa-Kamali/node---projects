// Countdown Timer - PROJECT
// In this project, you will build a countdown timer using the date module.
//date module install command
//npm install date - fns ;
//start coding 
import { differenceInSeconds } from "date-fns";
import chalk from 'chalk';
//function for count down timer seconds 
function* countdownTimer(second) {
    //while loop
    while (second > 0) {
        yield second;
        second--;
    }
}
//step2 : counter initialization
let timerIterator = countdownTimer(50);
//function to create a count down timer 
function displayCountDown() {
    //value create less than 50 
    let result = timerIterator.next();
    //else condition apply
    if (!result.done) {
        //current date and time calls 
        const now = new Date();
        //calculate minutes in time 
        const countdownTime = new Date(now.getTime() + (result.value * 1000));
        //calculate remaining seconds in time 
        const remainingSeconds = differenceInSeconds(countdownTime, now);
        const formattedSeconds = remainingSeconds.toString().padStart(2, '0'); // Add leading zeros if needed
        const formattedCountdown = `${formattedSeconds.slice(0, 2)} ${formattedSeconds.slice(2)}`; // Add space between seconds
        console.log(chalk.bgCyanBright.italic(`RemainingSeconds : ${formattedCountdown}`));
        setTimeout(displayCountDown, 1000); // 1 second is equal to 1000ms.
    }
    else {
        //display result count down complete!
        console.log(chalk.bgMagentaBright.whiteBright.bold.italic('countdown completed!'));
    }
}
//invoke function 
displayCountDown();
