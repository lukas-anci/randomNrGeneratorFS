import React from 'react';

import './Button.css';

const Button = ({ generateNumber, length, setLength, setRandomNumber }) => {
  return (
    <div>
      <button
        onClick={() => generateNumber(length, setLength, setRandomNumber)}
      >
        Generate {length} digit number
      </button>
    </div>
  );
};

export default Button;
