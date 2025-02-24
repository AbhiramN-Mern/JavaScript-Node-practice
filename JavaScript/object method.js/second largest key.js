let obj={
    a:3,
    b:6,
    c:2,
    d:4
}
let result=Object.values(obj).reduce((acc,num)=>{
    if(acc.large){
    acc.second=acc.large
    acc.large=num
    }else if(num>acc.second&&num!==acc.large){
        acc.second=num
    }
    return acc
},{large:-Infinity,second:-Infinity})
console.log(result)
const second=result.second
console.log(second)


for(let value in obj){
    if(second==obj[value]){
        console.log(value)
    }
}
