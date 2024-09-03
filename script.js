'use strict';
const btnRoll = document.querySelector('.btn--roll');
const diceEl  = document.querySelector('.dice');
const player1 = document.getElementById('player--0');
const player2 = document.getElementById('player--1');
const btnHold = document.querySelector('.btn--hold');
const score1 = document.getElementById('score--0');
const score2 = document.getElementById('score--1');
const current1 = document.getElementById('current--0');
const current2 = document.getElementById('current--1');
const name1 = document.getElementById('name--0');
const name2 = document.getElementById('name--1');
const btnNew = document.querySelector('.btn--new');
const oo = prompt('Player 1 what is your name')
const ooo = prompt('Player 2 what is your name')

let score, roundScore, activePlayer, playing, currentScore, win;
// score = [0, 0];
// roundScore = 0;
// activePlayer = 0;
// playing = true;
// currentScore = 0;

const init = function () {
  score = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score1.textContent = 0;
  score2.textContent = 0;
  current1.textContent = 0;
  current2.textContent = 0;
  win = 'winner';
  if (diceEl) {
    diceEl.classList.add('hidden');
  }

  if (player1) {
  	player1.classList.remove('player--winner');
  	player1.classList.add('player--active');
  	
  	document
    .getElementById(`name--${0}`).textContent = oo;
  }
  if (player2) {
    player2.classList.remove('player--winner');
     player2.classList.remove('player--active');
     document
     .getElementById(`name--${1}`).textContent = ooo;
     
  }
};
init();

const switchPlayer = function() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  if (player1) {
  	 player1.classList.toggle('player--active');
  }
  if (player2) {
     player2.classList.toggle('player--active');
  }
};


btnRoll.addEventListener('click' , function () {
	if (playing) {
		const dice = Math.trunc(Math.random() * 6) + 1;
		document.getElementById('current--' + activePlayer).textContent = dice;

		diceEl.classList.remove('hidden');
    	diceEl.src = `dice-${dice}.png`;

    	if (dice !== 1) {
	      // Add dice to current score
	      currentScore += dice;
	      document.getElementById(
	        `current--${activePlayer}`
	      ).textContent = currentScore;
    	} else {
	      // Switch to next player
	      switchPlayer();
	    }
	}

})
btnHold.addEventListener('click', function () {
	// body...
	if (playing) {
		score[activePlayer] += currentScore;
		document.getElementById(
	        `score--${activePlayer}`
	      ).textContent = score[activePlayer]; 
	}
		if (score[0] >= 10) {
			playing = false;
			diceEl.classList.add('hidden');
			const playerWon = document
	        .querySelector(`.player--${activePlayer}`);

	        playerWon.classList.add('player--winner');
	        document
	        .querySelector(`.player--${activePlayer}`)
            .classList.remove('player--active');
            document
            .getElementById(`name--${activePlayer}`).textContent = oo +' is the winner';
        }
         else if(score[1] >= 10){
         		playing = false;
			diceEl.classList.add('hidden');
			const playerWon = document
	        .querySelector(`.player--${activePlayer}`);

	        playerWon.classList.add('player--winner');
	        document
	        .querySelector(`.player--${activePlayer}`)
            .classList.remove('player--active');
            document
            .getElementById(`name--${activePlayer}`).textContent =  ooo +' is the winner';
         
		}else {
			switchPlayer();
		}
})


	
btnNew.addEventListener('click', function(){
	const start = prompt('Type 1 to start again with your patner else refresh?');
	if (start === '1') {
		init();
	}
});





































































// const btnRoll = document.querySelector('.btn--roll');
// const btnHold = document.querySelector('.btn--hold');
// const btnNew = document.querySelector('.btn--new');
// const diceimg  = document.querySelector('.dice');
// const player1 = document.getElementById('player--0');
// const player2 = document.getElementById('player--1');
// const current1 = document.getElementById('current--0');
// const current2 = document.getElementById('current--1');
// const score1 = document.getElementById('score--0');
// const score2 = document.getElementById('score--1');

// let scores, currentscores, activePlayer, playing;
// const dice = Math.trunc(Math.random() * 6) + 1;
// // Starting conditions
// //init
// const init = function () {
// 	// body...
// scores = [0, 0];
// currentscores = 0;
// activePlayer = 0;
// playing = true;
// current1 = 0;
// current2 = 0;
// score1 = 0;
// score2 = 0;
// player1.classList.remove('player--active')
// diceimg.classList.add('hidden');

// }
// //switchplayer

// // Rolling dice functionality
// // 1. Generating a random dice roll
// // 2. Display dice
// // 3. Check for rolled 1
// // Add dice to current score
// // Switch to next player
// // 1. Add current score to active player's score
// // scores[1] = scores[1] + currentScore
// // 2. Check if player's score is >= 100
// // Finish the game
// // Switch to the next player












