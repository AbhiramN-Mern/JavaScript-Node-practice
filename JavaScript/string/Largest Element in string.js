const str='hello hi hiiiiiii'
const result=str.split(' ')
.reduce((acc,curr)=>acc>curr?acc:curr)

console.log(result)