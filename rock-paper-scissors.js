// Variable declarations
let humanScore = 0;
let computerScore = 0;
let humanPick;
let computerPick; 
let round = 1;
const gameElements = ["rock", "paper", "scissors"];

// Function declarations
const computerChoice = () => gameElements[Math.floor(Math.random() * 3)];
const capitalise = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1);

// Play one round of the game
function playRound(humanChoice, computerChoice) {
    let valueOfHumanChoice = gameElements.indexOf(humanChoice);
    let valueOfComputerChoice = gameElements.indexOf(computerChoice);

    // Store picks for later display
    computerPick = capitalise(computerChoice);
    humanPick = capitalise(humanChoice);

    // Rock(0), Paper(1), Scissors(2)
    if (valueOfComputerChoice === 0 && valueOfHumanChoice === 2) {
        computerScore++;
    } else if (valueOfComputerChoice === 2 && valueOfHumanChoice === 0) {
        humanScore++;
    } else if (valueOfHumanChoice === valueOfComputerChoice) {
        humanScore++;
        computerScore++;
    } else if (valueOfHumanChoice > valueOfComputerChoice) {
        humanScore++;
    } else {
        computerScore++;
    }
    }

// Update the on-page scoreboard
function playGame(element) {
    // Tally the results on round 5
    if (round === 5) {
        const bodyPage = document.querySelector("body");
        const btnContainer = document.querySelector(".btn-container");
        
        const winnerContainer = document.createElement("div");
        const winner = winnerContainer.appendChild(document.createElement("p"));
        const finalResult = () => {
            if (humanScore > computerScore) {
                return "You destroyed the computer! Good job!"
            } else if (computerScore > humanScore) {
                return "What are you doing? You will let a computer beat you?!"
            } else {
                return "Not bad... Are you sure you don't want to try again?"
            }
        } 
        winner.textContent = finalResult();
        bodyPage.insertBefore(winnerContainer, btnContainer);
    }
    // Do not execute after round 5
    if (round > 5) {
        return;
    }
    const scoreSection = document.querySelector(".score");
  // Create a round container
    const scoreBoard = document.createElement("div");
    scoreBoard.classList.add("rounds");
    scoreBoard.classList.add(element.className);
    scoreSection.appendChild(scoreBoard);

    // Create and populate round info
    const score1 = document.createElement("p");
    const score2 = document.createElement("p");
    const score3 = document.createElement("p");
    const score4 = document.createElement("p");
    const score5 = document.createElement("p");
    const score6 = document.createElement("p");

    score1.textContent = `Round ${round}`;
    score2.innerHTML = `You picked: ${humanPick} ${emojiPicker(humanPick)}`;
    score3.innerHTML = `Computer picked: ${computerPick} ${emojiPicker(computerPick)}`;
    score4.textContent = `Your Score: ${humanScore}`;
    score5.textContent = `Computer Score: ${computerScore}`;
    score6.innerHTML = emojiPicker(humanPick);

    // Add all elements to the container
    scoreBoard.append(score1, score2, score3, score4, score5);
    }

function emojiPicker(pick) {
        if (pick === "Rock") {
            return `&#129704`;
        } else if (pick === "Paper") {
            return "&#128195";
        } else {
            return "&#x2702";
        }}

// Button event listeners
const buttons = [...document.querySelectorAll("button")];
buttons.forEach((element) => {
    element.addEventListener("click", () => {
        const humanChoice = element.className;
        playRound(humanChoice, computerChoice());
        playGame(element);
        round++;
    });
    });