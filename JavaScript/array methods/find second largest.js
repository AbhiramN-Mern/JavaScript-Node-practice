let array = [1,2,6,3,4,5,5,7];

// using loop

let largest =[0];
let second = [0];

for(let i=0;i<array.length;i++){
    if(array[i]>largest){
        second=largest
        largest=array[i];
    }
    if(array[i]>second && array[i]!==largest){
        second = array[i];
    }
}
console.log(second);


//using sort

let result = array.sort((a,b)=>b-a);
let secondla = result[1]
console.log(secondla);
