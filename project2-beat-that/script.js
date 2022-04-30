//2 players
//each player rolls 2 dice
//players can choose which dice number is the first digit
//app will concatenate the dice roll numbers and store the value
//app will compare players stored values, winner is the higher value

//global variables
var GAME_STATE = `GENERATE_P1_DICE_NUMBERS`;
var p1Dice1 = 0;
var p1Dice2 = 0;
var p1DiceTotal = 0;
var p2Dice1 = 0;
var p2Dice2 = 0;
var p2DiceTotal = 0;

//helper function to generate a dice roll number from 1 to 6
var rollDice = function (rigged = false) {
  if (rigged) {
    console.log(`rigged dice, returning 1`);
    return 1;
  }
  //Generate a decimal from 0 to 5
  var randomDecimal = Math.random() * 6;
  //remove the decimal and store only the integer value from 0 to 5
  var randomInteger = Math.floor(randomDecimal);
  //add 1 to the integer so that output valudicees are 1 to 6
  var diceNumber = randomInteger + 1;
  //output the dice number
  return diceNumber;
};

//helper function for generating and storing dice values for player 1
var generateP1DiceNumbers = function () {
  p1Dice1 = rollDice();
  p1Dice2 = rollDice();
  GAME_STATE = `AWAITING_P1_CHOICE_OF_DICE`;
  var myOutputValue = `<br><br>Dice 1 rolled a ${p1Dice1}. <br>Dice 2 rolled a ${p1Dice2}. <br><br>Type "1" or "2" to choose a dice to to be the first digit.`;
  return myOutputValue;
};

//helper function for generating and storing dice values for player 2
var generateP2DiceNumbers = function () {
  p2Dice1 = rollDice();
  p2Dice2 = rollDice();
  GAME_STATE = `AWAITING_P2_CHOICE_OF_DICE`;
  var myOutputValue = `<br><br>Dice 1 rolled a ${p2Dice1}. <br>Dice 2 rolled a ${p2Dice2}. <br><br>Type "1" or "2" to choose a dice to to be the first digit.`;
  return myOutputValue;
};

//helper function to concatenate dice roll numbers for player 1
var addP1DiceNumber = function (input) {
  if (input == 1) {
    p1DiceTotal = p1Dice1 * 10 + p1Dice2;
    var myOutputValue = `<br><br>Total dice is ${p1DiceTotal}. <br><br>Click the submit button to end your turn and pass on the controls to Player 2`;
    GAME_STATE = `HOLDING_FOR_P2`;
  } else if (input == 2) {
    p1DiceTotal = p1Dice2 * 10 + p1Dice1;
    myOutputValue = `<br><br>Total dice is ${p1DiceTotal}. <br><br>Click the submit button to end your turn and pass on the controls to Player 2`;
    GAME_STATE = `HOLDING_FOR_P2`;
  } else {
    myOutputValue = `<br><br>Dice 1 was a ${p1Dice1}. <br>Dice 2 was a ${p1Dice2}. <br><br>Invalid input. Choose "1" or "2".`;
  }
  return myOutputValue;
};

//helper function to concatenate dice roll numbers for player 2
var addP2DiceNumber = function (input) {
  if (input == 1) {
    p2DiceTotal = p2Dice1 * 10 + p2Dice2;
    var myOutputValue = `<br><br>Total dice is ${p2DiceTotal}. <br><br>Click on the submit button to find out who won!`;
    GAME_STATE = `FINAL_COMPARISON`;
  } else if (input == 2) {
    p2DiceTotal = p2Dice2 * 10 + p2Dice1;
    myOutputValue = `<br><br>Total dice is ${p2DiceTotal}. <br><br>Click on the submit button to find out who won!`;
    GAME_STATE = `FINAL_COMPARISON`;
  } else {
    myOutputValue = `<br><br>Dice 1 was a ${p2Dice1}. <br>Dice 2 was a ${p2Dice2}. <br><br>Invalid input. Choose "1" or "2".`;
  }
  return myOutputValue;
};

//helper function to compare dice roll values
var compareDiceNumbers = function () {
  if (p1DiceTotal > p2DiceTotal) {
    var myOutputValue = `Player 1: ${p1DiceTotal}. <br>Player 2: ${p2DiceTotal}. <br><br>Player 1 wins!`;
  } else if (p2DiceTotal > p1DiceTotal) {
    myOutputValue = `Player 1: ${p1DiceTotal}. <br>Player 2: ${p2DiceTotal}. <br><br>Player 2 wins!`;
  } else {
    myOutputValue = `Player 1: ${p1DiceTotal}. <br>Player 2: ${p2DiceTotal}. <br><br>Its a draw!`;
  }
  GAME_STATE = `GENERATE_P1_DICE_NUMBERS`;
  return myOutputValue;
};

var main = function (input) {
  var myOutputValue = ``;
  if (GAME_STATE == `GENERATE_P1_DICE_NUMBERS`) {
    myOutputValue = `Player 1` + generateP1DiceNumbers();
  } else if (GAME_STATE == `AWAITING_P1_CHOICE_OF_DICE`) {
    myOutputValue = `Player 1` + addP1DiceNumber(input);
  } else if (GAME_STATE == `HOLDING_FOR_P2`) {
    myOutputValue = `Player 2 <br><br>Click on the submit button to generate your dice rolls.`;
    GAME_STATE = `GENERATE_P2_DICE_NUMBERS`;
    return myOutputValue;
  } else if (GAME_STATE == `GENERATE_P2_DICE_NUMBERS`) {
    myOutputValue = `Player 2` + generateP2DiceNumbers();
  } else if (GAME_STATE == `AWAITING_P2_CHOICE_OF_DICE`) {
    myOutputValue = `Player 2` + addP2DiceNumber(input);
  } else if (GAME_STATE == `FINAL_COMPARISON`) {
    myOutputValue =
      compareDiceNumbers() +
      `<br><br>Click on the submit button to start the game again.`;
  }
  return myOutputValue;
};
