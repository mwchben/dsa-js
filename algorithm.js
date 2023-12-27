function diffArray(arr1, arr2) {
        return arr1
        .concat(arr2)
        .filter(item => !arr1.includes(item) || !arr2.includes(item));
  }
  
  console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

  // Find largest string from a list of a List String
  function longestString() {
  let longest = "";
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i].length > longest.length) {
      longest = arguments[i];
    }
  }
  return longest;
}