import WordleBoard from "./components/WordleBoard";
import { createContext, useState } from "react";
import validNames from "./data/names.json"
export const WordleContext = createContext();

function App() {
  const names = validNames && validNames;
  const [word, setWord] = useState('GAMES');
  const [guessWord, setGuessWord] = useState('');
  const [completedRows, setCompletedRows] = useState([]);
  const [currentRow, setCurrentRow] = useState(0);

  function guessTheWord(char) {
    if(guessTheWord.length === 5) {
      return;
    }
    setGuessWord(guessTheWord.concat(char));
  }

  function pressEnter() {
    if(guessTheWord.length < 5) return;
    if(!validNames.includes(guessTheWord.toLowerCase())) return alert('pokemon doesnt exist!');
    if(guessTheWord == word ) alert("congrats u got it!");

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
