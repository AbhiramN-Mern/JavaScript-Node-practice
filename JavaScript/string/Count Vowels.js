const str="Programming is fun"
const vowels="aeiouAEIOU"
const result=str.split('').filter(value=>vowels.includes(value)).length
console.log(result)