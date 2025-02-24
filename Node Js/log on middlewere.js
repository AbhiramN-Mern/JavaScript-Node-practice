const express=require('express')
const app=express()
const blockAPI=require('./middleweres/api blocking')

app.use(blockAPI)

app.get('/',(req,res)=>{
    res.send('hello')
})

app.listen(2500,()=>console.log("server started"))