const express=require('express')
const app=express()

app.get('/error', (req, res, next) => {
    const err = new Error('This is a simulated error!');
    next(err); // Pass the error to the error-handling middleware
  });
app.use((err,req,res,next)=>{
    console.error(err.stack)
    res.status(500).send('server error')
})
app.listen(2500,()=>console.log("server started"))