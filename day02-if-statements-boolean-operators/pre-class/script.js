//computeAreaOfCircle
//compute the area of a triangle

var computeAreaOfTriangle = function (base, height) {
  //take the input and compute the area of a triangle
  var area = (base * height) / 2;
  //output the area
  return area;
};

//jobApplication

var generatePushyJobApplication = function (
  jobTitle,
  companyName,
  desiredAnnualSalary
) {
  //construct a message
  var message = `to whom it may concern at ${companyName}. I want a job right now. Please hire me for the position of ${jobTitle}. I want to be paid $${desiredAnnualSalary}. This comes out to ${
    desiredAnnualSalary / 12
  }`;
  //output the message
  return message;
};

var generateNumOfOranges = function (guests, glassesPerGuest) {
  //calculate total number of glasses
  var numOfGlasses = guests * glassesPerGuest;
  //one glass = 4 oranges
  var oneGlass = 4;
  //calculate total number of oranges
  var numOfOranges = numOfGlasses * oneGlass;
  return numOfOranges;
};

var orangeJuiceMain = function (input) {
  // Attempt the Orange Juice Calculator exercise from the Functions II module below with orangeJuiceMain as the main function.
  //declare input as total number of guests
  var numOfGuests = input;
  //declare one guest drinks 2 glasses
  var glassesPerGuest = 2;
  //call function to generate total number of Oranges
  var numOfOranges = generateNumOfOranges(numOfGuests, glassesPerGuest);
  return numOfOranges;
};

var generatePriceOfPaint = function (
  dollarAmountOfPaint,
  numOfRooms,
  numOfCoats
) {
  console.log("computing price of paint");
  //each room area = 3m x 3m
  var areaOfRoom = 3 * 3;
  console.log(`area of room is ${areaOfRoom}`);
  //calculate total area to be painted
  var totalArea = areaOfRoom * numOfRooms;
  //declare paint cover 300 square metres per litre
  var paintCoverage = 300;
  //calculate total paint required
  var totalPaint = (totalArea / paintCoverage) * numOfCoats;
  //calculate total cost of Paint
  var totalCostOfPaint = totalPaint * dollarAmountOfPaint;
  //output the total cost of paint
  return totalCostOfPaint;
};

var paintMain = function (input) {
  // Attempt the House Paint exercise from the Functions II module below with paintMain as the main function.
  //declare number of rooms in house
  var numOfRooms = 6;
  //declare number of coats
  var numOfCoats = 2;
  //call function to generate price of paint
  var totalCostOfPaint = generatePriceOfPaint(input, numOfRooms, numOfCoats);
  console.log("price of paint computed and output");
  return totalCostOfPaint;
};

var rollDice = function (rigged = false) {
  //rig dice to return 6 in debug mode
  if (rigged) {
    console.log(`rigged dice, returning 6`);
    return 1;
  }

  // Generate a decimal from 0 through 6, inclusive of 0 and exclusive of 6.
  var randomDecimal = Math.random() * 6;

  // Remove the decimal with the floor operation.
  // This will be an integer from 0 to 5 inclusive.
  var randomInteger = Math.floor(randomDecimal);

  // Add 1 to get valid dice rolls of 1 through 6 inclusive.
  var diceNumber = randomInteger + 1;

  return diceNumber;
};

var randomDiceMain = function (input) {
  // Generate a random dice number
  var randomDiceNumber1 = rollDice(true);
  var randomDiceNumber2 = rollDice(true);

  var myOutputValue = `Your guess was ${input}. You just rolled a ${randomDiceNumber1} and a ${randomDiceNumber2}!`;

  var difference1 = input - randomDiceNumber1;
  var difference2 = input - randomDiceNumber2;
  console.log(
    `the difference for dice 1 is ${difference1}. difference for dice 2 is ${difference2}`
  );

  var matchedFirstRoll = Math.abs(difference1) <= 1;
  var matchedSecondRoll = Math.abs(difference2) <= 1;
  var gotSnakeEyes = randomDiceNumber1 == 1 && randomDiceNumber2 == 1;

  if (matchedFirstRoll || matchedSecondRoll || gotSnakeEyes) {
    myOutputValue += " You Win!";
  } else {
    // Personalise the output
    myOutputValue += " You lose! Try again!";
  }
  // Return and print output.
  return myOutputValue;
};

var secretPhraseMain = function (input) {
  // Attempt the Secret Phrase exercise from the If, Else, Else If module below with secretPhraseMain as the main function.
  // Set a default value for myOutputValue
  var myOutputValue = "the door shall not open!";
  // If input is our secret phrase, change the value of myOutputValue
  if (
    input == "palatable papaya" ||
    input == "neat noodles" ||
    input == "awesome ayam" ||
    input == "delicious dumplings"
  ) {
    myOutputValue = "you wrote the secret phrase!";
  } else if (input == "not so palatable papaya") {
    myOutputValue += " you are so close!";
  } else {
    myOutputValue += " nope, this is far from the right phrase.";
  }
  // return myOutputValue as output
  return myOutputValue;
};

var diceGameMain = function (input) {
  // Attempt the Dice Game exercise from the If, Else, Else If module below with diceGameMain as the main function.
  var randomDiceNumber = rollDice();
  var myOutputValue =
    "You just rolled a " + randomDiceNumber + "! Your guess was " + input + ".";

  //Winnging Conditions
  //guess input is odd or even, the user wins when the dice roll matches the input
  //determine if diceroll is odd or even
  if (randomDiceNumber % 2 == 0) {
    var diceRoll = "even";
  } else {
    var diceRoll = "odd";
  }
  console.log(`diceRoll is ${diceRoll}`);

  if (diceRoll == input || input == "palatable papaya") {
    myOutputValue += " You Win!";
  } else {
    // Personalise the output
    myOutputValue += " You lose! Try again!";
  }
  // Return and print output.
  return myOutputValue;
};

var twiceGuessMain = function (input) {
  // Attempt the Twice the Guess exercise from the If, Else, Else If module below with twiceGuessMain as the main function.
  var randomDiceNumber = rollDice();
  var myOutputValue =
    "You just rolled a " + randomDiceNumber + "! Your guess was " + input + ".";
  if (input < 1 || input > 3) {
    myOutputValue =
      "Your guess was invalid, please try a number between 1 and 3.";
  } else if (randomDiceNumber == input * 2) {
    myOutputValue = myOutputValue + " You Win!";
  } else {
    // Personalise the output
    myOutputValue += " You lose! Try again!";
  }
  // Return and print output.
  return myOutputValue;
};
