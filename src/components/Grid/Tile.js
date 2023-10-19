import { useState } from "react";
import React from 'react'
import { WordleContext } from "../../App";

export default function Tile({id, rowId}) {
    
    const [letter, setLetter] = useState('');
    const [completed, setCompleted] = useState(true);
    const {guessWord, word, currentRow, completedRows, setWrongLetters, tileReset, setTileReset } = React.useContext(WordleContext);
    const [colors, setColors] = useState({back: "white", font: "black"});

    function completedRowsEmpty() {
        return completedRows.length > 0 ? false : true;
    }

    const style = {
        backgroundColor: colors.back,
        color: colors.font 
    }

    function resetComplete() {

    }

    React.useEffect(() => {
        console.log(letter + ", rowId: " + rowId + ", currentRow: " + currentRow + ", completedRows: " + completedRows + ", completed: " + completed)
        if(currentRow === rowId) {
            setLetter(guessWord[id])
        }
        if(completedRows.includes(rowId) && completed) {
            changeColors();
            console.log(colors.back + ", " + colors.font + "YAyayay");
            setCompleted(false);
        }
        if(tileReset) {
            resetColorsAndLetters();
            setCompleted(true);
            setTileReset(false);
        }
    }, [guessWord, completedRows]);

    function resetColorsAndLetters() {
        return setColors({back: "white", font: "black"}), setLetter('');
    }

    function changeColors() {
        const arrayWord = word.toUpperCase().split("");
        if(arrayWord.includes(letter)) {
            if(arrayWord[id] === letter) {
                return setColors({back: 'lightgreen', font: 'white'});
            }
            return setColors({back: 'gold', font: 'white'});
        }
        setWrongLetters((prev) => [...prev, letter]);
        return setColors({back: 'grey', font: 'white'});
    }

    return (
        <div style={style} className='flex justify-center my-[2px] m-[2px] items-center w-[62px] h-[62px] border-2'>
            <p className='flex self-center mb-2 font-bold text-5xl'>{letter}</p>
        </div>
    )
}
