var playerPoints = 0;
var computerPoints = 0;
var gameRound = 0;

function computerPlay(){
  var choices = ['rock', 'paper', 'scissors'];
  var rand = choices[Math.floor(Math.random() * choices.length)];
  return rand;
}

function playRound(playerSelection, computerSelection){
  /* Winning Scenarios*/
  if (playerSelection.toLowerCase() == 'rock' &&
      computerSelection.toLowerCase() == 'scissors'){
    playerPoints++;
    return 'You Win! Rock beats Scissors';
  }
  else if (playerSelection.toLowerCase() == 'paper' &&
      computerSelection.toLowerCase() == 'rock') {
    playerPoints++;
    return 'You Win! Paper beats Rock';
  }
  else if (playerSelection.toLowerCase() == 'scissors' &&
      computerSelection.toLowerCase() == 'paper'){
    playerPoints++;
    return 'You Win! Scissors beats Paper';
  }
  /* Losing Scenarios*/
  else if (playerSelection.toLowerCase() == 'rock' &&
      computerSelection.toLowerCase() == 'paper'){
    computerPoints++;
    return 'You Lose! Paper beats Rock';
  }
  else if (playerSelection.toLowerCase() == 'paper' &&
      computerSelection.toLowerCase() == 'scissors'){
    computerPoints++;
    return 'You Lose! Scissors beats Paper';
  }
  else if (playerSelection.toLowerCase() == 'scissors' &&
      computerSelection.toLowerCase() == 'rock'){
    computerPoints++;
    return 'You Lose! Rock beats Scissors';
  }
  /* Tie Scenario*/
  else if (playerSelection.toLowerCase() == computerSelection.toLowerCase()){
    return 'Draw!';
  }
}

function currentScore(){
  if(gameRound < 5){
    return "Player rounds won: " + playerPoints + " | Computer rounds won: " + computerPoints;
  }
  gameRound++;
}

function winnerResult(){
  if (playerPoints > computerPoints){
    return "You Win " + playerPoints + " to " + computerPoints;
  }
  else if(computerPoints > playerPoints){
    return "You Lose " + computerPoints + " to " + playerPoints;
  }
  else if(computerPoints = playerPoints || computerPoints == 0 &&
    playerPoints == 0){
      return "Draw in score...PLAY AGAIN!";
    }
  }

var rockBtn = document.querySelector('#rockBtn');
rockBtn.addEventListener('click', function (e) {
  if(gameRound < 5){
    var computerSelection = computerPlay();
    document.getElementById('resultDiv').innerHTML =
    playRound('rock', computerSelection);
    document.getElementById('currentScoreDiv').innerHTML = currentScore();
    gameRound++;
  }
  else{
    document.getElementById('resultDiv').innerHTML = '';
    document.getElementById('currentScoreDiv').innerHTML = '';
    document.getElementById('winnerDiv').innerHTML =
    winnerResult();
  }
});

var paperBtn = document.querySelector('#paperBtn');
paperBtn.addEventListener('click', function (e) {
  if(gameRound < 5){
    var computerSelection = computerPlay();
    document.getElementById('resultDiv').innerHTML =
    playRound('paper', computerSelection);
    document.getElementById('currentScoreDiv').innerHTML = currentScore();
    gameRound++;
  }
  else{
    document.getElementById('resultDiv').innerHTML = '';
    document.getElementById('currentScoreDiv').innerHTML = '';
    document.getElementById('winnerDiv').innerHTML =
    winnerResult();
  }
});

var scissorsBtn = document.querySelector('#scissorsBtn');
scissorsBtn.addEventListener('click', function (e) {
  if(gameRound < 5){
    var computerSelection = computerPlay();
    document.getElementById('resultDiv').innerHTML =
    playRound('scissors', computerSelection);
    document.getElementById('currentScoreDiv').innerHTML = currentScore();
    gameRound++;
  }
  else{
    document.getElementById('resultDiv').innerHTML = '';
    document.getElementById('currentScoreDiv').innerHTML = '';
    document.getElementById('winnerDiv').innerHTML =
    winnerResult();
  }
});

var playAgainBtn = document.querySelector('#playAgainBtn');
playAgainBtn.addEventListener('click', function (e) {
  document.location.reload(true);
});
