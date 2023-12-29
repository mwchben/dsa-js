//Palindrome:

function palindrome(str) {
  let ftr = str.toLowerCase().match(/[a-z0-9]/g);

  function reversedString(s) {
    return s.reverse().join("");
  }
  if (ftr.join("") === reversedString(ftr)) {
    return true;
  } else {
    return false;
  }
}

// number to Roman numeral  converter

function convertToRoman(num) {
  const lukap = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let accumul = "";

  for (const key in lukap) {
    const valueOfKey = lukap[key];
    while (valueOfKey <= num) {
      num -= valueOfKey;
      accumul += key;
    }
  }
  return accumul;
}

convertToRoman(36);

// ceasars dot13 (shift by 13)

function rot13(str) {
  const alphabet = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U", "V","W","X","Y","Z" 
    ];
  let accum = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i]; //each character in the provided string
    let isALetter = alphabet.includes(char); //check if the character is in the Alphabet array & eliminate spaces/symbols

    if (!isALetter) {
      accum += char;
    } else {
      let indexOfChar = alphabet.findIndex((c) => c === char); //get index of the Char in the alphabet array
      accum += alphabet[indexOfChar + 13] || alphabet[indexOfChar - 13];
    }
  }
  return accum;
}

rot13("SERR PBQR PNZC");
