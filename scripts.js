function playRound(humanChoice, computerChoice) {
  // your code here!
  //humanSelection;
  console.log(computerChoice);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function getComputerChoice() {
  // get computer choice with math rand
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function getHumanChoice() {
  // get Human Choice from the thing
  prompt("hello world")
}

playRound(humanSelection, computerSelection);
