import './style.css';
import getScores from './api/getScores.js';
import postScores from './api/postScores.js';
import showScores from './api/showScores.js';
import error from './api/error.js';

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/rERLsIh7NMEJsjCiciOY/scores';

const refreshButton = document.querySelector('.btn-refresh');
const addButton = document.getElementById('btn-submit');
const form = document.getElementById('form-submission');

addButton.addEventListener('click', async (e) => {
  e.preventDefault();
  const name = form.name.value;
  const score = form.score.value;
  if (score.match(/^[0-9]+$/) == null || name === '') {
    error('Invalid input!', 'alert-danger');
  } else {
    error('Score added succesfully!', 'alert-success');
    postScores(url);
  }
});

refreshButton.addEventListener('click', () => {
  getScores(url).then((data) => { showScores(data.result); });
});

window.onload = getScores(url).then((data) => { showScores(data.result); });