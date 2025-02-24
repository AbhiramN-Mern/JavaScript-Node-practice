// Expected output: "olleH dlroW"

const str = "Hello World";
const result=str.split(' ')
.map((value)=>value.split('').reverse().join(''))
.join(' ')
console.log(result)