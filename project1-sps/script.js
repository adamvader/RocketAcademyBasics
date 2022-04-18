var generateNumberForScissorsPaperStone = function (rigged = false) {
  //rig dice to return 1 in debug mode
  if (rigged) {
    console.log(`rigged dice, returning 1`);
    return 1;
  }

  // Generate a decimal from 0 through 3, inclusive of 0 and exclusive of 3.
  var randomDecimal = Math.random() * 3;

  // Remove the decimal with the floor operation.
  // This will be an integer from 0 to 2 inclusive.
  var randomInteger = Math.floor(randomDecimal);

  var randomNumber = randomInteger + 1;
  return randomNumber;
};

var generateScissorsPaperStone = function () {
  var randomNumber = generateNumberForScissorsPaperStone();
  if (randomNumber == 1) {
    return "scissors";
  } else if (randomNumber == 2) {
    return "paper";
  } else {
    return "stone";
  }
};

var matchNormalOptions = function (playerInput, randomOption) {
  var myOutputValue;
  if (playerInput == randomOption) {
    myOutputValue = `<br>Its a draw!`;
    drawCounter += 1;
  } else if (playerInput == `scissors` && randomOption == `paper`) {
    myOutputValue = `<br>You won!`;
    winCounter += 1;
  } else if (playerInput == `scissors` && randomOption == `stone`) {
    myOutputValue = `<br>You lost! Try again!`;
    loseCounter += 1;
  } else if (playerInput == `paper` && randomOption == `stone`) {
    myOutputValue = `<br>You won!`;
    winCounter += 1;
  } else if (playerInput == `paper` && randomOption == `scissors`) {
    myOutputValue = `<br>You lost! Try again!`;
    loseCounter += 1;
  } else if (playerInput == `stone` && randomOption == `scissors`) {
    myOutputValue = `<br>You won!`;
    winCounter += 1;
  } else if (playerInput == `stone` && randomOption == `paper`) {
    myOutputValue = `<br>You lost! Try again!`;
    loseCounter += 1;
  }

  return myOutputValue;
};

var matchReverseOptions = function (playerInput, randomOption) {
  var myOutputValue;
  if (playerInput == randomOption) {
    myOutputValue = `<br>Its a draw!`;
    drawCounter += 1;
  } else if (playerInput == `scissors` && randomOption == `paper`) {
    myOutputValue = `<br>You lost! Try again!`;
    loseCounter += 1;
  } else if (playerInput == `scissors` && randomOption == `stone`) {
    myOutputValue = `<br>You won!`;
    winCounter += 1;
  } else if (playerInput == `paper` && randomOption == `stone`) {
    myOutputValue = `<br>You lost! Try again!`;
    loseCounter += 1;
  } else if (playerInput == `paper` && randomOption == `scissors`) {
    myOutputValue = `<br>You won!`;
    winCounter += 1;
  } else if (playerInput == `stone` && randomOption == `scissors`) {
    myOutputValue = `<br>You lost! Try again!`;
    loseCounter += 1;
  } else if (playerInput == `stone` && randomOption == `paper`) {
    myOutputValue = `<br>You won!`;
    winCounter += 1;
  }

  return myOutputValue;
};

var optionDescription = function (playerInput) {
  var description = `waiting for input`;

  if (playerInput == `scissors`) {
    description = `✂️`;
  } else if (playerInput == `paper`) {
    description = `🗒`;
  } else if (playerInput == `stone`) {
    description = `🗻`;
  }
  return description;
};

var normalMode = function (input) {
  var playerInput = input;
  //randomly generate one of 3 options (scissors, paper, stone)
  var randomOption = generateScissorsPaperStone();

  //match agaisnt the player input to determine win/loss/draw
  //output is if the player won, lost or draw and what the generated output was
  if (
    playerInput == `paper` ||
    playerInput == `scissors` ||
    playerInput == `stone`
  ) {
    var inputDescription = optionDescription(playerInput);
    var myOutputValue =
      `You played ${playerInput}${inputDescription}. <br>Computer played ${randomOption}` +
      matchNormalOptions(playerInput, randomOption);
    totalGamesCounter += 1;
  } else if (input == `normal`) {
    gameMode = input;

    myOutputValue = `The game is now in ${gameMode} mode.`;
  } else if (input == `reverse`) {
    gameMode = input;

    myOutputValue = `The game is now in ${gameMode} mode.`;
  } else {
    var myOutputValue = `Error. Invalid input.`;
  }
  return myOutputValue;
};

var reverseMode = function (input) {
  var playerInput = input;
  //randomly generate one of 3 options (scissors, paper, stone)
  var randomOption = generateScissorsPaperStone();

  //match agaisnt the player input to determine win/loss/draw
  //output is if the player won, lost or draw and what the generated output was
  if (
    playerInput == `paper` ||
    playerInput == `scissors` ||
    playerInput == `stone`
  ) {
    var inputDescription = optionDescription(playerInput);
    var myOutputValue =
      `You played ${playerInput}${inputDescription}. <br>Computer played ${randomOption}` +
      matchReverseOptions(playerInput, randomOption);
    totalGamesCounter += 1;
  } else if (input == `normal`) {
    gameMode = input;

    myOutputValue = `The game is now in ${gameMode} mode.`;
  } else if (input == `reverse`) {
    gameMode = input;

    myOutputValue = `The game is now in ${gameMode} mode.`;
  } else {
    var myOutputValue = `Error. Invalid input.`;
  }
  return myOutputValue;
};

var gameMode = "waiting for user name";
var winCounter = 0;
var loseCounter = 0;
var drawCounter = 0;
var totalGamesCounter = 0;
var userName = ``;

var calculateWinRate = function () {
  var winRate = (winCounter / totalGamesCounter) * 100;
  var myOutputValue = `<br>Games won: ${winCounter}. <br>Games lost: ${loseCounter}. <br>Games ended in draw: ${drawCounter}. <br>You win ${winRate.toFixed(
    2
  )}% of the time.`;
  return myOutputValue;
};

var main = function (input) {
  //input is either scissors, paper or stone

  var myOutputValue = ``;
  //input username
  if (gameMode == `waiting for user name`) {
    userName = input;
    myOutputValue = `Hi, ${userName}. please choose a game mode: "normal" or "reverse"`;
    gameMode = `waiting for user input`;
  } else if (gameMode == "waiting for user input") {
    if (input == `normal` || input == `reverse`) {
      gameMode = input;

      myOutputValue = `The game is now in ${gameMode} mode.`;
    } else {
      myOutputValue = `This mode is invalid. Try either "normal" or "reverse" modes`;
    }
  } else if (gameMode == "normal") {
    myOutputValue +=
      normalMode(input) +
      `<br>${userName}, Your game stats are:` +
      calculateWinRate();
  } else if (gameMode == "reverse") {
    myOutputValue +=
      reverseMode(input) +
      `<br>${userName}, Your game stats are:` +
      calculateWinRate();
  }

  return myOutputValue;
};
