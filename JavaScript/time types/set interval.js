let count = 0;
const interval = setInterval(()=>{
    console.log("hi all"+ count++);
    if(count==5){
        clearInterval(interval);
    }
},1000)