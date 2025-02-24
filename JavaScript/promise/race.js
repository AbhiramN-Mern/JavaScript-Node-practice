const promise1 = new Promise((resolve)=>{
    setTimeout(() => {
        resolve("task 1")
        
    }, 1000);
})

const promise2 = new Promise((reject)=>{
    setTimeout(() => {
       reject("task 2");
        
    }, 100);
})

Promise.race([promise1,promise2]).then((rsult)=>{
    console.log(rsult);
    
})