import React from 'react';
import "../styles/Row.css";

function Row({ word }) {
  return (
    <div className='row'>
      {word.split("").map((letter, index) => (
        <div className='letter' key={index}>
          <div className='front'>{letter}</div>
          <div className='back'>{letter}</div>
        </div>
      ))}
    </div>
  );
}

export default Row;