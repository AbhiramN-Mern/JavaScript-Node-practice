const fs=require('fs')


const res=new Promise((resolve,reject)=>{
    let target=300
    let array=[20,30,10]
    if(array.includes(target)){

        fs.writeFile('abi.txt',"value is here",(err,data)=>{
        resolve(data)

        })
    }else{
        fs.writeFile('abi.txt','value  is not here',(err,data)=>{
        reject(data)
        })
    }
})

res.then((res)=>{

    console.log(res)
}).catch((err)=>{
    console.log(err)
})