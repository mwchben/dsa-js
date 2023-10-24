function checkScope() {
    var i = 'function scope'; //here, let is limited in the if block scope/if var still same
    if (true) {
       var i = 'block scope'; //here, let is limited in the if block scope/if var it assumes the global scope
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
  }

  checkScope()