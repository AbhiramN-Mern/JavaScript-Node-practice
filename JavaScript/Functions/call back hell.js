function task1(callback){
    setTimeout(()=>{
        console.log("task one completed");
        callback();
    },1000)
}

function task2(callback){
setTimeout(() => {
    console.log("Task two completed");
    callback();
}, 1000);
}

function task3(callback){
    setTimeout(()=>{
        console.log(" task three completed");
        callback();
    },1000)
}

task1(()=>{
    task2(()=>{
        task3(()=>{
           setTimeout(()=>{
            console.log("all task completed");
            
           },1000)
            
        })
    })
})