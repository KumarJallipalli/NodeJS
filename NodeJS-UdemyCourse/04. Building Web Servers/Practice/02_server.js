const http = require('node:http');

const server = http.createServer((req, res) => {
    // HTTP Request 
    console.log("A Request is made");

    
    
    switch (req.url) {
        case ('/') :
            res.writeHead(200);
            res.end("Welcome to Home Page");
            break;
        case ('/contact'):
            res.writeHead(200);
            res.end('Contact me @ xyz.gamil.com');
            break;
        case ('/about'):
            res.writeHead(200);
            res.end("I'm a Software Engineer");
            break;
        default:
            res.writeHead(400);
            res.end("You are Lost ..!");
            break;
    }
});

server.listen(8000, () => {
    console.log("Server is Listening on Port No. : 8000");
})