## Introduction

A `data structure` is used to denote a particular way of organizing data for particular types of operation.

An `algorithm` for a particular task can be defined as “a finite sequence of instructions, each of which has a clear meaning and can be performed with a finite amount of effort in a finite length of time”

---
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

### Loops and Iterationys

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
var n = 10;

const minimum = (n, array =[n]) => {
    let min = a[0];
    // min equals the minimum item in a[0],...,a[0]
    for(let i = 1 ; i != n ; i++) {
        console.log(min);
    // min equals the minimum item in a[0],...,a[i-1]
    if (a[i] < min) min = a[i];
    }
    console.log(min);
    // min equals the minimum item in a[0],...,a[i-1], and i==n
    return min;
}


```
This is a proof by induction example where the invariant is true at the start of the loop, and is preserved by each iteration of the loop, therefore it must be true at the end of the loop.
```
---
