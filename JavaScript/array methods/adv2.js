//const arr=[1,2,3,null,4,undefined,5] REPLACE 4 WITH 40

const arr=[1,2,3,null,4,undefined,5];

let result = arr.filter((value,index)=> typeof value == "number").map((value,index)=>{
   if(index==4){
    value=40;
  }
  return value;
})

console.log(result);
