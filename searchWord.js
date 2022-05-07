function searchWord(text, word){
    text = text.toLowerCase();
    word = word.toLowerCase();
    let array = text.split(" ");
    let include = text.includes(word);
    if (include){
        let wordCounter = 0;
        array.forEach(counting);
        function counting(item, index){
            (item == word) ? wordCounter+=1 : ""; 
        }
        console.log(`The word ${word}, appears ${wordCounter} times in your text`);
    }
    else{
        console.log(`The word ${word} does not exist in your text`);
    }
}

searchWord("AnA Es banana similar a ana ana y anabel", "aasina");