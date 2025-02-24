// *Remove duplicates from an array.*
let arr= [1, 2, 2, 3, 4, 4, 5]
for(i=0;i<arr.length;i++){
    for(j=i+1;j<arr.length;j++){
        if(arr[i]==arr[j]){
            arr.splice(i,1)
            i--
        }
    }
}
console.log(arr)