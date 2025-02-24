// Find the largest number in an array
let arr= [1, 2, 2, 3, 4, 6, 5]
const result=arr.reduce((acc,curr)=>acc>curr?acc:curr)
console.log(result)
