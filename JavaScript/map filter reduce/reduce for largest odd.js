const arr=[1,2,3,4,5,6]
const result=arr.reduce((acc,curr)=>{
    if(curr%2==1){
         return acc>curr?acc:curr
    }
    return acc
},-Infinity)
console.log(result)