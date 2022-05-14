// El Grinch está abriendo las cartas que iban a Santa Claus y las está dejando hechas un lío. 😱

// Las cartas son una cadena de texto que incluyen regalos y paréntesis ().

// Para saber si una carta es válida ✅, debes comprobar que los paréntesis cierran correctamente y que, además, no vayan vacíos.

// ¡Pero ojo! Porque el Grinch ha dejado llaves { y corchetes [ dentro de los paréntesis que hacen que no sean válidas. Por suerte sólo los ha dejado en medio de los paréntesis...

// Ejemplos:

// "bici coche (balón) bici coche peluche" // -> ✅
// "(muñeca) consola bici" // ✅

// "bici coche (balón bici coche" // -> ❌
// "peluche (bici [coche) bici coche balón" // -> ❌
// "(peluche {) bici" // -> ❌
// "() bici" // ❌
      
// Crea una función que pasándole el texto de la carta, devuelva true si es válida y false si no lo es. ¡Y acaba con la travesura del Grinch!

function isValid(letter) {
    let verify = false;
    // console.log(letter);
    let arrayLetter = letter.split(" ");
    // console.log(arrayLetter);
    // arrayLetter.forEach(getSymbols);

    // function getSymbols(item, index){
    //     if(item.startsWith("(") && item.endsWith(")")){
    //         // arrayLetter.splice(index, 1, `${item})`);
    //         console.log(`${item} cumple`);
    //         verify = true;
    //     }
    // }

    for(let i = 0 ; i < arrayLetter.length ; i++) {
        if(arrayLetter[i].startsWith("(") && !arrayLetter[i].endsWith(")") ){
            // console.log("sigue");
            // console.log(arrayLetter[i]);
            console.log(arrayLetter[i]);
        }
        else{
            verify = true;
            console.log(arrayLetter[i]);
        }
    }
    
    console.log(arrayLetter);
    console.log(verify);
    return verify
}

const letter = "bici (coche (balón) b[ici coche";
isValid(letter);