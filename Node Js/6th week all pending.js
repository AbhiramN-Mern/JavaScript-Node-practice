// PENDING PROMBLEMS

// 1) Using callback find the sum of an array?

// function sumArray(arr,callback){
//     let sum =0 ;
//     for(let num of arr){
//         sum += num;
//     }
//     callback(sum);
// }

// const numbers = [1,2,3,4,5];

// sumArray(numbers,function(result){
//     console.log("The sum of the array is :",result);
    
// })

// ---------------------------------------

// function sumArray(arr,callback){
//     const sum = arr.reduce((acc,curr)=>acc+curr,0);
//     callback(sum)
// }

// const numbers = [1,2,3,4,5];
// sumArray(numbers,(result)=>{
//     console.log("The sum of the array is :",result);
    
// })




// 2) Push all zero's to the beginig of the array ?

// function pushZeroTOBeg(arr){
//     let result = [];
//     let zeroCount = 0;

//     for(let i =0 ;i<arr.length;i++){
//         if(arr[i]===0){
//             zeroCount ++;
//         }else{
//             result.push(arr[i])
//         }
//     }
//     for(let i =0 ;i<zeroCount;i++){
//         result.unshift(0);
//     }
//     return result;
// }

// const numbers = [1,0,2,0,3,0];
// const result = pushZeroTOBeg(numbers);
// console.log(result);



// 3) Remove multiple of three from an array

// function removeMultipleOfThree(arr){
//     let result = [];

//     for(let i=0 ;i<arr.length;i++){
//         if(arr[i]%3!==0){
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }

// const numbers = [1,2,3,4,5,6,7,8,9];
// const filtered = removeMultipleOfThree(numbers);
// console.log(filtered);

// ---------------------

// function removeMultipleOfThree(arr){
//     let index = 0;

//     for(let i =0 ;i<arr.length;i++){
//         if(arr[i]%3!==0){
//             arr[index] = arr[i];
//             index++;
//         }
//     }
//     arr.length = index;
//     return arr;
// }

// let numbers = [1,2,3,4,5,6];
// removeMultipleOfThree(numbers);
// console.log(numbers);



// 4) Find the second largest element from the array?

// function secondLargest(arr){
//     let largest = arr[0];
//     let secondLargest = arr[1];

//     for(let i = 0 ;i<arr.length;i++){
//         if(arr[i]>largest){
//             secondLargest = largest;
//             largest  = arr[i];
//         }else if(arr[i]>secondLargest && arr[i]!=largest){
//             secondLargest=arr[i]
//         }
//     }
//     return secondLargest
// }

// let numbers = [1,2,3,4,5];
// let result = secondLargest(numbers);
// console.log(result);


// 5) Reverse an array (swap) ;








// 6)) Using arrow function sum of so many numbers?

// const sum = (...numbers)=>{
//     return numbers.reduce((acc,curr)=>acc+curr,0)
// }
// console.log(sum(1,2,3,4));


// 7)) Call, apply , bind

// call

// function greet(greeting){
//     console.log(greeting +" ,"+this.name);
// }
// let person = {name:"Aseem"};
// greet.call(person,"Hello");

// apply

// function introduce(greeting,punctuation){
//     console.log(greeting+" ,"+this.name+ punctuation);
    
// }
// let person = {name:"Aseem"};
// introduce.apply(person,["Hi","!"]);

// bind

// const user = {
//     name:"Aseem",
//     sayName:function(greet){
//         console.log(greet+", "+this.name);
        
//     }
// }
// const sayUserName = user.sayName.bind(user);
// sayUserName("Hello")


// 8) a) Promise ,b) Promise.all , c) Promise.any , d) Promise.race , e) Promise.setelled.

// a)
//    const mypromise = new Promise((resolve,reject)=>{
//          const success = true;
//          setTimeout(()=>{
//             if(success){
//                 resolve("Successfull")
//             }else{
//                 reject("Failed")
//             }
//          },1000)
//    })

//    .then((message)=>{
//     console.log(message);
    
//    })
//    .catch((error)=>{
//     console.log(error);
    
//    })


//     b)
    
//     const promise1 = new Promise((resolve,reject)=>setTimeout(()=>resolve("promise 1 resolved")))
//     const promise2 = new Promise((resolve,reject)=>setTimeout(()=>resolve("promise 2 resolved")))
//     const promise3 = new Promise((resolve,reject)=>setTimeout(()=>resolve("promise 3 resolved")))

