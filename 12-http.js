const http= require('http')

const server =http.createServer((req, res)=>{
if(req.url==='/'){
    res.end('welcome to our home page')
}

if(req.url==='/about'){
    res.end('Here is our short history')
}
res.end(`<h1>Ooops</h1>
<p1>we cant seem to find the page</p>
<a href="http:/">back home</a>`)
})

server.listen(5000)