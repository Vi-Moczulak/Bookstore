// importuję expresa
const express = require('express');

// tworzę instancję expresa
const app = express();

// logger
const morgan = require('morgan');
app.use(morgan('combined'));

//body 
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// routy
const bookRoutes = require('./api/routes/books');
app.use('/books', bookRoutes);


app.use((req, res, next) => {
    res.status(404).json({ wiadomosc: 'Nie znaleziono' });
});

module.exports = app;