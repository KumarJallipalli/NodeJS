const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.end('Homepage');
})
app.get('/contact-us', (req, res) => {
    res.end('Contact us @ xyz.gmail.com');
})
app.get('/tweets', (req, res) => {
    res.end('Here are all of your Tweets');
})

app.post('/tweets', (req, res) => {
    res.status(201).end('Your Tweet was Created Successfully');
})

app.listen(8000, () => {
    console.log("Server is Running at PORT 8000")
})