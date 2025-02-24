const add=(a,b)=>a+b;

const addmore=function addmore(...num){
   return  num.reduce((acc,curr)=>acc+curr)
}
module.exports={add,addmore}