const fs=require('fs')
const date =new Date().toString()

fs.writeFile('dateOutput.txt',date,(err)=>{
if(err){
    console.log("no file found");
}else{
    console.log('sucsesfuly created');
    
}
})