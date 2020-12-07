const readline = require('readline-sync');
const ROUNDS_PER_GAME = 5;
const NUMBER_OF_SUITS = 4;
const FACE_CARD_VALUE = 10;
const ACE_LOW_VALUE = 1;
const ACE_HIGH_VALUE = 11;
const HAND_TOP_SCORE = 21;
const DEALER_HIT_LIMIT = 17;

function intitailizeGameStats() {
  return {
    round: 0,
    playerWins: 0,
    dealerWins: 0
  };
}

function updateGameStats(gameStats, playerResult, dealerResult) {
  if (playerResult === 'busted' || dealerResult > playerResult) {
    gameStats.dealerWins += 1;
  } else if (dealerResult === 'busted' || playerResult > dealerResult) {
    gameStats.playerWins += 1;
  }
}

function displayGameStatus(gameStats) {
  console.clear();
  console.log('   TWENTY-ONE : Best of 5 Rounds\n' +
              '========================================');
  console.log(`  Player Wins: ${gameStats.playerWins}   ` +
              `Dealer Wins: ${gameStats.dealerWins}`);
  console.log(`\n\n            ROUND ${gameStats.round}\n` +
              '========================================');
}

function displayGameWinner(gameStats) {
  if (gameStats.playerWins > gameStats.dealerWins) {
    console.log('  !!! Player wins best of 5 rounds !!!');
  } else if (gameStats.playerWins < gameStats.dealerWins) {
    console.log('  !!! Dealer wins best of 5 rounds !!!');
  } else {
    console.log('  Best of 5 rounds results in a tie');
  }
}

function initializeDeck() {
  return {
    1: NUMBER_OF_SUITS,
    2: NUMBER_OF_SUITS,
    3: NUMBER_OF_SUITS,
    4: NUMBER_OF_SUITS,
    5: NUMBER_OF_SUITS,
    6: NUMBER_OF_SUITS,
    7: NUMBER_OF_SUITS,
    8: NUMBER_OF_SUITS,
    9: NUMBER_OF_SUITS,
    10: NUMBER_OF_SUITS,
    Jack: NUMBER_OF_SUITS,
    Queen: NUMBER_OF_SUITS,
    King: NUMBER_OF_SUITS,
    Ace: NUMBER_OF_SUITS
  };
}

function randomlySelectCard(deck) {
  let allCardsInDeck = Object.keys(deck).reduce((acc, cardName) => {
    for (let cardCount = deck[cardName]; cardCount > 0; cardCount -= 1) {
      acc.push(cardName);
    }
    return acc;
  }, []);
  let randomIndex = Math.floor(Math.random() * allCardsInDeck.length);
  return allCardsInDeck[randomIndex];
}

function initializeHands() {
  let playerHand = {
    cards: [],
    highScore: 0,
    lowScore : 0
  };

  let dealerHand = {
    cards: [],
    highScore: 0,
    lowScore: 0
  };

  return [playerHand, dealerHand];
}

function dealCard(deck, contestantHand) {
  let drawnCard = randomlySelectCard(deck);
  deck[drawnCard] -= 1;
  contestantHand.cards.push(drawnCard);
  updateHandScores(contestantHand);
}

function updateHandScores(contestantHand) {
  let cardValues = contestantHand.cards.map(card => {
    if (!isNaN(Number(card))) return Number(card);
    if (card === 'Ace') return ACE_LOW_VALUE;
    return FACE_CARD_VALUE;
  });

  contestantHand.lowScore = cardValues.reduce((acc, val) => acc + val, 0);
  contestantHand.highScore = contestantHand.lowScore;
  if (contestantHand.cards.includes('Ace')) {
    contestantHand.highScore += ACE_HIGH_VALUE - ACE_LOW_VALUE;
  }
}

function dealHands(deck, playerHand, dealerHand) {
  dealCard(deck, playerHand);
  dealCard(deck, playerHand);
  dealCard(deck, dealerHand);
  dealCard(deck, dealerHand);
}


function prompt(message) {
  console.log(`==> ${message}`);
}

