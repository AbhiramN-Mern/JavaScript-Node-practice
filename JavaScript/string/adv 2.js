
const str = "How Are You";
const result=str.split(' ')
.map((value)=>value.split('').reverse().join(''))
.join(' ')
console.log(result);
