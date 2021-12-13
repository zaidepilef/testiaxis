const http = require('http');

const server = http.createServer((req, res)=>{
    res.status= 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello world');
});

server.listen(3066,()=>{
    console.log("Serve on port 3066")
});


