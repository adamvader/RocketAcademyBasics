// // global scope
// var globalVariable = 0;

// // also global scope
// var scopeIntroMain = function (input) {
//   // function scope
//   console.log(`globalVariable has a value of ${globalVariable}`);
//   // we can manipulate the value of a global varaible
//   // without having to re-declare using the var keyword:
//   globalVariable += 1;
//   console.log(`globalVariable now has a value of ${globalVariable}`);
//   var myOutputValue;
//   if (globalVariable % 2 == 0) {
//     // block scope
//     // we can access both myOutputValue and globalVariable within block scope
//     myOutputValue = `Global variable is even, with a value of ${globalVariable}`;
//   } else {
//     myOutputValue = `Global variable is odd, with a value of ${globalVariable}`;
//   }
//   return myOutputValue;
// };

// var introScopeMain = function (input) {
//   // Attempt the Follow Along exercise from the Intro to Scope module below with introScopeMain as the main function.
//   var myOutputValue = "hello world";
//   return myOutputValue;
// };

var rollDice = function () {
  // produces a decimal between 0 and 6
  var randomDecimal = Math.random() * 6;

  // take off the decimal
  var randomInteger = Math.floor(randomDecimal);

  // it's a number from 0 - 5 ... add 1
  var diceNumber = randomInteger + 1;

  return diceNumber;
};

var currentGameMode = "waiting for user name";
var bankRoll = 10;
var userName = "";

var playDiceGame = function (userName, userGuess) {
  var message = "";

  // dice game logic
  var randomDiceRoll = rollDice();
  message =
    userName +
    " you lost! you guessed: " +
    userGuess +
    " you rolled: " +
    randomDiceRoll +
    " current bank roll: " +
    bankRoll;

  if (userGuess == randomDiceRoll) {
    bankRoll = bankRoll + 1;
    message =
      userName +
      " you won! you guessed: " +
      userGuess +
      " you rolled: " +
      randomDiceRoll +
      " your current bank roll: " +
      bankRoll;
  }

  return message;
};

var appSetupMain = function (input) {
  // Attempt the Base: App Setup exercise from the Program Lifecycle and State module below with appSetupMain as the main function.
  var myOutputValue = "";

  if (currentGameMode == "waiting for user name") {
    // set the name
    userName = input;

    // now that we have the name, switch the mode
    currentGameMode = "dice game";

    myOutputValue = "Hello " + userName;
  } else if (currentGameMode == "dice game") {
    // refactored function that can be reused anywhere
    myOutputValue = playDiceGame(userName, input);
  }

  return myOutputValue;
};

//var diceRollPrevious = 0;

// var appSetupMain = function (input) {
//   // Attempt the Base: App Setup exercise from the Program Lifecycle and State module below with appSetupMain as the main function.
//   var myOutputValue = ` Your previous dice roll was ${diceRollPrevious}.`;
//   var randomDiceNumber = rollDice();
//   console.log(`the dice roll is ${randomDiceNumber}`);
//   myOutputValue += `<br>Your current dice roll is ${randomDiceNumber}.`;
//   diceRollPrevious = randomDiceNumber;

//   if (randomDiceNumber == input) {
//     myOutputValue += "<br>you win";
//   } else {
//     myOutputValue += "<br>you lose";
//   }

//   return myOutputValue;
// };

var lastRollMain = function (input) {
  // Attempt the Base: Last Roll exercise from the Program Lifecycle and State module below with lastRollMain as the main function.
  var myOutputValue = ` Your previous dice roll was ${diceRollPrevious}.`;
  var randomDiceNumber = rollDice();
  console.log(`the dice roll is ${randomDiceNumber}`);
  myOutputValue += `<br>Your current dice roll is ${randomDiceNumber}.`;
  diceRollPrevious = randomDiceNumber;

  if (randomDiceNumber == input) {
    myOutputValue += "<br>you win";
  } else {
    myOutputValue += "<br>you lose";
  }
  return myOutputValue;
};

