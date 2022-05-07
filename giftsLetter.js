/* Te ha llegado una carta ✉️ con todos los regalos que debes preparar. El tema es que es una cadena de texto y es muy difícil de leer 😱. ¡Menos mal que han puesto cada regalo separado por espacio! (aunque ten cuidado, porque al ser niños, igual han colado más espacios de la cuenta)

Encima nos hemos dado cuenta que algunas palabras vienen con un _ delante de la palabra, por ejemplo _playstation, que significa que está tachado y no se tiene que contar. */

function listGifts(letter) {
    let letterObject = {};
    letter = letter.replace(/  /g, " ");
    let letterArray = letter.split(" ");
    letterArray.forEach(getItems);
    function getItems(item, index) {
        let getInvalid = item.startsWith('_');
        if(getInvalid){
            letterArray.splice(index, 1);
        }
    }
    letterArray = letterArray.filter(el => el != '');
    for(let i=0; i<letterArray.length; i++) {
        if(!letterObject[letterArray[i]]){
            letterObject[letterArray[i]] = 0;
        }
            ++letterObject[letterArray[i]];
    }
    return letterObject;
}

function giftsLetterFunctional(letter){
    const gifts = {}
  letter.trim().split(' ')
    .map(c => {
      if (c.startsWith('_')) return
      gifts[c] ??= 0
      gifts[c]++
    });
  return gifts
}

const carta = 'bici  coche balón _playstation bici coche peluche';

const regalos = listGifts(carta);
console.log(regalos);
console.log(giftsLetterFunctional(carta));

// listGifts(carta);