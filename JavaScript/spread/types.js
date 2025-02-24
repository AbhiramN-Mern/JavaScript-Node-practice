const array1= [1,2,3,4,5,6];
const array2 = [8,0,7,6,5,4];




//merge
const result = [...array1,...array2];
console.log(result);


//copy
const array3 = [...array1];
console.log(array3);

//spreading elements in function 

function vvv(...numbers) {
   return numbers.reduce((accu,curr)=>accu+curr)
}
const dd = vvv(1,2,3,4,5);
console.log(dd);
