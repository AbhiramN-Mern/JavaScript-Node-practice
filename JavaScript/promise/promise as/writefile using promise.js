const fs=require('fs')

const promise=new Promise((resolve,reject)=>{
    if(5<2){
        fs.writeFile('input.txt','hello JAVASCRIPT',(err)=>{
            if (err){
                reject(err)
            }else{
                resolve('sucses fully writed js')
            }
        })
    }else{
        fs.writeFile('input.txt','hello CSS',(err)=>{
            if (err){
                reject(err)
            }else{
                resolve('sucses fully writed css')
            }
        })
    }

})
.then((res)=>{
    console.log(res);
    
})
.catch((err)=>{
    console.log(err);
    
})