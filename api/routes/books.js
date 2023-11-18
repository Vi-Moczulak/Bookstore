const express = require('express');
const router = express.Router();

const checkAuth = require('../middleware/checkAuth');

// importuję model książki
const Book = require('../models/book');

const BookController = require('../controllers/books');

router.get('/', BookController.books_get_all);

router.post('/', checkAuth, BookController.books_add_new);

router.get('/:bookId', BookController.books_get_by_id);

router.put('/:bookId', checkAuth, BookController.books_change);

router.delete('/:bookId', checkAuth, BookController.book_delete);

module.exports = router;
