const readline = require('readline-sync');
const GAME_MOVES_KEY = {
  r:  { name: 'rock', defeatedBy: ['p', 'sp'] },
  p:  { name: 'paper', defeatedBy: ['r', 'sc']},
  sc: { name: 'scissors', defeatedBy: ['l', 'p']},
  l:  { name: 'lizard', defeatedBy: ['sp','r']},
  sp: { name: 'spock', defeatedBy: ['sc', 'l']}
};
const WIN_THRESHOLD = 3;
const FINAL_ROUND = 5;


function displayHeader(rnd, userWins, compWins) {
  console.log(
    '        Lizard Spock: Best of 5\n' +
    `    Round: ${rnd}  Player: ${userWins}  Computer: ${compWins}\n` +
    '======================================\n');
}

function prompt(message) {
  return console.log(`==> ${message}`);
}

function chooseRandomlyFrom(choices) {
  let randomIndex = Math.ceil(Math.random() * choices.length) - 1;
  return choices[randomIndex];
}

function validateUserInput(userEntry, validChoices) {
  while (!validChoices.includes(userEntry)) {
    prompt("That's not a valid input");
    userEntry = readline.question().toLowerCase();
  }
  return userEntry;
}

function displayWinner(player1, player2) {
  console.log('\n\n');
  if (player1 > player2) {
    prompt("You've won the best of 5 contest!");
  } else if (player2 > player1) {
    prompt('Computer has won the best of 5 contest :(');
  } else {
    prompt("You've tied with the computer in the best of 5 contest!");
  }
}

function displayRoundResult(result, userChoice, compChoice, currentRnd) {
  console.log('\n');
  prompt(`You chose ${GAME_MOVES_KEY[userChoice]['name']}, ` +
  `computer chose ${GAME_MOVES_KEY[compChoice]['name']}`);

  if (result === "User Wins") prompt(`You win round ${currentRnd}!\n`);
  else if (result === "PC Wins") prompt(`Computer wins round ${currentRnd}\n`);
  else  prompt(`Round ${currentRnd} is a tie!`);

  if (currentRnd < 5) {
    console.log('\n');
    prompt('Press Enter to continue to the next round...');
    readline.question();
  }
}

let playBestOf5 = 'y';
while (playBestOf5 === 'y') {

  let playerWins = 0;
  let computerWins = 0;
  let round = 1;

  while ((playerWins < WIN_THRESHOLD || computerWins < WIN_THRESHOLD) &&
          round <= FINAL_ROUND) {
    const VALID_CHOICES = Object.keys(GAME_MOVES_KEY);

    console.clear();
    displayHeader(round, playerWins, computerWins);

    prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
    let choice = readline.question().toLowerCase();
    choice = validateUserInput(choice, VALID_CHOICES);

    // while (!VALID_CHOICES.includes(choice)) {
    //   prompt("That's not a valid choice");
    //   choice = readline.question();
    // }

    let computerChoice = chooseRandomlyFrom(VALID_CHOICES);

    if (choice === computerChoice) {
      displayRoundResult('tie', choice, computerChoice, round);
      round += 1;
      continue;
    }
    if (GAME_MOVES_KEY[choice].defeatedBy.includes(computerChoice)) {
      computerWins += 1;
      displayRoundResult('PC Wins', choice, computerChoice, round);
    } else {
      playerWins += 1;
      displayRoundResult('User Wins', choice, computerChoice, round);
    }

    round += 1;
  }

  displayWinner(playerWins, computerWins);

  console.log('\n');
  prompt("Enter 'y' to play again, 'n' to quit");
  playBestOf5 = validateUserInput(readline.question().toLowerCase(), ['y', 'n']);
}
