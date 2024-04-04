#! /usr/bin/env node

import inquirer from "inquirer";
// 1: computer will generate a random number
// 2: user input for guessing number
// 3: compare 1 and 2 and show result

//const randomNumber =13;

//* const randomNumber = Math.random();
// console.log(randomNumber);*
// it gives pointable values

// *const randomNumber = Math.floor(Math.random());
// console.log(randomNumber);*
// it gives only zero

// const randomNumber = Math.floor(Math.random()*10);
// console.log(randomNumber);
// it give number from 0 - 9

// const randomNumber = Math.floor(Math.random()*6);
// console.log(randomNumber);
//it gives numbers from 0 - 5

// const randomNumber = Math.floor(Math.random()*6 + 1);
// console.log(randomNumber);
//it gives dice value i.e; 1 - 6

const randomNumber = Math.floor(Math.random()*6 + 1);
console.log("welcome to number guessing game");
//it gives numbers from 1 - 10

const answer = await inquirer.prompt([
  { message: "please guess a number between 1 - 6", type: "number", name: "userGuessNumber" },
]);

console.log(answer);

if (answer.userGuessNumber === randomNumber) {
  console.log("congratulations!you guess right number");
} else {
  console.log("you guess a wrong number");
}
