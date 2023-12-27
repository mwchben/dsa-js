/*
Counting Cards
In the casino game Blackjack, a player can determine whether they have an advantage on the next hand over the house by keeping track of the relative number of high and low cards remaining in the deck. This is called Card Counting.

Having more high cards remaining in the deck favors the player. Each card is assigned a value according to the table below. When the count is positive, the player should bet high. When the count is zero or negative, the player should bet low.

Count Change	Cards
+1	2, 3, 4, 5, 6
0	7, 8, 9
-1	10, 'J', 'Q', 'K', 'A'
You will write a card counting function. It will receive a card parameter, which can be a number or a string, and increment or decrement the global count variable according to the card's value (see table). The function will then return a string with the current count and the string Bet if the count is positive, or Hold if the count is zero or negative. The current count and the player's decision (Bet or Hold) should be separated by a single space.

Example Outputs: -3 Hold or 5 Bet

Hint
Do NOT reset count to 0 when value is 7, 8, or 9.
Do NOT return an array.
Do NOT include quotes (single or double) in the output.
*/

let count = 0;
let array = ["Bet","Hold"];

function cc(card) {

  switch (card){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    count++;
    break;

    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
    count--;
    break;

  }

  if (count>0){
    return count+" "+array[0]
  }else{
    return count+" "+array[1]
  }

}

cc(2); cc(3); cc(7); cc('K'); cc('A');

/*
Code Explanation
Check the value of each card via a switch statement.
The variable count:
Increases by 1 if the card is a 2, 3, 4, 5, or 6.
Since 7, 8, and 9 aren’t worth anything, we ignore those cards in our switch statement.
Decreases by 1 if the card is a 10, ‘J’, ‘Q’, ‘K’, or ‘A’.
Check the value of count and return the appropriate response.
Example Run

cc(2); runs.
The switch statement hits case 2, jumps down and adds 1 to the variable count.
The switch statement then hits the break and cc(3); runs.
This cycle continues until the final call is made, cc('A');.
After the switch statement, the if statement checks count, which is now 0.
This then drops down to the else statement, which will return 0 Hold.
Note: As mentioned earlier, the switch statement could have also been an else if statement.
*/

//Return Largest Numbers in Arrays
function largestOfFour(arr) {
  const results = [];
  for (let i = 0; i < arr.length; i++) {
    let largestNumber = arr[i][0];
    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > largestNumber) {
        largestNumber = arr[i][j];
      }
    }
    results[i] = largestNumber;
  }

  return results;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

/*
Confirm the Ending
Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, but now using one of the JavaScript substring methods instead.
*/

function confirmEnding(str, target) {

  return str.slice(str.length - target.length) === target;
}

confirmEnding("He has to give me a new name", "name");

/*
Code Explanation
- First we use the slice method copy the string.
- In order to get the last characters in str equivalent to the target's length we use the slice method.
- The first parameter inside the slice method is the starting index and the second parameter would be the ending index.
- For example str.slice(10, 17) would return give me.
- In this case we only include one parameter which it will copy everything from the starting index.
- We substract the length of str and the length of target, that way, we shall get the last remaining characters equivalent to the target's length.
- Finally we compare the return result of slice to target and check if they have the same characters.
*/



/*
Repeat a String Challenge
Repeat a given string str (first argument) for num times (second argument). 
Return an empty string if num is not a positive number. 
For the purpose of this challenge, do not use the built-in .repeat() method.
*/

// 1. Using Recursion   
function repeatStringNumTimes(str, num) {
  // We check if num is negative and return an empty string if true.
  if (num < 1) {
    return "";

  //If not, we add the string to a call of our function with num being decreased by 1, 
  //which will add another str and another… until eventually num is 1. And return that whole process.
  } else {
    return str + repeatStringNumTimes(str, num - 1);
  }
}

//2. Using for loop

function repeatStringNumTimes(str, num) {
  let accumulatedStr = "";//Create an empty string variable to store the repeated word

  for (let i = 0; i < num; i++) { //Use a for loop to repeat code as many times as needed according to num
    accumulatedStr += str;//Then we add the string to the variable created on step one inside of the loop
  }

  return accumulatedStr;
}


/* 
runcate a String
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). 
Return the truncated string with a ... ending.
*/

function truncateString(str, num) {

  // If our string length is greater than the num we want to truncate it, we return a slice 
  // of our string starting at character 0, and ending at num. We then append our '...' to the end of the string.
  if (str.length > num) {
    return str.slice(0, num) + "...";
  // However, if above situation is not true, it means our string length is less
  // than our truncation num. Therefore, we can just return the string.
  } else {
    return str;
  }
}

/* Title Case a Sentence
Split the string by white spaces, and create a variable to track the updated title. 
Then we use a loop to turn turn the first character of the word to uppercase and the rest to lowercase. 
by creating concatenated string composed of the whole word in lowercase with the first character replaced by its uppercase.
*/
function titleCase(str) {
  const newTitle = str.split(" ");
  const updatedTitle = [];
  for (let st in newTitle) {
    updatedTitle[st] = newTitle[st][0].toUpperCase() + newTitle[st].slice(1).toLowerCase();
  }
  return updatedTitle.join(" ");
}

//Spinalcase like URL with whitespace character [\s] & underscore character [_] is encountered
// and  followed by an uppercase letter [(?=[A-Z])] then join the array using a hyphen (-)
// then lowerCase.
function spinalCase(str) {
  return str.split(/\s|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase();
}

spinalCase('This Is Spinal Tap');

//find a word in a string and replace with a given word

function myReplace(str, before, after) {
  // Find index where before is on string
  var index = str.indexOf(before);
  // Check to see if the first letter is uppercase or not
  if (str[index] === str[index].toUpperCase()) {
    // Change the after word to be capitalized before we use it.
    after = after.charAt(0).toUpperCase() + after.slice(1);
  } else {
    // Change the after word to be uncapitalized before we use it.
    after = after.charAt(0).toLowerCase() + after.slice(1);
  }
  // Now replace the original str with the edited one.
  str = str.replace(before, after);

  return str;
}

// test here
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

// Remove a flasy value from an array like undefined, null, NaN, 0, “” 
//  truthy values in JavaScript will be coerced to true in boolean contexts when the if block executes
function bouncer(arr) {
  const filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]){
      filteredArr.push(arr[i]);
    } 
  }
  return filteredArr;
}


/*
  find props in an object
*/

function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
// Only change code below this line

for (let prop in canary){
  if(canary.hasOwnProperty(prop)){
    ownProps.push(prop)
  }
}

// To add a prop to a class for all object do:
function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;
let beagle = new Dog("Snoopy");

// To iterate over all of them by ownProps and prototypes
function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let bagle = new Dog("Snoopy");

let ownProperties = [];
let prototypeProps = [];

for(let prop in beagle){
  if(beagle.hasOwnProperty(prop)){
    ownProperties.push(prop)
  }
  else{
    prototypeProps.push(prop)
  }
}