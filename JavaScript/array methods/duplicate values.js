let array = [1,2,2,3,4,4,6,8,8,9];


let result = array.filter((value,index)=>{
    return array.indexOf(value)==index;
} )
console.log(result);
