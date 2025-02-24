const promise1 = Promise.resolve("completed");
const promise2 = Promise.reject("failed");

Promise.any([promise1,promise2]).then((result)=>{
    console.log(result);
    
}).catch((Error)=>{
    console.log(Error);
    
})