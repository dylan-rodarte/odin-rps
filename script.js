
let humanScore = 0;
let computerScore = 0;
let totalScore = 0;

const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissButton = document.querySelector(".sciss");

rockButton.addEventListener("click", () => {
    playRound("Rock", getComputerChoice());
});

paperButton.addEventListener("click", () => {
    playRound("Paper", getComputerChoice());
});

scissButton.addEventListener("click", () => {
    playRound("Scissors", getComputerChoice());
});

//playGame();

console.log("Human score = " + humanScore);
console.log("Computer score = " + computerScore);


/*function playGame(){
    let i = 0;
    do{
        console.log("Current Score: Human: " + humanScore + " Computer: " + computerScore)
        i = humanScore + computerScore;
        console.log(i);
    }
    while (i < 5);
    if (humanScore > computerScore){
        alert("Hooray! You win! " + humanScore + "-" + computerScore);
    }
    else{
        alert("Sorry, you lose. " + computerScore + "-" + humanScore);
    }
}*/

function playRound(humanChoice, computerChoice){
    //Draw conditions
    if (humanChoice === computerChoice){
        console.log("Draw, please select again!");
    }
    //Human win conditions
    else if (humanChoice === "Rock" && computerChoice === "Scissors" || humanChoice === "Paper" && computerChoice === "Rock" || humanChoice === "Scissors" && computerChoice === "Paper"){
        humanWin(humanChoice, computerChoice);
    }
    //Computer win conditions
    else {
        computerWin(humanChoice, computerChoice);
    }
}

function humanWin(humanChoice, computerChoice){
    humanScore += 1;
    console.log("You win! " + humanChoice + " beats " + computerChoice + " :)");
    winningScore();
}

function computerWin(humanChoice, computerChoice){
    computerScore += 1;
    console.log("You lose! " + computerChoice + " beats " + humanChoice + " :(");
    winningScore();
}

function getComputerChoice(){
    let choice = Math.random() * 3;
    if (choice < 1){
        return "Rock";
    }
    else if (choice < 2){
        return "Paper";
    }
    else{
        return "Scissors";
    }
}

function winningScore(){
    if (humanScore == 5){
        alert("Hooray! You win! " + humanScore + "-" + computerScore);
    }
    else if (computerScore == 5){
        alert("Sorry, you lose. " + computerScore + "-" + humanScore);
    }
}

/*function getHumanChoice(){
    let choice = prompt("Rock, Paper, Scissors");
    choice = choice.toLowerCase();
    if (choice === "rock"){
        return "Rock";
    }
    else if (choice === "paper"){
        return "Paper";
    }
    else if (choice === "scissors"){
        return "Scissors";
    }
    //if they enter nothing, call the function until they do
    else if (choice ===""){
        alert("You have to commit to SOMETHING in life!");
        return getHumanChoice();
    }
    //if they enter something that isn't one of the choices, call the function until they do
    else{
        alert("There are only three options!");
        return getHumanChoice();
    }
}*/
