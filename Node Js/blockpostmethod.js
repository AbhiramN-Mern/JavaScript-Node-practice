const express = require('express')
const app = express()
const path=require('path')

function logMiddleware(req, res, next) {
    if (req.method == 'POST') {
        res.send('Access denied for POSt method')
    } else {
        next()
    }
}

app.use(logMiddleware)



app.get('/', (req, res) => {
    res.sendFile((path.join)(__dirname,'form.html'))
})
app.post('/verify', logMiddleware,(req, res) => {
   res.send('ok')
})

app.listen(1011, () => {
    console.log('Server started on port 1011');
})
