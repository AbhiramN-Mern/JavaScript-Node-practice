const express = require('express');
const app = express();

const router = express.Router();

router.use('/user',(req, res, next) => {
    console.log('Router-level middleware executed');
    next();
});

router.get('/user', (req, res) => {
    res.send('Hello from the router!');
});

router.get('/admin', (req, res) => {
    res.send('Hello from the admin!');
});

app.use(router); 

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});