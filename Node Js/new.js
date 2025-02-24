const http=require('http')

http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/plain'})
    res.write('hello')
    res.end('world')
}).listen(3000)