import React, {useContext} from 'react'
import { WordleContext } from '../App'

export default function GameOver() {
    const { gameOver, word, currentRow } = useContext(WordleContext);
  return (
    <div className="">
        <h1>{gameOver.guessedWord ? "You got it homeslice!" : "You failure..."}</h1>
        <h1>Correct: {word}</h1>
        {gameOver.guessedWord && (
            <h3>You guessed in {currentRow} tries!</h3>
        )}
    </div>
  )
}
