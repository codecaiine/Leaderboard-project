import './style.css';
import getScores from './api/getScores.js';
import postScores from './api/postScores.js';
import showScores from './api/showScores.js';

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/LPtxThYxLPjCftqWH3A6/scores';

const refreshButton = document.querySelector('.btn-refresh');
const form = document.getElementById('form-submission');

form.addEventListener('click', async (ev) => {
  ev.preventDefault();
  postScores(url);
});

refreshButton.addEventListener('click', () => {
  getScores(url).then((data) => { showScores(data.result); });
});

window.onload = getScores(url).then((data) => { showScores(data.result); });