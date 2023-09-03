'use strict';
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnnew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const btnhold = document.querySelector('.btn--hold');
//starting condition
let scores, currentscore, activeplayer, playing;

const initial = function () {
  diceEl.classList.add('hidden');
  scores = [0, 0];
  currentscore = 0;
  activeplayer = 0;
  playing = true;
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
initial();
//rolling function
const switchplayer = function () {
  document.getElementById(`current--${activeplayer}`).textContent = 0;
  activeplayer = activeplayer == 0 ? 1 : 0;
  currentscore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};
btnRoll.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    if (dice != 1) {
      currentscore += dice;
      document.getElementById(`current--${activeplayer}`).textContent =
        currentscore;
    } else {
      switchplayer();
    }
  }
});

btnhold.addEventListener('click', function () {
  if (playing) {
    scores[activeplayer] += currentscore;
    document.getElementById(`score--${activeplayer}`).textContent =
      scores[activeplayer];
    if (scores[activeplayer] >= 30) {
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.remove('player--active');
    } else {
      switchplayer();
    }
  }
});

btnnew.addEventListener('click', initial);
