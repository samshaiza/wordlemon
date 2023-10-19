import React, { useContext } from 'react'
import { WordleContext } from '../App'
import { newWord } from '../Words';

export default function RestartBtn() {
    const { setCurrentRow, setWrongLetters, setGameOver, setWord, setCompletedRows, nameSet, setGuessWord, setTileReset } = useContext(WordleContext);
    
    function restartGame() {
        setCurrentRow(0);
        setWrongLetters([]);
        setGameOver({gameOver: false, guessedWord: false});
        setCompletedRows([]);
        setWord(newWord(Array.from(nameSet)));
        setGuessWord("");
        setTileReset(true);
    }
  return (
    <div>
        <button onClick={restartGame}>Restart?</button>
    </div>
  )
}
