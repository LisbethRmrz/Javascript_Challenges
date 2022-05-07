// Considera una lista/array de ovejas. Cada oveja tiene un nombre y un color. Haz una función que devuelva una lista con todas las ovejas que sean de color rojo y que además su nombre contenga tanto las letras n Y a, sin importar el orden, las mayúsculas o espacios.

function contarOvejas(ovejas) {
    let newObject = [];
    let resultName = "";
    let resultColor = "";
    for(let i = 0; i < ovejas.length; i++){
        let containsA = (ovejas[i].name.includes("a")) || (ovejas[i].name.includes("A"));
        let containsN = (ovejas[i].name.includes("n")) || (ovejas[i].name.includes("N"));
        let colorRed = (ovejas[i].color == "rojo");
        if(containsA && containsN && colorRed){
            resultName = ovejas[i].name; 
            resultColor = ovejas[i].color;
            newObject.push({name: resultName, color: resultColor});
        }
    }
    ovejas = newObject;
    
    return ovejas;
}

const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo'},
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo'}
  ]


  const ovejasFiltradas = contarOvejas(ovejas)
  console.log(ovejasFiltradas)