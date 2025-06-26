let userScore = 0;
let computerScore = 0;

let choices = document.querySelectorAll(".choices");
let msg = document.querySelector("#msg");
let userScorePara = document.querySelector("#user-score");
let computerScorePara = document.querySelector("#computer-score");
let restart = document.querySelector(".restart");

let genComputerChoice = () => {
  let options = ["Rock", "Paper", "Scissors"];
  let randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

let drawGame = () => {
  msg.innerHTML = "Game was a draw. (●'◡'●)";
  msg.style.backgroundColor = "#78C3FB";
};

let showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerHTML = userScore;
    msg.innerHTML = `You WIN! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    computerScore++;
    computerScorePara.innerHTML = computerScore;
    msg.innerHTML = `You lose! Computer's ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

let playGame = (userChoice) => {
  let compChoice = genComputerChoice();

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "Rock") {
      userWin = compChoice === "Paper" ? false : true;
    } else if (userChoice === "Paper") {
      userWin = compChoice === "Scissors" ? false : true;
    } else {
      userWin = compChoice === "Rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

let restartGame = () => {
  userScore = 0;
  computerScore = 0;
  userScorePara.innerHTML = userScore;
  computerScorePara.innerHTML = computerScore;
  msg.innerHTML = "Play your move";
  msg.style.backgroundColor = "#78C3FB";
};

restart.addEventListener("click", restartGame);