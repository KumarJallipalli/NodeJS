const express = require('express');

const app = express();
const PORT = 8000;

app.use(express.json());
// If Headers has content-type = application/json
// Then parse it to json & store in req.body
// Finally call the next() function [ This is default behavior ]

// app.use(function (req, res, next) {
//     console.log("This is Middleware A");
// })
// This Middleware function will Intercept all the incoming requests & halts
// It neither terminate the req nor forwards
// Hence, Server will continuously load [ for any Req ]

app.use(function (req, res, next) {
    console.log("This is Middleware A");
    next();
})
// This will execute the code -> Print log msg
// Finally forward the control to next middleware

app.use(function (req, res, next) {
    console.log("This is Middleware B");
    next()
})
// This Middleware will be Terminate all the Requests
// All Req's won't be reachhing the Route's

app.get('/books', (req, res) => {
    res.json({id:'1', name:"Modern NodeJS", author:"Paris Hilton"});
}) 

app.post('/books', (req, res) => {
    console.log(req.body);
    res.status(201).json(req.body);
})

app.listen(PORT, () => console.log(`Server is Running on PORT : ${PORT}`));