//     Promise.all([promise1,promise2,promise3])
//     .then((value)=>{
//         console.log("All promise resolved");
//         console.log(value);
//     })
//     .catch((error)=>{
//         console.log('One of the promise rejected',error);
        
//     })



//     c) promise.any

//     const promise1 = new Promise((resolve,reject)=>setTimeout(()=>reject("promise 1 rejected"),1000))
//     const promise2 = new Promise((resolve,reject)=>setTimeout(()=>resolve("promsise 2 resolved"),1500))
//     const promise3 = new Promise((resolve,reject)=>setTimeout(()=>resolve("promise 3 resolved"),2000))

//     Promise.any([promise1,promise2,promise3])
//     .then((message)=>{
//         console.log('First resolved pormise :',message);
//     })
//     .catch((error)=>{
//         console.log("All promise rejected",error);
        
//     })


//     d) promise.race

//     const promise1 = new Promise((resolve,reject)=>setTimeout(()=>resolve("Promise 1 resolved"),1500))
//     const promise2 = new Promise((resolve,reject)=>setTimeout(()=>resolve("Promise 2 resolved"),2000))
//     const promise3 = new Promise((resolve,reject)=>setTimeout(()=>reject("Promise 3 rejected"),1000))

//     Promise.race([promise1,promise2,promise3])
//     .then((value)=>{
//         console.log('First (resolved):',value);
        
//     })
//     .catch((error)=>{
//         console.log('First (rejected) :',error);
        
//     })

//     e)  Promise.setteled

//       const promise1 = new Promise((resolve,reject)=>setTimeout(()=>resolve("Promise 1 resolved"),1000))
//       const promise2 = new Promise((resolve,reject)=>setTimeout(()=>reject("Promise 2 resolved"),1500))
//       const promise3 = new Promise((resolve,reject)=>setTimeout(()=>resolve("Promise 3 resolved"),2000))

//       Promise.allSettled([promise1,promise2,promise3])
//       .then((message)=>{
//         console.log("All Promise setteled",message);
        
//       })



// 9) Find average of multiple of three from an array?

//   function avgOfMulOfThree(arr){
//     let sum =0 ;
//     let count =0;

//        for(let i=0; i<arr.length;i++){
//         if(arr[i]%3===0){
//             sum += arr[i];
//             count++;
//         }
//        }
//        if(count===0){
//         return 0;
//        }
//        return sum/count;
//   }

//  const numbers = [1,2,3,4,5,6];
//  const average = avgOfMulOfThree(numbers);
//  console.log(average);
 

// 10) Chaining and Optional chaining ?
 
//         a) chaining;

//         let numbers = [1,2,3,4];
//         let result = numbers
//         .map((num)=>num*2)
//         .filter((num)=>num>4)
//         .reduce((acc,curr)=>acc+curr,0);
//         console.log(result);
        

//         b) Optional Chaining;

//         let person = {
//             name:"Aseem",
//             age:19,
//             address:{city:"calicut"}
//         }

//         console.log(person.address?.city);
//         console.log(person.address?.street);
//         console.log(person.details?.city);
        
        
// 11) Throtling        
// Throttling is a technique used in programming to control how often a function runs. It limits the function to execute only once within a specified time period, even if the event that triggers it happens multiple times. This helps improve performance and prevents the application from slowing down when events occur rapidly, like during scrolling or window resizing. Essentially, throttling makes sure that a function isn't overwhelmed by too many calls in a short time.



// 12) Error handling middleware


const express = require('express');
const app = express();
const port = 3000;

app.get('/error',(req,res,next)=>{
    const error = new Error("Something went wrong");
    next(error);
})

app.use((err,req,res,next)=>{
    console.log(err.message);
    res.status(500).json({message:"Internal server error",error:err.message})
    
})

app.listen(port,()=>{
    console.log("Server is running on 3000");
    
})


// 13) Oplog  (Theory in whatsapp)


// 14) Application middleware


// const express = require('express');
// const app = express();
// const PORT = 3000;

// // Middleware to log request details
// app.use((req, res, next) => {
//     console.log(${req.method} request for '${req.url}');
//     next(); // Call the next middleware or route handler
// });

// // Middleware to parse JSON request bodies
// app.use(express.json());

// // Example route to create a new user
// app.post('/users', (req, res) => {
//     const user = req.body; // Accessing parsed JSON data
//     res.status(201).json({ message: 'User created', user });
// });

