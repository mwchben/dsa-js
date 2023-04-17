// arrays 

var a = [23,4,556,23,5646,88,35]
console.log(a)
console.log(a.length)
console.log(a[4])

//iterations

for (let i = 0, sum = 0; i < a.length; i++) {
    sum+=a[i]
    // a.lenght is the length of the array (7)
    console.log(sum);
    // sum = sum + a[i] is the same as sum = sum + a[i] + a[i+1] + a[i+2] + a[i+3] + a[i+4] + a[i+5] + a[i+6]}
}
