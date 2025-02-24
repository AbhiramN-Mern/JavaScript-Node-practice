const http = require('http');
 http.createServer((req, res) => {
    if (req.url === '/') {
        // res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello, this is your home route!');
    } else {
        // res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Route not found');
    }
}).listen(2000, () => {
    console.log('Server is running on http://localhost:2000');
})
