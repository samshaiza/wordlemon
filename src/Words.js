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
export const generateNameSet = async () => {
    
    let nameSet;
    await fetch("http://localhost:3001/names")
        .then((res) => res.json())
        .then((result) => {
            const names = result.map((record) => {
                return record.word;
            })
            console.log(names);
            nameSet = new Set(names);
        })
        .catch((e) => {
            console.log(e);
        });
    
    return { nameSet };
}