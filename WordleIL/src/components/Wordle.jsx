import React, { useState, useEffect, useRef } from 'react';
import '../styles/Wordle.css';
import Row from './Row';
import Keyboard from './Keyboard';
import {LETTERS} from '../data/lettersAndWords'

const SOLUTION = "מסיבה";
const wordLength = 5;

const Wordle = () => {
  const [guesses, setGuesses] = useState([
    "     ", 
    "     ", 
    "     ", 
    "     ", 
    "     ", 
    "     "
  ]);

  const [solutionFound, setSolutionFound] = useState(false);
  const [activeLetterIndex, setActiveLetterIndex] = useState(wordLength-1); //Right to left in Hebrew
  const [notification, setNotification] = useState("");
  const [activeRowIndex, setActiveRowIndex] = useState(0);
  const wordleRef = useRef();

  useEffect(() => {
    wordleRef.current.focus();
  }, []);

  //#region [Hitting Keys Function]
  
  const typeLetter = (letter) => {
    console.log("Letter typed: ", letter); //TODO: delete later

    if (activeLetterIndex < wordLength) {
      setNotification(""); //reset previous notifications

      let newGuesses = [...guesses];
      newGuesses[activeRowIndex] = replaceCharacter(
        newGuesses[activeRowIndex],
        activeLetterIndex,
        letter
      );

      setGuesses(newGuesses);
      setActiveLetterIndex((index) => index - 1);
    }
  };

  const replaceCharacter = (string, index, replacement) => {
    return (string.slice(0, index) + replacement + string.slice(index + 1)
    );
  };

  const hitEnter = () =>{
    //TODO: add later
  }

  const hitBackspace = () =>{
    //TODO: add later
  }

  //#endregion
 
  const handleKeyDown = (event) => {
    if (solutionFound) return;

    if (LETTERS.includes(event.key)) {
      typeLetter(event.key);
    }
    //add here code for when typing English letters (since game is in Hebrew)

    if (event.key === "Enter") {
      hitEnter();
      return;
    }

    if (event.key === "Backspace") {
      hitBackspace();
    }
  }

  return (
    <div
      className='wordle'
      ref={wordleRef}
      tabIndex="0"
      onBlur={(e) => { e.target.focus(); }}
      onKeyDown={handleKeyDown}
    >
      <h1 className='title'>עברית Wordle IL</h1>
      <div className='notification'> </div>
      {guesses.map((guess, index) => (
        <Row key={index} word={guess} />
      ))}
    </div>
  );
};

export default Wordle;