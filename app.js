// importuję expresa
const express = require('express');

// tworzę instancję expresa
const app = express();

// routy
const bookRoutes = require('./api/routes/books');
app.use('/books', bookRoutes);


app.use((req, res, next) => {
    res.status(200).json({ wiadomosc: 'Wszystko śmiga' });
});

module.exports = app;