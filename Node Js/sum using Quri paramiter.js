const express=require('express')
const app=express()


app.get('/',(req,res,next)=>{
    const a=Number(req.query.a)
    const b=Number(req.query.b);
    const sum=a+b;
    res.send(`answer is ${sum}`)
})
app.listen(3000,()=>{
    console.log('server started');
    
})

