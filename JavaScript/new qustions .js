// Merge two objects -------------------------------------------------------------------------------------------------------------------------------------------------------------------
// const obj1={
//     a:1,
//     b:2,
//     c:3
// }
// const obj2={
//     d:4,
//     e:5,
//     f:6
// }
// const obj={...obj1,...obj2}
// console.log(obj)

// • Spreading an object and changing the key ------------------------------------------------------------------------------------------------------------------------------------
// const obj1={
//     a:1,
//     b:2,
//     c:3
// }
// for(let key in obj1){
//     console.log(`key is ${key} : value is ${obj1[key]}`)
// }

// • Remove object keys corresponding to odd numbers -----------------------------------------------------------------------------------------------------------------------------------------
// const obj={
//     a:1,
//     b:2,
//     c:3,
//     d:4
// }

// for(let value in obj){
//     if(obj[value]%2!=0){
//        delete obj[value]
//     }
// }
// console.log(obj)

// Digit missing in an array ----------------------------------------------------------------------------------------------------------------------------------------------------------

// const arr=[1,2,8,9]
// const newarr=[]
// function machan(arr,n){
//     let arr2=[]
//     for(let i=1;i<=n;i++){
//         arr2.push(i);
//     }
//    for(let i=0;i<arr2.length;i++){
//     if(!arr.includes(arr2[i])){
//         newarr.push(arr2[i])
//     }      
//    }
//    return newarr
// }
// console.log(machan(arr,10))


// Remove the nth element from an array -----------------------------------------------------------------------------------------------------------------------------------------------

// const arr=[1,2,3,4,5,6,7,8,9]
// function machan(arr,n){
//     for(let i=0;i<arr.length;i++){
//         if(i==n){
//             arr.splice(i,1)
//         }
//     }
//     return arr
// }
// console.log(machan(arr,4))


//• Elements common in two arrays ------------------------------------------------------------------------------------------------------------------------------------------------------

// const arr1=[1,2,3,4,5,67,5]
// const arr2=[8,9,10,3,4,77]
// const newarr=[]
// for(let i=0;i<arr1.length;i++){
//     if (arr2.includes(arr1[i])){
//         newarr.push(arr1[i])
//     }
// }
// console.log(newarr)

//Count characters in an array-------------------------------------------------------------------------------------------------------------------------------------------------------

// const str=['hello','iam','abhiram']
// const result=str.reduce((acc,curr)=>acc+curr.length,0)
// console.log(result)

//Add two numbers into an array using splice-----------------------------------------------------------------------------------------------------------------------------------
// const arr=[1,2,3,4,5]
// arr.splice(2,0,50,51)
// console.log(arr)

//Remove second last element from an array -------------------------------------------------------------------------------------------------------------------------------------------
// const arr=[1,2,3,4,5,6]
// arr.splice(arr.length-2,1)
// console.log(arr)

//Push all zeros to the end of the array -----------------------------------------------------------------------------------------------------------------------------------------------

// const arr=[1,3,0,5,6,0,3]
// for(let i=0;i<arr.length;i++){
//     if(arr[i]==0){
//         arr.push(arr[i])
//         arr.splice(i,1)
//     }
// }
// console.log(arr)

//Remove Second LArgest Element From A Array---------------------------------------------------------------------------------------------------------------------------------------
// const arr=[1,2,3,4,5,6,7]
// const result=arr.reduce((acc,num)=>{
//     if(num>acc.large){
//     acc.second=acc.large
//     acc.large=num
//     }else if(num>acc.second&&num!=acc.largest){
//         acc.second.num
//     }
 
//     return acc

// },{large:-Infinity,second:-Infinity})

// const val=result.second
// for(let i=0;i<arr.length;i++){
//     if(arr[i]==val){
//         arr.splice(i,1)
//     }
// }
// console.log(arr)

// Function to average even numbers from an array-----------------------------------------------------------------------------------------------------------------------------------------
// function hello(arr){
//     const even=arr.filter((value)=>value%2==0)
//     const sum=even.reduce((acc,curr)=>acc+curr,0)
//     const avg=sum/even.length
//     return avg
// }
// console.log(hello([1,2,3,4]))

//Function to remove middle element from an array -------------------------------------------------------------------------------------------------------------------------------------
// function hello(arr){
//     const s=Math.floor(arr.length/2)
//     arr.splice(s,1)
//     return arr
// }
// console.log(hello([1,2,3,4,5]))
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Generator function to print multiples of 5 between 1 to 100

// function* genarator(){
//     let num=5
//     while(num<100){
//         num=num+5
//         yield num
//     }
// }
// const gen=genarator()
// let delay = 1000

// for(let value of gen){
//     setTimeout(()=>{
//     console.log(value)
//     },delay)
//     delay=delay+1000
// }

//Capitalize last letter of a string ----------------------------------------------------------------------------------------------------------------------------------------------------
// const str='abhiram'
// const newstr=str.slice(0,-1)+str.charAt(str.length-1).toUpperCase()
// console.log(newstr)

// Check if a string is a palindrome or not ----------------------------------------------------------------------------------------------------------------------------------------------
// const str='aba'
// const rev=str.split('').reverse().join('')
// if(str==rev){
//     console.log('palendrem')
// }else{
//     console.log('not palidram')
// }

//Rearrange 'hello world' to 'world hello'--------------------------------------------------------------------------------------------------------------------------------------------

// const str='hello world'
// const result=str.split(' ').reverse().join(' ')
// console.log(result)

//• Throw error if argument isn't a string ------------------------------------------------------------------------------------------------------------------------------------------

// function validateString(str){
//   if (typeof str!=="string"){
//       throw new Error('not string you go and die')
//   }
//   console.log('valid string',str)
// }
// try{
//   validateString(6)

// }catch(error){
//   console.error(error.message)
// }

//• Function to count vowels in a string ----------------------------------------------------------------------------------------------------------------------------------------------
// function check(arr){
//   const vovels=['a','e','i','o','u','A','E','I','O','U']
//  let count=0
//   for(let char of arr){
//        if(vovels.includes(char)){
//        count++ 
//   }

//   }
//   return count
// }
// console.log(check('abhiram'))

// Creating the delay function using Promise-------------------------------------------------------------------------------------------------------------------------------------

// function delay(second){
//     return new Promise ((resolve,reject)=>{
//         setTimeout(()=>resolve(`resolved after ${second}`),second*1000)
//     })
// }

// delay(6)

// .then((res)=>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.log(err)
// })




