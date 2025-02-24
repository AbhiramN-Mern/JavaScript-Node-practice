const arr=[1,2,3,4]
const obj=arr.reduce((acc,curr,index)=>{
    acc[index]=curr
    
    return acc
},{})
console.log(obj)