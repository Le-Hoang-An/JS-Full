let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
  score = {
    win: 0,
    lose: 0,
    ties: 0,
  };
}

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = "";

  if (playerMove === computerMove) {
    result = "Tie";
    score.ties++;
  } else if (
    (playerMove === "rock" && computerMove === "scissors") ||
    (playerMove === "paper" && computerMove === "rock") ||
    (playerMove === "scissors" && computerMove === "paper")
  ) {
    result = "You win!";
    score.win++;
  } else {
    result = "You lose!";
    score.lose++;
  }

  alert(`You chose ${playerMove}. Computer chose ${computerMove}.\n${result}
Wins: ${score.win}, Losses: ${score.lose}, Ties: ${score.ties}`);

  localStorage.setItem("score", JSON.stringify(score));
}

function pickComputerMove() {
  const randomNumber = Math.random();
  if (randomNumber < 1 / 3) {
    return "rock";
  } else if (randomNumber < 2 / 3) {
    return "paper";
  } else {
    return "scissors";
  }
}

function resetScore() {
  score.win = 0;
  score.lose = 0;
  score.ties = 0;
  alert("Score reset!");
  localStorage.setItem("score", JSON.stringify(score));
}
