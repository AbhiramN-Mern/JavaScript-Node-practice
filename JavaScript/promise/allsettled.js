const promise1 = Promise.resolve("completed");
const promise2 = Promise.reject("failed");
const promise3 = Promise.resolve("completed");
const promise4 = Promise.reject("failed");

Promise.allSettled([promise1,promise2,promise3,promise4])
.then((result)=>{
console.log(result);   
})
.catch((err)=>{
    console.log(err);
    
})
