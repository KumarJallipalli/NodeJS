const http = require('node:http');
const fs = require('node:fs');

const server = http.createServer((req, res) => {
    const path = req.url;
    const method = req.method;

    const logs = `[${Date.now()}]: ${method} ${path} \n`
    fs.appendFileSync('logs.txt', logs, 'utf-8');

    //  I have used if-else statements [But, lecture is in Switch case]
    if (method == 'GET') {
        if (path == '/') {
            res.writeHead(200).end('Hello from Server :)');
        }
        else if (path == '/contact-us') {
            res.writeHead(200).end(`contact us :
                mail: xyz@gmail.com
                phone: 9999999999`);
        }
        else if (path == '/tweet') {
            res.writeHead(200).end('tweet-1: Hi \ntweet-2: Bye');
        }
        else {
            res.writeHead(404).end("Bad Request: Page Not Found");
        }
    }
    else if (method == 'POST') {
        if (path == '/tweet') {
            res.writeHead(201).end("Tweet was Successfully Created");
        } else {
            res.writeHead(404).end("Bad Request: Page Not Found");
        }
    }
    else {
        res.writeHead(404).end("Bad Request: Page Not Found")
    }
});

server.listen(8000, () => {
    console.log("Server is Running on PORT : 8000");
});