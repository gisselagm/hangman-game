// src/App.jsx
import React, { useState } from 'react';
import Word from './components/Word';
import Keyboard from './components/Keyboard';
import Hangman from './components/Hangman';
import { getRandomWord } from './utils/words';
import './App.css';

const MAX_ERRORS = 6;

function App() {
  const [selectedWord, setSelectedWord] = useState(getRandomWord());
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [errors, setErrors] = useState(0);

  const handleGuess = (letter) => {
    if (guessedLetters.includes(letter)) return;
    setGuessedLetters([...guessedLetters, letter]);

    if (!selectedWord.includes(letter)) {
      setErrors((prevErrors) => prevErrors + 1);
    }
  };

  const isWinner = selectedWord.split('').every(letter => guessedLetters.includes(letter));
  const isLoser = errors >= MAX_ERRORS;

  const resetGame = () => {
    setSelectedWord(getRandomWord());
    setGuessedLetters([]);
    setErrors(0);
  };

  return (
    <div className="App">
      <h1>Hangman Game</h1>
      <Hangman errors={errors} />
      <p>Attempts: {errors} / {MAX_ERRORS}</p>
      <Word selectedWord={selectedWord} guessedLetters={guessedLetters} />
      <Keyboard handleGuess={handleGuess} guessedLetters={guessedLetters} />

      {isWinner && <div className="message">You Win!</div>}
      {isLoser && <div className="message">You Lose. The word was: {selectedWord}</div>}

      {(isWinner || isLoser) && (
        <button onClick={resetGame}>Restart Game</button>
      )}
    </div>
  );
}

export default App;
