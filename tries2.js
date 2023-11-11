let alphabet = "abcdefghijklmnopqrstuvwxyz";
let len = alphabet.length;
for (let i = 0; i <= len; i++) {
  console.log("A",alphabet[i]); //abcdefghijklmnopqrstuvwxyzundefined
}
for (let j = 1; j < len; j++) {
  console.log("B",alphabet[j]); //bcdefghijklmnopqrstuvwxyz
}
for (let k = 0; k < len; k++) {
  console.log("C",alphabet[k]); //abcdefghijklmnopqrstuvwxyz
}

const greaterThanTen = (arr) => {
  let numbersAre = [];
  for (let index = 0; index < arr.length; index++) {
    
    if (arr[index]>10) {
      numbersAre.push(arr[index])
    }    
  }
  return numbersAre
}

console.log(greaterThanTen([45,6,3,54,45,9,13,4,7,2,86]))


// Function can be used to check presence of an element; if there return an array that has no such element
function filteredArray(arr, elem) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem) == -1) {
      //Checks every parameter for the element and if is NOT there continues the code
      newArr.push(arr[i]); //Inserts the element of the array in the new filtered array
    }
  }


  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));