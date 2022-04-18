var computeAreaOfCircle = function () {
  var pi = 3.14;
  var radius = 6;
  var area = pi * radius * radius;

  console.log("the area of the circle is " + area + ".");

  return area;
};

var repeatTheInput = function (input) {
  console.log("1" + input);
  console.log("2" + input);
  console.log("7" + input);
};

var main = function (input) {
  console.log("i love meat");
  var area = computeAreaOfCircle();

  var myOutputValue = "i love veggies.";

  repeatTheInput(input);

  var additionalLog = "i love " + input + " too!";
  console.log(additionalLog);
  return myOutputValue;
};

var greeting = function (name) {
  return (
    "Hello " +
    name +
    "! Wow, " +
    name +
    " is a great name. I love " +
    name +
    "!"
  );
};

var greetingMain = function (input) {
  // Attempt the Greeting Program exercise from the Our First Program module below with greetingMain as the main function.
  var myOutputValue = greeting(input);
  return myOutputValue;
};

var metricMain = function (input) {
  // Attempt the Metric Conversion Program exercise from the Our First Program module below with metricMain as the main function.
  var distanceInMiles = input * 0.62;
  var myOutputValue =
    "You input " +
    input +
    " miles. " +
    input +
    " miles is equal to " +
    distanceInMiles +
    " kilometres.";
  return myOutputValue;
};

var convertKmToMiles = function (distanceInKm) {
  var distanceInMiles = distanceInKm * 0.62;
  return distanceInMiles;
};

var functionsExampleMain = function (input) {
  // Attempt the Base: Run Example Code exercise from the Functions I module below with functionsExampleMain as the main function.
  var myOutputValue =
    "You input " +
    input +
    " miles. " +
    input +
    " miles is equal to " +
    convertKmToMiles(input) +
    " kilometres.";
  return myOutputValue;
};

var speedTrain2 = function (delayInMins) {
  //distance to tokyo calculated by using formula (dist = speed x time) taking train1 speed 200kph multiply by 2hrs which equals 400km.
  var distanceToTokyo = 400;
  //convert 2hrs to 120mins. take 120mins minus the time delayed and divide by 60 to convert the value to hours.
  var timeForTravel = (120 - delayInMins) / 60;
  //speed of train 2 calculated using formula (dist = speed x time) rearranged as (speed = distance / time).
  var train2 = distanceToTokyo / timeForTravel;
  return train2.toFixed(2);
};

var trainSpeedMain = function (input) {
  // Attempt the Comfortable: Train Speed exercise from the Functions I module below with trainSpeedMain as the main function.
  //using if else function to give different responses based on the time of delay
  if (input >= 120) {
    var myOutputValue =
      "Train 2 was delayed by " +
      input +
      " mins. Train 1 has arrived at Tokyo. Train 2 will not be able to reach Tokyo at the same time as Train 1.";
    return myOutputValue;
  } else {
    var myOutputValue =
      "Train 2 was delayed by " +
      input +
      " mins. It will need to travel at " +
      speedTrain2(input) +
      " kph in order to reach Tokyo at the same time as Train 1.";
    return myOutputValue;
  }
};

var clockMain = function (input) {
  // Attempt the More Comfortable: Clock exercise from the Functions I module below with clockMain as the main function.
  // breakdown input to determine hour and mins
  var numHour = 1 + input / 60;
  var mins = input % 60;

  //determine angle of hour hand
  //1 hour = 360deg / 12h = 30deg
  var angleHour = numHour * 30;

  //determine angle of min hand
  //1 min = 360deg / 60mins = 6deg
  var angleMin = mins * 6;
  //determine angle of min hand vs hour hand
  var angleMinFromHour = angleMin - angleHour;
  var myOutputValue = angleMinFromHour;

  //using an if else function to convert negative numbers to positive as we just want to know the angle.
  if (angleMinFromHour < 0) {
    return -myOutputValue;
  } else {
    return myOutputValue;
  }
};
