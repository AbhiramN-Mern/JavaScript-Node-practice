function getdata(){
    return new Promise((resolve,reject)=>{
        const success = false
        if(success){
            resolve("comp")
        }
        else{
            reject("failed")
        }
    })
}

async function handle() {
    try{
        const result = await getdata();
        console.log(result);
        
    }
    catch(Error){
console.log(Error);

    }
}
handle();