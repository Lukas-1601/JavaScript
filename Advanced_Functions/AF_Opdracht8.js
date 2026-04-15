function toepassenOpArray(functie, array) {
  let resultaat = [];
  for (let element of array) {
    resultaat.push(functie(element));
  }
  return resultaat;
}

function verdubbel(x) {
  return x * 2;
}

const getallen = [1, 2, 3, 4, 5];

let nieuw = toepassenOpArray(verdubbel, getallen);

console.log(nieuw);