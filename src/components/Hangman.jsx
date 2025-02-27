// src/components/Hangman.jsx
import React from 'react';

const Hangman = ({ errors }) => {
  return (
    <div className="hangman">
      <p>Errors: {errors}</p>
      {/* You can add images or SVG drawings here to show the hangman state */}
    </div>
  );
};

export default Hangman;
