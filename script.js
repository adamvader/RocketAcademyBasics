// // initial bankRoll state
// var bankRoll = 10;

// var rollDice = function (rigged = false) {
//   //rig dice to return 1 in debug mode
//   if (rigged) {
//     console.log(`rigged dice, returning 6`);
//     return 1;
//   }

//   // Generate a decimal from 0 through 6, inclusive of 0 and exclusive of 6.
//   var randomDecimal = Math.random() * 6;

//   // Remove the decimal with the floor operation.
//   // This will be an integer from 0 to 5 inclusive.
//   var randomInteger = Math.floor(randomDecimal);

//   // Add 1 to get valid dice rolls of 1 through 6 inclusive.
//   var diceNumber = randomInteger + 1;

//   return diceNumber;
// };

// var main = function (input) {
//   var randomDiceNumber = rollDice(true);
//   console.log(`The dice roll is ${randomDiceNumber}`);
//   var myOutputValue = "you lose. current bank roll: " + bankRoll;

//   // change bankRoll state if the dice matches the randomDice
//   if (randomDiceNumber == input) {
//     bankRoll = bankRoll + 1;

//     myOutputValue = "you win. current bank roll: " + bankRoll;
//   }

//   return myOutputValue;
// };

// // Multi parameter function
// var addTwoNumbers = function (num1, num2) {
//   return Number(num1) + Number(num2);
// };

// var main = function (input) {
//   var firstNumber = input;
//   var secondNumber = 5;
//   return addTwoNumbers(firstNumber, secondNumber);
// };

//////////    Errors //////////////////////////////
// Syntax error
// var main = function (input) {
//   var myOutputValue = "hellogoodbye";
//   return myOutputValue;
// };

// // //Logical error
// var addTwoNumbers = function (num1, num2) {
//   return Number(num1) - Number(num2);
// };

// var main = function (input) {
//   var firstNumber = input;
//   var secondNumber = 5;
//   var sumTwoNumbers = input - 5;
//   return (
//     "The result of the addTwoNumbers with the input " +
//     input +
//     " and 5 is " +
//     sumTwoNumbers
//   );
// };

//  Console logging meaningfully will help you save time in debugging //
// var main = function (numGuest, glassesPerGuest) {
//   var orangesPerGlass = 4;
//   console.log("oranges per glass", orangesPerGlass);
//   var numGlasses = numGuest * glassesPerGuest;
//   console.log("number of glasses", numGlasses);
//   var numOranges = numGlasses * orangesPerGlass;
//   var myOutputValue = `${numOranges} oranges are needed`;
//   return myOutputValue;
// };

//////////// Comparison operators and Boolean true/false //////////////////

// var main = function (input) {
//   var firstNumber = input;
//   var secondNumber = 5;
//   var comparisonResult = firstNumber > secondNumber;
//   return comparisonResult;
// };

/////////////////////////  IF /////////////////////

// var main = function (input) {
//   var hotnessMeter = "So-So";
//   if (input == "Deshawn") {
//     hotnessMeter = "HANDSOME";
//   }

//   return hotnessMeter;
// };

// // Note that code still runs after an if statement
// var main = function (input) {
//   var hotnessMeter = "So-So";
//   if (input == "Deshawn") {
//     hotnessMeter = "HANDSOME";
//   }
//   hotnessMeter = "Erm okay la ";
//   return hotnessMeter;
// };

// Use of early return to terminate code executions
//var main = function (input) {
//var hotnessMeter = "So-So";
// if (input == "Deshawn") {
//  return "HANDSOME";
//}
// hotnessMeter = "Erm okay la ";
// return hotnessMeter;
//};

///////////////////////  Else If ////////////////////////

// // In this code example : only two scenarios are handled, if the Input is Adam, the code in the code block lines 94 is run. With any other input, the code block on line 96 will be run // //

// var main = function (input) {
//   var hotnessMeter = "So-So";
//   if (input == "Adam") {
//     hotnessMeter = "HANDSOME";
//   } else {
//     hotnessMeter = "Only Adam handsome";
//   }

//   return hotnessMeter;
// };

// // In this code example : three scenarios are handled, if the Input is Deshawn, the code in the code block lines 107 is run, if the input is Liz line 109 is run. With any other input, no code is run as the inputs do not satisfy any of the conditions to run a code block, so it will take the value declared in line 105 and return it, skipping lines 106-111// //

// var main = function (input) {
//   var hotnessMeter = "So-So";
//   if (input == "Deshawn") {
//     hotnessMeter = "HANDSOME";
//   } else if (input == "Liz") {
//     hotnessMeter = "PRETTYYYY";
//   }

