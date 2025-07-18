function isprime(num){
    if(num<=1)return false
    if(num==2)return true
    if(num%2==0)return false
    for(let i=3;i<=Math.sqrt(num);i+=2){
        if(num%i==0)  return false
    }
        return true
}
function findPrime(arr){
    return arr.filter(isprime)
}
const number=[5,6,7,8,9,10]
let prime=findPrime(number)
console.log(prime)