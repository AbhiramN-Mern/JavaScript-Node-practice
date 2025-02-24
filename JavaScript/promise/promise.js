const myPromise = new Promise((resolve,reject)=>{
    const success=false;
    if(success){
        resolve("task completed");
    }
    else{
        reject("task failed");
    }
});

myPromise.then((result)=>{
console.log(result);

}).catch((Error)=>{
    console.log(Error);
    
    
});