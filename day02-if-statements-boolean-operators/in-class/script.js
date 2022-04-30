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

var lucky11Main = function (input) {
  // Complete the Base: Lucky 11 exercise below with lucky11Main as the main function.

  //input is a number from the user

  //roll dice A
  var diceANumber = rollDice();
  console.log(`dice A is ${diceANumber}`);

  //roll dice B
  var diceBNumber = rollDice();
  console.log(`dice B is ${diceBNumber}`);

  //output is when one of the dice roll matches the input

  var myOutputValue = `Hello! your input was ${input}, and the anwers from Dice A is ${diceANumber} and the answer from Dice B is ${diceBNumber}`;
  //is Dice A or Dice B matching with the input?
  if (diceANumber == input || diceBNumber == input) {
    myOutputValue += ` Congratulations! your number was ${input} and matched one of the dice`;
  }
  //or if the total dice roll is 11
  else if (diceANumber + diceBNumber == 11) {
    myOutputValue += ` The total dice roll value is equals to 11, you won!`;
  }
  //losing condition
  else {
    myOutputValue += ` I'm sorry you lost, please try again :)`;
  }
  return myOutputValue;
};

var hawkerFoodCategorisationMain = function (input) {
  //filter user input by listed and non listed food
  var hawkerDish = input;
  var myOutputValue = `your input was ${input}`;
  //translate valid input base ingredient
  if (hawkerDish == `chicken rice` || hawkerDish == `nasi lemak`) {
    myOutputValue = `rice`;
  } else if (hawkerDish == "hokkien mee" || hawkerDish == `laksa`) {
    myOutputValue = "noodle";
  } else if (hawkerDish == `roti prata` || hawkerDish == `bak kut teh`) {
    myOutputValue = `other`;
  } else {
    myOutputValue = `your input is invalid`;
  }
  //output base ingredient based on user input

  return myOutputValue;
};

var generateNumber = function (rigged = false) {
  //rig dice to return 6 in debug mode
  if (rigged) {
    console.log(`rigged dice, returning 6`);
    return 1;
  }

  // Generate a decimal from 0 through 9, inclusive of 0 and exclusive of 9.
  var randomDecimal = Math.random() * 10;

  // Remove the decimal with the floor operation.
  // This will be an integer from 0 to 9 inclusive.
  var randomNumber = Math.floor(randomDecimal);

  return randomNumber;
};

var fourDSingleDigitMain = function (input) {
  // Complete the Comfortable: 4D with Single-Digit Comparison exercise below with fourDSingleDigitMain as the main function.
  //input is a number
  var playerNumber = input;
  //generate 4 random digits
  var digit1 = generateNumber();
  var digit2 = generateNumber();
  var digit3 = generateNumber();
  var digit4 = generateNumber();
  var sumTotal = digit1 * 1000 + digit2 * 100 + digit3 * 10 + digit4;
  var myOutputValue = `Your input is ${playerNumber}. the 4D is ${sumTotal}.`;
  //output the win/loss result, the player's input, all randomly-generated digits
  if (
    playerNumber == digit1 ||
    playerNumber == digit2 ||
    playerNumber == digit3 ||
    playerNumber == digit4
  ) {
    myOutputValue += ` You won!`;
  } else {
    myOutputValue += `Your number did not match any of the 4D, Try again.`;
  }

  return myOutputValue;
};

var generateNumberForHawker = function (rigged = false) {
  //rig dice to return 1 in debug mode
  if (rigged) {
    console.log(`rigged dice, returning 1`);
    return 1;
  }

  // Generate a decimal from 0 through 6, inclusive of 0 and exclusive of 6.
  var randomDecimal = Math.random() * 6;

  // Remove the decimal with the floor operation.
  // This will be an integer from 0 to 5 inclusive.
  var randomInteger = Math.floor(randomDecimal);

  var randomNumber = randomInteger + 1;
  console.log(`random generated number is ${randomNumber}`);
  return randomNumber;
};

var randomDish = function (randomNumber) {
  var dish;
  if (randomNumber == 1) {
    dish = "chicken rice";
  } else if (randomNumber == 2) {
    dish = "roti prata";
  } else if (randomNumber == 3) {
    dish = `nasi lemak`;
  } else if (randomNumber == 4) {
    dish = `hokkien mee`;
  } else if (randomNumber == 5) {
    dish = "bak kut teh";
  } else if (randomNumber == 6) {
    dish = `laksa`;
  }

  return dish;
};

var hawkerFoodRandomnessMain = function (input) {
  // Complete the Comfortable: Hawker Food Randomness exercise below with hawkerFoodRandomnessMain as the main function.
  //input is dish names
  var customerDish = input;
  //generate random dish
  var randomNumber = generateNumberForHawker();

  var randomHawkerDish = randomDish(randomNumber);
  var myOutputValue = `Your guess is ${customerDish}. Uncle Hawker cooked ${randomHawkerDish}.`;
  if (customerDish == randomHawkerDish) {
    myOutputValue += ` You are correct! You get a FREE MEAL!`;
  } else {
    myOutputValue += `Your guess is wrong. Try again.`;
  }

  //output is a random dish, if user input matches random dish they get free meal

  return myOutputValue;
};

