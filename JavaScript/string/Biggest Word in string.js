const str='I Abhiram from Kasargod'
const result=str.split(' ')
.reduce((acc,curr)=>acc.length>curr.length?acc:curr)
console.log(result)