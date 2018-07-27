# Rock, Paper, Scissors

Rock, paper, scissors game against a computer and implemented with buttons.

# Implementation

## Built With

* Vanilla JavaScript
* HTML5
* CSS3

## Making a Move

The 'click' event is used to determine when a selection has been made. The round
is played out based on the player's selection and the random computer selection.
After five rounds have gone by, the winner is displayed.

```
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
```

## Computer Move

The random move by the computer is determined by using floor() and random().
random() returns a random number between zero and one. This number is multiplied
by the number of choices (three), which results in a decimal number. floor() is
used to round the number down in order to get the choice.

```
function computerPlay(){
  var choices = ['rock', 'paper', 'scissors'];
  var rand = choices[Math.floor(Math.random() * choices.length)];
  return rand;
}
```

# Future Plans

* Make the site responsive
* Add more aesthetics to the page
* Add a player v player option
