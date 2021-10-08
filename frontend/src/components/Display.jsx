import React from 'react';
import './Display.css';

const Display = ({ randomNumber }) => {
  console.log('number', typeof randomNumber);
  const arr = Array.from(randomNumber.toString()).map(Number);

  return (
    <>
      <h2>Random number generator</h2>
      <div>
        {arr.map((span, i) => (
          <span key={i} className="box">
            {isNaN(span) ? '-' : span}
          </span>
        ))}
      </div>
    </>
  );
};

export default Display;

// const 12345

// [1,2,3,4,5]
