const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log(`Request headers:`, req.headers); 
    next();
});

app.get('/hello', (req, res) => {
    res.send('hello');
});

app.listen(2000, () => console.log('Server started on port 2000'));
