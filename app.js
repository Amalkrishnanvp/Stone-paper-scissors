let options = document.querySelectorAll(".icon-div");
let usersChoice = document.querySelector(".us-choice");
let computersChoice = document.querySelector(".co-choice");

let drawCount = 0;
let computerCount = 0;
let userCount = 0;

$(".btn1").on("click", function () {
  $("#computer-num").text("");
  $("#user-num").text("");
  $("#draw-num").text("");
  $(".us-choice").text("");
  $(".co-choice").text("");
  $(".msg").text("Play your move");
  $(".msg").css("backgroundColor", "#003049");
});

const showWinner = (userWin) => {
  if (userWin) {
    $(".msg").text("You Wins");
    $(".msg").css("backgroundColor", "rgb(43, 183, 43)");
    userCount++;
    $("#user-num").text(userCount);
  } else {
    $(".msg").text("You Lose");
    $(".msg").css("backgroundColor", "rgb(225, 49, 49)");
    computerCount++;
    $("#computer-num").text(computerCount);
  }
};
const choiceShower = (userChoice, computerChoice) => {
  usersChoice.innerText = userChoice.toUpperCase();
  computersChoice.innerText = computerChoice.toUpperCase();
};

const checkWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    checkDraw();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = computerChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = computerChoice === "rock" ? true : false;
    } else {
      userWin = computerChoice === "paper" ? true : false;
    }
    showWinner(userWin);
  }
};

const compChoice = () => {
  let selections = ["rock", "paper", "scissors"];
  let index = Math.floor(Math.random() * 3);
  let value = selections[index];
  return value;
};

const checkDraw = () => {
  $(".msg").text("It's a Draw");
  $(".msg").css("backgroundColor", "gray");
  drawCount++;
  $("#draw-num").text(drawCount);
};

options.forEach((option) => {
  option.addEventListener("click", () => {
    const identity = option.getAttribute("id");
    let userChoice = identity;
    let computerChoice = compChoice();
    choiceShower(userChoice, computerChoice);
    checkWinner(userChoice, computerChoice);
  });
});
