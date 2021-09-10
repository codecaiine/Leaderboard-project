const fetch = require('node-fetch');

const addName = document.getElementById('add-name');
const addScore = document.getElementById('add-score');

const postScores = async (url) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: addName.value,
      score: addScore.value,
    }),
  });

  if (!response.ok) {
    throw new Error(`API error! status: ${response.status}`);
  } else {
    addName.value = '';
    addScore.value = '';
    return response.json();
  }
};

export default postScores;