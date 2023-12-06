//CODE CHALLENGUE INICIAL DE MACHEIGHT

/**
 * Function findPairs receives two parameters
 * @numeros -> array of numbers
 * @suma -> target value
 * 
 * returns an array with pairs found which fulfill the target
 */


let numeros = [1, 9, 5, 0, 20, -4, 12, 16, 7];
let suma = 12;

const pairs = findPairs(numeros, suma)

function findPairs(numeros, suma) {
  let numbers = numeros;
  let sum = suma;
  let pairs = [];
  const ocurrences = {};

  for (let i = 0; i < numbers.length; i++) {
    const complement = sum - numeros[i];;
    if (ocurrences[complement]) {
      pairs[pairs.length] = [numeros[i], complement];
    }
    ocurrences[numeros[i]] = true;
  }
  return pairs;
}


//Iterate and print the pairs (Just for testint in Console)
//Please uncomment this block to print values of pairs
pairs.forEach(pair => {
  console.log(`+ ${pair[0]},${pair[1]}`);
});