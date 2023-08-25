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


// code to return names with par and strokes when:
/*
Strokes	Return
1	"Hole-in-one!"
<= par - 2	"Eagle"
par - 1	"Birdie"
par	"Par"
par + 1	"Bogey"
par + 2	"Double Bogey"
>= par + 3	"Go Home!" 
*/
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];


function golfScore(par, strokes) {

  if(strokes == 1){
    return names[0];
  }
 
 else if(par-2 >= strokes ){
   return names[1];
 }
 else if(par-1 == strokes){
   return names[2];
 }
 else if (par == strokes){
    return names[3];
  }
 else if(par+1 == strokes){
   return names[4];
 }
 else if(par+2 == strokes ){
   return names[5];
 }
 else if(par+3 <= strokes){
   return names[6];
 }

}

let answ = golfScore(4,2);

console.log("answer is:", answ) 






