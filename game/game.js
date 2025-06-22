let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
  score = {
    win: 0,
    lose: 0,
    ties: 0,
  };
}

function loadData() {
  const showResult = document.querySelector(".show-result");
  let showScore = JSON.parse(localStorage.getItem("score"));
  showResult.innerHTML = `Wins: ${showScore.win}, Losses: ${showScore.lose}, Ties: ${showScore.ties}`;
}
function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = "";
  const resultElement = document.querySelector(".result");
  const ketqua = document.querySelector(".compare");

  if (playerMove === computerMove) {
    result = "Tie";
    resultElement.innerHTML = "Ties.";
    score.ties = score.ties + 1;
  } else if (
    (playerMove === "rock" && computerMove === "scissors") ||
    (playerMove === "paper" && computerMove === "rock") ||
    (playerMove === "scissors" && computerMove === "paper")
  ) {
    result = "You win!";
    resultElement.innerHTML = "You win";
    score.win = score.win + 1;
  } else {
    result = "You lose!";
    resultElement.innerHTML = "You Lose";
    score.lose = score.lose + 1;
  }
  ketqua.innerHTML = `
          You
          <img src="../img/${playerMove}-emoji.png" class="img">
          <img src="../img/${computerMove}-emoji.png" class="img">
          Computer
        `;
  localStorage.setItem("score", JSON.stringify(score));
  loadData();
  //   alert(`You chose ${playerMove}. Computer chose ${computerMove}.\n${result}
  // Wins: ${score.win}, Losses: ${score.lose}, Ties: ${score.ties}`);


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
  //   alert("Score reset!");
  localStorage.setItem("score", JSON.stringify(score));
  loadData();
}
