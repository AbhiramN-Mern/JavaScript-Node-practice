const express=require('express')
const app=express()

app.get('/:b',(req,res)=>{
    const a=Number(req.query.a)
    const b=Number(req.params.b)
    const sum=a+b
    res.send(`sum is ${sum}`)
})

app.listen(2000,()=>{
    console.log('started');
    
})