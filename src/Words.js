/*
import validNames from "./data/names.json";

const names = validNames && validNames.map( (record) => {
    return record.word
});

export function generateNameSet() {
    let nameSet = new Set(names);

    return { nameSet };
}
*/

function newWord(names) {
    return names[Math.floor(Math.random() * names.length)];
}

export const generateNameSet = async () => {
    let firstWord;
    let nameSet;
    await fetch("http://localhost:3001/pokemon")
        .then((res) => res.json())
        .then((result) => {
            console.log(result);
            const names = result.map((record) => {
                return record.word;
            })
            firstWord = newWord(names);
            nameSet = new Set(names);
        })
        .catch((e) => {
            console.log(e);
        });
    
    return { nameSet, firstWord };
}