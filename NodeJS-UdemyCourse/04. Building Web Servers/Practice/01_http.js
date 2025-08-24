// Importing Built-in HTTP Module
const http = require('node:http');

// creates an HTTP server instance [ Object ]
const server = http.createServer((req, res) => {
    console.log("I got an Incoming Request");
    // logs message to console every time the server receives a request.

    res.writeHead(200);
    // Sends an HTTP status code 200 OK to the client.

    res.end("Thank you for visiting the Server");
    // Ends the response.
    // And Sends "Thank you for visiting the Server" back to client
});

// Making Server listen for incoming connections on port 8000.
server.listen(8000, () => {
    console.log("Server is Listening on port 8000");
})
// callback function that runs once the server successfully starts.