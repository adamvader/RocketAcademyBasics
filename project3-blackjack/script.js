//global variables
var GAME_STATE = `DEAL_FIRST_HAND`;
var playerCards = [];
var dealerCards = [];
var deck = [];
var shuffledDeck = [];
var playerBlackjack = false;
var dealerBlackjack = false;
var myOutputValue = "";
var playerScore = 0;
var dealerScore = 0;

//generate deck helper function
var makeDeck = function () {
  var cardDeck = [];
  var suits = [
    "♠",
    '<html><font color="red">♥</font></html>',
    "♣",
    '<html><font color="red">♦</font></html>'
  ];

  for (var i = 0; i < suits.length; i += 1) {
    var currentSuits = suits[i];

    for (var rankCounter = 1; rankCounter <= 13; rankCounter += 1) {
      var cardName = rankCounter;
      var cardRank = rankCounter;

      if (cardName == 1) {
        cardName = `Ace`;
        cardRank = 11;
      } else if (cardName == 11) {
        cardName = `Jack`;
        cardRank = 10;
      } else if (cardName == 12) {
        cardName = `Queen`;
        cardRank = 10;
      } else if (cardName == 13) {
        cardName = `King`;
        cardRank = 10;
      } else if (cardName == 2) {
        cardName = `2️⃣`;
      } else if (cardName == 3) {
        cardName = `3️⃣`;
      } else if (cardName == 4) {
        cardName = `4️⃣`;
      } else if (cardName == 5) {
        cardName = `5️⃣`;
      } else if (cardName == 6) {
        cardName = `6️⃣`;
      } else if (cardName == 7) {
        cardName = `7️⃣`;
      } else if (cardName == 8) {
        cardName = `8️⃣`;
      } else if (cardName == 9) {
        cardName = `9️⃣`;
      } else if (cardName == 10) {
        cardName = `🔟`;
      }

      var card = {
        name: cardName,
        suit: currentSuits,
        rank: cardRank
      };

      cardDeck.push(card);
    }
  }
  console.log(`deck initialised`);
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
  console.log(`deck shuffled`);
  return cardDeck;
};

//function to replace the rank of ace to 1, one ace card at a time.
var replaceAceRankWith1 = function (cardsInHand) {
  var currentIndex = 0;

  while (currentIndex < cardsInHand.length) {
    if (cardsInHand[currentIndex].rank == 11) {
      cardsInHand[currentIndex].rank = 1;
      console.log(`ace rank now 1`);
      return cardsInHand;
    }
    currentIndex += 1;
  }
  console.log(`ace rank now 1`);
  return cardsInHand;
};

//helper function for dealing first hand of cards
var dealFirstHand = function (shuffledDeck) {
  // deal player 1 card then deal dealer 1 card den repeat until player and dealer has 2 cards each
  for (var i = 0; i < 2; i += 1) {
    var playerCard = shuffledDeck.pop();
    playerCards.push(playerCard);
    var dealerCard = shuffledDeck.pop();
    dealerCards.push(dealerCard);
  }

  console.log(playerCards);
  console.log(dealerCards);
  console.log(`first hand dealt`);
  //print player's cards and dealer's first card only, dealer's second card is hidden
  return `Player hand: <br>${playerCards[0].name} of ${playerCards[0].suit} <br>${playerCards[1].name} of ${playerCards[1].suit} <br><br>Dealer hand: <br>${dealerCards[0].name} of ${dealerCards[0].suit}`;
};

//deal card to player
var dealPlayerCard = function (shuffledDeck) {
  var playerCard = shuffledDeck.pop();
  playerCards.push(playerCard);

  console.log(playerCards);
  console.log(`player drew one card`);
  return `<br>${playerCard.name} of ${playerCard.suit}.`;
};

//deal card to dealer
var dealDealerCard = function (shuffledDeck) {
  var dealerCard = shuffledDeck.pop();
  dealerCards.push(dealerCard);

  console.log(dealerCards);
  console.log(`dealer drew one card`);
  return `<br>${dealerCard.name} of ${dealerCard.suit}.`;
};