// // Error handling middleware
// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).json({ message: 'Something went wrong!' });
// });

// // Start the server
// app.listen(PORT, () => {
//     console.log(Server is running on http://localhost:${PORT});
// });


// 15) Local Storage





// 16)


// const express = require('express');
// const app = express();

// app.use((req,res,next)=>{
//     if(req.method ==="GET"){
//         return res.status(403).send("GET request is blocked")
//     }
//     next()
// })

// app.post((req,res)=>{
//     res.send("POST reques is allowed")
// })


// app.listen(3003,()=>{
//     console.log("Server is running on port 3003");
    
// })


// 17)





// 18) Print even numbers from an object

// let obj = {
//     n1:1,
//     n2:2,
//     n3:3,
//     n4:4
// }

// for(let key in obj){
//     if(obj[key]%2===0){
//         console.log(key+":"+obj[key]);
        
//     }
// }


// 19) Onn muthal 5 vareyull arryil naduvilatheth number delete cheyuga

// let array = [1,2,3,4,5];
// array.splice(Math.floor(array.length/2),1);
// console.log(array);

// --------------------

// let array = [1,2,3,4,5];
// let newArray = [];
// let middleIndex = Math.floor(array.length/2);

// for(let i =0 ;i<array.length;i++){
//     if(i !==middleIndex){
//         newArray.push(array[i])
//     }
// }
// console.log(newArray);


// 20) Capitalize the last character of a string 

// let str = "hello";
// let lastchar = str.charAt(str.length-1).toUpperCase();
// let newStr = str.slice(0,-1)+lastchar;
// console.log(newStr);


// ---------------------

// let str = "hello";
// let firstlet = str.charAt(0).toUpperCase();
// let newStr = firstlet+str.slice(1);
// console.log(newStr);


// 21) Using reduce find the sum of even numbers ?

// let numbers = [1,2,3,4,5,6,7];
// let sumOFEven = numbers.reduce((acc,curr)=>curr%2==0?acc+curr:acc,0);
// console.log(sumOFEven);


// 22) Print unique numbers in an array?

// function unequeNumbers(arr){
//     let unique = [];
//     let seen = {};

//     for(let i=0 ;i<arr.length;i++){
//         if(!seen [arr[i]]){
//             unique.push(arr[i]);
//             seen [arr[i]]=true;
//         }
//     }
//     return unique;
// }

// let numbers = [1,1,2,2,3,3,4,4];
// let result = unequeNumbers(numbers);
// console.log(result);


// 23) deepcopy and shallowcopy

//       a) deep copy

//       let person = {
//         name:"Aseem",
//         details:{age:19}
//       }

//       const deepcopy = JSON.parse(JSON.stringify(person));
//       deepcopy.details.age = 20;
//       console.log(person.details.age);
//       console.log(deepcopy.details.age);
      
      

//     b) shallow copy

//     let person = {
//         name:"Aseem",
//         details:{age:19}
//     }

//     const shallowcopy = Object.assign(person);
//     shallowcopy.details.age= 20;

//     console.log(person);
//     console.log(shallowcopy);
    
    

// 24)Infinite scrolling is a web design technique where content is loaded continuously as the user scrolls down the page, rather than having them navigate to a new page. It's commonly used on social media platforms, news websites, and blogs to keep users engaged by providing a seamless browsing experience. Here's a basic example of how you can implement infinite scrolling using JavaScript, Node.js, and MongoDB:


// 25)"pagination," which is a common technique to manage large sets of data by dividing it into discrete pages. This method improves performance and user experience by loading only a subset of data at a time. Here's a basic guide on how you can implement pagination using JavaScript, Node.js, and MongoDB:


// 26) Prototype

// function person(name,age){
//     this.name =  name;
//     this.age = age;
// }

// person.prototype.greet = function(){
//       console.log(Hello my name is ${this.name} and iam ${this.age} year old);
      
// }

// const person1 = new person("Aseem",19);
// const person2 = new person("Roshan",20)

// person1.greet()
// person2.greet()


// 27) Objectile oru specific sathanam loop ubayogich delete cheyuga                                                                                      


//  let obj = {
//     n1:"some",
//     n2:"lol",
//     n3:"peep"
//  }

// let keystodelete = ['n2'];
// for(let key in obj){
//     if(keystodelete.includes(key)){
//         delete obj[key]
//     }
// }
// console.log(obj);

 

