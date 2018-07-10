/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer

init();

// document.querySelector('#current-' + activePlayer).textContent = dice; //plain text content, setter
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'; // HTML text content
// var x = document.querySelector('#score-0').textContent; //getter


// EVENT
// : Notifications that are sent to notify the code that something happened on the webpage
// : clicking a button, resizing a window, scrolling down or pressing a key
// EVENT LISTENER : A function that performs an action based on a certain event. It waits for a specific event to happen

document.querySelector('.btn-roll').addEventListener('click',function() { //anonymous funciton
  
  // 1. Random number
  var dice = Math.floor(Math.random() * 6) + 1;

  // 2. Display the result
  var diceDOM = document.querySelector('.dice');
  diceDOM.style.display = 'block'; //make it visible
  diceDOM.src = 'dice-' + dice + '.png';
    
  // 3. Update the round score IF the rolled number was NOT a 1
  if (dice !== 1) {
    //Add score
    roundScore += dice; //roundScore = roundScore + dice
    document.querySelector('#current-' + activePlayer).textContent = roundScore;
  } else {
    //Next player
    nextPlayer();

  }
}); 

// HOLD BUTTON
document.querySelector('.btn-hold').addEventListener('click', function() {
  // Add CURRENT score to GLOBAL score
  scores[activePlayer] =+ roundScore;  // scores[activePlayer] = scores[activePlayer] + roundScore
  
  // Update the UI
  document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
  
  // Check if player won the game 
  if(scores[activePlayer] >= 20) {
    document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
  } else {
    // Next player
  nextPlayer();
  }
  
});


// DRY CODING
function nextPlayer() {
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent ='0';
    document.getElementById('current-1').textContent ='0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    // document.querySelector('.player-0-panel').classList.remove('active');
    // document.querySelector('.player-1-panel').classList.add('active');

    document.querySelector('.dice').style.display = 'none';
}


// NEW GAME BUTTON
document.querySelector('.btn-new').addEventListener('click', init);

function init() {
  scores = [0,0];
  roundScore = 0;
  activePlayer = 0;
  document.querySelector('.dice').style.display = 'none'; //styleMethod.CSSproperty = 'CSSattribute' 

  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');
}
