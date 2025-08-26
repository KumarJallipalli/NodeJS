const express = require('express');
const booksRouter = require('./routes/books.routes');
const loggerMiddleware = require('./middlewares/logger');


const app = express();
const PORT = 8000;


// To Parse & Store the req data 
app.use(express.json());

// Middleware fn to log every request
app.use(loggerMiddleware);

// Routing all Requests
app.use('/books', booksRouter);

app.listen(PORT, () => console.log(`Server is Running on PORT: ${PORT}`));