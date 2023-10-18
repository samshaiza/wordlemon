import React, { createContext } from 'react'
import Grid from './Grid/Grid'
import Keyboard from './Keyboard/Keyboard'

export default function WordleBoard() {
  return (
    <div>
        <h1 className='font-extrabold text-5xl m-4'>WORDLEMON</h1>
        <Grid />
        <Keyboard />
    </div>
  )
}
