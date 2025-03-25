function fetchData(){
    return new Promise((resolve,reject)=>{
        const success= true;
        if(success){
            resolve("completed");
        
        }
        else{
            reject("task not completed")
        }
            
    })
}

async function handleData(){
    try{
     const result = await fetchData();
     console.log(result)
    }
    catch(error){
        console.log(error)
    }
}
handleData();
