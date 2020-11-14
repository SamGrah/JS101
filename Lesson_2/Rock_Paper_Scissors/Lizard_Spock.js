const readline = require('readline-sync');
const SET_OF_OBJECTS = {
  r:  { name: 'rock', defeatedBy: ['p', 'sp'] },
  p:  { name: 'paper', defeatedBy: ['r', 'sc']},
  sc: { name: 'scissors', defeatedBy: ['l', 'p']},
  l:  { name: 'lizard', defeatedBy: ['sp','r']},
  sp: { name: 'spock', defeatedBy: ['sc', 'l']}
};


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

function displayRoundResult(result, userChoice, compChoice, rnd) {
  console.log('\n');
  prompt(`You chose ${SET_OF_OBJECTS[userChoice]['name']}, ` +
  `computer chose ${SET_OF_OBJECTS[compChoice]['name']}`);

  if (result === "User Wins") prompt(`You win round ${rnd}!\n`);
  else if (result === "PC Wins") prompt(`Computer wins round ${rnd}\n`);
  else  prompt(`Round ${rnd} is a tie!`);

  if (rnd < 5) {
    console.log('\n');
    prompt('Press any key to continue to the next round...');
    readline.question();
  }
}

let playerWins = 0;
let computerWins = 0;
let round = 1;
while ((playerWins < 3 || computerWins < 3) && round <= 5) {
  const VALID_CHOICES = Object.keys(SET_OF_OBJECTS);

  console.clear();
  displayHeader(round, playerWins, computerWins);

  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  let computerChoice = chooseRandomlyFrom(VALID_CHOICES);

  console.log('User Choice: ' + choice);
  console.log('PC Choice:   ' + computerChoice);

  if (choice === computerChoice) {
    displayRoundResult('tie', choice, computerChoice, round);
    round += 1;
    continue;
  }
  if (SET_OF_OBJECTS[choice].defeatedBy.includes(computerChoice)) {
    computerWins += 1;
    displayRoundResult('PC Wins', choice, computerChoice, round);
  } else {
    playerWins += 1;
    displayRoundResult('User Wins', choice, computerChoice, round);
  }

  round += 1;
}

displayWinner(playerWins, computerWins);
