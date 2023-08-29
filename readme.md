## Introduction

A `data structure` is used to denote a particular way of organizing data for particular types of operation.

An `algorithm` for a particular task can be defined as “a finite sequence of instructions, each of which has a clear meaning and can be performed with a finite amount of effort in a finite length of time”

nb: In order for JavaScript to compare two different data types (for example, numbers and strings), it must convert one type to another vy using =. This is known as `Type Coercion`. 
Strict equality (===) is the counterpart to the equality operator (==). However, unlike the equality operator, which attempts to convert both values being compared to a common type, the strict equality operator does not perform a type conversion.

---

### objects

Build JavaScript Objects
You may have heard the term object before.

Objects are similar to arrays, except that instead of using indexes to access and modify their data, you access the data in objects through what are called properties.

Objects are useful for storing data in a structured way, and can represent real world objects, like a cat.

Here's a sample cat object:

const cat = {
  "name": "Whiskers",
  "legs": 4,
  "tails": 1,
  "enemies": ["Water", "Dogs"]
};
In this example, all the properties are stored as strings, such as name, legs, and tails. However, you can also use numbers as properties. You can even omit the quotes for single-word string properties, as follows:

const anotherObject = {
  make: "Ford",
  5: "five",
  "model": "focus"
};
However, if your object has any non-string properties, JavaScript will automatically typecast them as strings.
2

#### Accessing Object Properties with Variables
- Another use of bracket notation on objects is to access a property which is stored as the value of a variable. - This can be very useful for iterating through an object's properties or when accessing a lookup table.

Here is an example of using a variable to access a property:

`
const dogs = {
  Fido: "Mutt",
  Hunter: "Doberman",
  Snoopie: "Beagle"
};


const myDog = "Hunter";
const myBreed = dogs[myDog];
console.log(myBreed);
`
The string Doberman would be displayed in the console.

### Queue

In Computer Science a queue is an abstract Data Structure where items are kept in order. New items can be added at the back of the queue and old items are taken off from the front of the queue.

### Arrays

In computer science, the obvious way to store an ordered collection of items is as an array where array items are typically stored in a sequence of computer memory locations.

```
var a = [23,4,556,231,5646,88,35]

console.log(a.length) -> 7
console.log(a[0]) -> 23
```

The element in the 7th position is 35, and we use the notation `a[7]` to denote this element; therefore, for any integer i denoting a position, we write `a[i]` to denote the element in the i th position. This position i is called an index.

_NB: In most modern programming languages, = denotes assignment, while
equality is expressed by ==_

---`

### Loops and Iterations

The standard approach in most programming languages for repeating a process a certain number of times, such as moving sequentially through an array to perform the same operations on each item, involves a loop.

```
for (let i = 0, sum = 0; i < a.length; i++) {
    sum+=a[i]
    // a.lenght is the length of the array (7)
    console.log(sum);
    // sum = sum + a[i] is the same as sum = sum + a[i] + a[i+1] + a[i+2] + a[i+3] + a[i+4] + a[i+5] + a[i+6]
}

```

We say that there is iteration over the index i. The general for-loop structure is
```
    for ( INITIALIZATION ; CONDITION ; UPDATE ) {
     REPEATED PROCESS
    }
```
---

### Invariants
Describes a condition that does not change during execution of a given program or algorithm; they are important for dsa because they enable `correctness proofs` and `verification`

```
var b = [1,2,3,4,5]
var n = b.length
    let min = b[0];
    console.log(min,"START");
    // min equals the minimum item in a[0],...,a[0]
    
    for(let i = 1 ; i != n ; i++) {
        console.log(min,"Iteration");
    // min equals the minimum item in a[0],...,a[i-1]

    if (a[i] < min) min = a[i];
    }
    console.log(min,"End");
    // min equals the minimum item in a[0],...,a[i-1], and i==n

```

_check imgs folder (invariant.png)_

This is a proof by induction example where the invariant is true at the start of the loop, and is preserved by each iteration of the loop, therefore it must be true at the end of the loop.

---

### Linked Lists
Are a linear collections of data elements where each element points to the next; each node is composed of data and a reference `link` to the next node in the sequence. 
- allows for efficient insertion or removal of elements from any position in the sequence during iteration.
- access time is linear; difficult to pipeline. Unlike arrays, random access of data elements is not allowed. Nodes are accessed sequentially starting from the first node.
- It uses more memory than arrays because of the storage of the pointers.