var score = 0;
var winCounter = 0;
var gameCounter = 0;
var winRate = 0;

var winLossMain = function (input) {
  // Attempt the Base: Win / Loss exercise from the Program Lifecycle and State module below with winLossMain as the main function.
  var myOutputValue = ` Your previous dice roll was ${diceRollPrevious}.`;
  var randomDiceNumber = rollDice();
  console.log(`the dice roll is ${randomDiceNumber}`);
  myOutputValue += `<br>Your current dice roll is ${randomDiceNumber}.`;
  diceRollPrevious = randomDiceNumber;

  if (randomDiceNumber == input) {
    myOutputValue += "<br>you win";
    winCounter += 1;
  } else {
    myOutputValue += "<br>you lose";
  }
  gameCounter += 1;
  winRate = (winCounter / gameCounter) * 100;
  myOutputValue += `<br>You win ${winRate.toFixed(2)}% of the time.`;
  return myOutputValue;
};

var counter1 = 0;
var counter2 = 0;
var counter3 = 0;
var counter4 = 0;
var counter5 = 0;
var counter6 = 0;

var counterDiceNumber = function (input) {
  if (input == 1) {
    counter1 += 1;
  } else if (input == 2) {
    counter2 += 1;
  } else if (input == 3) {
    counter3 += 1;
  } else if (input == 4) {
    counter4 += 1;
  } else if (input == 5) {
    counter5 += 1;
  } else if (input == 6) {
    counter6 += 1;
  }
  var mostRolled = mostRolledNumber(
    counter1,
    counter2,
    counter3,
    counter4,
    counter5,
    counter6
  );
  console.log(
    `${counter1}, ${counter2}, ${counter3}, ${counter4}, ${counter5}, ${counter6}`
  );
  return mostRolled;
};

var mostRolledNumber = function (
  counter1,
  counter2,
  counter3,
  counter4,
  counter5,
  counter6
) {
  var mostRolled = "";
  if (
    counter1 > counter2 &&
    counter1 > counter3 &&
    counter1 > counter4 &&
    counter1 > counter5 &&
    counter1 > counter6
  ) {
    mostRolled = `1 is your most rolled number.`;
  } else if (
    counter2 > counter1 &&
    counter2 > counter3 &&
    counter2 > counter4 &&
    counter2 > counter5 &&
    counter2 > counter6
  ) {
    mostRolled = `2 is your most rolled number.`;
  } else if (
    counter3 > counter1 &&
    counter3 > counter2 &&
    counter3 > counter4 &&
    counter3 > counter5 &&
    counter3 > counter6
  ) {
    mostRolled = `3 is your most rolled number.`;
  } else if (
    counter4 > counter1 &&
    counter4 > counter2 &&
    counter4 > counter3 &&
    counter4 > counter5 &&
    counter4 > counter6
  ) {
    mostRolled = `4 is your most rolled number.`;
  } else if (
    counter5 > counter1 &&
    counter5 > counter2 &&
    counter5 > counter3 &&
    counter5 > counter4 &&
    counter5 > counter6
  ) {
    mostRolled = `5 is your most rolled number.`;
  } else if (
    counter6 > counter1 &&
    counter6 > counter2 &&
    counter6 > counter3 &&
    counter6 > counter4 &&
    counter6 > counter5
  ) {
    mostRolled = `6 is your most rolled number.`;
  } else {
    mostRolled = `there is no most rolled number.`;
  }
  return mostRolled;
};

var mostRolledMain = function (input) {
  // Attempt the More Comfortable: Most Rolled exercise from the Program Lifecycle and State module below with mostRolledMain as the main function.

  var randomDiceNumber = rollDice();
  var mostRolled = counterDiceNumber(randomDiceNumber);
  var myOutputValue = `${mostRolled}<br>Your current dice roll is ${randomDiceNumber}. <br>You guessed ${input}.`;

  if (randomDiceNumber == input) {
    myOutputValue += "<br>you win";
    winCounter += 1;
  } else {
    myOutputValue += "<br>you lose";
  }

  return myOutputValue;
};

