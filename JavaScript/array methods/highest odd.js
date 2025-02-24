let array = [12,23,45,67,5,3,56,9];

let result = array.filter((value)=>value%2!==0).reduce((acc,curr)=>{
   return  acc>curr ? acc : curr ;
})
console.log(result);
