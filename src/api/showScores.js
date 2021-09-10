const listScore = document.querySelector('.list-scores');

function showScores(gameScores) {
  listScore.innerHTML = '';
  gameScores.forEach((gameScore) => {
    const content = `${gameScore.user}: ${gameScore.score}`;
    const myList = document.createElement('li');
    myList.innerText = content;
    myList.className = 'list-score-item';
    listScore.appendChild(myList);
  });
}

export default showScores;