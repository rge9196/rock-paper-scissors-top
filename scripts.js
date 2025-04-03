let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  switch (Math.floor(Math.random() * 3)) {
    case 0: return "rock";
    case 1: return "paper";
    case 2: return "scissors";
  }
}

function getHumanChoice() {
  let name = prompt("rock, paper or scissors");
  return name.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
  console.log(`Human move: ${humanChoice}`);
  console.log(`Computer move: ${computerChoice}`);
  
  const rules = {
    rock:     { rock: 'tie', paper: 'lose', scissors: 'win' },
    paper:    { rock: 'win', paper: 'tie', scissors: 'lose' },
    scissors: { rock: 'lose', paper: 'win', scissors: 'tie' }
  };
  
  const result = rules[humanChoice][computerChoice];

  if (result === 'win') {
    humanScore++;
    console.log("You win this round!");
  } else if (result === 'lose') {
    computerScore++;
    console.log("Computer wins this round!");
  } else {
    console.log("It's a tie.");
  }

  console.log(`Score — You: ${humanScore}, Computer: ${computerScore}\n`);
}

for (let round = 1; round <= 5; round++) {
  console.log(`--- Round ${round} ---`);
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
}

console.log("Final Result:");
console.log(humanScore > computerScore ? "🎉 You won the game!" :
             humanScore < computerScore ? "💻 Computer won the game!" :
             "🤝 It's a tie!");
