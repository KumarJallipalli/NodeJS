const express = require('express');
const controllers = require('../controllers/book.controller');

const router = express.Router();


// Route to GET all Books
router.get('/', controllers.getAllBooks)


// Route to fetch a Book by ID
router.get('/:id', controllers.getBookByID)


// Route to POST a New Book
router.post('/', controllers.postNewBook)


// Route to DELETE a Book by ID
router.delete('/:id', controllers.deleteBookByID)


// export router
module.exports = router;