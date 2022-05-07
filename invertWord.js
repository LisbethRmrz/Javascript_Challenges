let invertWord = (word) =>{
    let inverted = "";
    for(let letter of word){
        inverted = letter + inverted;
    }
    console.log(inverted);
}

invertWord("Lisbeth");