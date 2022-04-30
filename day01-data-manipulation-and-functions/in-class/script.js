var fahrenheitToCelsiusMain = function (input) {
  // Complete the Base: Fahrenheit to Celsius exercise below with fahrenheitToCelsiusMain as the main function.
  var farenheit = input;
  var celcius = ((farenheit - 32) * 5) / 9;
  return celcius;
};

var convertKmToMiles = function (distanceInKm) {
  var distanceInMiles = distanceInKm * 0.62;
  console.log(`${distanceInKm} in km = ${distanceInMiles} in miles`);
  return distanceInMiles;
};

var calculateTotalFuelCost = function (distanceInMiles) {
  // Some code that calculates total fuel cost
  //define cost of fuel per litre
  var costOfFuelOneLitre = 2.2;
  //define ferrari fuel economy
  var fuelEconomyFerrari = 9;
  //calculate cost of fuel
  var costOfFuel = (costOfFuelOneLitre / fuelEconomyFerrari) * distanceInMiles;
  console.log(
    `Cost of one mile in Ferrari = $${costOfFuelOneLitre / fuelEconomyFerrari}`
  );
  console.log(`Cost of Total Fuel Cost = $${costOfFuel}`);
  return costOfFuel;
};

var roadTripCostBaseMain = function (input) {
  // Complete the Base: Road Trip Cost exercise below with roadTripCostBaseMain as the main function.
  //call function to convert km to miles
  var distanceInMiles = convertKmToMiles(input);
  //call function to calculate fuel cost
  var costOfFuel = calculateTotalFuelCost(distanceInMiles);
  return costOfFuel;
};

var calculateTotalFuelCostForComfortable = function (
  distanceInMiles,
  CostPerLitre
) {
  // Some code that calculates total fuel cost
  //define fuel economy
  var fuelEconomy = 9;
  //calculate cost of fuel
  var costOfFuel = (CostPerLitre / fuelEconomy) * distanceInMiles;
  console.log(`Cost of one mile = $${CostPerLitre / fuelEconomy}`);
  console.log(`Cost of Total Fuel Cost = $${costOfFuel}`);
  return costOfFuel;
};

var roadTripCostComfortableMain = function (input) {
  // Complete the Comfortable: Road Trip Cost exercise below with roadTripCostComfortableMain as the main function.
  var distanceInMiles = convertKmToMiles(input);

  var costOfTrain = 2;
  var costOfFerrari = 2.2;

  var costOfFuelTrain = calculateTotalFuelCostForComfortable(
    distanceInMiles,
    costOfTrain
  );
  var costOfFuelFerrari = calculateTotalFuelCostForComfortable(
    distanceInMiles,
    costOfFerrari
  );
  var savings = costOfFuelFerrari - costOfFuelTrain;
  console.log(`savings = ${savings}`);
  return savings;
};

var iceMachineMain = function (input) {
  // Complete the More Comfortable: Ice Machine exercise below with iceMachineMain as the main function.
  // 1 cube = 1.5g
  var iceCube = 1.5;
  // 1 drinks = 4 ice cubes
  var drink = 4 * iceCube;
  // 1 guest = 2 drinks
  var iceOfOneGuest = 2 * drink; // 1 guest = 12g of ice
  // 1 g = 0.002205 lb
  var convertToPounds = iceOfOneGuest * 0.002205; // 1 guest = 0.026455 lb
  // 1 hour = 60 mins
  var hourToMin = 1 * 60;
  // 1 ice machine = 5 lbs per hour
  // 1 ice machine = 1 lb per 12 mins
  var timeOfOnePoundIce = hourToMin / 5;
  // input is number of guests
  var numOfGuests = input;
  // calculate how many pounds of ice is needed for guests
  var poundsOfIce = numOfGuests * convertToPounds;
  // calculate duration of ice machine by multiplying total pounds of ice with time taken to make one pound of ice
  var timeOfIceMachine = poundsOfIce * timeOfOnePoundIce;
  // return the duration in mins to two decimal places
  var myOutputValue = timeOfIceMachine.toFixed(2) + " mins";
  return myOutputValue;
};

var beerOrderMain = function (input) {
  // Complete the More Comfortable: Beer Order exercise below with beerOrderMain as the main function.
  // number of customers per day is the input
  // how many customers in one day?
  var numOfCustomers = input;
  // 1 customer = 2 pints
  // 1 keg = 124 pints
  // 1 keg = 62 customers
  // 1 customer = 1/62 kegs
  // what is the total number of kegs required in one day?
  var numOfKegsPerDay = (numOfCustomers * 1) / 62;
  // 1 quarter is 3 months = 90 days
  // output is number of kegs the bar needs per quarter
  var myOutputValue = numOfKegsPerDay * 90;
  return myOutputValue;
};

var cellularDataMain = function (input) {
  // Complete the More Comfortable: Cost of Cellular Data exercise below with cellularDataMain as the main function.
  //input is how many GB of data used
  var dataUsed = input;
  //19.99 for 50GB data
  //additional data used after 1st 50 will be a new 19.99 for 50GB data
  //determine how many sets of 50GB data is used
  var setsOf50GBData = Math.ceil(dataUsed / 50);
  //determine total cost of plan for the month
  var totalCost = setsOf50GBData * 19.99;
  //calculate total cost versus amount of data used
  var costPerGBUsed = totalCost / dataUsed;
  //output is how much they are paying per GB used
  var myOutputValue = "You are paying $" + costPerGBUsed.toFixed(2) + " per GB";
  return myOutputValue;
};
