const arr=[1,2,3,5,5,6]
const result=arr.reduce((acc,num)=>{
    if(num>acc.largest){
        acc.second=acc.largest
        acc.largest=num
    }
    else if(num>acc.second && num!= acc.largest){
        acc.second=num;
    }
    return acc
},{largest:-Infinity,second:-Infinity})

console.log(result.second)