var fourDWinningRangeMain = function (input) {
  // Complete the More Comfortable: 4D with Winning Range exercise below with fourDWinningRangeMain as the main function.
  var playerNumber = input;
  //generate 4 random digits
  var digit1 = generateNumber();
  var digit2 = generateNumber();
  var digit3 = generateNumber();
  var digit4 = generateNumber();
  var sumTotal = digit1 * 1000 + digit2 * 100 + digit3 * 10 + digit4;
  var myOutputValue = `Your input is ${playerNumber}. the 4D is ${sumTotal}.`;
  var difference = sumTotal - input;
  //output the win/loss result, the player's input, all randomly-generated digits
  if (Math.abs(difference) <= 1000) {
    myOutputValue += ` You won!`;
  } else {
    myOutputValue += `Your number was out of range, Try again.`;
  }

  return myOutputValue;
};

var generateNumberForOmakase = function (rigged = false) {
  //rig dice to return 1 in debug mode
  if (rigged) {
    console.log(`rigged dice, returning 1`);
    return 1;
  }

  // Generate a decimal from 0 through 4, inclusive of 0 and exclusive of 4.
  var randomDecimal = Math.random() * 4;

  // Remove the decimal with the floor operation.
  // This will be an integer from 0 to 3 inclusive.
  var randomInteger = Math.floor(randomDecimal);

  var randomNumber = randomInteger + 1;
  return randomNumber;
};

var randomOmakaseRice = function (randomNumber) {
  var dish;
  if (randomNumber == 1) {
    dish = `chicken rice`;
  } else if (randomNumber == 2) {
    dish = `nasi lemak`;
  } else if (randomNumber == 3) {
    dish = `bak kut teh`;
  } else {
    dish = `roti prata`;
  }
  return dish;
};

var randomOmakaseNoodle = function (randomNumber) {
  var dish;
  if (randomNumber == 1) {
    dish = "hokkien mee";
  } else if (randomNumber == 2) {
    dish = `laksa`;
  } else if (randomNumber == 3) {
    dish = `beef hor fun`;
  } else {
    dish = `roti prata`;
  }
  return dish;
};

var dishDescription = function (dish) {
  var description = `Error.`;
  if (dish == "nasi lemak") {
    description = ` a coconut rice dish with chicken wing, ikan bilis and egg.`;
  } else if (dish == "chicken rice") {
    description = ` a savoury rice dish with roasted chicken and cucumber.`;
  } else if (dish == `bak kut teh`) {
    description = ` a Chinese soup popularly served in Singapore with rice and its name literally translates as "meat bone tea".`;
  } else if (dish == `hokkien mee`) {
    description = ` a popular hawker favourite, fried prawn noodles.`;
  } else if (dish == `laksa`) {
    description = ` a spicy broth of prawn, fish cake and noodles.`;
  } else if (dish == `beef hor fun`) {
    description = ` a wide noodle dish cooked with beef and veggies`;
  } else if (dish == `roti prata`) {
    description = ` an all day favourite dish from india, fried and crispy dough served with curry`;
  } else {
    description += ` Invalid input`;
  }
  return description;
};

var createMenuFromDish = function (dish1, dish2) {
  // first line
  var menu = `<br><br>Uncle has prepared a selection of dishes for you!`;
  //generate dish description
  var dish1Description = dishDescription(dish1);
  var dish2Description = dishDescription(dish2);
  // second line
  menu += `<br><br>To begin, ${dish1}${dish1Description}`;
  //third line
  menu += `<br><br>This will be followed by, ${dish2}${dish2Description}`;
  if (
    dish1 == `nasi lemak` ||
    dish2 == `nasi lemak` ||
    dish1 == `hokkien mee` ||
    dish2 == `hokkien mee`
  ) {
    menu += `<br><br>Chilli sambal will be included.`;
  }
  return menu;
};

var hawkerFoodOmakaseMain = function (input) {
  // Complete the More Comfortable: Hawker Food Omakase exercise below with hawkerFoodOmakaseMain as the main function.
  //input is rice or noodle
  var base = input;
  var myOutputValue = `You chose ${base}.`;
  //generate 2 random rice or noodle based on input
  var randomNumber1 = generateNumberForOmakase();
  var randomNumber2 = generateNumberForOmakase();
  console.log(
    `Random Number 1 is ${randomNumber1}. Random number 2 is ${randomNumber2}`
  );

  if (base == `rice`) {
    var dish1 = randomOmakaseRice(randomNumber1);
    var dish2 = randomOmakaseRice(randomNumber2);
  } else if (base == `noodle`) {
    var dish1 = randomOmakaseNoodle(randomNumber1);
    var dish2 = randomOmakaseNoodle(randomNumber2);
  } else {
    myOutputValue = `${base} is an invalid input. Please choose either "rice" or "noodle".`;
    return myOutputValue;
  }
  //output is 2 random rice or noodle, sometimes it can replace one of the outputs with roti prata, Chilli sambal included for select dishes
  var menu = createMenuFromDish(dish1, dish2);
  myOutputValue += menu;
  return myOutputValue;
};
