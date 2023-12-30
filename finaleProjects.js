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


//regex for telephones
function telephoneCheck(str) {
    const validPatterns = [
        // 555-555-5555
        /^\d{3}-\d{3}-\d{4}$/,

        // 1 555-555-5555
        /^1 \d{3}-\d{3}-\d{4}$/,

        // 1 (555) 555-5555
        /^1 \(\d{3}\) \d{3}-\d{4}$/,

        // 5555555555
        /^\d{10}$/,

        // (555)555-5555
        /^\(\d{3}\)\d{3}-\d{4}$/,

        // 1 555 555 5555
        /^1 \d{3} \d{3} \d{4}$/,

        // 1(555)555-5555
        /1\(\d{3}\)\d{3}-\d{4}/
    ];

  return validPatterns.some((pattern) => pattern.test(str));
}

//cashRegister
function checkCashRegister(price, cash, cid) {
  let change = cash*100 - price*100;
  let drawer = 0;

  for (let item of cid) {
    drawer += item[1]*100;
  }
  if (change > drawer) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else if (change === drawer) {
    return { status: "CLOSED", change: cid };
  } else {
    let answer = [];
    let units = {
      "ONE HUNDRED": 10000,
      "TWENTY": 2000,
      "TEN": 1000,
      "FIVE": 500,
      "ONE": 100,
      "QUARTER": 25,
      "DIME": 10,
      "NICKEL": 5,
      "PENNY": 1,
    };

    for (let curr of cid.reverse()) {
      let holder = [curr[0], 0];
      curr[1] = curr[1]*100
      while (change >= units[curr[0]] && curr[1] > 0) {
        change -= units[curr[0]];
        curr[1] -= units[curr[0]];
        holder[1] += units[curr[0]]/100;
      }

      if (holder[1] > 0) {
        answer.push(holder);
      }
    }
    if (change > 0) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    }

    return { status: "OPEN", change: answer };
  }
}

console.log(
  checkCashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);

