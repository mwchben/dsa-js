//Palindrome:

function palindrome(str) {
    let ftr = str.toLowerCase().match(/[a-z0-9]/g)
  
    function reversedString(s){
      return s.reverse().join("")
    } 
    if (ftr.join("") === reversedString(ftr)){  
    return true;
  }
  else {
    return false
  }
  }