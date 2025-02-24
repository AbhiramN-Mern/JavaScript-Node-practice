const arr = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];

const frequncy={}

for(let value of arr){
    if(frequncy[value]){
        frequncy[value]++
    }else{
        frequncy[value]=1
    }
}
console.log(frequncy)