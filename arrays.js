const array = [
    1,
    2,
    [3,4,[5,6]]
]
console.log("Array is: " + array)

const subarray = array[2]
console.log("subarray is: " + subarray);

const lastElementInArray = array[2][2][1]
console.log("last element in array is: " + lastElementInArray)

const addElement = array.push(7) //adds at end, to add in array beginning use unshift()
console.log("last updated element in array is: " + addElement)

console.log("Array is now: " + array)

const removedElement = array.pop()  //removes the last, to remove the 1st use shift()
console.log("Array is now: " + array + " after the pop")
console.log("Popped element is stored in the removed Element as: " + removedElement )






