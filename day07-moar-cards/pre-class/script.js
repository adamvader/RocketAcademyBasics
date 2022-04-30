// Initialise the card deck representation as an array of objects
var cardDeck = [
  {
    rank: 1,
    suit: "heart",
    name: "ace"
  },
  {
    rank: 2,
    suit: "heart",
    name: "two"
  },
  {
    rank: 3,
    suit: "heart",
    name: "three"
  },
  {
    rank: 4,
    suit: "heart",
    name: "four"
  },
  {
    rank: 5,
    suit: "heart",
    name: "five"
  },
  {
    rank: 6,
    suit: "heart",
    name: "six"
  },
  {
    rank: 7,
    suit: "heart",
    name: "seven"
  },
  {
    rank: 8,
    suit: "heart",
    name: "eight"
  },
  {
    rank: 9,
    suit: "heart",
    name: "nine"
  },
  {
    rank: 10,
    suit: "heart",
    name: "ten"
  },
  {
    rank: 11,
    suit: "heart",
    name: "jack"
  },
  {
    rank: 12,
    suit: "heart",
    name: "queen"
  },
  {
    rank: 13,
    suit: "heart",
    name: "king"
  }
];

// Get a random index ranging from 0 (inclusive) to max (exclusive).
var getRandomIndex = function (max) {
  return Math.floor(Math.random() * max);
};

// Shuffle the elements in the cardDeck array
var shuffleCards = function (cardDeck) {
  // Loop over the card deck array once
  var currentIndex = 0;
  while (currentIndex < cardDeck.length) {
    // Select a random index in the deck
    var randomIndex = getRandomIndex(cardDeck.length);
    // Select the card that corresponds to randomIndex
    var randomCard = cardDeck[randomIndex];
    // Select the card that corresponds to currentIndex
    var currentCard = cardDeck[currentIndex];
    // Swap positions of randomCard and currentCard in the deck
    cardDeck[currentIndex] = randomCard;
    cardDeck[randomIndex] = currentCard;
    // Increment currentIndex
    currentIndex = currentIndex + 1;
  }
  // Return the shuffled deck
  return cardDeck;
};

var followObjectsMain = function (input) {
  // Attempt the Follow Along exercise from the Objects module below with followObjectsMain as the main function.

  // Initialise index to 0 to start from the beginning of the array
  var index = 0;
  // Define loop condition to loop until index is the length of cardDeck
  for (var index = 0; index < cardDeck.length; index += 1) {
    // Access attributes of each card with dot notation.
    console.log(cardDeck[index].name);
    // Construct a string using attributes of each card object
    var cardTitle = cardDeck[index].name + " of " + cardDeck[index].suit;
    // Log the string
    console.log(cardTitle);
    // Increment the card index
  }
};

var deck = [
  {
    name: "ace",
    suit: "hearts",
    rank: 1
  },
  {
    name: "2",
    suit: "hearts",
    rank: 2
  },
  {
    name: "3",
    suit: "hearts",
    rank: 3
  },
  {
    name: "4",
    suit: "hearts",
    rank: 4
  },
  {
    name: "5",
    suit: "hearts",
    rank: 5
  },
  {
    name: "6",
    suit: "hearts",
    rank: 6
  },
  {
    name: "7",
    suit: "hearts",
    rank: 7
  },
  {
    name: "8",
    suit: "hearts",
    rank: 8
  },
  {
    name: "9",
    suit: "hearts",
    rank: 9
  },
  {
    name: "10",
    suit: "hearts",
    rank: 10
  },
  {
    name: "jack",
    suit: "hearts",
    rank: 11
  },
  {
    name: "queen",
    suit: "hearts",
    rank: 12
  },
  {
    name: "king",
    suit: "hearts",
    rank: 13
  },
  {
    name: "ace",
    suit: "diamonds",
    rank: 1
  },
  {
    name: "2",
    suit: "diamonds",
    rank: 2
  },
  {
    name: "3",
    suit: "diamonds",
    rank: 3
  },
  {
    name: "4",
    suit: "diamonds",
    rank: 4
  },
  {
    name: "5",
    suit: "diamonds",
    rank: 5
  },
  {
    name: "6",
    suit: "diamonds",
    rank: 6
  },
  {
    name: "7",
    suit: "diamonds",
    rank: 7
  },
  {
    name: "8",
    suit: "diamonds",
    rank: 8
  },
  {
    name: "9",
    suit: "diamonds",
    rank: 9
  },
  {
    name: "10",
    suit: "diamonds",
    rank: 10
  },
  {
    name: "jack",
    suit: "diamonds",
    rank: 11
  },
  {
    name: "queen",
    suit: "diamonds",
    rank: 12
  },
  {
    name: "king",
    suit: "diamonds",
    rank: 13
  },
  {
    name: "ace",
    suit: "clubs",
    rank: 1
  },
  {
    name: "2",
    suit: "clubs",
    rank: 2
  },
  {
    name: "3",
    suit: "clubs",
    rank: 3
  },
  {
    name: "4",
    suit: "clubs",
    rank: 4
  },
  {
    name: "5",
    suit: "clubs",
    rank: 5
  },
  {
    name: "6",
    suit: "clubs",
    rank: 6
  },
  {
    name: "7",
    suit: "clubs",
    rank: 7
  },
  {
    name: "8",
    suit: "clubs",
    rank: 8
  },
  {
    name: "9",
    suit: "clubs",
    rank: 9
  },
  {
    name: "10",
    suit: "clubs",
    rank: 10
  },
  {
    name: "jack",
    suit: "clubs",
    rank: 11
  },
  {
    name: "queen",
    suit: "clubs",
    rank: 12
  },
  {
    name: "king",
    suit: "clubs",
    rank: 13
  },
  {
    name: "ace",
    suit: "spades",
    rank: 1
  },
  {
    name: "2",
    suit: "spades",
    rank: 2
  },
  {
    name: "3",
    suit: "spades",
    rank: 3
  },
  {
    name: "4",
    suit: "spades",
    rank: 4
  },
  {
    name: "5",
    suit: "spades",
    rank: 5
  },
  {
    name: "6",
    suit: "spades",
    rank: 6
  },
  {
    name: "7",
    suit: "spades",
    rank: 7
  },
  {
    name: "8",
    suit: "spades",
    rank: 8
  },
  {
    name: "9",
    suit: "spades",
    rank: 9
  },
  {
    name: "10",
    suit: "spades",
    rank: 10
  },
  {
    name: "jack",
    suit: "spades",
    rank: 11
  },
  {
    name: "queen",
    suit: "spades",
    rank: 12
  },
  {
    name: "king",
    suit: "spades",
    rank: 13
  }
];

