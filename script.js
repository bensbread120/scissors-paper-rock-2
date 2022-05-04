
const choices = ["scissors", "paper", "rock"]

//helper functions for round results

function win(num) {
  if (num === 1) {
    console.log("Nice Work, you won");
  } else if (num === 2) {
    console.log("Nice work you won the match")
  }
  
}
function lose(num) {
  if (num === 1) {
    console.log("Damn you lost this one");
  } else if (num === 2) {
    console.log("You lost this match")
  }
  
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
  input = checkForNull(input);
  while (input != "scissors" && input != "paper" && input != "rock") {
    input = prompt("Please enter scissors, paper or rock?")
  }
  return input;
}

function checkForNull(input) {
  if (input == null) {
    return;
  } else {
    return input.toLowerCase();
  }
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
  console.log("You picked: " + playerSection + " The computer picked: " + computerSelection);
  if (playerSection == computerSelection) {
    tie(playerSection, computerSelection);
    return 0
  } else if (playerSection == "scissors" && computerSelection == "paper") {
    win(1);
    SVP();
    return 1;
  } else if (playerSection == "scissors" && computerSelection == "rock") {
    lose(1);
    RVS();
    return 2;
  } else if (playerSection == "rock" && computerSelection == "scissors") {
    win(1);
    RVS();
    return 1;
  } else if (playerSection == "rock" && computerSelection == "paper") {
    lose(1);
    PVR();
    return 2;
  } else if (playerSection == "paper" && computerSelection == "rock") {
    win(1);
    PVR();
    return 1;
  } else if (playerSection == "paper" && computerSelection == "scissors") {
    lose(1);
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
  checkWinner(playerScore, computerScore);
  loopGame(2);
}

function checkWinner(playerScore, computerScore) {
  if (playerScore > computerScore) {
    win(2); 
  } else if (computerScore > playerScore) {
    lose(2);
  } else {
    tie(playerScore, computerScore);
  }
}

function loopGame(num) {
  if (num === 1) {
    let decision = prompt("Would you like to play Scissors, Paper, Rock?");
    decision = checkForNull(decision);
    if (decision == "yes") {
      game();
    } else {
      console.log("Thanks for coming!!");
    } 
  } else if (num == 2) {
    let loopCounter = true;
    while (loopCounter) {
      let decision = prompt("Would you like to play again?")
      decision = checkForNull(decision);
      if (decision === "yes") {
        game()
      } else {
        console.log("Thanks for playing!")
        loopCounter = false;
        break;
      }
    }
  }
}

loopGame(1);