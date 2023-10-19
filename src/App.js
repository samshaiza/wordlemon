import WordleBoard from "./components/WordleBoard";
import { createContext, useEffect, useState } from "react";
import { generateNameSet } from "./Words";
export const WordleContext = createContext();

function App() {
  const [nameSet, setNameSet ] = useState(new Set());
  const [word, setWord] = useState('EKANS');
  const [guessWord, setGuessWord] = useState('');
  const [completedRows, setCompletedRows] = useState([]);
  const [currentRow, setCurrentRow] = useState(0);

  useEffect(() => {
      generateNameSet().then((names) => {
        setNameSet(names.nameSet);
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
    if(guessWord == word ) {
      alert("congrats u got it!");
    } 
    
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
      pressBackspace
    }}>
      <WordleBoard />
    </WordleContext.Provider>
  );

}

export default App;
