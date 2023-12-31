import React, { useContext } from 'react'
import { WordleContext } from '../../App'

export default function Key(props) {

    const { guessTheWord, pressBackspace, pressEnter } = useContext(WordleContext)

    function handleClickForBig() {
        if(props.letter === "Enter") {
            pressEnter();
        } else {
            pressBackspace();
        }
    }

    if(props.big) {
        return (
            <button
            onClick={() => handleClickForBig()}
            style={{
                width: 65,
                height: 58,
                margin: 3,
                borderRadius: 3,
                display: 'grid',
                placeItems: 'center',
                fontSize: 15,
                backgroundColor: '#d3d6da',
                color: 'black',
                fontFamily: 'Arial',
                cursor: 'pointer',
                border: 0,
                fontWeight: 'bold'
            }}
            >
                {props.letter}
            </button>
        )
    } else if (props.disabled) {
        return (
            <button
            onClick={() => guessTheWord(props.letter)}
            style={{
                width: 43,
                height: 58,
                margin: 3,
                borderRadius: 3,
                display: 'grid',
                placeItems: 'center',
                fontSize: 15,
                backgroundColor: '#d3d6da',
                color: 'grey',
                fontFamily: 'Arial',
                cursor: 'pointer',
                border: 0,
                fontWeight: 'bold',
                opacity: 0.7,
            }}
            >
                {props.letter}
            </button>
        )
    }
  return (
    <button
            onClick={() => guessTheWord(props.letter)}
            style={{
                width: 43,
                height: 58,
                margin: 3,
                borderRadius: 3,
                display: 'grid',
                placeItems: 'center',
                fontSize: 15,
                backgroundColor: '#d3d6da',
                color: 'black',
                fontFamily: 'Arial',
                cursor: 'pointer',
                border: 0,
                fontWeight: 'bold'
            }}
            >
                {props.letter}
            </button>
  )
}
