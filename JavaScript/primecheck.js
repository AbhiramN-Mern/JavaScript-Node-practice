let arr=[4,3,6,4,5,3,8,10,11]
let prime=[]
for(let i=0;i<arr.length;i++){
    let num=arr[i]
    if(num<2)continue
    let isPrime=true
    for(j=2;j*j<=num;j++){
        if(num%j==0){
            isPrime=false
            break
        }
    }
    if(isPrime)prime.push(num)
}
console.log(prime)
