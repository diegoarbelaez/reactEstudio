let nums = [1, 2, 3, 4, 5, 6, 7],
  k = 3;
console.log(nums);

let j = 0;
while (j < k) {
  //console.log(ultimo);
  let ultimo = nums[nums.length - 1];
  for (let i = nums.length; i > 0; i--) {
    let aux = nums[i - 2];
    nums[i - 1] = aux;
  }
  nums[0] = ultimo;
  j++;
}

console.log(nums);

//Solucion Leetcode

/*
var n = nums.length;
k = k % n;
if (k === 0 || n === 0 || n === k) {
  return;
}
var count = 0;
var start = 0;
var current = start;
var prev = nums[start];
while (count < n) {
  current = (current + k) % n;
  var temp = nums[current];
  nums[current] = prev;
  prev = temp;
  count++;
  if (current === start) {
    start++;
    current = start;
    prev = nums[start];
  }
}

*/

//

//Javascript methods

/*
let nums2 = nums.slice();
largo_inicial = nums2.length;
console.log(nums2);
let parte2 = nums2.slice(nums2.length - k, nums2.length);
let final = parte2.concat(nums2);
final = final.slice(0, largo_inicial);
console.log(parte2);
console.log(final);
 */

//iteraciones

/*
let parte2 = [];

for (let i = nums.length - k , j = 0; j < k; i++, j++) {
  parte2[j] = nums[i];
}

console.log(parte2);

let parte3 = [];
for (let i = 0; i < nums.length - k; i++) {
  parte3[i] = nums[i];
}

console.log(parte3);

for (let m = nums.length - k, i = 0, j = 0; i < k; i++, j++, m++) {
  nums[i] = parte2[j];
}


console.log(nums);

for (let m = k, i = 0, j = 0; i < parte3.length; i++, j++, m++) {
  nums[m] = parte3[i];
}

console.log(nums);

/* 

let nums_copia = nums.slice();

  for(let i=0; i<nums.length; i++){
    nums_copia[i] = nums[i]
  }

  //console.log(nums);

  let temporal;

  for (let j = 0; j < k; j++) {
    let aux = nums_copia[nums_copia.length - 1];
    for (let i = nums.length; i >= 1; i--) {
      nums[i] = nums[i - 1];
    }
    nums[0] = aux;
    //console.log(nums)
    //arreglo final, debe tener el mismo tamaño de nums
    for (let i = 0; i < nums_copia.length; i++) {
      nums_copia[i] = nums[i];
    }
  }

  for (let i = 0; i < nums_copia.length; i++) {
    nums[i] = nums_copia[i];
  }
*/
