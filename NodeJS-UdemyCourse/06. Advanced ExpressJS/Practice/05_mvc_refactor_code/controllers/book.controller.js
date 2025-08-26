const { BOOKS } = require('../models/books');

exports.getAllBooks = (req, res) => {
    res.json(BOOKS);
}

exports.getBookByID = (req, res) => {
    const id = parseInt(req.params.id);
    
    // send response if ID is NAN
    if (isNaN(id)) {
        return res.status(400).json({error: "Book ID must be of Type Number"});
    }

    // Find the book
    const book = BOOKS.find((i) => {return i.id === id});

    // if book not found
    if (!book) {
        return res.status(404).json({error: `Book with id:${id} is NOT found`});
    }

    // Send response
    return res.json(book);
}

exports.postNewBook = (req, res) => {
    const {title, author} = req.body;

    // Condition where title or author is missing in Req
    if (!title) {
        return res.status(400).json({error: "title of the book is Missing"});
    }
    if (!author) {
        return res.status(400).json({error: "author of the book is Missing"});
    }
    
    const id = BOOKS.length + 1;
    const book = {id, title, author};
    BOOKS.push(book);

    return res.status(201).json({Message: `Book with id:${id} is Inserted`});
}

exports.deleteBookByID = (req, res) => {
    const id = parseInt(req.params.id);
    
    // send response if ID is NAN
    if (isNaN(id)) {
        return res.status(400).json({error: "Book ID must be of Type Number"});
    }

    // Find the book
    const indexToDelete = BOOKS.findIndex((i) => {return i.id === id});

    // if book not found
    if (indexToDelete < 0) {
        return res.status(404).json({error: `Book with id:${id} is NOT found`});
    }

    BOOKS.splice(indexToDelete, 1);
    return res.json({Message: `Book with id:${id} is Deleted Successfully`});
}