import React, { useContext } from 'react'
import Grid from './Grid/Grid'
import Keyboard from './Keyboard/Keyboard'
import { WordleContext } from '../App'
import GameOver from './GameOver'
export default function WordleBoard() {
    const { gameOver } = useContext(WordleContext)

  return (
    <div className='flex flex-col justify-center items-center'>
        <h1 className='font-extrabold text-5xl m-4'>WORDLEMON</h1>
        <Grid />
        {gameOver.gameOver ? <GameOver /> : <Keyboard />}
    </div>
  )
}
