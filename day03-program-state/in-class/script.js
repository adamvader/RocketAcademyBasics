var generateRandomNumber = function (rigged = false) {
  if (rigged) {
    console.log(`rigged dice, returning 1`);
    return 1;
  }
  // produces a decimal between 0 and 3
  var randomDecimal = Math.random() * 3;

  // take off the decimal
  var randomInteger = Math.floor(randomDecimal);

  // it's a number from 0 - 2 ... add 1
  var randomNumber = randomInteger + 1;

  return randomNumber;
};

var generateSecretWord = function () {
  var randomNumber = generateRandomNumber();
  if (randomNumber == 1) {
    return `banana`;
  } else if (randomNumber == 2) {
    return `chisel`;
  } else {
    return `faucet`;
  }
};

var generateRandomNumber4 = function () {
  // produces a decimal between 0 and 4
  var randomDecimal = Math.random() * 4;

  // take off the decimal
  var randomInteger = Math.floor(randomDecimal);

  // it's a number from 0 - 3 ... add 1
  var randomNumber = randomInteger + 1;

  return randomNumber;
};

var winCounter = 0;

var secretWordBaseMain = function (input) {
  // Complete the Base: Secret Word exercise below with secretWordBaseMain as the main function.
  //input is a word
  var playerWord = input;
  //generate secret word from 3 words
  var secretWord = generateSecretWord();

  var myOutputValue = `Your guess is ${playerWord}. <br>The secret word is ${secretWord}.`;

  //match player word against generated word
  if (playerWord == secretWord) {
    winCounter += 1;
    myOutputValue += `<br>Your guess is correct.`;
  } else {
    myOutputValue += `<br> Try again`;
  }
  //output is:
  //1. guessed word
  //2. the secret word
  //3. how many more guesses til win
  //4. if win, print win
  var guessLeft = 2 - winCounter;
  if (guessLeft == 0) {
    myOutputValue += `You win!`;
    winCounter = 0;
  } else {
    myOutputValue += `<br>You have ${guessLeft} more guess to win`;
  }

  return myOutputValue;
};

var secretWordTwiceRowMain = function (input) {
  // Complete the Comfortable: Secret Word Twice in a Row exercise below with secretWordTwiceRowMain as the main function.
  var playerWord = input;
  //generate secret word from 3 words
  var secretWord = generateSecretWord();

  var myOutputValue = `Your guess is ${playerWord}. <br>The secret word is ${secretWord}.`;

  //match player word against generated word
  if (playerWord == secretWord) {
    winCounter += 1;
    myOutputValue += `<br>Your guess is correct.`;
  } else {
    myOutputValue += `<br> Try again`;
    winCounter = 0;
  }
  //output is:
  //1. guessed word
  //2. the secret word
  //3. how many more guesses til win
  //4. if win, print win
  var guessLeft = 2 - winCounter;
  if (guessLeft == 0) {
    myOutputValue += `You win!`;
    winCounter = 0;
  } else {
    myOutputValue += `<br>You have ${guessLeft} more guess to win`;
  }

  return myOutputValue;
};

var roundReset = 0;
var guessNumber = 1;
var previousSecretWord = ``;
var secretWord = ``;

var secretWordXRowMain = function (input) {
  // Complete the Comfortable: Secret Word X in a Row exercise below with secretWordXRowMain as the main function.
  var playerWord = input;
  console.log(`previous is ${previousSecretWord}.`);
  //generate secret word from 3 words
  while (previousSecretWord == secretWord) {
    secretWord = generateSecretWord();
  }
  previousSecretWord = secretWord;
  console.log(`current is ${secretWord}`);

  var myOutputValue = `Your guess is ${playerWord}. <br>The secret word is ${secretWord}.`;
  if (roundReset == 0) {
    guessNumber = generateRandomNumber4();
  }
  console.log(`number of guesses is ${guessNumber}`);
  //match player word against generated word
  if (playerWord == secretWord) {
    winCounter += 1;
    myOutputValue += `<br>Your guess is correct.`;
  } else {
    myOutputValue += `<br> Try again`;
    winCounter = 0;
  }
  //output is:
  //1. guessed word
  //2. the secret word
  //3. how many more guesses til win
  //4. if win, print win

  var guessLeft = guessNumber - winCounter;
  if (guessLeft == 0) {
    myOutputValue += `You win!`;
    winCounter = 0;
    roundReset = 0;
  } else {
    myOutputValue += `<br>You have ${guessLeft} more guess to win`;
    roundReset = 1;
  }
  console.log(`round reset counter is ${roundReset}`);
  return myOutputValue;
};

var rollDice = function () {
  // produces a decimal between 0 and 6
  var randomDecimal = Math.random() * 6;

  // take off the decimal
  var randomInteger = Math.floor(randomDecimal);

  // it's a number from 0 - 5 ... add 1
  var diceNumber = randomInteger + 1;

  return diceNumber;
};

var withInNumber = function () {
  var randomNumber = generateRandomNumber() - 1;
  return randomNumber;
};

var diceWithinMain = function (input) {
  // Complete the More Comfortable: Dice Within exercise below with diceWithinMain as the main function.
  var randomDiceNumber = rollDice();
  var myOutputValue = `You just rolled a ${randomDiceNumber}! <br>Your guess was ${input}.`;
  var wINumber = withInNumber();
  console.log(`within number is ${wINumber}`);
  if (
    input <= randomDiceNumber + wINumber &&
    input >= randomDiceNumber - wINumber
  ) {
    myOutputValue += `You win!`;
  } else {
    // Personalise the output
    myOutputValue += " You lose! Try again!";
  }
  // Return and print output.
  return myOutputValue;
};

var diceWithin2DiceMain = function (input) {
  // Complete the More Comfortable: Dice Within with 2 Dice exercise below with diceWithin2DiceMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var dice4DMain = function (input) {
  // Complete the More Comfortable: Dice 4D exercise below with dice4DeMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var secretWordTwice2Main = function (input) {
  // Complete the More Comfortable: Secret Word Twice in a Row 2 exercise below with secretWordTwice2Main as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
