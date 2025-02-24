let arr=[1,2,3,4,5,6]
const result=arr.reduce((acc,curr)=>(curr%2==0?acc+curr:acc),0)
console.log(result)


///With Rest Oparator

    // function sum(...num){
    // const result=num.reduce((acc,curr)=>(curr%2==0?acc+curr:acc),0)
    // console.log(result)
    // }
    // sum(1,2,3,4)
    
    