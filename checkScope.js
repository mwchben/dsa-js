function checkScope() {
    var i = 'function scope'; //here, let is limited in the if block scope/if var still same
    if (true) {
       let i = 'block scope'; //here, let is limited in the if block scope/if var it assumes the global scope
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
  }

  checkScope()

  /*here, we use rest parameter to define many arguments and get their sum of 
  each of the elements in the arguments(numbers)*/
  const sum = (...args) => {

    let total = 0;
    for (let i = 0; i < args.length; i++) {
      total += args[i];
    }
    return total;
  }

  console.log(sum(7,5,4))