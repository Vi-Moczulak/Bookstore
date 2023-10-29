const express = require('express');
const router = express.Router();

// importuję model książki
const Book = require('../models/book');

router.get('/', (req, res, next) => {
    Book.find()
        .then((result) => {
            res.status(200).json({
                wiadomosc: 'Lista wszystkich książek',
                info: result,
            });
        })
        .catch((err) => res.status(500).json(err));
});

router.post('/', (req, res, next) => {
    const book = new Book({
        author: req.body.author,
        title: req.body.title,
        price: req.body.price,
    });
    book
        .save()
        .then((result) => {
            res.status(201).json({
                wiadomosc: 'Dodanie nowej książki',
                info: result,
            });
        })
        .catch((err) => res.status(500).json(err));
});

router.get('/:bookId', (req, res, next) => {
    const id = req.params.bookId;
    Book.findById(id)
        .then((result) => {
            res.status(200).json({
                wiadomosc: 'Szczegóły książki o numerze ' + id,
                info: result,
            });
        })
        .catch((err) => res.status(500).json(err));
});

router.put('/:bookId', (req, res, next) => {
    const id = req.params.bookId;
    Book.findByIdAndUpdate(id, {
        author: req.body.author,
        title: req.body.title,
        price: req.body.price,
    })
        .then(() => {
            res
                .status(200)
                .json({ wiadomosc: 'Zmienono dane książki o numerze ' + id });
        })
        .catch((err) => res.status(500).json(err));
});

router.delete('/:bookId', (req, res, next) => {
    const id = req.params.bookId;
    Book.findByIdAndDelete(id)
        .then(() => {
            res.status(200).json({ wiadomosc: 'Usunięto książkę o numerze ' + id });
        })
        .catch((err) => res.status(500).json(err));
});

module.exports = router;

