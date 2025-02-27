// src/components/Word.jsx
import React from 'react';
import { motion } from 'framer-motion';

const letterVariants = {
  hidden: { scale: 1 },
  visible: { scale: 1.2, transition: { duration: 0.3 } }
};

const Word = ({ selectedWord, guessedLetters }) => {
  return (
    <div className="word">
      {selectedWord.split('').map((letter, index) => (
        <motion.span
          key={index}
          className="letter"
          variants={letterVariants}
          initial="hidden"
          animate={guessedLetters.includes(letter) ? 'visible' : 'hidden'}
        >
          {guessedLetters.includes(letter) ? letter : '_'}
        </motion.span>
      ))}
    </div>
  );
};

export default Word;
