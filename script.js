//helper functions for Game results

function win(num) {
  if (num === 1) {
    return "Nice Work, you won";
  } else if (num === 2) {
    return " Nice work you won the match";
  }  
}

function lose(num) {
  if (num === 1) {
    return "Damn you lost this one";
  } else if (num === 2) {
    return " You lost this match";
  }  
}

function tie(val1, val2) {
  return ("Thats a tie " + val1 + " VS " + val2);
}

//Helper functions for round results

function RVS() {
  return "Rock beats scissors.";
}
function PVR() {
  return "Paper beats rock.";
}
function SVP() {
  return "Scissors beats paper.";
}

//returns random selection of below array

function computerPlay() {
  return ['scissors', 'paper', 'rock'][Math.floor(Math.random() * 3)]
}

//Updates round and score variables after each round

function updateRoundScore(player, comp, round) {
  document.getElementById('home-score').textContent = player;
  document.getElementById('away-score').textContent = comp;
  if (round > 5) {
    document.getElementById('round').textContent = "FINISH";
  } else {
    document.getElementById('round').textContent = round;
  }
}

//When roundCount reaches 6, checkWinner function decides the winner based
//off final scores

function checkWinner(playerScore, computerScore, resultPara) {
  if (playerScore > computerScore) {
    resultPara.textContent += win(2); 
  } else if (computerScore > playerScore) {
    resultPara.textContent += lose(2);
  } else {
    resultPara.textContent += tie(playerScore, computerScore);
  }
}

//takes input variable and compares to computer selection
//decides winner and returns number to update scoring 0 = tie, 1 = win, 2 = lose

function playRound(playerSection, computerSelection, resultPara) {
  resultPara.textContent = '';
  if (playerSection == computerSelection) {
    resultPara.textContent = tie(playerSection, computerSelection);
    return 0
  } else if (playerSection == "scissors" && computerSelection == "paper") {
    resultPara.textContent = `${win(1)}, ${SVP()}`;
    return 1;
  } else if (playerSection == "scissors" && computerSelection == "rock") {
    resultPara.textContent = `${lose(1)}, ${RVS()}`;
    return 2;
  } else if (playerSection == "rock" && computerSelection == "scissors") {
    resultPara.textContent = `${win(1)}, ${RVS()}`;
    return 1;
  } else if (playerSection == "rock" && computerSelection == "paper") {
    resultPara.textContent = `${lose(1)}, ${PVR()}`;
    return 2;
  } else if (playerSection == "paper" && computerSelection == "rock") {
    resultPara.textContent = `${win(1)}, ${PVR()}`;
    return 1;
  } else if (playerSection == "paper" && computerSelection == "scissors") {
    resultPara.textContent = `${lose(1)}, ${SVP()}`;
    return 2;
  }
}

//sets all base variables and listens for button clicks

function game() {
  let playerScore = 0;
  let computerScore = 0;
  let roundCount = 1;
  let resultPara = document.getElementById('result-box')
  resultPara.textContent = 'Select a choice from below';
  updateRoundScore(playerScore, computerScore, roundCount);
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => button.addEventListener('click', input));
  function input(e) {
    let result = playRound(this.classList.value, computerPlay(), resultPara);
    if (result == 1) {
      playerScore++; roundCount++;
      updateRoundScore(playerScore, computerScore, roundCount);
    } else if (result == 2) {
      computerScore++; roundCount++;
      updateRoundScore(playerScore, computerScore, roundCount);
    } else {
      roundCount++;
      updateRoundScore(playerScore, computerScore, roundCount);
    }
    if (roundCount == 6) {
      checkWinner(playerScore, computerScore, resultPara);
      setTimeout( () => game(), 2000);      
    } 
  }
}

game();