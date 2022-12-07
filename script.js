const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const score = document.getElementById("score");
const winner = document.getElementById("winner");

let playerWins = 0;
let computerWins = 0;
let draws = 0;
let round = 1;

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
rockButton.addEventListener("click", (e) => {
  playRound(e.target.id, computePlay(), round);
});

paperButton.addEventListener("click", (e) => {
  playRound(e.target.id, computePlay(), round);
});

scissorsButton.addEventListener("click", (e) => {
  playRound(e.target.id, computePlay(), round);
});

const playRound = (playerSelection, computeSelection) => {
  if (
    (playerSelection === "rock" && computeSelection === "paper") ||
    (playerSelection === "paper" && computeSelection === "scissors") ||
    (playerSelection === "scissors" && computeSelection === "rock")
  ) {
    console.log(`round ${round} the winner was the computer`);
    computerWins++;
    alert(`You Lose! ${computeSelection} beats ${playerSelection}`);
    score.textContent = `Score: Computer = ${computerWins}, ${playerName} = ${playerWins}`;
  } else if (
    (playerSelection === "rock" && computeSelection === "scissors") ||
    (playerSelection === "paper" && computeSelection === "rock") ||
    (playerSelection === "scissors" && computeSelection === "paper")
  ) {
    console.log(`round ${round} the winner was ${playerName}`);
    playerWins++;
    alert(
      `${playerName} wins the round! ${playerSelection} beats ${computeSelection}`
    );
    score.textContent = `Score: ${playerName} = ${playerWins}, Computer = ${computerWins}`;
  } else if (playerSelection === computeSelection) {
    draws++;
    alert("It's a draw!");
  }
  round++;
  if (round === 6) {
    endOfTheGame();
  }
};

const endOfTheGame = () => {
  if (playerWins > computerWins) {
    winner.textContent = `${playerName} wins the game!`;
  } else if (computerWins > playerWins) {
    winner.textContent = "The computer wins the game!";
  } else {
    winner.textContent = "It's a draw!. There's no winners";
  }
  createModal();
};

let playerName = prompt("Enter your name:");

const createModal = () => {
  const parent = document.createElement("div");

  const modal = document.createElement("div");
  parent.classList.add("modal");
  parent.setAttribute("id", "modal");
  const body = document.querySelector("body");
  body.appendChild(parent);
  modal.innerHTML = `
    <div class="modal-content">
    
        <button id="play" >Play Again?</button>
        <button id="cancel">Cancel</button>
   
      </div>`;
  parent.appendChild(modal);
  document.getElementById("play").addEventListener("click", function (e) {
    location.reload();
  });
  document.getElementById("cancel").addEventListener("click", function (e) {
    parent.remove();
  });
};
