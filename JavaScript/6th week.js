//includes-----------------------------------------------------------------------------------------------------------------------

// const arr=[1,2,3,4,5]
// console.log(arr.includes(2))

//REVERSE AN ARRAY WITHOUT USING NEWARRAY---------------------------------------------------------------------------------------------------
// const arr=[1,2,3,4,5]
// arr.sort((a,b)=>b-a)
// console.log(arr)

// REMOVE NTH ELEMENT FROM AN ARRAY------------------------------------------------------------------------------------------------------------
// const arr=[1,2,3,4,5]
// arr.splice(2,1)
// console.log(arr)

// REMOVE DUPLICATE ELEMENTS FROM THE ARRAY--------------------------------------------------------------------------------------------------------
// const arr=[1,2,3,2,4,1,5]
// const result=[...new Set(arr)]
// console.log(result)

//--------with Lopp----
// const arr=[1,2,3,3,4,5,6,8,7]

// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<i;j++){
//         if(arr[j]==arr[i]){
//             arr.splice(i,1)
           
//         }
//     }
// }

// console.log(arr);

// EVEN NUMBERS FROM THE ARRAY----------------------------------------------------------------------------------------------------------------
// const array=[1,2,3,4,5,6]
// const result=array.filter((value)=>value%2==0)
// console.log(result);

//with slice-----
// const arr=[1,2,3,4,5,6]
// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2==1){
//         arr.splice(i,1)
//     }
// }
// console.log(arr)

//PRINT DUPLICATE ELEMENTS-------------------------------------------------------------------------------------------------------------------
// const arr = [1, 2, 3, 3, 4, 5, 6, 8, 7, 2];
// const duplicates = [];

// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < i; j++) {
//         if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
//             duplicates.push(arr[i]);
//         }
//     }
// }
// console.log("Duplicate elements:", duplicates);

//. PALINDROME OR NOT------------------------------------------------------------------------------------------------------------------------------
// const text="hi"
// const rev=text.split('').reverse().join('')

//     if(text==rev){
//         console.log("this is PALINDROME")
//     }else{
//         console.log("not PALINDROME");
        
//     }

// DELETE MULTIPLES OF 3--------------------------------------------------------------------------------------------------------------------------
// const arr=[1,2,3,4,5,6]
// for(let i=0;i<arr.length;i++){
//     if(arr[i]%3==0){
//         arr.splice(i,1)
//     }
// }
// console.log(arr)

//PRINT MULTIPLES OF 5----------------------------------------------------------------------------------------------------------------------------
// const arr=[1,4,5,6,10,15,3,4]
// for(let i=0;i<arr.length;i++){
//     if(arr[i]%5==0){
//         console.log(arr[i])
//     }
// }

// CALLBACK // FIND SUM OF TWO NUMBERS

// function call(callback){
//    callback()
// }
// function  add(a,b){
//   console.log(a+b);
    
// }

// call(()=>add(5,10))
    
//FIND SMALLEST ODD NUMBER USING REDUCE-----------------------------------------------------------------------------------------------------
// const arr = [12,3,4,5,6,7,8,9];

// const result = arr.filter((value)=>value%2==0)
// .reduce((acc,curr)=>acc<curr?acc:curr)
// console.log(result)

//FIND THE SECOND LARGEST NUMBER IN AN ARRAY FORLOOP------------------------------------------------------------------------------------------
// const arr=[4,2,5,8,5,3]
// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr.length;j++){
//   
//     }
// }


//sort a object-------------------------------------------------------------------------------------------------------------------------------
// const age={
//     age1:10,
//     age2:45,
//     age3:30,
//     age4:25
// }
// const result=Object.values(age)
// result.sort((a,b)=>a-b)
// console.log(result);

//Remove Middle element from an Array------------------------------------------------------------------------------------------------------
// const arr=[1,2,3,4,5]
// middle=arr.length/2
// arr.splice(middle,1)
// console.log(arr);

// FIND PERSON AGED LESS THAN 20 ( IN A OBJECT)-------------------------------------------------------------------------------------------------
// const person={
//     user1:{
//         name:'Abhiram',
//         age:18
//     },
//     user2:{
//         name:'vaishak',
//         age:22
//     },
//     user3:{
//         name:'aseem',
//         age:19
//     }
// }
// const val=Object.values(person)
// val.forEach(user => {
//     if(user.age<20){
//         console.log(`${user.name} is chid and his age ${user.age}`)
//     }
    
// });
//.COUNT EVEN NUMBERS IN AN ARRAY------------------------------------------------------------------------------------------------------------------
// const arr=[1,2,3,4,5,6]
// let count=0
// for(let i=1;i<arr.length;i++){
//     if(arr[i]%2==0){
//         count++
//     }
// }
// console.log(`Even Numbers count is ${count}`)

//FIND UNIQUE NUMBERS IN AN ARRA-Y-------------------------------------------------------------------------------------------------------------------
// const arr=[1,2,3,3,4,7,4,2]
// const result=[...new Set(arr)]
// console.log(result)

// FIND THE NUMBER DID NOT PRESENT IN THIS ARRAY-------------------------------------------------------------------------------------------------
// const array = [1, 2, 3, 4, 5];
// const values = [3, 5, 6,3, 8];

// const hasAny = values.some(value => array.includes(value));
// console.log(hasAny);

// CONVERT THE r LETTER IN TO UPPERCASE----------------------------------------------------------------------------------------------------------
// const NAME = ['rasha', 'riza'];
// const updatedNames = NAME.map(name => name.replace(/r/g, 'R'));
// console.log(updatedNames); 

// PRINT NUMBERS FROM THIS ARRAY--------------------------------------------------------------------------------------------------------------------
// const arr=[1,'r',2,'a',3,'s',4,'h']
// const result=arr.filter((value)=>typeof(value)=='number')
// console.log(result);

//REMOVE NULL AND UNDEFINED------------------------------------------------------------------------------------------------------------------
// const arr= [1, '', 'hello', null, 'world', undefined, 42, NaN, 0]
// const result=arr.filter((value)=>value!=null&&value!=undefined)
// console.log(result)

//FIND THE LONGEST STRING WITH LOOP AND REDUCE----------------------------------------------------------------------------------------------------
// const arr = ['rasha', 'shibil', 'maneesha'];
// const longestString = arr.reduce((longest, current) => current.length > longest.length ? current : longest);
// console.log(longestString); 

//SUM THE SQUARE OF NUMBERS IN AN ARRAY----------------------------------------------------------------------------------------------------------
// const arr=[1,2,3,4,5]
// const result=arr.map((value)=>value*value)
// .reduce((acc,curr)=>acc+curr)
// console.log(result)

//PRINT FIRST 10 EVEN NUMBERS USING GENERATOR FUNCTION-----------------------------------------------------------------------------------------------
// function *genarator(){
//    let num=2;
//    while(num<=20){
//     yield num
//     num=num+2
//    }
// }
// const gen=genarator()
// for(let i=0;i<10;i++){
//     console.log(gen.next())
// }

//REPLACE 4 WITH 40--------------------------------------------------------------------------------------------------------------------------------------
// const arr=[1,2,3,null,4,undefined,5] 
// const result=arr.map((value)=>value===4?40:value)
// console.log(result);

 //CONVERT POSITIVE NUMBERS IN TO NEGATIVE AND NEGATIVE IN TO POSITIVE
// const arr=[1,-2,-4,2,4,-6,]
// const result = arr.map(num => num > 0 ? -num : Math.abs(num));
// console.log(result);
 







