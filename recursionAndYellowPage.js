// To understand recursion, you really have to understand the call stack.

// When a function is invoked, it gets put on the call stack. A stack, you may know, is a data structure that operates as Last In, First Out. Just like a stack of paper, the first one put down is the last one to get picked up.

// In a normal function call, the function gets put on the stack, then on top of it any operations that happen inside the function (local variable assignment, math operations, loops, etc). As those inner operations complete, they get removed from the top of the stack, then finally the function itself gets removed. You can think of the return statement as the signal that the function gets removed, or resolved.

// If we replace the recursion part of the above function with a loop --

function sum(arr, n) {
 let sum = 0;
 for (let i = 0; i < n; i ++) {
    sum += arr[i];
 }
 return sum;
}

/*
Here's the call stack --

1) Invoke sum function

sum()


2) Assign sum. This gets resolved immediately, so it's removed.

assign sum to 0
sum()


3) First iteration of the loop.

i ++
sum += arr[0]
assign i to 0
sum()


4 - n) Continue putting the loop operations on the stack, then removing as they're resolved.

n)

sum += arr[n]
sum()


n + 1) We reach the return statement, which is our sign that the function is resolved and gets removed from the stack

return sum 

Notice that sum() stays at the bottom of the stack until it's resolved. Other operations are continuously placed on top of it, then resolved, placed again, then resolved, etc. Now let's look at the recursive example.

function sum(arr, n) {
  if (n <= 0) return arr[0];
  return sum(arr, n-1) + arr[n];
}

1) 

sum([1,2,3,4], 3)


2)

sum([1,2,3,4], 2)
sum([1,2,3,4], 3)


3)

sum([1,2,3,4], 1)
sum([1,2,3,4], 2)
sum([1,2,3,4], 3)


4)

sum([1,2,3,4], 0)
sum([1,2,3,4], 1)
sum([1,2,3,4], 2)
sum([1,2,3,4], 3)

In this case, the operation being placed on top of the call stack is another call to the same function, but with different parameters. We keep placing these function calls on top of each other until we hit the base case n <= 0. If we didn't have the base case, we would invoke more operations than the stack can handle and our runtime environment would crash. This is called stack overflow.

Now that we hit the base case, we can start returning, starting from the top because stacks are Last In, First Out.

5) The top call returns 1 (arr[0]) to the function that called it, below it in the stack

sum([1,2,3,4], 0) -> return 1
sum([1,2,3,4], 1) 
sum([1,2,3,4], 2)
sum([1,2,3,4], 3)


6) The top function catches what's returned from above because this is where it was called. 

sum([1,2,3,4], 1) -> catches 1 from above, returns it's value 1 + 2 (arr[1])
sum([1,2,3,4], 2)
sum([1,2,3,4], 3)


7)

sum([1,2,3,4], 2) -> catches 3 from above, returns 3 + 3
sum([1,2,3,4], 3)


8) We hit the final return, which returns 10 back to from the original function invocation. 

sum([1,2,3,4], 3) catches 6, returns 6 + 4. 


Recursion isn't an easy concept to grasp, but once you've got it it's an extremely powerful tool. It's the foundation of the Divide and Conquer technique and is the reason many algorithms are efficient enough to use practically.
*/


/* Function like to search through a contact list with conditions like name and prop is given, name not there
to show no record where name == fName and prop not there to show prop not there
*/

const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  function lookUpProfile(name, prop) {
    for (let x = 0; x < contacts.length; x++) {
      if (contacts[x].firstName === name) {
        if (contacts[x].hasOwnProperty(prop)) {
          return contacts[x][prop];
        } else {
          return "No such property";
        }
      }
    }
    return "No such contact";
  }
  
  let ans = lookUpProfile("Harry", "likes");

  console.log(ans)