function validateAnswers(answer, validAnswers) {
  while (!validAnswers.includes(answer)) {
    prompt(`${answer} is not a valid input, ` +
           `please enter '${validAnswers[0]}' or '${validAnswers[1]}'`);
    answer = readline.question('==> ').toLowerCase();
  }
  return answer;
}

function determineCardsMessage(cardsArr, showPartialHand = false) {
  let message;
  if (showPartialHand) {
    message = cardsArr[0] + ' and an unknown card';
  } else if (cardsArr.length === 2) {
    message = cardsArr[0] + ' and a ' + cardsArr[1];
  } else {
    message = cardsArr.slice(0, -1);
    message = message.concat('and a ' + cardsArr.slice(-1)).join(', ');
  }
  return message;
}

function displayRoundStatus(playerHand, dealerHand, showPartialHand = true) {
  let dealerMessage = determineCardsMessage(dealerHand.cards, showPartialHand);
  console.log(`Dealer has: ${dealerMessage}`);
  let playerMessage = determineCardsMessage(playerHand.cards);
  console.log(`You have: ${playerMessage}\n`);
}

function displayRoundResult(playerResult, dealerResult) {
  if (playerResult === 'busted') {
    console.log('Player busted! Dealer wins round\n');
  } else if (dealerResult === 'busted') {
    console.log('Dealer busted! Player wins round\n');
  } else if (playerResult > dealerResult) {
    console.log(`Player wins round, ${playerResult} to ${dealerResult}`);
  } else if (playerResult < dealerResult) {
    console.log(`Dealer wins round, ${dealerResult} to ${playerResult}`);
  } else {
    console.log(`Both contestants scored ${playerResult}, round ends in a tie`);
  }
}

function scoreOutcome(contestantHand) {
  if (contestantHand.lowScore > HAND_TOP_SCORE) return 'busted';
  if (contestantHand.highScore > HAND_TOP_SCORE) return contestantHand.lowScore;
  return contestantHand.highScore;
}

function noGameWinner(gameStats) {
  return gameStats.round < ROUNDS_PER_GAME &&
         (gameStats.playerWins < ROUNDS_PER_GAME / 2) &&
         (gameStats.dealerWins < ROUNDS_PER_GAME / 2);
}

while (true) {
  let gameStats = intitailizeGameStats();

  do {
    gameStats.round += 1;
    let deck = initializeDeck();
    let [playerHand, dealerHand] = initializeHands();
    dealHands(deck, playerHand, dealerHand);

    while (true) {
      displayGameStatus(gameStats);
      displayRoundStatus(playerHand, dealerHand, true);

      prompt("hit or stay?");
      let answer = readline.question('==> ').toLowerCase();
      answer = validateAnswers(answer, ['hit', 'stay']);
      if (answer === 'stay') break;

      dealCard(deck, playerHand);
      if (scoreOutcome(playerHand) === 'busted') break;
    }

    if (scoreOutcome(playerHand) !== 'busted') {
      while ((dealerHand.lowScore < DEALER_HIT_LIMIT) &&
            (dealerHand.highScore !== HAND_TOP_SCORE)) {
        let drawnCard = randomlySelectCard(deck);
        deck[drawnCard] -= 1;
        dealerHand.cards.push(drawnCard);
        updateHandScores(dealerHand);
      }
    }

    let playerResult = scoreOutcome(playerHand);
    let dealerResult = scoreOutcome(dealerHand);

    displayGameStatus(gameStats);
    displayRoundStatus(playerHand, dealerHand, false);
    displayRoundResult(playerResult, dealerResult);
    updateGameStats(gameStats, playerResult, dealerResult);
    readline.question('\nPress enter to proceed');
  } while (noGameWinner(gameStats));

  displayGameStatus(gameStats);
  displayGameWinner(gameStats);

  console.log("\n\nEnter 'y' to play another best of 5 contest, 'n' to exit");
  let playAgain = readline.question(prompt('')).toLowerCase();
  playAgain = validateAnswers(playAgain, ['y', 'n']);
  if (playAgain === 'n') break;
}

console.log('\nGame Over');
