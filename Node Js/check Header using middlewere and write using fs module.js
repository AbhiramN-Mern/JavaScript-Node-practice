const express=require('express')
const app=express()
const fs=require('fs')

app.use((req,res,next)=>{
    const head=JSON.stringify(req.headers,null,2)
    fs.writeFile('head.txt',head,(err)=>{
        if(err){
            console.log(err)
        }else{
            console.log(('sucsesfully complet'));
            
        }
    })
    next()
})
app.get('/hello',(req,res)=>{
    res.send('hello')
})
app.listen(2000,()=>console.log('server stated'))