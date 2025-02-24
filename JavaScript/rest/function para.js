function add(...nums){
   return  nums.reduce((acc,curr)=>acc+curr);
};
console.log(add(1,2,3,4,56))
