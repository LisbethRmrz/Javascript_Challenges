function drawSquare(high){
    for(let i=1; i<= high; i++){
        let asterisks = "";
        for(let j=0; j<i; j++){
            asterisks = asterisks + "*";
        }
        for(let k = 0; k < high-i; k++){
            asterisks = asterisks + "*";
        }
        for(let white=1; white<high-2; white++){
            asterisks = asterisks + " ";
        }
        console.log(asterisks);
    }
}

drawSquare(8);