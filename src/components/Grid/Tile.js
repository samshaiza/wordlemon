import { useState } from "react";
import React from 'react'
import { WordleContext } from "../../App";


export default function Tile() {
    const [letter, setLetter] = useState('');
    const [completed, setCompleted] = useState(true);
    const {guessWord, word, currentRow, completedRows} = React.useContext(WordleContext);
    const [colors, setColors] = useState({back: "white", font: "black"});

    const style = {
        backgroundColor: colors.back,
        color: colors.font 
    }

    function changeColors() {
        const arrayWord = word.split("");
        if(arrayWord.includes(letter)) {
            if(arrayWord[id] === letter) {
                return setColors({back: 'lightgreen', font: 'white'});
            }
            return setColors({back: 'gold', font: 'white'});
        }
        return setColors({back: 'grey', font: 'white'});
    }

    return (
        <div style={{style}} className='flex justify-center my-[2px] m-[2px] items-center w-[62px] h-[62px] border-2'>
            <p className='flex self-center mb-2 font-bold text-5xl'>{letter}</p>
        </div>
    )
}