var guessingMain = function (input) {
  // Attempt the More Comfortable: Guessing exercise from the Program Lifecycle and State module below with guessingMain as the main function.
  var randomDiceNumber = rollDice();
  console.log(`the dice roll is ${randomDiceNumber}`);
  var myOutputValue = `Your current dice roll is ${randomDiceNumber}.`;

  if (randomDiceNumber == input) {
    myOutputValue += "<br>you win";
    score += 2;
    winCounter += 1;
  } else if (input == randomDiceNumber + 1 || input == randomDiceNumber - 1) {
    myOutputValue += "<br>you win";
    score += 1;
    winCounter += 1;
  } else {
    myOutputValue += "<br>you lose";
  }
  gameCounter += 1;
  winRate = (winCounter / gameCounter) * 100;
  myOutputValue += `<br>Your current score is ${score}. <br>You win ${winRate.toFixed(
    2
  )}% of the time.`;

  return myOutputValue;
};

var advancedGuessingMain = function (input) {
  // Attempt the More Comfortable: Advanced Guessing exercise from the Program Lifecycle and State module below with advancedGuessingMain as the main function.
  var randomDiceNumber = rollDice();
  console.log(`the dice roll is ${randomDiceNumber}`);
  var myOutputValue = `Your current dice roll is ${randomDiceNumber}.`;

  if (randomDiceNumber == input) {
    myOutputValue += "<br>you win";
    score += 5;
    winCounter += 1;
  } else if (input == randomDiceNumber + 1 || input == randomDiceNumber - 1) {
    myOutputValue += "<br>you win";
    score += 4;
    winCounter += 1;
  } else if (input == randomDiceNumber + 2 || input == randomDiceNumber - 2) {
    myOutputValue += "<br>you win";
    score += 3;
    winCounter += 1;
  } else if (input == randomDiceNumber + 3 || input == randomDiceNumber - 3) {
    myOutputValue += "<br>you win";
    score += 2;
    winCounter += 1;
  } else if (input == randomDiceNumber + 4 || input == randomDiceNumber - 4) {
    myOutputValue += "<br>you win";
    score += 1;
    winCounter += 1;
  } else {
    myOutputValue += "<br>you lose";
  }
  gameCounter += 1;
  winRate = (winCounter / gameCounter) * 100;
  myOutputValue += `<br>Your current score is ${score}. <br>You win ${winRate.toFixed(
    2
  )}% of the time.`;

  return myOutputValue;
};

var mode = "red";

var followAlongMain = function (input) {
  // Attempt the Follow Along exercise from the Program State for Game Modes module below with followAlongMain as the main function.
  if (input == "greenmode") {
    mode = "green";
  } else if (input == "bluemode") {
    mode = "blue";
  }

  var myOutputValue =
    "A fool sees not the same tree that a wise man sees. -William Blake";

  // reassign the value of myOutputValue is mode is at state 'blue'
  if (mode == "blue") {
    myOutputValue =
      "The sea, once it casts its spell, holds one in its net of wonder forever. -Jacques Cousteau";
  }

  return myOutputValue;
};

var redModeMain = function (input) {
  // Attempt the Red Mode exercise from the Program State for Game Modes module below with redModeMain as the main function.
  if (input == "greenmode") {
    mode = "green";
  } else if (input == "bluemode") {
    mode = "blue";
  } else if (input == `redmode`) {
    mode = "red";
  }

  var myOutputValue =
    "A fool sees not the same tree that a wise man sees. -William Blake";

  // reassign the value of myOutputValue is mode is at state 'blue'
  if (mode == "blue") {
    myOutputValue =
      "The sea, once it casts its spell, holds one in its net of wonder forever. -Jacques Cousteau";
  } else if (mode == `red`) {
    myOutputValue = `I see red`;
  }

  return myOutputValue;
};
