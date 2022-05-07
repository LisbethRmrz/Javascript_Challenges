const palindrome = (word) => {
    var wordArray = [];
    for(let i = 0; i < word.length; i++){
        wordArray.push(word[i]);
    }
    reverseArray = wordArray.slice();
    reverseArray = reverseArray.reverse();

    let reverseWord = reverseArray.toString();
    reverseWord = reverseWord.replace(/\,/g,'');
    (word === reverseWord ) ? console.log("Es palindromo") : console.log("NO es palindromo");
}

palindrome("hola");
palindrome("yohagoyogahoy");