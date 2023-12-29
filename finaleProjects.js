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

  // number to Roman numeral  converter

  function convertToRoman(num) {
    const lukap = {
      M	: 1000,
      CM	:900,
      D	:500,
      CD	:400,
      C :	100,
      XC :	90,
      L	: 50,
      XL :	40,
      X	: 10,
      IX :	9,
      V	: 5,
      IV :	4,
      I	: 1
    }
  
    let accumul = "";
    
      for (const key in lukap){
      const valueOfKey = lukap[key];
        while(valueOfKey<=num){
        num-=valueOfKey;
        accumul+=key;
      }
    }
   return accumul;
  }
  
  convertToRoman(36);