let arr=[
    {a:1,b:2},
    {c:3,d:4,},
        
]
const result=arr.flatMap(value=>Object.values(value))
const result2=arr.reduce((acc,curr)=>Object.assign(acc,curr),[])
console.log(result)
console.log(result2)
        