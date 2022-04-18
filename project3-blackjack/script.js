//global variables
var playerCards = [];
var computerCards = [];
var playerBlackjack = false;
var computerBlackjack = false;

//generate deck helper function
var makeDeck = function () {
  var cardDeck = [];
  var suits = ["♠", "♥", "♣", "♦"];

  for (var i = 0; i < suits.length; i += 1) {
    var currentSuits = suits[i];

    for (var rankCounter = 1; rankCounter <= 13; rankCounter += 1) {
      var cardName = rankCounter;

      if (cardName == 1) {
        cardName = `ace`;
      } else if (cardName == 11) {
        cardName = `jack`;
      } else if (cardName == 12) {
        cardName = `queen`;
      } else if (cardName == 13) {
        cardName = `king`;
      }

      var card = {
        name: cardName,
        suit: currentSuits,
        rank: rankCounter
      };

      cardDeck.push(card);
    }
  }

  return cardDeck;
};

//shuffle deck helper function
var getRandomIndex = function (max) {
  return Math.floor(Math.random() * max);
};

var shuffleCards = function (cardDeck) {
  var currentIndex = 0;

  while (currentIndex < cardDeck.length) {
    var randomIndex = getRandomIndex(cardDeck.length);
    var randomCard = cardDeck[randomIndex];
    var currentCard = cardDeck[currentIndex];
    cardDeck[currentIndex] = randomCard;
    cardDeck[randomIndex] = currentCard;
    currentIndex += 1;
  }

  return cardDeck;
};

//helper function for dealing first hand of cards
var dealFirstHand = function (shuffledDeck) {
  for (var i = 0; i < 2; i += 1) {
    var playerCard = shuffledDeck.pop();
    playerCards.push(playerCard);
    var computerCard = shuffledDeck.pop();
    computerCards.push(computerCard);
  }

  console.log(playerCards);
  console.log(computerCards);

  return `Player hand: ${playerCards[0].name} of ${playerCards[0].suit}, ${playerCards[1].name} of ${playerCards[1].suit}. <br> Dealer hand: ${computerCards[0].name} of ${computerCards[0].suit}, ${computerCards[1].name} of ${computerCards[1].suit}.`;
};

//check for natural blackjack
var checkForNaturalBlackjack = function () {
  if (playerCards[0].rank == 1 || playerCards[1].rank == 1) {
    if (playerCards[0].rank == 10 || playerCards[1].rank == 10) {
      playerBlackjack = true;
    }
  } else {
    playerBlackjack = false;
  }

  if (computerCards[0].rank == 1 || computerCards[1].rank == 1) {
    if (computerCards[0].rank == 10 || computerCards[1].rank == 10) {
      computerBlackjack = true;
    }
  } else {
    computerBlackjack = false;
  }

  if (playerBlackjack && computerBlackjack == true) {
    return `<br>Both player and dealer have blackjacks! It's a tie!`;
  } else if (playerBlackjack == true) {
    return `<br>Player has blackjack! Player wins!`;
  } else if (computerBlackjack == true) {
    return `<br>Dealer has blackjack! Dealer wins!`;
  } else {
    return `<br>There is no natural blackjack`;
  }
};

//output cards to player
//hit or stand
//check for bust or not enough points
//computer turn
//game win or lose

var concatenatePlayerCardValues = function (playerCards) {
  var playerScore = 0;
  for (var i = 0; i < playerCards.length; i += 1) {
    playerScore += playerCards[i].rank;
  }
  return playerScore;
};

var concatenateComputerCardValues = function (computerCards) {
  var computerScore = 0;
  for (var i = 0; i < computerCards.length; i += 1) {
    computerScore += computerCards[i].rank;
  }
  return computerScore;
};

var compareCardValues = function (playerScore, computerScore) {
  if (playerScore == computerScore) {
    return `<br>It's a tie.`;
  } else if (playerScore > computerScore) {
    return `<br>Player wins.`;
  } else if (playerScore < computerScore) {
    return `<br>Computer wins.`;
  }
};

var main = function (input) {
  playerCards = [];
  computerCards = [];
  var deck = makeDeck();
  var shuffledDeck = shuffleCards(deck);
  var myOutputValue = dealFirstHand(shuffledDeck) + checkForNaturalBlackjack();

  if (playerBlackjack == false && computerBlackjack == false) {
    var playerScore = concatenatePlayerCardValues(playerCards);
    var computerScore = concatenateComputerCardValues(computerCards);
    myOutputValue +=
      `<br>Player hand value: ${playerScore}, <br>Dealer hand value: ${computerScore}` +
      compareCardValues(playerScore, computerScore);
  }
  return myOutputValue;
};