//check for natural blackjack
var checkForNaturalBlackjack = function () {
  if (playerCards[0].rank + playerCards[1].rank == 21) {
    playerBlackjack = true;
  } else if (playerCards[0].name == `Ace` && playerCards[1].name == `Ace`) {
    playerBlackjack = true;
  } else {
    playerBlackjack = false;
  }

  if (dealerCards[0].rank + dealerCards[1].rank == 21) {
    dealerBlackjack = true;
  } else if (dealerCards[0].name == `Ace` && dealerCards[1].name == `Ace`) {
    dealerBlackjack = true;
  } else {
    dealerBlackjack = false;
  }

  console.log(`checking for blackjack`);
  if (playerBlackjack && dealerBlackjack == true) {
    return `<br>${dealerCards[1].name} of ${dealerCards[1].suit} <br><br>Both player and dealer have blackjacks! It's a tie! <br><br>Click button to deal a new hand.`;
  } else if (playerBlackjack == true) {
    return `<br><br>Player has blackjack! Player wins! <br><br>Click button to deal a new hand.`;
  } else if (dealerBlackjack == true) {
    return `<br>${dealerCards[1].name} of ${dealerCards[1].suit} <br><br>Dealer has blackjack! Dealer wins! <br><br>Click button to deal a new hand.`;
  } else {
    return `<br><br>There is no natural blackjack`;
  }
};

//calculates player hand value
var concatenatePlayerCardValues = function (playerCards) {
  var playerScore = 0;
  var count = 0;

  for (var i = 0; i < playerCards.length; i += 1) {
    playerScore += playerCards[i].rank;
  }

  while (playerScore > 21) {
    playerCards = replaceAceRankWith1(playerCards);
    playerScore = 0;
    for (var i = 0; i < playerCards.length; i += 1) {
      playerScore += playerCards[i].rank;
    }
    //run this while loop a max of 4 times
    if (count == 4) {
      return playerScore;
    }
    count += 1;
  }

  return playerScore;
};

//calculate dealer hand value
var concatenateDealerCardValues = function (dealerCards) {
  var dealerScore = 0;
  var count = 0;

  for (var i = 0; i < dealerCards.length; i += 1) {
    dealerScore += dealerCards[i].rank;
  }

  while (dealerScore > 21) {
    dealerCards = replaceAceRankWith1(dealerCards);
    dealerScore = 0;
    for (var i = 0; i < dealerCards.length; i += 1) {
      dealerScore += dealerCards[i].rank;
    }
    //run this while loop a max of 4 times
    if (count == 4) {
      return dealerScore;
    }
    count += 1;
  }

  return dealerScore;
};

//compare total card values between player and dealer
var compareCardValues = function (playerScore, dealerScore) {
  if (playerScore == dealerScore) {
    return `<br><br>It's a tie.`;
  } else if (playerScore > dealerScore) {
    return `<br><br>Player wins.`;
  } else if (playerScore < dealerScore) {
    return `<br><br>Dealer wins.`;
  }
};

//helper function for dealer's turn
var dealerTurn = function () {
  // print current cards in player hand
  myOutputValue = `Player hand: `;
  for (var i = 0; i < playerCards.length; i += 1) {
    myOutputValue += `<br>${playerCards[i].name} of ${playerCards[i].suit}`;
  }
  //print player total hand value
  myOutputValue += `<br>Player hand value: ${playerScore}`;
  //bust condition if hand value more than 21
  if (playerScore > 21) {
    myOutputValue += `<br>Player bust`;
  }

  // print dealer initial hand
  myOutputValue += `<br><br>Dealer hand: `;
  for (var i = 0; i < dealerCards.length; i += 1) {
    myOutputValue += `<br>${dealerCards[i].name} of ${dealerCards[i].suit}`;
  }
  //if dealer hand value less than 17, dealer draw card
  while (dealerScore < 17) {
    myOutputValue += dealDealerCard(shuffledDeck);
    //update dealer score
    dealerScore = concatenateDealerCardValues(dealerCards);
  }

  //print dealer new total hand value
  myOutputValue += `<br>Dealer hand value: ${dealerScore}`;
  //if dealer > 21 and player > 21 = tie
  if (playerScore > 21 && dealerScore > 21) {
    myOutputValue += `<br>Dealer busts. It's a tie!`;
  }
  // if player bust but dealer hand value less than or equal to 21, dealer win
  else if (playerScore > 21 && dealerScore <= 21) {
    myOutputValue += `<br>Dealer wins!`;
  }
  //if both hand value less than or equal to 21, compare hand values and determine winner
  else if (playerScore <= 21 && dealerScore <= 21) {
    myOutputValue += compareCardValues(playerScore, dealerScore);
  }
  //if dealer bust but player hand value less than or equal to 21, player win
  else if (playerScore <= 21 && dealerScore > 21) {
    myOutputValue += `<br>Dealer busts. Player wins!`;
  }
  return myOutputValue;
};

