// arrays 

var a = [10,20,30,40,50]
console.log(a)
console.log(a.length)
console.log(a[4])

//iterations

for (let i = 0, sum = 0; i < a.length; i++) {
    sum+=a[i]
    // a.lenght is the length of the array (7)
    console.log(sum);
    // sum = sum + a[i] is the same as sum = sum + a[i] + a[i+1] + a[i+2] + a[i+3] + a[i+4] + a[i+5] + a[i+6]
}

// variant

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


