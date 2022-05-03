
const choices = ["scissors", "paper", "rock"]

//helper functions for round results

function win() {
  console.log("Nice Work, you won");
}
function lose() {
  console.log("Damn you lost this one");
}
function tie(val1, val2) {
  console.log(("Thats a tie " + val1 + " VS " + val2));
}

function RVS() {
  console.log("Rock beats scissors.");
}
function PVR() {
  console.log("Paper beats rock.");
}
function SVP() {
  console.log("Scissors beats paper.");
}

//This function asks the player to enter their choice for 
//Make this function fine to take null values

function takeInput() {
  let input = prompt("Please enter scissors, paper or rock?")
  while (input.toLowerCase() != "scissors" && input.toLowerCase() != "paper" && input.toLowerCase() != "rock") {
    input = prompt("Please enter scissors, paper or rock?")
  }
  return input.toLowerCase();
}


  

//this function returns the computers random selection of scissors, 
//paper or rock based on the choices array defined above and the random 
//number generator producing a number between 0 and 2.

function computerPlay() {
  return choices[Math.floor(Math.random() * 3)]
}

//this function takes the two values picked by the computer and player and 
//compares them based of the rules of scissors paper rock, then console logs 
//the results of each match.

function playRound(playerSection, computerSelection) {
  if (playerSection == computerSelection) {
    tie(playerSection, computerSelection);
    return 0
  } else if (playerSection == "scissors" && computerSelection == "paper") {
    win();
    SVP();
    return 1;
  } else if (playerSection == "scissors" && computerSelection == "rock") {
    lose();
    RVS();
    return 2;
  } else if (playerSection == "rock" && computerSelection == "scissors") {
    win();
    RVS();
    return 1;
  } else if (playerSection == "rock" && computerSelection == "paper") {
    lose();
    PVR();
    return 2;
  } else if (playerSection == "paper" && computerSelection == "rock") {
    win();
    PVR();
    return 1;
  } else if (playerSection == "paper" && computerSelection == "scissors") {
    lose();
    SVP();
    return 2;
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  let roundCount = 0;

  while (roundCount < 5) {
    let result = playRound(takeInput(), computerPlay());
    if (result == 1) {
      playerScore++;
      roundCount++;
      console.log("Home: " + playerScore + " Away: " + computerScore + " Round: " + roundCount);
    } else if (result == 2) {
      computerScore++;
      roundCount++;
      console.log("Home: " + playerScore + " Away: " + computerScore + " Round: " + roundCount);
    } else {
      roundCount++;
      console.log("Home: " + playerScore + " Away: " + computerScore + " Round: " + roundCount);
    }
  }
}

game();