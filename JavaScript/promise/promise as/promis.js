const myPromise = new Promise((resolve,reject)=>{
    const success = false;
    if(success){
resolve("comp")
    }
else{
    reject("not")
}
})
myPromise.then((result)=>{
    console.log(result);
    
}).catch((Error)=>{
    console.log(Error);
    
})