// Shuffle the deck and save it in a new variable shuffledDeck
// to communicate that we have shuffled the deck.
var shuffledDeck = shuffleCards(deck);

var highestCardsMain = function (input) {
  // Attempt the Highest of 2 Cards exercise from the Objects module below with highestCardsMain as the main function.

  // Draw 2 cards each for computer and player from the top of the deck
  var computerCard1 = shuffledDeck.pop();
  var computerCard2 = shuffledDeck.pop();
  var playerCard1 = shuffledDeck.pop();
  var playerCard2 = shuffledDeck.pop();

  if (computerCard1 > computerCard2) {
    var computerCard = computerCard1;
  } else {
    computerCard = computerCard2;
  }

  if (playerCard1 > playerCard2) {
    var playerCard = playerCard1;
  } else {
    playerCard = playerCard2;
  }

  // Construct an output string to communicate which cards were drawn
  var myOutputValue = `Computer had ${computerCard1.name} of ${computerCard1.suit} and ${computerCard2.name} of ${computerCard2.suit}. <br>Player had ${playerCard1.name} of ${playerCard1.suit} and ${playerCard2.name} of ${playerCard2.suit}.`;

  // Compare computer and player cards by rank attribute
  // If computer card rank is greater than player card rank, computer wins
  if (computerCard.rank > playerCard.rank) {
    // Add conditional-dependent text to the output string
    myOutputValue = myOutputValue + "<br>Computer wins.";
    // Else if computer card rank is less than player card rank, player wins
  } else if (computerCard.rank < playerCard.rank) {
    myOutputValue = myOutputValue + "<br>Player wins!";
    // Otherwise (i.e. ranks are equal), it's a tie
  } else {
    myOutputValue = myOutputValue + "<br>It's a tie.";
  }

  // Return the fully-constructed output string
  return myOutputValue;
};

var followCreatingMain = function (input) {
  // Attempt the Follow Along exercise from the Creating Objects with Loops module below with followCreatingMain as the main function.

  var bicycleDeck = [];
  var cardTitle = ``;
  // Initialise an array of the 4 suits in our deck. We will loop over this array.
  var suits = ["hearts", "diamonds", "clubs", "spades"];

  // Loop over the suits array
  for (var i = 0; i < suits.length; i += 1) {
    // Store the current suit in a variable
    var currentSuit = suits[i];

    // Loop from 1 to 13 to create all cards for a given suit
    // Notice rankCounter starts at 1 and not 0, and ends at 13 and not 12.
    // This is an example of a loop without an array.
    for (var rankCounter = 1; rankCounter <= 13; rankCounter += 1) {
      // By default, the card name is the same as rankCounter
      var cardName = rankCounter;

      // If rank is 1, 11, 12, or 13, set cardName to the ace or face card's name
      if (cardName == 1) {
        cardName = "ace";
      } else if (cardName == 11) {
        cardName = "jack";
      } else if (cardName == 12) {
        cardName = "queen";
      } else if (cardName == 13) {
        cardName = "king";
      }

      // Create a new card with the current name, suit, and rank
      var card = {
        name: cardName,
        suit: currentSuit,
        rank: rankCounter
      };

      // Add the new card to the deck
      bicycleDeck.push(card);
    }
  }

  // Define loop condition to loop until index is the length of cardDeck
  for (var index = 0; index < bicycleDeck.length; index += 1) {
    // Construct a string using attributes of each card object
    cardTitle += `${bicycleDeck[index].name} of ${bicycleDeck[index].suit}, `;
    // Log the string
  }
  console.log(cardTitle);
  // Increment the card index
  return `${cardTitle}`;
};
