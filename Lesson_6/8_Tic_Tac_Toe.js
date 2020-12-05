const readline = require('readline-sync');
const COMPUTER_PLAYS_FIRST = false;
const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = '0';
const GAMES_TO_WIN_MATCH = 5;
const OPTIMAL_SQUARE = '5';
const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
  [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
  [1, 5, 9], [3, 5, 7]             // diagonals
];

function joinOr(numArr) {
  if (numArr.length > 2) {
    return numArr.slice(0, -1).concat('or ' + numArr.slice(-1)).join(', ');
  }
  return numArr.toString();
}

function displayHeader(gamesLog) {
  console.clear();
  console.log('TIC TAC TOE Best of 5');
  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}\n`);
  console.log('         GAMES WON\n  ========================');
  console.log(`  Player: ${gamesLog.playergamesWon}    ` +
              `Computer: ${gamesLog.computergamesWon}`);
}

function displayBoard(board, gamesLog) {
  displayHeader(gamesLog);
  console.log('');
  console.log('          |     |');
  console.log(`       ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('          |     |');
  console.log('     -----+-----+-----');
  console.log('          |     |');
  console.log(`       ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('          |     |');
  console.log('     -----+-----+-----');
  console.log('          |     |');
  console.log(`       ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('          |     |');
  console.log('');
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}

function prompt(message) {
  console.log('==> ' + message);
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function playerChoosesSquare(board) {

  let square; // declared here so we can use it outside the loop

  while (true) {
    prompt(`Choose a square (${joinOr(emptySquares(board))}):`);
    square = readline.question().trim(); // input trimmed to allow spaces in input
    if (emptySquares(board).includes(square)) break; // break if it's a valid square
    prompt("Sorry, that's not a valid choice.");
  }

  board[square] = HUMAN_MARKER;
}

function findWinningSquare(board, contestantMarker) {
  const SINGLE_SQUARE_REMAINING = 1;
  let twoMarkerCombos = WINNING_LINES.filter(combo => {
    let selectedSquares = combo.reduce((acc, square) => {
      return board[square] === contestantMarker ? acc - 1 : acc;
    }, 3);
    return selectedSquares === SINGLE_SQUARE_REMAINING;
  });

  let selectedRemoved = twoMarkerCombos.map(winningCombo => {
    return winningCombo.filter(square => {
      return (emptySquares(board).includes(String(square)));
    });
  });

  let winningSquare = selectedRemoved.find(winningCombo => {
    return winningCombo.length === SINGLE_SQUARE_REMAINING;
  });

  return winningSquare ? String(winningSquare[0]) : null;
}

function computerChoosesSquare(board) {

  let computerWinningSquare = findWinningSquare(board, COMPUTER_MARKER);
  if (emptySquares(board).includes(computerWinningSquare)) {
    board[computerWinningSquare] = COMPUTER_MARKER;
    return;
  }

  let playerWinningSquare = findWinningSquare(board, HUMAN_MARKER);

  if (emptySquares(board).includes(playerWinningSquare)) {
    board[playerWinningSquare] = COMPUTER_MARKER;
    return;
  }

  let availableSquares = emptySquares(board);
  let randomIndex = Math.floor(Math.random() * availableSquares.length);

  let square;
  if (board[OPTIMAL_SQUARE] === INITIAL_MARKER) square = OPTIMAL_SQUARE;
  else square = availableSquares[randomIndex];
  board[square] = COMPUTER_MARKER;
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function detectWinner(board) {

  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [ sq1, sq2, sq3 ] = WINNING_LINES[line];

    if (board[sq1] === HUMAN_MARKER &&
        board[sq2] === HUMAN_MARKER &&
        board[sq3] === HUMAN_MARKER
    ) {
      return 'Player';
    } else if ( board[sq1] === COMPUTER_MARKER &&
                board[sq2] === COMPUTER_MARKER &&
                board[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }

  return null;
}

let gamesLog;
while (true) {
  let playerTurnEnabled = !COMPUTER_PLAYS_FIRST;
  let board = initializeBoard();
  gamesLog = { playergamesWon: 0, computergamesWon: 0 };

  while (true) {
    displayBoard(board, gamesLog);

    if (playerTurnEnabled) {
      playerChoosesSquare(board);
    }
    playerTurnEnabled = true;
    if (detectWinner(board) === 'Player') gamesLog.playergamesWon += 1;
    else {
      computerChoosesSquare(board);
      if (detectWinner(board) === 'Computer') gamesLog.computergamesWon += 1;
    }

    if (
      gamesLog.playergamesWon >= GAMES_TO_WIN_MATCH ||
      gamesLog.computergamesWon >= GAMES_TO_WIN_MATCH
    ) break;

    if (detectWinner(board)) {
      displayBoard(board, gamesLog);
      prompt(`${detectWinner(board)} won this game!` +
             '\n    Press Enter to begin next game');
      readline.question();
      board = initializeBoard();
    } else if (boardFull(board)) {
      displayBoard(board, gamesLog);
      prompt("It's a tie! \n    Press Enter to begin next game");
      board = initializeBoard();
    }
  }

  let matchWinner = (gamesLog.playergamesWon >= GAMES_TO_WIN_MATCH) ?
    'Player' : 'Computer';
  console.clear();
  displayBoard(board, gamesLog);
  prompt(`!!! ${matchWinner} wins the match !!!\n`);
  prompt('Play again? (y or n)');
  let answer = readline.question().toLowerCase()[0];
  if (answer !== 'y') break;
}

prompt('Thanks for playing Tic Tac Toe!');