// 28) Event loop and CallStack

//       a) Event Loop

//       console.log("Start");

//       // Simulate a long-running operation using setTimeout
//       setTimeout(() => {
//         console.log("Inside setTimeout");
//       }, 2000);
      
//       // Simulate an I/O operation using a file system module
//       const fs = require('fs');
//       fs.readFile('example.txt', 'utf8', (err, data) => {
//         if (err) {
//           console.error(err);
//           return;
//         }
//         console.log("File content:", data);
//       });
      
//       console.log("End");
      

//     b) callstack

//     function firstFunction(){
//         console.log("Inside firstFunction");
//         secondFunction();
//         console.log("End of firstFunction");
        
        
//     }

//     function secondFunction(){
//         console.log("Inside second function");
//         thirdFunction();
//         console.log("End of second Function");
        
//     }

//     function thirdFunction(){
//         console.log("Inside thirdFunction");
        
//     }
//     console.log("Start of script");
//     firstFunction();
//     console.log("End of script");
    
    

// 29) Retrieve multiple of three from the array simultaneosly delete duplicates?

// let array =[1,2,3,3,6,9,9,12,15,18,18,21];

// let multipleOfThree= [...new Set(array.filter(num=>num%3===0))];
// console.log(multipleOfThree);


// 30)







// 31) Average of array using reduce

// let array = [1,2,3,4,5];
// let sum = array.reduce((acc,curr)=>acc+curr,0);
// let average = sum/array.length;
// console.log(Average: ${average});


// let array = [1,2,3,4,5,6];
// let multipleofthree = array.filter((num)=>num%3===0);
// let sumofMult = multipleofthree.reduce((acc,crr)=>acc+crr,0);
// let avg = sumofMult/multipleofthree.length;
// console.log(avg);



// 32) Object of arrayil ettuvum kooduthal agulla aale print cheyuga

// const people = [
//   {name:"Aseem",age:19},
//   {name:"Roshan",age:20},
//   {name:"Ali",age:17}
// ];

// const oldestMan = people.reduce((max,person)=>person.age>max.age?person:max,people[0]);
// console.log(The oldest man name is ${oldestMan.name} and he is ${oldestMan.age} years old);


// 33) Destructure an array into three variable ?

// const myArray = [10,20,30];
// const [first,second,third] = myArray;
// console.log(first);
// console.log(second);
// console.log(third);



// 34) Remove object key ?

// const person = {
//   name:"Aseem",
//   age:19,
//   city:"Kondotty"
// }

// delete person.age;
// console.log(person);


// 35) Loop object to print key's Using loop  ?

//      const person = {
//       name:"John",
//       age:19,
//       city:"Kondoty"
//      }

//      for(let key in person){
//       console.log(key,":",person[key]);
      
//      }




//  36) Remove document that do not have a field (mongodb) ?

//  db.collection.deleteMany({fieldName:{$exists:false}})



// 37) Applications and drawbacks of callback(Check Whatsapp)

// 38)Find higest odd number from an array using reduce ?

// const  numbers = [12,3,5,18,7,9,2];
// const higestOdd= numbers.reduce((max,num)=>{
//   if(num%2!==0 && num>max){
//     return num;
//   }
//   return max
// },-Infinity)
// console.log(higestOdd);


// 39) Remove multiple of 3 from an array ?

// const numbers = [1,2,3,4,5,6];
// const filterd = numbers.filter((num)=>num%3!==0);
// console.log(filterd);



// const numbers = [1,2,3,4,5,6];
// const result = [];
// for(let i =0;i<numbers.length;i++){
//   if(numbers[i]%3!==0){
//     result.push(numbers[i])
//   }
// }
// console.log(result);


// const numbers = [1,2,3,4,5,6];
// for(let i =0 ;i<numbers.length;i++){
//   if(numbers[i]%3===0){
//     numbers.splice(i,1);
//     i--;
//   }
// }
// console.log(numbers);



// 40) Find key corresponds to heigst value of the arrray

// const data = {
//   a:10,
//   b:20,
//   c:30,
//   d:5
// }

// let maxKey = null;
// let maxValue = -Infinity;

// for(let key in data){
//   if(data[key]>maxValue){
//     maxValue = data[key];
//     maxKey = key;
//   }
// }

// console.log(The key containg max value is :${maxKey}: ${maxValue});



// 41) Total price of fruits with red and green color ?

