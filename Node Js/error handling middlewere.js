

const erronHanding=((err,req,res,next)=>{
    if(err){
        console.log(err)
    }else{
        next()
    }
})



// module.exports={erronHanding}


app.use(erronHanding)