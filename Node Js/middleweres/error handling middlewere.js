const express = require('express');
const app = express();

app.get('/error',(req,res,next)=>{
const err=new Error('page error')
next(err)
})

app.use((err,req,res,next)=>{
    console.error(err)
    res.status(500).send('oops error')

})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
