const express = require('express');
const fs = require('node:fs');

const app = express();
const PORT = 8000;

const books = [
        { id: 1, title: 'Book One', author: 'Author One' },
        { id: 2, title: 'Book Two', author: 'Author Two' },
];

function loggerMiddleware (req, res, next) {
    const logMessage = `[${Date.now()}]: ${req.method} ${req.path} \n`
    fs.appendFile('logs.txt', logMessage, 'utf-8');
    next()
}

// To Parse & Store the req data 
app.use(express.json());

// Middleware fn to log every request
app.use(loggerMiddleware);


// Route to GET all Books
app.get('/books', (req, res) => {
    res.json(books);
})

// Route to fetch a Book by ID
app.get('/books/:id', (req, res) => {
    const id = parseInt(req.params.id);
    
    // send response if ID is NAN
    if (isNaN(id)) {
        return res.status(400).json({error: "Book ID must be of Type Number"});
    }

    // Find the book
    const book = books.find((i) => {return i.id === id});

    // if book not found
    if (!book) {
        return res.status(404).json({error: `Book with id:${id} is NOT found`});
    }

    // Send response
    return res.json(book);
})

// Route to POST a New Book
app.post('/books', (req, res) => {
    const {title, author} = req.body;

    // Condition where title or author is missing in Req
    if (!title) {
        return res.status(400).json({error: "title of the book is Missing"});
    }
    if (!author) {
        return res.status(400).json({error: "author of the book is Missing"});
    }
    
    const id = books.length + 1;
    const book = {id, title, author};
    books.push(book);

    return res.status(201).json({Message: `Book with id:${id} is Inserted`});
})

// Route to DELETE a Book by ID
app.delete('/books/:id', (req, res) => {
    const id = parseInt(req.params.id);
    
    // send response if ID is NAN
    if (isNaN(id)) {
        return res.status(400).json({error: "Book ID must be of Type Number"});
    }

    // Find the book
    const indexToDelete = books.findIndex((i) => {return i.id === id});

    // if book not found
    if (indexToDelete < 0) {
        return res.status(404).json({error: `Book with id:${id} is NOT found`});
    }

    books.splice(indexToDelete, 1);
    return res.json({Message: `Book with id:${id} is Deleted Successfully`});
})

app.listen(PORT, () => console.log(`Server is Running on PORT: ${PORT}`));