app.get('/contact',(req,res)=>{
    if(req.session.user){
      res.send('welcome')
    }else{
      res.redirect('/user/login')
    }
  })
  