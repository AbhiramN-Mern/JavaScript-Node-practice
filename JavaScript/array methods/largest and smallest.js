let array = [12,23,45,67,5,3,56,9];


    //use loop 

let big=[0];
var small=[0];

for(let i=1;i<array.length;i++){
    if(array[i]>big){
        big=array[i]
    }
    if(array[i]<small){
        small=array[i]
    }
}
console.log(big);
console.log(small);

//use math.max

let max = Math.max(...array);
let min = Math.min(...array); 


//using sort
let numbers = [3, 1, 7, 4, 10, 2];

numbers.sort((a, b) => a - b);

let smallest = numbers[0];
let largest = numbers[numbers.length - 1];

console.log("Smallest:", smallest); // Output: 1
console.log("Largest:", largest);   // Output: 10