var main = function (input) {
  //GAME STATE IS `DEAL_FIRST_HAND`
  if (GAME_STATE == `DEAL_FIRST_HAND`) {
    //set player and dealer card array to empty, this helps when the game resets
    playerCards = [];
    dealerCards = [];
    //create deck
    deck = makeDeck();
    //shuffle deck
    shuffledDeck = shuffleCards(deck);
    // deal the first hand to player and dealer + checks for natural blackjack win condition. if there is a natural blackjack, game ends, game state remains the same, once submit button is clicked, game is reset.
    myOutputValue = dealFirstHand(shuffledDeck) + checkForNaturalBlackjack();
    // add player total value of cards, add dealer total value of cards
    playerScore = concatenatePlayerCardValues(playerCards);
    dealerScore = concatenateDealerCardValues(dealerCards);
    // if there is no natural blackjack, change game state to player decision and query to hit or stand.
    if (playerBlackjack == false && dealerBlackjack == false) {
      myOutputValue += `<br>Player hand value: ${playerScore}. <br><br>Would you like to hit or stand? Type h for hit or s for stand.`;
      GAME_STATE = `PLAYER_HIT_OR_STAND`;
    }
  }
  // GAME STATE IS `PLAYER_HIT_OR_STAND`
  else if (GAME_STATE == `PLAYER_HIT_OR_STAND`) {
    //if player chooses hit
    if (input == `h`) {
      // print current cards in player hand
      myOutputValue = `Player hand: `;
      for (var i = 0; i < playerCards.length; i += 1) {
        myOutputValue += `<br>${playerCards[i].name} of ${playerCards[i].suit}`;
      }
      //add one card to player hand and print it
      myOutputValue +=
        dealPlayerCard(shuffledDeck) +
        `<br><br>Dealer hand: <br>${dealerCards[0].name} of ${dealerCards[0].suit}`;
      //update player total hand value
      playerScore = concatenatePlayerCardValues(playerCards);
      //print player total hand value
      myOutputValue += `<br><br>Player hand value: ${playerScore}`;
      //bust condition if hand value more than 21
      if (playerScore > 21) {
        // run code for dealer turn
        myOutputValue =
          dealerTurn() + `<br><br>Click button to deal a new hand.`;
        GAME_STATE = `DEAL_FIRST_HAND`;
        //reset the game
        return myOutputValue;
      } else {
        myOutputValue += `<br><br>Would you like to hit or stand? Type h for hit or s for stand`;
      }
    }
    // if player chooses stand
    else if (input == `s`) {
      //run code for dealer's turn
      myOutputValue = dealerTurn() + `<br><br>Click button to deal a new hand.`;
      GAME_STATE = `DEAL_FIRST_HAND`;
    }
    // if player input is something other than "hit" or "stand"
    else {
      //print player current hand
      myOutputValue = `Player hand: `;
      for (var i = 0; i < playerCards.length; i += 1) {
        myOutputValue += `<br>${playerCards[i].name} of ${playerCards[i].suit}`;
      }
      //print player current hand value
      myOutputValue += `<br>Player hand value: ${playerScore}`;
      //query player to input either `hit` or `stand`
      myOutputValue += `<br><br>Invalid input. Please type "h" or "s".`;
      return myOutputValue;
    }
  }

  return myOutputValue;
};
