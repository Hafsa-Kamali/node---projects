// ADVENTURE GAME - PROJECT 

// This project is not GUI based. It is a console-based game. The video here shows how to develop the game in Java.
//  You will take the requirements of the game from the video and develop the game in TypeScript and Node.js

// Requirements:

// 1. Create a console-based game.
import inquirer from 'inquirer';
import chalk from 'chalk';

enum Location {
  Start,
  Forest,
  Cave,
  Victory,
  GameOver
}

interface Item {
  name: string;
  description: string;
}

function describeLocation(location: Location): string {
  switch (location) {
    case Location.Start:
      return chalk.green.bold("You find yourself standing at the edge of a dark forest.");
    case Location.Forest:
      return chalk.yellow.bold(
        "You are deep within the forest. The trees are tall and gnarled, and the sunlight barely reaches the ground."
      );
    case Location.Cave:
      return chalk.blue.bold(
        "You enter a dark and damp cave. You can barely see anything. An eerie feeling chills you to the bone."
      );
    case Location.Victory:
      return chalk.green.bold.bgYellow(
        "You have emerged from the cave with the treasure! You win! A sense of triumph washes over you."
      );
    case Location.GameOver:
      return chalk.red.bold.italic("You have been eaten by a monster. Game Over! Rest in pepperoni...");
  }
}

function getItem(location: Location): Item | null {
  switch (location) {
    case Location.Forest:
      return { name: "sword", description: chalk.cyan.bold("A rusty but sturdy sword. It gleams faintly in the dim light.") };
    default:
      return null;
  }
}

async function getUserInput(): Promise<string> {
  const answer = await inquirer.prompt({
    type: "input",
    name: "action",
    message: chalk.magenta.bold("> "),
  });
  return answer.action.trim();
}

async function playGame() {
  let location = Location.Start;
  let inventory: Item[] = [];

  while (true) {
    console.log(describeLocation(location));

    const item = getItem(location);
    if (item) {
      console.log(`You see a ${item.description}`);
    }

    const action = (await getUserInput()).toLowerCase();

    if (action === "go north") {
      if (location === Location.Start) {
        location = Location.Forest;
      } else {
        console.log("You can't go north from here.");
      }
    } else if (action === "go south") {
      console.log("You can't go south from here.");
    } else if (action === "go east") {
      console.log("You can't go east from here.");
    } else if (action === "go west") {
      console.log("You can't go west from here.");
    } else if (action === "take sword" && location === Location.Forest) {
      inventory.push(item!);
      console.log("You take the sword.");
    } else if (action === "look") {
      console.log(describeLocation(location));
      if (item) {
        console.log(`You see a ${item.description}`);
      }
    } else if (action === "inventory") {
      if (inventory.length === 0) {
        console.log("Your inventory is empty.");
      } else {
        console.log("You have the following items:");
        for (const item of inventory) {
          console.log(`* ${item.name}`);
        }
      }
    } else {
      console.log(chalk.red.bold("I don't understand what you mean."));
    }
  }

  if (location === Location.Victory) {
    console.log("Congratulations! You have won the game!");
  } else {
    console.log("You have lost the game. Try again next time!");
  }
}

playGame();
