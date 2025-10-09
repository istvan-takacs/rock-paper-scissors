// Variable declarations
let humanScore = 0;
let computerScore = 0;
const gameElements = ["rock", "paper", "scissors"]

// Function declarations
let computerChoice = () => gameElements[Math.floor(Math.random() * 3)];
let humanChoice = () => prompt("Rock, Paper or Scissors? Choose your fighter!").toLowerCase();

const capitalise = (string) => string.charAt(0).toUpperCase() + string.slice(1)

// Play the game
function playRound(humanChoice, computerChoice) {
    // Game logic based on index values in gameElements array
    // N.B. In the current implementations typos are "balanced" such that each 
    // human typo will mean the victory of the computer in that round.
    // Ties mean +1 points for both players
    let valueOfHumanChoice = gameElements.indexOf(humanChoice)
    let valueOfComputerChoice = gameElements.indexOf(computerChoice)

    if (valueOfComputerChoice === 0 && valueOfHumanChoice === 2) {
        computerScore++;
        console.log(`You lose! Rock beats Scissors!`);
    } else if (valueOfComputerChoice === 2 && valueOfHumanChoice === 0) {
        humanScore++;
        console.log(`You win! Rock beats Scissors!`);
    } else {
        if (valueOfHumanChoice > valueOfComputerChoice) {
            humanScore++;
            console.log(`You win! ${capitalise(humanChoice)} beats ${capitalise(computerChoice)}!`);
        } else if (valueOfHumanChoice  < valueOfComputerChoice) {
            computerScore++;
            console.log(`You lose! ${capitalise(computerChoice)} beats ${capitalise(humanChoice)}!`);
        } else {
            humanScore++;
            computerScore++;
            console.log("What a mighty duel! Looks like it is a tie!")
        }
    }
}

function playGame() {
    for (let round = 1; round < 6; round++) {
        playRound(humanChoice(), computerChoice())

        console.log("|" + "-".repeat(30) + "|")
        console.log("|" + " ".repeat(10) + `Round ${round}` + " ".repeat(13) + "|")
        console.log("|" +  ` Computer Score: ${computerScore}` + " ".repeat(12) + "|")
        console.log("|" +  ` Human Score: ${humanScore}` + " ".repeat(15) + "|")
        console.log("|" + "-".repeat(30) + "|")
    }
}

playGame()
