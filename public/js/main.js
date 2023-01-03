/*
// exo 1
let i ;

let somme ;

somme =0;

i = 1;
let user = prompt(`Entrez un nombre`)
while (i<=user) {
    somme = somme +i;
    console.log(somme);
    i++;
}
*/
/*
// exo 2
let dmd = prompt(`Entrez un nombre`)
let bool = true;
function premier() {
    for (let i = 1; i <= dmd; i++) {
        if (dmd%i!=0) {
            console.log(bool=false);
        }
    }
    return bool;
}
console.log(premier());

*/
// exo 3
/*
function trierTableau(tableau) {
    return tableau.sort();
}
let tableauTrié = trierTableau(["girafe", "chien", "chat", "oiseau"]);
console.log(tableauTrié);
/*
//exo 4
function sommeChiffres(nombre) {
    let nombreString = nombre.toString();

    let somme = 0;

    for (let i = 0; i < nombreString.length; i++) {
        somme += parseInt(nombreString[i]);
    }

    return somme;
}
let somme = sommeChiffres(123);
console.log(somme);

*/
/*
//exo 6 
function isPalindrome(array) {
    if (array.length === 0) {
        return false;
    }
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
        if (array[i] !== array[array.length - i - 1]) {
            return false;
        }
    }

    return true;
}
console.log(isPalindrome([1, 2, 3, 2, 1]));
console.log(isPalindrome[1,3,4,5,8]);
*/