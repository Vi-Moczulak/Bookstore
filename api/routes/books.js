const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({ wiadomosc: 'Lista wszystkich książek' });
});

router.post('/', (req, res, next) => {
    res.status(201).json({ wiadomosc: 'Dodanie nowej książki' });
});

router.get('/:bookId', (req, res, next) => {
    const id = req.params.bookId;
    res.status(200).json({ wiadomosc: 'Szczegóły książki o numerze ' + id });
});

router.put('/:bookId', (req, res, next) => {
    const id = req.params.bookId;
    res.status(200).json({ wiadomosc: 'Zmiana danych książki o numerze ' + id });
});

router.delete('/:bookId', (req, res, next) => {
    const id = req.params.bookId;
    res.status(200).json({ wiadomosc: 'Usunięto książki o numerze ' + id });
});

module.exports = router;