//   return hotnessMeter;
// };

// // Similar to the above just an added else statement on line 123 to make sure that the edge cases can be handled for example when a user inputs something that is unexpected (Such as user inputting a unrecognised input in a scissor papers stone game) this means that unlike the above code, line 118"So-so" will not be run as the else statement on line 123 handles all input other than Liz and Deshawn // //

// var main = function (input) {
//   var hotnessMeter = "So-So";
//   if (input == "Deshawn") {
//     hotnessMeter = "HANDSOME";
//   } else if (input == "Liz") {
//     hotnessMeter = "PRETTYYY";
//   } else {
//     hotnessMeter = "Unexpected input";
//   }

//   return hotnessMeter;
// };

////////////////////////////////// Logical OR //////////////////

// //  In this code example with the || (OR) operator which is found under your backspace button + shift. This function reads the input and if either input is True, the code on line 137 runs // //

// var main = function (input) {
//   var hotnessMeter = "So-So";
//   if (input == "Deshawn" || input == "Liz") {
//     hotnessMeter = "HotStuff";
//   }

//   return hotnessMeter;
// };

//// In this code example, with the && (AND) operator, the ampersand symbol on shift+7, this code block will only evaluate as true if both conditions being evaluated in line 146 are TRUE ////
// var main = function (input) {
//   var hotnessMeter = "So-So";
//   if (input == "Deshawn" && input == "Liz") {
//     hotnessMeter = "HotStuff";
//   }
//   return hotnessMeter;
// };

// // Multiple Logical OR || and Logical && operators can be chained together this maybe useful if you want to check if multiple booleans///
// var main = function (input) {
//   var mathsGrades = 10;
//   var experienceInCode = 0;
//   var passionToLearn = 1;
//   if (mathsGrades > 100 || experienceInCode > 9000 || passionToLearn > 0) {
//     return "Join Bootcamp!!!!";
//   }
//   if (mathsGrades > 100 && experienceInCode > 9000 && passionToLearn > 0) {
//     return "Join Bootcamp";
//   }
// };
// //
// var main = function (input) {
//   var mathsGrades = 10;
//   var experienceInCode = 0;
//   var passionToLearn = 1;
//   if (mathsGrades > 100 || experienceInCode > 1000000 || passionToLearn > 0) {
//     return "Join Bootcamp!!!!";
//   }
//   if (mathsGrades > 100 && experienceInCode > 1000000 && passionToLearn > 0) {
//     return "Join Bootcamp";
//   } else if (input === "do it!") {
//     return "JOIN BOOTCAMP NOW!";
//   }
// };

// Global Variables
// Clicking on the submit button toggles between printing words and emojis.
// Global variables control the flow of the program and are updated within code blocks within the function main
// var printEmojis = 0;
// var printWords = 1;
// var main = function () {
//   // Line 10 takes a global variable declared outside of any function as a condition to check, and runs lines 12-17 if TRUE
//   if (printWords == 1) {
//     // Lines 12 & 13 updates the global variable once the code reaches it's intended block
//     printWords = 0;
//     printEmojis = 1;
//     var words = "Hello Basics 14-2!";
//     console.log(
//       "Console log of words variable - variable is within block scope see -->",
//       words
//     );
//     return words;
//   }
//   if (printEmojis === 1) {
//     printEmojis = 0;
//     printWords = 1;
//     var emojis = "😀 😃 😄 😁 😆 😅 😂 🤣 😊 😇 🙂 🙃";
//     console.log(
//       "Console log of words variable  - variable is outside of block scope see -->",
//       words
//     );
//     return emojis;
//   }
// };

//function to generate random background color
var generateRandomColor = function () {
  var randomDecimal = Math.random() * 6;

  var randomNum = Math.floor(randomDecimal) + 1;

  var container = document.querySelector(".container");

  if (randomNum == 1) {
    container.style.backgroundColor = "#3F84E5";
    return `azure`;
  } else if (randomNum == 2) {
    container.style.backgroundColor = "#F0E2E7";
    return `lavender`;
  } else if (randomNum == 3) {
    container.style.backgroundColor = "#B20D30";
    return `red`;
  } else if (randomNum == 4) {
    container.style.backgroundColor = "#C17817";
    return `ochre`;
  } else if (randomNum == 5) {
    container.style.backgroundColor = "#3F784C";
    return `amazon`;
  }
};

var main = function (input) {
  //output is the sentence to state the container color
  var newContainerColor = generateRandomColor();

  var myOutputValue = `The background color is now ${newContainerColor}.`;
  return myOutputValue;
};
