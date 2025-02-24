function customMiddleware(req, res, next) {
    console.log('Custom middleware');
    next();
  }
  
  app.use(customMiddleware);