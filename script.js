let playerWins = 0;
let computerWins = 0;
let draws = 0;

const computePlay = () => {
  let computerChoice = Math.floor(Math.random() * 3);

  if (computerChoice === 0) {
    return "rock";
  } else if (computerChoice === 1) {
    return "paper";
  } else {
    return "scissors";
  }
};

const rules = (playerSelection, computeSelection, name, round) => {
  if (
    (playerSelection === "rock" && computeSelection === "paper") ||
    (playerSelection === "paper" && computeSelection === "scissors") ||
    (playerSelection === "scissors" && computeSelection === "rock")
  ) {
    console.log(`round ${round} the winner was the computer`);
    computerWins++;
    alert(`You Lose! ${computeSelection} beats ${playerSelection}`);
  } else if (
    (playerSelection === "rock" && computeSelection === "scissors") ||
    (playerSelection === "paper" && computeSelection === "rock") ||
    (playerSelection === "scissors" && computeSelection === "paper")
  ) {
    console.log(`round ${round} the winner was ${name}`);
    playerWins++;
    alert(
      `${name} wins the round! ${playerSelection} beats ${computeSelection}`
    );
  } else if (playerSelection === computeSelection) {
    draws++;
    alert("It's a draw!");
  }
};

const validateAnswer = () => {
  var answer = prompt("Rock, Paper or Scissors?").toLowerCase();
  if (answer === "rock" || answer === "paper" || answer === "scissors") {
    return answer;
  } else {
    alert("Please enter a valid answer");
    return validateAnswer();
  }
};

const playRound = (playerName) => {
  for (let i = 1; i <= 5; i++) {
    let answerValidated = validateAnswer();
    rules(answerValidated, computePlay(), playerName, i);
  }

  if (playerWins > computerWins) {
    alert(`${playerName} wins the game!`);
  } else if (computerWins > playerWins) {
    alert("The computer wins the game!");
  } else {
    alert("It's a draw!. There's no winners");
  }
};

let playerName = prompt("Enter your name:");
const game = () => playRound(playerName);
game();
