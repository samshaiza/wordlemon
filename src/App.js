import WordleBoard from "./components/WordleBoard";
import { createContext, useEffect, useState } from "react";
import { generateNameSet } from "./Words";
export const WordleContext = createContext();

function App() {
  const [nameSet, setNameSet ] = useState(new Set());
  const [word, setWord] = useState('');
  const [guessWord, setGuessWord] = useState('');
  const [completedRows, setCompletedRows] = useState([]);
  const [currentRow, setCurrentRow] = useState(0);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [gameOver, setGameOver] = useState({gameOver: false, guessedWord: false});
  const [tileReset, setTileReset] = useState(false);
  useEffect(() => {
      generateNameSet().then((names) => {
        setNameSet(names.nameSet);
        setWord(names.firstWord);
      })
      .catch((err) => {
        console.error(err);
      });
      console.log('i fire once');
  }, []);

  function guessTheWord(char) {
    if(guessWord.length === 5) {
      return;
    }
    setGuessWord(guessWord.concat(char));
  }

  function pressEnter() {
    if(guessWord.length < 5) return;
    if(!nameSet.has(guessWord.toLowerCase())) return alert('pokemon doesnt exist!');
    if(guessWord === word.toUpperCase() ) {
      setGameOver({gameOver: true, guessedWord: true});
    } 
    if (currentRow === 5 && guessWord !== word.toUpperCase()) {
      setGameOver({gameOver: true, guessedWord: false});
    }
    console.log("NEW TURN");
    setCurrentRow(currentRow+1);
    setCompletedRows([...completedRows, currentRow]);
    setGuessWord("");
  }

  function pressBackspace() {
    setGuessWord(guessWord.slice(0, guessWord.length-1));
  }

  return (
    <WordleContext.Provider value={{
      guessTheWord,
      pressEnter,
      completedRows,
      currentRow,
      word,
      guessWord,
      pressBackspace,
      wrongLetters,
      setWrongLetters,
      gameOver,
      setGameOver,
      setWord,
      setCurrentRow,
      setCompletedRows,
      nameSet,
      setGuessWord,
      setTileReset,
      tileReset
    }}>
      <WordleBoard />
    </WordleContext.Provider>
  );

}

export default App;
