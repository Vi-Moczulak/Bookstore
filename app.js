// importuję zmienne środowiskowe
require('dotenv').config();

// importuję expresa
const express = require('express');

// tworzę instancję expresa
const app = express();

//
const mongoose = require('mongoose');
mongoose.connect(process.env.BD_LINK_PASS);

// logger
const morgan = require('morgan');
app.use(morgan('combined'));

//body 
const bodyParser = require('body-parser');
app.use(bodyParser.json()); 

// routy
const bookRoutes = require('./api/routes/books');
app.use('/books', bookRoutes);

const userRoutes = require('./api/routes/user');
app.use('/user', userRoutes);


app.use((req, res, next) => {
    res.status(404).json({ wiadomosc: 'Nie znaleziono' });
});

module.exports = app;
