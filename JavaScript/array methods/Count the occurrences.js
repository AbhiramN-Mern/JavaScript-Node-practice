let array = [1,2,6,3,4,5,5,7];
let specific=5;
let count =0;
for(let num of array){
    if(specific==num){
        count++
    }
}
console.log(count);
