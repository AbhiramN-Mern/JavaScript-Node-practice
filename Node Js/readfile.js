const fs=require('fs')
fs.readFile('dateOutput.txt','Utf8',(err,data)=>{
    if(err){
        console.error(err)
    }else{
        console.log(data)
    }
})