//    db.fruits.aggregat([{$match:{color:{$in:['Red','Green']}}},
//   {$group:{_id:null,totalPrice:{$sum:"$Price"}}}])



// 42) Toggle check box(index.html )  

// 43) Prevent Right click of button (index.html)

// 44) Remove duplicate even numbers from an array ?

//  function removeDuplicateEvens(arr){
//   const seenEvens = new Set();
//   return arr.filter((num)=>{
//     if(num%2 ===0){
//       if(seenEvens.has(num)){
//         return false;
//       }
//       seenEvens.add(num);
//     }

//     return true;
//   })
//  }
//  const numbers = [2,4,6,2,3,4,5,6];
//  const result = removeDuplicateEvens(numbers);
//  console.log(result);
 



// 45) How to remove elelments from an array ?

// const array = [1,2,3,4,5];
// array.splice(2,1);
// console.log(array);


// const array = [1,2,3,4,5];
// const newArray = array.filter((item)=>item!==2 && item!==3);
// console.log(newArray);



// 46) How to check if an object or array is empty or not ?

// a)

// function isObjectEmpey(obj){
//   for(let key in obj){
//     if(obj.hasOwnProperty(key)){
//       return false;
//     }
//   }
//   return true;
// }

// const obj1 = {};
// const obj2 = {name:'Aseem',age:30};

// console.log(isObjectEmpey(obj1));
// console.log(isObjectEmpey(obj2));


// b)

//  function isArrayEmpty(arr){
//   if(arr.length===0){
//     console.log("True , Array is empty");
    
//   }else{
//     console.log("false , Array is not empty");
    
//   }
//  }

//  const arr1 = [];
//  const arr2  = [1,2,3];

// isArrayEmpty(arr1)
// isArrayEmpty(arr2)   




// 47)How to remove a character from a string ?
  
// let str = "Hello World";
// let newStr = str.replace('o',''); // removes the first 'o'
// console.log(newStr);


// let str = "Hello World";
// let newStr = str.replace(/o/g,'');  //Removes all 'o'
// console.log(newStr);




// 48) Api end point to divide two numbers (route parameter , query parameter) 

//   const express = require('express');
//   const app = express();

//   app.get('/divide/:num1/:num2',(req,res)=>{
//     const num1 = parseFloat(req.params.num1);
//     const num2 = parseFloat(req.params.num2);
//     if(num2===0){
//       res.status(400).json({error:"Cannot divide with zero"})
//     }
//     const result = num1/num2;
//     res.json({result})
//   })

  

//   app.get('/divide',(req,res)=>{
//     const num1 = parseFloat(req.query.num1);
//     const num2 = parseFloat(req.query.num2);
//     if(num2===0){
//       res.status(400).json({error:"Cannot divide with zero"});

//     }
//     const result = num1/num2;
//     res.json({result})
//   })


//   app.listen(4003,()=>{
//     console.log("Server running on port 4003");
    
//   })




// 49) Middleware log all parameters
// const express = require('express');
// const app = express();

// // Middleware to log all parameters
// app.use((req,res,next)=>{
//   console.log("Method",req.method);
//   console.log("URL",req.url);
//   console.log("Headers",req.headers);
//   console.log("Query Parameters",req.query);
//   console.log("Body:",req.body);
//   next()
// })

// app.get('/',(req,res)=>{
//   res.send("Hello World")
// })


// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });








// 50) Increase vitamin C fruits by 10% .




// 51) EventEmitter , childProcess, memoization ,currying

//       a)Event Emitter

//       const EventEmitter = require('events');
//       const emitter =  new EventEmitter();

//       emitter.on('greet',()=>{
//         console.log("Hello Good Afternoon");
        
//       })

//       emitter.emit("greet")
       


//       b) Child Process
       

//     c) Memoization







//       d) Currying

//       function add(a){
//         return function(b){
//           return function(c){
//             return a+b+c;
//           }
//         }
//       }

//       const add5 = add(5);
//       const add5And10 = add5(10);
//       const result = add5And10(15);

//       console.log(result);
      



// 53) Process.nextTick

// console.log("Start");

// process.nextTick(()=>{
//   console.log("Next Tick");
  
// })

// console.log("End");



const arr=[1,2,2,5,5,3,4,5]
let unique=[]
for(let i=0;i<arr.length;i++){
        if(!unique.includes(arr[i])){
             unique.push(arr[i])
    }
}
console.log(unique)
