import React, { useCallback, useEffect, useContext } from 'react'
import Key from './Key'
import { ArrowLeftOutlined } from '@ant-design/icons'
import { WordleContext } from '../../App'

export default function Keyboard() {

    const { guessTheWord, pressBackspace, pressEnter, wrongLetters } = useContext(WordleContext)

    const set1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P']
    const set2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L']
    const set3 =['Z', 'X', 'C', 'V', 'B', 'N', 'M']
    
    const handleKeyboard = useCallback((event) => {
        if (event.key === "Enter") {
            pressEnter();
        } else if (event.key === "Backspace") {
            pressBackspace();
        } else {
            set1.forEach((key) => {
                if(event.key.toLowerCase() === key.toLowerCase()) {
                    guessTheWord(key);
                }
            });
            set2.forEach((key) => {
                if(event.key.toLowerCase() === key.toLowerCase()) {
                    guessTheWord(key);
                }
            });
            set3.forEach((key) => {
                if(event.key.toLowerCase() === key.toLowerCase()) {
                    guessTheWord(key);
                }
            })
        }
    }, []);

    useEffect(() => {
        document.addEventListener("keydown", handleKeyboard);

        return () => {
            document.removeEventListener("keydown", handleKeyboard);
        }
    }, [handleKeyboard]);

    function Set1() {
        return(
            <div
                style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', margin:0}}>
                {
                    set1.map((char, index) => 
                        <Key key={index} letter={char} disabled={wrongLetters.includes(char)}
                    />)
                }
            </div>
        )
    }

    function Set2() {
        return(
            <div
                style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', margin:0}}>
                {
                    set2.map((char, index) => 
                        <Key key={index} letter={char} disabled={wrongLetters.includes(char)}
                    />)
                }
            </div>
        )
    }

    function Set3() {
        return(
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', margin:0}}
            >
                <Key big={true} letter={'Enter'} />
                {
                    set3.map((char, index) => 
                        <Key key={index} letter={char} disabled={wrongLetters.includes(char)}
                    />)
                }
                <Key big={true} letter={<ArrowLeftOutlined />} />
            </div>
        )
    }

    return (
        <div onKeyDown={handleKeyboard}>
            <Set1 /> 
            <Set2 /> 
            <Set3 />
        </div>
    )
}
