const fetch = require('node-fetch');

const getScores = async (url) => {
  const response = await fetch(url, { method: 'GET' });
  if (!response.ok) {
    throw new Error(`API error! status: ${response.status}`);
  } else {
    return response.json();
  }
};

export default getScores;