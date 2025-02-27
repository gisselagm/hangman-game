// src/utils/words.js
export const words = ['javascript', 'react', 'node', 'frontend', 'programming'];

export const getRandomWord = () => {
  return words[Math.floor(Math.random() * words.length)];
};
